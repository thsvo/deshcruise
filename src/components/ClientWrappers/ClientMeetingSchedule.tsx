"use client"

import dynamic from 'next/dynamic';

const MeetingSchedule = dynamic(() => import("@/components/HomePage/MeetingSchedule"), {
  ssr: false,
  loading: () => <div className="w-full h-[600px] bg-gray-100 animate-pulse"></div>
});

export default function ClientMeetingSchedule() {
  return <MeetingSchedule />;
}