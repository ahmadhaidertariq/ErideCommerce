import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import GoogleAnalytics from '@/components/GoogleAnalytics';

export const metadata: Metadata = {
  title: 'Eridecommerce - Amazon FBA Private Label & Wholesale Management',
  description: 'Helping Amazon brands scale profitably through expert Private Label & Wholesale Management, PPC optimization, and brand management services.',
  keywords: 'Amazon FBA, Private Label, Wholesale, PPC, Brand Management, Amazon Optimization',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <ChatWidget />
        <Footer />
      </body>
    </html>
  );
}

