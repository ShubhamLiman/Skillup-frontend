import React from "react";
import "./Marquee.css";
const reviews = [
  {
    name: "💰 100% Money Back Guarantee",
  },
  {
    name: "👜 100% Job Placement/Assistance",
  },
  {
    name: "🚫 We Don't Sell You Courses",
  },
  {
    name: "💻 Mock Interviews",
  },
  {
    name: "📊 Montly progess report",
  },
];

function Marquee() {
  return (
    <div className="w-screen h-12 bg-green-600 text-white  relative top-2">
      <div className="animate-marquee whitespace-nowrap absolute top-2">
        {reviews.map((review, index) => (
          <span key={index} className="mx-12">
            {review.name}
          </span>
        ))}
        {reviews.map((review, index) => (
          <span key={index + reviews.length} className="mx-12">
            {review.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
