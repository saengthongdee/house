import React, { useState, useEffect, useRef } from "react";
import "../style/section4.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function section4() {
  const h3Ref = useRef();
  const h4Ref = useRef();
  const inputRef = useRef();

  useEffect(() => {
    
    if(window.innerWidth > 1025) {
      const animationtext = gsap.timeline({
      scrollTrigger: {
        trigger: h3Ref.current,
        start: "top 80%",
        end: "bottom",
        toggleActions: "play none none none",
      },
    });

    animationtext.to(h3Ref.current, {
      x: 1000,
      opacity: 1,
      duration: 1.5,
      delay: 1.5,
      ease: "power2.out",
    });
    animationtext.to(h4Ref.current, {
      x: -600,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out"
    },"<");
    animationtext.to(h3Ref.current, {
      x: 2000,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
    });
    
    animationtext.to(h4Ref.current, {
      x: -1200,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
    },"<");

    animationtext.fromTo(
      inputRef.current,
      {opacity: 0},
      {opacity: 1, duration:1 , ease:"power2.inOut"}
    )
    }else if(window.innerWidth > 768){
      const animationtext = gsap.timeline({
      scrollTrigger: {
        trigger: h3Ref.current,
        start: "top 80%",
        end: "bottom",
        toggleActions: "play none none none",
      },
    });

    animationtext.to(h3Ref.current, {
      x: 800,
      opacity: 1,
      duration: 1.5,
      delay: 1.5,
      ease: "power2.out",
    });
    animationtext.to(h4Ref.current, {
      x: -400,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out"
    },"<");
    animationtext.to(h3Ref.current, {
      x: 2000,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
    });
    
    animationtext.to(h4Ref.current, {
      x: -1200,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
    },"<");

    animationtext.fromTo(
      inputRef.current,
      {opacity: 0},
      {opacity: 1, duration:1 , ease:"power2.inOut"}
    )
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <div>
      <section className="page page4">
        <h3 ref={h3Ref}>New lamborghini</h3>
        <h4 ref={h4Ref}>comming soon</h4>
        <form ref={inputRef}>
          <input type="email" placeholder="you email" required />
          <input type="submit" value={"submit"} />
        </form>
      </section>
    </div>
  );
}

export default section4;
