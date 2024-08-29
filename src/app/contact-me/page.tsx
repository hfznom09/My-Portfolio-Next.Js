import ContactForm from "@/app/Component/ContactForm";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(bg-3.jpg)" }}
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center sm-text-center"
    >
    
        <div className="absolute left-20 bottom-70 w-[70%] md:w-[30%] sm:text-left">
          <ContactForm />
        </div>
      </div>
  );
};

export default Page;
