'use client';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Manager',
      content: 'This tool has saved me countless hours converting PDFs for our marketing materials. The interface is intuitive and the results are perfect every time.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Freelance Designer',
      content: 'As a designer, I need to work with PDFs daily. These tools have become essential for my workflow - fast, reliable, and very easy to use.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Teacher',
      content: 'I use the FixMyPDF to prepare materials for my students. The ability to quickly convert and compress files has made my job so much easier.',
      rating: 4
    }
  ];

  return (
    <section className="testimonials-section">
  <div className="container">
    <motion.div 
      className="testimonials-header"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title">What Our Users Say</h2>
      <p className="section-subtext">
        Thousands of professionals trust our tools every day to handle their PDF needs.
      </p>
    </motion.div>

    <div className="testimonials-grid">
      {testimonials.map((testimonial, index) => (
        <motion.div 
          key={index}
          className="testimonial-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="testimonial-stars">
            {[...Array(5)].map((_, i) => (
              <FiStar 
                key={i}
                className={i < testimonial.rating ? 'star-filled' : 'star-empty'}
                size={20}
              />
            ))}
          </div>
          <p className="testimonial-text">&quot;{testimonial.content}&quot;</p>
          <div className="testimonial-author">
            <p className="author-name">{testimonial.name}</p>
            <p className="author-role">{testimonial.role}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  );
}