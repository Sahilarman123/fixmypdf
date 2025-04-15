'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
    FiFileText, FiImage, FiLock, FiUnlock, 
    FiFilePlus, FiSliders, FiRotateCw, FiEdit
  } from 'react-icons/fi';

const tools = [
  {
    id: 'convert-pdf',
    name: 'Convert PDF',
    description: 'Convert PDFs to Word, Excel, PPT, and more',
    icon: <FiFileText size={24} />,
    color: 'bg-blue-100 text-blue-600',
    link: '/tools/convert-pdf'
  },
  {
    id: 'pdf-to-image',
    name: 'PDF to Image',
    description: 'Turn PDF pages into JPG or PNG images',
    icon: <FiImage size={24} />,
    color: 'bg-green-100 text-green-600',
    link: '/tools/pdf-to-image'
  },
  {
    id: 'compress-pdf',
    name: 'Compress PDF',
    description: 'Reduce file size while optimizing quality',
    icon: <FiFileText size={24} />,
    color: 'bg-yellow-100 text-yellow-600',
    link: '/tools/compress-pdf'
  },
  {
    id: 'merge-pdf',
    name: 'Merge PDF',
    description: 'Combine multiple PDFs into one document',
    icon: <FiFilePlus size={24} />,
    color: 'bg-purple-100 text-purple-600',
    link: '/tools/merge-pdf'
  },
  {
    id: 'split-pdf',
    name: 'Split PDF',
    description: 'Extract pages from your PDF files',
    icon: <FiSliders size={24} />,
    color: 'bg-indigo-100 text-indigo-600',
    link: '/tools/split-pdf'
  },
  {
    id: 'rotate-pdf',
    name: 'Rotate PDF',
    description: 'Rotate PDF pages to correct orientation',
    icon: <FiRotateCw size={24} />,
    color: 'bg-pink-100 text-pink-600',
    link: '/tools/rotate-pdf'
  },
  {
    id: 'protect-pdf',
    name: 'Protect PDF',
    description: 'Encrypt PDFs with a password',
    icon: <FiLock size={24} />,
    color: 'bg-red-100 text-red-600',
    link: '/tools/protect-pdf'
  },
  {
    id: 'edit-pdf',
    name: 'Edit PDF',
    description: 'Add text, images and shapes to PDFs',
    icon: <FiEdit size={24} />,
    color: 'bg-teal-100 text-teal-600',
    link: '/tools/edit-pdf'
  },
];

export default function ToolsGrid() {
  return (
    <section className="tools-section">
    <div className="container">
      <motion.div 
        className="tools-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Popular FixMyPDF</h2>
        <p className="section-subtext">
          All the tools you need to work with PDFs in one place. Fast, secure, and easy to use.
        </p>
      </motion.div>
  
      <div className="tools-grid">
        {tools.map((tool, index) => (
          <motion.div 
            key={tool.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={tool.link} className="tool-card">
              <div className={`tool-icon ${tool.color}`}>
                {tool.icon}
              </div>
              <h3 className="tool-title">{tool.name}</h3>
              <p className="tool-desc">{tool.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>
  
      <div className="tools-footer">
        <Link href="/tools" className="btn btn-primary">
          See All Tools
        </Link>
      </div>
    </div>
  </section>
  
  );
}