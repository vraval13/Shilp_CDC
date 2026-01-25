import React from 'react';
import Image from 'next/image';
import { Award, Users, Calendar } from 'lucide-react';

const AchievementSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white py-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Award className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Recent Achievement
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Content Card */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12">
            {/* Event Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-8">
              <Calendar className="w-4 h-4" />
              <span>IMA NATCON 2025 - 100th Edition</span>
            </div>

            {/* Description */}
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <p className="text-lg md:text-xl font-medium text-slate-900">
                I'm honored to be presenting my latest research at the landmark 100th IMA NATCON 2025! 🩺
              </p>
              
              <p className="text-base md:text-lg">
                My poster focuses on <span className="font-semibold text-slate-900">Cholesterol Granuloma</span>, a frequently overlooked cause of benign lung lesions. In clinical practice, distinguishing these from more common granulomatous diseases is crucial to avoid unnecessary interventions and ensure accurate diagnosis.
              </p>
              
              <p className="text-base md:text-lg">
                It's been an incredible experience sharing insights with the brightest minds in the medical community and celebrating a century of the Indian Medical Association's legacy.
              </p>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-8 border-t border-slate-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">100th</div>
                <div className="text-sm text-slate-600 font-medium">Edition</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-1">IMA</div>
                <div className="text-sm text-slate-600 font-medium">NATCON 2025</div>
              </div>
              <div className="text-center">
                <Users className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                <div className="text-sm text-slate-600 font-medium">Medical Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Images Gallery */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Poster Image */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white p-3 rounded-2xl shadow-xl">
                <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
                  <Image
                    src="/poster-1.png"
                    alt="Research Poster on Cholesterol Granuloma presented at IMA NATCON 2025"
                    width={400}
                    height={600}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm font-semibold text-slate-900">Research Poster</p>
                  <p className="text-xs text-slate-600 mt-1">Cholesterol Granuloma Study</p>
                </div>
              </div>
            </div>

            {/* Certificate Image */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white p-3 rounded-2xl shadow-xl">
                <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
                  <Image
                    src="/worldrecord-certificate.png"
                    alt="World Record Certificate from IMA NATCON 2025"
                    width={400}
                    height={600}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm font-semibold text-slate-900">Achievement Certificate</p>
                  <p className="text-xs text-slate-600 mt-1">World Record Recognition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;