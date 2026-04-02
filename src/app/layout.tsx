import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '../styles/index.css';

export const metadata: Metadata = {
  title: 'Echelon Media',
  description: 'Creative digital agency focused on branding, content, and growth.',
  icons: {
    icon: '/assets/image/logo.png',
    shortcut: '/assets/image/logo.png',
    apple: '/assets/image/logo.png',
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
