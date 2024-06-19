import styles from "@/app/styles/common.module.css";
import heroStyles from "@/app/styles/herosection.module.css";
import Image from "next/image";
import style from "@/app/styles/about.module.css";
export const metadata = {
  title: {
    absolute: 'About - Dr. Gopal Raval',
  },
  description: 'To know about Dr. Gopal Raval',
};

function About() {
  return (
    <>
      <main className={style.main_section} style={{height:"115vh",borderTop:"3px solid blue"}}>
        <div className={styles.container}>
          <div className={styles.grid_two_section}>
            <div className={heroStyles.hero_content}>
              <h1>ABOUT <br />DR. GOPAL RAVAL</h1>
              <br />
              <h3 style={{fontSize:"2.5rem"}}>MBBS , DNB (Resp.Medicine) , DTCD <br /> MNAMS , FSM , FCCS (Critical Care) , HERMES</h3>
              <p style={{ fontSize: "2.5rem" }}>
                <strong>International Board</strong> Certification in Sleep Medicine (IBSM) <br />
                <strong>European Diploma</strong> in Respiratory Medicine (EDARM)
              </p>
              <p style={{fontSize:"1.8rem",color:"black"}}>
                Dr. Gopal Raval is <strong> <u>CONSULTANT PULMONOLOGIST AND CRITICAL CARE SPECIALIST </u></strong>at <strong><u>SHILP CHEST DISEASE CENTER.</u></strong>
                He did M.B.B.S from MS University , Baroda. He did D.T.C.D from MS University , Baroda. He did D.N.B from JASLOK Hospital , Mumbai. 
                He underwent Fellowship training in critical care medicine from JASLOK Hospital , Mumbai affiliated by indo-Australian critical care. <br />
                With over 15 years of extensive experience, he possesses deep clinical expertise in treating a wide range of respiratory conditions. These include lung cancer, asthma, COPD, respiratory failure, interstitial lung disease (ILD), pulmonary hypertension, cystic fibrosis, sleep disorders, and smoking cessation. Additionally, Dr. Raval specializes in managing tuberculosis, bronchiectasis, pleural diseases, and more.
              </p>
            </div>
            <div className={heroStyles.hero_image}>
              <Image
                src={'/aboutdr.jpg'}
                alt="Dr. Gopal Raval"
                width={500}
                height={500}
                style={{
                  height: '450px',
                  width: '450px',
                  borderRadius: '20px',
                }}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;
