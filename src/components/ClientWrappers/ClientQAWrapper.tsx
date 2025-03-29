"use client"

import dynamic from 'next/dynamic';
import { ComponentProps } from 'react';

const QAWrapper = dynamic(() => import("@/components/HomePage/sections/QA/QAWrapper"), {
  ssr: false,
  loading: () => <div className="w-full h-[300px] bg-gray-100 animate-pulse"></div>
});

export default function ClientQAWrapper(props: ComponentProps<typeof QAWrapper>) {
  return <QAWrapper {...props} />;
}