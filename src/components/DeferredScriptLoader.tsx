"use client"

import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function DeferredScriptLoader() {
  const [shouldLoadScripts, setShouldLoadScripts] = useState(false);
  
  useEffect(() => {
    // Load non-critical scripts after page is interactive
    const handleLoad = () => {
      // Delay loading scripts until after main content is rendered
      const timer = setTimeout(() => {
        setShouldLoadScripts(true);
      }, 3000); // 3 second delay
      
      return () => clearTimeout(timer);
    };
    
    // Check if page has already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);
  
  if (!shouldLoadScripts) return null;
  
  return (
    <>
      {/* Google reCAPTCHA */}
      <Script
        strategy="lazyOnload"
        src="https://www.google.com/recaptcha/api.js?render=6LeQgtsaA...&trustedtypes=true"
      />
      
      {/* Analytics */}
      <Script
        strategy="lazyOnload"
        src="https://scripts.simpleanalyticscdn.com/latest.js"
      />
    </>
  );
}