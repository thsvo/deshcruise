"use client";

import { useState } from "react";

export default function QASection({
  lg_screen_width,
  default_screen_width
}: {
  lg_screen_width: string,
  default_screen_width: string,
}) {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: "What security measures do you provide for my website?",
      answer:
        "We prioritize security with DDoS protection, SSL encryption, and real-time monitoring to keep your website safe from threats. Our hosting includes automatic backups and firewall protection, ensuring your site remains secure 24/7.",
    },
    {
      question: "What happens when I cancel the subscription?",
      answer:
        "If you cancel the subscription, the website will no longer be active.",
    },
    {
      question: "Is domain and hosting included in the price?",
      answer:
        "Hosting is included in the plan. A domain is also provided, except in cases where it contains high-value keywords. Some domains may fall under the regular pricing, in which case they may not be covered by the standard plan.",
    },
    {
      question: "What if I am not satisfied with the website?",
      answer:
        "In case you are not satisfied with our work, you are entitled to 14 days money back (although we appreciate the feedback).",
    },
    {
      question: "I have further questions",
      answer:
        "In case you still have further questions, you can contact us by email: contact@dashcruisedev.com",
    },
  ];


  const toggleFAQ = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="flex justify-center w-screen">
      <div 
      className={`lg:text-start ${lg_screen_width} ${default_screen_width} text-center my-10`}>
        <h1 className=" font-medium text-5xl leading-15 tracking-tight">
          Got Questions? We&apos;ve Got Answers!
        </h1>

        {/* FAQ List */}
        <div className=" mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-4 cursor-pointer bg-white shadow-md"
            >
              {/* Question */}
              <div
                className="flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <h2 className="font-medium text-xl">{faq.question}</h2>
                <span className="text-gray-500 text-2xl">
                  {openQuestion === index ? "−" : "+"}
                </span>
              </div>

              {/* Answer (Show/Hide based on state) */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openQuestion === index
                    ? "max-h-40 opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
