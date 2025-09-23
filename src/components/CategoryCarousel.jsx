import React, { useState, useRef } from "react";

/**
 * CategoryCarousel + CategoryCarouselAlt
 *
 * Place these images in public/images/:
 * - bg2.jpeg
 * - product-ricebran.jpg
 * - logo.png
 *
 * Usage:
 *  import CategoryCarousel from "@/components/CategoryCarousel"
 *  <CategoryCarousel />
 *
 * or use <CategoryCarouselAlt /> to compare an alternate layout.
 */

export default function CategoryCarousel() {
  const items = [
    {
      id: "veer Bharat",
      title: "Veer Bharat — Trusted Oils, Thoughtful Practices",
      img: "/images/bg2.jpeg", // background / hero image
      productImg: "/images/product-ricebran.jpg", // main right product image that replaces "photo"
      desc: `Established in 2010, Veer Bharat has grown into a dependable provider of edible oils and allied products,
       serving households, retailers, and institutional buyers across India. Built on a foundation of quality, transparency, 
       and customer-first service, we combine traditional know-how with modern manufacturing to deliver products that are safe,
      nutritious, and reliably consistent.
      Our portfolio includes Kachi Ghani mustard oil, light and nutritious soybean oil, refined palm (palm kernel/pam) oil for high-heat cooking,
      rice bran oil, sunflower oil, blended cooking oils and specialty formulations. We supply bulk institutional orders as well as retail-packed bottles 
      and tins, meeting the needs of home kitchens, restaurants, and food manufacturers. Each product is developed to suit practical cooking uses — from gentle
      dressings to high-stability frying — while keeping taste and health in balance.`,
    },
  ];

  const [index, setIndex] = useState(0);
  const animGuard = useRef(false);

  function prev() {
    if (animGuard.current) return;
    animGuard.current = true;
    setIndex((i) => (i - 1 + items.length) % items.length);
    setTimeout(() => (animGuard.current = false), 600);
  }

  function next() {
    if (animGuard.current) return;
    animGuard.current = true;
    setIndex((i) => (i + 1) % items.length);
    setTimeout(() => (animGuard.current = false), 600);
  }

  const cur = items[index];

  return (
    <section className="py-12 relative overflow-visible" style={{ backgroundColor: "#fef9c3" }}>
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT: Text */}
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#15325a] mb-6">{cur.title}</h2>

            {/* We show the full description in two paragraphs (split by first double newline if present) */}
            <p className="text-base md:text-lg text-[#24304a] leading-relaxed mb-4 whitespace-pre-line">
              {cur.desc.split("\n\n")[0]}
            </p>

            <p className="text-base md:text-lg text-[#24304a] leading-relaxed mb-6 whitespace-pre-line">
              {cur.desc.split("\n\n")[1] ?? ""}
            </p>

            <a
              href="/about"
              className="inline-block rounded-md bg-[#16335f] text-white px-5 py-2.5 font-semibold shadow hover:scale-[1.02] transition"
            >
              About Us
            </a>
          </div>

          {/* RIGHT: Hero area (bg image + product + logo) */}
          <div className="flex justify-center md:justify-end relative">
            {/* Background/hero image (subtle, rounded) */}
            <div
              className="rounded-xl overflow-hidden shadow-2xl w-[320px] sm:w-[380px] md:w-[460px] lg:w-[540px]"
              style={{ position: "relative" }}
            >
              <img
                src={cur.img}
                alt="hero background"
                className="w-full h-full object-cover block opacity-95"
                style={{ display: "block" }}
              />

              {/* Product image placed on top/center (absolute) */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -20%)",
                  zIndex: 30,
                  width: "60%",
                  maxWidth: 260,
                }}
                className="flex justify-center"
              >
                <img
                  src={cur.productImg}
                  alt="product"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>

              {/* Logo: placed on the right side where the page had the removed element.
                  This will sit above the hero background in a circular badge */}
              <div
                style={{
                  position: "absolute",
                  right: -18,
                  top: -18,
                  zIndex: 40,
                  width: 140,
                  height: 140,
                  borderRadius: "9999px",
                  background: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 12px 28px rgba(0,0,0,0.18)",
                  border: "6px solid rgba(255, 99, 71, 0.06)",
                }}
              >
                <img
                  src="/images/logo.png"
                  alt="Veer Bharat Logo"
                  style={{ maxWidth: "86%", maxHeight: "86%", objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="mt-8 flex items-center justify-center gap-3">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (animGuard.current || i === index) return;
              animGuard.current = true;
              setIndex(i);
              setTimeout(() => (animGuard.current = false), 600);
            }}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-[#0b0d11]" : "bg-gray-300"}`}
            aria-label={`Go to ${i + 1}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() => setIndex((i) => (i - 1 + items.length) % items.length)}
        aria-label="Prev"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/95 shadow-lg flex items-center justify-center hover:scale-105 transition"
      >
        ‹
      </button>
      <button
        onClick={() => setIndex((i) => (i + 1) % items.length)}
        aria-label="Next"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/95 shadow-lg flex items-center justify-center hover:scale-105 transition"
      >
        ›
      </button>
    </section>
  );
}

/* ------------------ Alternate (same assets, slightly different placement) ------------------ */

export function CategoryCarouselAlt() {
  const items = [
    {
      id: "veer Bharat",
      title: "Veer Bharat — Trusted Oils, Thoughtful Practices",
      img: "/images/bg2.jpeg",
      productImg: "/images/product-ricebran.jpg",
      desc: `Established in 2010, Veer Bharat has grown into a dependable provider of edible oils and allied products,
       serving households, retailers, and institutional buyers across India. Built on a foundation of quality, transparency, 
       and customer-first service, we combine traditional know-how with modern manufacturing to deliver products that are safe,
      nutritious, and reliably consistent.`,
    },
  ];

  const [index, setIndex] = useState(0);
  const animGuard = useRef(false);
  const cur = items[index];

  return (
    <section className="py-12 relative overflow-visible" style={{ backgroundColor: "#fef9c3" }}>
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT: Text (center-left aligned here) */}
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#15325a] mb-6">{cur.title}</h2>

            <p className="text-base md:text-lg text-[#24304a] leading-relaxed mb-6">{cur.desc}</p>

            <a
              href="/about"
              className="inline-block rounded-md bg-[#16335f] text-white px-5 py-2.5 font-semibold shadow hover:scale-[1.02] transition"
            >
              About Us
            </a>
          </div>

          {/* RIGHT: larger framed hero box */}
          <div className="flex justify-center md:justify-end">
            <div
              className="rounded-xl overflow-hidden shadow-2xl"
              style={{ width: "560px", height: "380px", position: "relative" }}
            >
              {/* background */}
              <img src={cur.img} alt="hero" className="w-full h-full object-cover" />

              {/* product anchored bottom-center */}
              <div style={{ position: "absolute", left: "50%", bottom: 18, transform: "translateX(-50%)", zIndex: 30, width: "42%" }}>
                <img src={cur.productImg} alt="product" className="w-full h-auto object-contain drop-shadow-2xl" />
              </div>

              {/* logo at top-right clipped circle */}
              <div
                style={{
                  position: "absolute",
                  right: 12,
                  top: 12,
                  zIndex: 40,
                  width: 120,
                  height: 120,
                  borderRadius: "9999px",
                  background: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 28px rgba(0,0,0,0.14)",
                }}
              >
                <img src="/images/logo.png" alt="logo" style={{ maxWidth: "84%", maxHeight: "84%", objectFit: "contain" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* simple dot nav */}
      <div className="mt-8 flex items-center justify-center gap-3">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (animGuard.current || i === index) return;
              animGuard.current = true;
              setIndex(i);
              setTimeout(() => (animGuard.current = false), 600);
            }}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-[#0b0d11]" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </section>
  );
}
