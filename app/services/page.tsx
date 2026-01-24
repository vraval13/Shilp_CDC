import Header from '@/components/Header';
import ClinicInfo from '@/components/ClinicInfo';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';

export const metadata = {
  title: 'Services | Shilp Chest Disease Centre',
  description: 'Comprehensive pulmonology services including PFT, COPD treatment, asthma care, COVID-19 management, and more',
};

const services = [
  {
    id: '1',
    title: 'Pulmonary Function Test',
    description: 'A pulmonary function test (PFT) evaluates lung performance, aiding in the diagnosis and monitoring of respiratory conditions like asthma and COPD.',
    image: '/service1.jpg',
  },
  {
    id: '2',
    title: 'COPD',
    description: 'Chronic Obstructive Pulmonary Disease (COPD) is a progressive lung disease characterized by airflow obstruction, making breathing difficult.',
    image: '/service2.jpg',
  },
  {
    id: '3',
    title: 'Asthma Clinic',
    description: 'An asthma clinic specializes in diagnosing, treating, and managing asthma.',
    image: '/service3.jpg',
  },
  {
    id: '4',
    title: 'Pulmonary Infection',
    description: 'A pulmonary infection is an infection affecting the lungs, often caused by bacteria, viruses, or fungi.',
    image: '/service4.jpg',
  },
  {
    id: '5',
    title: 'Pulmonary Fibrosis',
    description: 'Pulmonary fibrosis is a condition where lung tissue becomes scarred and thickened, leading to difficulty in breathing.',
    image: '/service5.jpg',
  },
  {
    id: '6',
    title: 'Pulmonary HyperTension',
    description: 'Pulmonary hypertension is a condition characterized by high blood pressure in the arteries of the lungs.',
    image: '/service6.jpg',
  },
  {
    id: '7',
    title: 'Sleep Apnea',
    description: 'Sleep apnea is a sleep disorder where breathing repeatedly stops and starts during sleep.',
    image: '/service7.jpg',
  },
  {
    id: '8',
    title: 'Pulmonary Rehabilitation Clinic',
    description: 'A pulmonary rehabilitation clinic offers comprehensive programs to improve respiratory function and quality of life.',
    image: '/service8.jpg',
  },
];

export default function Services() {
  return (
    <main>
      <Header />
      <ClinicInfo />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shilp \ <span style={{color:"red"}}> SERVICES</span></h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a wide range of diagnostic, therapeutic, and preventive services for respiratory health
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
