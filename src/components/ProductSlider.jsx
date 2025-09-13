"use client";

import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";

const slides = [
  { id: 1, img: "/images/prod-mustard.jpg", title: "Premium Mustard Oil", subtitle: "Pure & Natural — Veer Bharat" },
  { id: 2, img: "/images/prod-soyabean.jpg", title: "Light & Healthy Soyabean Oil", subtitle: "Perfect for Daily Cooking" },
  { id: 3, img: "/images/prod-ricebran.jpg", title: "Heart-Friendly Rice Bran Oil", subtitle: "High Smoke Point, Superior Quality" },
  { id: 4, img: "/images/banner2.jpg", title: "Traditional Flavors", subtitle: "Authentic Taste in Every Bottle" },
  { id: 5, img: "/images/banner3.jpg", title: "Farm Fresh Oils", subtitle: "Direct from Nature to Your Kitchen" },
  { id: 6, img: "/images/banner4.jpg", title: "Quality You Can Trust", subtitle: "Veer Bharat — Since Generations" },
];

function NextArrow({ onClick }) {
  return (
    <button className="slick-nav next-arrow" aria-label="Next slide" onClick={onClick}>
      <i />
      <svg viewBox="0 0 44 44" aria-hidden>
        <circle cx="22" cy="22" r="20" stroke="rgba(255,255,255,0.12)" fill="none" strokeWidth="2" />
      </svg>
    </button>
  );
}
function PrevArrow({ onClick }) {
  return (
    <button className="slick-nav prev-arrow" aria-label="Prev slide" onClick={onClick}>
      <i />
      <svg viewBox="0 0 44 44" aria-hidden>
        <circle cx="22" cy="22" r="20" stroke="rgba(255,255,255,0.12)" fill="none" strokeWidth="2" />
      </svg>
    </button>
  );
}

export default function ProductSlider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const addNavListeners = () => {
      const arrows = document.querySelectorAll('.slick-nav');
      arrows.forEach(a => {
        a.addEventListener('click', () => {
          if (!a.classList.contains('animate')) {
            a.classList.add('animate');
            setTimeout(() => a.classList.remove('animate'), 1600);
          }
        }, { passive: true });
      });
    };
    setTimeout(addNavListeners, 300);
  }, []);

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
      <section className="vb-slider-section">
        <Slider ref={sliderRef} {...settings} className="slider">
          {slides.map((s) => (
            <div key={s.id} className="slide">
              <div className="slide__img">
                <Image src={s.img} alt={s.title} fill className="slide-img" />
                <div className="slide-overlay"></div>
              </div>

              <div className="slide__content slide__content__left">
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

      <style jsx>{`
        .vb-slider-section { position: relative; width: 100%; margin: 0 auto; }
        .slider { width: 100%; }
        .slide { position: relative; min-height: 60vh; display:flex; align-items:center; justify-content:center; overflow:hidden; }
        .slide__img { position: relative; width:100%; height:60vh; }
        .slide-img { object-fit: cover; transition: transform 8s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
        .slide.slick-current .slide-img { transform: scale(1.08); }
        .slide-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%); z-index: 1; }
        .slide__content { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); color:#fff; text-align:left; max-width:780px; width:calc(100% - 40px); z-index: 2; }
        .slide__content__left { left: 12%; transform: translate(-12%, -50%); text-align:left; }
        .top-title { font-family: 'Playball', cursive; font-size: 2.2rem; margin-bottom:0.6rem; color:#fff; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); }
        .title { font-size: 3.2rem; margin:6px 0; line-height:1.02; color:#fff; text-transform:uppercase; font-weight:800; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); }
        .subtitle { color: rgba(255,255,255,0.92); margin-bottom:1rem; text-shadow: 1px 1px 2px rgba(0,0,0,0.5); }
        .button-custom { display:inline-block; background:#fff; color:#111; padding:0.9rem 1.6rem; border-radius:999px; font-weight:700; text-decoration:none; margin-top:8px; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
        .button-custom:hover { background:#f0f0f0; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.3); }
        .slick-nav { --active:#fff; --border:rgba(255,255,255,.12); width:48px; height:48px; position:absolute; top:calc(50% - 24px); cursor:pointer; z-index:40; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,0.45); border-radius:999px; border:1px solid rgba(255,255,255,0.06); transition: all 0.3s ease; backdrop-filter: blur(10px); }
        .slick-nav:hover { background:rgba(0,0,0,0.6); transform: scale(1.1); }
        .slick-nav i { width:16px; height:16px; display:block; position:relative; }
        .slick-nav.prev-arrow { left: 2.5%; transform: scaleX(-1); }
        .slick-nav.next-arrow { right: 2.5%; left:auto; }
        .slick-nav i::before, .slick-nav i::after { content: ""; position:absolute; background: var(--active); height:2px; width:10px; top:50%; left:50%; transform-origin:center; }
        .slick-nav i::before { transform: translate(-50%,-50%) rotate(-40deg); }
        .slick-nav i::after { transform: translate(-50%,-50%) rotate(40deg); }
        .slick-nav.animate svg { animation: stroke 1s ease forwards .15s; }
        .slick-nav.animate i { animation: arrow 1.6s ease forwards; }
        @keyframes stroke { 52% { transform: rotate(-180deg); stroke-dashoffset:0; } 100% { transform: rotate(-180deg); stroke-dashoffset:126; } }
        @keyframes arrow { 0%,100% { transform: translateX(0); opacity:1; } 23% { transform: translateX(8px); opacity:1; } 24%,80% { transform: translateX(-10px); opacity:0; } }
        @media (max-width:768px) {
          .slide__content__left { left:50%; transform:translate(-50%,-50%); text-align:center; }
          .title { font-size:2rem; }
          .top-title { font-size:1.6rem; }
        }
      `}</style>
    </>
  );
}
