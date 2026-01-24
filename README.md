# Shilp Chest Disease Centre - Website

A comprehensive Next.js website for a pulmonology clinic offering services for respiratory health, chest diseases, and emergency respiratory care by Dr. Gopal Raval.

## Features

- **Responsive Design**: Fully mobile-responsive website built with Next.js 14+ and Tailwind CSS
- **SEO Optimized**: Proper metadata, semantic HTML, and performance optimization
- **Contact Management**: Form submission with MongoDB integration and email notifications via EmailJS
- **Image Gallery**: Interactive gallery with filtering and lightbox functionality
- **Service Pages**: Detailed service pages for various respiratory treatments
- **Patient Reviews**: Rotating testimonials with auto-play functionality
- **Appointment Booking**: Easy appointment booking through contact form
- **24/7 Emergency Info**: Prominent emergency contact information
- **Modern UI**: Professional design with smooth animations and transitions

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS v4 + CSS Modules
- **Database**: MongoDB with Mongoose ODM
- **Email Service**: EmailJS for contact form notifications
- **Form Validation**: React Hook Form with Zod
- **Icons**: React Icons (Font Awesome, Lucide)
- **Notifications**: Sonner Toast
- **Font**: Roboto from Google Fonts

## Installation

### 1. Clone and Setup

```bash
# Clone the repository
git clone <repo-url>
cd shilp-clinic

# Install dependencies
npm install
```

### 2. Environment Configuration

Copy `.env.example` to `.env.local` and fill in your credentials:

```bash
cp .env.example .env.local
```

### 3. MongoDB Setup

1. Create a MongoDB cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Get your connection string
3. Add to `.env.local`:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/shilp-clinic?retryWrites=true&w=majority
   ```

### 4. EmailJS Setup (Optional)

To enable automatic email notifications:

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up and create a new service
3. Create an email template for contact form responses
4. Get your Service ID, Template ID, and Public Key
5. Add to `.env.local`:
   ```
   EMAILJS_SERVICE_ID=your_service_id
   EMAILJS_TEMPLATE_ID=your_template_id
   EMAILJS_PUBLIC_KEY=your_public_key
   ```

### 5. Google Services (Optional)

For Google site verification and Maps:

1. Add your Google site verification code to `.env.local`
2. Get Google Maps API key and add to `.env.local`

## Running the Project

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Linting
npm run lint
```

Visit `http://localhost:3000` to see the website.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Header, Footer
│   ├── page.tsx            # Home page
│   ├── about/
│   │   └── page.tsx        # About Dr. Raval
│   ├── services/
│   │   ├── page.tsx        # Services listing
│   │   └── [id]/
│   │       └── page.tsx    # Service detail pages
│   ├── contact/
│   │   └── page.tsx        # Contact page with form
│   ├── gallery/
│   │   └── page.tsx        # Photo gallery
│   ├── api/
│   │   └── contact/
│   │       └── route.ts    # Contact form API endpoint
│   ├── globals.css         # Global styles with theme
│   ├── not-found.tsx       # 404 page
│   └── loading.tsx         # Loading skeleton
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer with social links
│   ├── ClinicInfo.tsx      # Top info bar with hours
│   ├── HeroSection.tsx     # Hero with doctor intro
│   ├── ImageSlider.tsx     # Homepage image carousel
│   ├── TimingInfo.tsx      # Hours and emergency info
│   ├── TypedMsg.tsx        # Typing animation component
│   ├── ServiceCard.tsx     # Service card component
│   ├── ContactForm.tsx     # Contact form with validation
│   ├── ClinicData.tsx      # Animated statistics
│   ├── HappyClient.tsx     # Patient testimonials
│   ├── FAQ.tsx             # FAQ accordion
│   └── Gallery.tsx         # Photo gallery component
├── lib/
│   ├── mongodb.ts          # MongoDB connection
│   └── models/
│       └── Contact.ts      # Contact form schema
└── public/                 # Static assets
```

## Key Components

### Header
- Logo and clinic name
- Navigation menu with active link highlighting
- Mobile-responsive hamburger menu

### Contact Form
- Real-time field validation
- Error messages for each field
- Form submission to API endpoint
- Saves to MongoDB database
- Optional email notification via EmailJS
- Toast notifications for success/error

### Gallery
- Filter by category (All, Facilities, Equipment, Team)
- Click to open lightbox view
- Previous/Next navigation in lightbox
- Image counter display

### Service Pages
- Detailed service information
- Benefits listing
- Procedure duration and type
- Call-to-action button

### Reviews
- Auto-rotating testimonials
- Manual navigation with prev/next buttons
- Pause auto-play when manually navigating
- Star ratings display

## Database Schema

### Contact Model

```typescript
{
  name: String (required),
  email: String (required, validated),
  phone: String (required),
  message: String (required, min: 10 chars),
  createdAt: Date (auto)
}
```

## Customization

### Update Clinic Information

Edit `/components/ClinicInfo.tsx` and `/components/Footer.tsx` with:
- Phone numbers
- Email addresses
- Operating hours
- Address
- Social media links

### Update Colors

Edit `/app/globals.css` to change the color theme:
```css
--primary: oklch(0.35 0.15 242);    /* Deep blue */
--secondary: oklch(0.45 0.12 180);  /* Teal */
--accent: oklch(0.55 0.15 32);      /* Orange */
```

### Add More Services

1. Update the services array in `/app/services/page.tsx`
2. Add service details to `serviceData` object in `/app/services/[id]/page.tsx`

### Update Doctor Information

Edit `/app/about/page.tsx` with:
- Doctor's full name and bio
- Qualifications
- Areas of expertise
- Years of experience

## SEO Optimization

- Metadata for all pages
- Open Graph tags for social sharing
- Semantic HTML structure
- Alt text for images
- Mobile viewport settings
- Google site verification support

## Performance

- Image optimization with Next.js Image component
- CSS Modules for scoped styling
- Lazy loading of components
- Optimized animations with CSS
- Minimal bundle size

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect GitHub repo to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

```bash
npm run build
npm start
```

### Deploy to Other Platforms

The project is production-ready for deployment to:
- AWS
- Google Cloud
- Azure
- DigitalOcean
- Netlify
- Any Node.js hosting

## Email Template Setup (EmailJS)

Create a template in EmailJS with variables:
- `to_email`: Recipient email
- `from_name`: Clinic name
- `user_name`: Patient name
- `user_message`: Message content
- `user_phone`: Patient phone

Example template content:
```
Dear {{user_name}},

Thank you for reaching out to Shilp Chest Disease Centre.

We have received your message:
{{user_message}}

Our team will contact you shortly on {{user_phone}}.

Best regards,
Shilp Chest Disease Centre
Dr. Gopal Raval
```

## Troubleshooting

### Contact form not sending?
- Check MongoDB URI in `.env.local`
- Verify database connection
- Check EmailJS credentials if email notifications enabled

### Images not loading?
- Verify image paths are correct
- Check file permissions
- Ensure images are in `/public` directory

### Styling issues?
- Clear Next.js cache: `rm -rf .next`
- Rebuild: `npm run build`

## Support

For issues or questions, contact the development team.

## License

All rights reserved. Shilp Chest Disease Centre.
# pulmonology-clinic-website
