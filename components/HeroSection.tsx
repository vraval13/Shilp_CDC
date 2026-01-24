'use client';

import Link from 'next/link';
import TypedMsg from './TypedMsg';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="text-primary-foreground py-20 md:py-32" style={{ backgroundImage: "url('/blurbgm.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">
              Comprehensive <br />
              <TypedMsg words={['Breathing', 'Chest Care', 'Respiratory Health']} speed={80} delayBetween={2000} />
            </h1>
            
            <p className="text-lg opacity-90 text-black">
              Expert pulmonology and respiratory health services by Dr. Gopal Raval. We provide comprehensive diagnosis and treatment for all chest and respiratory conditions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Book Appointment
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/services"
                className="text-black inline-flex items-center justify-center gap-2 border-2 border-black px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                Explore Services
              </Link>
            </div>

            <div className="pt-6 border-t border-primary-foreground/30">
              <p className="text-sm opacity-80 mb-3 text-black">Call for Emergency:</p>
              <p className="text-2xl font-bold text-black">+91 76983 66026</p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center md:block">
            <Image
              src="/dr1.png"
              alt="Dr. Gopal Raval"
              width={400}
              height={400}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
