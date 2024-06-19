import { Roboto, Mulish } from "next/font/google";
import styles from "@/app/styles/clinicdata.module.css";

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

function ClinicData() {
  return (
    <>
      <section className={styles.iconsContainers} style={{borderTop:"3px solid blue"}}>

        <div className={styles.icons}>
          <i className="fas fa-users"></i>
          <h3>25000+</h3>
          <p><strong>Satisfied Patients</strong></p>
        </div>

        <div className={styles.icons}>
          <i className="fas fa-users"></i>
          <h3>5000+</h3>
          <p><strong>COVID Patients</strong></p>
        </div>

        <div className={styles.icons}>
        <i className="fa-solid fa-certificate"></i>
          <h3>10yrs+</h3>
          <p><strong>Teaching Experience</strong></p>
        </div>

        <div className={styles.icons}>
          <i className="fas fa-user-md"></i>
          <h3>18yrs+</h3>
          <p><strong>Experience</strong></p>
        </div>

        <div className={styles.icons}>
          <i className="fas fa-procedures"></i>
          <h3>500+</h3>
          <p><strong>Procedures done</strong></p>
        </div>

        <div className={styles.icons}>
          <i className="fas fa-hospital"></i>
          <h3>20+</h3>
          <p><strong>Hospitals Visiting Faculty</strong></p>
        </div>
      </section>
    </>
  );
}

export default ClinicData;
