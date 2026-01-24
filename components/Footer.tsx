"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* About Section */}
          <div>
            <Image
              src="/logo1.png"
              alt="Shilp Chest Disease Centre"
              width={500}
              height={500}
              className="h-40 w-auto object-contain"
              priority
            />
            {/* <Link href="https://www.google.com/search?client=safari&rls=en&q=shilp+chest+disease+centre&ie=UTF-8&oe=UTF-8&sei=sx91afm2BMCxvr0PwLak0Qw&dlnr=1">
              <h3 className="text-lg font-bold mb-4">
                Shilp Chest Disease Centre By Dr Gopal Raval
              </h3>
            </Link> */}
            <p className="text-sm opacity-80 mt-2">
              Expert pulmonology and respiratory health services provided by Dr.
              Gopal Raval with years of experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-accent transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-accent transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-accent transition-colors"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Help & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/1"
                  className="hover:text-accent transition-colors"
                >
                  PFT
                </Link>
              </li>
              <li>
                <Link
                  href="/services/2"
                  className="hover:text-accent transition-colors"
                >
                  COPD
                </Link>
              </li>
              <li>
                <Link
                  href="/services/3"
                  className="hover:text-accent transition-colors"
                >
                  Asthma
                </Link>
              </li>
              <li>
                <Link
                  href="/services/7"
                  className="hover:text-accent transition-colors"
                >
                  Sleep Apnea
                </Link>
              </li>
              <li>
                <Link
                  href="/services/8"
                  className="hover:text-accent transition-colors"
                >
                  Rehabilitation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5" />
                <span>+91 76983 66026</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5" />
                <span>+91 (079) 29916026</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5" />
                <span>shilpcdc@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5" />
                <span>raval_g@yahoo.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5" />
                <span>
                  304, Kshitij Aria, Opp Saviour Hospital, Sardar Patel Stadium
                  Rd, near Stadium Petrol Pump, Navrangpura, Ahmedabad, Gujarat
                  380009
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-0.5" />
                <span>Weekdays (Mon-Fri): 12:30 PM - 6:30 PM</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-0.5" />
                <span>Weekends (Sat): 12:30 PM - 4:30 PM</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-0.5" />
                <span>Sunday: Only Emergency</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100071072530213"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white rounded-full transition-colors hover:bg-white hover:text-[black]"
                style={{ backgroundColor: "#4267B2" }}
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white rounded-full transition-colors hover:bg-white hover:text-[black]"
                style={{ backgroundColor: "#1DA1F2" }}
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/gopal.raval.315/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white rounded-full transition-colors hover:bg-white hover:text-[black]"
                style={{ backgroundColor: "#E1306C" }}
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/dr-gopal-raval-b2194139/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white rounded-full transition-colors hover:bg-white hover:text-[black]"
                style={{ backgroundColor: "#0077B5" }}
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-4">Our Location</h4>
          <div className="w-full h-64 bg-white/10 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4426590469357!2d72.55875447350844!3d23.04422751552323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85625d75d493%3A0xa3c4fcf3c51532ab!2sShilp%20Chest%20Disease%20Centre%20by%20Dr%20Gopal%20Raval!5e0!3m2!1sen!2sin!4v1718689908792!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center text-sm">
          <p>&copy; 2024 Shilp Chest Disease Centre. All rights reserved.</p>
          <p className="mt-2 opacity-75">
            Created with ❤️ by{" "}
            <a
              href="https://vyomraval.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              Vyom Raval
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
