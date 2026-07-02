import "./globals.css";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nova Agency - IT Design Agency',
  description: 'Creative Design Agency',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en">
      <body>{children}</body>
    </html>
  );
}
