import styles from "@/app/contact/contact.module.css";
import Link from "next/link";
import { MdCall, MdEmail, MdVoiceChat } from "react-icons/md";

function ContactCard() {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            
            <div className={styles.grid_card}>
              <i><MdEmail /></i>
              <h2>Email</h2>
              {/* <h2><u>shilpcdc@gmail.com</u></h2> */}
              <p>Monday to Saturday</p>
              <p className={styles.last_para}>Response Time: 72 hours</p>
              <Link href="mailto:shilpcdc@gmail.com" passHref>
                Send Email <span> -&gt; </span>
              </Link>
            </div>

            <div className={styles.grid_card}>
              <i><MdVoiceChat /></i>
              <h2>Live Chat</h2>
              {/* <h2><u>shilpcdc@gmail.com</u></h2> */}
              <p>Weekdays (Mon-Fri): 12:30 PM - 6:30 PM</p>
              <p className={styles.last_para}>Weekends (Sat): 12:30 PM - 4:30 PM</p>
              <Link href="https://www.google.com/maps/place/Shilp+Chest+Disease+Centre+by+Dr+Gopal+Raval/@23.0442275,72.5587545,17z/data=!3m1!4b1!4m6!3m5!1s0x395e85625d75d493:0xa3c4fcf3c51532ab!8m2!3d23.0442226!4d72.5613294!16s%2Fg%2F11pf2hj96j?entry=ttu" passHref>
                Get Maps <span> -&gt; </span>
              </Link>
            </div>

            <div className={styles.grid_card}>
              <i><MdCall /></i>
              <h2>Contact</h2>
              {/* <h2><u>shilpcdc@gmail.com</u></h2> */}
              <p>M: +91 76983 66026</p>
              <p className={styles.last_para}>T: +91 (079) 29916026</p>
              <Link href="#" passHref>
                Call us <span> -&gt; </span>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default ContactCard;
