'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiEye, FiEyeOff, FiLock, FiMail } from 'react-icons/fi';
import Link from 'next/link';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <motion.div
        className="login-box"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="login-title">Login to FixMyPDF</h2>

        <form className="login-form">
          {/* Email */}
          <div className="form-group">
            <label>Email</label>
            <div className="input-group">
              <FiMail className="input-icon" />
              <input type="email" placeholder="you@example.com" />
            </div>
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password</label>
            <div className="input-group">
              <FiLock className="input-icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="icon-toggle"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <p className="login-footer">
          Don’t have an account?{' '}
          <Link href="/register" className="login-link">Register</Link>
        </p>
      </motion.div>
    </div>
  );
}
