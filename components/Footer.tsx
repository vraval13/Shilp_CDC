"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Phone, Mail, MapPin, Clock, ArrowUpRight, Heart } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* About Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/logo1.png"
                alt="Shilp Chest Disease Centre"
                width={500}
                height={500}
                className="h-32 w-auto object-contain brightness-110"
                priority
              />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Expert pulmonology and respiratory health services provided by Dr.
              Gopal Raval with years of experience and dedication.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Explore
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact Us" },
                { href: "/", label: "Help & Support" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white text-sm flex items-center gap-2 group transition-all"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/services/1", label: "Pulmonary Function Test" },
                { href: "/services/2", label: "COPD Treatment" },
                { href: "/services/3", label: "Asthma Care" },
                { href: "/services/7", label: "Sleep Apnea" },
                { href: "/services/8", label: "Rehabilitation" },
              ].map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-slate-300 hover:text-white text-sm flex items-center gap-2 group transition-all"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      {service.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Contact Info
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></span>
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Phone size={16} className="text-blue-400" />
                </div>
                <div className="flex flex-col gap-1">
                  <a href="tel:+917698366026" className="text-slate-300 hover:text-white transition-colors">
                    +91 76983 66026
                  </a>
                  <a href="tel:+917929916026" className="text-slate-300 hover:text-white transition-colors">
                    +91 (079) 29916026
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3 group">
                <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Mail size={16} className="text-blue-400" />
                </div>
                <div className="flex flex-col gap-1">
                  <a href="mailto:shilpcdc@gmail.com" className="text-slate-300 hover:text-white transition-colors">
                    shilpcdc@gmail.com
                  </a>
                  <a href="mailto:raval_g@yahoo.com" className="text-slate-300 hover:text-white transition-colors">
                    raval_g@yahoo.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3 group">
                <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <MapPin size={16} className="text-blue-400 flex-shrink-0" />
                </div>
                <span className="text-slate-300 leading-relaxed">
                  304, Kshitij Aria, Opp Saviour Hospital, Sardar Patel Stadium
                  Rd, Navrangpura, Ahmedabad, Gujarat 380009
                </span>
              </li>

              <li className="flex items-start gap-3 group">
                <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Clock size={16} className="text-blue-400 flex-shrink-0" />
                </div>
                <div className="flex flex-col gap-1.5 text-slate-300">
                  <span><strong className="text-white">Mon-Fri:</strong> 12:30 PM - 6:30 PM</span>
                  <span><strong className="text-white">Saturday:</strong> 12:30 PM - 4:30 PM</span>
                  <span><strong className="text-white">Sunday:</strong> Emergency Only</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links - Highlighted Section */}
        <div className="mb-12 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-700/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold mb-2">Stay Connected</h4>
              <p className="text-slate-300 text-sm">Follow us on social media for health tips and updates</p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100071072530213"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 bg-[#4267B2] rounded-xl transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
                <ArrowUpRight className="absolute -top-1 -right-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 bg-[#1DA1F2] rounded-xl transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-400/50"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
                <ArrowUpRight className="absolute -top-1 -right-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://www.instagram.com/gopal.raval.315/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] rounded-xl transition-all hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
                <ArrowUpRight className="absolute -top-1 -right-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://www.linkedin.com/in/dr-gopal-raval-b2194139/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 bg-[#0077B5] rounded-xl transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-600/50"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
                <ArrowUpRight className="absolute -top-1 -right-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-12">
          <h4 className="text-xl font-bold mb-6 relative inline-block">
            Our Location
            <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></span>
          </h4>
          <div className="relative w-full h-80 bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4426590469357!2d72.55875447350844!3d23.04422751552323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85625d75d493%3A0xa3c4fcf3c51532ab!2sShilp%20Chest%20Disease%20Centre%20by%20Dr%20Gopal%20Raval!5e0!3m2!1sen!2sin!4v1718689908792!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <p>&copy; 2026 Shilp Chest Disease Centre. All rights reserved.</p>
            <p className="flex items-center gap-2">
              Created with <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" /> by{" "}
              <a
                href="https://vyomraval.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                Vyom Raval
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
