"use client";

import { Phone, Mail, Clock, Calendar } from "lucide-react";
import Link from "next/link";

export default function ClinicInfo() {
  return (
    <>
      <div className="bg-primary text-primary-foreground py-3 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center md:text-left">
            {/* Phone */}
            <button
              onClick={() => window.location.href = 'tel:+917698366026'}
              className="flex items-center justify-center md:justify-start gap-2 hover:opacity-80 transition-opacity"
            >
              <Phone size={18} />
              <span className="text-sm font-medium">+91 76983 66026 | +91 (079) 2991 6026</span>
            </button>

            {/* Hours */}
            <div className="flex items-center justify-center gap-2">
              <Clock size={18} />
              <span className="text-sm font-medium">
                Clinic Hours: Mon-Sat: 11:30 AM - 6:30 PM
              </span>
            </div>

            {/* Email */}
            <button
              onClick={() => window.location.href = 'mailto:shilpcdc@gmail.com'}
              className="flex items-center justify-center md:justify-end gap-2 hover:opacity-80 transition-opacity"
            >
              <Mail size={18} />
              <span className="text-sm font-medium">shilpcdc@gmail.com</span>
            </button>

            {/* Book Appointment */}
            <Link
              href="/contact"
              className="flex items-center justify-center"
            >
              <button className="rounded-2xl bg-white text-black flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer"><Calendar size={18} /><span className="text-sm font-medium">Book An Appointment</span></button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
