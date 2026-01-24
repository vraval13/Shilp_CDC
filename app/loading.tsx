'use client';

import Header from '@/components/Header';
import ClinicInfo from '@/components/ClinicInfo';

export default function Loading() {
  return (
    <main>
      <Header />
      <ClinicInfo />

      <section className="min-h-96 flex items-center justify-center bg-background">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Spinner */}
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 border-4 border-border rounded-full" />
            <div className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent animate-spin" />
          </div>

          {/* Loading Text */}
          <div className="text-center space-y-2">
            <p className="text-lg font-semibold text-foreground">Loading...</p>
            <p className="text-sm text-muted-foreground">Please wait while we prepare your content</p>
          </div>

          {/* Loading Animation Dots */}
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-primary rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
