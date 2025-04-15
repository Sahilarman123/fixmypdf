'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiEye, FiEyeOff, FiLock, FiMail, FiUser } from 'react-icons/fi';
import Link from 'next/link';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="register-container">
      <motion.div
        className="register-box"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="register-title">Create your FixMyPDF account</h2>

        <form className="register-form">
          {/* Full Name */}
          <div className="form-group">
            <label>Full Name</label>
            <div className="input-group">
              <FiUser className="input-icon" />
              <input type="text" placeholder="John Doe" />
            </div>
          </div>

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
              <input type={showPassword ? 'text' : 'password'} placeholder="Create password" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="icon-toggle"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label>Confirm Password</label>
            <div className="input-group">
              <FiLock className="input-icon" />
              <input type={showConfirm ? 'text' : 'password'} placeholder="Confirm password" />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="icon-toggle"
              >
                {showConfirm ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          <button type="submit" className="register-button">Register</button>
        </form>

        <p className="register-footer">
          Already have an account?{' '}
          <Link href="/login" className="register-link">Login</Link>
        </p>
      </motion.div>
    </div>
  );
}
