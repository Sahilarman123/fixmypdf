'use client';
import { motion } from 'framer-motion';

export default function BlogPage() {
  return (
    <div className="page-container">
      <motion.div
        className="page-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="page-title">Latest from Our Blog</h1>
        <p className="page-description">Get tips, updates, and tutorials on working smarter with PDFs.</p>

        <div className="blog-list">
          <div className="blog-card">
            <h3>5 Hacks to Boost Your PDF Productivity</h3>
            <p>Learn how to merge, split, and convert files faster than ever.</p>
            <a href="#">Read more →</a>
          </div>
          <div className="blog-card">
            <h3>Why Compressing PDFs Matters in 2024</h3>
            <p>Reduce size without losing quality. Perfect for email & uploads.</p>
            <a href="#">Read more →</a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
