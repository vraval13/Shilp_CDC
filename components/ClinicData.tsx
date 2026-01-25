'use client';
import { useEffect, useState } from 'react';
import { Users, Heart, GraduationCap, Briefcase, Activity, Building2 } from 'lucide-react';

interface StatProps {
  end: number;
  label: string;
  suffix?: string;
  icon: React.ReactNode;
  delay?: number;
}

function AnimatedCounter({ end, label, suffix = '', icon, delay = 0 }: StatProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`stat-${label}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [label]);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const stepValue = end / steps;
      let currentStep = 0;

      const counter = setInterval(() => {
        currentStep++;
        setCount(Math.floor(stepValue * currentStep));
        
        if (currentStep >= steps) {
          setCount(end);
          clearInterval(counter);
        }
      }, duration / steps);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [end, delay, isVisible]);

  return (
    <div 
      id={`stat-${label}`}
      className="group relative bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
          <div className="text-blue-600">
            {icon}
          </div>
        </div>

        {/* Counter */}
        <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
          {count.toLocaleString()}
          {suffix}
        </div>

        {/* Label */}
        <p className="text-slate-600 text-sm font-medium leading-snug">
          {label}
        </p>
      </div>

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-600/10 to-transparent rounded-bl-full rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}

export default function ClinicData() {
  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50 to-white py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wide mb-4">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-blue-600"></div>
              <span>Our Track Record</span>
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-blue-600"></div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Our Impact & Expertise
          </h2>
          
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Years of dedicated service to respiratory health and patient care, backed by measurable results and unwavering commitment
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
            <div className="w-16 h-px bg-gradient-to-r from-blue-600 to-indigo-600"></div>
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"></div>
            <div className="w-16 h-px bg-gradient-to-l from-blue-600 to-indigo-600"></div>
            <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatedCounter 
            end={25000} 
            label="Satisfied Patients" 
            suffix="+" 
            icon={<Users className="w-6 h-6" />}
            delay={0}
          />
          <AnimatedCounter 
            end={5000} 
            label="COVID-19 Cases Managed" 
            suffix="+" 
            icon={<Heart className="w-6 h-6" />}
            delay={100}
          />
          <AnimatedCounter 
            end={10} 
            label="Years Teaching Experience" 
            suffix="+" 
            icon={<GraduationCap className="w-6 h-6" />}
            delay={200}
          />
          <AnimatedCounter 
            end={18} 
            label="Years Clinical Experience" 
            suffix="+" 
            icon={<Briefcase className="w-6 h-6" />}
            delay={300}
          />
          <AnimatedCounter 
            end={500} 
            label="Procedures Performed" 
            suffix="+" 
            icon={<Activity className="w-6 h-6" />}
            delay={400}
          />
          <AnimatedCounter 
            end={20} 
            label="Hospital Affiliations" 
            suffix="+" 
            icon={<Building2 className="w-6 h-6" />}
            delay={500}
          />
        </div>

        {/* Bottom accent */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-100">
            <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
            <p className="text-sm font-medium text-slate-700">
              Committed to excellence in respiratory healthcare since 2007
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
