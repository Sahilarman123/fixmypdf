'use client';
import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload, FiCheck, FiUnlock, FiLoader } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function UnlockPDF() {
  const [file, setFile] = useState(null);
  const [password, setPassword] = useState('');
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/pdf': ['.pdf'] },
    maxFiles: 1,
  });

  const handleUnlock = () => {
    if (!file || !password) return;
    setIsUnlocking(true);

    setTimeout(() => {
      setIsUnlocking(false);
      setIsComplete(true);

      setTimeout(() => {
        const blob = new Blob(['unlocked content'], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `unlocked.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 1000);
    }, 2000);
  };

  const resetForm = () => {
    setFile(null);
    setPassword('');
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Unlock PDF</h1>
          <p className="text-lg text-gray-600">Remove password protection from your PDF file.</p>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Upload your protected PDF file</h2>
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
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">2. Enter password to unlock</h2>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded-lg p-3 text-gray-800"
                  placeholder="Enter current PDF password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">3. Unlock your file</h2>
                <div className="flex flex-wrap gap-4">
                  {isComplete ? (
                    <button onClick={resetForm} className="btn btn-outline">
                      Unlock Another File
                    </button>
                  ) : (
                    <button
                      onClick={handleUnlock}
                      disabled={isUnlocking || !password}
                      className="btn btn-primary"
                    >
                      {isUnlocking ? (
                        <>
                          <FiLoader className="animate-spin mr-2" />
                          Unlocking...
                        </>
                      ) : (
                        <>
                          <FiUnlock className="mr-2" />
                          Unlock PDF
                        </>
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
