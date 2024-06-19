import ContactCard from "../components/ContactCard";
import styles from "@/app/contact/contact.module.css";
import ContactForm from "../components/ContactForm";
import style from '@/app/styles/common.module.css'; // Import the CSS file for styling
export const metadata = {
  title: {
    absolute: 'Contact - Dr. Gopal Raval'
  },
  description: 'To Contact Dr. Gopal Raval'
}
function Contacts() {
  return (
    <>
      <div className={styles.container} style={{borderTop:"3px solid blue"}}>
      <h2 className={style.movie_title}> Shilp \ <span> CONTACT</span></h2>
        <center>
          <h1>Contact Us</h1>
        </center>
        <ContactCard />
        <section className={styles.contact_section}>
          <h2>We'd love to hear <span>from you</span></h2>
          <h2>Book Appointment<span> Now</span></h2>
          <ContactForm />
        </section>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4426590469357!2d72.55875447350844!3d23.04422751552323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85625d75d493%3A0xa3c4fcf3c51532ab!2sShilp%20Chest%20Disease%20Centre%20by%20Dr%20Gopal%20Raval!5e0!3m2!1sen!2sin!4v1718033306110!5m2!1sen!2sin" width={600} height={450} style={
        {
          border: "0"
        }
      } allowfullscreen="" loading="lazy" className={styles.mapping} referrerpolicy="no-referrer-when-downgrade"></iframe>
    </>
  )
}
export default Contacts;