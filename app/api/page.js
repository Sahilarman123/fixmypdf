'use client';
import { motion } from 'framer-motion';

export default function APIPage() {
  return (
    <div className="page-container">
      <motion.div
        className="page-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="page-title">API Documentation</h1>
        <p className="page-description">
          Integrate FixMyPDF into your product or workflow with our simple RESTful API.
        </p>

        <div className="code-block">
          <h4>Sample Request</h4>
          <pre>
            {`POST https://api.fixmypdf.com/convert
            Headers: Authorization: Bearer YOUR_API_KEY

            {
            "file_url": "https://example.com/file.pdf",
            "output": "docx"
            }`}
          </pre>
        </div>
      </motion.div>
    </div>
  );
}
