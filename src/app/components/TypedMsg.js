"use client";
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function TypedMessage() {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Greet','Caring', 'Health', 'Trust','Safety'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100px',
      backgroundColor: '#f8f9fa',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px'
    }}>
      <span ref={typedElement} style={{
        fontSize: '5rem',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        fontFamily: 'Arial, sans-serif',
        animation: 'colorChange 6s infinite'
      }}></span>
      <style jsx>{`
        @keyframes colorChange {
          0% {
            color: #FF5733; /* Orange */
          }
          50% {
            color: #FFFFFF; /* White */
          }
          100% {
            color: #28a745; /* Green */
          }
        }
      `}</style>
    </div>
  );
}

export default TypedMessage;
