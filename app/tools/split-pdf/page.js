'use client';
import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload, FiCheck, FiLoader } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function SplitPDF() {
  const [file, setFile] = useState(null);
  const [splitOption, setSplitOption] = useState('each-page');
  const [isSplitting, setIsSplitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/pdf': ['.pdf'] },
    maxFiles: 1
  });

  const handleSplit = () => {
    if (!file) return;
    setIsSplitting(true);

    setTimeout(() => {
      setIsSplitting(false);
      setIsComplete(true);

      setTimeout(() => {
        const blob = new Blob(['split content'], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `split-page-1.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 1000);
    }, 2000);
  };

  const resetForm = () => {
    setFile(null);
    setIsComplete(false);
  };

  const splitOptions = [
    { value: 'each-page', label: 'Split every page' },
    { value: 'range', label: 'Split by range (e.g. 1-3, 4-6)' },
    { value: 'every-x', label: 'Split every X pages' },
  ];

  return (
    <div className="bg-gray-50 py-12 min-h-[calc(100vh-13rem)]">
      <div className="container max-w-3xl mx-auto px-4">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Split PDF File</h1>
          <p className="text-lg text-gray-600">Break a PDF into multiple parts by page or range.</p>
        </motion.div>

        <motion.div 
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Upload your PDF file</h2>
            <div 
              {...getRootProps()} 
              className={`upload-box ${isDragActive ? 'upload-box--drag' : file ? 'upload-box--file' : ''}`}
            >
              <input {...getInputProps()} />
              {file ? (
                <div className="text-green-600 font-medium">
                  <FiCheck className="inline-block mr-2" />
                  {file.name}
                </div>
              ) : (
                <div>
                  <FiUpload size={36} className="mx-auto mb-4 text-gray-400" />
                  <p className="upload-text">{isDragActive ? 'Drop your file here' : 'Drag & drop your PDF file here'}</p>
                  <p className="upload-subtext">or click to browse files</p>
                </div>
              )}
            </div>
          </div>

          {file && (
            <>
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">2. Choose how to split</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {splitOptions.map(option => (
                    <button
                      key={option.value}
                      onClick={() => setSplitOption(option.value)}
                      className={`p-4 rounded-lg border transition-colors text-center ${
                        splitOption === option.value
                          ? 'border-primary-500 bg-primary-50 text-primary-700'
                          : 'border-gray-200 hover:border-primary-300 hover:bg-primary-50'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">3. Split your file</h2>
                <div className="flex flex-wrap gap-4">
                  {isComplete ? (
                    <button onClick={resetForm} className="btn btn-outline">
                      Split Another File
                    </button>
                  ) : (
                    <button onClick={handleSplit} disabled={isSplitting} className="btn btn-primary">
                      {isSplitting ? (
                        <>
                          <FiLoader className="animate-spin mr-2" />
                          Splitting...
                        </>
                      ) : (
                        <>Split PDF</>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
