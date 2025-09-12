// src/components/AnimatedSlickSlider.jsx
"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";

/**
 * AnimatedSlickSlider
 * - uses images from /public/images (you already added them)
 * - copy this file into src/components and import where needed
 */

const slides = [
  {
    id: 1,
    img: "/images/Unknown-3.jpeg",
    title: "Taste & Health",
    subtitle: "Veer Bharat — Mustard Oil",
  },
  {
    id: 2,
    img: "/images/Unknown-4.jpeg",
    title: "Pure Goodness in Every Drop",
    subtitle: "Choose Light & Healthy — Soyabean Oil",
  },
  {
    id: 3,
    img: "/images/Unknown-5.jpeg",
    title: "Biryani — Mouth Watering",
    subtitle: "Spicy Delight with Veer Bharat",
  },
  {
    id: 4,
    img: "/images/Unknown-6.jpeg",
    title: "More Than Just a Cooking Oil",
    subtitle: "Veer Bharat — Quality you can trust",
  },
  {
    id: 5,
    img: "/images/Unknown-7.jpeg",
    title: "Organic Raw Mustard & Soyabean",
    subtitle: "Buy Now",
  },
  {
    id: 6,
    img: "/images/Unknown-8.jpeg",
    title: "Taste Ko Banaye Best",
    subtitle: "Veer Bharat Mustard Oil",
  },
];

function NextArrow({ onClick }) {
  return (
    <button
      className="slick-nav next-arrow"
      aria-label="Next slide"
      onClick={onClick}
    >
      <i />
      <svg viewBox="0 0 44 44" aria-hidden>
        <circle cx="22" cy="22" r="20" stroke="rgba(255,255,255,0.12)" fill="none" strokeWidth="2" />
      </svg>
    </button>
  );
}
function PrevArrow({ onClick }) {
  return (
    <button
      className="slick-nav prev-arrow"
      aria-label="Prev slide"
      onClick={onClick}
    >
      <i />
      <svg viewBox="0 0 44 44" aria-hidden>
        <circle cx="22" cy="22" r="20" stroke="rgba(255,255,255,0.12)" fill="none" strokeWidth="2" />
      </svg>
    </button>
  );
}

export default function AnimatedSlickSlider() {
  const sliderRef = useRef(null);

  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    fade: false,
    lazyLoad: "progressive",
    arrows: true,
    dots: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    pauseOnHover: true,
  };

  return (
    <>
      {/* slick core CSS (required) */}
      <link
        rel="stylesheet"
        href="/_next/static/css/slick.min.css"
      />
      <link
        rel="stylesheet"
        href="/_next/static/css/slick-theme.min.css"
      />
      <section className="vb-slider-section">
        <Slider ref={sliderRef} {...settings} className="slider">
          {slides.map((s, idx) => (
            <div key={s.id} className="slide">
              <div className="slide__img">
                <Image src={s.img} alt={s.title} fill className="slide-img" />
              </div>

              <div className={`slide__content slide__content__left`}>
                <div className="slide__content--headings">
                  <div className="top-title">VEER BHARAT</div>
                  <h2 className="title">{s.title}</h2>
                  <p className="subtitle">{s.subtitle}</p>
                  <a className="button-custom" href="#products">Shop Now</a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Styles converted from your SCSS -> scoped CSS */}
      <style jsx>{`
        /* container */
        .vb-slider-section {
          position: relative;
          width: 100%;
          margin: 0 auto;
        }

        .slider { width: 100%; }
        .slide {
          position: relative;
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .slide__img {
          position: relative;
          width: 100%;
          height: 60vh;
        }
        /* Next/Image element will fill */
        .slide-img {
          object-fit: cover;
        }

        .slide__content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #fff;
          text-align: left;
          max-width: 780px;
          width: calc(100% - 40px);
        }

        .slide__content__left { left: 12%; transform: translate(-12%, -50%); text-align: left; }
        .slide__content__right { left: auto; right: 12%; transform: translate(12%, -50%); text-align: right; }

        .top-title {
          font-family: 'Playball', cursive;
          font-size: 2.2rem;
          margin-bottom: 0.6rem;
          color: #fff;
        }
        .title {
          font-size: 3.2rem;
          margin: 6px 0;
          line-height: 1.02;
          color: #fff;
          text-transform: uppercase;
          font-weight: 800;
        }
        .subtitle {
          color: rgba(255,255,255,0.92);
          margin-bottom: 1rem;
        }
        .button-custom {
          display:inline-block;
          background: #fff;
          color: #111;
          padding: 0.9rem 1.6rem;
          border-radius: 999px;
          font-weight: 700;
          text-decoration: none;
          margin-top: 8px;
        }

        /* zoom animation for images */
        .slide .slide-img {
          transition: transform 6s ease;
        }
        .slide.slick-current .slide-img {
          transform: scale(1.06);
        }

        /* custom slick-nav arrows */
        .slick-nav {
          --active: #fff;
          --border: rgba(255,255,255,.12);
          width: 48px;
          height: 48px;
          position: absolute;
          top: calc(50% - 24px);
          cursor: pointer;
          z-index: 40;
          display:flex;
          align-items:center;
          justify-content:center;
          background: rgba(0,0,0,0.45);
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.06);
        }
        .slick-nav i {
          width: 16px;
          height: 16px;
          display:block;
          position:relative;
        }
        .slick-nav.prev-arrow { left: 2.5%; transform: scaleX(-1); }
        .slick-nav.next-arrow { right: 2.5%; left: auto; }

        .slick-nav i::before,
        .slick-nav i::after {
          content: "";
          position: absolute;
          background: var(--active);
          height: 2px;
          width: 10px;
          top: 50%;
          left: 50%;
          transform-origin: center;
        }
        .slick-nav i::before { transform: translate(-50%, -50%) rotate(-40deg); }
        .slick-nav i::after { transform: translate(-50%, -50%) rotate(40deg); }

        /* animate effect when nav clicked */
        .slick-nav.animate svg { animation: stroke 1s ease forwards .15s; }
        .slick-nav.animate i { animation: arrow 1.6s ease forwards; }

        @keyframes stroke {
          52% { transform: rotate(-180deg); stroke-dashoffset: 0; }
          100% { transform: rotate(-180deg); stroke-dashoffset: 126; }
        }
        @keyframes arrow {
          0%,100% { transform: translateX(0); opacity: 1; }
          23% { transform: translateX(8px); opacity: 1; }
          24%,80% { transform: translateX(-10px); opacity: 0; }
        }

        /* responsive */
        @media (max-width: 768px) {
          .slide__content__left { left: 50%; transform: translate(-50%, -50%); text-align: center; }
          .title { font-size: 2rem; }
          .top-title { font-size: 1.6rem; }
        }
      `}</style>

      {/* small script to add animate class to custom arrows when clicked */}
      <script dangerouslySetInnerHTML={{
        __html: `
          (function(){
            // client-only: attach click animation to the arrow buttons
            function addNavListeners(){
              const arrows = document.querySelectorAll('.slick-nav');
              arrows.forEach(a=>{
                a.addEventListener('click', ()=> {
                  if(!a.classList.contains('animate')){
                    a.classList.add('animate');
                    setTimeout(()=> a.classList.remove('animate'), 1600);
                  }
                }, {passive:true});
              });
            }
            // wait for next tick
            if (typeof window !== 'undefined') {
              setTimeout(addNavListeners, 300);
            }
          })()
        `,
      }} />
    </>
  );
}
