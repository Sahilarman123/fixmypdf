'use client';
import { motion } from 'framer-motion';

export default function PricingPage() {
  return (
    <div className="page-container">
      <motion.div
        className="page-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="page-title">Pricing Plans</h1>
        <p className="page-description">
          Choose a plan that fits your needs. Whether you're working with a few files or managing
          documents daily, FixMyPDF has the perfect plan for you.
        </p>

        <div className="pricing-cards">
          <div className="pricing-card">
            <h3>Free Plan</h3>
            <p className="price">$0/month</p>
            <ul>
              <li>• 3 files/day</li>
              <li>• Max 10MB per file</li>
              <li>• Basic tools access</li>
            </ul>
          </div>

          <div className="pricing-card recommended">
            <h3>Pro Plan</h3>
            <p className="price">$9.99/month</p>
            <ul>
              <li>• Unlimited files</li>
              <li>• Up to 500MB/file</li>
              <li>• All tools unlocked</li>
              <li>• Priority processing</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
