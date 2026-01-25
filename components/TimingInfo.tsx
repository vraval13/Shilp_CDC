"use client";
import { Clock, AlertCircle, Calendar, Building2 } from "lucide-react";

export default function TimingInfo() {
  return (
    <section className="relative bg-white py-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-4 py-2 mb-4">
            {/* <Clock className="w-4 h-4 text-blue-400" /> */}
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              Availability
            </h2>
          
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3 mt-2">
            When We're Available for You
          </h2>
          {/* <p className="text-slate-400 max-w-2xl mx-auto">
            Flexible hours and emergency services to meet your healthcare needs
          </p> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* 24/7 Emergency Card */}
          <div className="group relative">
            {/* Glow effect */}
            <div className="absolute -inset-0.5 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>

            <div className="relative rounded-2xl p-8 border border-slate-700 hover:border-red-500/50 transition-all duration-300">
              {/* Header with icon */}
              <div className="flex items-start gap-4 mb-6">
                {/* <div className="relative">
                  <div className="absolute inset-0 bg-red-500 rounded-2xl blur-md opacity-50"></div>
                  <div className="relative p-4 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl">
                    <AlertCircle className="text-white" size={28} />
                  </div>
                </div> */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-xl text-black">
                      24/7 Emergency Service
                    </h3>
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 font-medium">
                    Available Round the Clock
                  </p>
                </div>
              </div>

              {/* Hospital list */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-black-400">
                  <Building2 className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span className="text-sm font-medium">
                    Emergency Admissions Available At:
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-2 pl-6">
                  {[
                    "Sterling Hospital",
                    "HCG Hospital",
                    "Avron Hospital",
                    "Shailya Hospital",
                    "Jivraj Mehta Hospital",
                  ].map((hospital, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-black-400 hover:text-black transition-colors duration-200"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                      <span className="text-sm">{hospital}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom badge */}
              <div className="mt-6 pt-6 border-t border-slate-700">
                <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                  <span className="text-xs font-semibold text-red-400 uppercase tracking-wide">
                    Always Available
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours Card */}
          <div className="group relative">
            {/* Glow effect */}
            <div className="absolute -inset-0.5 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>

            <div className="relative rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
              {/* Header with icon */}
              <div className="flex items-start gap-4 mb-6">
                {/* <div className="relative">
                  <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-md opacity-50"></div>
                  <div className="relative p-4 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl">
                    <Clock className="text-white" size={28} />
                  </div>
                </div> */}
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-black mb-2">
                    Regular Consultation Hours
                  </h3>
                  <p className="text-sm text-slate-400 font-medium">
                    Scheduled Appointments
                  </p>
                </div>
              </div>

              {/* Schedule */}
              <div className="space-y-4">
                {/* Weekday hours */}
                <div className="bg-blue-100 rounded-xl p-4 border border-slate-700/50 hover:border-blue-500/30 transition-colors duration-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span className="font-semibold text-black">
                        Monday - Friday
                      </span>
                    </div>
                    <span className="text-xs text-black-400 px-2 py-1 rounded-full font-medium">
                      Weekdays
                    </span>
                  </div>
                  <p className="text-blue-400 font-bold text-lg ml-6">
                    11:30 AM - 6:30 PM
                  </p>
                </div>

                {/* Saturday hours */}
                <div className="bg-blue-100 rounded-xl p-4 border border-slate-700/50 hover:border-blue-500/30 transition-colors duration-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-indigo-400" />
                      <span className="font-semibold text-black">Saturday</span>
                    </div>
                    <span className="text-xs text-black-400 px-2 py-1 rounded-full font-medium">
                      Half Day
                    </span>
                  </div>
                  <p className="text-indigo-400 font-bold text-lg ml-6">
                    11:30 AM - 4:30 PM
                  </p>
                </div>

                {/* Sunday hours */}
                <div className="bg-blue-100 rounded-xl p-4 border border-slate-700/50 hover:border-orange-500/30 transition-colors duration-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-orange-400" />
                      <span className="font-semibold text-black">Sunday</span>
                    </div>
                    <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded-full font-medium">
                      Emergency Only
                    </span>
                  </div>
                  {/* <p className="text-orange-400 font-bold text-base ml-6">Emergency Services Available</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
