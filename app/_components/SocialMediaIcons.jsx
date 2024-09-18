import React from "react";

const SocialMediaIcons = ({ icon, backgroundColor }) => {
  return (
    <div
      className={`rounded-full py-3 px-3 ${
        backgroundColor ? `${backgroundColor}` : "bg-primary-400"
      }`}
    >
      <img src={icon} alt={`social media icons ${icon}`} className="w-5 h-5" />
    </div>
  );
};

export default SocialMediaIcons;
