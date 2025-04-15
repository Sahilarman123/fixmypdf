'use client';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <div className="page-container">
      <motion.div
        className="page-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="page-title">Contact Us</h1>
        <p className="page-description">
          Need help or have a business inquiry? Reach out to us below.
        </p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </motion.div>
    </div>
  );
}
