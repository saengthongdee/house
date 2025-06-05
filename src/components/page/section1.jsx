import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import "swiper/css";

import "../style/section1.css";

function Section1() {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [action, setAction] = useState();

  const cars = [
    {
      image: "/image/lamborghiniYellow.webp",
      text: "Aventador S",
      color: "radial-gradient(circle,rgb(255, 217, 112),rgb(189, 139, 0))",
    },
    {
      image: "/image/lamborghiniGray.webp",
      text: " Aventador SV",
      color: "radial-gradient(circle,rgb(161, 161, 161), #2f2f2f)",
    },
    {
      image: "/image/lamborghiniGreen.webp",
      text: "Aventador SVJ",
      color: "radial-gradient(circle,rgb(99, 227, 57), #00642f)",
    },
    {
      image: "/image/lamborghiniGold.webp",
      text: "Urus",
      color: "radial-gradient(circle, #f6b700, #2d2d2d)",
    },
  ];

  const goNext = () => {
    setAction("next");
    swiperRef.current.swiper.slideNext();
  };

  const goPrev = () => {
    setAction("prev");
    swiperRef.current.swiper.slidePrev();
  };

  useEffect(() => {
    const swiper = swiperRef.current.swiper;

    const updateText = () => {
      setCurrentIndex(swiper.realIndex);
    };

    if (action === "prev") {
      gsap.fromTo(
        ".fixed-text",
        { opacity: 0, x: 1000 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "circ.inOut",
        }
      );
    } else if (action === "next") {
      gsap.fromTo(
        ".fixed-text",
        { opacity: 0, x: -1000 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "circ.inOut",
        }
      );
    }

    swiper.on("slideChange", updateText);
    return () => swiper.off("slideChange", updateText);
  }, [currentIndex]);

  useEffect(() => {
    const optionRef = document.querySelectorAll(".box-option");

    optionRef.forEach((option, index) => {
      gsap.fromTo(
        option,
        { y: 200, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "circ.inOut",
          delay: index * 0.2,
        }
      );
    });
  }, [currentIndex]);

  return (
    <section
      className="page page1"
      style={{
        background: cars[currentIndex].color,
        transition: "background 0.5s ease-in-out",
      }}
    >
      <Swiper ref={swiperRef} speed={1000} className="swiper">
        {cars.map((car, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img src={car.image} alt={`Car ${index}`} className="car" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="fixed-text">{cars[currentIndex].text}</div>

      <div className="button-group">
        <button onClick={goPrev} className="nav-button">
          ←
        </button>
        <button onClick={goNext} className="nav-button">
          →
        </button>
      </div>

      <div className="area-option">
        <div className="box">
          <div className="box-option">
            <div className="border-option">
              <h2>price</h2>
              <p> $ 500,000</p>
            </div>
          </div>
          <div className="box-option">
            <div className="border-option">
              <h2>Top speed </h2>
              <div className="speed">
                <p>217</p>
                <p id="speed">mph</p>
              </div>
            </div>
          </div>
          <div className="box-option">
            <div className="border-option">
              <h2>power </h2>
              <p>790 hp</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
