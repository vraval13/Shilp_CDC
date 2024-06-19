"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/styles/servicecard.module.css";

function ServiceCard() {
  const cardRefs = useRef([]);

  const services = [
    { id: "1", title: "Pulmonary Function Test", img: "/service1.jpg", width: 209, height: 200 },
    { id: "2", title: "COPD", img: "/service2.jpg", width: 209, height: 200 },
    { id: "3", title: "Asthma Clinic", img: "/service3.jpg", width: 209, height: 200 },
    { id: "4", title: "Pulmonary Infection", img: "/service4.jpg", width: 209, height: 200 },
    { id: "5", title: "Pulmonary Fibrosis", img: "/service5.jpg", width: 209, height: 200 },
    { id: "6", title: "Pulmonary HyperTension", img: "/service6.jpg", width: 209, height: 200 },
    { id: "7", title: "Sleep Apnea", img: "/service7.jpg", width: 209, height: 200 },
    { id: "8", title: "Pulmonary Rehabilitation Clinic", img: "/service8.jpg", width: 209, height: 200 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className={styles.serviceInfo}style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: "20px"
    }}>
      {services.map((service, index) => (
        <div
          key={index}
          className={styles.imgpic}
          ref={(el) => (cardRefs.current[index] = el)}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "250px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            opacity: 0,
            transform: "translateY(50px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out"
          }}
        >
          <div style={{ width: "100%", height: "200px", position: "relative" }}>
            <Image src={service.img} alt={service.title} width={service.width} height={service.height} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ padding: "1.2rem" }}>
            <h2 style={{ fontSize: "2rem" }}>{service.title}</h2>
            <Link href={`/services/${service.id}`}>
              <button>Read More</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServiceCard;
