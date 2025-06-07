import React,{useEffect, useRef} from "react";
import "../style/nav.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function nav() {

  useEffect(() => {
    if(window.innerWidth > 768) {
   
      const t1 =  gsap.timeline();

      t1.fromTo(
        ".list-nav" ,
        {opacity:0 , y: -100}
        ,{opacity:1, y: 0, delay: 1.2,duration: 1.2, ease: "power2.inOut"}
      )

    }
  })
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="/image/logo.webp" alt="" />
        </div>

        <ul className="list-nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">product</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default nav;
