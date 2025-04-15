'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="header">
  <div className="container header-inner">
    <Link href="/logo.svg" className="logo">FixMyPDF</Link>

    <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
      <ul className="nav-links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/tools">FixMyPDF</Link></li>
        <li><Link href="/pricing">Pricing</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li className="mobile-only"><Link href="/login">Login</Link></li>
        <li className="mobile-only">
          <Link href="/signup"><button className="btn btn-primary">Sign Up Free</button></Link>
        </li>
      </ul>
    </nav>

    <div className="auth-links">
      <Link href="/login" className="login-link">Login</Link>
      <Link href="/signup"><button className="btn btn-primary">Sign Up Free</button></Link>
    </div>

    <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
      {isMenuOpen ? '✕' : '☰'}
    </button>
  </div>
</header>
  
  );
}