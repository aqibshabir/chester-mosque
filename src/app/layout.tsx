import type { Metadata } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

export const metadata: Metadata = {
  title: 'Chester Mosque & Islamic Centre | Shah Jalal Jame Masjid',
  description:
    'The only mosque serving the Muslim community in Chester. Find prayer times, events, and religious services.',

  applicationName: 'Shah Jalal Jame Masjid & Islamic Centre',
  referrer: 'origin-when-cross-origin',

  keywords: [
    'Chester Mosque',
    'Mosque in Chester',
    'Shah Jalal Jame Masjid',
    'Islamic Centre Chester',
    'Prayer times Chester',
    'Eid Chester',
    'Ramadan Chester',
  ],

  authors: [{ name: 'Aqib Shabir', url: 'https://aqibshabir.com' }],
  creator: 'Aqib Shabir',
  publisher: 'Shah Jalal Jame Masjid & Islamic Centre',

  formatDetection: { email: true, address: true, telephone: true },

  openGraph: {
    title: 'Shah Jalal Jame Masjid & Islamic Centre | Chester Mosque & Islamic Centre',
    description:
      'The official website for Chester Mosque & Islamic Centre. Find prayer times, events, and Islamic services for the local community.',
    url: 'https://www.shahjalalmosquechester.org/',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/aqibshabir/chester-mosque/master/public/logo-with-text.png',
        width: 1200,
        height: 630,
        alt: 'Shah Jalal Jame Masjid & Islamic Centre - Chester Mosque & Islamic Centre',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900 antialiased">
        <Navbar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
