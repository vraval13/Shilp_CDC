import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";

const serviceDetails = {
  "1": { title: "Pulmonary Function Test", description: "A pulmonary function test (PFT) evaluates lung performance, aiding in the diagnosis and monitoring of respiratory conditions like asthma and COPD. It helps tailor treatment plans and track disease progression or response to therapy.", img: "/service1.jpg" },
  "2": { title: "COPD", description: "Chronic Obstructive Pulmonary Disease (COPD) is a progressive lung disease characterized by airflow obstruction, making breathing difficult. It is significant as it is a leading cause of morbidity and mortality, often resulting from smoking and long-term exposure to irritating gases or particulate matter.", img: "/service2.jpg" },
  "3": { title: "Asthma Clinic", description: "An asthma clinic specializes in diagnosing, treating, and managing asthma.It provides personalized care and education to help patients control their asthma, improve their quality of life, and prevent asthma- related complications.", img: "/service3.jpg"
  },
  "4": { title: "Pulmonary Infection", description: "A pulmonary infection is an infection affecting the lungs, often caused by bacteria, viruses, or fungi, and can lead to respiratory symptoms like coughing, fever, and difficulty breathing, potentially posing serious health risks if left untreated.", img: "/service4.jpg" },
  "5": { title: "Pulmonary Fibrosis", description: "Pulmonary fibrosis is a condition where lung tissue becomes scarred and thickened, leading to difficulty in breathing and reduced lung function. Its significance lies in its progressive nature, potentially leading to respiratory failure and reduced quality of life without proper management.", img: "/service5.jpg" },
  "6": { title: "Pulmonary Hypertension", description: "Pulmonary hypertension is a condition characterized by high blood pressure in the arteries of the lungs, leading to strain on the heart and reduced oxygen supply to the body. Its significance lies in its association with heart failure and potential complications such as blood clots and organ damage if left untreated.", img: "/service6.jpg" },
  "7": { title: "Sleep Apnea", description: "Sleep apnea is a sleep disorder where breathing repeatedly stops and starts during sleep, often due to airway obstruction or brain signaling issues. Its significance lies in the disruption of normal sleep patterns, leading to daytime fatigue, cognitive impairment, and increased risk of cardiovascular problems if untreated.", img: "/service7.jpg" },
  "8": { title: "Pulmonary Rehabilitation Clinic", description: "A pulmonary rehabilitation clinic is a specialized facility that offers comprehensive programs to improve the respiratory function and quality of life for individuals with lung conditions such as COPD or pulmonary fibrosis. Its significance lies in providing structured exercise, education, and support to optimize lung function, reduce symptoms, and enhance overall well-being. \n Here we also conduct like 6 - Minute Walk Test and Respirometer Exercise Test.", img: "/service8.jpg" },
};

export async function generateStaticParams() {
  return Object.keys(serviceDetails).map((id) => ({
    id,
  }));
}

export default function ServiceDetail({ params }) {
  const { id } = params;
  const service = serviceDetails[id];

  if (!service) return <p>Service not found</p>;

  return (
    <div className={styles.container}>
      <h2 className={styles.movie_title}> Shilp \  <Link href={'/services'}> <span style={{color:"#e50914",textTransform:"capitalize",fontWeight:"bold",fontSize:"3rem"}}> SERVICES </span></Link></h2>
      <div className={styles.card_section}>
        <div>
          <Image src={service.img} alt={service.title} width={600} height={400} />
        </div>
        <div>
          <h1>{service.title}</h1>
          <p style={{
            fontSize:"2.5rem"
          }}>{service.description}</p>
        </div>
      </div>
    </div>
  );
}
