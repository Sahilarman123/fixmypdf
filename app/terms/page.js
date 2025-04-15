'use client';
import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <div className="page-container">
      <motion.div
        className="page-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="page-title">Terms of Service</h1>
        <p className="page-description">
          By using FixMyPDF, you agree to the following terms and conditions.
        </p>

        <div className="policy-section">
          <h4>1. Usage</h4>
          <p>You are responsible for the content you upload. Do not use the tools for illegal purposes.</p>

          <h4>2. Service Availability</h4>
          <p>We strive for uptime, but do not guarantee uninterrupted service.</p>

          <h4>3. Modifications</h4>
          <p>We may update these terms anytime. Continued use = agreement.</p>
        </div>
      </motion.div>
    </div>
  );
}
