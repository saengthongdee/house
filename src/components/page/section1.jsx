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
      price: "550000",
      topSpeed: "220",
      power: "800",
    },
    {
      image: "/image/lamborghiniGray.webp",
      text: " Aventador SV",
      price: "500000",
      topSpeed: "217",
      power: "730",
    },
    {
      image: "/image/lamborghiniGreen.webp",
      text: "Aventador SVJ",
      price: "1000000",
      topSpeed: "312",
      power: "990",
    },
    {
      image: "/image/lamborghiniGold.webp",
      text: "Urus",
      price: "550000",
      topSpeed: "220",
      power: "730",
    },
  ];

  const currentCar = cars[currentIndex];

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

      gsap.to(
        { val: 0 },
        {
          val: currentCar.price,
          duration: 2,
          onUpdate: function () {
            document.getElementById("price").innerText =
              "$ " + Math.floor(this.targets()[0].val).toLocaleString();
          },
        }
      );
      gsap.to(
        { val: 0 },
        {
          val: currentCar.topSpeed,
          duration: 2,
          onUpdate: function () {
            document.getElementById("topspeed").innerText = Math.floor(
              this.targets()[0].val
            ).toLocaleString() + " km/h";
          },
        }
      );
      gsap.to(
        { val: 0 },
        {
          val: currentCar.power,
          duration: 2,
          onUpdate: function () {
            document.getElementById("power").innerText =
              Math.floor(this.targets()[0].val).toLocaleString() + " hp";
          },
        }
      );
  }, [currentIndex]);
  

  return (
    <section
      className="page page1"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/image/gray.webp")`,
        backgroundSize: "cover",
        backgroundPosition: "center",

        transition: "background 0.5s ease-in-out",
      }}
    >
      <div className="overlay"></div>
      <Swiper ref={swiperRef} speed={1000} className="swiper">
        {cars.map((car, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img src={car.image} alt={`Car ${index}`} className="car"  loading="lazy"  />
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
              <p id="price"> $ 0</p>
              <h2>price</h2>
            </div>
          </div>
          <div className="box-option">
            <div className="border-option">
              <div className="cicle"></div>
                <p id="topspeed">0</p>

               <h2>Top speed </h2>
            </div>
          </div>
          <div className="box-option">
            <div className="border-option">
              <p id="power"></p>
              <h2>power </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
