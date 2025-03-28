"use client";

//import dynamic from "next/dynamic";

import QASection from "./QASection";

//const QASection = dynamic(() => import("./QASection"), { ssr: false, loading: () => <p>Loading FAQ...</p> });
export default function QAWrapper({
  lg_screen_width,
  default_screen_width,
}: {
  lg_screen_width: string;
  default_screen_width: string;
}) {
  return (
    <QASection
      lg_screen_width={lg_screen_width}
      default_screen_width={default_screen_width}
    />
  );
}
