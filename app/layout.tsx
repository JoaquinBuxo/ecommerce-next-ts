import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { FavoriteProductsProvider } from '../context/FavoriteProductsContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Catalogue',
  description: 'Ecommerce with NextJS and GraphQL',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <FavoriteProductsProvider>{children}</FavoriteProductsProvider>
      </body>
    </html>
  );
}
