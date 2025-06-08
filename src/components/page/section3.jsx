import React,{useEffect,useRef,useState} from "react";
import "../style/section3.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import axios from "axios";

function Section3() {

  const [carData, setCarData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("/car.json")
  //     .then((res) => {
  //       setCarData(res.data);
  //     })
  //     .catch((err) => {
  //       console.error("car.json ไม่สำเร็จ:", err);
  //     });
  // }, []);

  return (
    <section
      className="page page3"
      style={{
        backgroundImage: "url(/image/bg.webp)",
      }}
    >
      <div className="car-swiper-wrapper">
        <Swiper
          spaceBetween={10}
          slidesPerView={4.5}
          grabCursor={true}
        >
          {[...Array(20)].map((_, i) => (
            <SwiperSlide key={i}>
              <div className="box-car">
                <img src="/image/lamborghiniGray.webp" alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Section3;
