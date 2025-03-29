"use client"

import dynamic from 'next/dynamic';

// Dynamically import the DeferredScriptLoader with ssr: false
const DeferredScriptLoader = dynamic(() => import("@/components/DeferredScriptLoader"), { 
  ssr: false 
});

export default function ClientScriptLoader() {
  return <DeferredScriptLoader />;
}