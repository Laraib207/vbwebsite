// /* ========== ProductSlider (Converted) ========== */
// import { useEffect, useState, useRef } from "react";
// import Image from "next/image";

// function ProductSlider() {
//   const slides = [
//     {
//       index: 1,
//       title: "This is the First slider",
//       imgsrc: "/images/product2.jpg",
//       desctext:
//         "Veer Bharat Mustard Oil — Taste & Health together. Lorem Ipsum placeholder text here.",
//       date: "1st Jan, 2019",
//       place: "New Delhi, India.",
//     },
//     {
//       index: 2,
//       title: "This is the Second slider",
//       imgsrc: "/images/product3.png",
//       desctext:
//         "Pure Sunflower Oil — Light & Healthy. Lorem Ipsum placeholder text here.",
//       date: "2nd Feb, 2019",
//       place: "Mumbai, India.",
//     },
//     {
//       index: 3,
//       title: "This is the Third slider",
//       imgsrc: "/images/banner3.jpg",
//       desctext:
//         "Rice Bran Oil — High smoke point, Heart friendly. Lorem Ipsum placeholder text here.",
//       date: "3rd Mar, 2019",
//       place: "Kolkata, India.",
//     },
//   ];

//   const [current, setCurrent] = useState(0);
//   const timeoutRef = useRef(null);

//   useEffect(() => {
//     timeoutRef.current = setInterval(() => {
//       setCurrent((i) => (i + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timeoutRef.current);
//   }, []);

//   const prev = () => setCurrent((i) => (i - 1 + slides.length) % slides.length);
//   const next = () => setCurrent((i) => (i + 1) % slides.length);

//   return (
//     <section className="py-16 bg-[#f5f5f5]">
//       <div className="container mx-auto max-w-5xl px-6">
//         <h2 className="text-3xl font-extrabold mb-8 text-center text-[#3498db]">
//           Featured Oils — Veer Bharat
//         </h2>

//         <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
//           {slides.map((s, i) => (
//             <div
//               key={s.index}
//               className={`flex flex-col md:flex-row items-stretch transition-all duration-700 ${
//                 i === current
//                   ? "opacity-100 relative"
//                   : "opacity-0 absolute inset-0 pointer-events-none"
//               }`}
//             >
//               {/* Image Left */}
//               <div className="w-full md:w-1/2 relative h-64 md:h-auto">
//                 <Image
//                   src={s.imgsrc}
//                   alt={s.title}
//                   fill
//                   className="object-cover"
//                   unoptimized
//                 />
//               </div>

//               {/* Text Right */}
//               <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
//                 <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
//                 <p className="text-gray-700 mb-4">{s.desctext}</p>
//                 <p className="text-sm text-gray-500">
//                   <em>{s.date}</em> — <em>{s.place}</em>
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Controls */}
//         <div className="flex justify-center gap-4 mt-6">
//           <button
//             onClick={prev}
//             className="px-4 py-2 rounded-full border border-gray-300 hover:shadow"
//           >
//             ‹ Prev
//           </button>
//           <button
//             onClick={next}
//             className="px-4 py-2 rounded-full border border-gray-300 hover:shadow"
//           >
//             Next ›
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ProductSlider;





"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";

const slides = [
  { id: 1, img: "/images/Unknown-3.jpeg", title: "Taste & Health", subtitle: "Veer Bharat — Mustard Oil" },
  { id: 2, img: "/images/Unknown-4.jpeg", title: "Pure Goodness in Every Drop", subtitle: "Choose Light & Healthy — Soyabean Oil" },
  { id: 3, img: "/images/Unknown-5.jpeg", title: "Biryani — Mouth Watering", subtitle: "Spicy Delight with Veer Bharat" },
  { id: 4, img: "/images/Unknown-6.jpeg", title: "More Than Just a Cooking Oil", subtitle: "Veer Bharat — Quality you can trust" },
  { id: 5, img: "/images/Unknown-7.jpeg", title: "Organic Raw Mustard & Soyabean", subtitle: "Buy Now" },
  { id: 6, img: "/images/Unknown-8.jpeg", title: "Taste Ko Banaye Best", subtitle: "Veer Bharat Mustard Oil" },
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
      <section className="vb-slider-section">
        <Slider ref={sliderRef} {...settings} className="slider">
          {slides.map((s) => (
            <div key={s.id} className="slide">
              <div className="slide__img">
                <Image src={s.img} alt={s.title} fill className="slide-img" />
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
        .slide-img { object-fit: cover; }
        .slide__content { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); color:#fff; text-align:left; max-width:780px; width:calc(100% - 40px); }
        .slide__content__left { left: 12%; transform: translate(-12%, -50%); text-align:left; }
        .top-title { font-family: 'Playball', cursive; font-size: 2.2rem; margin-bottom:0.6rem; color:#fff; }
        .title { font-size: 3.2rem; margin:6px 0; line-height:1.02; color:#fff; text-transform:uppercase; font-weight:800; }
        .subtitle { color: rgba(255,255,255,0.92); margin-bottom:1rem; }
        .button-custom { display:inline-block; background:#fff; color:#111; padding:0.9rem 1.6rem; border-radius:999px; font-weight:700; text-decoration:none; margin-top:8px; }
        .slide .slide-img { transition: transform 6s ease; }
        .slide.slick-current .slide-img { transform: scale(1.06); }
        .slick-nav { --active:#fff; --border:rgba(255,255,255,.12); width:48px; height:48px; position:absolute; top:calc(50% - 24px); cursor:pointer; z-index:40; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,0.45); border-radius:999px; border:1px solid rgba(255,255,255,0.06); }
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

      <script dangerouslySetInnerHTML={{ __html: `
        (function(){
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
          if (typeof window !== 'undefined') setTimeout(addNavListeners, 300);
        })()
      ` }} />
    </>
  );
}
