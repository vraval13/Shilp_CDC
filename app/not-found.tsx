import Link from 'next/link';
import Header from '@/components/Header';
import ClinicInfo from '@/components/ClinicInfo';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <main>
      <Header />
      <ClinicInfo />

      <section className="min-h-96 bg-gradient-to-r from-primary to-secondary text-primary-foreground py-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="text-6xl md:text-8xl font-bold mb-4 opacity-50">404</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Page Not Found</h1>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have been removed or the URL might be incorrect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Back to Home
            </Link>
            <Link
              href="/services"
              className="inline-block border-2 border-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
