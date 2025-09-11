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


// src/app/page.js

// src/app/page.js


// app/(or pages)/Home.jsx  — place this in your Next.js app (as page or component)






// app/(or pages)/Home.jsx

// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import React, { useEffect, useState, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Poppins, Playfair_Display } from "next/font/google";
// import { products } from "../data/products"; // adjust path if needed

// // Fonts
// const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "800"] });
// const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "800"] });

// // easing
// const ease = [0.22, 1, 0.36, 1];

// export default function Home() {
//   const slides = [
//     { img: "/banner1.jpg", title: "Kachi Ghani Mustard Oil", line: "Bold flavour. Asli parampara.", cta: "Explore Mustard", link: "/products/kachi-ghani-mustard-oil", chip: "Bold Flavour", accent: "from-amber-400 via-orange-500 to-green-600", notes: ["Cold-Pressed", "Omega-3 Rich", "Strong Aroma"] },
//     { img: "/banner2.jpg", title: "Soyabean Oil", line: "Light & healthy for every day.", cta: "Explore Soyabean", link: "/products/soyabean-oil", chip: "Light & Healthy", accent: "from-yellow-300 via-amber-400 to-green-500", notes: ["Light Texture", "Vitamin E", "Crisp Frying"] },
//     { img: "/banner3.jpg", title: "Rice Bran Oil", line: "Heart-friendly, cholesterol-smart.", cta: "Explore Rice Bran", link: "/products/rice-bran-oil", chip: "Wellness", accent: "from-orange-400 via-amber-500 to-emerald-600", notes: ["γ-Oryzanol", "Balanced Frying", "Neutral Taste"] },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);
//   useEffect(() => {
//     const t = setInterval(() => setCurrentSlide((p) => (p + 1) % slides.length), 5000);
//     return () => clearInterval(t);
//   }, [slides.length]);

//   // spacer height under video (change to 5/10/20/40 etc)
//   const spacerHeight = 12; // px (increase if you want more gap)

//   return (
//     <main className={`${poppins.className} bg-[#0f1115] text-white`}>
//       {/* ===== TOP VIDEO CAROUSEL (single video default) ===== */}
//       <VideoCarousel videos={["/292827_small.mp4"]} />

//       {/* spacer: small clear space then centered word-by-word heading (visible) */}
//       <div style={{ height: spacerHeight }} />

//       <div className="w-full text-center mb-6">
//         {/* Word-by-word reveal component visible below video */}
//         <WordReveal
//           text="More information about Veer Bharat"
//           wordDelay={350}
//           className={`${playfair.className} text-white`}
//         />
//       </div>

//       {/* ===== HERO (the original banner image hero) ===== */}
//       <section className="relative h-[90vh] w-full overflow-hidden">
//         <AnimatePresence mode="wait">
//           <motion.div key={currentSlide} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.0, ease }} className="absolute inset-0">
//             <Image src={slides[currentSlide].img} alt="Veer Bharat Banner" fill priority className="object-cover" />
//           </motion.div>
//         </AnimatePresence>

//         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/70" />
//         <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(80%_60%_at_50%_30%,rgba(255,196,0,0.08),transparent),radial-gradient(60%_40%_at_80%_20%,rgba(16,185,129,0.06),transparent)]" />

//         <div className="absolute inset-0 flex items-center">
//           <div className="mx-auto w-full max-w-6xl px-6 text-center lg:text-left">
//             <motion.h1 key={`veer-${currentSlide}`} initial={{ x: -80, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.75, ease }} className="mt-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-400 to-emerald-400">VEER BHARAT OILS</span>
//             </motion.h1>

//             <motion.h2 key={`maza-${currentSlide}`} initial={{ x: 80, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.75, ease, delay: 0.1 }} className={`${playfair.className} mt-2 text-3xl md:text-5xl font-extrabold text-white`}>
//               वाह! मज़ा आ गया
//             </motion.h2>

//             <motion.p key={`tag1-${currentSlide}`} initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.55, ease, delay: 0.2 }} className="mt-4 max-w-2xl text-lg sm:text-xl text-gray-100 font-semibold">
//               Kachi Ghani Mustard • Soyabean • Rice Bran — <span className="text-amber-300 font-extrabold">हर बूंद में भरोसा</span>
//             </motion.p>

//             <motion.div key={`cta-${currentSlide}`} initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.55, ease, delay: 0.35 }} className="mt-8 flex flex-wrap items-center gap-4 justify-center lg:justify-start">
//               <Link href="/products" className="rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-green-600 px-6 py-3 font-extrabold shadow-lg hover:shadow-amber-500/20 transition">Explore Products</Link>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* PRODUCTS etc. unchanged */}
//       <section className="relative py-24">
//         <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[#101318] to-[#0b0d11]" />
//         <div className="mx-auto max-w-6xl px-6">
//           <div className="flex items-end justify-between gap-6">
//             <div>
//               <RevealY>
//                 <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Our Signature Collection</h2>
//               </RevealY>
//               <RevealY delay={0.1}>
//                 <p className="mt-2 text-gray-300">Handpicked for taste, purity, and everyday wellness.</p>
//               </RevealY>
//             </div>
//             <RevealY delay={0.15}>
//               <Link href="/products" className="hidden sm:inline-flex rounded-full border border-white/20 px-5 py-2.5 font-semibold text-white/90 hover:bg-white/10">View All →</Link>
//             </RevealY>
//           </div>

//           <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {slides.map((p, i) => (
//               <RevealY key={i} delay={0.06 * i}>
//                 <LuxuryCard img={p.img} title={p.title} tagline={p.line} href={p.link} chip={p.chip} accent={p.accent} notes={p.notes} />
//               </RevealY>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="mx-auto max-w-6xl px-6 pb-16">
//         <h2 className="text-2xl sm:text-3xl font-extrabold">Our Popular Oils</h2>
//         <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {products.slice(0, 3).map((p) => (
//             <Link key={p.slug} href={`/products/${p.slug}`} className="group rounded-3xl border border-[#eadcc8] bg-white/70 backdrop-blur hover:shadow-xl transition overflow-hidden">
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
//     </main>
//   );
// }

// /* ===== Helpers ===== */

// function RevealY({ children, delay = 0 }) {
//   return (
//     <motion.div initial={{ y: 18, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}>
//       {children}
//     </motion.div>
//   );
// }

// function LuxuryCard({ img, title, tagline, href, chip, accent, notes = [] }) {
//   const [xy, setXy] = useState({ rx: 0, ry: 0 });
//   const onMove = (e) => {
//     const r = e.currentTarget.getBoundingClientRect();
//     const x = (e.clientX - r.left) / r.width;
//     const y = (e.clientY - r.top) / r.height;
//     setXy({ rx: (y - 0.5) * -6, ry: (x - 0.5) * 6 });
//   };
//   const onLeave = () => setXy({ rx: 0, ry: 0 });
//   return (
//     <motion.div onMouseMove={onMove} onMouseLeave={onLeave} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -6 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="group relative overflow-hidden rounded-3xl" style={{ transform: `perspective(900px) rotateX(${xy.rx}deg) rotateY(${xy.ry}deg)`, transformStyle: "preserve-3d" }}>
//       <Link href={href} className="block">
//         <div className={`relative rounded-3xl p-[1.2px] bg-gradient-to-r ${accent}`}>
//           <div className="relative rounded-[calc(1.5rem-1.2px)] bg-gradient-to-b from-white/[0.08] to-white/[0.04] backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.6)]">
//             <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/20 to-transparent rounded-t-[calc(1.5rem-1.2px)] pointer-events-none" />
//             <div className="relative h-64 w-full overflow-hidden rounded-t-[calc(1.5rem-1.2px)]">
//               <Image src={img} alt={title} fill className="object-cover" />
//               <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-extrabold text-gray-900 shadow">{chip}</div>
//               <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_70%_20%,rgba(255,255,255,0.22),transparent)] opacity-60" />
//             </div>
//             <div className="relative p-6">
//               <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">{title}</h3>
//               <p className="mt-1 text-sm text-gray-300">{tagline}</p>
//               {notes.length > 0 && (
//                 <div className="mt-4 flex flex-wrap gap-2">
//                   {notes.map((n, i) => (
//                     <span key={i} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/90">{n}</span>
//                   ))}
//                 </div>
//               )}
//               <div className="mt-6 flex items-center justify-between">
//                 <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white shadow bg-gradient-to-r ${accent}`}>Explore <span>→</span></div>
//                 <div className="pointer-events-none h-8 w-8 rounded-full bg-white/50 blur-xl" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </Link>
//     </motion.div>
//   );
// }

// /* === VIDEO CAROUSEL COMPONENT (single-video focus) === */
// function VideoCarousel({ videos = [], interval = 15000 }) {
//   const [index, setIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const vidRef = useRef(null);

//   useEffect(() => {
//     const v = vidRef.current;
//     if (!v) return;
//     v.muted = true;
//     v.playsInline = true;
//     v.preload = "metadata";

//     // attempt autoplay on mount
//     const p = v.play();
//     if (p && p.catch) p.catch(() => setIsPlaying(false));
//     else setIsPlaying(!v.paused);

//     const onEnded = () => setIsPlaying(false);
//     v.addEventListener("ended", onEnded);
//     return () => v.removeEventListener("ended", onEnded);
//   }, [index, videos]);

//   const togglePlay = () => {
//     const v = vidRef.current;
//     if (!v) return;
//     if (v.paused) {
//       v.play().catch(() => setIsPlaying(false));
//       setIsPlaying(true);
//     } else {
//       v.pause();
//       setIsPlaying(false);
//     }
//   };

//   return (
//     <section className="relative w-full overflow-hidden bg-black border-b border-white/6">
//       <div className="relative h-[64vh] md:h-[74vh] lg:h-[82vh]">
//         <video ref={vidRef} className="w-full h-full object-cover" src={videos[index]} autoPlay muted loop={false} playsInline preload="metadata" poster="/banner1.jpg" />

//         {/* cinematic overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30 pointer-events-none" />

//         {/* Animated title overlay (large) */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-4">
//           <AnimatedHero
//             mainText="Welcome to Veer Bharat"   // change if needed
//             subText="मज़ा आ गया"               // change if needed
//             letterDelay={110}
//             subDelay={220}
//           />
//         </div>

//         {/* Play/Pause control */}
//         <button onClick={togglePlay} aria-label={isPlaying ? "Pause video" : "Play video"} className="absolute right-6 top-6 z-30 flex items-center gap-2 rounded-full bg-white/6 backdrop-blur px-4 py-2 text-sm font-semibold border border-white/10 hover:scale-105 transition">
//           {isPlaying ? "Pause" : "Play"}
//         </button>

//         {videos.length > 1 && (
//           <div className="absolute left-1/2 -translate-x-1/2 bottom-6 flex items-center gap-3">
//             <div className="flex items-center gap-3">
//               {videos.map((_, i) => (
//                 <button key={i} onClick={() => setIndex(i)} aria-label={`Go to video ${i + 1}`} className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-white/30"} border border-white/10`} />
//               ))}
//             </div>
//           </div>
//         )}

//         <div className="pointer-events-none absolute inset-0 border-t border-b border-white/6" />
//       </div>
//     </section>
//   );
// }

// /* === AnimatedHero component: large letter-by-letter main text + bounce subtext === */
// function AnimatedHero({ mainText = "Welcome to Veer Bharat", subText = "मज़ा आ गया", letterDelay = 120, subDelay = 200 }) {
//   const letters = Array.from(mainText);
//   const [visibleCount, setVisibleCount] = useState(0);
//   const [mainDone, setMainDone] = useState(false);

//   useEffect(() => {
//     setVisibleCount(0);
//     setMainDone(false);
//     const t = setInterval(() => {
//       setVisibleCount((c) => {
//         if (c >= letters.length) {
//           clearInterval(t);
//           setTimeout(() => setMainDone(true), 80);
//           return letters.length;
//         }
//         return c + 1;
//       });
//     }, letterDelay);
//     return () => clearInterval(t);
//   }, [mainText, letterDelay]);

//   return (
//     <div className="flex flex-col items-center gap-4 pointer-events-none">
//       {/* Main big text */}
//       <motion.h1
//         aria-hidden
//         className={`${playfair.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight text-white text-center`}
//         style={{ lineHeight: 1 }}
//       >
//         {letters.map((ch, i) => {
//           const isSpace = ch === " ";
//           return (
//             <motion.span
//               key={i}
//               initial={{ opacity: 0, y: 12, scale: 0.98 }}
//               animate={i < visibleCount ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0 }}
//               transition={{ duration: 0.22, ease: ease, delay: 0 }}
//               className="inline-block"
//               style={{ marginRight: isSpace ? 6 : 0 }}
//             >
//               {isSpace ? "\u00A0" : ch}
//             </motion.span>
//           );
//         })}
//       </motion.h1>

//       {/* Subtext: appears after main is done, with bounce/jump */}
//       <AnimatePresence>
//         {mainDone && (
//           <motion.h2
//             key="sub"
//             initial={{ opacity: 0, y: 18, scale: 0.95 }}
//             animate={{ opacity: 1, y: [18, -6, 0], scale: [0.95, 1.04, 1], transition: { times: [0, 0.45, 1], duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: subDelay / 1000 } }}
//             exit={{ opacity: 0 }}
//             className={`${poppins.className} text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-amber-300`}
//             aria-live="polite"
//           >
//             {subText}
//           </motion.h2>
//         )}
//       </AnimatePresence>

//       {/* subtle underline / pulse after subtext appears */}
//       <AnimatePresence>
//         {mainDone && (
//           <motion.div
//             key="glow"
//             initial={{ opacity: 0, scaleX: 0.6 }}
//             animate={{ opacity: 1, scaleX: 1.02, transition: { duration: 0.6, ease } }}
//             exit={{ opacity: 0 }}
//             className="h-1 w-48 rounded bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 mt-1"
//           />
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// /* === WordReveal (WORD-BY-WORD) - used for 'More information about Veer Bharat' heading === */
// function WordReveal({ text = "More information about Veer Bharat", wordDelay = 400, className = "" }) {
//   const words = text.split(" ");
//   const [visibleWords, setVisibleWords] = useState(0);

//   useEffect(() => {
//     setVisibleWords(0);
//     const t = setInterval(() => {
//       setVisibleWords((c) => {
//         if (c >= words.length) {
//           clearInterval(t);
//           return words.length;
//         }
//         return c + 1;
//       });
//     }, wordDelay);
//     return () => clearInterval(t);
//   }, [text, wordDelay]);

//   return (
//     <h1 className={`${className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug`}>
//       {words.map((w, i) => (
//         <motion.span key={i} initial={{ opacity: 0, y: 6 }} animate={i < visibleWords ? { opacity: 1, y: 0 } : { opacity: 0 }} transition={{ duration: 0.28, ease: ease }} className="inline-block mx-1">
//           {w}
//         </motion.span>
//       ))}
//     </h1>
//   );
// }

// /* === Big Video Banner unchanged below (kept same as earlier) === */
// function VideoBanner({ src = "/hero-video.mp4", poster = "/banner1.jpg" }) {
//   const [playing, setPlaying] = useState(true);
//   const vidRef = useRef(null);

//   useEffect(() => {
//     const v = vidRef.current;
//     if (v) {
//       v.muted = true;
//       const p = v.play();
//       if (p && p.catch) {
//         // ignore autoplay rejection
//       } else {
//         setPlaying(!v.paused);
//       }
//     }
//   }, []);

//   const toggle = () => {
//     const v = vidRef.current;
//     if (!v) return;
//     if (v.paused) {
//       v.play();
//       setPlaying(true);
//     } else {
//       v.pause();
//       setPlaying(false);
//     }
//   };

//   return (
//     <motion.section initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative w-full overflow-hidden">
//       <div className="px-0 py-[2px]"> {/* 2px clear top & bottom */}
//         <div className="relative h-[66vh] md:h-[74vh] lg:h-[82vh] rounded-none overflow-hidden">
//           <video ref={vidRef} src={src} poster={poster} autoPlay muted loop playsInline className="w-full h-full object-cover block" style={{ display: "block" }} />

//           <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10 pointer-events-none" />

//           <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.01, y: -6 }} transition={{ duration: 0.45 }} className="absolute left-1/2 -translate-x-1/2 bottom-8 md:bottom-12 w-[94%] max-w-4xl">
//             <div className="relative group">
//               <div className="backdrop-blur-xl bg-white/6 border border-white/10 rounded-3xl p-5 md:p-6 shadow-2xl">
//                 <div className="absolute -top-1 -left-1 right-1 h-1 rounded-t-2xl bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 opacity-95 pointer-events-none" />
//                 <div className="flex items-start gap-4">
//                   <div className="flex-shrink-0">
//                     <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-amber-400 via-orange-400 to-rose-400 flex items-center justify-center text-white font-extrabold shadow-lg">VB</div>
//                   </div>

//                   <div className="flex-1">
//                     <h3 className="text-white text-lg md:text-2xl font-extrabold tracking-tight">Veer Bharat — Live At Events</h3>
//                     <p className="mt-1 text-sm md:text-base text-white/90">Taste the purity — our Delhi team presents soyabean oil demos and live tastings.</p>

//                     <div className="mt-3 flex flex-wrap gap-2">
//                       <span className="rounded-full bg-white/8 px-3 py-1 text-xs font-medium text-white/90 border border-white/10">Premium Purity</span>
//                       <span className="rounded-full bg-white/8 px-3 py-1 text-xs font-medium text-white/90 border border-white/10">Trusted Quality</span>
//                       <span className="rounded-full bg-white/8 px-3 py-1 text-xs font-medium text-white/90 border border-white/10">Pan-India</span>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-3">
//                     <button onClick={toggle} aria-label={playing ? "Pause video" : "Play video"} className="px-4 py-2 rounded-full bg-amber-400 text-black font-semibold hover:scale-105 transition shadow">{playing ? "Pause" : "Play"}</button>

//                     <Link href="/products" className="hidden md:inline-block px-4 py-2 rounded-full border border-white/10 text-white font-semibold hover:bg-white/5 transition">View Products</Link>
//                   </div>
//                 </div>
//               </div>

//               <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: "0 30px 80px -20px rgba(255,171,0,0.18), 0 18px 50px -24px rgba(255,200,30,0.12)" }} />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </motion.section>
//   );
// }


// src/app/page.js




// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import React, { useEffect, useState, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Poppins, Playfair_Display } from "next/font/google";
// import { products as allProducts } from "../data/products";
// import { FaWhatsapp } from "react-icons/fa";

// // Fonts
// const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "800"] });
// const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "800"] });

// // easing
// const ease = [0.22, 1, 0.36, 1];

// export default function Home() {
//   // Hero banner slides (ensure these files exist in public/images/)
//   const slides = [
//     { img: "/images/slide1.jpg", title: "Live Demo — Soyabean" },
//     { img: "/images/slide2.jpg", title: "Taste Test — Mustard" },
//     { img: "/images/slide3.jpg", title: "Rice Bran — Healthy Frying" }, // optional
//   ];

//   // Products fallback (if ../data/products is empty)
//   const products = allProducts && allProducts.length
//     ? allProducts
//     : [
//         {
//           slug: "kachi-ghani-mustard-oil",
//           name: "Kachi Ghani Mustard Oil",
//           short: "Strong aroma, bold taste",
//           image: "/images/prod-mustard.jpg",
//           brief: "Traditional cold-pressed mustard oil — strong aroma and time-honored flavour.",
//         },
//         {
//           slug: "soyabean-oil",
//           name: "Soyabean Oil",
//           short: "Light & everyday healthy",
//           image: "/images/prod-soyabean.jpg",
//           brief: "Light in texture, enriched with Vitamin E — perfect for daily cooking.",
//         },
//         {
//           slug: "rice-bran-oil",
//           name: "Rice Bran Oil",
//           short: "Heart-friendly, neutral taste",
//           image: "/images/prod-ricebran.jpg",
//           brief: "Balanced frying oil with heart-friendly properties.",
//         },
//       ];

//   const [currentSlide, setCurrentSlide] = useState(0);
//   useEffect(() => {
//     const t = setInterval(() => setCurrentSlide((p) => (p + 1) % slides.length), 5000);
//     return () => clearInterval(t);
//   }, [slides.length]);

//   // product detail panel state
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const prodRef = useRef(null);

//   function openProduct(p) {
//     setSelectedProduct(p);
//     setTimeout(() => {
//       if (prodRef.current) prodRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
//     }, 150);
//   }

//   return (
//     <main className={`${poppins.className} bg-white text-[#0b0d11]`}>
//       {/* TOP VIDEO CAROUSEL */}
//       <VideoCarousel videos={["/hero-video.mp4"]} />

//       {/* FULL SCREEN SHOWCASE (background image + right-side blog text) */}
//       <FullScreenShowcase onExplore={(p) => openProduct(p)} />

//       {/* HERO BANNERS (dark section) */}
//       <section className="relative h-[80vh] w-full overflow-hidden bg-black text-white">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentSlide}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1.0, ease }}
//             className="absolute inset-0"
//           >
//             <Image src={slides[currentSlide].img} alt={slides[currentSlide].title} fill priority className="object-cover" unoptimized />
//           </motion.div>
//         </AnimatePresence>

//         <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/80" />
//         <div className="absolute inset-0 flex items-center">
//           <div className="mx-auto w-full max-w-6xl px-6 text-center lg:text-left">
//             <motion.h1 initial={{ x: -80, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.75, ease }} className="mt-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-400 to-emerald-400">VEER BHARAT OILS</span>
//             </motion.h1>

//             <motion.h2 initial={{ x: 80, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.75, ease, delay: 0.1 }} className={`${playfair.className} mt-2 text-3xl md:text-5xl font-extrabold text-white`}>
//               वाह! मज़ा आ गया
//             </motion.h2>

//             <motion.div initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.55, ease, delay: 0.35 }} className="mt-8 flex flex-wrap items-center gap-4 justify-center lg:justify-start">
//               <Link href="/products" className="rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-green-600 px-6 py-3 font-extrabold shadow-lg hover:shadow-amber-500/20 transition">Explore Products</Link>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* PRODUCTS GRID */}
//       <section className="relative py-16 bg-[#0f1115] text-white">
//         <div className="mx-auto max-w-6xl px-6">
//           <div className="flex items-center justify-between gap-6 mb-8">
//             <div>
//               <motion.h2 initial={{ y: 6, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-extrabold tracking-tight">Our Signature Collection</motion.h2>
//               <motion.p initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="mt-2 text-gray-300">Click Explore to open a rich detail panel for each product.</motion.p>
//             </div>
//           </div>

//           <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {products.map((p, i) => (
//               <motion.div key={p.slug} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 * i }} className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-lg">
//                 <div className="relative h-56">
//                   <Image src={p.image || "/images/prod-placeholder.jpg"} alt={p.name} fill className="object-cover" unoptimized />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">{p.name}</h3>
//                   <p className="mt-2 text-sm text-white/80">{p.short}</p>
//                   <div className="mt-4 flex items-center justify-between">
//                     <button onClick={() => openProduct(p)} className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-black bg-amber-400 hover:scale-105 transition shadow">Explore <span>→</span></button>
//                     <Link href={`/products/${p.slug}`} className="text-sm font-semibold underline text-white/90 hidden sm:inline">View page</Link>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Product detail panel */}
//       <section ref={prodRef} className="mx-auto max-w-6xl px-6 pb-20">
//         <AnimatePresence>
//           {selectedProduct && (
//             <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.36 }} className="rounded-2xl border border-white/10 bg-white/6 p-6 shadow-2xl">
//               <div className="flex flex-col md:flex-row gap-6">
//                 <div className="relative w-full md:w-1/3 h-56 md:h-72 rounded-lg overflow-hidden border border-white/8">
//                   <Image src={selectedProduct.image || "/images/prod-placeholder.jpg"} alt={selectedProduct.name} fill className="object-cover" unoptimized />
//                 </div>
//                 <div className="flex-1">
//                   <div className="flex items-start justify-between">
//                     <div>
//                       <h3 className="text-2xl md:text-3xl font-extrabold">{selectedProduct.name}</h3>
//                       <p className="mt-1 text-white/80">{selectedProduct.short}</p>
//                     </div>
//                     <div>
//                       <button onClick={() => setSelectedProduct(null)} className="px-3 py-1 rounded-full border border-white/10 text-sm">Close</button>
//                     </div>
//                   </div>

//                   <div className="mt-4 text-white/85">
//                     <p><strong>Brief:</strong> {selectedProduct.brief ?? "Premium quality oil made with care and tested for purity."}</p>
//                     <ul className="mt-3 list-disc ml-5 text-white/80">
//                       <li>Purity guaranteed</li>
//                       <li>Suitable for cooking & frying</li>
//                       <li>ISO tested & packed</li>
//                     </ul>
//                   </div>

//                   <div className="mt-6 flex items-center gap-4">
//                     <Link href={`/products/${selectedProduct.slug}`} className="rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-green-600 px-5 py-2 font-extrabold shadow-lg">Go to product page</Link>
//                     <button className="px-4 py-2 rounded-full border border-white/10">Add to cart</button>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </section>

//       {/* Fixed WhatsApp Button */}
//       <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="fixed right-5 bottom-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-lg text-white hover:scale-105 transition">
//         <FaWhatsapp className="w-6 h-6" />
//       </a>
//     </main>
//   );
// }

// /* ===== FullScreen Showcase (Background image + Right blog text) ===== */
// function FullScreenShowcase({ onExplore }) {
//   const showcaseSlides = [
//     {
//       id: "s1",
//       img: "/images/slide2.jpg",
//       title: "Soyabean Oil — हल्का, सेहतमंद और रोज़मर्रा के लिए परफ़ेक्ट",
//       subtitle: "हल्का टेक्सचर • Vitamin E • हर फ्राइंग में क्रिस्पी रिजल्ट",
//       // ~300 words combined in multiple paragraphs
//       desc:
//         "सोयाबीन ऑयल एक बहुमुखी और सेहतमंद विकल्प है जो रोज़ाना की रसोई के लिए खास तौर पर उपयुक्त है। इसमें प्रचुर मात्रा में विटामिन ई और पॉलीअनसैचुरेटेड फैटी एसिड होते हैं जो हृदय-स्वास्थ्य के लिए मददगार माने जाते हैं। यह तेल हल्का टेक्सचर देता है और खाने का असली स्वाद बरकरार रखता है, इसीलिए तले हुए व्यंजनों में क्रिस्पीपन और हल्का आकर बनाए रखता है।\n\nहमारी पैकिंग और प्रोसेसिंग में उच्च मानक अपनाए जाते हैं — ताकि हर बोतल में वही शुद्धता और क्वालिटी पहुँचे जिसकी आपकी रसोई को ज़रूरत है। छोटे परिवारों से लेकर बड़े आयोजनों तक, हमारा मकसद है कि हर भोजन स्वाद और पोषण में संतुलित रहे।\n\nVeer Bharat का वादा है पारंपरिक विधियों और आधुनिक गुणवत्ता नियंत्रण का संगम — ताकि आप हर बार भरोसे के साथ खाना बना सकें। आज ही अपने किचन में एक सुरक्षित और स्वादिष्ट परिवर्तन लाएं।",
//       product: { slug: "soyabean-oil", name: "Soyabean Oil", image: "/images/prod-soyabean.jpg" },
//     },
//     {
//       id: "s2",
//       img: "/images/slide1.jpg",
//       title: "Kachi Ghani Mustard Oil — परम्परा और स्वाद",
//       subtitle: "कच्ची घानी • तीखा अरोमा • पारंपरिक स्वाद",
//       desc:
//         "कची घानी सरसों के तेल का अपना एक इतिहास और स्वाद है। यह पारंपरिक तरीके से निकाला जाता है जिससे तेल में प्राकृतिक स्वाद, सुगंध और पोषक तत्व बने रहते हैं। कची घानी मस्टर्ड तेल भारतीय पकवानों को एक अनोखा तीखापन और सुगंध देता है जो व्यंजनों को एकदम नई परत प्रदान करता है।\n\nहमारी प्रोसेसिंग में शुद्धता और स्वच्छता का विशेष ध्यान रखा जाता है, ताकि प्रत्येक बोतल में वही सच्ची परंपरा पहुँचे जिसे परिवार पीढ़ियों से पसंद करते आए हैं। चोटे से चोटे मात्रा में भी इसका स्वाद और असर स्पष्ट दिखेगा।\n\nअगर आप परंपरागत स्वाद और स्वास्थ्य दोनों चाहतें, तो Kachi Ghani Mustard Oil आपके किचन का एक अनिवार्य हिस्सा बन सकता है।",
//       product: { slug: "kachi-ghani-mustard-oil", name: "Kachi Ghani Mustard Oil", image: "/images/prod-mustard.jpg" },
//     },
//   ];

//   const [idx, setIdx] = useState(0);

//   function next() {
//     setIdx((i) => (i + 1) % showcaseSlides.length);
//   }
//   function prev() {
//     setIdx((i) => (i - 1 + showcaseSlides.length) % showcaseSlides.length);
//   }

//   const slide = showcaseSlides[idx];

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "ArrowRight") next();
//       if (e.key === "ArrowLeft") prev();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   return (
//     <section className="w-full min-h-screen bg-white text-[#0b0d11] relative overflow-hidden">
//       {/* background image as full-bleed */}
//       <div className="absolute inset-0 -z-10">
//         <Image src={slide.img} alt={slide.title} fill className="object-cover object-center" priority unoptimized />
//         <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-white/80" />
//       </div>

//       {/* content */}
//       <div className="relative z-10 container mx-auto max-w-7xl px-6 py-20 md:py-28 min-h-screen flex items-center">
//         <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//           {/* left intentionally left visually open (image background). We'll show a semi-transparent overlay box for text on right */}
//           <div className="hidden md:block" />

//           <div className="max-w-xl bg-white/92 backdrop-blur-md border border-gray-100 rounded-2xl p-8 shadow-2xl">
//             <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">{slide.title}</h2>
//             <p className="mt-2 text-sm md:text-base text-gray-700 font-semibold">{slide.subtitle}</p>
//             <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed" style={{ whiteSpace: "pre-line" }}>{slide.desc}</p>

//             <div className="mt-6 flex items-center gap-3">
//               <button onClick={() => onExplore && onExplore(slide.product)} className="rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-emerald-400 px-5 py-2.5 font-bold shadow-md hover:scale-105 transition">Explore Product</button>
//               <a href={`/products/${slide.product?.slug || "#"}`} className="text-sm underline text-gray-700">View product page →</a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* arrows left/right */}
//       <button onClick={prev} aria-label="Previous" className="absolute left-6 top-1/2 -translate-y-1/2 z-30 rounded-full bg-white shadow-xl w-12 h-12 flex items-center justify-center hover:scale-105 transition">‹</button>
//       <button onClick={next} aria-label="Next" className="absolute right-6 top-1/2 -translate-y-1/2 z-30 rounded-full bg-white shadow-xl w-12 h-12 flex items-center justify-center hover:scale-105 transition">›</button>

//       {/* small dots */}
//       <div className="absolute left-1/2 -translate-x-1/2 bottom-8 flex gap-3 z-30">
//         {showcaseSlides.map((s, i) => (
//           <button key={s.id} onClick={() => setIdx(i)} className={`w-3 h-3 rounded-full ${i === idx ? "bg-[#0b0d11]" : "bg-white/50"} border border-white/10`} />
//         ))}
//       </div>
//     </section>
//   );
// }

// /* ===== VideoCarousel ===== */
// function VideoCarousel({ videos = [] }) {
//   const [isPlaying, setIsPlaying] = useState(true);
//   const vidRef = useRef(null);

//   useEffect(() => {
//     const v = vidRef.current;
//     if (!v) return;
//     v.muted = true;
//     v.playsInline = true;
//     v.preload = "metadata";
//     const p = v.play();
//     if (p && p.catch) p.catch(() => setIsPlaying(false));
//     else setIsPlaying(!v.paused);
//   }, [videos]);

//   const togglePlay = () => {
//     const v = vidRef.current;
//     if (!v) return;
//     if (v.paused) {
//       v.play().catch(() => setIsPlaying(false));
//       setIsPlaying(true);
//     } else {
//       v.pause();
//       setIsPlaying(false);
//     }
//   };

//   return (
//     <section className="relative w-full overflow-hidden bg-black border-b border-white/6">
//       <div className="relative h-[64vh] md:h-[74vh] lg:h-[82vh]">
//         <video ref={vidRef} className="w-full h-full object-cover" src={videos[0]} autoPlay muted loop={false} playsInline preload="metadata" poster="/images/slide1.jpg" />

//         <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30 pointer-events-none" />

//         <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-4">
//           <AnimatedHero mainText="Welcome to Veer Bharat" subText="मज़ा आ गया" letterDelay={90} subDelay={200} />
//         </div>

//         <button onClick={togglePlay} aria-label={isPlaying ? "Pause video" : "Play video"} className="absolute right-6 top-6 z-30 flex items-center gap-2 rounded-full bg-white/6 backdrop-blur px-4 py-2 text-sm font-semibold border border-white/10 hover:scale-105 transition">
//           {isPlaying ? "Pause" : "Play"}
//         </button>
//       </div>
//     </section>
//   );
// }

// /* ===== AnimatedHero ===== */
// function AnimatedHero({ mainText = "Welcome to Veer Bharat", subText = "मज़ा आ गया", letterDelay = 120, subDelay = 200 }) {
//   const letters = Array.from(mainText);
//   const [visibleCount, setVisibleCount] = useState(0);
//   const [mainDone, setMainDone] = useState(false);

//   useEffect(() => {
//     setVisibleCount(0);
//     setMainDone(false);
//     const t = setInterval(() => {
//       setVisibleCount((c) => {
//         if (c >= letters.length) {
//           clearInterval(t);
//           setTimeout(() => setMainDone(true), 80);
//           return letters.length;
//         }
//         return c + 1;
//       });
//     }, letterDelay);
//     return () => clearInterval(t);
//   }, [mainText, letterDelay, letters.length]);

//   return (
//     <div className="flex flex-col items-center gap-4 pointer-events-none">
//       <motion.h1 aria-hidden className={`${playfair.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight text-white text-center`} style={{ lineHeight: 1 }}>
//         {letters.map((ch, i) => {
//           const isSpace = ch === " ";
//           return (
//             <motion.span key={i} initial={{ opacity: 0, y: 12, scale: 0.98 }} animate={i < visibleCount ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0 }} transition={{ duration: 0.22, ease: ease, delay: 0 }} className="inline-block" style={{ marginRight: isSpace ? 6 : 0 }}>
//               {isSpace ? "\u00A0" : ch}
//             </motion.span>
//           );
//         })}
//       </motion.h1>

//       <AnimatePresence>
//         {mainDone && (
//           <motion.h2 key="sub" initial={{ opacity: 0, y: 18, scale: 0.95 }} animate={{ opacity: 1, y: [18, -6, 0], scale: [0.95, 1.04, 1], transition: { times: [0, 0.45, 1], duration: 0.8, ease: ease, delay: subDelay / 1000 } }} exit={{ opacity: 0 }} className={`${poppins.className} text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-amber-300`} aria-live="polite">
//             {subText}
//           </motion.h2>
//         )}
//       </AnimatePresence>

//       <AnimatePresence>
//         {mainDone && (
//           <motion.div key="glow" initial={{ opacity: 0, scaleX: 0.6 }} animate={{ opacity: 1, scaleX: 1.02, transition: { duration: 0.6, ease: ease } }} exit={{ opacity: 0 }} className="h-1 w-48 rounded bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 mt-1" />
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }



// ===== PASTE START - Replace entire src/app/page.js with everything between these markers =====




// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import React, { useEffect, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Poppins, Playfair_Display } from "next/font/google";
// import { FaWhatsapp, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// /* ---------- Fonts & easing ---------- */
// const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "800"] });
// const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "800"] });
// const ease = [0.22, 1, 0.36, 1];

// /* ========== MAIN PAGE ========== */
// export default function Home() {
//   return (
//     <main className={`${poppins.className} bg-white text-[#0b0d11]`}>
//       {/* Video hero (kept) */}
//       <VideoHero videos={["/images/hero-video.mp4"]} />

//       {/* Heading for Category */}
//       <div className="py-12 md:py-16 text-center">
//         <motion.h1
//           initial={{ y: 30, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8, ease }}
//           viewport={{ once: true }}
//           className={`${playfair.className} text-3xl md:text-5xl font-extrabold tracking-tight`}
//         >
//           Veer Bharat Oil — Category
//         </motion.h1>

//         <motion.div
//           initial={{ scaleX: 0 }}
//           whileInView={{ scaleX: 1 }}
//           transition={{ duration: 0.7, ease }}
//           viewport={{ once: true }}
//           className="mt-4 w-32 md:w-40 mx-auto h-1 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-green-600"
//         />
//       </div>

//       {/* Category carousel (Image Left + Text Right) */}
//       <CategoryCarousel />

//       {/* Moving/Showcase section (auto slides with big background image + text panel) */}
//       <MovingShowcase />

//       {/* Signature collection (big central card + left/right previews + nav) */}
//       <SignatureCollection />

//       {/* Branches / Gallery */}
//       <Branches />

//       {/* Fixed WhatsApp button */}
//       <a
//         href="https://wa.me/YOUR_WHATSAPP_NUMBER"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed right-5 bottom-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-lg text-white hover:scale-105 transition"
//         aria-label="WhatsApp"
//       >
//         <FaWhatsapp className="w-6 h-6" />
//       </a>
//     </main>
//   );
// }

// /* ========== CategoryCarousel ========== */
// function CategoryCarousel() {
//   const items = [
//     {
//       id: "kachi",
//       title: "Kachi Ghani Mustard Oil",
//       img: "/images/banner2.jpg",
//       desc:
//         `कची घानी सरसों का तेल — परंपरा और तीखापन दोनों में संतुलन। हमारी cold-press विधि से निकला यह तेल अपनी सुगंध और स्वाद के लिये मशहूर है। पारंपरिक तरीकों को आधुनिक क्वालिटी स्टैंडर्ड्स के साथ मिलाकर हम सुनिश्चित करते हैं कि हर बोतल में वही सच्ची शुद्धता पहुँचे।\n\nइसका उपयोग तमाम भारतीय व्यंजनों में किया जा सकता है — तड़का, अचार, परांठे और भारी करी। अगर आप असली स्वाद और परंपरा चाहते हैं तो यह तेल आपकी रसोई की शान बनेगा।`,
//     },
//     {
//       id: "soya",
//       title: "Soyabean Oil — Light & Healthy",
//       img: "/images/slide2.jpg",
//       desc:
//         `Soyabean oil हल्का, पौष्टिक और रोज़ाना के लिए उपयुक्त। इसमें Vitamin E और अनसैचुरेटेड फैटी एसिड्स होते हैं जो स्वास्थ्य के लिए लाभकारी माने जाते हैं। फ्राइ करने पर यह खाने के स्वाद को बरकरार रखता है और भारी फ्लेवर नहीं देता।\n\nVeer Bharat Soyabean को विशेष टेस्टिंग के बाद पैक किया जाता है ताकि हर बोतल में गुणवत्ता बनी रहे।`,
//     },
//     {
//       id: "rice",
//       title: "Rice Bran Oil — Heart Friendly",
//       img: "/images/slide1.jpg",
//       desc:
//         `Rice bran oil उच्च स्मोक पॉइंट और हृदय-हितकर प्रोफाइल के साथ आता है। यह frying और high-heat cooking के लिए बेस्ट है और neutral taste देता है। इसमें मौजूद natural antioxidants खाना हेल्दी बनाते हैं।\n\nहमारी पैकिंग और सप्लाई चेन सुनिश्चित करती है कि ताजगी और गुण बनाए रहें।`,
//     },
//   ];

//   const [index, setIndex] = useState(0);
//   const len = items.length;
//   const autoplayRef = useRef(null);

//   useEffect(() => {
//     // autoplay every 6s
//     autoplayRef.current = setInterval(() => {
//       setIndex((i) => (i + 1) % len);
//     }, 6000);
//     return () => clearInterval(autoplayRef.current);
//   }, [len]);

//   function prev() {
//     clearInterval(autoplayRef.current);
//     setIndex((i) => (i - 1 + len) % len);
//   }
//   function next() {
//     clearInterval(autoplayRef.current);
//     setIndex((i) => (i + 1) % len);
//   }

//   return (
//     <section className="py-12">
//       <div className="container mx-auto max-w-7xl px-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           {/* Left: image with motion */}
//           <div className="relative">
//             <div className="relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden shadow-2xl">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={items[index].id}
//                   initial={{ opacity: 0, x: 60 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -60 }}
//                   transition={{ duration: 0.8, ease }}
//                   className="absolute inset-0"
//                 >
//                   <Image src={items[index].img} alt={items[index].title} fill className="object-cover" unoptimized />
//                 </motion.div>
//               </AnimatePresence>
//             </div>

//             {/* arrows overlay */}
//             <button onClick={prev} aria-label="Prev" className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/95 shadow-lg flex items-center justify-center hover:scale-105 transition">
//               <FaChevronLeft className="text-[#0b0d11] w-4 h-4" />
//             </button>
//             <button onClick={next} aria-label="Next" className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/95 shadow-lg flex items-center justify-center hover:scale-105 transition">
//               <FaChevronRight className="text-[#0b0d11] w-4 h-4" />
//             </button>
//           </div>

//           {/* Right: visible blog text */}
//           <div>
//             <motion.h3 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className={`${playfair.className} text-2xl md:text-4xl font-extrabold mb-4`}>
//               {items[index].title}
//             </motion.h3>

//             <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.12 }} className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
//               {items[index].desc}
//             </motion.p>

//             <div className="mt-6 flex flex-wrap gap-4">
//               <Link href="/products" className="inline-block rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-green-600 px-6 py-3 font-bold shadow text-white hover:scale-105 transition">
//                 Explore Products
//               </Link>
//               <button onClick={() => alert(items[index].title + " — Quick View (implement modal if needed)")} className="px-4 py-2 rounded-full border border-gray-300 hover:shadow transition">
//                 Quick View →
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* dots */}
//         <div className="mt-8 flex items-center justify-center gap-3">
//           {items.map((it, i) => (
//             <button key={it.id} onClick={() => setIndex(i)} className={`w-3 h-3 rounded-full ${i === index ? "bg-[#0b0d11]" : "bg-gray-300"} transition`} aria-label={`Go to ${i + 1}`} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ========== MovingShowcase (Full screen-ish) ========== */
// function MovingShowcase() {
//   const slides = [
//     {
//       id: "s-soya",
//       img: "/images/slide2.jpg",
//       title: "Soyabean Oil — हल्का, स्वास्थ्यवर्धक",
//       subtitle: "Vitamin E • Light Texture • Daily Cooking",
//       cta: { text: "Explore Soyabean", href: "/products/soyabean-oil" },
//     },
//     {
//       id: "s-mustard",
//       img: "/images/slide1.jpg",
//       title: "Kachi Ghani Mustard Oil — परंपरा का स्वाद",
//       subtitle: "Cold Pressed • Strong Aroma • Authentic Taste",
//       cta: { text: "Explore Mustard", href: "/products/kachi-ghani-mustard-oil" },
//     },
//     {
//       id: "s-banner3",
//       img: "/images/banner3.jpg",
//       title: "Healthy Frying — Rice Bran Oil",
//       subtitle: "High Smoke Point • Neutral Taste • Heart Friendly",
//       cta: { text: "Explore Rice Bran", href: "/products/rice-bran-oil" },
//     },
//   ];

//   const [idx, setIdx] = useState(0);
//   const len = slides.length;
//   const autoplayRef = useRef(null);

//   useEffect(() => {
//     autoplayRef.current = setInterval(() => setIdx((i) => (i + 1) % len), 7000);
//     return () => clearInterval(autoplayRef.current);
//   }, [len]);

//   function prev() {
//     clearInterval(autoplayRef.current);
//     setIdx((i) => (i - 1 + len) % len);
//   }
//   function next() {
//     clearInterval(autoplayRef.current);
//     setIdx((i) => (i + 1) % len);
//   }

//   const slide = slides[idx];

//   return (
//     <section className="relative w-full min-h-[62vh] md:min-h-[72vh] overflow-hidden">
//       {/* background */}
//       <div className="absolute inset-0 -z-10">
//         <AnimatePresence mode="wait">
//           <motion.div key={slide.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.9 }}>
//             <Image src={slide.img} alt={slide.title} fill className="object-cover object-center" priority unoptimized />
//             <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-white/60" />
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       <div className="relative z-10 container mx-auto max-w-7xl px-6 py-24 md:py-32">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           <div className="hidden md:block" />

//           <motion.div initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="bg-white/95 backdrop-blur rounded-2xl p-8 md:max-w-xl shadow-2xl border border-gray-100">
//             <motion.h2 className={`${playfair.className} text-2xl md:text-3xl font-extrabold`} initial={{ x: -8, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
//               {slide.title}
//             </motion.h2>
//             <motion.p className="mt-2 text-sm md:text-base text-gray-700 font-semibold" initial={{ x: -6, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
//               {slide.subtitle}
//             </motion.p>

//             <motion.p className="mt-4 text-sm text-gray-600 leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
//               {/* short friendly blurb (kept short so page doesn't overflow) */}
//               Veer Bharat की excellence और modern quality control के साथ आपके किचन तक शुद्ध और भरोसेमंद तेल पहुँचाने का वादा।
//             </motion.p>

//             <div className="mt-6 flex items-center gap-3">
//               <Link href={slide.cta.href} className="rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-emerald-400 px-5 py-2.5 font-bold shadow-md hover:scale-105 transition">
//                 {slide.cta.text}
//               </Link>

//               <button onClick={prev} className="px-4 py-2 rounded-full border border-gray-200">‹ Prev</button>
//               <button onClick={next} className="px-4 py-2 rounded-full border border-gray-200">Next ›</button>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* arrows visible always */}
//       <button onClick={prev} aria-label="Prev slide" className="absolute left-6 top-1/2 -translate-y-1/2 z-30 rounded-full bg-white shadow-xl w-12 h-12 flex items-center justify-center hover:scale-105 transition">‹</button>
//       <button onClick={next} aria-label="Next slide" className="absolute right-6 top-1/2 -translate-y-1/2 z-30 rounded-full bg-white shadow-xl w-12 h-12 flex items-center justify-center hover:scale-105 transition">›</button>
//     </section>
//   );
// }

// /* ========== SignatureCollection (Large card focus) ========== */
// function SignatureCollection() {
//   const list = [
//     { id: "p1", slug: "kachi-ghani-mustard-oil", name: "Kachi Ghani Mustard Oil", img: "/images/prod-mustard.jpg", desc: "Traditional cold-pressed mustard oil with strong aroma & flavor." },
//     { id: "p2", slug: "soyabean-oil", name: "Soyabean Oil", img: "/images/prod-soyabean.jpg", desc: "Light texture, rich in Vitamin E — great for everyday cooking." },
//     { id: "p3", slug: "rice-bran-oil", name: "Rice Bran Oil", img: "/images/prod-ricebran.jpg", desc: "High smoke point and heart friendly — ideal for frying." },
//   ];

//   const [idx, setIdx] = useState(0);
//   const len = list.length;
//   const autoplay = useRef(null);

//   useEffect(() => {
//     autoplay.current = setInterval(() => setIdx((i) => (i + 1) % len), 7000);
//     return () => clearInterval(autoplay.current);
//   }, [len]);

//   function prev() {
//     clearInterval(autoplay.current);
//     setIdx((i) => (i - 1 + len) % len);
//   }
//   function next() {
//     clearInterval(autoplay.current);
//     setIdx((i) => (i + 1) % len);
//   }

//   const current = list[idx];

//   return (
//     <section className="py-20 bg-[#0f1115] text-white">
//       <div className="container mx-auto max-w-7xl px-6">
//         <motion.h2 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold mb-8 text-center">
//           Our Signature Collection
//         </motion.h2>

//         <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
//           {/* left preview */}
//           <div className="hidden md:block">
//             <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
//               <Image src={list[(idx - 1 + len) % len].img} alt="prev" fill className="object-cover" unoptimized />
//             </div>
//             <p className="mt-3 text-sm text-gray-300">{list[(idx - 1 + len) % len].name}</p>
//           </div>

//           {/* central big card */}
//           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="col-span-1 md:col-span-1 rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/5">
//             <div className="relative h-[420px] md:h-[520px]">
//               <Image src={current.img} alt={current.name} fill className="object-cover" unoptimized />
//             </div>
//             <div className="p-8">
//               <h3 className="text-2xl font-extrabold">{current.name}</h3>
//               <p className="mt-3 text-gray-200">{current.desc}</p>

//               <div className="mt-6 flex items-center gap-4">
//                 <button onClick={() => alert(`Open ${current.name}`)} className="rounded-full bg-amber-400 px-6 py-2 font-bold text-black hover:scale-105 transition">Explore</button>
//                 <Link href={`/products/${current.slug}`} className="rounded-full border border-white/20 px-4 py-2">View Page</Link>
//               </div>
//             </div>
//           </motion.div>

//           {/* right preview */}
//           <div className="hidden md:block">
//             <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
//               <Image src={list[(idx + 1) % len].img} alt="next" fill className="object-cover" unoptimized />
//             </div>
//             <p className="mt-3 text-sm text-gray-300">{list[(idx + 1) % len].name}</p>
//           </div>

//           {/* nav overlay */}
//           <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-30">
//             <button onClick={prev} aria-label="prev product" className="flex items-center justify-center w-12 h-12 rounded-full bg-white/95 shadow">
//               <FaChevronLeft className="text-[#0b0d11]" />
//             </button>
//             <div className="text-sm text-gray-200 px-4 py-2 rounded-full bg-white/10">{idx + 1} / {len}</div>
//             <button onClick={next} aria-label="next product" className="flex items-center justify-center w-12 h-12 rounded-full bg-white/95 shadow">
//               <FaChevronRight className="text-[#0b0d11]" />
//             </button>
//           </div>
//         </div>

//         <div style={{ height: 64 }} />
//       </div>
//     </section>
//   );
// }

// /* ========== Branches / Visual gallery ========== */
// function Branches() {
//   const imgs = [
//     "/images/banner4.jpg",
//     "/images/banner3.jpg",
//     "/images/team1.jpg", // replace with your team meeting images
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto max-w-7xl px-6">
//         <motion.h2 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold mb-10 text-center">
//           Our Branches & Gallery
//         </motion.h2>

//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {imgs.map((src, i) => (
//             <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }} className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
//               <Image src={src} alt={`Gallery ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-700" unoptimized />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ========== VideoHero (kept simple + safe) ========== */
// function VideoHero({ videos = [] }) {
//   const vidRef = useRef(null);
//   const [playing, setPlaying] = useState(true);

//   useEffect(() => {
//     const v = vidRef.current;
//     if (!v) return;
//     v.muted = true;
//     v.playsInline = true;
//     v.preload = "metadata";
//     v.play().catch(() => setPlaying(false));
//   }, [videos]);

//   function toggle() {
//     const v = vidRef.current;
//     if (!v) return;
//     if (v.paused) {
//       v.play().catch(() => setPlaying(false));
//       setPlaying(true);
//     } else {
//       v.pause();
//       setPlaying(false);
//     }
//   }

//   return (
//     <section className="relative w-full overflow-hidden bg-black border-b border-white/6">
//       <div className="relative h-[60vh] md:h-[72vh] lg:h-[82vh]">
//         <video ref={vidRef} src={videos[0]} className="w-full h-full object-cover" autoPlay muted loop playsInline preload="metadata" />

//         <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30 pointer-events-none" />

//         <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6 text-center">
//           <motion.h1 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className={`${playfair.className} text-3xl md:text-5xl lg:text-6xl font-extrabold text-white`}>
//             Welcome to Veer Bharat
//           </motion.h1>
//           <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.8 }} className={`${poppins.className} text-lg md:text-2xl font-bold text-amber-300 mt-3`}>
//             मज़ा आ गया
//           </motion.h2>
//         </div>

//         <button onClick={toggle} className="absolute right-6 top-6 z-30 flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-4 py-2 text-sm font-semibold border border-white/10 hover:scale-105 transition">
//           {playing ? "Pause" : "Play"}
//         </button>
//       </div>
//     </section>
//   );
// }


"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Poppins, Playfair_Display } from "next/font/google";
import { FaWhatsapp, FaChevronLeft, FaChevronRight } from "react-icons/fa";

/* ---------- Fonts & easing ---------- */
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "800"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "800"] });
const ease = [0.22, 1, 0.36, 1];

export default function Home() {
  return (
    <main className={`${poppins.className} bg-white text-[#0b0d11]`}>
      {/* Video hero */}
      <VideoHero videos={["/images/hero-video.mp4"]} />

      {/* Heading for Category */}
      <div className="py-12 md:py-16 text-center">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease }}
          viewport={{ once: true }}
          className={`${playfair.className} text-3xl md:text-5xl font-extrabold tracking-tight`}
        >
          Veer Bharat Oil — Category
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.7, ease }}
          viewport={{ once: true }}
          className="mt-4 w-32 md:w-40 mx-auto h-1 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-green-600"
        />
      </div>

      {/* Category carousel (Image Left + Text Right) */}
      <CategoryCarousel />

      {/* gap + heading */}
      <div className="h-6" />
      <div className="text-center mb-8">
        <h2 className={`${playfair.className} text-2xl md:text-3xl font-extrabold`}>Our Product</h2>
        <div className="mx-auto mt-3 w-20 h-1 rounded-full bg-amber-400" />
      </div>

      {/* Banner slider (page-level) */}
      <BannerSlider />

      {/* Modern full-screen style slider (your 'modern-slider' converted to React) */}
      <ModernSlider />

      {/* Moving/Showcase */}
      <MovingShowcase />

      {/* Signature collection */}
      <SignatureCollection />

      {/* Branches / Gallery */}
      <Branches />

      {/* Fixed WhatsApp button — update number */}
      <a
        href="https://wa.me/YOUR_WHATSAPP_NUMBER"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-5 bottom-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-lg text-white hover:scale-105 transition"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>

      {/* small local CSS for ModernSlider visuals */}
      <style jsx>{`
        /* Modern slider custom CSS (kept small, responsive) */
        .modern-wrap {
          position: relative;
          overflow: hidden;
        }
        .modern-slide {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
        }
        .modern-img {
          width: 100%;
          height: 100vh;
          object-fit: cover;
          filter: blur(4px);
          transform: scale(1.03);
        }
        .modern-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }
        .modern-info {
          max-width: 880px;
          text-align: center;
          color: white;
        }
        .modern-info h3 {
          font-size: 28px;
          line-height: 1.05;
          margin-bottom: 0.6rem;
          text-transform: uppercase;
        }
        .modern-info h5 {
          font-size: 16px;
          max-width: 680px;
          margin: 0 auto;
          opacity: 0.95;
        }
        .modern-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          background: rgba(0,0,0,0.45);
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          z-index: 40;
          cursor: pointer;
        }
        .modern-arrow.left { left: 10px; }
        .modern-arrow.right { right: 10px; }

        @media (max-width: 768px) {
          .modern-info h3 { font-size: 20px; }
          .modern-info h5 { font-size: 14px; }
        }
      `}</style>
    </main>
  );
}

/* ========== BannerSlider (page-level banner) ========== */
function BannerSlider() {
  const slides = [
    { id: "b1", img: "/images/banner2.jpg", title: "Slick slider animation with animate.css", cta: { text: "Start a Project", href: "#" }, color: "#ff4056" },
    { id: "b2", img: "/images/banner3.jpg", title: "Launch global digital brands", cta: { text: "Contact Now!!", href: "#" }, color: "#ffc5c5" },
    { id: "b3", img: "/images/banner4.jpg", title: "Digital transformation driven by technology", cta: null, color: "#3dffc1" },
    { id: "b4", img: "/images/team1.jpg", title: "Will Do Anything For html.", cta: null, color: "#000000" },
  ];

  const [index, setIndex] = useState(0);
  const len = slides.length;
  const autoplayRef = useRef(null);

  useEffect(() => {
    autoplayRef.current = setInterval(() => setIndex((i) => (i + 1) % len), 6000);
    return () => clearInterval(autoplayRef.current);
  }, [len]);

  function prev() {
    clearInterval(autoplayRef.current);
    setIndex((i) => (i - 1 + len) % len);
  }
  function next() {
    clearInterval(autoplayRef.current);
    setIndex((i) => (i + 1) % len);
  }

  return (
    <section className="relative overflow-hidden">
      {/* page-level arrows */}
      <button onClick={prev} aria-label="Prev banner" className="absolute left-4 top-1/2 z-40 -translate-y-1/2 rounded-full bg-white shadow-lg w-12 h-12 flex items-center justify-center hover:scale-105 transition">
        <FaChevronLeft />
      </button>
      <button onClick={next} aria-label="Next banner" className="absolute right-4 top-1/2 z-40 -translate-y-1/2 rounded-full bg-white shadow-lg w-12 h-12 flex items-center justify-center hover:scale-105 transition">
        <FaChevronRight />
      </button>

      <div className="relative h-[480px] md:h-[680px] w-full">
        <AnimatePresence mode="wait">
          <motion.div key={slides[index].id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="absolute inset-0">
            <Image src={slides[index].img} alt={slides[index].title} fill className="object-cover" unoptimized />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20" />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto max-w-6xl px-6">
                <div className="max-w-3xl text-white">
                  <motion.h2 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.18 }} style={{ color: slides[index].color }} className={`${playfair.className} text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight`}>
                    {slides[index].title}
                  </motion.h2>

                  {slides[index].cta && (
                    <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.35 }}>
                      <Link href={slides[index].cta.href} className="inline-block mt-6 rounded-full bg-amber-400 px-6 py-3 font-bold shadow text-black hover:scale-105 transition">
                        {slides[index].cta.text}
                      </Link>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>

            {/* bottom wave */}
            <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
              <svg viewBox="0 0 1440 120" width="100%" height="100%" preserveAspectRatio="none">
                <path d="M0,40 C180,120 360,0 540,40 C720,80 900,10 1080,40 C1260,70 1440,30 1440,30 L1440,120 L0,120 Z" fill="#ffffff" />
              </svg>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* dots */}
      <div className="flex items-center justify-center gap-3 py-6">
        {slides.map((s, i) => (
          <button key={s.id} onClick={() => setIndex(i)} className={`w-3 h-3 rounded-full ${i === index ? "bg-[#0b0d11]" : "bg-gray-300"}`} aria-label={`Go to ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}

/* ========== ModernSlider (converted from your HTML/CSS/JS) ========== */
function ModernSlider() {
  const slides = [
    { id: "m1", img: "/images/slide1.jpg", title: "Full Width Slider With Layers", subtitle: "You can easily add image, html formatted texts and video layers over each slide and each layer accepts unique animation." },
    { id: "m2", img: "/images/slide2.jpg", title: "Fully responsive Scales with its container", subtitle: "Donec id ornare dui. Aenean tristique condimentum elit, quis blandit nisl varius sit amet." },
    { id: "m3", img: "/images/slide3.jpg", title: "Awesome Transtions With CSS3", subtitle: "Donec id ornare dui. Aenean tristique condimentum elit, quis blandit nisl varius sit amet." },
    { id: "m4", img: "/images/banner3.jpg", title: "Separate settings per breakpoint", subtitle: "Donec id ornare dui. Aenean tristique condimentum elit, quis blandit nisl varius sit amet." },
  ];

  const [index, setIndex] = useState(0);
  const len = slides.length;
  const autoplay = useRef(null);

  useEffect(() => {
    autoplay.current = setInterval(() => setIndex((i) => (i + 1) % len), 8000);
    return () => clearInterval(autoplay.current);
  }, [len]);

  function prev() {
    clearInterval(autoplay.current);
    setIndex((i) => (i - 1 + len) % len);
  }
  function next() {
    clearInterval(autoplay.current);
    setIndex((i) => (i + 1) % len);
  }

  return (
    <section className="modern-wrap relative mb-12">
      {/* arrows positioned left/right of page */}
      <div className="modern-arrow left" onClick={prev}><FaChevronLeft /></div>
      <div className="modern-arrow right" onClick={next}><FaChevronRight /></div>

      <div className="relative h-[80vh] md:h-[100vh]">
        <AnimatePresence mode="wait">
          <motion.div key={slides[index].id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.9 }} className="modern-slide">
            <Image src={slides[index].img} alt={slides[index].title} className="modern-img" fill unoptimized />
            <div className="modern-overlay">
              <div className="modern-info">
                <motion.h3 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.12 }} className={`${playfair.className}`}>{slides[index].title}</motion.h3>
                <motion.h5 initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="mt-3">
                  {slides[index].subtitle}
                </motion.h5>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="text-center mt-6">Slick slider simple and easy to use — converted to React.</p>
    </section>
  );
}

/* ========== CategoryCarousel ========== */
function CategoryCarousel() {
  const items = [
    {
      id: "kachi",
      title: "Kachi Ghani Mustard Oil",
      img: "/images/banner2.jpg",
      desc: `कची घानी सरसों का तेल — परंपरा और तीखापन दोनों में संतुलन। हमारी cold-press विधि से निकला यह तेल अपनी सुगंध और स्वाद के लिये मशहूर है।`,
    },
    {
      id: "soya",
      title: "Soyabean Oil — Light & Healthy",
      img: "/images/slide2.jpg",
      desc: `Soyabean oil हल्का, पौष्टिक और रोज़ाना के लिए उपयुक्त। इसमें Vitamin E और अनसैचुरेटेड फैटी एसिड्स होते हैं।`,
    },
    {
      id: "rice",
      title: "Rice Bran Oil — Heart Friendly",
      img: "/images/slide1.jpg",
      desc: `Rice bran oil उच्च स्मोक पॉइंट और हृदय-हितकर प्रोफाइल के साथ आता है।`,
    },
  ];

  const [index, setIndex] = useState(0);
  const len = items.length;
  const autoplayRef = useRef(null);

  useEffect(() => {
    autoplayRef.current = setInterval(() => setIndex((i) => (i + 1) % len), 6000);
    return () => clearInterval(autoplayRef.current);
  }, [len]);

  function prev() {
    clearInterval(autoplayRef.current);
    setIndex((i) => (i - 1 + len) % len);
  }
  function next() {
    clearInterval(autoplayRef.current);
    setIndex((i) => (i + 1) % len);
  }

  return (
    <section className="py-12">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div key={items[index].id} initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -60 }} transition={{ duration: 0.8, ease }} className="absolute inset-0">
                  <Image src={items[index].img} alt={items[index].title} fill className="object-cover" unoptimized />
                </motion.div>
              </AnimatePresence>
            </div>

            <button onClick={prev} aria-label="Prev" className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/95 shadow-lg flex items-center justify-center hover:scale-105 transition">
              <FaChevronLeft className="text-[#0b0d11] w-4 h-4" />
            </button>
            <button onClick={next} aria-label="Next" className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/95 shadow-lg flex items-center justify-center hover:scale-105 transition">
              <FaChevronRight className="text-[#0b0d11] w-4 h-4" />
            </button>
          </div>

          <div>
            <motion.h3 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className={`${playfair.className} text-2xl md:text-4xl font-extrabold mb-4`}>
              {items[index].title}
            </motion.h3>

            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.12 }} className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
              {items[index].desc}
            </motion.p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/products" className="inline-block rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-green-600 px-6 py-3 font-bold shadow text-white hover:scale-105 transition">
                Explore Products
              </Link>
              <button onClick={() => alert(items[index].title + " — Quick View")} className="px-4 py-2 rounded-full border border-gray-300 hover:shadow transition">
                Quick View →
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          {items.map((it, i) => (
            <button key={it.id} onClick={() => setIndex(i)} className={`w-3 h-3 rounded-full ${i === index ? "bg-[#0b0d11]" : "bg-gray-300"} transition`} aria-label={`Go to ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========== MovingShowcase ========== */
function MovingShowcase() {
  const slides = [
    { id: "s-soya", img: "/images/slide2.jpg", title: "Soyabean Oil — हल्का, स्वास्थ्यवर्धक", subtitle: "Vitamin E • Light Texture • Daily Cooking", cta: { text: "Explore Soyabean", href: "/products/soyabean-oil" } },
    { id: "s-mustard", img: "/images/slide1.jpg", title: "Kachi Ghani Mustard Oil — परंपरा का स्वाद", subtitle: "Cold Pressed • Strong Aroma • Authentic Taste", cta: { text: "Explore Mustard", href: "/products/kachi-ghani-mustard-oil" } },
    { id: "s-banner3", img: "/images/banner3.jpg", title: "Healthy Frying — Rice Bran Oil", subtitle: "High Smoke Point • Neutral Taste • Heart Friendly", cta: { text: "Explore Rice Bran", href: "/products/rice-bran-oil" } },
  ];

  const [idx, setIdx] = useState(0);
  const len = slides.length;
  const autoplayRef = useRef(null);

  useEffect(() => {
    autoplayRef.current = setInterval(() => setIdx((i) => (i + 1) % len), 7000);
    return () => clearInterval(autoplayRef.current);
  }, [len]);

  function prev() {
    clearInterval(autoplayRef.current);
    setIdx((i) => (i - 1 + len) % len);
  }
  function next() {
    clearInterval(autoplayRef.current);
    setIdx((i) => (i + 1) % len);
  }

  const slide = slides[idx];

  return (
    <section className="relative w-full min-h-[62vh] md:min-h-[72vh] overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.div key={slide.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.9 }}>
            <Image src={slide.img} alt={slide.title} fill className="object-cover object-center" priority unoptimized />
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-white/60" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="hidden md:block" />
          <motion.div initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="bg-white/95 backdrop-blur rounded-2xl p-8 md:max-w-xl shadow-2xl border border-gray-100">
            <motion.h2 className={`${playfair.className} text-2xl md:text-3xl font-extrabold`} initial={{ x: -8, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
              {slide.title}
            </motion.h2>
            <motion.p className="mt-2 text-sm md:text-base text-gray-700 font-semibold" initial={{ x: -6, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
              {slide.subtitle}
            </motion.p>

            <motion.p className="mt-4 text-sm text-gray-600 leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
              Veer Bharat की excellence और modern quality control के साथ आपके किचन तक शुद्ध और भरोसेमंद तेल पहुँचाने का वादा।
            </motion.p>

            <div className="mt-6 flex items-center gap-3">
              <Link href={slide.cta.href} className="rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-emerald-400 px-5 py-2.5 font-bold shadow-md hover:scale-105 transition">
                {slide.cta.text}
              </Link>

              <button onClick={prev} className="px-4 py-2 rounded-full border border-gray-200">‹ Prev</button>
              <button onClick={next} className="px-4 py-2 rounded-full border border-gray-200">Next ›</button>
            </div>
          </motion.div>
        </div>
      </div>

      <button onClick={prev} aria-label="Prev slide" className="absolute left-6 top-1/2 -translate-y-1/2 z-30 rounded-full bg-white shadow-xl w-12 h-12 flex items-center justify-center hover:scale-105 transition">‹</button>
      <button onClick={next} aria-label="Next slide" className="absolute right-6 top-1/2 -translate-y-1/2 z-30 rounded-full bg-white shadow-xl w-12 h-12 flex items-center justify-center hover:scale-105 transition">›</button>
    </section>
  );
}

/* ========== SignatureCollection ========== */
function SignatureCollection() {
  const list = [
    { id: "p1", slug: "kachi-ghani-mustard-oil", name: "Kachi Ghani Mustard Oil", img: "/images/prod-mustard.jpg", desc: "Traditional cold-pressed mustard oil with strong aroma & flavor." },
    { id: "p2", slug: "soyabean-oil", name: "Soyabean Oil", img: "/images/prod-soyabean.jpg", desc: "Light texture, rich in Vitamin E — great for everyday cooking." },
    { id: "p3", slug: "rice-bran-oil", name: "Rice Bran Oil", img: "/images/prod-ricebran.jpg", desc: "High smoke point and heart friendly — ideal for frying." },
  ];

  const [idx, setIdx] = useState(0);
  const len = list.length;
  const autoplay = useRef(null);

  useEffect(() => {
    autoplay.current = setInterval(() => setIdx((i) => (i + 1) % len), 7000);
    return () => clearInterval(autoplay.current);
  }, [len]);

  function prev() {
    clearInterval(autoplay.current);
    setIdx((i) => (i - 1 + len) % len);
  }
  function next() {
    clearInterval(autoplay.current);
    setIdx((i) => (i + 1) % len);
  }

  const current = list[idx];

  return (
    <section className="py-20 bg-[#0f1115] text-white">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.h2 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold mb-8 text-center">
          Our Signature Collection
        </motion.h2>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="hidden md:block">
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
              <Image src={list[(idx - 1 + len) % len].img} alt="prev" fill className="object-cover" unoptimized />
            </div>
            <p className="mt-3 text-sm text-gray-300">{list[(idx - 1 + len) % len].name}</p>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="col-span-1 md:col-span-1 rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/5">
            <div className="relative h-[420px] md:h-[520px]">
              <Image src={current.img} alt={current.name} fill className="object-cover" unoptimized />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-extrabold">{current.name}</h3>
              <p className="mt-3 text-gray-200">{current.desc}</p>

              <div className="mt-6 flex items-center gap-4">
                <button onClick={() => alert(`Open ${current.name}`)} className="rounded-full bg-amber-400 px-6 py-2 font-bold text-black hover:scale-105 transition">Explore</button>
                <Link href={`/products/${current.slug}`} className="rounded-full border border-white/20 px-4 py-2">View Page</Link>
              </div>
            </div>
          </motion.div>

          <div className="hidden md:block">
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
              <Image src={list[(idx + 1) % len].img} alt="next" fill className="object-cover" unoptimized />
            </div>
            <p className="mt-3 text-sm text-gray-300">{list[(idx + 1) % len].name}</p>
          </div>

          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-30">
            <button onClick={prev} aria-label="prev product" className="flex items-center justify-center w-12 h-12 rounded-full bg-white/95 shadow">
              <FaChevronLeft className="text-[#0b0d11]" />
            </button>
            <div className="text-sm text-gray-200 px-4 py-2 rounded-full bg-white/10">{idx + 1} / {len}</div>
            <button onClick={next} aria-label="next product" className="flex items-center justify-center w-12 h-12 rounded-full bg-white/95 shadow">
              <FaChevronRight className="text-[#0b0d11]" />
            </button>
          </div>
        </div>

        <div style={{ height: 64 }} />
      </div>
    </section>
  );
}

/* ========== Branches ========== */
function Branches() {
  const imgs = [
    "/images/banner4.jpg",
    "/images/banner3.jpg",
    "/images/team1.jpg",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.h2 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold mb-10 text-center">
          Our Branches & Gallery
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {imgs.map((src, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }} className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image src={src} alt={`Gallery ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-700" unoptimized />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========== VideoHero ========== */
function VideoHero({ videos = [] }) {
  const vidRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const v = vidRef.current;
    if (!v) return;
    v.muted = true;
    v.playsInline = true;
    v.preload = "metadata";
    v.play().catch(() => setPlaying(false));
  }, [videos]);

  function toggle() {
    const v = vidRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => setPlaying(false));
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }

  return (
    <section className="relative w-full overflow-hidden bg-black border-b border-white/6">
      <div className="relative h-[60vh] md:h-[72vh] lg:h-[82vh]">
        <video ref={vidRef} src={videos[0]} className="w-full h-full object-cover" autoPlay muted loop playsInline preload="metadata" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30 pointer-events-none" />

        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6 text-center">
          <motion.h1 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className={`${playfair.className} text-3xl md:text-5xl lg:text-6xl font-extrabold text-white`}>
            Welcome to Veer Bharat
          </motion.h1>
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.8 }} className={`${poppins.className} text-lg md:text-2xl font-bold text-amber-300 mt-3`}>
            मज़ा आ गया
          </motion.h2>
        </div>

        <button onClick={toggle} className="absolute right-6 top-6 z-30 flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-4 py-2 text-sm font-semibold border border-white/10 hover:scale-105 transition">
          {playing ? "Pause" : "Play"}
        </button>
      </div>
    </section>
  );
}






// pasted and the animation code above added by me 

// ===== PASTE END - file complete =====




// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { Poppins, Playfair_Display } from "next/font/google";
// import { products } from "../data/products";

// // Fonts
// const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "800"] });
// const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "800"] });

// export default function Home() {
//   // 👇 3 uploaded videos
//   const slides = [
//     { src: "/185947-876963225_small.mp4", poster: "/banner1.jpg" },
//     { src: "/276624_small.mp4", poster: "/banner2.jpg" },
//     { src: "/292827_small.mp4", poster: "/banner3.jpg" },
//   ];

//   const [current, setCurrent] = useState(0);
//   const vidRef = useRef(null);

//   // auto change every 15 sec
//   useEffect(() => {
//     const t = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 15000);
//     return () => clearInterval(t);
//   }, [slides.length]);

//   // when current video changes → play again
//   useEffect(() => {
//     const v = vidRef.current;
//     if (!v) return;
//     v.pause();
//     setTimeout(() => {
//       v.currentTime = 0;
//       v.muted = true;
//       v.play().catch(() => {});
//     }, 80);
//   }, [current]);

//   return (
//     <main className={`${poppins.className} bg-[#0f1115] text-white`}>
//       {/* ====== TOP VIDEO HERO ====== */}
//       <section className="relative w-full h-screen overflow-hidden">
//         <video
//           key={slides[current].src}
//           ref={vidRef}
//           src={slides[current].src}
//           poster={slides[current].poster}
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="w-full h-full object-cover"
//         />

//         {/* Overlay for readability */}
//         <div className="absolute inset-0 bg-black/40" />

//         {/* Centered heading */}
//         <div className="absolute inset-0 flex items-center justify-center text-center">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={current}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -30 }}
//               transition={{ duration: 1 }}
//             >
//               <h1
//                 className={`${playfair.className} text-4xl sm:text-6xl lg:text-7xl font-extrabold text-amber-300 drop-shadow-2xl`}
//               >
//                 Welcome to Veer Bharat
//               </h1>
//               <p className="mt-4 text-lg sm:text-xl text-white/90 font-medium">
//                 हर बूंद में भरोसा — Premium Oils for Every Home
//               </p>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </section>

//       {/* ====== REST OF YOUR EXISTING PAGE STARTS HERE ====== */}
//       <section className="relative h-[90vh] w-full overflow-hidden">
//         <div className="absolute inset-0">
//           <Image src="/banner1.jpg" alt="Veer Bharat Banner" fill priority className="object-cover" />
//         </div>

//         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/70" />
//         <div className="absolute inset-0 flex items-center">
//           <div className="mx-auto w-full max-w-6xl px-6 text-center lg:text-left">
//             <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-400 to-emerald-400">
//                 VEER BHARAT OILS
//               </span>
//             </h1>
//             <h2 className={`${playfair.className} mt-2 text-3xl md:text-5xl font-extrabold text-white`}>
//               वाह! मज़ा आ गया
//             </h2>
//             <p className="mt-4 max-w-2xl text-lg sm:text-xl text-gray-100 font-semibold">
//               Kachi Ghani Mustard • Soyabean • Rice Bran —{" "}
//               <span className="text-amber-300 font-extrabold">हर बूंद में भरोसा</span>
//             </p>
//             <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
//               <Link
//                 href="/products"
//                 className="rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-green-600 px-6 py-3 font-extrabold shadow-lg hover:shadow-amber-500/20 transition"
//               >
//                 Explore Products
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Example products section (keep your original code here) */}
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
//     </main>
//   );
// }
