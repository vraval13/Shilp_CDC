"use client";
import { useState } from "react";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "@/app/contact/contact.module.css";
import { Roboto } from "next/font/google";

// Define your EmailJS Service ID, Template ID, and User ID
const serviceID = 'service_nr7olxw'; // Replace with your actual Service ID
const templateID = 'template_94t3a4i'; // Replace with your actual Template ID
const userID = 'tEAGb6bWr5kJvK4qy'; // Replace with your actual User ID

const mulish = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

const ContactForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, e.target, userID)
      .then((result) => {
        console.log(result.text);
        toast.success('Thank you for your message!');
        setUser({
          username: "",
          email: "",
          phone: "",
          message: ""
        });
      }, (error) => {
        console.log(error.text);
        toast.error('There was an error submitting your message! Please try again.');
      });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  }

  return (
    <>
      <form className={styles.contact_form} onSubmit={handleSubmit}>
        <div className={styles.input_field}>
          <label htmlFor="username" className={styles.label}>Name:
            <input type="text" name="username" id="username" placeholder="Enter your name"
              className={mulish.className}
              value={user.username}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className={styles.input_field}>
          <label htmlFor="email" className={styles.label}>Email:
            <input type="email" name="email" id="email" placeholder="Enter your email" className={mulish.className}
              value={user.email}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </label>
        </div>
        <div className={styles.input_field}>
          <label htmlFor="phone" className={styles.label}>Phone:
            <input type="tel" name="phone" id="phone" placeholder="Enter your phone" className={mulish.className}
              value={user.phone}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </label>
        </div>
        <div className={styles.input_field}>
          <label htmlFor="message" className={styles.label}>Message:
            <textarea name="message" id="message" rows={5} placeholder="Enter your message" className={mulish.className}
              value={user.message}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </label>
        </div>
        <div>
          <button type="submit" className={mulish.className}>Send Message</button>
        </div>
        <p>We respect your privacy.</p>
      </form>
      <ToastContainer style={{fontSize:"2.5rem"}} />
    </>
  );
}

export default ContactForm;
