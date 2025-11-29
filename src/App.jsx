import React, { useEffect, useRef, useState } from "react";
import Router from "./utils/Router";
import Loading from "./components/Loading";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const scrollRef = useRef(null);
  const locoScroll = useRef(null);

  useEffect(() => {
    if (!isLoading) {
      // Initialize LocomotiveScroll only after loading finishes
      locoScroll.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.1
      });

      // Update scroll when Router changes
      setTimeout(() => {
        locoScroll.current && locoScroll.current.update();
      }, 100); // small delay to ensure DOM is ready

      return () => {
        if (locoScroll.current) {
          locoScroll.current.destroy();
        }
      };
    }
  }, [isLoading]);

  return (
    <div
      ref={scrollRef}
      data-scroll-container
      className="w-full min-h-screen bg-black"
      style={{ overflow: "hidden" }} // Locomotive-scroll works best with hidden overflow on main container
    >
      {isLoading ? (
        <Loading setIsLoading={setIsLoading} />
      ) : (
        <Router />
      )}
    </div>
  );
};

export default App;