import React from "react";
import styles from "@/app/styles/common.module.css";
import ServiceCard from "../components/ServiceCard";
export const metadata={
  title:{
    absolute:'Services - Dr. Gopal Raval'
  },
  description:'To know about Services provided by Dr. Gopal Raval'
}
async function Services()
{
  await new Promise((resolve) => setTimeout(resolve,2000));
  return(
    <>
      <center style={{borderTop:"3px solid blue"}}>
        <h1>SERVICES & TREATMENTS</h1>
      </center>
      <section style={{background:"linear-gradient(bottom,white,lightgray)"}} className={styles.movieSection}>
        <div className={`${styles.container} ${styles.additionalClass}`}>
          <div className={styles.card_section}>
            <ServiceCard/>
          </div>
        </div>
      </section>
    </>
  )
}
export default Services;