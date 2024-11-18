import type { Metadata } from "next";
import localFont from "next/font/local";
import "./css/styles.css";
import {  Navbar } from "./components";
import Head from "next/head";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  authors: {
    name: '9LAPAK',
  },
  alternates: {
    canonical: 'https://9lapak6.fun',
  },
  keywords: [
    'slot 9lapak anti rungkad terpercaya',
    'situs gacor slot 9lapak terbaik',
    'situs slot gacor anti rungkad terbaik',
    '9lapak slot gacor anti rungkad',
    'link alternatif 9lapak gacor'
  ],
  title: "SITUS 9LAPAK LINK ALTERNATIF DAFTAR KE SITUS RESMI",
  description: "9Lapak adalah platform game populer di Indonesia dengan tampilan terbaik. Mainkan berbagai jenis game dengan RTP tinggi dan gacor, mulai dari slot, skill, arcade, fast, live casino, hingga tembak ikan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous" />
      </body>
    </html>
  );
}
