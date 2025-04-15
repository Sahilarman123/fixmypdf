'use client';
import { motion } from 'framer-motion';
import { FiUpload, FiSettings, FiDownload } from 'react-icons/fi';

export default function HowItWorks() {
  const steps = [
    {
      icon: <FiUpload size={24} />,
      title: 'Upload Your PDF',
      description: 'Select your PDF file from your device or drag & drop it into the upload area.'
    },
    {
      icon: <FiSettings size={24} />,
      title: 'Choose Options',
      description: 'Select the conversion format or settings according to your needs.'
    },
    {
      icon: <FiDownload size={24} />,
      title: 'Download Result',
      description: 'Process your file and download the converted document instantly.'
    }
  ];

  return (
    <section className="how-section">
    <div className="container">
      <motion.div 
        className="how-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtext">
          Get your PDFs processed in three simple steps – no technical knowledge required.
        </p>
      </motion.div>
  
      <div className="how-grid">
        {steps.map((step, index) => (
          <motion.div 
            key={index}
            className="how-step"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="how-icon">{step.icon}</div>
  
            <div className="how-content">
              <h3 className="how-title">{step.title}</h3>
              <p className="how-desc">{step.description}</p>
            </div>
  
            {index < steps.length - 1 && (
              <div className="how-line" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  
  );
}