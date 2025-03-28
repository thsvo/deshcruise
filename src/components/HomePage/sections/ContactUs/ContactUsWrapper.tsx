"use client"

//import dynamic from "next/dynamic";

import ContactUsSection from "./ContactUsSection";

//const ContactUsSection = dynamic(() => import("./ContactUsSection"), {ssr:false, loading: () => <p>Contact Us Form Loading...</p>})
export default function ContactUsWrapper({
    lg_screen_width,
    default_screen_width,
  }: {
    lg_screen_width: string;
    default_screen_width:string;
  }) {
    return <ContactUsSection lg_screen_width={lg_screen_width} default_screen_width={default_screen_width}/>
  }