import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://noa-upload-page.vercel.app/'),
  title: 'Noa Upload',
  description: 'Sube cualquier archivo y recive un link inmediato para compartirlo, sin cuentas ni anuncios',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/cloud.svg',
  },
  openGraph: {
    images: [
      'https://res.cloudinary.com/dazt6g3o1/image/upload/v1706460476/onmkzee3qpo7zs7hwxpl.png',
    ],
  },
};

export default function RootLayout(params: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{params.children}</body>
    </html>
  );
}
