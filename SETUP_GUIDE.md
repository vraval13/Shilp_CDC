# Shilp Chest Disease Centre - Quick Setup Guide

## Project Overview

A comprehensive, production-ready Next.js website for Shilp Chest Disease Centre featuring Dr. Gopal Raval's pulmonology services. The site includes a responsive design, SEO optimization, contact form with database integration, appointment booking, patient gallery, and 24/7 emergency information.

## Quick Start (5 Minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
```bash
# Copy example to actual .env file
cp .env.example .env.local

# Edit .env.local and add your credentials:
# - MONGODB_URI (MongoDB connection string)
# - EMAILJS credentials (optional)
# - Google verification code (optional)
```

### 3. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` - the site is now running!

## File Structure Breakdown

```
PROJECT ROOT
├── /app                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with Header, Footer, FloatingMenu
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles & theme
│   ├── /about               # About Dr. Raval page
│   ├── /services            # Services listing & detail pages
│   ├── /contact             # Contact page with form
│   ├── /gallery             # Gallery page
│   ├── /api/contact/        # Contact form API endpoint
│   ├── loading.tsx          # Loading skeleton
│   └── not-found.tsx        # 404 page
│
├── /components              # Reusable React components
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Footer with social links
│   ├── ClinicInfo.tsx       # Top info bar
│   ├── FloatingMenu.tsx     # Floating call/whatsapp menu
│   ├── HeroSection.tsx      # Hero with doctor intro
│   ├── ImageSlider.tsx      # Homepage carousel
│   ├── TypedMsg.tsx         # Typing animation
│   ├── ServiceCard.tsx      # Service card component
│   ├── ContactForm.tsx      # Contact form with validation
│   ├── ClinicData.tsx       # Animated statistics
│   ├── HappyClient.tsx      # Reviews carousel
│   ├── FAQ.tsx              # FAQ accordion
│   └── Gallery.tsx          # Gallery component
│
├── /lib                     # Utility functions & database
│   ├── mongodb.ts           # MongoDB connection
│   └── /models
│       └── Contact.ts       # Mongoose Contact schema
│
├── package.json             # Dependencies
├── next.config.mjs          # Next.js configuration
├── tsconfig.json            # TypeScript configuration
├── .env.example             # Environment variables template
├── README.md                # Full documentation
└── DEPLOYMENT.md            # Deployment guide
```

## Key Features Implemented

### 1. Homepage
- **Image Slider**: Auto-playing carousel with manual controls
- **Hero Section**: Doctor introduction with typing animation
- **Clinic Hours**: 24/7 emergency and operating hours
- **Services Overview**: Grid of 6 main services
- **Animated Stats**: Patient count, COVID cases, years experience
- **Patient Reviews**: Auto-rotating testimonials
- **FAQ Accordion**: Common questions with expand/collapse

### 2. About Page
- Doctor's complete bio and qualifications
- Medical degrees and certifications
- Areas of expertise
- Mission and values section

### 3. Services Pages
- Service listing with cards
- Dynamic service detail pages (8 services total)
- Benefits listing for each service
- CTA buttons linking to contact

### 4. Contact Page
- Contact form with real-time validation
- Contact cards (phone, email, hours, location)
- Embedded Google Map
- Form saves to MongoDB
- Optional email notification via EmailJS

### 5. Gallery Page
- Image grid with filtering
- Category filters (All, Facilities, Equipment, Team)
- Lightbox popup with prev/next navigation
- Image counter display

### 6. Global Features
- Responsive design (mobile-first)
- Smooth animations and transitions
- Floating menu (call, WhatsApp, scroll to top)
- Professional color scheme
- SEO-optimized metadata
- Accessibility features

## Database Setup

### MongoDB Atlas (Cloud)
1. Create account at mongodb.com/cloud/atlas
2. Create free cluster
3. Get connection string
4. Add to `.env.local` as `MONGODB_URI`

### Local MongoDB
```bash
# Install MongoDB
# macOS
brew tap mongodb/brew
brew install mongodb-community

# Start MongoDB
brew services start mongodb-community

# Connection string
MONGODB_URI=mongodb://localhost:27017/shilp-clinic
```

## Customization Guide

### Update Clinic Information

**Phone Numbers** (ClinicInfo.tsx, Footer.tsx, FloatingMenu.tsx):
```tsx
+91-XXXXXXXXXX → Your actual phone
```

**Email Address** (ClinicInfo.tsx, Footer.tsx, Contact page):
```tsx
contact@shilpchest.com → Your actual email
```

**Address** (Footer.tsx, Contact page):
```tsx
Clinic Address, City, State → Your actual address
```

**Operating Hours** (TimingInfo.tsx):
```tsx
9:00 AM - 6:00 PM → Your hours
```

### Change Color Scheme

Edit `/app/globals.css` color variables:
```css
:root {
  --primary: oklch(0.35 0.15 242);    /* Deep Blue */
  --secondary: oklch(0.45 0.12 180);  /* Teal */
  --accent: oklch(0.55 0.15 32);      /* Orange */
}
```

### Add More Services

1. Update `/app/services/page.tsx` - Add to services array
2. Update `/app/services/[id]/page.tsx` - Add to serviceData object

### Update Doctor Information

Edit `/app/about/page.tsx`:
- Doctor's bio
- Qualifications array
- Expertise areas
- Years of experience

## EmailJS Setup (Optional)

For automatic email notifications on contact form submissions:

1. Go to emailjs.com
2. Create account and new service
3. Create email template with variables:
   - `to_email`
   - `from_name`
   - `user_name`
   - `user_message`
   - `user_phone`
4. Get Service ID, Template ID, Public Key
5. Add to `.env.local`

Template example:
```
Dear {{user_name}},

Thank you for contacting us.
Message: {{user_message}}
Phone: {{user_phone}}

We will respond soon!
```

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint

# Build and view size analysis
npm run build
```

## Performance Tips

1. Images: Use Next.js Image component
2. Code: Keep components modular
3. Database: Add MongoDB indexes
4. Caching: Use Next.js caching strategies
5. Monitoring: Set up Vercel Analytics

## SEO Checklist

- ✅ Metadata configured in layout.tsx
- ✅ Semantic HTML throughout
- ✅ Alt text for images
- ✅ Mobile responsive
- ✅ Fast load times
- ✅ Structured data ready
- ⚠️ Update Google site verification code
- ⚠️ Submit to Google Search Console
- ⚠️ Add sitemap (auto-generated by Next.js)

## Testing

### Manual Testing Checklist

- [ ] Homepage loads correctly
- [ ] Navigation works on desktop and mobile
- [ ] Contact form submits successfully
- [ ] Form data appears in MongoDB
- [ ] Validation shows error messages
- [ ] Gallery filters and lightbox work
- [ ] Animations are smooth
- [ ] All links work correctly
- [ ] Footer social links open correctly
- [ ] FloatingMenu appears and functions

### Responsive Testing

```bash
# Test on different screen sizes
# Mobile: 320px, 375px, 425px
# Tablet: 768px, 1024px
# Desktop: 1280px, 1440px
```

## Deployment Quick Links

- **Vercel** (Recommended): vercel.com - 1-click deployment
- **Docker**: See DEPLOYMENT.md for Docker setup
- **AWS**: See DEPLOYMENT.md for EC2/Beanstalk
- **Google Cloud**: See DEPLOYMENT.md for Cloud Run
- **Azure**: See DEPLOYMENT.md for App Service
- **DigitalOcean**: See DEPLOYMENT.md for App Platform
- **Heroku**: See DEPLOYMENT.md for Heroku

## Troubleshooting

### Build Error: Cannot find module
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Database Connection Failed
- Check MongoDB URI in `.env.local`
- Verify MongoDB server is running
- Check IP whitelist in MongoDB Atlas (if cloud)
- Test connection string separately

### Form Not Submitting
- Verify MongoDB URI is correct
- Check browser console for errors
- Test API endpoint: POST to `/api/contact`
- Verify network request succeeds

### Styling Issues
```bash
rm -rf .next
npm run build
npm run dev
```

## Additional Resources

- **Next.js Docs**: nextjs.org/docs
- **Tailwind CSS**: tailwindcss.com/docs
- **MongoDB**: mongodb.com/docs
- **React Hook Form**: react-hook-form.com
- **Sonner Toast**: sonner.emilkowal.ski

## Security Notes

1. **API Route**: Contact form API only accepts POST requests
2. **Validation**: All inputs validated server-side
3. **Database**: MongoDB connection secured
4. **Environment**: All secrets in `.env.local` (never committed)
5. **Headers**: Security headers configured in next.config.mjs

## Next Steps

1. Update all clinic information
2. Set up MongoDB and EmailJS
3. Test locally on different devices
4. Deploy to Vercel or hosting platform
5. Submit to Google Search Console
6. Monitor with analytics
7. Regular backups of database

## Support & Questions

Refer to:
- **README.md** - Full documentation
- **DEPLOYMENT.md** - Deployment instructions
- Component comments - Inline documentation
- Next.js documentation - Framework questions

---

**Project built with Next.js 14+, Tailwind CSS, MongoDB, and modern React practices.**
