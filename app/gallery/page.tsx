import Header from '@/components/Header';
import ClinicInfo from '@/components/ClinicInfo';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';

export const metadata = {
  title: 'Gallery | Shilp Chest Disease Centre',
  description: 'View our clinic facilities, medical equipment, and team at Shilp Chest Disease Centre',
};

export default function GalleryPage() {
  return (
    <main>
      <Header />
      <ClinicInfo />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl md:text-5xl font-semibold mb-4"> Shilp \ <span style={{color:"red"}}> GALLERY</span></h1>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Gallery />
        </div>
      </section>

      {/* Facilities Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Facilities</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-muted p-8 rounded-lg">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Modern Clinic</h3>
              <p className="text-muted-foreground">
                Spacious, well-ventilated clinic with multiple consultation rooms and comfortable waiting area
              </p>
            </div>

            <div className="bg-muted p-8 rounded-lg">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Advanced Equipment</h3>
              <p className="text-muted-foreground">
                State-of-the-art diagnostic equipment including spirometer, oxygen therapy, and monitoring systems
              </p>
            </div>

            <div className="bg-muted p-8 rounded-lg">
              <div className="text-4xl mb-4">🚑</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Emergency Unit</h3>
              <p className="text-muted-foreground">
                Dedicated 24/7 emergency respiratory care unit with ICU-level monitoring and oxygen support
              </p>
            </div>

            <div className="bg-muted p-8 rounded-lg">
              <div className="text-4xl mb-4">👨‍⚕️</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Expert Team</h3>
              <p className="text-muted-foreground">
                Experienced pulmonologists, nurses, and support staff dedicated to patient care
              </p>
            </div>

            <div className="bg-muted p-8 rounded-lg">
              <div className="text-4xl mb-4">🧪</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Testing Lab</h3>
              <p className="text-muted-foreground">
                Comprehensive pulmonary function testing laboratory with modern equipment
              </p>
            </div>

            <div className="bg-muted p-8 rounded-lg">
              <div className="text-4xl mb-4">⚕️</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Patient Comfort</h3>
              <p className="text-muted-foreground">
                Comfortable environment with minimal wait times and compassionate patient care approach
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
