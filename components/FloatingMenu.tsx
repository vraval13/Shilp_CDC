'use client';

import { useState } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

export default function FloatingMenu() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/917698366026', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+917698366026';
  };

  return (
    <>
      {/* Floating Buttons Container */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
        {/* Main Action Buttons */}
        {isVisible && (
          <>
            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-secondary transition-colors animate-slide-up"
              aria-label="Scroll to top"
              title="Scroll to top"
            >
              <ArrowUp size={24} />
            </button>

            {/* WhatsApp */}
            <button
              onClick={handleWhatsApp}
              className="p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors animate-slide-up"
              aria-label="Chat on WhatsApp"
              title="Chat on WhatsApp"
            >
              <MessageCircle size={24} />
            </button>

            {/* Call */}
            <button
              onClick={handleCall}
              className="p-3 bg-accent text-accent-foreground rounded-full shadow-lg hover:opacity-90 transition-opacity animate-slide-up"
              aria-label="Call us"
              title="Call us now"
            >
              <Phone size={24} />
            </button>
          </>
        )}

        {/* Toggle Button */}
        <button
          onClick={toggleVisibility}
          className={`p-4 rounded-full shadow-lg transition-all ${
            isVisible
              ? 'bg-red-500 hover:bg-red-600 text-white'
              : 'bg-primary hover:bg-secondary text-primary-foreground'
          }`}
          aria-label="Toggle floating menu"
          title={isVisible ? 'Close menu' : 'Open menu'}
        >
          {isVisible ? (
            <span className="text-xl font-bold">✕</span>
          ) : (
            <Phone size={24} />
          )}
        </button>
      </div>

      {/* Floating Menu Label */}
      {!isVisible && (
        <div className="fixed bottom-24 right-6 z-40 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg text-sm font-semibold animate-pulse-custom">
          Need Help?
        </div>
      )}
    </>
  );
}
