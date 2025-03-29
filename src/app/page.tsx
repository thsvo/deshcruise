import dynamic from 'next/dynamic';
import HeroSection from "@/components/HomePage/sections/HeroSection";
import ClientOnly from "@/components/ClientOnly";
import ClientQAWrapper from "@/components/ClientWrappers/ClientQAWrapper";
import ClientContactUsWrapper from "@/components/ClientWrappers/ClientContactUsWrapper";
import ClientMeetingSchedule from "@/components/ClientWrappers/ClientMeetingSchedule";

// Lazy load components with improved loading states and priority
const ComparisonSection = dynamic(() => import("@/components/HomePage/sections/ComparisonSection"), {
  loading: () => <div className="w-full h-[300px] bg-gray-100 animate-pulse"></div>
});

const HighlightSection = dynamic(() => import("@/components/HomePage/sections/HighlightSection"), {
  loading: () => <div className="w-full h-[400px] bg-gray-100 animate-pulse"></div>
});

const PricingSection = dynamic(() => import("@/components/HomePage/sections/PricingSection"), {
  loading: () => <div className="w-full h-[400px] bg-gray-100 animate-pulse"></div>
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
      
      {/* Add priority to first visible sections */}
      <ComparisonSection
        lg_screen_width={lg_screen_width}
        default_screen_width={default_screen_width}
      />
      
      {/* Use Suspense boundaries for better loading control */}
      <ClientOnly>
        <HighlightSection
          lg_screen_width={lg_screen_width}
          default_screen_width={default_screen_width}
        />
      </ClientOnly>
      
      {/* Load below-the-fold content with lower priority */}
      <ClientOnly>
        <ClientQAWrapper
          lg_screen_width={lg_screen_width}
          default_screen_width={default_screen_width}
        />
        <ClientContactUsWrapper
          lg_screen_width={lg_screen_width}
          default_screen_width={default_screen_width}
        />
        <ClientMeetingSchedule />
      </ClientOnly>
      
      <PricingSection
        lg_screen_width={lg_screen_width}
        default_screen_width={default_screen_width}
      />
    </div>
  );
}
