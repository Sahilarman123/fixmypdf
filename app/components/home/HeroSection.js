'use client';
import { motion } from 'framer-motion';
import { FiFileText, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';


export default function HeroSection() {
  return (
    <section className="hero-section">
    <div className="container">
      <div className="hero-content">
        
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="hero-title">
            All the FixMyPDF you will ever need
          </h1>
          <p className="hero-subtext">
            Every tool you need to work with PDFs in one place. Convert, compress, sign and edit PDFs with our fast and secure online tool.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/tools/convert-pdf" className="hero-btn primary">
              <FiFileText /> Get Started
            </Link>
            <Link href="/tools" className="hero-btn secondary">
              View All Tools <FiArrowRight />
            </Link>
          </div>
        </motion.div>
  
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl transform rotate-3 scale-105 opacity-20" style={{
              background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)'
            }}></div>
            <Image 
              src="/hero-pdf.svg"
              alt="FixMyPDF"
              width={400}
              height={400}
              className="relative z-10 w-full max-w-md mx-auto"
            />
          </div>
        </motion.div>
  
      </div>
    </div>
  </section>
  
  );
}