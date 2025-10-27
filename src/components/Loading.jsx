import React, { useRef, useState } from "react";
import { gsap } from "gsap";

const Loading = ({ setIsLoading }) => {
  const containerRef = useRef(null);
  const [hide, setHide] = useState(false);

  const handleVideoEnd = () => {
    const el = containerRef.current;
    if (el) {
      gsap.to(el, {
        y: "100%",
        duration: 0.9,
        ease: "power3.inOut",
        onStart: () => {
          el.style.pointerEvents = "none"
        },
        onComplete: () => {
          setHide(true);
          setIsLoading && setIsLoading(false);
        },
      });
    } else {
      setHide(true);
      setIsLoading && setIsLoading(false);
    }
  };

  if (hide) return null;
  return (
    <div ref={containerRef} className="w-full h-screen fixed top-0 left-0 z-50 ">
      <div className="w-full h-screen">
        <video
          autoPlay
          muted
          onEnded={handleVideoEnd}
          className="w-full h-screen object-cover"
          src="/ik-video.webm"
        />
      </div>
    </div>
  );
};

export default Loading;
