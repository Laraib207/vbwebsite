// components/VeerBharatHero.jsx
import React from "react";
import { motion } from "framer-motion";

/**
 * Put these files in public/images/ exactly as named:
 * - Veer Bharat Post (1).png
 * - WhatsApp Image 2025-09-23 at 13.35.21.jpeg
 * - WhatsApp Image 2025-09-23 at 13.35.21-2.jpeg
 * - WhatsApp Image 2025-09-23 at 13.35.21-3.jpeg
 * - WhatsApp Image 2025-09-23 at 13.35.21-4.jpeg
 * - WhatsApp Image 2025-09-23 at 13.35.21-5.jpeg
 * - WhatsApp Image 2025-09-23 at 13.35.20-3.jpeg
 * - WhatsApp Image 2025-09-23 at 13.35.20-2.jpeg
 *
 * Usage:
 *  import VeerBharatHero from "@/components/VeerBharatHero"
 *  <VeerBharatHero />
 *
 * Or use VeerBharatHeroAlt() — same copy for quick testing/compare.
 */

const bubblesData = [
  { src: "/images/WhatsApp Image 2025-09-23 at 13.35.21.jpeg", alt: "Reduces Cholesterol", size: 176 },
  { src: "/images/WhatsApp Image 2025-09-23 at 13.35.20-3.jpeg", alt: "High Smoke Point", size: 110 },
  { src: "/images/WhatsApp Image 2025-09-23 at 13.35.21-5.jpeg", alt: "Skin-Improving Benefits", size: 156 },
  { src: "/images/WhatsApp Image 2025-09-23 at 13.35.21-2.jpeg", alt: "Natural Antioxidants", size: 180 },
  { src: "/images/WhatsApp Image 2025-09-23 at 13.35.21-3.jpeg", alt: "Physically Refined", size: 120 },
  { src: "/images/WhatsApp Image 2025-09-23 at 13.35.21-4.jpeg", alt: "Balanced MUFA & PUFA", size: 192 },
];

// desktop absolute positions tuned for ~1240px layout
const desktopPositions = [
  { left: "4%", top: "36%" },    // bubble 0 left large
  { left: "22%", top: "10%" },   // bubble 1 left small top
  { left: "20%", top: "64%" },   // bubble 2 left bottom
  { right: "22%", top: "16%" },  // bubble 3 right top
  { right: "20%", top: "62%" },  // bubble 4 right bottom
  { right: "4%", top: "36%" }    // bubble 5 right large
];

// float animation variants
const floatVariant = {
  float: i => ({
    y: [0, -10 - (i % 3) * 3, 0],
    transition: {
      duration: 3 + (i % 3) * 0.6,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
      delay: i * 0.12,
    },
  }),
};

function Bubble({ src, alt, px, stylePos, i }) {
  return (
    <motion.div
      variants={floatVariant}
      custom={i}
      animate="float"
      whileHover={{ scale: 1.06 }}
      style={{
        position: stylePos ? "absolute" : "relative",
        zIndex: 20,
        ...stylePos,
        transform: stylePos ? "translateY(-2%)" : undefined,
      }}
      className={stylePos ? "hidden md:block" : "block md:hidden"}
    >
      {/* Circle tile */}
      <div
        className="rounded-full overflow-hidden flex items-center justify-center"
        style={{
          width: px,
          height: px,
          border: "6px solid rgba(255,190,66,0.95)",
          boxShadow:
            "0 14px 36px rgba(0,0,0,0.16), inset 0 8px 18px rgba(255,255,255,0.32), inset 0 -8px 18px rgba(0,0,0,0.08)",
          backgroundColor: "#fdf3d6",
        }}
        aria-hidden
      >
        <img src={src} alt={alt} className="w-full h-full object-cover block" />
      </div>
    </motion.div>
  );
}

// Primary component
export default function VeerBharatHero() {
  const productImg = "/images/Veer Bharat Post (1).png";
  const description = `Veer Bharat Kachi Ghani Mustard Oil is cold-pressed in small batches to preserve authentic aroma, golden colour and natural goodness. Rich in beneficial fats and antioxidants, it supports heart-healthy cooking while adding robust, nutty flavour to tempering, curries and pickles. Bottled in food-grade containers and gently filtered for purity, Veer Bharat offers families a premium, traditional mustard oil experience that performs at high heat and keeps nutrition first.`;

  return (
    <section className="relative overflow-hidden" style={{ background: "#fef9c3" }}>
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 py-12 lg:py-20">
        {/* header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-amber-800 via-orange-600 to-red-500">
            Veer Bharat — Kachi Ghani Mustard Oil
          </h2>
          <p className="mt-6 text-amber-900/95 text-base md:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* MAIN VISUAL AREA */}
        <div className="relative mt-10 lg:mt-14 flex flex-col items-center">
          {/* Desktop absolute-position bubbles */}
          <div className="relative w-full flex justify-center items-center min-h-[520px] md:min-h-[640px]">
            {/* soft shadow under bottle */}
            <div className="absolute -bottom-8 w-[240px] md:w-[340px] h-8 md:h-12 rounded-full bg-black/6 blur-2xl" />

            {/* product center */}
            <motion.div
              initial={{ opacity: 0, y: 44, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="z-30"
            >
              <div className="relative w-44 sm:w-56 md:w-72 lg:w-80 xl:w-[380px]">
                <img
                  src={productImg}
                  alt="Veer Bharat Mustard Oil"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
                <div className="absolute -top-3 -right-3 px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full shadow-lg">
                  Premium
                </div>
              </div>
            </motion.div>

            {/* absolute bubbles for desktop */}
            {bubblesData.map((b, i) => (
              <Bubble
                key={i}
                src={b.src}
                alt={b.alt}
                px={b.size}
                stylePos={desktopPositions[i]}
                i={i}
              />
            ))}
          </div>

          {/* MOBILE LAYOUT: 3 icons above, product, 3 below */}
          <div className="w-full md:hidden mt-6">
            <div className="grid grid-cols-3 gap-3 justify-center items-center">
              {/* top 3 */}
              {bubblesData.slice(0, 3).map((b, i) => (
                <Bubble key={i} src={b.src} alt={b.alt} px={96} stylePos={null} i={i} />
              ))}
            </div>

            {/* product center - reuse product image but for mobile slightly smaller */}
            <div className="flex justify-center mt-4">
              <div className="w-40">
                <img
                  src={productImg}
                  alt="Veer Bharat Mustard Oil"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 justify-center items-center mt-4">
              {/* bottom 3 */}
              {bubblesData.slice(3, 6).map((b, i) => (
                <Bubble key={i} src={b.src} alt={b.alt} px={96} stylePos={null} i={i + 3} />
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg transition"
            >
              Enquire Now
            </a>
            <a
              href="#learn"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-amber-700 text-amber-800 font-semibold hover:bg-amber-100 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="h-12" />
    </section>
  );
}

/* ----------------------- COPY: Alternate component (same, for quick compare) ----------------------- */

export function VeerBharatHeroAlt() {
  // exact same markup so you can quickly copy/paste or toggle between versions
  const productImg = "/images/Veer Bharat Post (1).png";
  const description = `Veer Bharat Kachi Ghani Mustard Oil is cold-pressed in small batches to preserve authentic aroma, golden colour and natural goodness. Rich in beneficial fats and antioxidants, it supports heart-healthy cooking while adding robust, nutty flavour to tempering, curries and pickles. Bottled in food-grade containers and gently filtered for purity, Veer Bharat offers families a premium, traditional mustard oil experience that performs at high heat and keeps nutrition first.`;

  return (
    <section className="relative overflow-hidden" style={{ background: "#fef9c3" }}>
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-amber-800 via-orange-600 to-red-500">
            Veer Bharat — Kachi Ghani Mustard Oil
          </h2>
          <p className="mt-6 text-amber-900/95 text-base md:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        <div className="relative mt-10 lg:mt-14 flex flex-col items-center">
          <div className="relative w-full flex justify-center items-center min-h-[520px] md:min-h-[640px]">
            <div className="absolute -bottom-8 w-[240px] md:w-[340px] h-8 md:h-12 rounded-full bg-black/6 blur-2xl" />

            <motion.div
              initial={{ opacity: 0, y: 44, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="z-30"
            >
              <div className="relative w-44 sm:w-56 md:w-72 lg:w-80 xl:w-[380px]">
                <img
                  src={productImg}
                  alt="Veer Bharat Mustard Oil"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
                <div className="absolute -top-3 -right-3 px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full shadow-lg">
                  Premium
                </div>
              </div>
            </motion.div>

            {bubblesData.map((b, i) => (
              <Bubble
                key={i}
                src={b.src}
                alt={b.alt}
                px={b.size}
                stylePos={desktopPositions[i]}
                i={i}
              />
            ))}
          </div>

          <div className="md:hidden w-full mt-6">
            <div className="grid grid-cols-3 gap-3">
              {bubblesData.slice(0, 3).map((b, i) => (
                <Bubble key={i} src={b.src} alt={b.alt} px={96} stylePos={null} i={i} />
              ))}
            </div>

            <div className="flex justify-center mt-4">
              <div className="w-40">
                <img src={productImg} alt="Veer Bharat Mustard Oil" className="w-full h-auto object-contain" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-4">
              {bubblesData.slice(3, 6).map((b, i) => (
                <Bubble key={i} src={b.src} alt={b.alt} px={96} stylePos={null} i={i + 3} />
              ))}
            </div>
          </div>

          <div className="mt-8 flex gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg transition"
            >
              Enquire Now
            </a>
            <a
              href="#learn"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-amber-700 text-amber-800 font-semibold hover:bg-amber-100 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="h-12" />
    </section>
  );
}
