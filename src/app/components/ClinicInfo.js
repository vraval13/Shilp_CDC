"use client";
import { useState } from 'react';
import styles from "@/app/styles/clinicinfo.module.css";
import Link from "next/link";
import { Inter, Roboto } from "next/font/google";

const mulish = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

function ClinicInfo() {
  const [popOutContent, setPopOutContent] = useState(null);

  const handleIconClick = (content) => {
    setPopOutContent(content);
  };

  const handleClosePopOut = () => {
    setPopOutContent(null);
  };

  return (
    <>
      <div className={styles.contact_info} style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: "2.2rem",
        padding: "10px 20px",
        borderBottom: "1px solid #ddd",
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
      }}>
        <div className={styles.contact_item} style={{
          display: "flex",
          alignItems: "center",
          marginRight: "15px"
        }}>
          <a href="tel:+917698366026" style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit"
          }}>
            <i
              className="fas fa-phone-alt"
              style={{
                marginRight: "8px",
                fontSize: "2.2rem",
                color: "#FF5733",
                cursor: "pointer"
              }}
              onClick={() => handleIconClick("Call us: +91 76983 66026")}
            ></i>
            <span style={{ fontSize: "2.2rem", fontWeight: "bold" }}>Call us: </span>
            <span style={{ marginLeft: "5px", fontSize: "2rem" }}>+91 76983 66026</span>
          </a>
        </div>
        <div className={styles.contact_item} style={{
          display: "flex",
          alignItems: "center",
          marginRight: "15px"
        }}>
          <a href="mailto:shilpcdc@gmail.com" style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit"
          }}>
            <i
              className="fas fa-envelope"
              style={{
                marginRight: "8px",
                fontSize: "2.2rem",
                color: "#FF5733",
                cursor: "pointer"
              }}
              onClick={() => handleIconClick("Email us: shilpcdc@gmail.com")}
            ></i>
            <span style={{ fontSize: "2.2rem", fontWeight: "bold" }}>Email us: </span>
            <span style={{ marginLeft: "5px", fontSize: "2rem" }}>shilpcdc@gmail.com</span>
          </a>
        </div>
        <div className={styles.contact_item} style={{
          display: "flex",
          alignItems: "center",
          marginRight: "15px",
        }}>
          <a href="tel:+917698366026" style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit"
          }}>
            <i
              className="fas fa-clock"
              style={{
                marginRight: "8px",
                fontSize: "2.2rem",
                color: "#FF5733",
                cursor: "pointer"
              }}
              onClick={() => handleIconClick("Clinic Hours: Mon-Sat: 11:30 AM - 6:30 PM")}
            ></i>
            <span style={{ fontSize: "2.2rem", fontWeight: "bold" }}>Clinic Hours: </span>
            <span style={{ marginLeft: "5px", fontSize: "2rem" }}>Mon-Sat: 11:30 AM - 6:30 PM</span>
          </a>
        </div>
        <div className={styles.contact_item} style={{
          display: "flex",
          alignItems: "center",
          marginRight: "15px"
        }}>
          <Link href="/contact" className={styles.appointment_button} >
            <button className={mulish.className} style={{
              fontSize: "2.2rem",
            }}>
              <i className="fas fa-calendar-alt" style={{ marginRight: "8px" }}></i>
              Book An Appointment
            </button>
          </Link>
        </div>
      </div>
      {popOutContent && (
        <div className={styles.pop_out_box}>
          <div className={styles.pop_out_content}>
            {popOutContent}
            <button onClick={handleClosePopOut} className={styles.close_button}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ClinicInfo;
