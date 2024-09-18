import React from "react";
import { footerContent, socialMediaDark } from "@/app/_constant";
import { SocialMediaIcons } from "../_components";
import Link from "next/link";

const Footer = ({ footerItems }) => {
  // console.log(footerItems);
  // footerItems.map((item) => {
  //   console.log(item);
  // });

  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={footerContent.logo}
              alt="footer company logo"
              width={100}
              height={25}
            />
          </a>
          <p className="mt-6 font-montserrat text-white-400 text-base leading-7 sm:max-w-xs">
            {footerContent.subText}
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMediaDark.map((social) => (
              <SocialMediaIcons
                icon={social.icon}
                backgroundColor="bg-white-400"
                key={social.label}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerItems.map((item) => (
            <div key={item.id}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {item.label}
              </h4>
              <ul className="flex flex-col">
                {item.children.map((child) => (
                  <Link
                    href={child.path}
                    className="mt-4 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                    key={child.label}
                  >
                    {child.label}
                  </Link>
                ))}
              </ul>
            </div>
          ))}
          <div className="">
            <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
              {footerContent.footerContact.title}
            </h4>
            <p className="mt-4 text-white-400 font-montserrat text-base leading-normal">
              {footerContent.footerContact.contactInfo.email}
            </p>
            <p className="mt-4 text-white-400 font-montserrat text-base leading-normal">
              {footerContent.footerContact.contactInfo.phone}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={footerContent.copyright.icon}
            alt={footerContent.copyright.label}
          />
          <p>{footerContent.copyright.text}</p>
        </div>
        <p className="font-montserrat cursor-pointer">
          {footerContent.termsCondition}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
