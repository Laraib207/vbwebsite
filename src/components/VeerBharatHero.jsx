// components/VeerBharatHero.jsx
import React from "react";
import { motion } from "framer-motion";

/**
 * Uses bubble images placed in public/images/
 * Filenames used below (make sure they exist):
 * - /images/Veer Bharat Post (1).png
 * - /images/WhatsApp Image 2025-09-23 at 13.35.21.jpeg
 * - /images/WhatsApp Image 2025-09-23 at 13.35.21-2.jpeg
 * - /images/WhatsApp Image 2025-09-23 at 13.35.21-3.jpeg
 * - /images/WhatsApp Image 2025-09-23 at 13.35.21-4.jpeg
 * - /images/WhatsApp Image 2025-09-23 at 13.35.21-5.jpeg
 * - /images/WhatsApp Image 2025-09-23 at 13.35.20-3.jpeg
 * - /images/WhatsApp Image 2025-09-23 at 13.35.20-2.jpeg
 */

export default function VeerBharatHero() {
  const productImg = "/images/Veer Bharat Post (1).png";

  // bubble images: use whichever file matches visually
  const bubbles = [
    { src: "/images/WhatsApp Image 2025-09-23 at 13.35.21.jpeg", alt: "Reduces Cholesterol", size: 176 }, // left large
    { src: "/images/WhatsApp Image 2025-09-23 at 13.35.20-3.jpeg", alt: "High Smoke Point", size: 110 },  // left small top
    { src: "/images/WhatsApp Image 2025-09-23 at 13.35.21-5.jpeg", alt: "Skin-Improving Benefits", size: 156 }, // left bottom
    { src: "/images/WhatsApp Image 2025-09-23 at 13.35.21-2.jpeg", alt: "Natural Antioxidants", size: 180 }, // right top
    { src: "/images/WhatsApp Image 2025-09-23 at 13.35.21-3.jpeg", alt: "Physically Refined", size: 120 }, // right small
    { src: "/images/WhatsApp Image 2025-09-23 at 13.35.21-4.jpeg", alt: "Balanced MUFA & PUFA", size: 192 } // right large
  ];

  // absolute positions tuned for a 1240px-ish layout (feel free to tweak)
  const positions = [
    { left: "4%",    top: "36%"  }, // 0 left large
    { left: "20%",   top: "10%"  }, // 1 left small top
    { left: "18%",   top: "62%"  }, // 2 left bottom
    { right: "20%",  top: "18%"  }, // 3 right top
    { right: "18%",  top: "60%"  }, // 4 right small
    { right: "4%",   top: "36%"  }  // 5 right large
  ];

  const description = `Veer Bharat Kachi Ghani Mustard Oil is cold-pressed in small batches to preserve authentic aroma, golden colour and natural goodness. High in beneficial fats and antioxidants, it supports heart-healthy cooking and adds a rich, nutty flavour to curries, pickles and tempering. Mild filtration retains nutrients without heavy chemical refining. Bottled in food-grade containers and sealed for freshness, Veer Bharat offers families a premium, traditional mustard oil experience that stands up to high-heat cooking while keeping safety and purity first.`;

  // circle tile component: uses an <img> inside rounded container to clip and add rim/shadow
  const BubbleTile = ({ src, alt, pxSize }) => (
    <div
      className="rounded-full overflow-hidden flex items-center justify-center"
      style={{
        width: pxSize,
        height: pxSize,
        // ring / rim that looks like your reference (warm amber ring)
        boxShadow:
          "0 12px 30px rgba(0,0,0,0.14), inset 0 8px 18px rgba(255,255,255,0.32), inset 0 -8px 18px rgba(0,0,0,0.08)",
        border: "6px solid rgba(255,190,66,0.9)",
        backgroundColor: "#fbe6c3" // fallback fill if image has transparent parts
      }}
      aria-hidden
    >
      <img
        src={src}
        alt={alt}
        className="object-cover w-full h-full"
        style={{
          display: "block",
          // if your images still have visible rectangular backgrounds, comment below:
          // filter: "drop-shadow(0 6px 20px rgba(0,0,0,0.12))",
        }}
      />
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-[#fff7e0]">
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

        {/* main visual */}
        <div className="relative mt-10 lg:mt-14 flex justify-center items-center min-h-[520px]">
          {/* soft shadow under bottle */}
          <div className="absolute -bottom-8 w-[220px] md:w-[320px] h-8 md:h-12 rounded-full bg-black/6 blur-2xl" />

          {/* center product */}
          <motion.div
            className="z-30"
            initial={{ opacity: 0, y: 36, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="relative w-48 sm:w-56 md:w-72 lg:w-80 xl:w-[380px]">
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

          {/* bubbles (desktop absolute) */}
          {bubbles.map((b, idx) => {
            const pos = positions[idx] || {};
            return (
              <motion.div
                key={idx}
                className="hidden md:block"
                style={{
                  position: "absolute",
                  zIndex: 20,
                  ...pos,
                  // small translate to better align visually
                  transform: "translateY(-2%)",
                }}
                initial={{ opacity: 0, scale: 0.72 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.14 + idx * 0.06 }}
                whileHover={{ scale: 1.06 }}
              >
                <BubbleTile src={b.src} alt={b.alt} pxSize={b.size} />
              </motion.div>
            );
          })}
        </div>

        {/* mobile grid fallback (ensures text inside bubbles stays visible) */}
        <div className="md:hidden grid grid-cols-3 gap-3 mt-8">
          {bubbles.map((b, i) => (
            <div className="flex items-center justify-center" key={i}>
              <BubbleTile src={b.src} alt={b.alt} pxSize={96} />
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-10 flex justify-center gap-4">
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
      <div className="h-12" />
    </section>
  );
}
