'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'What is the Phone No for Shilp Chest Disease Centre?',
    answer: 'The phone number for Shilp Chest Disease Centre By Dr Gopal Raval is +91 76983 66026.',
  },
  {
    id: 2,
    question: 'Where is Shilp Chest Disease Centre located?',
    answer: 'Shilp Chest Disease Centre By Dr Gopal Raval is located at 304, Kshitij Aria, Opp Saviour Hospital, Sardar Patel Stadium Rd, near Stadium Petrol Pump, Navrangpura, Ahmedabad, Gujarat, 380009.',
  },
  {
    id: 3,
    question: 'What days are Shilp Chest Disease Centre open?',
    answer: 'Shilp Chest Disease Centre By Dr Gopal Raval is open Mon–Fri 11 AM–6 PM; Sat 11 AM–4 PM; Closed on Sun.',
  },
  {
    id: 4,
    question: 'What is Asthma?',
    answer: 'Asthma is a chronic condition that affects the airways in the lungs, causing them to become inflamed and narrow.',
  },
  {
    id: 5,
    question: 'What is COPD?',
    answer: 'COPD, or Chronic Obstructive Pulmonary Disease, is a group of lung conditions that cause breathing difficulties.',
  },
  {
    id: 6,
    question: 'What is Allergic Rhinitis?',
    answer: 'Allergic Rhinitis is an allergic reaction that causes sneezing, congestion, and a runny nose.',
  },
  {
    id: 7,
    question: 'Is an asthma inhaler Safe to use?',
    answer: 'Yes, asthma inhalers are generally safe to use when prescribed by a doctor and used as directed.',
  },
  {
    id: 8,
    question: 'What is Bronchoscopy?',
    answer: 'Bronchoscopy is a procedure that allows doctors to look at the airways through a thin viewing instrument called a bronchoscope.',
  },
  {
    id: 9,
    question: 'What is PFT?',
    answer: 'PFT, or Pulmonary Function Test, measures how well your lungs are working.',
  },
];

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently <span className="text-red-500">Asked</span> Questions (F<span className="text-red-500">A</span>Q<span className="text-red-500">s</span>)
          </h2>
          <p className="text-muted-foreground">
            Find answers to common questions about our clinic and services
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() =>
                  setExpandedId(expandedId === item.id ? null : item.id)
                }
                className="w-full flex items-center justify-between p-6 bg-background hover:bg-muted transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground text-left">
                  <span>❓</span> {item.question}
                </h3>
                <ChevronDown
                  className={`text-primary transition-transform flex-shrink-0 ml-4 ${
                    expandedId === item.id ? 'rotate-180' : ''
                  }`}
                  size={20}
                />
              </button>

              {expandedId === item.id && (
                <div className="p-6 bg-muted border-t border-border">
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
