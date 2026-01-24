# Component Documentation

## Overview

This document provides detailed information about each component used in the Shilp Chest Disease Centre website.

---

## Layout Components

### Header
**File**: `components/Header.tsx`
**Type**: Client Component

**Purpose**: Main navigation header with logo and menu

**Props**: None

**Features**:
- Logo with clinic name
- Navigation links (Home, About, Services, Gallery, Contact)
- Active link highlighting
- Mobile responsive with hamburger menu
- Sticky positioning

**Usage**:
```tsx
<Header />
```

**Styling**: 
- Background: white
- Border: bottom border
- Responsive: Hidden menu on mobile, hamburger icon visible

---

### ClinicInfo
**File**: `components/ClinicInfo.tsx`
**Type**: Client Component

**Purpose**: Top bar displaying clinic contact info

**Props**: None

**Features**:
- Three columns: Phone, Hours, Email
- Clickable icons that open popup modals
- Phone popup shows multiple numbers
- Email popup shows multiple addresses
- Responsive grid layout

**Usage**:
```tsx
<ClinicInfo />
```

**States**:
- `showPhonePopup`: boolean
- `showEmailPopup`: boolean

---

### Footer
**File**: `components/Footer.tsx`
**Type**: Client Component

**Purpose**: Footer with links, contact info, and map

**Props**: None

**Features**:
- 4 column layout: About, Quick Links, Contact Info, Social Links
- Social media icons (Facebook, Instagram, LinkedIn, Twitter)
- Embedded Google Map
- Copyright information
- Links to all main pages

**Usage**:
```tsx
<Footer />
```

**Icons Used**:
- FaFacebook, FaInstagram, FaLinkedin, FaTwitter (React Icons)
- Phone, Mail, MapPin, Clock (Lucide)

---

### FloatingMenu
**File**: `components/FloatingMenu.tsx`
**Type**: Client Component

**Purpose**: Floating action menu for quick contact

**Props**: None

**Features**:
- Fixed position bottom-right
- Expandable menu with three quick actions
- Scroll to top button
- WhatsApp chat button
- Call button with tel: link
- Animated entrance/exit
- Label when closed
- Resume button when manually navigating

**Usage**:
```tsx
<FloatingMenu />
```

**States**:
- `isVisible`: boolean - Menu expanded/collapsed

**Actions**:
- Scroll to top smoothly
- Open WhatsApp chat
- Initiate phone call

---

## Hero & Banner Components

### HeroSection
**File**: `components/HeroSection.tsx`
**Type**: Client Component

**Purpose**: Hero section with doctor introduction

**Props**: None

**Features**:
- Gradient background (primary to secondary)
- Animated typing message (Breathing, Chest Care, Respiratory Health)
- Doctor introduction text
- Two CTA buttons (Book Appointment, Explore Services)
- Emergency contact highlight
- Grid layout with image placeholder

**Usage**:
```tsx
<HeroSection />
```

**SubComponents**:
- Uses `<TypedMsg />` component

---

### ImageSlider
**File**: `components/ImageSlider.tsx`
**Type**: Client Component

**Purpose**: Auto-playing carousel on homepage

**Props**: None

**Features**:
- 3 slides with titles, descriptions, CTAs
- Auto-play every 5 seconds
- Manual navigation with prev/next buttons
- Indicator dots for slide selection
- Animated background with blob effect
- Slide animations
- Pause/resume auto-play

**Usage**:
```tsx
<ImageSlider />
```

**States**:
- `currentSlide`: number
- `autoPlay`: boolean

**Slides Content**:
1. Expert Care - Learn More
2. Emergency - Contact Us
3. Diagnostics - View Services

---

## Info Components

### TimingInfo
**File**: `components/TimingInfo.tsx`
**Type**: Client Component

**Purpose**: Display clinic operating hours and emergency info

**Props**: None

**Features**:
- Two sections: 24/7 Emergency, Operating Hours
- Color-coded cards
- Icon indicators
- Responsive 2-column grid on desktop, stacked on mobile

**Usage**:
```tsx
<TimingInfo />
```

---

### ClinicData
**File**: `components/ClinicData.tsx`
**Type**: Client Component

**Purpose**: Display animated statistics

**Props**: None

**Features**:
- 4 statistics with animated counters:
  - 25,000+ Patients Treated
  - 5,000+ COVID Cases
  - 20+ Years Experience
  - 100% Success Rate
- Animated counter from 0 to target number
- Smooth animation over 2 seconds
- 4-column grid on desktop, 1-column on mobile

**Usage**:
```tsx
<ClinicData />
```

**SubComponent**: `AnimatedCounter`
- Props: `end` (number), `label` (string), `suffix` (string)
- Renders animated number with label

---

## Service Components

### ServiceCard
**File**: `components/ServiceCard.tsx`
**Type**: Client Component

**Purpose**: Individual service card

**Props**:
```tsx
interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}
```

**Features**:
- Links to service detail page
- Icon display
- Title and description
- "Learn More" link with arrow
- Hover animation (lift up, shadow)
- Top border accent in primary color

**Usage**:
```tsx
<ServiceCard
  id="pft-test"
  title="PFT Test"
  description="Pulmonary Function Test..."
  icon="📊"
/>
```

---

## Form Components

### ContactForm
**File**: `components/ContactForm.tsx`
**Type**: Client Component

**Purpose**: Contact form with validation and submission

**Props**: None

**Features**:
- 4 fields: Name, Email, Phone, Message
- Real-time validation using React Hook Form
- Error messages for each field
- Submit button with loading state
- Form resets after successful submission
- Toast notifications (success/error)
- Sends to `/api/contact` endpoint

**Usage**:
```tsx
<ContactForm />
```

**Validation Rules**:
- Name: Required, min 2 chars
- Email: Required, valid email format
- Phone: Required, valid phone format
- Message: Required, min 10 chars, max 1000 chars

**States**:
- `isSubmitting`: boolean

**API Integration**:
- POST to `/api/contact`
- Sends: name, email, phone, message
- Returns: success message with contact data

---

## Content Components

### TypedMsg
**File**: `components/TypedMsg.tsx`
**Type**: Client Component

**Purpose**: Typing animation for keywords

**Props**:
```tsx
interface TypedMsgProps {
  words?: string[];
  speed?: number;
  delayBetween?: number;
}
```

**Features**:
- Cycles through words with typing effect
- Cursor animation
- Configurable speed and delay
- Default words: ["Caring", "Expert", "Trusted"]

**Usage**:
```tsx
<TypedMsg 
  words={['Breathing', 'Health', 'Care']}
  speed={80}
  delayBetween={2000}
/>
```

**States**:
- `displayText`: string
- `currentWordIndex`: number
- `isDeleting`: boolean
- `charIndex`: number

---

### HappyClient
**File**: `components/HappyClient.tsx`
**Type**: Client Component

**Purpose**: Patient testimonials carousel

**Props**: None

**Features**:
- Auto-rotating reviews every 5 seconds
- 4 sample reviews with 5-star ratings
- Manual navigation with prev/next buttons
- Indicator dots to jump to review
- Auto-play pause when manually navigating
- Resume button to restart auto-play
- Star rating display

**Usage**:
```tsx
<HappyClient />
```

**States**:
- `currentIndex`: number
- `autoRotate`: boolean

**Review Structure**:
```tsx
{
  id: number,
  name: string,
  text: string,
  rating: number (1-5)
}
```

---

### FAQ
**File**: `components/FAQ.tsx`
**Type**: Client Component

**Purpose**: Frequently asked questions accordion

**Props**: None

**Features**:
- 6 pre-loaded FAQ items
- Click to expand/collapse
- Smooth animations
- Chevron indicator rotation
- Hover effects
- Responsive design

**Usage**:
```tsx
<FAQ />
```

**States**:
- `expandedId`: number | null

**FAQ Items**:
1. Operating hours
2. Emergency services
3. First visit requirements
4. Insurance acceptance
5. Appointment booking
6. Pulmonary function test info

---

## Gallery Components

### Gallery
**File**: `components/Gallery.tsx`
**Type**: Client Component

**Purpose**: Interactive photo gallery with lightbox

**Props**: None

**Features**:
- 8 sample images (facilities, equipment, team)
- Filter by category (All, Facilities, Equipment, Team)
- Click image to open lightbox
- Lightbox with prev/next navigation
- Image counter (current/total)
- Close button
- Responsive grid (1 col mobile, 2 cols tablet, 4 cols desktop)

**Usage**:
```tsx
<Gallery />
```

**States**:
- `selectedImage`: GalleryImage | null
- `filter`: string

**Image Structure**:
```tsx
{
  id: number,
  title: string,
  category: 'facilities' | 'equipment' | 'team'
}
```

---

## Page Components (Not Covered Above)

### Page Layouts

Each page follows this structure:
```tsx
<main>
  <Header />
  <ClinicInfo />
  
  {/* Page Specific Content */}
  
  <Footer />
</main>
```

### Home Page (/app/page.tsx)
- ImageSlider
- HeroSection
- TimingInfo
- Services grid (ServiceCard components)
- ClinicData
- HappyClient
- FAQ

### About Page (/app/about/page.tsx)
- Doctor bio section
- Qualifications list
- Areas of expertise
- Mission and values

### Services Page (/app/services/page.tsx)
- Services grid with ServiceCard
- Why Choose Us section (6 feature cards)

### Service Detail Page (/app/services/[id]/page.tsx)
- Dynamic service information
- Benefits listing
- Procedure details
- CTA button

### Contact Page (/app/contact/page.tsx)
- Contact cards (phone, email, hours, location)
- ContactForm component
- Embedded Google Map
- Clinic address info

### Gallery Page (/app/gallery/page.tsx)
- Gallery component
- Facilities info section (6 feature cards)

---

## Utility Components

### AnimatedCounter (Inside ClinicData)
Used within ClinicData component to animate numbers

**Behavior**:
- Counts from 0 to end value over 2 seconds
- Updates every frame
- Displays suffix (%, +, etc.)

---

## Styling Patterns

### Color Usage
- **Primary** (Deep Blue): Main brand color, buttons, accents
- **Secondary** (Teal): Secondary buttons, accents
- **Accent** (Orange): Call-to-action, highlights
- **Muted**: Backgrounds, secondary information
- **Foreground**: Text color
- **Border**: Border color

### Spacing
All components use Tailwind spacing scale (4px base unit):
- `p-4` = 16px padding
- `gap-6` = 24px gap
- `py-16` = 64px vertical padding

### Animations
- Fade in: `animate-fade-in`
- Slide up: `animate-slide-up`
- Bounce: `animate-bounce`
- Pulse: `animate-pulse-custom`

---

## Best Practices

1. **Use Client Components**: Interactive features use 'use client'
2. **Props Over State**: Pass data via props when possible
3. **Error Handling**: Forms validate and show user-friendly errors
4. **Accessibility**: Alt text, ARIA labels, semantic HTML
5. **Responsive Design**: Mobile-first approach with breakpoints
6. **Performance**: Lazy load images, optimize animations

---

## Adding New Components

1. Create in `/components` folder
2. Add TypeScript types/interfaces
3. Use 'use client' if interactive
4. Import required icons/utilities
5. Style with Tailwind classes
6. Export as default
7. Document in this file

---

## Common Issues & Solutions

**Component not updating**: Check if using client component hook
**Styling not applied**: Verify Tailwind class names
**API not working**: Check endpoint path and request method
**Image not showing**: Verify path and alt text
**Animation not smooth**: Use CSS animations, not JS
