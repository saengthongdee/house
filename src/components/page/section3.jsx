import React, { useEffect, useRef, useState } from "react";
import "../style/section3.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import axios from "axios";
import gsap from "gsap";

function Section3() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carData, setCarData] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    axios
      .get("/car.json")
      .then((res) => {
        setCarData(res.data);
        const firstCar = res.data[0]?.models?.[0];
        setSelectedCar(firstCar || null);
      })
      .catch((err) => {
        console.error("car.json ไม่สำเร็จ:", err);
      });
  }, []);

  return (
    <section
      className="page page3"
      style={{
        backgroundImage: "url(/image/bg.webp)",
      }}
    >
      <div className="car-show-point">
        {selectedCar && (
          <div className="slide-center">
            <div className="box-car">
              <img src={selectedCar.image} alt={selectedCar.name} />
              <h2> {selectedCar.name}</h2>
            </div>
            <div className="option">
              <div className="topspeed">
                <h4>top Speed</h4>
                <p> {selectedCar.topSpeed}</p>
              </div>
              <div className="acceleration">
                <h4>acceleration</h4>
                <p>{selectedCar.acceleration}</p>
              </div>
              <div className="price">
                <h4>price</h4>

                <p>{selectedCar.price}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* select car  */}
      <div className="select-car">
        {carData.map((group, index) => (
          <div
            className={`select-car-box ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {group.group}
          </div>
        ))}
      </div>

      <div className="car-swiper-wrapper">
        <Swiper spaceBetween={10} slidesPerView={4.5} grabCursor={true}>
          {carData[activeIndex]?.models?.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="box-car"
                onClick={() => {
                  setSelectedCar(item);
                }}
              >
                <img src={item.image} alt={item.name} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Section3;
