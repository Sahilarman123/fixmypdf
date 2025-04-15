'use client';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="page-container">
      <motion.div
        className="page-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="page-title">About FixMyPDF</h1>
        <p className="page-description">
          FixMyPDF was built with a mission — to make working with PDFs as easy, fast, and powerful as possible.
        </p>

        <p className="about-text">
          We're a passionate team of developers and designers who believe that document tools should be simple, 
          efficient, and accessible to everyone. With users across the globe and millions of files processed,
          we're proud to offer a toolset that’s trusted and loved.
        </p>
      </motion.div>
    </div>
  );
}
