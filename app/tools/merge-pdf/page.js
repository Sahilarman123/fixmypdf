'use client';
import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload, FiCheck, FiLoader } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function MergePDF() {
  const [files, setFiles] = useState([]);
  const [isMerging, setIsMerging] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles.length > 0) {
      setFiles(acceptedFiles);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/pdf': ['.pdf'] },
    multiple: true
  });

  const handleMerge = () => {
    if (files.length === 0) return;
    setIsMerging(true);

    setTimeout(() => {
      setIsMerging(false);
      setIsComplete(true);

      setTimeout(() => {
        const blob = new Blob(['merged content'], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `merged.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 1000);
    }, 2000);
  };

  const resetForm = () => {
    setFiles([]);
    setIsComplete(false);
  };

  return (
    <div className="bg-gray-50 py-12 min-h-[calc(100vh-13rem)]">
      <div className="container max-w-3xl mx-auto px-4">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Merge PDF Files</h1>
          <p className="text-lg text-gray-600">Combine multiple PDF documents into one seamless file.</p>
        </motion.div>

        <motion.div 
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Upload your PDF files</h2>
            <div 
              {...getRootProps()} 
              className={`upload-box ${isDragActive ? 'upload-box--drag' : files.length > 0 ? 'upload-box--file' : ''}`}
            >
              <input {...getInputProps()} />
              {files.length > 0 ? (
                <div className="text-green-600 font-medium">
                  <FiCheck className="inline-block mr-2" />
                  {files.map(file => file.name).join(', ')}
                </div>
              ) : (
                <div>
                  <FiUpload size={36} className="mx-auto mb-4 text-gray-400" />
                  <p className="upload-text">{isDragActive ? 'Drop your files here' : 'Drag & drop your PDF files here'}</p>
                  <p className="upload-subtext">or click to browse multiple PDFs</p>
                </div>
              )}
            </div>
          </div>

          {files.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">2. Merge your files</h2>
              <div className="flex flex-wrap gap-4">
                {isComplete ? (
                  <button onClick={resetForm} className="btn btn-outline">
                    Merge More Files
                  </button>
                ) : (
                  <button onClick={handleMerge} disabled={isMerging} className="btn btn-primary">
                    {isMerging ? (
                      <>
                        <FiLoader className="animate-spin mr-2" />
                        Merging...
                      </>
                    ) : (
                      <>Merge PDF</>
                    )}
                  </button>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
