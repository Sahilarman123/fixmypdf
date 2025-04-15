'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqs = [
    {
      question: 'Are my files secure?',
      answer: 'Yes, absolutely. Your files are encrypted during transfer and automatically deleted from our servers after processing. We never access or share your files with third parties.'
    },
    {
      question: 'Do I need to create an account?',
      answer: 'No, you can use our basic FixMyPDF without creating an account. However, creating a free account gives you benefits like higher file size limits and access to your conversion history.'
    },
    {
      question: 'What are the file size limits?',
      answer: 'Free users can upload files up to 10MB in size. Premium users can upload files up to 500MB.'
    },
    {
      question: 'Is there a limit to how many files I can process?',
      answer: 'Free users can process up to 3 files per day. Premium users have unlimited conversions.'
    },
    {
      question: 'Which platforms are supported?',
      answer: 'Our tools work on all modern browsers and devices, including Windows, macOS, iOS, Android, and Linux.'
    }
  ];

  return (
    <section className="faq-section">
  <div className="container">
    <motion.div 
      className="faq-header"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title">Frequently Asked Questions</h2>
      <p className="section-subtext">
        Find answers to common questions about our FixMyPDF.
      </p>
    </motion.div>

    <div className="faq-list">
      {faqs.map((faq, index) => (
        <motion.div 
          key={index}
          className={`faq-item ${openIndex === index ? 'open' : ''}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <button 
            className="faq-question"
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
          >
            <h3>{faq.question}</h3>
            {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
          </button>

          {openIndex === index && (
            <div className="faq-answer">
              {faq.answer}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  </div>
</section>

  );
}