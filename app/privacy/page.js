'use client';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <div className="page-container">
      <motion.div
        className="page-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="page-title">Privacy Policy</h1>
        <p className="page-description">
          We take your privacy seriously. Here is how FixMyPDF handles your data.
        </p>

        <div className="policy-section">
          <h4>1. Data Collection</h4>
          <p>We collect only essential data to provide our services. Uploaded files are auto-deleted after processing.</p>

          <h4>2. Third-Party Sharing</h4>
          <p>We never sell or share your data with third parties.</p>

          <h4>3. Cookies</h4>
          <p>Cookies are used for session handling and analytics only.</p>
        </div>
      </motion.div>
    </div>
  );
}
