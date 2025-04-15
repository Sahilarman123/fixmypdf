'use client';
import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload, FiCheck, FiLoader } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function CompressPDF() {
  const [file, setFile] = useState(null);
  const [isConverting, setIsConverting] = useState(false);
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

  const handleCompress = () => {
    if (!file) return;
    setIsConverting(true);

    setTimeout(() => {
      setIsConverting(false);
      setIsComplete(true);

      setTimeout(() => {
        const blob = new Blob(['compressed content'], { type: 'application/octet-stream' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `compressed-file.pdf`;
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

  return (
    <div className="bg-gray-50 py-12 min-h-[calc(100vh-13rem)]">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Compress Your PDF</h1>
          <p className="text-lg text-gray-600">Reduce the file size of your PDF without compromising quality.</p>
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
                    className={`upload-box ${
                        isDragActive 
                        ? 'upload-box--drag' 
                        : file 
                            ? 'upload-box--file' 
                            : ''
                    }`}
                    >
              <input {...getInputProps()} />
              {file ? (
                <div className="flex items-center justify-center text-green-600">
                  <FiCheck size={24} className="mr-2" />
                  <span className="font-medium">{file.name}</span>
                </div>
              ) : (
                <div>
                  <FiUpload size={36} className="mx-auto mb-4 text-gray-400" />
                  <p className="upload-text">Drag & drop your PDF file here</p>
                  <p className="upload-subtext">or click to browse files</p>
                </div>
              )}
            </div>
          </div>

          {file && (
            <div>
              <h2 className="text-xl font-semibold mb-4">2. Compress your file</h2>
              <div className="flex flex-wrap gap-4">
                {isComplete ? (
                  <button onClick={resetForm} className="btn btn-outline">
                    Compress Another File
                  </button>
                ) : (
                  <button onClick={handleCompress} disabled={isConverting} className="btn btn-primary">
                    {isConverting ? (
                      <>
                        <FiLoader className="animate-spin mr-2" />
                        Compressing...
                      </>
                    ) : (
                      <>Compress PDF</>
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
