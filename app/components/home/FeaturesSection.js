'use client';
import { motion } from 'framer-motion';
import { FiShield, FiZap, FiSmartphone, FiGlobe } from 'react-icons/fi';

export default function FeaturesSection() {
  const features = [
    {
      icon: <FiZap size={24} />,
      title: 'Lightning Fast',
      description: 'Process your PDFs in seconds with our optimized cloud infrastructure.'
    },
    {
      icon: <FiShield size={24} />,
      title: 'Secure & Private',
      description: 'Your files are automatically deleted after processing. We never share your data.'
    },
    {
      icon: <FiSmartphone size={24} />,
      title: 'Works Everywhere',
      description: 'Use our tools on any device - desktop, tablet, or mobile.'
    },
    {
      icon: <FiGlobe size={24} />,
      title: 'No Installation',
      description: 'Everything works in your browser. No software to download or install.'
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <motion.div 
          className="features-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Why Choose Our FixMyPDF</h2>
          <p className="section-subtext">
            Powerful, easy-to-use, and accessible to everyone. Our tools make working with PDFs a breeze.
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
}