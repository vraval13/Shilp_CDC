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

      <Footer />
    </main>
  );
}
