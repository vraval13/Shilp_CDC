import Header from '@/components/Header';
import ClinicInfo from '@/components/ClinicInfo';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

interface ServiceDetails {
  id: string;
  title: string;
  description: string;
  image: string;
  longDescription: string;
  benefits: string[];
  procedure?: string;
  duration?: string;
}

const serviceData: Record<string, ServiceDetails> = {
  '1': {
    id: '1',
    title: 'Pulmonary Function Test',
    description: 'A pulmonary function test (PFT) evaluates lung performance, aiding in the diagnosis and monitoring of respiratory conditions like asthma and COPD.',
    image: '/service1.jpg',
    longDescription:
      'A pulmonary function test (PFT) evaluates lung performance, aiding in the diagnosis and monitoring of respiratory conditions like asthma and COPD. It helps tailor treatment plans and track disease progression or response to therapy.',
    benefits: [
      'Early detection of lung diseases',
      'Accurate diagnosis of respiratory conditions',
      'Monitor disease progression',
      'Assess response to treatment',
      'Pre-operative assessment',
      'Non-invasive and painless procedure',
    ],
    procedure: '30-45 minutes',
    duration: 'Non-invasive spirometry test',
  },
  '2': {
    id: '2',
    title: 'COPD',
    description: 'Chronic Obstructive Pulmonary Disease (COPD) is a progressive lung disease characterized by airflow obstruction, making breathing difficult.',
    image: '/service2.jpg',
    longDescription:
      'Chronic Obstructive Pulmonary Disease (COPD) is a progressive lung disease characterized by airflow obstruction, making breathing difficult. It is significant as it is a leading cause of morbidity and mortality, often resulting from smoking and long-term exposure to irritating gases or particulate matter.',
    benefits: [
      'Improved breathing capacity',
      'Reduced exacerbations',
      'Better quality of life',
      'Customized treatment plans',
      'Pulmonary rehabilitation programs',
      'Lifestyle modification guidance',
    ],
    procedure: 'Multi-phase management',
    duration: 'Ongoing care',
  },
  '3': {
    id: '3',
    title: 'Asthma Clinic',
    description: 'An asthma clinic specializes in diagnosing, treating, and managing asthma.',
    image: '/service3.jpg',
    longDescription:
      'An asthma clinic specializes in diagnosing, treating, and managing asthma. It provides personalized care and education to help patients control their asthma, improve their quality of life, and prevent asthma-related complications.',
    benefits: [
      'Better symptom control',
      'Reduced asthma attacks',
      'Improved exercise tolerance',
      'Prevention of complications',
      'Allergy identification',
      'Trigger management strategies',
    ],
    procedure: 'Personalized treatment plan',
    duration: 'Long-term management',
  },
  '4': {
    id: '4',
    title: 'Pulmonary Infection',
    description: 'A pulmonary infection is an infection affecting the lungs, often caused by bacteria, viruses, or fungi.',
    image: '/service4.jpg',
    longDescription:
      'A pulmonary infection is an infection affecting the lungs, often caused by bacteria, viruses, or fungi, and can lead to respiratory symptoms like coughing, fever, and difficulty breathing, potentially posing serious health risks if left untreated.',
    benefits: [
      'Rapid diagnosis',
      'Effective antibiotic therapy',
      'Oxygen support available',
      'Respiratory physiotherapy',
      'Complication prevention',
      'Follow-up care and recovery monitoring',
    ],
    procedure: 'Diagnostic imaging and tests',
    duration: 'Acute phase management',
  },
  '5': {
    id: '5',
    title: 'Pulmonary Fibrosis',
    description: 'Pulmonary fibrosis is a condition where lung tissue becomes scarred and thickened, leading to difficulty in breathing.',
    image: '/service5.jpg',
    longDescription:
      'Pulmonary fibrosis is a condition where lung tissue becomes scarred and thickened, leading to difficulty in breathing and reduced lung function. Its significance lies in its progressive nature, potentially leading to respiratory failure and reduced quality of life without proper management.',
    benefits: [
      'Slow disease progression',
      'Improved breathing capacity',
      'Better quality of life',
      'Symptom management',
      'Supportive care',
      'Regular monitoring',
    ],
    procedure: 'Multidisciplinary approach',
    duration: 'Ongoing management',
  },
  '6': {
    id: '6',
    title: 'Pulmonary HyperTension',
    description: 'Pulmonary hypertension is a condition characterized by high blood pressure in the arteries of the lungs.',
    image: '/service6.jpg',
    longDescription:
      'Pulmonary hypertension is a condition characterized by high blood pressure in the arteries of the lungs, leading to strain on the heart and reduced oxygen supply to the body. Its significance lies in its association with heart failure and potential complications such as blood clots and organ damage if left untreated.',
    benefits: [
      'Reduced heart strain',
      'Improved oxygen supply',
      'Better exercise tolerance',
      'Prevention of complications',
      'Medication management',
      'Regular monitoring',
    ],
    procedure: 'Specialized diagnostic tests',
    duration: 'Long-term treatment',
  },
  '7': {
    id: '7',
    title: 'Sleep Apnea',
    description: 'Sleep apnea is a sleep disorder where breathing repeatedly stops and starts during sleep.',
    image: '/service7.jpg',
    longDescription:
      'Sleep apnea is a sleep disorder where breathing repeatedly stops and starts during sleep, often due to airway obstruction or brain signaling issues. Its significance lies in the disruption of normal sleep patterns, leading to daytime fatigue, cognitive impairment, and increased risk of cardiovascular problems if untreated.',
    benefits: [
      'Better sleep quality',
      'Reduced daytime fatigue',
      'Lower cardiovascular risk',
      'CPAP therapy training',
      'Alternative treatment options',
      'Sleep study coordination',
    ],
    procedure: 'Sleep study and evaluation',
    duration: 'Diagnostic phase plus treatment',
  },
  '8': {
    id: '8',
    title: 'Pulmonary Rehabilitation Clinic',
    description: 'A pulmonary rehabilitation clinic offers comprehensive programs to improve respiratory function and quality of life.',
    image: '/service8.jpg',
    longDescription:
      'A pulmonary rehabilitation clinic is a specialized facility that offers comprehensive programs to improve the respiratory function and quality of life for individuals with lung conditions such as COPD or pulmonary fibrosis. Its significance lies in providing structured exercise, education, and support to optimize lung function, reduce symptoms, and enhance overall well-being. Here we also conduct like 6 - Minute Walk Test and Respirometer Exercise Test.',
    benefits: [
      'Improved lung function',
      'Better exercise capacity',
      'Enhanced quality of life',
      'Symptom reduction',
      'Education and support',
      '6-Minute Walk Test and Respirometer Exercise Test',
    ],
    procedure: 'Structured rehabilitation program',
    duration: 'Multi-week program',
  },
};

export default async function ServiceDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = serviceData[id];

  if (!service) {
    return (
      <main>
        <Header />
        <ClinicInfo />
        <div className="py-20 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Service Not Found</h1>
          <Link href="/services" className="text-primary hover:underline">
            Back to Services
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Header />
      <ClinicInfo />

      {/* Back Button */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/services"
            className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Services
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Image src={service.image} alt={service.title} width={80} height={80} className="rounded" />
            <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
          </div>
          <p className="text-lg opacity-90">{service.description}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{service.longDescription}</p>
          </div>

          {/* Procedure Details */}
          {service.procedure && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 bg-muted rounded-lg">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Procedure Duration</h3>
                <p className="text-muted-foreground">{service.procedure}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Care Type</h3>
                <p className="text-muted-foreground">{service.duration}</p>
              </div>
            </div>
          )}

          {/* Benefits */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-accent font-bold text-lg">✓</span>
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Treatment?</h3>
            <p className="text-lg opacity-90 mb-6">
              Contact us today to schedule your appointment with Dr. Gopal Raval
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
