import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rohith Ejjaparapu | Portfolio',
  description: 'Personal portfolio and professional journey of Rohith Ejjaparapu - AI/ML Engineer and Consultant.',
  icons: {
    icon: [
      { url: '/favicon-new.ico', type: 'image/x-icon' },
      { url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🚀</text></svg>' }
    ],
    apple: '🚀',
    shortcut: '🚀',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&family=Nunito:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
