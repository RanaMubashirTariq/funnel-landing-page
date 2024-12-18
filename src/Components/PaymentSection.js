import React from "react";
import "./PaymentSection.css";
import InputFormSection from "./InputFormSection";

export default function PaymentSection() {
  return (
    <div className="payment-main-container">
      <div className="heading-d">
        <h2>
          skainet <span>payment</span> gateway
        </h2>
         <div>
         <p className="paragraph-d">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliquaenim.
        </p>
         </div>
      </div>
          <InputFormSection/>
    </div>
  );
}
