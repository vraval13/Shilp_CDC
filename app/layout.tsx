import React from "react"
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/next'
import FloatingMenu from '@/components/FloatingMenu'
import { Toaster } from 'sonner'
import './globals.css'

const roboto = Roboto({ 
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto'
});

export const metadata: Metadata = {
  title: 'Dr. Gopal Raval - Best Pulmonologist in Ahmedabad | Critical Care Specialist | Sleep Disorder Specialist',
  description: 'Expert pulmonology and chest disease treatment by Dr. Gopal Raval. Comprehensive respiratory health services including PFT, COPD, Asthma, and COVID-19 care.',
  keywords: 'pulmonology, chest disease, respiratory health, Dr. Gopal Raval, PFT test, COPD treatment, asthma care, COVID-19',
  generator: 'Next.js',
  verification: {
    google: 'your-google-site-verification-code'
  },
  openGraph: {
    title: 'Shilp Chest Disease Centre',
    description: 'Expert pulmonology and respiratory health services',
    url: 'https://drgopalraval.vercel.app',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="file.png" type="image/x-icon" />
        <meta name="theme-color" content="#35248a" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      </head>
      <body className={`${roboto.className} antialiased`}>
        {children}
        <FloatingMenu />
        <Toaster position="top-right" richColors />
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-V40DB84Z77" />
    </html>
  )
}
