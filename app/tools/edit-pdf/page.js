'use client';
import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload, FiCheck, FiLoader } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function RotatePDF() {
  const [file, setFile] = useState(null);
  const [rotation, setRotation] = useState(90);
  const [isRotating, setIsRotating] = useState(false);
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

  const handleRotate = () => {
    if (!file) return;
    setIsRotating(true);

    setTimeout(() => {
      setIsRotating(false);
      setIsComplete(true);

      setTimeout(() => {
        const blob = new Blob(['rotated content'], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `rotated-${rotation}.pdf`;
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

  const rotationOptions = [90, 180, 270];

  return (
    <div className="bg-gray-50 py-12 min-h-[calc(100vh-13rem)]">
      <div className="container max-w-3xl mx-auto px-4">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Rotate PDF</h1>
          <p className="text-lg text-gray-600">Easily rotate pages in your PDF file by 90°, 180°, or 270°.</p>
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
                <h2 className="text-xl font-semibold mb-4">2. Select rotation angle</h2>
                <div className="grid grid-cols-3 gap-4">
                  {rotationOptions.map((angle) => (
                    <button
                      key={angle}
                      onClick={() => setRotation(angle)}
                      className={`p-4 rounded-lg border text-center transition-colors ${
                        rotation === angle
                          ? 'border-primary-500 bg-primary-50 text-primary-700'
                          : 'border-gray-200 hover:border-primary-300 hover:bg-primary-50'
                      }`}
                    >
                      Rotate {angle}°
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">3. Rotate your file</h2>
                <div className="flex flex-wrap gap-4">
                  {isComplete ? (
                    <button onClick={resetForm} className="btn btn-outline">
                      Rotate Another File
                    </button>
                  ) : (
                    <button onClick={handleRotate} disabled={isRotating} className="btn btn-primary">
                      {isRotating ? (
                        <>
                          <FiLoader className="animate-spin mr-2" />
                          Rotating...
                        </>
                      ) : (
                        <>Rotate {rotation}°</>
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
