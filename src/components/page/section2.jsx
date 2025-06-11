import React, { useEffect, useRef } from "react";
import "../style/section2.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function section2() {
  const boxRef = useRef();
  const textRef = useRef();
  const btnRef = useRef();
  const imgRef1 = useRef();
  const imgRef2 = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 80%",
        end: "bottom",
        toggleActions: "play reverse play reverse",
      },
    });

    tl.fromTo(
      imgRef1.current,
      { scale: 1, y: 1000, x: -200 },
      { scale: 1, y: 0, x: 0, duration: 1.5, ease: "circ.inOut" }
    );
    tl.fromTo(
      imgRef2.current,
      { scale: 1, y: 1000, x: -200 },
      { scale: 1, y: 0, x: 0, duration: 1.5, ease: "circ.inOut" },
      "<.5"
    );
    tl.fromTo(
      boxRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.inOut" }
    );
    tl.fromTo(
      textRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.inOut" }
    );

    tl.fromTo(
      btnRef.current,
      { y: -10, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.inOut" }
    );
  }, []);

  return (
    <div>
      <section
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url(/image/carbon.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
        className="page page2"
      >
        <div className="area-image">
          <div
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.5)), url(/image/bglambor1.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="box-image"
            ref={imgRef2}
          ></div>
          <div
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(/image/bglambor2.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="box-image"
            ref={imgRef1}
          ></div>
        </div>
        <div className="area-text">
          <h2 ref={boxRef}>TEMERARIO</h2>
          <p ref={textRef}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
            at veniam nihil? Tempora accusantium iusto modi soluta molestiae
            assumenda necessitatibus at quod incidunt, fuga quasi illo maxime
            libero temporibus. Perferendis.
          </p>
          <div className="btn" ref={btnRef}>
            lean more
          </div>
        </div>
      </section>
    </div>
  );
}

export default section2;
