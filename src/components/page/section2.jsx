import React, { useEffect, useRef } from "react";
import "../style/section2.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function section2() {
  const boxRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 80%",
        end: "bottom",
        scroller: ".scroll-wrapper",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      boxRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.inOut" }
    );
  }, []);

  return (
    <div>
      <section 
        style={{
         backgroundImage: "linear-gradient(to bottom right, rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url(/image/carbon.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      className="page page2">
        <div className="area-image">
          <div
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.5)), url(/image/bglambor1.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="box-image"
          ></div>
          <div
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(/image/bglambor2.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="box-image"
          ></div>
        </div>
        <div className="area-text">
          <h2>TEMERARIO</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
            at veniam nihil? Tempora accusantium iusto modi soluta molestiae
            assumenda necessitatibus at quod incidunt, fuga quasi illo maxime
            libero temporibus. Perferendis.
          </p>
          <div className="btn">lean more</div>
        </div>

      </section>
    </div>
  );
}

export default section2;
