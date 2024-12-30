import React from "react";
import "./CompanyMarquee.css";
export const companyLogo = [
  {
    img: "/company/accenture.svg",
  },
  {
    img: "/company/amazon.svg",
  },
  {
    img: "/company/citi.svg",
  },
  {
    img: "/company/deloitte.svg",
  },
  {
    img: "/company/google.svg",
  },
  {
    img: "/company/jpmorgan.svg",
  },
  {
    img: "/company/microsoft.svg",
  },
  {
    img: "/company/pwc.svg",
  },
];

function CompanyMarquee() {
  return (
    <div className="p-4 max-w-full">
      <h1 className="text-lg text-center mt-10">
        Join 4,000+ companies already growing
      </h1>
      <div className="relative flex h-[160px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  ">
        <div className="animate-marquee whitespace-nowrap absolute">
          {companyLogo.map((logo, index) => (
            <img
              key={index}
              src={logo.img}
              alt="company logo"
              className="inline-block mx-12 h-8"
            />
          ))}
          {companyLogo.map((logo, index) => (
            <img
              key={index + companyLogo.length}
              src={logo.img}
              alt="company logo"
              className="inline-block mx-12 h-8"
            />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background -z-10"></div>
      </div>
    </div>
  );
}

export default CompanyMarquee;
