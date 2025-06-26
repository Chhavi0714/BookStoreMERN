import React from 'react';
import { FaInstagram, FaPhoneAlt, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full bg-slate-600 text-slate-200 py-4 mt-10 border-t-2 border-slate-700 shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 space-y-3 md:space-y-0">
        <span className="text-lg font-bold text-sky-400">BookStore © 2025</span>
        <div className="flex gap-6">
          <a href="/" className="flex items-center gap-2 hover:text-sky-400 transition-colors duration-300">
            <FaPhoneAlt /> Contact Us
          </a>
          <a href="/" className="flex items-center gap-2 hover:text-pink-400 transition-colors duration-300">
            <FaInstagram /> Instagram
          </a>
          <a href="/" className="flex items-center gap-2 hover:text-red-500 transition-colors duration-300">
            <FaHeart /> Follow Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
