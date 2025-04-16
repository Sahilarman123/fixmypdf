'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiFileText, FiArrowRight } from 'react-icons/fi';

export default function HeroSection() {
  return (
    <section className="hero-demo">
      <div className="container hero-grid">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Work with PDFs effortlessly</h1>
          <p>All-in-one toolkit to convert, compress, edit & organize your PDFs online.</p>
          <div className="hero-btns">
            <Link href="/tools/convert-pdf" className="btn btn-gradient">
              <FiFileText /> Get Started
            </Link>
            <Link href="/tools" className="btn btn-outline">
              View All Tools <FiArrowRight />
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="hero-img"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img src="/hero-pdf.svg" alt="FixMyPDF" />
        </motion.div>
      </div>
    </section>
  );
}
