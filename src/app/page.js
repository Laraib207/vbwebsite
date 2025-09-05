// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Poppins, Playfair_Display } from "next/font/google";
// import { products } from "../data/products";

// // Fonts
// const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "800"] });
// const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "800"] });

// // Easing
// const ease = [0.22, 1, 0.36, 1];

// export default function Home() {
//   // Slides for hero (link to product detail pages)
//   const slides = [
//     {
//       img: "/banner1.jpg",
//       title: "Kachi Ghani Mustard Oil",
//       line: "Bold flavour. Asli parampara.",
//       cta: "Explore Mustard",
//       link: "/products/kachi-ghani-mustard-oil",
//       chip: "Bold Flavour",
//       accent: "from-amber-400 via-orange-500 to-green-600",
//       notes: ["Cold-Pressed", "Omega-3 Rich", "Strong Aroma"],
//     },
//     {
//       img: "/banner2.jpg",
//       title: "Soyabean Oil",
//       line: "Light & healthy for every day.",
//       cta: "Explore Soyabean",
//       link: "/products/soyabean-oil",
//       chip: "Light & Healthy",
//       accent: "from-yellow-300 via-amber-400 to-green-500",
//       notes: ["Light Texture", "Vitamin E", "Crisp Frying"],
//     },
//     {
//       img: "/banner3.jpg",
//       title: "Rice Bran Oil",
//       line: "Heart-friendly, cholesterol-smart.",
//       cta: "Explore Rice Bran",
//       link: "/products/rice-bran-oil",
//       chip: "Wellness",
//       accent: "from-orange-400 via-amber-500 to-emerald-600",
//       notes: ["γ-Oryzanol", "Balanced Frying", "Neutral Taste"],
//     },
//   ];

//   const [current, setCurrent] = useState(0);

//   // Auto slide
//   useEffect(() => {
//     const t = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
//     return () => clearInterval(t);
//   }, [slides.length]);

//   const next = () => setCurrent((p) => (p + 1) % slides.length);
//   const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);

//   return (
//     <main className={`${poppins.className} bg-[#0f1115] text-white`}>
//       {/* ================= HERO (pehle wala dark premium) ================= */}
//       <section className="relative h-[90vh] w-full overflow-hidden">
//         {/* Backdrop image crossfade */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={current}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1.0, ease }}
//             className="absolute inset-0"
//           >
//             <Image
//               src={slides[current].img}
//               alt="Veer Bharat Banner"
//               fill
//               priority
//               className="object-cover"
//             />
//           </motion.div>
//         </AnimatePresence>

//         {/* Overlays */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/70" />
//         <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(80%_60%_at_50%_30%,rgba(255,196,0,0.12),transparent),radial-gradient(60%_40%_at_80%_20%,rgba(16,185,129,0.12),transparent)]" />

//         {/* Zomato-like glass card (top-left on desktop / center on mobile) */}
//         <motion.div
//           key={`card-${current}`}
//           initial={{ y: -24, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.6, ease }}
//           className="absolute top-6 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0"
//         >
//           <div className="backdrop-blur-xl bg-white/10 border border-white/15 rounded-2xl shadow-2xl p-5 md:p-6 max-w-[92vw] md:max-w-md">
//             <div className="flex items-center gap-4">
//               <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 via-orange-500 to-green-600 flex items-center justify-center text-white font-extrabold shadow-lg">
//                 VB
//               </div>
//               <div>
//                 <h3 className="text-white text-xl md:text-2xl font-bold">{slides[current].title}</h3>
//                 <p className="text-gray-200 text-sm md:text-base">{slides[current].line}</p>
//               </div>
//             </div>
//             <Link
//               href={slides[current].link}
//               className={`mt-4 inline-block px-5 py-2 rounded-full border text-sm md:text-base font-semibold shadow hover:shadow-lg transition bg-gradient-to-r ${slides[current].accent} text-white`}
//             >
//               {slides[current].cta} →
//             </Link>
//           </div>
//         </motion.div>

//         {/* Center hero text (animated only text) */}
//         <div className="absolute inset-0 flex items-center">
//           <div className="mx-auto w-full max-w-6xl px-6">
//             {/* Badge */}
//             <motion.div
//               key={`badge-${current}`}
//               initial={{ y: -12, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.5, ease }}
//               className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm"
//             >
//               <span className="inline-block h-2 w-2 rounded-full bg-amber-400" />
//               Pure • Trusted • Indian
//             </motion.div>

//             {/* Left to right */}
//             <motion.h1
//               key={`veer-${current}`}
//               initial={{ x: -80, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.75, ease }}
//               className="mt-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
//             >
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-400 to-emerald-400">
//                 VEER BHARAT OILS
//               </span>
//             </motion.h1>

//             {/* Right to left */}
//             <motion.h2
//               key={`maza-${current}`}
//               initial={{ x: 80, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.75, ease, delay: 0.1 }}
//               className={`${playfair.className} mt-2 text-3xl md:text-5xl font-extrabold text-white`}
//             >
//               वाह! मज़ा आ गया
//             </motion.h2>

//             {/* Tagline */}
//             <motion.p
//               key={`tag1-${current}`}
//               initial={{ y: 18, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.55, ease, delay: 0.2 }}
//               className="mt-4 max-w-2xl text-lg sm:text-xl text-gray-100 font-semibold"
//             >
//               Kachi Ghani Mustard • Soyabean • Rice Bran —{" "}
//               <span className="text-amber-300 font-extrabold">हर बूंद में भरोसा</span>
//             </motion.p>

//             {/* CTA Row */}
//             <motion.div
//               key={`cta-${current}`}
//               initial={{ y: 16, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.55, ease, delay: 0.35 }}
//               className="mt-8 flex flex-wrap items-center gap-4"
//             >
//               <Link
//                 href="/products"
//                 className="rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-green-600 px-6 py-3 font-extrabold shadow-lg hover:shadow-amber-500/20"
//               >
//                 Explore Products
//               </Link>
//               <Link
//                 href="/about"
//                 className="rounded-full border border-white/20 px-6 py-3 font-bold text-white/90 hover:bg-white/10"
//               >
//                 Why Veer Bharat?
//               </Link>
//             </motion.div>

//             {/* Manual arrows */}
//             <div className="mt-10 flex gap-3">
//               <button
//                 onClick={prev}
//                 className="rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white/10"
//                 aria-label="Previous slide"
//               >
//                 ← Prev
//               </button>
//               <button
//                 onClick={next}
//                 className="rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white/10"
//                 aria-label="Next slide"
//               >
//                 Next →
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= PRODUCTS (Luxury Cards → detail pages) ================= */}
//       <section className="relative py-24">
//         <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[#101318] to-[#0b0d11]" />
//         <div className="mx-auto max-w-6xl px-6">
//           <div className="flex items-end justify-between gap-6">
//             <div>
//               <RevealY>
//                 <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
//                   Our Signature Collection
//                 </h2>
//               </RevealY>
//               <RevealY delay={0.1}>
//                 <p className="mt-2 text-gray-300">Handpicked for taste, purity, and everyday wellness.</p>
//               </RevealY>
//             </div>
//             <RevealY delay={0.15}>
//               <Link
//                 href="/products"
//                 className="hidden sm:inline-flex rounded-full border border-white/20 px-5 py-2.5 font-semibold text-white/90 hover:bg-white/10"
//               >
//                 View All →
//               </Link>
//             </RevealY>
//           </div>

//           {/* Luxury Grid (links go to detail pages) */}
//           <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {slides.map((p, i) => (
//               <RevealY key={i} delay={0.06 * i}>
//                 <LuxuryCard
//                   img={p.img}
//                   title={p.title}
//                   tagline={p.line}
//                   href={p.link}
//                   chip={p.chip}
//                   accent={p.accent}
//                   notes={p.notes}
//                 />
//               </RevealY>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= Popular (from data/products.js) ================= */}
//       <section className="mx-auto max-w-6xl px-6 pb-16">
//         <h2 className="text-2xl sm:text-3xl font-extrabold">Our Popular Oils</h2>
//         <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {products.slice(0, 3).map((p) => (
//             <Link
//               key={p.slug}
//               href={`/products/${p.slug}`}
//               className="group rounded-3xl border border-[#eadcc8] bg-white/70 backdrop-blur hover:shadow-xl transition overflow-hidden"
//             >
//               <div className="relative h-48">
//                 <Image src={p.image} alt={p.name} fill className="object-cover" />
//               </div>
//               <div className="p-5 text-[#2b2a28]">
//                 <h3 className="text-lg font-extrabold">{p.name}</h3>
//                 <p className="mt-1 text-sm text-[#6b645b]">{p.short}</p>
//                 <span className="mt-3 inline-block text-sm font-semibold underline">View details →</span>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </section>

//       {/* ================= FOOTER (already in layout) ================= */}
//     </main>
//   );
// }

// /* Reveal-on-scroll wrapper */
// function RevealY({ children, delay = 0 }) {
//   return (
//     <motion.div
//       initial={{ y: 18, opacity: 0 }}
//       whileInView={{ y: 0, opacity: 1 }}
//       viewport={{ once: true, amount: 0.3 }}
//       transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
//     >
//       {children}
//     </motion.div>
//   );
// }

// /* Luxury product card (Link version) */
// function LuxuryCard({ img, title, tagline, href, chip, accent, notes = [] }) {
//   const [xy, setXy] = useState({ rx: 0, ry: 0 });

//   const onMove = (e) => {
//     const r = e.currentTarget.getBoundingClientRect();
//     const x = (e.clientX - r.left) / r.width;
//     const y = (e.clientY - r.top) / r.height;
//     const rx = (y - 0.5) * -6; // rotateX
//     const ry = (x - 0.5) * 6;  // rotateY
//     setXy({ rx, ry });
//   };

//   const onLeave = () => setXy({ rx: 0, ry: 0 });

//   return (
//     <motion.div
//       onMouseMove={onMove}
//       onMouseLeave={onLeave}
//       initial={{ opacity: 0, y: 14 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       whileHover={{ y: -6 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//       className="group relative overflow-hidden rounded-3xl"
//       style={{
//         transform: `perspective(900px) rotateX(${xy.rx}deg) rotateY(${xy.ry}deg)`,
//         transformStyle: "preserve-3d",
//       }}
//     >
//       <Link href={href} className="block">
//         {/* Gradient “expensive” outer border */}
//         <div className={`relative rounded-3xl p-[1.2px] bg-gradient-to-r ${accent}`}>
//           {/* Inner glass body */}
//           <div className="relative rounded-[calc(1.5rem-1.2px)] bg-gradient-to-b from-white/[0.08] to-white/[0.04] backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.6)]">
//             {/* Top shine */}
//             <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/20 to-transparent rounded-t-[calc(1.5rem-1.2px)] pointer-events-none" />

//             {/* Product image */}
//             <div className="relative h-64 w-full overflow-hidden rounded-t-[calc(1.5rem-1.2px)]">
//               <Image src={img} alt={title} fill className="object-cover" />
//               {/* Premium chip */}
//               <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-extrabold text-gray-900 shadow">
//                 {chip}
//               </div>
//               {/* Soft spotlight */}
//               <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_70%_20%,rgba(255,255,255,0.22),transparent)] opacity-60" />
//             </div>

//             {/* Content */}
//             <div className="relative p-6">
//               <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
//                 {title}
//               </h3>
//               <p className="mt-1 text-sm text-gray-300">{tagline}</p>

//               {/* Feature pills */}
//               {notes.length > 0 && (
//                 <div className="mt-4 flex flex-wrap gap-2">
//                   {notes.map((n, i) => (
//                     <span
//                       key={i}
//                       className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/90"
//                     >
//                       {n}
//                     </span>
//                   ))}
//                 </div>
//               )}

//               {/* CTA */}
//               <div className="mt-6 flex items-center justify-between">
//                 <div
//                   className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white shadow bg-gradient-to-r ${accent}`}
//                 >
//                   Explore <span>→</span>
//                 </div>
//                 <div className="pointer-events-none h-8 w-8 rounded-full bg-white/50 blur-xl" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Glow ring on hover */}
//         <div
//           className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//           style={{
//             boxShadow:
//               "0 0 0 1px rgba(255,255,255,0.06) inset, 0 30px 80px -20px rgba(255,171,0,0.25), 0 18px 50px -24px rgba(16,185,129,0.25)",
//           }}
//         />
//       </Link>
//     </motion.div>
//   );
// }







// src/app/page.js  (Home page for Next.js app router)
// If your Home lives elsewhere, keep "use client" and imports the same.

// src/app/page.js
"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Poppins, Playfair_Display } from "next/font/google";
import { products } from "../data/products"; // correct relative path

// Fonts
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "800"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "800"] });

// Easing
const ease = [0.22, 1, 0.36, 1];

export default function Home() {
  // Slides for hero
  const slides = [
    {
      img: "/banner1.jpg",
      title: "Kachi Ghani Mustard Oil",
      line: "Bold flavour. Asli parampara.",
      cta: "Explore Mustard",
      link: "/products/kachi-ghani-mustard-oil",
      chip: "Bold Flavour",
      accent: "from-amber-400 via-orange-500 to-green-600",
      notes: ["Cold-Pressed", "Omega-3 Rich", "Strong Aroma"],
    },
    {
      /// jurni add this componenet
      img: "/banner2.jpg",
      title: "Soyabean Oil",
      line: "Light & healthy for every day.",
      cta: "Explore Soyabean",
      link: "/products/soyabean-oil",
      chip: "Light & Healthy",
      accent: "from-yellow-300 via-amber-400 to-green-500",
      notes: ["Light Texture", "Vitamin E", "Crisp Frying"],
    },
    {
      img: "/banner3.jpg",
      title: "Rice Bran Oil",
      line: "Heart-friendly, cholesterol-smart.",
      cta: "Explore Rice Bran",
      link: "/products/rice-bran-oil",
      chip: "Wellness",
      accent: "from-orange-400 via-amber-500 to-emerald-600",
      notes: ["γ-Oryzanol", "Balanced Frying", "Neutral Taste"],
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, [slides.length]);

  // navigation removed from hero (per your request)
  const next = () => setCurrent((p) => (p + 1) % slides.length);
  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);

  return (
    <main className={`${poppins.className} bg-[#0f1115] text-white`}>
      {/* ===== HERO ===== */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        {/* Backdrop image crossfade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease }}
            className="absolute inset-0"
          >
            <Image src={slides[current].img} alt="Veer Bharat Banner" fill priority className="object-cover" />
          </motion.div>
        </AnimatePresence>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/70" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(80%_60%_at_50%_30%,rgba(255,196,0,0.12),transparent),radial-gradient(60%_40%_at_80%_20%,rgba(16,185,129,0.12),transparent)]" />

        {/* Note: removed the top-left glass card + badge + prev/next controls per your screenshot */}

        {/* Center hero text */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-6 text-center lg:text-left">
            <motion.h1
              key={`veer-${current}`}
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.75, ease }}
              className="mt-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-400 to-emerald-400">
                VEER BHARAT OILS
              </span>
            </motion.h1>

            <motion.h2
              key={`maza-${current}`}
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.75, ease, delay: 0.1 }}
              className={`${playfair.className} mt-2 text-3xl md:text-5xl font-extrabold text-white`}
            >
              वाह! मज़ा आ गया
            </motion.h2>

            <motion.p
              key={`tag1-${current}`}
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.55, ease, delay: 0.2 }}
              className="mt-4 max-w-2xl text-lg sm:text-xl text-gray-100 font-semibold"
            >
              Kachi Ghani Mustard • Soyabean • Rice Bran —{" "}
              <span className="text-amber-300 font-extrabold">हर बूंद में भरोसा</span>
            </motion.p>

            <motion.div
              key={`cta-${current}`}
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.55, ease, delay: 0.35 }}
              className="mt-8 flex flex-wrap items-center gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/products"
                className="rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-green-600 px-6 py-3 font-extrabold shadow-lg hover:shadow-amber-500/20"
              >
                Explore Products
              </Link>
              {/* Removed the "Why Veer Bharat?" button per your request */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== NEW EXPENSIVE H1 (between banner and video) ===== */}
      <motion.section
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto px-6 py-12"
      >
        <div className="mx-auto max-w-5xl text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-amber-300 drop-shadow-lg">
            Veer Bharat ka Naya <span className="text-white">Soyabean Oil</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl">
            Premium Purity, Everyday Health — <span className="font-semibold text-white">Ek dum expensive, pure & trusted</span>.
            Experience smoother cooking, healthier meals and richer taste with our new flagship soyabean oil.
          </p>
        </div>
      </motion.section>

      {/* ===== VIDEO (slides in left → right) ===== */}
      <motion.section
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease }}
        className="relative w-full overflow-hidden"
      >
        <div className="relative h-[56vh] md:h-[60vh] lg:h-[68vh]">
          <video
            src="/hero-video.mp4"
            poster="/banner1.jpg"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

          <div className="absolute left-0 right-0 bottom-6 px-6 md:px-12 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="max-w-4xl bg-white/8 backdrop-blur-md border border-white/8 rounded-2xl p-5 md:p-6 flex items-center gap-4"
            >
              <div className="flex-1">
                <h3 className="text-white text-lg md:text-xl font-extrabold">
                  Live At Events — Veer Bharat On Ground
                </h3>
                <p className="mt-1 text-sm md:text-base text-white/90">
                  Our Delhi team presenting live demos & tastings — bringing flavour to every plate.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Link href="/contact" className="px-4 py-2 rounded-full bg-amber-400 text-black font-semibold hover:scale-105 transition">
                  Contact Team
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="h-6 bg-gradient-to-b from-transparent to-white/6 -mt-1" />
      </motion.section>

      {/* ===== PRODUCTS (Luxury Cards) ===== */}
      <section className="relative py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[#101318] to-[#0b0d11]" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between gap-6">
            <div>
              <RevealY>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Our Signature Collection</h2>
              </RevealY>
              <RevealY delay={0.1}>
                <p className="mt-2 text-gray-300">Handpicked for taste, purity, and everyday wellness.</p>
              </RevealY>
            </div>
            <RevealY delay={0.15}>
              <Link href="/products" className="hidden sm:inline-flex rounded-full border border-white/20 px-5 py-2.5 font-semibold text-white/90 hover:bg-white/10">
                View All →
              </Link>
            </RevealY>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {slides.map((p, i) => (
              <RevealY key={i} delay={0.06 * i}>
                <LuxuryCard
                  img={p.img}
                  title={p.title}
                  tagline={p.line}
                  href={p.link}
                  chip={p.chip}
                  accent={p.accent}
                  notes={p.notes}
                />
              </RevealY>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Popular (from data/products.js) ===== */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold">Our Popular Oils</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="group rounded-3xl border border-[#eadcc8] bg-white/70 backdrop-blur hover:shadow-xl transition overflow-hidden"
            >
              <div className="relative h-48">
                <Image src={p.image} alt={p.name} fill className="object-cover" />
              </div>
              <div className="p-5 text-[#2b2a28]">
                <h3 className="text-lg font-extrabold">{p.name}</h3>
                <p className="mt-1 text-sm text-[#6b645b]">{p.short}</p>
                <span className="mt-3 inline-block text-sm font-semibold underline">View details →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

/* ===== Helpers ===== */

function RevealY({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ y: 18, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function LuxuryCard({ img, title, tagline, href, chip, accent, notes = [] }) {
  const [xy, setXy] = useState({ rx: 0, ry: 0 });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    const rx = (y - 0.5) * -6;
    const ry = (x - 0.5) * 6;
    setXy({ rx, ry });
  };

  const onLeave = () => setXy({ rx: 0, ry: 0 });

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-3xl"
      style={{
        transform: `perspective(900px) rotateX(${xy.rx}deg) rotateY(${xy.ry}deg)`,
        transformStyle: "preserve-3d",
      }}
    >
      <Link href={href} className="block">
        <div className={`relative rounded-3xl p-[1.2px] bg-gradient-to-r ${accent}`}>
          <div className="relative rounded-[calc(1.5rem-1.2px)] bg-gradient-to-b from-white/[0.08] to-white/[0.04] backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/20 to-transparent rounded-t-[calc(1.5rem-1.2px)] pointer-events-none" />

            <div className="relative h-64 w-full overflow-hidden rounded-t-[calc(1.5rem-1.2px)]">
              <Image src={img} alt={title} fill className="object-cover" />
              <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-extrabold text-gray-900 shadow">
                {chip}
              </div>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_70%_20%,rgba(255,255,255,0.22),transparent)] opacity-60" />
            </div>

            <div className="relative p-6">
              <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">{title}</h3>
              <p className="mt-1 text-sm text-gray-300">{tagline}</p>

              {notes.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {notes.map((n, i) => (
                    <span key={i} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/90">
                      {n}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-6 flex items-center justify-between">
                <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white shadow bg-gradient-to-r ${accent}`}>
                  Explore <span>→</span>
                </div>
                <div className="pointer-events-none h-8 w-8 rounded-full bg-white/50 blur-xl" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.06) inset, 0 30px 80px -20px rgba(255,171,0,0.25), 0 18px 50px -24px rgba(16,185,129,0.25)",
          }}
        />
      </Link>
    </motion.div>
  );
}
