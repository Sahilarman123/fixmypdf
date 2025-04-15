'use client';
import { motion } from 'framer-motion';

export default function HelpPage() {
  return (
    <div className="page-container">
      <motion.div
        className="page-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="page-title">Help Center</h1>
        <p className="page-description">
          Find answers to common questions about FixMyPDF tools and features.
        </p>

        <ul className="faq-list">
          <li><strong>How do I convert a PDF?</strong> → Use our Convert tool and choose output format.</li>
          <li><strong>Is my data secure?</strong> → Yes, files are auto-deleted after processing.</li>
          <li><strong>Do I need an account?</strong> → Only for premium limits and cloud history.</li>
        </ul>
      </motion.div>
    </div>
  );
}
