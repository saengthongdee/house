import { useEffect ,useState} from "react";
import Lenis from "@studio-freight/lenis";
import Section1 from "./components/page/section1";
import Section2 from "./components/page/section2";
import Section3 from "./components/page/section3";
import Section4 from "./components/page/section4";
import Nav from "./components/page/nav";
import "./App.css";

function App() {
  const [isAllowed, setIsAllowed] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsAllowed(false);
    }else {
      setIsAllowed(true);
    }
  }, [isAllowed]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  if (!isAllowed) {
    return (
      <div className="isAllowed">
       Please access via iPad or Desktop only.
      </div>
    );
  }

  return (
    <>
      <Nav />
      <div className="scroll-wrapper">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    </>
  );
}

export default App;
