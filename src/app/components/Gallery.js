"use client";
import React, { useState, useEffect, useRef } from 'react';
import styles from '@/app/styles/gallery.module.css'; // Import the CSS file for styling
import style from '@/app/styles/common.module.css'; // Import the CSS file for styling

const images = [
  { url: '/gal12.jpg', description: '' },
  { url: '/gal1.jpg', description: `Doctor's Consulting Room` },
  { url: '/gal2.jpg', description: 'Reception Area-I' },
  { url: '/gal3.jpg', description: 'PFT Room-I' },
  { url: '/gal4.jpg', description: 'AMA Committee Member' },
  { url: '/gal5.jpg', description: 'Patient Waiting Area' },
  { url: '/gal6.jpg', description: 'Entrance' },
  { url: '/gal7.jpg', description: 'PFT Room-II' },
  { url: '/gal8.jpg', description: 'Corridor' },
  { url: '/gal9.jpg', description: 'Reception Area-II' },
  { url: '/gal10.jpg', description: 'Shilp Pharmacy ' },
  { url: '/gal11.jpg', description: `Dr. Gopal Raval` },
  { url: '/gal13.png', description: `CSR Activity Lecture` },
  { url: '/gal14.png', description: `CSR Activity Workshop` },
  { url: '/gal15.png', description: `10th Gujarat Criticon 2024` },
  // { url: '/gal16.png', description: `10th Gujarat Criticon 2024` },
  { url: '/gal17.png', description: `10th Gujarat Criticon 2024` },

  
];

function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const imageRefs = useRef([]);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleClose = () => {
    setSelectedImageIndex(null);
  };

  const handlePrevClick = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((selectedImageIndex + 1) % images.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      handlePrevClick(e);
    } else if (e.key === 'ArrowRight') {
      handleNextClick(e);
    } else if (e.key === 'Escape') {
      handleClose();
    }
  };

  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImageIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver( //api
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.inView);
          }
        });
      },
      {
        threshold: 0.1, // Adjust this value to control when the animation starts
      }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Clean up the observer on component unmount
    return () => {
      imageRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <>
      <div className={styles.galleryGrid} style={{borderTop:"3px solid blue"}}>
      <h2 className={style.movie_title}> Shilp \ <span> GALLERY</span></h2>

        {images.map((image, index) => (
          <div
            key={index}
            ref={(el) => (imageRefs.current[index] = el)}
            className={`${styles.galleryItem} ${selectedImageIndex !== null && selectedImageIndex !== index ? styles.blur : ''}`}
            onClick={() => handleImageClick(index)}
            style={{ backgroundImage: `url(${image.url})` }}
          >
            <div className={styles.hoverShadow}></div>
            <div className={styles.description}>{image.description}</div>
          </div>
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div className={styles.popup}>
          <img src={images[selectedImageIndex].url} alt="Selected" />
          <button className={styles.prev} onClick={handlePrevClick}>❮</button>
          <button className={styles.next} onClick={handleNextClick}>❯</button>
          <button className={styles.close} onClick={handleClose}>✖</button>
        </div>
      )}
    </>
  );
}

export default Gallery;
