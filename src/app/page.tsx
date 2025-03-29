import dynamic from 'next/dynamic';
import HeroSection from "@/components/HomePage/sections/HeroSection";
import ComparisonSection from "@/components/HomePage/sections/ComparisonSection";
import ClientOnly from "@/components/ClientOnly";

// Lazy load components that aren't needed immediately
const HighlightSection = dynamic(() => import("@/components/HomePage/sections/HighlightSection"), {
  loading: () => <div className="w-full h-[400px] bg-gray-100 animate-pulse"></div>
});

const PricingSection = dynamic(() => import("@/components/HomePage/sections/PricingSection"), {
  loading: () => <div className="w-full h-[400px] bg-gray-100 animate-pulse"></div>
});

// Dynamically import client components
const QAWrapper = dynamic(() => import("@/components/HomePage/sections/QA/QAWrapper"), {
  loading: () => <div className="w-full h-[300px] bg-gray-100 animate-pulse"></div>
});

const ContactUsWrapper = dynamic(() => import("@/components/HomePage/sections/ContactUs/ContactUsWrapper"), {
  loading: () => <div className="w-full h-[300px] bg-gray-100 animate-pulse"></div>
});

// Dynamically import MeetingSchedule with ssr disabled
const MeetingSchedule = dynamic(() => import("@/components/HomePage/MeetingSchedule"), {
  loading: () => <div className="w-full h-[600px] bg-gray-100 animate-pulse"></div>
});

export default function Home() {
  const lg_screen_width = "lg:w-[75vw]";
  const default_screen_width = "w-[85vw]";
  return (
    <div className="w-full">
      <HeroSection
        lg_screen_width={lg_screen_width}
        default_screen_width={default_screen_width}
      />
      <ComparisonSection
        lg_screen_width={lg_screen_width}
        default_screen_width={default_screen_width}
      />
      <HighlightSection
        lg_screen_width={lg_screen_width}
        default_screen_width={default_screen_width}
      />
      {/*
       <PortfolioSection
          lg_screen_width="lg:w-[75vw]"
          default_screen_width="w-[85vw]"
        />
      */}
      <ClientOnly>
        <QAWrapper
          lg_screen_width={lg_screen_width}
          default_screen_width={default_screen_width}
        />
        <ContactUsWrapper
          lg_screen_width={lg_screen_width}
          default_screen_width={default_screen_width}
        />
        <MeetingSchedule />
      </ClientOnly>
      <PricingSection
        lg_screen_width={lg_screen_width}
        default_screen_width={default_screen_width}
      />
      {/*  <CookieBanner />*/}
    </div>
  );
}
