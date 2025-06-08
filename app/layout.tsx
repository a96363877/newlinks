import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GoogleAnalytics } from "@next/third-parties/google"
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'اشحن خطك و تصفح اخر العروض  ',
  description: 'اخر العروض الحصرية ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body className={inter.className} dir='rtl'>{children}
      
      <GoogleAnalytics gaId="AW-17109420126" />
      </body>
      
    </html>
  );
}
