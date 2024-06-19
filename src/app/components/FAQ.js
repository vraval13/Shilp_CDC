"use client";
import { useState } from 'react';
import styles from '@/app/styles/faq.module.css';
import Link from 'next/link';

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [ 
    { question: "What is the Phone No for Shilp Chest Disease Centre ?", answer: "The phone number for Shilp Chest Disease Centre By Dr Gopal Raval is +91 76983 66026." },
    { question: "Where is Shilp Chest Disease Centre located ?", answer: "Shilp Chest Disease Centre By Dr Gopal Raval is located at 304, Kshitij Aria, Opp Saviour Hospital, Sardar Patel Stadium Rd, near Stadium Petrol Pump, Navrangpura, Ahmedabad, Gujarat, 380009. " },
    { question: "What days are Shilp Chest Disease Centre open ?", answer: "Shilp Chest Disease Centre By Dr Gopal Raval is open Mon–Fri 11 AM–6 PM; Sat 11 AM–4 PM; Closed on Sun. " },
    
    { question: "What is Asthma?", answer: "Asthma is a chronic condition that affects the airways in the lungs, causing them to become inflamed and narrow." },
    { question: "What is COPD?", answer: "COPD, or Chronic Obstructive Pulmonary Disease, is a group of lung conditions that cause breathing difficulties." },
    { question: "What is Allergic Rhinitis?", answer: "Allergic Rhinitis is an allergic reaction that causes sneezing, congestion, and a runny nose." },
    { question: "Is an asthma inhaler Safe to use?", answer: "Yes, asthma inhalers are generally safe to use when prescribed by a doctor and used as directed." },
    { question: "What is Bronchoscopy?", answer: "Bronchoscopy is a procedure that allows doctors to look at the airways through a thin viewing instrument called a bronchoscope." },
    { question: "What is PFT?", answer: "PFT, or Pulmonary Function Test, measures how well your lungs are working." },

  ];

  return (
    <div style={{background:"linear-gradient(white,lightgray)",boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}> 
    {/* ,borderTop:"3px solid blue"}}> */}
    <div className={styles.faqSection}>
      <h1 className={styles.title}>Frequently <span style={{color:"red"}}>Asked</span> Questions (F<span style={{color:"red"}}>A</span>Q<span style={{color:"red"}}>s</span>)</h1>
      <div className={styles.accordion}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.accordionItem}>
            <button
              className={`${styles.accordionButton} ${activeIndex === index ? styles.active : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <span className={styles.icon}>❓</span>
              {faq.question}
              <span className={styles.arrow}>{activeIndex === index ? '▲' : '▼'}</span>
            </button>
            <div className={`${styles.accordionContent} ${activeIndex === index ? styles.show : ''}`}>
              <p style={{fontSize:"2rem",}}>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <center>
      <h2 style={{color:"black"}}>Couldn't find answers? please try again!</h2>
      <Link href={'/contact'}>
        <button>
          Contact us
        </button>
      </Link>
      </center> */}
    </div>
    </div>
  );
}

export default Faq;
