import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const pathRef = useRef(null);
  const spotlightRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();
    
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const path = pathRef.current;
    if (path && spotlightRef.current) {
      const pathLength = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: spotlightRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    }

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="font-manrope bg-base-100 text-base-300 overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative w-full h-screen p-[2rem] flex justify-center items-center overflow-hidden">
        <h1 className="w-[60%] text-center text-[4rem] font-medium leading-[1.1] tracking-[-0.1rem]">
          Designed to keep information clear and connected
        </h1>
      </section>

      {/* Spotlight Section */}
      <section 
        ref={spotlightRef} 
        className="relative w-full h-full p-[2rem] flex flex-col gap-[10rem] overflow-hidden"
      >
        {/* Row 1: Image Only */}
        <div className="flex justify-center gap-[2rem]">
          <div className="flex-1 flex justify-center items-center">
            <div className="w-full">
              {/* UPDATED TO .jpeg */}
              <img src="/img_1.jpeg" alt="Illustration 1" className="w-full h-auto object-cover rounded-xl" />
            </div>
          </div>
        </div>

        {/* Row 2: Card + Image */}
        <div className="flex flex-col md:flex-row justify-center gap-[2rem]">
          <div className="flex-1 flex flex-col justify-center">
            <div className="w-[75%] mx-auto p-[2rem] bg-base-200 rounded-[1rem] flex flex-col gap-[1rem]">
              <h2 className="text-[2.5rem] font-medium leading-[1.1] tracking-[-0.075rem]">
                A cleaner way to handle incoming updates
              </h2>
              <p className="text-[1.125rem] font-medium">
                Instead of showing every message or notification instantly, the app groups related items and presents them in an organized panel. It keeps your workspace calm, even when activity spikes.
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <div className="w-full flex justify-center">
              {/* UPDATED TO .jpeg */}
              <img src="/img_2.jpeg" alt="Illustration 2" className="w-full h-auto object-cover rounded-xl" />
            </div>
          </div>
        </div>

        {/* Row 3: Image + Card */}
        <div className="flex flex-col md:flex-row justify-center gap-[2rem]">
          <div className="flex-1 flex flex-col justify-center">
            <div className="w-full flex justify-center">
              {/* UPDATED TO .jpeg */}
              <img src="/img_3.jpeg" alt="Illustration 3" className="w-full h-auto object-cover rounded-xl" />
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <div className="w-[75%] mx-auto p-[2rem] bg-base-200 rounded-[1rem] flex flex-col gap-[1rem]">
              <h2 className="text-[2.5rem] font-medium leading-[1.1] tracking-[-0.075rem]">
                Built for increasing information demands
              </h2>
              <p className="text-[1.125rem] font-medium">
                Whether it is files, notes, or incoming messages, the app sorts and prioritizes items automatically. It prevents clutter and helps maintain clarity during busy periods.
              </p>
            </div>
          </div>
        </div>

        {/* Row 4: Image Only */}
        <div className="flex justify-center gap-[2rem]">
          <div className="flex-1 flex justify-center items-center">
            <div className="w-full">
              {/* UPDATED TO .jpeg */}
              <img src="/images/img_4.jpeg" alt="Illustration 4" className="w-full h-auto object-cover rounded-xl" />
            </div>
          </div>
        </div>

        {/* SVG Path Overlay */}
        <div className="absolute top-[25svh] left-1/2 -translate-x-1/2 w-[90%] h-full z-[-1] pointer-events-none">
          <svg 
            viewBox="0 0 1378 2760" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            preserveAspectRatio="xMidYMin meet"
            className="w-full h-auto"
          >
            <path
              ref={pathRef}
              id="stroke-path"
              d="M639.668 100C639.668 100 105.669 100 199.669 601.503C293.669 1103.01 1277.17 691.502 1277.17 1399.5C1277.17 2107.5 -155.332 1968 140.168 1438.5C435.669 909.002 1442.66 2093.5 713.168 2659.5"
              stroke="#FF5F0A"
              strokeWidth="200"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </section>

      {/* Outro Section */}
      <section className="relative w-full h-screen p-[2rem] bg-base-100 flex justify-center items-center overflow-hidden">
        <h1 className="w-[60%] text-center text-[4rem] font-medium leading-[1.1] tracking-[-0.1rem]">
          Clearer organization ready for whatever comes next
        </h1>
      </section>
    </div>
  );
};

export default App; 