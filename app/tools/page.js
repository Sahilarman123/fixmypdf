'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
    FiFileText, FiImage, FiLock, FiUnlock, 
    FiFilePlus, FiSliders, FiRotateCw, FiEdit
  } from 'react-icons/fi';

const tools = [
  {
    name: 'Convert PDF',
    description: 'Convert PDFs to Word, Excel, PPT & more',
    icon: <FiFileText />,
    link: '/tools/convert-pdf',
  },
  {
    name: 'PDF to Image',
    description: 'Turn PDF pages into JPG/PNG',
    icon: <FiImage />,
    link: '/tools/pdf-to-image',
  },
  {
    name: 'Compress PDF',
    description: 'Reduce PDF file size smartly',
    icon: <FiFileText />,
    link: '/tools/compress-pdf',
  },
  {
    name: 'Merge PDF',
    description: 'Combine multiple PDFs into one',
    icon: <FiFilePlus />,
    link: '/tools/merge-pdf',
  },
  {
    name: 'Split PDF',
    description: 'Extract pages from a PDF',
    icon: <FiSliders />,
    link: '/tools/split-pdf',
  },
  {
    name: 'Rotate PDF',
    description: 'Fix page orientation easily',
    icon: <FiRotateCw />,
    link: '/tools/rotate-pdf',
  },
  {
    name: 'Edit PDF',
    description: 'Add text, images & shapes',
    icon: <FiEdit />,
    link: '/tools/edit-pdf',
  },
  {
    name: 'Protect PDF',
    description: 'Encrypt PDFs with a password',
    icon: <FiLock />,
    link: '/tools/protect-pdf',
  },
  {
    name: 'Unlock PDF',
    description: 'Remove password protection',
    icon: <FiUnlock />,
    link: '/tools/unlock-pdf',
  },
];

export default function ToolsPage() {
  return (
    <div className="page-container">
      <motion.div
        className="page-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="page-title">All PDF Tools</h1>
        <p className="page-description">
          Work smarter with all-in-one tools for PDFs. Pick what you need below:
        </p>

        <div className="tools-grid">
          {tools.map((tool, index) => (
            <Link href={tool.link} key={index} className="tool-card">
              <div className="tool-icon">{tool.icon}</div>
              <div>
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
