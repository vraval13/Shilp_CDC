"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Calendar, ChevronDown } from "lucide-react";
import TypedMsg from "./TypedMsg";
import Image from "next/image";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setActiveLink(window.location.pathname);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Top bar with contact info */}
      <div className="bg-blue-600 text-white hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10 text-sm">
            <div className="flex items-center gap-4">
              <Link href={'https://maps.app.goo.gl/rCrgm5E2uCFhfenT8'}>
              <span className="text-blue-100 hover:underline flex items-center gap-1">
                📍 304, Kshitij Aria, Opp Saviour Hospital, Sardar Patel Stadium Rd, Navrangpura, Ahmedabad, Gujarat 380009
              </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          isScrolled
            ? "shadow-lg border-b border-slate-200"
            : "shadow-sm border-b border-slate-100"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
                <Image
                  src="/logo.png"
                  alt="Shilp Chest Disease Centre"
                  width={280}
                  height={70}
                  className="h-16 lg:h-20 w-auto object-contain relative z-10 transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </Link>

            {/* Center - Typed Message (hidden on mobile and tablet) */}
            <div className="hidden xl:flex items-center justify-center flex-1 px-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800">
                  <TypedMsg
                    words={[
                      "Expert Care",
                      "Trust & Safety",
                      "Your Health First",
                      "Compassionate Service",
                    ]}
                    speed={80}
                    delayBetween={2500}
                  />
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg group ${
                    activeLink === link.href
                      ? "text-blue-600"
                      : "text-slate-700 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 ${
                      activeLink === link.href
                        ? "w-3/4"
                        : "w-0 group-hover:w-3/4"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl hover:bg-slate-100 transition-colors relative"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute left-0 top-1 w-6 h-0.5 bg-slate-700 transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 top-2.5" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-2.5 w-6 h-0.5 bg-slate-700 transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-4 w-6 h-0.5 bg-slate-700 transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 top-2.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              isMenuOpen ? "max-h-96 pb-6" : "max-h-0"
            }`}
          >
            <div className="space-y-2 pt-4 border-t border-slate-200">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.href);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    activeLink === link.href
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {link.label}
                  {activeLink === link.href && (
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
