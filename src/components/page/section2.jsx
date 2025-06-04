import React, { useEffect, useRef } from "react";
import "../style/section2.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function section2() {
  const boxRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 80%",
          scroller: ".scroll-wrapper", 
          end: "bottom",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <div>
      <section className="page page2">
        <div className="box" ref={boxRef}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          molestiae.
        </div>
      </section>
    </div>
  );
}

export default section2;
