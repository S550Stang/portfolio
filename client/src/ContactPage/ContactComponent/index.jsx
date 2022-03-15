import React from "react";
import ContactFormComponent from "../ContactFormComponent";
import ContactHeaderTitle from "../ContactHeaderTitle";
import EmailComponent from "../EmailComponent";
import FacebookComponent from "../FacebookComponent";
import WhatsappComponent from "../WhatsappComponent";

export default function ContactComponent() {
  return (
    <div>
      <ContactHeaderTitle />
      <div className="flex flex-col justify-center items-center lg:flex-row">
        <div className="flex flex-col justify-center items-center ">
          <WhatsappComponent />
          <FacebookComponent />
          <EmailComponent />
        </div>
        <ContactFormComponent />
      </div>
    </div>
  );
}
