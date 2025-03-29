"use client"

import dynamic from 'next/dynamic';
import { ComponentProps } from 'react';

const ContactUsWrapper = dynamic(() => import("@/components/HomePage/sections/ContactUs/ContactUsWrapper"), {
  ssr: false,
  loading: () => <div className="w-full h-[300px] bg-gray-100 animate-pulse"></div>
});

export default function ClientContactUsWrapper(props: ComponentProps<typeof ContactUsWrapper>) {
  return <ContactUsWrapper {...props} />;
}