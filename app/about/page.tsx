import Header from '@/components/Header';
import ClinicInfo from '@/components/ClinicInfo';
import Footer from '@/components/Footer';
import DoctorCV from '@/components/DoctorCV';
import { BookOpen, Heart } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'About Dr. Gopal Raval | Shilp Chest Disease Centre',
  description: 'Learn about Dr. Gopal Raval, a renowned pulmonologist with extensive expertise in chest diseases and respiratory health',
};

export default function About() {
  const expertise = [
    'Lung Cancer',
    'Asthma',
    'COPD',
    'Respiratory Failure',
    'Interstitial Lung Disease (ILD)',
    'Pulmonary Hypertension',
    'Cystic Fibrosis',
    'Sleep Disorders',
    'Smoking Cessation',
    'Tuberculosis',
    'Bronchiectasis',
    'Pleural Diseases',
  ];

  return (
    <main>
      <Header />
      <ClinicInfo />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Dr. Gopal Raval</h1>
          <p className="text-lg opacity-90">MBBS, DNB (Resp. Medicine), DTCD, MNAMS, FSM, FCCS (Critical Care), HERMES</p>
        </div>
      </section>

      {/* Doctor Bio Section */}
      <section className="py-16 bg-white" style={{ backgroundImage: "url('/blurbgm.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/aboutdr.jpg"
                alt="Dr. Gopal Raval"
                width={256}
                height={320}
                className="rounded-2xl object-cover"
              />
            </div>

            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Dr. Gopal Raval
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Dr. Gopal Raval is a Consultant Pulmonologist and Critical Care Specialist at Shilp Chest Disease Center. He did M.B.B.S from MS University, Baroda. He did D.T.C.D from MS University, Baroda. He did D.N.B from Jaslok Hospital, Mumbai. He underwent Fellowship training in critical care medicine from Jaslok Hospital, Mumbai affiliated by Indo-Australian Critical Care.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                With over 15 years of extensive experience, he possesses deep clinical expertise in treating a wide range of respiratory conditions. These include lung cancer, asthma, COPD, respiratory failure, interstitial lung disease (ILD), pulmonary hypertension, cystic fibrosis, sleep disorders, and smoking cessation. Additionally, Dr. Raval specializes in managing tuberculosis, bronchiectasis, pleural diseases, and more.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                He holds International Board Certification in Sleep Medicine (IBSM) and European Diploma in Respiratory Medicine (EDARM). His commitment to patient care and expertise in pulmonary medicine has made him a trusted name in chest disease management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full CV from professional profile */}
      <DoctorCV />

      {/* Areas of Expertise */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 max-w-3xl mx-auto">
            <BookOpen className="text-secondary flex-shrink-0 mt-1" size={24} />
            <div>
              <h2 className="font-bold text-foreground text-2xl mb-4">Areas of Expertise</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {expertise.map((area) => (
                  <li key={area} className="text-muted-foreground">
                    ✓ {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Heart className="text-accent" size={28} />
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To provide compassionate, evidence-based respiratory healthcare using the latest diagnostic and therapeutic technologies. We are committed to improving the quality of life for patients with respiratory disorders.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Heart className="text-accent" size={28} />
                <h3 className="text-2xl font-bold text-foreground">Our Values</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-muted-foreground">Patient-centered care and compassion</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-muted-foreground">Excellence through continuous learning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-muted-foreground">Ethical medical practice</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-muted-foreground">Affordable quality healthcare</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
