'use client';
import { motion } from 'framer-motion';

export default function GuidesPage() {
  return (
    <div className="page-container">
      <motion.div
        className="page-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="page-title">Step-by-Step Guides</h1>
        <p className="page-description">
          Explore our guides to learn how to make the most of FixMyPDF tools.
        </p>

        <ul className="faq-list">
          <li><strong>Guide:</strong> How to Merge PDFs with FixMyPDF</li>
          <li><strong>Guide:</strong> Compressing Large Files for Email</li>
          <li><strong>Guide:</strong> Protecting a PDF with a Password</li>
        </ul>
      </motion.div>
    </div>
  );
}
