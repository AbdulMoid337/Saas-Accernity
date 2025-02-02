"use client";

import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Accernity</h3>
          <p className="text-neutral-400 text-sm">
            Innovative solutions at the intersection of technology and creativity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-neutral-300 hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-neutral-300 hover:text-white transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-neutral-300 hover:text-white transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-neutral-300 hover:text-white transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            <Link 
              href="https://github.com/accernity" 
              target="_blank" 
              className="text-neutral-300 hover:text-white transition-colors"
            >
              <FaGithub size={24} />
            </Link>
            <Link 
              href="https://linkedin.com/company/accernity" 
              target="_blank" 
              className="text-neutral-300 hover:text-white transition-colors"
            >
              <FaLinkedin size={24} />
            </Link>
            <Link 
              href="https://twitter.com/accernity" 
              target="_blank" 
              className="text-neutral-300 hover:text-white transition-colors"
            >
              <FaTwitter size={24} />
            </Link>
            <Link 
              href="https://instagram.com/accernity" 
              target="_blank" 
              className="text-neutral-300 hover:text-white transition-colors"
            >
              <FaInstagram size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-neutral-800 mt-8 pt-6 text-center">
        <p className="text-neutral-400 text-sm">
          {currentYear} Accernity. All rights reserved.
        </p>
      </div>
    </footer>
  );
}