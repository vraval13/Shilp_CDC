"use client";
import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import styles from "@/app/styles/imageslider.module.css";

const ImageSlider = () => {
  const images = [
    { src: '/slider3.png', link: null },
    { src: '/slider1.jpg', link: null },
    { src: '/slider4.png', link: 'https://www.sbs.com.au/language/gujarati/gu/podcast-episode/dr-gopal-raval-insomnia/z4euso1tz' },
    { src: '/slider7.png', link: 'https://www.facebook.com/watch/?v=2558652464398043' },
    { src: '/slider5.png', link: null },
    { src: '/slider6.png', link: null },
    
  ];

  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [current, length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (length <= 0) {
    return null;
  }

  return (
    // <div style={{borderTop:"3px solid blue"}}>
    <section className={styles.imageSlider}>
      <FaArrowAltCircleLeft
        onClick={prevSlide}
        className={styles.leftArrow}
        size={0}
      />
      <FaArrowAltCircleRight
        onClick={nextSlide}
        size={0}
        className={styles.rightArrow}
      />
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === current ? styles.active : ''}`}
        >
          {index === current && (
            image.link ? (
              <a href={image.link} target="_blank" rel="noopener noreferrer">
                <img src={image.src} alt={`Slide ${index}`} className={styles.image} />
              </a>
            ) : (
              <img src={image.src} alt={`Slide ${index}`} className={styles.image} />
            )
          )}
        </div>
      ))}
    </section>
    // </div>
  );
};

export default ImageSlider;
