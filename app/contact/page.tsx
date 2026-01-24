import Header from "@/components/Header";
import ClinicInfo from "@/components/ClinicInfo";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: {
    absolute: "Contact - Dr. Gopal Raval",
  },
  description: "To Contact Dr. Gopal Raval",
};

export default function Contact() {
  return (
    <main>
      <Header />
      <ClinicInfo />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Shilp \ <span style={{ color: "red" }}> CONTACT</span>
          </h1>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone Card */}
            <div className="bg-white border-l-4 border-primary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Phone className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-foreground">Phone</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-2">
                Call us anytime
              </p>
              <p className="text-foreground font-semibold">+91 76983 66026</p>
              <p className="text-foreground font-semibold">
                +91 (079) 29916026
              </p>
            </div>

            {/* Email Card */}
            <div className="bg-white border-l-4 border-secondary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-secondary/10 rounded-full">
                  <Mail className="text-secondary" size={24} />
                </div>
                <h3 className="font-bold text-foreground">Email</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-2">
                Send us a message
              </p>
              <p className="text-foreground font-semibold text-sm break-all">
                shilpcdc@gmail.com
              </p>
            </div>

            {/* Hours Card */}
            <div className="bg-white border-l-4 border-accent p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-accent/10 rounded-full">
                  <Clock className="text-accent" size={24} />
                </div>
                <h3 className="font-bold text-foreground">Hours</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-2">
                Monday - Saturday
              </p>
              <p className="text-foreground font-semibold">
                11:30 AM - 6:30 PM
              </p>
            </div>

            {/* Location Card */}
            <div className="bg-white border-l-4 border-primary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <MapPin className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-foreground">Location</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-2">
                Visit our clinic
              </p>
              <p className="text-foreground font-semibold text-sm">
                304, Kshitij Aria, Opp Saviour Hospital, Sardar Patel Stadium
                Rd, near Stadium Petrol Pump, Navrangpura, Ahmedabad.
                <br />
                Gujarat - 380009
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                We'd love to hear from you
              </h2>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Book Appointment <span className="text-primary">Now!</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>
              <ContactForm />
            </div>

            {/* Map */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Our Location
              </h2>
              <div className="w-full h-96 bg-white rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4426590469357!2d72.55875447350844!3d23.04422751552323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85625d75d493%3A0xa3c4fcf3c51532ab!2sShilp%20Chest%20Disease%20Centre%20by%20Dr%20Gopal%20Raval!5e0!3m2!1sen!2sin!4v1718033306110!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-6 bg-white p-6 rounded-lg">
                <h3 className="font-bold text-foreground mb-3">
                  Clinic Address
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Shilp Chest Disease Centre
                  <br />
                  304, Kshitij Aria, Opp Saviour Hospital, Sardar Patel Stadium
                  Rd, near Stadium Petrol Pump, Navrangpura.
                  <br />
                  Ahmedabad, Gujarat - 380009
                  <br />
                  <br />
                  <strong>Contact:</strong> +91 76983 66026 | +91 (079) 2991
                  6026
                  <br />
                  <strong>Email:</strong> shilpcdc@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
