"use client";
import React from 'react';
import styles from "@/app/styles/timinginfo.module.css";
import { Ri24HoursFill } from "react-icons/ri";
import { IoTimerOutline } from "react-icons/io5";
function TimingInfo() {
  return (
    <>
      <div className={styles.timeInfo}style={{
        display: 'flex',
        justifyContent: 'space-between',
        height: '30vh',
        width: '100%',
        padding: '5px',
        boxSizing: 'border-box',
        backgroundColor:'white',
      }}>
        <div className={styles.info1}style={{
          // backgroundColor: 'rgba(0, 123, 255, 0.8)',
          backgroundColor:"#F28C28",
          color: 'white',
          borderRadius: '5px',
          width: '50%',
          marginRight: '10px',
          boxSizing: 'border-box',
          padding: '20px',
          fontSize:"2.5rem"
        }}>
          <h4><Ri24HoursFill/> 24 HOURS SERVICE</h4>
          <p>Emergency Admit at <strong>STERLING HOSPITAL | HCG HOSPITAL | AVRON HOSPITAL  | SHAILYA HOSPITAL | JIVRAJ MEHTA HOSPITAL </strong></p>
        </div>
        <div className={styles.info2}style={{
          // backgroundColor: 'rgba(255, 193, 7, 0.8)',
          // backgroundColor:"#4169E1",
          backgroundColor:"#50C878",
          color: 'white',
          borderRadius: '5px',
          width: '50%',
          boxSizing: 'border-box',
          padding: '20px',
          fontSize:"2.5rem"
        }}>
          <h4> <IoTimerOutline/> OPENING HOURS</h4>
          <p>Monday - Friday : 11:30 AM to 6:30 PM<br />Saturday : 11:30 AM to 4:30 PM<br />Sunday : Only Emergency</p>
        </div>
        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          div {
            animation: fadeIn 2s ease-in-out;
          }
        `}</style>
      </div>
    </>
  );
}
export default TimingInfo;