"use client";

import { handleFormSubmition } from "@/app/actions";
import PopupModal from "@/components/PopupModal";
import { useState } from "react";

type ContactUsProps = {
  lg_screen_width: string;
  default_screen_width: string;
};

export default function ContactUsSection({
  lg_screen_width,
  default_screen_width,
}: ContactUsProps) {
  const [showPopup, setShowPopup] = useState(false);
  const [pending, setPending] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div className="mt-5 w-screen flex justify-center mb-30">
      {/* Wrapper with defined width */}
      <div className={`lg:justify-between lg:flex-row  flex flex-col  ${lg_screen_width} ${default_screen_width}`}>

        {/* Description */}
        <div className="lg:w-[530px]">
          <h2 className="text-carrot-500 text-sm leading-5 mb-2">Contact Us</h2>
          <h1 className="text-5xl tracking-tight">
            We&apos;d love to <br />
            connect with you!
          </h1>
          <p className="text-base leading-6 mt-4">
            Lorem ipsum dolor sit amet consectetur. Id enim erat faucibus luctus
            aenean. Maecenas lectus at ut volutpat vel quisque cum id. Amet non
            morbi in quis eget suspendisse. Pulvinar eu ullamcorper urna quis
            viverra sit non.
          </p>
        </div>

        {/* Contact Form */}
        <div
          className={`lg:w-[747px] lg:mt-0 mt-10 rounded-lg`}
        >
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setPending(true);

              const formData = new FormData(e.currentTarget);

              const result = await handleFormSubmition(formData);
              setPending(false);
              if (result?.success) {
                setShowPopup(true);
                console.log("Setting show popup to true");
                setFormValues({ name: "", email: "", message: "" });
                setTimeout(() => setShowPopup(false), 3000);
              } else if (result?.error) {
                console.error("Validation or server error:", result.error);
                // You could also show a toast or inline error here
              }
            }}
            className="flex flex-col p-10"
          >
            <input
              type="text"
              id="nameInput"
              name="name"
              value={formValues.name}
              onChange={(e) =>
                setFormValues({ ...formValues, name: e.target.value })
              }
              required
              placeholder="Name"
              className="border-1 p-5 outline-none rounded-md"
            />
            <input
              type="email"
              id="emailInput"
              name="email"
              required
              value={formValues.email}
              onChange={(e) =>
                setFormValues({ ...formValues, email: e.target.value })
              }
              placeholder="Email"
              className="border-1 mt-5 p-5 outline-none rounded-md"
            />
            <textarea
              name="message"
              required
              value={formValues.message}
              onChange={(e) =>
                setFormValues({ ...formValues, message: e.target.value })
              }
              placeholder="Message"
              className="border-1 mt-5 p-5 h-50 outline-none rounded-md"
            />
            <button
              type="submit"
              className="w-[215px] cursor-pointer text-base font-bold leading-6 rounded-4xl bg-carrot-500 text-white mt-5 p-5"
            >
              {pending ? "Sending Message..." : "Send Message"}
            </button>
            {showPopup && <PopupModal onClose={() => setShowPopup(false)} />}
          </form>
        </div>
      </div>
    </div>
  );
}
