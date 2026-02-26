import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

function Hero() {

  const heroRef  = useRef(null);
  const headRef  = useRef(null);
  const stat1Ref = useRef(null);
  const stat2Ref = useRef(null);
  const stat3Ref = useRef(null);
  const stat4Ref = useRef(null);
  const carRef   = useRef(null);

  useEffect(() => {

    gsap.from(headRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out'
    });

    gsap.from(
      [stat1Ref.current, stat2Ref.current, stat3Ref.current, stat4Ref.current],
      {
        opacity: 0,
        x: 50,
        duration: 0.7,
        stagger: 0.2,
        ease: 'power2.out',
        delay: 0.5
      }
    );

    gsap.to(carRef.current, {
      x: '110vw',
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };

  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-sticky">

        <div className="road"></div>

        <div className="left-panel" ref={headRef}>
          <span>W</span>
          <span>E</span>
          <span>L</span>
          <span>C</span>
          <span>O</span>
          <span>M</span>
          <span>E</span>
          <div className="gap"></div>
          <span>I</span>
          <span>T</span>
          <span>Z</span>
          <div className="gap"></div>
          <span>F</span>
          <span>I</span>
          <span>Z</span>
          <span>Z</span>
        </div>

        <div className="car-wrapper" ref={carRef}>
          <svg className="car" viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg">
            <rect x="30"  y="20"  width="240" height="100" rx="20" fill="#1a1a2e" />
            <rect x="60"  y="35"  width="180" height="70"  rx="12" fill="#16213e" />
            <rect x="200" y="42"  width="55"  height="56"  rx="8"  fill="#0a3d62" opacity="0.8" />
            <rect x="45"  y="42"  width="55"  height="56"  rx="8"  fill="#0a3d62" opacity="0.6" />
            <rect x="137" y="20"  width="5"   height="100"         fill="#111"    opacity="0.5" />
            <rect x="250" y="8"   width="30"  height="28"  rx="6"  fill="#111" />
            <rect x="250" y="104" width="30"  height="28"  rx="6"  fill="#111" />
            <rect x="20"  y="8"   width="30"  height="28"  rx="6"  fill="#111" />
            <rect x="20"  y="104" width="30"  height="28"  rx="6"  fill="#111" />
            <rect x="256" y="13"  width="18"  height="18"  rx="3"  fill="#2a2a2a" />
            <rect x="256" y="109" width="18"  height="18"  rx="3"  fill="#2a2a2a" />
            <rect x="26"  y="13"  width="18"  height="18"  rx="3"  fill="#2a2a2a" />
            <rect x="26"  y="109" width="18"  height="18"  rx="3"  fill="#2a2a2a" />
            <rect x="272" y="28"  width="10"  height="12"  rx="3"  fill="#f5c518" />
            <rect x="272" y="100" width="10"  height="12"  rx="3"  fill="#f5c518" />
            <rect x="18"  y="28"  width="10"  height="12"  rx="3"  fill="#ff3333" />
            <rect x="18"  y="100" width="10"  height="12"  rx="3"  fill="#ff3333" />
            <ellipse cx="280" cy="34"  rx="14" ry="5" fill="#f5c518" opacity="0.15" />
            <ellipse cx="280" cy="106" rx="14" ry="5" fill="#f5c518" opacity="0.15" />
          </svg>
        </div>

        <div className="right-panel">
          <div className="stat" ref={stat1Ref}>
            <p className="num">58%</p>
            <div className="line"></div>
            <p className="desc">Increase in pick up point use</p>
          </div>
          <div className="stat" ref={stat2Ref}>
            <p className="num">23%</p>
            <div className="line"></div>
            <p className="desc">Decrease in customer phone calls</p>
          </div>
          <div className="stat" ref={stat3Ref}>
            <p className="num">27%</p>
            <div className="line"></div>
            <p className="desc">Increase in repeat customers</p>
          </div>
          <div className="stat" ref={stat4Ref}>
            <p className="num">40%</p>
            <div className="line"></div>
            <p className="desc">Decrease in wait time</p>
          </div>
        </div>

        <div className="scroll-hint">
          <p>scroll</p>
          <div className="scroll-line"></div>
        </div>

      </div>
    </section>
  );
}

export default Hero;