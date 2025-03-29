/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import dynamic from "next/dynamic";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { ConsentProvider } from "@/context/ConsentContext";
import { Plus_Jakarta_Sans } from 'next/font/google';

// Lazy load NavBar to reduce initial bundle size
const NavBar = dynamic(() => import("@/components/NavBar"), {
  ssr: true,
  loading: () => <div className="w-full h-[98px] bg-black"></div>
});

// Lazy load non-critical components
const DeferredScriptLoader = dynamic(() => import("@/components/DeferredScriptLoader"), { ssr: false });

config.autoAddCss = false;

// Optimize font loading
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "DashcruiseDev - Web Design & Development Agency",
  description:
    "We build fast, beautiful websites for startups, businesses and individuals looking for a custom design and SEO",
  keywords: ["web agency", "frontend development", "custom website"],
  authors: [{ name: "DashcruiseDev", url: "https://dashcruisedev.com" }],
  creator: "DashcruiseDev",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "DashcruiseDev - Web Design & Development",
    description:
      "Modern websites crafted with performance and user experience in mind",
  },
};

const lg_screen_width = "lg:w-[75vw]";
const default_screen_width = "w-[85vw]";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://scripts.simpleanalyticscdn.com" />
        <link rel="dns-prefetch" href="https://js.stripe.com" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/logo.svg" as="image" />
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
      </head>
      <body className={`${jakarta.className} antialiased`}>
        <ConsentProvider>
          <NavBar
            lg_screen_width={lg_screen_width}
            default_screen_width={default_screen_width}
          />
          {children}
          <DeferredScriptLoader />
        </ConsentProvider>
      </body>
    </html>
  );
}
