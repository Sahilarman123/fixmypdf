'use client';
import { useState, useRef, useEffect } from 'react';
import { FiUpload, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function PDFViewer() {
  const [file, setFile] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);
  
  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
      setPageNumber(1);
      renderPDF(files[0], 1);
    }
  };
  
  const handleFileDrop = (event) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      const droppedFile = event.dataTransfer.files[0];
      if (droppedFile.type === 'application/pdf') {
        setFile(droppedFile);
        setPageNumber(1);
        renderPDF(droppedFile, 1);
      }
    }
  };
  
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const goToPrevPage = () => {
    if (pageNumber > 1) {
      const newPageNumber = pageNumber - 1;
      setPageNumber(newPageNumber);
      if (file) renderPDF(file, newPageNumber);
    }
  };

  const goToNextPage = () => {
    if (pageNumber < (numPages || 0)) {
      const newPageNumber = pageNumber + 1;
      setPageNumber(newPageNumber);
      if (file) renderPDF(file, newPageNumber);
    }
  };

  const renderPDF = async (file, pageNum) => {
    setIsLoading(true);
    
    try {
      if (!window.pdfjsLib) {
        console.error("PDF.js library not loaded");
        return;
      }
      
      const fileReader = new FileReader();
      
      fileReader.onload = async function() {
        const typedarray = new Uint8Array(this.result);
        
        try {
          const loadingTask = window.pdfjsLib.getDocument(typedarray);
          const pdf = await loadingTask.promise;
          
          setNumPages(pdf.numPages);
          
          const page = await pdf.getPage(pageNum);
          
          const canvas = canvasRef.current;
          if (!canvas) return;
          
          const context = canvas.getContext('2d');
          if (!context) return;
          
          const viewport = page.getViewport({ scale: 1.5 });
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          
          const renderContext = {
            canvasContext: context,
            viewport: viewport
          };
          
          await page.render(renderContext).promise;
          setIsLoading(false);
          
        } catch (error) {
          console.error('Error rendering PDF:', error);
          setIsLoading(false);
        }
      };
      
      fileReader.readAsArrayBuffer(file);
      
    } catch (error) {
      console.error('Error loading PDF:', error);
      setIsLoading(false);
    }
  };

  return (
    <div className="pdf-viewer-container">
      <div className="pdf-viewer-header">
        <h2>PDF Viewer</h2>
        {file && (
          <div className="flex gap-2">
            <button className="btn btn-outline" onClick={handleUploadClick}>
              Upload New
            </button>
          </div>
        )}
      </div>
      
      {!file ? (
        <div 
          className="file-upload-container"
          onClick={handleUploadClick}
          onDrop={handleFileDrop}
          onDragOver={handleDragOver}
        >
          <div className="file-upload-icon">
            <FiUpload />
          </div>
          <p className="file-upload-text">Click or drag & drop to upload PDF</p>
          <p>Supported format: PDF</p>
          <input 
            ref={fileInputRef}
            type="file" 
            accept="application/pdf" 
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </div>
      ) : (
        <>
          <div className="file-info">
            <strong>Filename:</strong> {file.name}
            {numPages && <span> | <strong>Pages:</strong> {numPages}</span>}
          </div>
          
          <div className="canvas-container">
            {isLoading ? (
              <div className="loading">Loading PDF...</div>
            ) : (
              <canvas ref={canvasRef} className="pdf-canvas"></canvas>
            )}
          </div>
          
          {numPages > 1 && (
            <div className="pagination-controls">
              <button 
                className="btn btn-outline"
                onClick={goToPrevPage} 
                disabled={pageNumber <= 1}
              >
                <FiChevronLeft /> Previous
              </button>
              
              <span className="page-number">
                Page {pageNumber} of {numPages}
              </span>
              
              <button 
                className="btn btn-outline"
                onClick={goToNextPage} 
                disabled={pageNumber >= numPages}
              >
                Next <FiChevronRight />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}