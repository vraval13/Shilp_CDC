"use client";

import { useState, useEffect } from "react";

interface Review {
  text: string;
}

const reviews: Review[] = [
  {
    text: "The best pulmonologist dr in Ahmedabad. Mom Ramaben’s treatment going on with Dr Gopal Raval for past 9 years.\n\n Always available for help. A very talented dr with nice human being.",
  },
  {
    text: "My nephew Hamza was admitted at bhailal amin hospital for 12-13 days for treatment of dengue, covid, fungal infection and multiple organ failure... then shifted to sterling under ventilator. Here Dr Atul Patel's team with Dr Gopal Raval sir diagnose well and their team done excellent treatment. Now a days his recovery is very fast... \n\nThank you to Dr Atul Patel, Dr Ketan Patel, Dr Kinjal, Dr Gopal Raval sir, Dr Chirag Solanki and their team of sterling hospital... \n\nSpecial thanks to Dr Gopal Raval sir for his best efforts and proper guidance... and for his friendly nature...",
  },
  {
    text: "Good atmosphere of clinic... Dr. Gopal rawal is very experienced  & humble nature doctor... \n\nMy mother has medical problem but Dr. Gopal rawal treat her easier way...now she fill completely ok...good nature of doctor... Good staff... Thanks🙏",
  },
  {
    text: "A doctor with golden heart.Whenever we need help  he available 24*7.\n\nMoney is no matter for him.",
  },
  {
    text: "Dr Gopal Raval is very knowledgeable, calm, makes you understand your condition in simple and logical manner. \n\n Most tests are performed at his clinic or nearby places in same visit and diagnosis is done well. \n\n We thank you for your guidance and diagnosis offered to us on first visit.",
  },
  {
    text: "We are impressed with doctor gopal Rawal for best treatment.\n\nVery friendly experience. \n\nVery good treatment. \n\n Recommended this doctor",
  },
  {
    text:"Very humble, knowledgeable and down to earth doctor. His clinic has good vibes. Gives enough time for checking, diagnosis and counseling."
  },
  {
    text:"The best Dr in Ahmedabad for chest diseases...."
  },
  {
    text:"The best Dr. In Ahmedabad chest disease . Super 👌👌"
  },
  {
    text:"Best doctor.....\nMan of God,. Money doesn't matter here"
  }
];

export default function HappyClient() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const [slideDirection, setSlideDirection] = useState(1);

  useEffect(() => {
    if (!autoRotate) return;

    const timer = setInterval(() => {
      setSlideDirection(Math.random() > 0.5 ? 1 : -1);
      setOpacity(0);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
        setOpacity(1);
      }, 250);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoRotate]);

  const goToReview = (index: number) => {
    setCurrentIndex(index);
    setAutoRotate(false);
  };

  const currentReview = reviews[currentIndex];

  return (
    <section className="bg-muted py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center justify-center gap-2">
          <span className="text-4xl">😊</span> HAPPY FACES
        </h2>
        <div className="grid md:grid-cols-2 gap-0 bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Left Side - Title and Button */}
          <div className="bg-gray-300 p-8 md:p-12 flex flex-col justify-center items-center">
            <div className="text-center space-y-8">
              <button
                onClick={() =>
                  window.open(
                    "https://www.google.com/search?gs_ssp=eJzj4tVP1zc0LEgzysiyNMsyYLRSNagwtjRNtTA1MzJNMTdNMbE0tjKoSDRONklLTjNONjU0NTZKTPLiSylSSM8vSMxRKEosS8wBAKR2FDo&q=dr+gopal+raval&rlz=1C1CHBF_enIN1038IN1038&oq=dr+&gs_lcrp=EgZjaHJvbWUqFQgBEC4YJxivARjHARiABBiKBRiOBTIGCAAQRRg7MhUIARAuGCcYrwEYxwEYgAQYigUYjgUyBggCEEUYOTINCAMQLhiDARixAxiABDIGCAQQRRg8MgYIBRBFGDwyBggGEEUYQTIGCAcQRRhB0gEIMTI3NGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#mpd=~6376693011544946998/customers/reviews",
                    "_blank",
                  )
                }
                className="bg-cyan-500 text-white px-8 py-4 rounded-full font-medium hover:bg-cyan-600 transition-colors text-lg"
              >
                Write a Review here!
              </button>
            </div>
          </div>

          {/* Right Side - Review Content */}
          <div className="bg-gray-100 p-8 md:p-12 flex flex-col justify-center">
            <div className="border-l-4 border-cyan-500 pl-6">
              <div className="mb-8">
                <span className="text-6xl text-cyan-500 leading-none block animate-pulse">
                  "
                </span>
                <p
                  className="text-lg text-gray-700 mt-2"
                  style={{
                    opacity,
                    transition:
                      "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
                    transform: `translateX(${opacity === 0 ? slideDirection * 20 : 0}px)`,
                    whiteSpace: "pre-line",
                  }}
                >
                  {currentReview.text}
                </p>
              </div>

              {/* Dots Navigation */}
              <div className="flex gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToReview(index)}
                    className={`h-2 rounded-full transition-all duration-300 ease-in-out ${
                      index === currentIndex
                        ? "bg-cyan-500 w-8"
                        : "bg-gray-400 w-2 hover:bg-gray-500"
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
