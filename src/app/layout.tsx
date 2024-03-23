import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({ subsets: ["latin"], variable: '--font-public-sans' });

export const metadata: Metadata = {
  title: "REAL CLOUD DEVOPS EXPERTS",
  description: "REAL CLOUD DEVOPS EXPERTS",
  authors: [{
    name: 'nnoromiv',
    url: 'https://nnorom.netlify.app'
  }],
  creator: 'nnoromiv',
  twitter: {site: 'https://x.com/nnoromiv', creator: 'nnoromiv', title: 'website'}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={publicSans.className}>{children}</body>
    </html>
  );
}
