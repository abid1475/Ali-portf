import React from "react";
import "./WhatsappIcon.css";

const WhatsappIcon = () => {
  const phoneNumber = "+92 313 6366961"; // change to your number
  const message = "Hello! I would like to connect with you."; // default message

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="whatsapp-img"
      />
    </a>
  );
};

export default WhatsappIcon;
