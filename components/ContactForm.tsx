'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'sonner';

const serviceID = 'service_nr7olxw'; 
const templateID = 'template_94t3a4i'; 
const userID = 'tEAGb6bWr5kJvK4qy'; 

interface ContactFormData {
  username: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [user, setUser] = useState<ContactFormData>({
    username: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(serviceID, templateID, e.target as HTMLFormElement, userID)
      .then((result) => {
        console.log(result.text);
        toast.success('Thank you for your message!');
        setUser({
          username: '',
          email: '',
          phone: '',
          message: ''
        });
      }, (error) => {
        console.log(error.text);
        toast.error('There was an error submitting your message! Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="username" className="block text-sm font-medium text-foreground mb-2">
          Full Name *
        </label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Enter your full name"
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
          value={user.username}
          onChange={handleChange}
          required
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          Email Address *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
          value={user.email}
          onChange={handleChange}
          required
          autoComplete="off"
        />
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
          Phone Number *
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Enter your phone number"
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
          value={user.phone}
          onChange={handleChange}
          required
          autoComplete="off"
        />
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter your message or health concern"
          rows={6}
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none"
          value={user.message}
          onChange={handleChange}
          required
          autoComplete="off"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
