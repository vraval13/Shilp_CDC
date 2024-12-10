"use client";
import { useEffect, useRef } from 'react';
import { Roboto } from "next/font/google";
import styles from "@/app/styles/clinicdata.module.css";

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

function ClinicData() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const counters = sectionRef.current.querySelectorAll(`.${styles.counter}`);
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            counters.forEach((counter) => {
              animateCounter(counter);
            });
            observer.disconnect(); // Disconnect after animation
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  const animateCounter = (element) => {
    const targetValue = parseInt(element.getAttribute('data-target'), 10);
    const duration = 4000; // Duration of the animation in milliseconds
    const increment = Math.ceil(targetValue / (duration / 16.67)); // 16.67ms per frame (60 FPS)
    let currentValue = 0;

    const updateCounter = () => {
      currentValue += increment;
      if (currentValue > targetValue) {
        element.textContent = targetValue;
      } else {
        element.textContent = currentValue;
        requestAnimationFrame(updateCounter);
      }
    };

    updateCounter();
  };

  return (
    <>
      <section
        ref={sectionRef}
        className={styles.iconsContainers}
        style={{ borderTop: "3px solid blue" }}
      >
        <div className={styles.icons}>
          <i className="fas fa-users"></i>
          <h3 className={`${styles.counter}`} data-target="25000">0</h3>
          <p><strong>Satisfied Patients</strong></p>
        </div>

        <div className={styles.icons}>
          <i className="fas fa-users"></i>
          <h3 className={`${styles.counter}`} data-target="5000">0</h3>
          <p><strong>COVID Patients</strong></p>
        </div>

        <div className={styles.icons}>
          <i className="fa-solid fa-certificate"></i>
          <h3 className={`${styles.counter}`} data-target="10">0</h3>
          <p><strong>Teaching Experience (yrs)</strong></p>
        </div>

        <div className={styles.icons}>
          <i className="fas fa-user-md"></i>
          <h3 className={`${styles.counter}`} data-target="18">0</h3>
          <p><strong>Experience (yrs)</strong></p>
        </div>

        <div className={styles.icons}>
          <i className="fas fa-procedures"></i>
          <h3 className={`${styles.counter}`} data-target="500">0</h3>
          <p><strong>Procedures Done</strong></p>
        </div>

        <div className={styles.icons}>
          <i className="fas fa-hospital"></i>
          <h3 className={`${styles.counter}`} data-target="20">0</h3>
          <p><strong>Hospitals Visiting Faculty</strong></p>
        </div>
      </section>
    </>
  );
}

export default ClinicData;
