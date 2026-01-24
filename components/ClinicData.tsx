'use client';

import { useEffect, useState } from 'react';

interface StatProps {
  end: number;
  label: string;
  suffix?: string;
}

function AnimatedCounter({ end, label, suffix = '' }: StatProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepValue = end / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setCount(Math.floor(stepValue * currentStep));
      if (currentStep >= steps) {
        setCount(end);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
        {count}
        {suffix}
      </div>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
}

export default function ClinicData() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Impact & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Years of dedicated service to respiratory health and patient care
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <AnimatedCounter end={25000} label="Satisfied Patients" suffix="+" />
          <AnimatedCounter end={5000} label="COVID-19 Cases" suffix="+" />
          <AnimatedCounter end={10} label="Teaching Experience (yrs)" suffix="+" />
          <AnimatedCounter end={18} label="Experience (yrs)" suffix="+" />
          <AnimatedCounter end={500} label="Procedure Done" suffix="+" />
          <AnimatedCounter end={20} label="Hospitals Visiting Faculty" suffix="+" />
        </div>
      </div>
    </section>
  );
}
