import React, { useState, useEffect } from "react";
import "./carousel.css"; // styling file

const data = [
  {
    img: "/img/img1.jpg",
    text: "CLI Studios classes have helped me grow in picking up choreography while learning from some of the best choreographers in the business!",
    name: "KENNEDY T."
  },
  {
    img: "/img/img2.jpg",
    text: "The platform helped me improve my technique and confidence!",
    name: "STUDENT A."
  },
  {
    img: "/img/img3.jpg",
    text: "Great instructors and amazing lessons. Highly recommended!",
    name: "STUDENT B."
  },
  {
    img: "/img/img2.jpg",
    text: "The platform helped me improve my technique and confidence!",
    name: "STUDENT A."
  },
  {
    img: "/img/img3.jpg",
    text: "Great instructors and amazing lessons. Highly recommended!",
    name: "STUDENT B."
  }
];

export default function StudentReview() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(timer);
  }, [index]);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <div className="carousel-container" style={{backgroundColor:"#030511"}}>
      <button className="arrow left" onClick={handlePrev}>
        ❮
      </button>

      <div className="content">
        <img src={data[index].img} alt="testimonial" className="avatar" />

        <div className="text-section">
          <p className="quote">{data[index].text}</p>
          <p className="name">{data[index].name}</p>
        </div>
      </div>

      <button className="arrow right" onClick={handleNext}>
        ❯
      </button>

      <div className="dots">
        {data.map((_, i) => (
          <div key={i} className={`dot ${i === index ? "active" : ""}`}></div>
        ))}
      </div>
    </div>
  );
}
