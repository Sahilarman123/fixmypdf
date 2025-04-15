import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="grid grid-cols-1 md-grid-cols-3 lg-grid-cols-4 gap-8">
          <div style={{ gridColumn: 'span 1 / span 1' }}>
            <h3>FixMyPDF</h3>
            <p style={{ color: 'var(--gray-400)', marginBottom: '1.5rem', maxWidth: '25rem' }}>
              The best online tools to work with PDFs. Convert, compress, merge and edit PDFs with ease.
            </p>
            <div className="flex gap-4">
              <a href="#" style={{ color: 'var(--gray-400)' }}>
                <span>Twitter</span>
              </a>
              <a href="#" style={{ color: 'var(--gray-400)' }}>
                <span>Facebook</span>
              </a>
              <a href="#" style={{ color: 'var(--gray-400)' }}>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3>Product</h3>
            <ul>
              <li>
                <Link href="/tools">FixMyPDF</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3>Resources</h3>
            <ul>
              <li>
                <Link href="/help">Help Center</Link>
              </li>
              <li>
                <Link href="/api">API Documentation</Link>
              </li>
              <li>
                <Link href="/guides">Guides</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3>Company</h3>
            <ul>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid var(--gray-700)', marginTop: '3rem', paddingTop: '2rem', textAlign: 'center', color: 'var(--gray-400)' }}>
          <p>© {new Date().getFullYear()} FixMyPDF. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}