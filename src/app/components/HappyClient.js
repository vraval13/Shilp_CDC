"use client";
import { useEffect, useState } from 'react';
import styles from '@/app/styles/happyclient.module.css';
import { ImQuotesLeft } from "react-icons/im";

const reviews = [
  {
    text: "The best pulmonologist dr in Ahmedabad. Mom Ramaben’s treatment going on with Dr Gopal Raval for past 9 years.\n\n Always available for help. A very talented dr with nice human being."
  },
  {
    text: "My nephew Hamza was admitted at bhailal amin hospital for 12-13 days for treatment of dengue, covid, fungal infection and multiple organ failure... then shifted to sterling under ventilator. Here Dr Atul Patel's team with Dr Gopal Raval sir diagnose well and their team done excellent treatment. Now a days his recovery is very fast... \n\nThank you to Dr Atul Patel, Dr Ketan Patel, Dr Kinjal, Dr Gopal Raval sir, Dr Chirag Solanki and their team of sterling hospital... \n\nSpecial thanks to Dr Gopal Raval sir for his best efforts and proper guidance... and for his friendly nature..."
  },
  {
    text: "Good atmosphere of clinic... Dr. Gopal rawal is very experienced  & humble nature doctor... \n\nMy mother has medical problem but Dr. Gopal rawal treat her easier way...now she fill completely ok...good nature of doctor... Good staff... Thanks🙏"
  },
  {
    text: "A doctor with golden heart.Whenever we need help  he available 24*7.\n\nMoney is no matter for him."
  },
  {
    text: "Dr Gopal Raval is very knowledgeable, calm, makes you understand your condition in simple and logical manner. \n\n Most tests are performed at his clinic or nearby places in same visit and diagnosis is done well. \n\n We thank you for your guidance and diagnosis offered to us on first visit."
  },
  {
    text: "We are impressed with doctor gopal Rawal for best treatment.\n\nVery friendly experience. \n\nVery good treatment. \n\n Recommended this doctor"
  },
  // Add more reviews if needed
];

function HappyClient() {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Change review every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const formatReviewText = (text) => {
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  const handleReviewClick = () => {
    window.open("https://www.google.com/search?gs_ssp=eJzj4tVP1zc0LEgzysiyNMsyYLRSNagwtjRNtTA1MzJNMTdNMbE0tjKoSDRONklLTjNONjU0NTZKTPLiSylSSM8vSMxRKEosS8wBAKR2FDo&q=dr+gopal+raval&rlz=1C1CHBF_enIN1038IN1038&oq=dr+&gs_lcrp=EgZjaHJvbWUqFQgBEC4YJxivARjHARiABBiKBRiOBTIGCAAQRRg7MhUIARAuGCcYrwEYxwEYgAQYigUYjgUyBggCEEUYOTINCAMQLhiDARixAxiABDIGCAQQRRg8MgYIBRBFGDwyBggGEEUYQTIGCAcQRRhB0gEIMTI3NGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#mpd=~6376693011544946998/customers/reviews", "_blank");
  };

  return (
    <div className={styles.container} style={{ borderTop: "3px solid blue" }}>
      <div className={styles.left}>
        <h1 className={styles.heading}> 😊 HAPPY FACES</h1>
        <div className={styles.reviewButtonContainer}>
          <button className={styles.reviewButton} style={{ height:"50px"} }onClick={handleReviewClick}>
            Write a Review here!
          </button>
        </div>
      </div>
      <div className={styles.right}>
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`${styles.review} ${index === activeReviewIndex ? styles.active : ''
              }`}
          >
            <blockquote className={styles.blockquote}>
              <ImQuotesLeft /> <br />{formatReviewText(review.text)}
            </blockquote>
          </div>
        ))}
      </div>
      {/* Add the Write a Review button below the reviews */}
      {/* <div className={styles.reviewButtonContainer}>
        <button className={styles.reviewButton} onClick={handleReviewClick}>
          Write a Review
        </button>
      </div> */}
    </div>
  );
}

export default HappyClient;
