'use client';

import { Clock, AlertCircle } from 'lucide-react';

export default function TimingInfo() {
  return (
    <section className="bg-muted py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 24/7 Emergency */}
          <div className="flex items-center gap-4 bg-accent/10 p-6 rounded-lg border border-accent/30">
            <div className="p-3 bg-accent rounded-full">
              <AlertCircle className="text-accent-foreground" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-foreground">24 HOURS SERVICE</h3>
              <p className="text-sm text-muted-foreground">Emergency Admit at STERLING HOSPITAL | HCG HOSPITAL | AVRON HOSPITAL | SHAILYA HOSPITAL | JIVRAJ MEHTA HOSPITAL</p>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="flex items-center gap-4 bg-primary/10 p-6 rounded-lg border border-primary/30">
            <div className="p-3 bg-primary rounded-full">
              <Clock className="text-primary-foreground" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-foreground">OPENING HOURS</h3>
              <p className="text-sm text-muted-foreground">Monday - Friday : 11:30 AM to 6:30 PM<br />Saturday : 11:30 AM to 4:30 PM<br />Sunday : Only Emergency</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
