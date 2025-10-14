// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { products } from "../../data/products";

// export default function ProductsPage() {
//   return (
//     <main className="container py-10">
//       <header className="mb-6">
//         <h1 className="text-3xl sm:text-4xl font-extrabold">Our Full Range of Products</h1>
//         <p className="mt-1 text-ink-500">Click a product card to open its dedicated page.</p>
//       </header>

//       <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//         {products.map((p) => (
//           <Link
//             key={p.slug}
//             href={`/products/${p.slug}`}
//             className="card overflow-hidden hover:-translate-y-1 transition"
//           >
//             <div className="relative h-56">
//               <Image src={p.image} alt={p.name} fill className="object-cover" />
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-extrabold">{p.name}</h3>
//               <p className="mt-2 text-sm text-ink-500">{p.short}</p>
//               <div className="mt-3 flex flex-wrap gap-2">
//                 {p.highlights.slice(0, 3).map((h) => (
//                   <span key={h} className="badge">{h}</span>
//                 ))}
//               </div>
//               <span className="mt-4 inline-block font-semibold underline">Read more →</span>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </main>
//   );
// }



// src/app/products/page.js

// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { products } from "../../data/products";

// /* generateLongCaption unchanged (keeps ~170 words) */
// function generateLongCaption(name = "This product", short = "") {
//   const para1 = `${name} from Veer Bharat is crafted to blend tradition with modern quality. Built on a foundation of careful sourcing, stringent quality checks and culinary expertise, ${name} brings a dependable flavour profile to every kitchen. Whether used for everyday frying or for special family recipes, ${name} is formulated to retain natural aroma and provide consistent performance across cooking methods.`;
//   const para2 = `Our approach for ${name} focuses on purity and usability: premium raw materials, temperature-controlled processing, and hygiene standards that meet modern food safety expectations. Families choose ${name} because it preserves the taste of home-cooked meals, helps create crisp, golden textures and retains nutrients where it matters.`;
//   const para3 = `By choosing ${name}, you choose a product that balances health and flavour. ${short ? `${short}. ` : ""}From our small-batch pilot tests to large-scale distribution, every step is designed to ensure that each bottle carries the Veer Bharat promise: pure, consistent, and trusted. Add ${name} to your pantry and experience the difference in texture, aroma, and overall satisfaction in every dish.`;
//   return `${para1} ${para2} ${para3}`;
// }

// export default function ProductsPage() {
//   const [selectedSlug, setSelectedSlug] = useState(null); // which product shows in right-column
//   const [modalVideo, setModalVideo] = useState(null); // { src, name }
//   const closeModal = () => setModalVideo(null);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "Escape") {
//         closeModal();
//         setSelectedSlug(null);
//       }
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   const selectedProduct = products.find((p) => p.slug === selectedSlug) || null;

//   return (
//     <main className="min-h-screen bg-gray-50 py-12">
//       <div className="max-w-7xl mx-auto px-6 relative">
//         <header className="mb-8 text-center">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
//             Our Full Range of Products
//           </h1>
//           <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
//             Handpicked edible oils & culinary essentials — crafted for taste, health and everyday
//             confidence. Click a card to view details or the play button to see a product demo.
//           </p>
//         </header>

//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {products.map((p) => {
//             const captionPreview = (p.short || "").slice(0, 110); // short preview
//             const videoSrc = p.video || "/product-demo.mp4";
//             return (
//               <article
//                 key={p.slug}
//                 className="relative group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-transform transform hover:-translate-y-2"
//               >
//                 <div className="relative h-64 md:h-72 w-full overflow-hidden">
//                   <Image
//                     src={p.image}
//                     alt={p.name}
//                     fill
//                     className="object-cover transition-transform duration-500 group-hover:scale-105"
//                     priority
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
//                 </div>

//                 <div className="p-5 md:p-6">
//                   <div className="flex items-start justify-between gap-4">
//                     <div>
//                       <h2 className="text-xl md:text-2xl font-extrabold text-gray-900">{p.name}</h2>
//                       <p className="mt-1 text-gray-600 text-sm md:text-base max-w-xl">{captionPreview}{p.short && p.short.length > 110 ? "…" : ""}</p>
//                       <div className="mt-3 flex items-center gap-2">
//                         {p.price && (
//                           <span className="text-sm font-semibold px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-100">
//                             ₹{p.price}
//                           </span>
//                         )}
//                         {p.qualityBadge && (
//                           <span className="text-xs font-medium px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-100">
//                             {p.qualityBadge}
//                           </span>
//                         )}
//                       </div>
//                     </div>

//                     <div className="flex flex-col items-end gap-3">
//                       <Link
//                         href={`/products/${p.slug}`}
//                         className="hidden md:inline-flex items-center gap-2 rounded-full px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold shadow"
//                       >
//                         View Product →
//                       </Link>

//                       <div className="flex items-center gap-2">
//                         <button
//                           onClick={() => setModalVideo({ src: videoSrc, name: p.name })}
//                           className="inline-flex items-center gap-2 rounded-full px-3 py-2 border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition"
//                           aria-label={`Play video for ${p.name}`}
//                         >
//                           <svg className="w-4 h-4 text-red-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
//                             <path d="M8 5v14l11-7z" />
//                           </svg>
//                           <span className="hidden sm:inline">Demo</span>
//                         </button>

//                         <button
//                           onClick={() => setSelectedSlug(p.slug)}
//                           className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-3 py-2 text-sm text-gray-800 hover:shadow transition"
//                           aria-expanded={selectedSlug === p.slug}
//                         >
//                           Read Details
//                         </button>
//                       </div>
//                     </div>
//                   </div>

//                   {/* highlights row */}
//                   <div className="mt-4 flex flex-wrap gap-2">
//                     {p.highlights?.slice(0, 4).map((h, i) => (
//                       <span key={i} className="bg-gray-100 text-gray-800 text-xs md:text-sm px-2 py-1 rounded-lg">
//                         {h}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </article>
//             );
//           })}
//         </div>

//         {/* DETAILS COLUMN: slides in from right on desktop, overlays full width on mobile */}
//         <AnimatePresence>
//           {selectedProduct && (
//             <motion.aside
//               key="details-column"
//               initial={{ x: "100%", opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               exit={{ x: "100%", opacity: 0 }}
//               transition={{ type: "tween", duration: 0.35 }}
//               className="fixed inset-y-0 right-0 z-50 w-full md:w-[44%] lg:w-[38%] bg-white shadow-2xl overflow-auto"
//               aria-modal="true"
//               role="dialog"
//             >
//               {/* overlay for mobile to dim background and allow clicking to close */}
//               <div
//                 className="md:hidden absolute inset-0 bg-black/40"
//                 onClick={() => setSelectedSlug(null)}
//               />

//               <div className="relative p-6 md:p-8">
//                 <div className="flex items-start justify-between gap-4">
//                   <div>
//                     <h3 className="text-2xl font-extrabold text-gray-900">{selectedProduct.name}</h3>
//                     <p className="mt-1 text-gray-600 text-sm">{selectedProduct.short}</p>
//                     <div className="mt-2 flex items-center gap-2">
//                       {selectedProduct.price && (
//                         <span className="text-lg font-bold px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-100">
//                           ₹{selectedProduct.price}
//                         </span>
//                       )}
//                       {selectedProduct.qualityBadge && (
//                         <span className="text-sm font-medium px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-100">
//                           {selectedProduct.qualityBadge}
//                         </span>
//                       )}
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-3">
//                     <button
//                       onClick={() => setSelectedSlug(null)}
//                       className="rounded-full bg-gray-100 px-3 py-2 text-sm font-medium hover:scale-105 transition"
//                       aria-label="Close details"
//                     >
//                       Close
//                     </button>
//                   </div>
//                 </div>

//                 <div className="mt-5 space-y-6 prose prose-sm md:prose-base max-w-none text-gray-700">
//                   <p>{generateLongCaption(selectedProduct.name, selectedProduct.short)}</p>

//                   <div className="w-full bg-gray-900 rounded-lg overflow-hidden">
//                     <video
//                       src={selectedProduct.video || "/product-demo.mp4"}
//                       controls
//                       className="w-full h-56 md:h-72 object-cover bg-black"
//                       poster={selectedProduct.image}
//                     />
//                   </div>

//                   <div className="flex flex-wrap items-center gap-3">
//                     <Link
//                       href={`/products/${selectedProduct.slug}`}
//                       className="rounded-full px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold shadow"
//                     >
//                       Buy / Details
//                     </Link>
//                     <a
//                       href="/company-profile.pdf"
//                       className="rounded-full px-4 py-2 border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition"
//                     >
//                       Company Profile (PDF)
//                     </a>
//                     <button
//                       onClick={() => setModalVideo({ src: selectedProduct.video || "/product-demo.mp4", name: selectedProduct.name })}
//                       className="rounded-full px-4 py-2 border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition"
//                     >
//                       Open Demo in Modal
//                     </button>
//                   </div>

//                   {/* extra product metadata */}
//                   <div className="mt-2 grid grid-cols-2 gap-3 text-sm text-gray-600">
//                     <div>
//                       <div className="font-semibold text-gray-800">Net Quantity</div>
//                       <div>{selectedProduct.net || "Not specified"}</div>
//                     </div>
//                     <div>
//                       <div className="font-semibold text-gray-800">Packaging</div>
//                       <div>{selectedProduct.packaging || "Bottle"}</div>
//                     </div>
//                     <div>
//                       <div className="font-semibold text-gray-800">Sourced From</div>
//                       <div>{selectedProduct.source || "Local partners"}</div>
//                     </div>
//                     <div>
//                       <div className="font-semibold text-gray-800">Shelf Life</div>
//                       <div>{selectedProduct.shelfLife || "See label"}</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.aside>
//           )}
//         </AnimatePresence>

//         {/* Video modal (plays product video) */}
//         <AnimatePresence>
//           {modalVideo && (
//             <motion.div
//               key="video-modal"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.2 }}
//               className="fixed inset-0 z-50 flex items-center justify-center p-6"
//             >
//               <div className="absolute inset-0 bg-black/70" onClick={closeModal} />

//               <motion.div
//                 initial={{ scale: 0.95, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.95, opacity: 0 }}
//                 transition={{ duration: 0.2 }}
//                 className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl bg-black"
//               >
//                 <div className="absolute right-3 top-3 z-20">
//                   <button
//                     onClick={closeModal}
//                     className="rounded-full bg-white/90 px-3 py-2 text-black font-semibold shadow hover:scale-105 transition"
//                   >
//                     Close
//                   </button>
//                 </div>

//                 <video
//                   src={modalVideo.src}
//                   controls
//                   autoPlay
//                   className="w-full h-[60vh] md:h-[72vh] object-cover bg-black"
//                 />
//                 <div className="p-4 bg-gradient-to-t from-black/40 to-transparent text-white flex items-center justify-between">
//                   <div>
//                     <div className="text-lg font-bold">{modalVideo.name}</div>
//                     <div className="text-sm text-white/80">Veer Bharat — product demo</div>
//                   </div>
//                   <div className="text-sm text-white/80">Press Esc to close</div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </main>
//   );
// }



// src/app/products/page.js
// src/app/products/page.js


// src/app/products/page.js
// src/app/products/page.js

// src/app/products/page.js



// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { products } from "../../data/products";

// /* Helper */
// function generateLongCaption(name = "This product", short = "") {
//   return `${name} from Veer Bharat is crafted to blend tradition with modern quality. ${short || ""}`;
// }

// /* ---------------- Rotating Showcase (positioning via sin/cos so images stay upright) ---------------- */
// function RotatingShowcase({ items = [] }) {
//   const n = items.length || 1;
//   const [index, setIndex] = useState(0);
//   const [radius, setRadius] = useState(160);
//   const containerRef = useRef(null);

//   // CLOCKWISE rotation: positive degrees -> clockwise
//   const rotationDeg = index * (360 / n);

//   // Measure available space and set radius responsively
//   useEffect(() => {
//     function setFromWidth() {
//       if (!containerRef.current) return;
//       const w = containerRef.current.clientWidth;
//       // radius is a fraction of container with clamps
//       const r = Math.min(Math.max(w * 0.18, 90), 240);
//       setRadius(r);
//     }
//     setFromWidth();
//     window.addEventListener("resize", setFromWidth);
//     return () => window.removeEventListener("resize", setFromWidth);
//   }, []);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "ArrowRight") setIndex((i) => (i + 1) % n);
//       if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + n) % n);
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [n]);

//   if (!items.length) return null;

//   // textual content (200-300 words split into 3 parts)
//   const longText = {
//     goodness:
//       "Veer Bharat oils are crafted with careful attention to purity and traditional techniques. Our Kachi Ghani and refined ranges are made from selected seeds and processed using temperature and hygiene controls to preserve natural flavour and nutrients. We prioritise full lab testing, clear labelling and tamper-evident packaging so the family can trust every bottle on the shelf.",
//     benefits:
//       "Health-forward and versatile — our oils bring balanced fatty-acid profiles suitable for a variety of Indian recipes. They help achieve crisp, golden textures for fried foods, retain aroma in shallow frying and contribute to overall dietary fat needs with quality fats. We source responsibly and work with small farmers so you get consistent taste with improved transparency and fair pricing.",
//     rating:
//       "Market reception has been strong in regional pilots — customers praise the authentic aroma and consistent performance across cooking methods. With quality assurance measures and an expanding distribution network, Veer Bharat is steadily gaining recognition as a reliable value brand in the edible oils segment.",
//   };

//   return (
//     <section ref={containerRef} className="max-w-7xl mx-auto px-6 mb-12">
//       <div className="grid gap-8 md:grid-cols-2 items-center">
//         {/* LEFT: text + controls */}
//         <div className="space-y-5">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-[#1b2a3a]">
//             {items[index].name}
//           </h2>

//           <p className="text-lg text-slate-700 max-w-xl">{items[index].short}</p>

//           {/* big visible content split */}
//           <div className="mt-4 p-6 bg-white rounded-2xl shadow-sm border">
//             <h3 className="text-xl font-semibold mb-2">Goodness</h3>
//             <p className="text-sm text-slate-700 leading-relaxed">{longText.goodness}</p>

//             <h3 className="text-xl font-semibold mt-4 mb-2">Benefits</h3>
//             <p className="text-sm text-slate-700 leading-relaxed">{longText.benefits}</p>

//             <h3 className="text-xl font-semibold mt-4 mb-2">Market Rating</h3>
//             <p className="text-sm text-slate-700 leading-relaxed">{longText.rating}</p>
//           </div>

//           <div className="mt-4 flex items-center gap-3">
//             <button
//               onClick={() => setIndex((i) => (i - 1 + n) % n)}
//               aria-label="Previous"
//               className="w-12 h-12 rounded-full bg-white shadow-md border hover:scale-105 transition flex items-center justify-center text-2xl"
//             >
//               ‹
//             </button>
//             <button
//               onClick={() => setIndex((i) => (i + 1) % n)}
//               aria-label="Next"
//               className="w-12 h-12 rounded-full bg-white shadow-md border hover:scale-105 transition flex items-center justify-center text-2xl"
//             >
//               ›
//             </button>

//             <Link
//               href={`/products/${items[index].slug}`}
//               className="ml-4 inline-flex items-center gap-2 rounded-full px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-semibold shadow"
//             >
//               View Product →
//             </Link>
//           </div>
//         </div>

//         {/* RIGHT: orbit visuals (positioned with left/top so images stay upright) */}
//         <div className="relative w-full flex justify-center md:justify-end">
//           <div
//             className="relative w-[320px] h-[320px] md:w-[520px] md:h-[520px] rounded-3xl p-6 flex items-center justify-center"
//             style={{ borderRadius: 28 }}
//           >
//             {/* dashed circle (subtle rotating motion) */}
//             <motion.svg
//               viewBox="0 0 300 300"
//               className="absolute inset-0 w-full h-full pointer-events-none"
//               animate={{ rotate: rotationDeg * 0.25 }}
//               transition={{ type: "spring", stiffness: 140, damping: 22 }}
//             >
//               <circle cx="150" cy="150" r="108" stroke="#F6C85F" strokeWidth="6" fill="none" strokeDasharray="6 8" />
//             </motion.svg>

//             {/* Place each item using left/top computed from angle + rotationDeg */}
//             {items.map((it, i) => {
//               // base angle for this item
//               const baseAngle = (i * 360) / n;
//               // total angle includes rotation (clockwise positive)
//               const totalAngle = baseAngle + rotationDeg;
//               // convert to radians and rotate so 0deg = top (-90)
//               const rad = ((totalAngle - 90) * Math.PI) / 180;
//               // compute x/y relative to center
//               const x = Math.cos(rad) * radius;
//               const y = Math.sin(rad) * radius;
//               const isActive = i === index;
//               const size = isActive ? 220 : 96;
//               const scale = isActive ? 1 : 0.78;

//               return (
//                 <div
//                   key={it.slug}
//                   className="absolute"
//                   style={{
//                     left: `calc(50% + ${x}px)`,
//                     top: `calc(50% + ${y}px)`,
//                     transform: `translate(-50%, -50%) scale(${scale})`,
//                     transition: "left 0.45s, top 0.45s, transform 0.35s",
//                     zIndex: isActive ? 50 : 10,
//                     width: size,
//                     height: size,
//                   }}
//                 >
//                   <div
//                     className="relative rounded-2xl overflow-hidden bg-white"
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       boxShadow: isActive ? "0 18px 34px rgba(0,0,0,0.18)" : "0 8px 18px rgba(0,0,0,0.09)",
//                       border: "1px solid rgba(0,0,0,0.06)",
//                     }}
//                   >
//                     {/* Image stays upright because we do not rotate it */}
//                     <Image src={it.image} alt={it.name} fill style={{ objectFit: "cover" }} priority={isActive} />
//                   </div>
//                 </div>
//               );
//             })}

//             {/* decorative mini at top center */}
//             <div className="absolute left-1/2 top-3 -translate-x-1/2 z-40">
//               <div className="w-12 h-12 rounded-full overflow-hidden border shadow-sm bg-white">
//                 <Image src={items[(index + 1) % n].image} alt="mini" width={48} height={48} style={{ objectFit: "cover" }} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ---------------- Main ProductsPage ---------------- */
// export default function ProductsPage() {
//   const [selectedSlug, setSelectedSlug] = useState(null);
//   const [modalVideo, setModalVideo] = useState(null);
//   const closeModal = () => setModalVideo(null);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "Escape") {
//         closeModal();
//         setSelectedSlug(null);
//       }
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   const selectedProduct = products.find((p) => p.slug === selectedSlug) || null;

//   /* ---------- Showcase items: using your two images in public/images/ ---------- */
//   const showcaseItems = (products || [])
//     .slice(0, 2)
//     .map((p, i) => ({
//       ...p,
//       // IMPORTANT: these must exist as /public/images/...
//       image: i === 0 ? "/images/musterddd.jpg" : "/images/soyabeennnn.jpg",
//     }));

//   return (
//     // background applied to whole page as requested
//     <main style={{ background: "#fef9c3" }} className="min-h-screen py-12">
//       <div className="max-w-7xl mx-auto px-6 relative">
//         {/* ROTATING SHOWCASE (top) */}
//         <RotatingShowcase items={showcaseItems} />

//         {/* PAGE HEADER */}
//         <header className="mb-8 text-center">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Our Full Range of Products</h1>
//           <p className="mt-2 text-gray-800 max-w-2xl mx-auto">
//             Handpicked edible oils & culinary essentials — crafted for taste, health and everyday confidence.
//           </p>
//         </header>

//         {/* PRODUCTS GRID */}
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {products.map((p) => (
//             <article key={p.slug} className="relative group bg-white rounded-2xl shadow-lg overflow-hidden">
//               <div className="relative h-64 md:h-72 w-full overflow-hidden">
//                 <Image src={p.image} alt={p.name} fill className="object-cover" />
//               </div>

//               <div className="p-5 md:p-6">
//                 <h2 className="text-xl md:text-2xl font-extrabold text-gray-900">{p.name}</h2>
//                 <p className="mt-1 text-gray-600 text-sm md:text-base">{p.short}</p>

//                 <div className="mt-3 flex items-center gap-2">
//                   {p.price && (
//                     <span className="text-sm font-semibold px-3 py-1 rounded-full bg-amber-50 text-amber-700 border">₹{p.price}</span>
//                   )}
//                 </div>

//                 <div className="mt-4 flex items-center gap-2">
//                   <Link href={`/products/${p.slug}`} className="rounded-full px-4 py-2 bg-amber-400 text-black font-bold shadow">View Product →</Link>
//                   <button onClick={() => setModalVideo({ src: p.video || "/product-demo.mp4", name: p.name })} className="rounded-full px-3 py-2 border">Demo</button>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* VIDEO MODAL */}
//         <AnimatePresence>
//           {modalVideo && (
//             <motion.div
//               key="video-modal"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.18 }}
//               className="fixed inset-0 z-50 flex items-center justify-center p-6"
//             >
//               <div className="absolute inset-0 bg-black/70" onClick={closeModal} />
//               <motion.div initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.96, opacity: 0 }} transition={{ duration: 0.18 }} className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl bg-black">
//                 <div className="absolute right-3 top-3 z-20">
//                   <button onClick={closeModal} className="rounded-full bg-white/90 px-3 py-2">Close</button>
//                 </div>
//                 <video src={modalVideo.src} controls autoPlay className="w-full h-[60vh] md:h-[72vh] object-cover bg-black" />
//                 <div className="p-4 bg-gradient-to-t from-black/40 to-transparent text-white flex items-center justify-between">
//                   <div>
//                     <div className="text-lg font-bold">{modalVideo.name}</div>
//                     <div className="text-sm text-white/80">Veer Bharat — product demo</div>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </main>
//   );
// }









// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";


// /* Mock products data */
// const products = [
//   {
//     slug: "soyabean-oil",
//     name: "Soyabean Oil",
//     short: "Light, versatile and nutrition-forward—lets ingredients shine without heaviness.",
//     image: "/images/soyabeennnn.jpg",
//     price: "180",
//     video: "/product-demo.mp4"
//   },
//   {
//     slug: "mustard-oil",
//     name: "Kachi Ghani Mustard Oil",
//     short: "Traditional cold-pressed purity with authentic aroma and robust flavor.",
//     image: "/images/musterddd.jpg",
//     price: "220",
//     video: "/product-demo.mp4"
//   },
//   {
//     slug: "rice-bran-oil",
//     name: "Rice Bran Oil",
//     short: "Heart-healthy choice with balanced nutrition, high smoke point ideal for deep frying.",
//     image: "/images/soyabeennnn.jpg",
//     price: "195",
//     video: "/product-demo.mp4"
//   },
//   {
//     slug: "palm-oil",
//     name: "Palm Oil",
//     short: "Rich, versatile cooking oil perfect for traditional recipes.",
//     image: "/images/musterddd.jpg",
//     price: "165",
//     video: "/product-demo.mp4"
//   },
//   {
//     slug: "sunflower-oil",
//     name: "Sunflower Oil",
//     short: "Light golden oil with neutral taste, perfect for all-purpose cooking.",
//     image: "/images/soyabeennnn.jpg",
//     price: "175",
//     video: "/product-demo.mp4"
//   },
//   {
//     slug: "brand-rice",
//     name: "Brand Rice",
//     short: "Premium quality rice with authentic aroma and perfect texture.",
//     image: "/images/musterddd.jpg",
//     price: "210",
//     video: "/product-demo.mp4"
//   }
// ];


// /* Helper */
// function generateLongCaption(name = "This product", short = "") {
//   return `${name} from Veer Bharat is crafted to blend tradition with modern quality. ${short || ""}`;
// }


// /* ---------------- Rotating Showcase (positioning via sin/cos so images stay upright) ---------------- */
// function RotatingShowcase({ items = [] }) {
//   const n = items.length || 1;
//   const [index, setIndex] = useState(0);
//   const [radius, setRadius] = useState(180);
//   const containerRef = useRef(null);


//   // CLOCKWISE rotation: positive degrees -> clockwise
//   const rotationDeg = index * (360 / n);


//   // Measure available space and set radius responsively
//   useEffect(() => {
//     function setFromWidth() {
//       if (!containerRef.current) return;
//       const w = containerRef.current.clientWidth;
//       // radius is a fraction of container with clamps
//       const r = Math.min(Math.max(w * 0.2, 120), 280);
//       setRadius(r);
//     }
//     setFromWidth();
//     window.addEventListener("resize", setFromWidth);
//     return () => window.removeEventListener("resize", setFromWidth);
//   }, []);


//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "ArrowRight") setIndex((i) => (i + 1) % n);
//       if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + n) % n);
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [n]);


//   if (!items.length) return null;


//   // textual content (200-300 words split into 3 parts)
//   const longText = {
//     goodness:
//       "Veer Bharat oils are crafted with careful attention to purity and traditional techniques. Our Kachi Ghani and refined ranges are made from selected seeds and processed using temperature and hygiene controls to preserve natural flavour and nutrients. We prioritise full lab testing, clear labelling and tamper-evident packaging so the family can trust every bottle on the shelf.",
//     benefits:
//       "Health-forward and versatile — our oils bring balanced fatty-acid profiles suitable for a variety of Indian recipes. They help achieve crisp, golden textures for fried foods, retain aroma in shallow frying and contribute to overall dietary fat needs with quality fats. We source responsibly and work with small farmers so you get consistent taste with improved transparency and fair pricing.",
//     rating:
//       "Market reception has been strong in regional pilots — customers praise the authentic aroma and consistent performance across cooking methods. With quality assurance measures and an expanding distribution network, Veer Bharat is steadily gaining recognition as a reliable value brand in the edible oils segment.",
//   };


//   return (
//     <section ref={containerRef} className="max-w-7xl mx-auto px-6 mb-16">
//       <div className="grid gap-12 md:grid-cols-2 items-center">
//         {/* LEFT: text content */}
//         <div className="space-y-6">
//           <h2 className="text-5xl md:text-6xl font-extrabold text-[#1b2a3a] tracking-tight leading-tight">
//             {items[index].name}
//           </h2>


//           <p className="text-xl md:text-2xl text-slate-700 max-w-xl leading-relaxed font-medium">
//             {items[index].short}
//           </p>


//           {/* Enhanced content card with premium styling */}
//           <div className="mt-6 p-8 bg-white rounded-3xl shadow-xl border-2 border-amber-100 backdrop-blur-sm">
//             <h3 className="text-2xl font-bold mb-3 text-amber-600 flex items-center gap-2">
//               <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
//               Goodness
//             </h3>
//             <p className="text-base md:text-lg text-slate-700 leading-relaxed">{longText.goodness}</p>


//             <h3 className="text-2xl font-bold mt-6 mb-3 text-amber-600 flex items-center gap-2">
//               <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
//               Benefits
//             </h3>
//             <p className="text-base md:text-lg text-slate-700 leading-relaxed">{longText.benefits}</p>


//             <h3 className="text-2xl font-bold mt-6 mb-3 text-amber-600 flex items-center gap-2">
//               <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
//               Market Rating
//             </h3>
//             <p className="text-base md:text-lg text-slate-700 leading-relaxed">{longText.rating}</p>
//           </div>


//           <div className="mt-6">
//             <Link
//               href={`/${items[index].slug}`}
//               className="inline-flex items-center gap-2 rounded-full px-8 py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
//             >
//               View Product →
//             </Link>
//           </div>
//         </div>


//         {/* RIGHT: orbit visuals with navigation buttons on LEFT and RIGHT sides */}
//         <div className="relative w-full flex justify-center md:justify-end items-center gap-4">
//           {/* PREVIOUS BUTTON - LEFT SIDE */}
//           <button
//             onClick={() => setIndex((i) => (i - 1 + n) % n)}
//             aria-label="Previous"
//             className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 rounded-full bg-white shadow-lg hover:shadow-xl border-2 border-amber-400 hover:bg-amber-50 hover:scale-110 transition-all duration-300 flex items-center justify-center text-3xl md:text-4xl font-bold text-amber-600 z-50"
//           >
//             ‹
//           </button>


//           <div
//             className="relative w-[340px] h-[340px] md:w-[560px] md:h-[560px] rounded-3xl p-6 flex items-center justify-center"
//             style={{ borderRadius: 32 }}
//           >
//             {/* Animated gradient circle background */}
//             <motion.div
//               className="absolute inset-0 rounded-full"
//               style={{
//                 background: "radial-gradient(circle, rgba(251,191,36,0.1) 0%, rgba(251,191,36,0.05) 50%, transparent 100%)",
//               }}
//               animate={{ scale: [1, 1.05, 1] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             />


//             {/* Enhanced dashed circle with glow effect */}
//             <motion.svg
//               viewBox="0 0 300 300"
//               className="absolute inset-0 w-full h-full pointer-events-none"
//               animate={{ rotate: rotationDeg * 0.25 }}
//               transition={{ type: "spring", stiffness: 140, damping: 22 }}
//             >
//               <defs>
//                 <filter id="glow">
//                   <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
//                   <feMerge>
//                     <feMergeNode in="coloredBlur"/>
//                     <feMergeNode in="SourceGraphic"/>
//                   </feMerge>
//                 </filter>
//               </defs>
//               <circle 
//                 cx="150" 
//                 cy="150" 
//                 r="115" 
//                 stroke="#F59E0B" 
//                 strokeWidth="8" 
//                 fill="none" 
//                 strokeDasharray="8 12" 
//                 filter="url(#glow)"
//                 opacity="0.8"
//               />
//             </motion.svg>


//             {/* Place each item using left/top computed from angle + rotationDeg */}
//             {items.map((it, i) => {
//               const baseAngle = (i * 360) / n;
//               const totalAngle = baseAngle + rotationDeg;
//               const rad = ((totalAngle - 90) * Math.PI) / 180;
//               const x = Math.cos(rad) * radius;
//               const y = Math.sin(rad) * radius;
//               const isActive = i === index;
//               const size = isActive ? 240 : 110;
//               const scale = isActive ? 1 : 0.75;


//               return (
//                 <div
//                   key={it.slug}
//                   className="absolute cursor-pointer"
//                   onClick={() => setIndex(i)}
//                   style={{
//                     left: `calc(50% + ${x}px)`,
//                     top: `calc(50% + ${y}px)`,
//                     transform: `translate(-50%, -50%) scale(${scale})`,
//                     transition: "left 0.5s cubic-bezier(0.4, 0, 0.2, 1), top 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
//                     zIndex: isActive ? 50 : 10,
//                     width: size,
//                     height: size,
//                   }}
//                 >
//                   <div
//                     className="relative rounded-3xl overflow-hidden bg-white"
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       boxShadow: isActive 
//                         ? "0 25px 50px rgba(245, 158, 11, 0.35), 0 10px 30px rgba(0,0,0,0.2)" 
//                         : "0 10px 25px rgba(0,0,0,0.12)",
//                       border: isActive ? "3px solid #F59E0B" : "2px solid rgba(0,0,0,0.08)",
//                     }}
//                   >
//                     <img 
//                       src={it.image} 
//                       alt={it.name}
//                       style={{ 
//                         width: '100%',
//                         height: '100%',
//                         objectFit: 'cover'
//                       }}
//                       className={isActive ? "brightness-105" : "brightness-95"}
//                     />
//                     {isActive && (
//                       <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent pointer-events-none" />
//                     )}
//                   </div>
//                 </div>
//               );
//             })}


//             {/* Enhanced decorative mini at top center */}
//             <div className="absolute left-1/2 top-4 -translate-x-1/2 z-40">
//               <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white ring-4 ring-amber-400/30">
//                 <img 
//                   src={items[(index + 1) % n].image} 
//                   alt="mini"
//                   style={{ 
//                     width: '100%',
//                     height: '100%',
//                     objectFit: 'cover'
//                   }}
//                 />
//               </div>
//             </div>
//           </div>


//           {/* NEXT BUTTON - RIGHT SIDE */}
//           <button
//             onClick={() => setIndex((i) => (i + 1) % n)}
//             aria-label="Next"
//             className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 rounded-full bg-white shadow-lg hover:shadow-xl border-2 border-amber-400 hover:bg-amber-50 hover:scale-110 transition-all duration-300 flex items-center justify-center text-3xl md:text-4xl font-bold text-amber-600 z-50"
//           >
//             ›
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


// /* ---------------- Main ProductsPage ---------------- */


// export default function ProductsPage() {
//   const [modalVideo, setModalVideo] = useState(null);
//   const closeModal = () => setModalVideo(null);


//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "Escape") {
//         closeModal();
//       }
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);


//   /* ---------- Showcase items: 4 products ---------- */
//   const showcaseItems = [
//     {
//       slug: "soyabean-oil",
//       name: "Soyabean Oil",
//       short: "Light, versatile and nutrition-forward—lets ingredients shine without heaviness.",
//       image: "/images/soyabeennnn.jpg",
//       price: "180",
//       video: "/product-demo.mp4"
//     },
//     {
//       slug: "mustard-oil",
//       name: "Kachi Ghani Mustard Oil",
//       short: "Traditional cold-pressed purity with authentic aroma and robust flavor for authentic Indian cooking.",
//       image: "/images/musterddd.jpg",
//       price: "220",
//       video: "/product-demo.mp4"
//     },
//     {
//       slug: "rice-bran-oil",
//       name: "Rice Bran Oil",
//       short: "Heart-healthy choice with balanced nutrition, high smoke point ideal for deep frying and everyday cooking.",
//       image: "/images/soyabeennnn.jpg",
//       price: "195",
//       video: "/product-demo.mp4"
//     },
//     {
//       slug: "palm-oil",
//       name: "Palm Oil",
//       short: "Rich, versatile cooking oil perfect for traditional recipes, delivering consistent taste and texture.",
//       image: "/images/musterddd.jpg",
//       price: "165",
//       video: "/product-demo.mp4"
//     }
//   ];


//   return (
//     // background applied to whole page as requested
//     <main style={{ background: "#fef9c3" }} className="min-h-screen py-12">
//       <div className="max-w-7xl mx-auto px-6 relative">
//         {/* ROTATING SHOWCASE (top) - 4 PRODUCTS */}
//         <RotatingShowcase items={showcaseItems} />


//         {/* PAGE HEADER with enhanced styling */}
//         <header className="mb-12 text-center">
//           <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
//             Our Full Range of Premium Products
//           </h1>
//           <p className="mt-3 text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
//             Handpicked edible oils & culinary essentials — crafted for taste, health and everyday confidence.
//           </p>
//         </header>


//         {/* PRODUCTS GRID with enhanced styling */}
//         <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
//           {products.map((p) => (
//             <article key={p.slug} className="relative group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
//               <div className="relative h-72 md:h-80 w-full overflow-hidden">
//                 <img 
//                   src={p.image} 
//                   alt={p.name}
//                   style={{ 
//                     width: '100%',
//                     height: '100%',
//                     objectFit: 'cover'
//                   }}
//                   className="group-hover:scale-110 transition-transform duration-500" 
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </div>


//               <div className="p-6 md:p-8">
//                 <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">{p.name}</h2>
//                 <p className="mt-2 text-gray-600 text-base md:text-lg leading-relaxed">{p.short}</p>


//                 <div className="mt-4 flex items-center gap-3">
//                   {p.price && (
//                     <span className="text-base md:text-lg font-bold px-4 py-2 rounded-full bg-gradient-to-r from-amber-50 to-amber-100 text-amber-700 border-2 border-amber-200">
//                       ₹{p.price}
//                     </span>
//                   )}
//                 </div>


//                 <div className="mt-6 flex items-center gap-3">
//                   <Link 
//                     href={`/${p.slug}`}
//                     className="flex-1 text-center rounded-full px-6 py-3 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-base md:text-lg"
//                   >
//                     View Product →
//                   </Link>
//                   <button 
//                     onClick={() => setModalVideo({ src: p.video || "/product-demo.mp4", name: p.name })} 
//                     className="rounded-full px-5 py-3 border-2 border-amber-400 hover:bg-amber-50 transition-all duration-300 font-semibold text-base md:text-lg"
//                   >
//                     Demo
//                   </button>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>


//         {/* VIDEO MODAL */}
//         <AnimatePresence>
//           {modalVideo && (
//             <motion.div
//               key="video-modal"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.18 }}
//               className="fixed inset-0 z-50 flex items-center justify-center p-6"
//             >
//               <div className="absolute inset-0 bg-black/70" onClick={closeModal} />
//               <motion.div initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.96, opacity: 0 }} transition={{ duration: 0.18 }} className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl bg-black">
//                 <div className="absolute right-3 top-3 z-20">
//                   <button onClick={closeModal} className="rounded-full bg-white/90 px-3 py-2 hover:bg-white transition">Close</button>
//                 </div>
//                 <video src={modalVideo.src} controls autoPlay className="w-full h-[60vh] md:h-[72vh] object-cover bg-black" />
//                 <div className="p-4 bg-gradient-to-t from-black/40 to-transparent text-white flex items-center justify-between">
//                   <div>
//                     <div className="text-lg font-bold">{modalVideo.name}</div>
//                     <div className="text-sm text-white/80">Veer Bharat — product demo</div>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </main>
//   );
// }










// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// /* Mock products data */
// const products = [
//   {
//     slug: "soyabean-oil",
//     name: "Soyabean Oil",
//     short: "Light, versatile and nutrition-forward—lets ingredients shine without heaviness.",
//     image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&q=80",
//     price: "180",
//     video: "/product-demo.mp4"
//   },
//   {
//     slug: "mustard-oil",
//     name: "Mustard Oil",
//     short: "Traditional cold-pressed purity with authentic aroma and robust flavor.",
//     image: "https://images.unsplash.com/photo-1608797178974-15b35a64ede9?w=800&q=80",
//     price: "220",
//     video: "/product-demo.mp4"
//   },
//   {
//     slug: "rice-bran",
//     name: "Rice Bran Oil",
//     short: "Heart-healthy choice with balanced nutrition, high smoke point ideal for deep frying.",
//     image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&q=80",
//     price: "195",
//     video: "/product-demo.mp4"
//   },
//   {
//     slug: "palm-oil",
//     name: "Palm Oil",
//     short: "Rich, versatile cooking oil perfect for traditional recipes.",
//     image: "https://images.unsplash.com/photo-1608797178974-15b35a64ede9?w=800&q=80",
//     price: "165",
//     video: "/product-demo.mp4"
//   },
//   {
//     slug: "sunflower-oil",
//     name: "Sunflower Oil",
//     short: "Light golden oil with neutral taste, perfect for all-purpose cooking.",
//     image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&q=80",
//     price: "175",
//     video: "/product-demo.mp4"
//   },
//   {
//     slug: "groundnut-oil",
//     name: "Groundnut Oil",
//     short: "Rich nutty flavor, ideal for high-heat cooking and authentic taste.",
//     image: "https://images.unsplash.com/photo-1608797178974-15b35a64ede9?w=800&q=80",
//     price: "210",
//     video: "/product-demo.mp4"
//   }
// ];

// /* ---------------- Rotating Showcase (positioning via sin/cos so images stay upright) ---------------- */
// function RotatingShowcase({ items = [] }) {
//   const n = items.length || 1;
//   const [index, setIndex] = useState(0);
//   const [radius, setRadius] = useState(180);
//   const containerRef = useRef(null);

//   // CLOCKWISE rotation: positive degrees -> clockwise
//   const rotationDeg = index * (360 / n);

//   // Measure available space and set radius responsively
//   useEffect(() => {
//     function setFromWidth() {
//       if (!containerRef.current) return;
//       const w = containerRef.current.clientWidth;
//       // radius is a fraction of container with clamps
//       const r = Math.min(Math.max(w * 0.2, 120), 280);
//       setRadius(r);
//     }
//     setFromWidth();
//     window.addEventListener("resize", setFromWidth);
//     return () => window.removeEventListener("resize", setFromWidth);
//   }, []);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "ArrowRight") setIndex((i) => (i + 1) % n);
//       if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + n) % n);
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [n]);

//   if (!items.length) return null;

//   // textual content (200-300 words split into 3 parts)
//   const longText = {
//     goodness:
//       "Veer Bharat oils are crafted with careful attention to purity and traditional techniques. Our Kachi Ghani and refined ranges are made from selected seeds and processed using temperature and hygiene controls to preserve natural flavour and nutrients. We prioritise full lab testing, clear labelling and tamper-evident packaging so the family can trust every bottle on the shelf.",
//     benefits:
//       "Health-forward and versatile — our oils bring balanced fatty-acid profiles suitable for a variety of Indian recipes. They help achieve crisp, golden textures for fried foods, retain aroma in shallow frying and contribute to overall dietary fat needs with quality fats. We source responsibly and work with small farmers so you get consistent taste with improved transparency and fair pricing.",
//     rating:
//       "Market reception has been strong in regional pilots — customers praise the authentic aroma and consistent performance across cooking methods. With quality assurance measures and an expanding distribution network, Veer Bharat is steadily gaining recognition as a reliable value brand in the edible oils segment.",
//   };

//   return (
//     <section ref={containerRef} className="max-w-7xl mx-auto px-6 mb-16">
//       <div className="grid gap-12 md:grid-cols-2 items-center">
//         {/* LEFT: text content */}
//         <div className="space-y-6">
//           <h2 className="text-5xl md:text-6xl font-extrabold text-[#1b2a3a] tracking-tight leading-tight">
//             {items[index].name}
//           </h2>

//           <p className="text-xl md:text-2xl text-slate-700 max-w-xl leading-relaxed font-medium">
//             {items[index].short}
//           </p>

//           {/* Enhanced content card with premium styling */}
//           <div className="mt-6 p-8 bg-white rounded-3xl shadow-xl border-2 border-amber-100 backdrop-blur-sm">
//             <h3 className="text-2xl font-bold mb-3 text-amber-600 flex items-center gap-2">
//               <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
//               Goodness
//             </h3>
//             <p className="text-base md:text-lg text-slate-700 leading-relaxed">{longText.goodness}</p>

//             <h3 className="text-2xl font-bold mt-6 mb-3 text-amber-600 flex items-center gap-2">
//               <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
//               Benefits
//             </h3>
//             <p className="text-base md:text-lg text-slate-700 leading-relaxed">{longText.benefits}</p>

//             <h3 className="text-2xl font-bold mt-6 mb-3 text-amber-600 flex items-center gap-2">
//               <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
//               Market Rating
//             </h3>
//             <p className="text-base md:text-lg text-slate-700 leading-relaxed">{longText.rating}</p>
//           </div>

//           <div className="mt-6">
//             <a
//               href={`/${items[index].slug}`}
//               className="inline-flex items-center gap-2 rounded-full px-8 py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
//             >
//               View Product →
//             </a>
//           </div>
//         </div>

//         {/* RIGHT: orbit visuals with navigation buttons on LEFT and RIGHT sides */}
//         <div className="relative w-full flex justify-center md:justify-end items-center gap-4">
//           {/* PREVIOUS BUTTON - LEFT SIDE */}
//           <button
//             onClick={() => setIndex((i) => (i - 1 + n) % n)}
//             aria-label="Previous"
//             className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 rounded-full bg-white shadow-lg hover:shadow-xl border-2 border-amber-400 hover:bg-amber-50 hover:scale-110 transition-all duration-300 flex items-center justify-center text-3xl md:text-4xl font-bold text-amber-600 z-50"
//           >
//             ‹
//           </button>

//           <div
//             className="relative w-[340px] h-[340px] md:w-[560px] md:h-[560px] rounded-3xl p-6 flex items-center justify-center"
//             style={{ borderRadius: 32 }}
//           >
//             {/* Animated gradient circle background */}
//             <motion.div
//               className="absolute inset-0 rounded-full"
//               style={{
//                 background: "radial-gradient(circle, rgba(251,191,36,0.1) 0%, rgba(251,191,36,0.05) 50%, transparent 100%)",
//               }}
//               animate={{ scale: [1, 1.05, 1] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             />

//             {/* Enhanced dashed circle with glow effect */}
//             <motion.svg
//               viewBox="0 0 300 300"
//               className="absolute inset-0 w-full h-full pointer-events-none"
//               animate={{ rotate: rotationDeg * 0.25 }}
//               transition={{ type: "spring", stiffness: 140, damping: 22 }}
//             >
//               <defs>
//                 <filter id="glow">
//                   <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
//                   <feMerge>
//                     <feMergeNode in="coloredBlur"/>
//                     <feMergeNode in="SourceGraphic"/>
//                   </feMerge>
//                 </filter>
//               </defs>
//               <circle 
//                 cx="150" 
//                 cy="150" 
//                 r="115" 
//                 stroke="#F59E0B" 
//                 strokeWidth="8" 
//                 fill="none" 
//                 strokeDasharray="8 12" 
//                 filter="url(#glow)"
//                 opacity="0.8"
//               />
//             </motion.svg>

//             {/* Place each item using left/top computed from angle + rotationDeg */}
//             {items.map((it, i) => {
//               const baseAngle = (i * 360) / n;
//               const totalAngle = baseAngle + rotationDeg;
//               const rad = ((totalAngle - 90) * Math.PI) / 180;
//               const x = Math.cos(rad) * radius;
//               const y = Math.sin(rad) * radius;
//               const isActive = i === index;
//               const size = isActive ? 240 : 110;
//               const scale = isActive ? 1 : 0.75;

//               return (
//                 <div
//                   key={it.slug}
//                   className="absolute cursor-pointer"
//                   onClick={() => setIndex(i)}
//                   style={{
//                     left: `calc(50% + ${x}px)`,
//                     top: `calc(50% + ${y}px)`,
//                     transform: `translate(-50%, -50%) scale(${scale})`,
//                     transition: "left 0.5s cubic-bezier(0.4, 0, 0.2, 1), top 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
//                     zIndex: isActive ? 50 : 10,
//                     width: size,
//                     height: size,
//                   }}
//                 >
//                   <div
//                     className="relative rounded-3xl overflow-hidden bg-white"
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       boxShadow: isActive 
//                         ? "0 25px 50px rgba(245, 158, 11, 0.35), 0 10px 30px rgba(0,0,0,0.2)" 
//                         : "0 10px 25px rgba(0,0,0,0.12)",
//                       border: isActive ? "3px solid #F59E0B" : "2px solid rgba(0,0,0,0.08)",
//                     }}
//                   >
//                     <img 
//                       src={it.image} 
//                       alt={it.name}
//                       loading="eager"
//                       style={{ 
//                         width: '100%',
//                         height: '100%',
//                         objectFit: 'cover',
//                         display: 'block'
//                       }}
//                       className={isActive ? "brightness-105" : "brightness-95"}
//                     />
//                     {isActive && (
//                       <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent pointer-events-none" />
//                     )}
//                   </div>
//                 </div>
//               );
//             })}

//             {/* Enhanced decorative mini at top center */}
//             <div className="absolute left-1/2 top-4 -translate-x-1/2 z-40">
//               <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white ring-4 ring-amber-400/30">
//                 <img 
//                   src={items[(index + 1) % n].image} 
//                   alt="mini"
//                   loading="eager"
//                   style={{ 
//                     width: '100%',
//                     height: '100%',
//                     objectFit: 'cover',
//                     display: 'block'
//                   }}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* NEXT BUTTON - RIGHT SIDE */}
//           <button
//             onClick={() => setIndex((i) => (i + 1) % n)}
//             aria-label="Next"
//             className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 rounded-full bg-white shadow-lg hover:shadow-xl border-2 border-amber-400 hover:bg-amber-50 hover:scale-110 transition-all duration-300 flex items-center justify-center text-3xl md:text-4xl font-bold text-amber-600 z-50"
//           >
//             ›
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ---------------- Main ProductsPage ---------------- */
// export default function ProductsPage() {
//   const [modalVideo, setModalVideo] = useState(null);
//   const closeModal = () => setModalVideo(null);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "Escape") {
//         closeModal();
//       }
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   /* ---------- Showcase items: 4 products ---------- */
//   const showcaseItems = [
//     {
//       slug: "soyabean-oil",
//       name: "Soyabean Oil",
//       short: "Light, versatile and nutrition-forward—lets ingredients shine without heaviness.",
//       image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&q=80",
//       price: "180",
//       video: "/product-demo.mp4"
//     },
//     {
//       slug: "mustard-oil",
//       name: "Mustard Oil",
//       short: "Traditional cold-pressed purity with authentic aroma and robust flavor for authentic Indian cooking.",
//       image: "https://images.unsplash.com/photo-1608797178974-15b35a64ede9?w=800&q=80",
//       price: "220",
//       video: "/product-demo.mp4"
//     },
//     {
//       slug: "rice-bran",
//       name: "Rice Bran Oil",
//       short: "Heart-healthy choice with balanced nutrition, high smoke point ideal for deep frying and everyday cooking.",
//       image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&q=80",
//       price: "195",
//       video: "/product-demo.mp4"
//     },
//     {
//       slug: "palm-oil",
//       name: "Palm Oil",
//       short: "Rich, versatile cooking oil perfect for traditional recipes, delivering consistent taste and texture.",
//       image: "https://images.unsplash.com/photo-1608797178974-15b35a64ede9?w=800&q=80",
//       price: "165",
//       video: "/product-demo.mp4"
//     }
//   ];

//   return (
//     // background applied to whole page as requested
//     <main style={{ background: "#fef9c3" }} className="min-h-screen py-12">
//       <div className="max-w-7xl mx-auto px-6 relative">
//         {/* ROTATING SHOWCASE (top) - 4 PRODUCTS */}
//         <RotatingShowcase items={showcaseItems} />

//         {/* PAGE HEADER with enhanced styling */}
//         <header className="mb-12 text-center">
//           <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
//             Our Full Range of Premium Products
//           </h1>
//           <p className="mt-3 text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
//             Handpicked edible oils & culinary essentials — crafted for taste, health and everyday confidence.
//           </p>
//         </header>

//         {/* PRODUCTS GRID with enhanced styling */}
//         <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
//           {products.map((p) => (
//             <article key={p.slug} className="relative group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
//               <div className="relative h-72 md:h-80 w-full overflow-hidden bg-gray-100">
//                 <img 
//                   src={p.image} 
//                   alt={p.name}
//                   loading="lazy"
//                   style={{ 
//                     width: '100%',
//                     height: '100%',
//                     objectFit: 'cover',
//                     display: 'block'
//                   }}
//                   className="group-hover:scale-110 transition-transform duration-500" 
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </div>

//               <div className="p-6 md:p-8">
//                 <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">{p.name}</h2>
//                 <p className="mt-2 text-gray-600 text-base md:text-lg leading-relaxed">{p.short}</p>

//                 <div className="mt-4 flex items-center gap-3">
//                   {p.price && (
//                     <span className="text-base md:text-lg font-bold px-4 py-2 rounded-full bg-gradient-to-r from-amber-50 to-amber-100 text-amber-700 border-2 border-amber-200">
//                       ₹{p.price}
//                     </span>
//                   )}
//                 </div>

//                 <div className="mt-6 flex items-center gap-3">
//                   <a 
//                     href={`/${p.slug}`}
//                     className="flex-1 text-center rounded-full px-6 py-3 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-base md:text-lg"
//                   >
//                     View Product →
//                   </a>
//                   <button 
//                     onClick={() => setModalVideo({ src: p.video || "/product-demo.mp4", name: p.name })} 
//                     className="rounded-full px-5 py-3 border-2 border-amber-400 hover:bg-amber-50 transition-all duration-300 font-semibold text-base md:text-lg"
//                   >
//                     Demo
//                   </button>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* VIDEO MODAL */}
//         <AnimatePresence>
//           {modalVideo && (
//             <motion.div
//               key="video-modal"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.18 }}
//               className="fixed inset-0 z-50 flex items-center justify-center p-6"
//             >
//               <div className="absolute inset-0 bg-black/70" onClick={closeModal} />
//               <motion.div initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.96, opacity: 0 }} transition={{ duration: 0.18 }} className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl bg-black">
//                 <div className="absolute right-3 top-3 z-20">
//                   <button onClick={closeModal} className="rounded-full bg-white/90 px-3 py-2 hover:bg-white transition">Close</button>
//                 </div>
//                 <video src={modalVideo.src} controls autoPlay className="w-full h-[60vh] md:h-[72vh] object-cover bg-black" />
//                 <div className="p-4 bg-gradient-to-t from-black/40 to-transparent text-white flex items-center justify-between">
//                   <div>
//                     <div className="text-lg font-bold">{modalVideo.name}</div>
//                     <div className="text-sm text-white/80">Veer Bharat — product demo</div>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </main>
//   );
// }







// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";

// // PRODUCTS DATA
// const products = [
//   {
//     slug: "soyabean-oil",
//     name: "Soyabean Oil",
//     short: "Light, versatile and nutrition-forward—lets ingredients shine without heaviness.",
//     image: "/images/soyabeennnn.jpg",
//     price: "180",
//     video: "/product-demo.mp4"
//   },
//   {
//     slug: "mustard-oil",
//     name: "Kachi Ghani Mustard Oil",
//     short: "Traditional cold-pressed purity with authentic aroma and robust flavor.",
//     image: "/images/musterddd.jpg",
//     price: "220",
//     video: "/product-demo.mp4"
//   },
//   {
//     slug: "rice-bran-oil",
//     name: "Rice Bran Oil",
//     short: "Heart-healthy choice with balanced nutrition, high smoke point ideal for deep frying.",
//     image: "/images/soyabeennnn.jpg",
//     price: "195",
//     video: "/product-demo.mp4"
//   },
//   {
//     slug: "palm-oil",
//     name: "Palm Oil",
//     short: "Rich, versatile cooking oil perfect for traditional recipes.",
//     image: "/images/musterddd.jpg",
//     price: "165",
//     video: "/product-demo.mp4"
//   },
//   {
//     slug: "sunflower-oil",
//     name: "Sunflower Oil",
//     short: "Light golden oil with neutral taste, perfect for all-purpose cooking.",
//     image: "/images/soyabeennnn.jpg",
//     price: "175",
//     video: "/product-demo.mp4"
//   },
//   {
//     slug: "brand-rice",
//     name: "Brand Rice",
//     short: "Premium quality rice with authentic aroma and perfect texture.",
//     image: "/images/musterddd.jpg",
//     price: "210",
//     video: "/product-demo.mp4"
//   }
// ];

// // Responsive Rotating Showcase
// function RotatingShowcase({ items = [] }) {
//   const n = items.length || 1;
//   const [index, setIndex] = useState(0);
//   const [radius, setRadius] = useState(140);
//   const containerRef = useRef(null);

//   const rotationDeg = index * (360 / n);

//   useEffect(() => {
//     function setFromWidth() {
//       if (!containerRef.current) return;
//       const w = containerRef.current.clientWidth;
//       setRadius(Math.min(Math.max(w * 0.18, 70), 180));
//     }
//     setFromWidth();
//     window.addEventListener("resize", setFromWidth);
//     return () => window.removeEventListener("resize", setFromWidth);
//   }, []);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "ArrowRight") setIndex((i) => (i + 1) % n);
//       if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + n) % n);
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [n]);

//   const longText = {
//     goodness: "Veer Bharat oils are crafted with careful attention to purity and traditional techniques. Our Kachi Ghani and refined ranges are made from selected seeds and processed using temperature and hygiene controls to preserve natural flavour and nutrients.",
//     benefits: "Health-forward and versatile — our oils bring balanced fatty-acid profiles suitable for a variety of Indian recipes. We source responsibly and work with small farmers so you get consistent taste with improved transparency and fair pricing.",
//     rating: "Market reception has been strong in regional pilots — customers praise the authentic aroma and consistent performance across cooking methods."
//   };

//   if (!items.length) return null;

//   return (
//     <section ref={containerRef} className="max-w-7xl mx-auto px-2 sm:px-4 mb-14 w-full">
//       <div className="grid gap-10 md:grid-cols-2 items-center">
//         {/* LEFT: Product Text */}
//         <div className="space-y-5 order-2 md:order-1">
//           <h2 className="text-3xl md:text-5xl font-extrabold text-[#1b2a3a] tracking-tight">
//             {items[index].name}
//           </h2>
//           <p className="text-base md:text-xl text-slate-700 font-medium">
//             {items[index].short}
//           </p>
//           <div className="mt-4 p-5 sm:p-8 bg-white rounded-3xl shadow-xl border-2 border-amber-100">
//             <h3 className="text-lg md:text-2xl font-bold mb-2 text-amber-600 flex items-center gap-2">
//               <span className="w-2 h-2 bg-amber-500 rounded-full"></span> Goodness
//             </h3>
//             <p className="text-base text-slate-700">{longText.goodness}</p>
//             <h3 className="text-lg md:text-2xl font-bold mt-5 mb-2 text-amber-600 flex items-center gap-2">
//               <span className="w-2 h-2 bg-amber-500 rounded-full"></span> Benefits
//             </h3>
//             <p className="text-base text-slate-700">{longText.benefits}</p>
//             <h3 className="text-lg md:text-2xl font-bold mt-5 mb-2 text-amber-600 flex items-center gap-2">
//               <span className="w-2 h-2 bg-amber-500 rounded-full"></span> Market Rating
//             </h3>
//             <p className="text-base text-slate-700">{longText.rating}</p>
//           </div>
//           <div className="mt-5">
//             <Link href={`/${items[index].slug}`}
//               className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
//             >
//               View Product →
//             </Link>
//           </div>
//         </div>

//         {/* RIGHT: Orbit - mobile-friendly! */}
//         <div className="relative flex items-center justify-center w-full min-h-[320px] md:min-h-[480px] order-1 md:order-2">
//           <button
//             onClick={() => setIndex((i) => (i - 1 + n) % n)}
//             aria-label="Previous"
//             className="absolute left-2 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg border-2 border-amber-400 hover:bg-amber-50 flex items-center justify-center text-2xl font-bold text-amber-600 md:static md:left-0"
//           >
//             ‹
//           </button>
//           <div className="relative w-[220px] h-[220px] xs:w-[270px] xs:h-[270px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] rounded-3xl flex items-center justify-center">
//             {/* Animated background */}
//             <motion.div
//               className="absolute inset-0 rounded-full"
//               style={{ background: "radial-gradient(circle, rgba(251,191,36,0.15) 0%, rgba(251,191,36,0.08) 70%, transparent 100%)" }}
//               animate={{ scale: [1, 1.05, 1] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             />
//             {/* Dashed orbit */}
//             <motion.svg
//               viewBox="0 0 300 300"
//               className="absolute inset-0 w-full h-full pointer-events-none"
//               animate={{ rotate: rotationDeg * 0.25 }}
//               transition={{ type: "spring", stiffness: 140, damping: 22 }}
//             >
//               <defs>
//                 <filter id="glow"><feGaussianBlur stdDeviation="3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
//               </defs>
//               <circle cx="150" cy="150" r="110" stroke="#F59E0B" strokeWidth="6" fill="none" strokeDasharray="8 12" filter="url(#glow)" opacity="0.8"/>
//             </motion.svg>
//             {/* Product images spaced around */}
//             {items.map((it, i) => {
//               const baseAngle = (i * 360) / n;
//               const totalAngle = baseAngle + rotationDeg;
//               const rad = ((totalAngle - 90) * Math.PI) / 180;
//               const x = Math.cos(rad) * radius;
//               const y = Math.sin(rad) * radius;
//               const isActive = i === index;
//               const size = isActive ? 120 : 65;
//               const scale = isActive ? 1 : 0.7;
//               return (
//                 <div
//                   key={it.slug}
//                   className="absolute cursor-pointer"
//                   onClick={() => setIndex(i)}
//                   style={{
//                     left: `calc(50% + ${x}px)`,
//                     top: `calc(50% + ${y}px)`,
//                     transform: `translate(-50%, -50%) scale(${scale})`,
//                     zIndex: isActive ? 50 : 10,
//                     width: size,
//                     height: size,
//                   }}
//                 >
//                   <div
//                     className="relative rounded-2xl overflow-hidden bg-white"
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       boxShadow: isActive
//                         ? "0 18px 36px rgba(245, 158, 11, 0.22), 0 5px 15px rgba(0,0,0,0.10)"
//                         : "0 6px 18px rgba(0,0,0,0.10)",
//                       border: isActive ? "2.5px solid #F59E0B" : "1.5px solid rgba(0,0,0,0.08)",
//                     }}
//                   >
//                     <img
//                       src={it.image}
//                       alt={it.name}
//                       style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                       className={isActive ? "brightness-105" : "brightness-95"}
//                     />
//                   </div>
//                 </div>
//               );
//             })}
//             {/* Mini at top center */}
//             <div className="absolute left-1/2 top-3 -translate-x-1/2 z-40">
//               <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-lg bg-white ring-2 ring-amber-400/30">
//                 <img
//                   src={items[(index + 1) % n].image}
//                   alt="mini"
//                   style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                 />
//               </div>
//             </div>
//           </div>
//           <button
//             onClick={() => setIndex((i) => (i + 1) % n)}
//             aria-label="Next"
//             className="absolute right-2 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg border-2 border-amber-400 hover:bg-amber-50 flex items-center justify-center text-2xl font-bold text-amber-600 md:static md:right-0"
//           >
//             ›
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default function ProductsPage() {
//   const [modalVideo, setModalVideo] = useState(null);
//   const closeModal = () => setModalVideo(null);

//   useEffect(() => {
//     const onKey = (e) => { if (e.key === "Escape") closeModal(); };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   // Top 4 for showcase
//   const showcaseItems = products.slice(0, 4);

//   // SIDEBAR/COLLAPSE-STYLE MENU (for mobile)
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   // dummy handlers for menu aside
//   const goHome = () => setSidebarOpen(false);
//   const goBlog = () => setSidebarOpen(false);
//   const [productsOpen, setProductsOpen] = useState(true);
//   const toggleProducts = () => setProductsOpen(p => !p);
//   const goAllProducts = () => setSidebarOpen(false);
//   const goSoyabeanOil = () => setSidebarOpen(false);
//   const goMustardOil = () => setSidebarOpen(false);
//   const goPalmOil = () => setSidebarOpen(false);
//   const prevProduct = () => {};
//   const nextProduct = () => {};
//   const closeMenu = () => setSidebarOpen(false);

//   return (
//     <main style={{ background: "#fef9c3" }} className="min-h-screen py-6 sm:py-12">
//       <div className="max-w-7xl mx-auto px-2 sm:px-6 relative w-full">
        
//         {/* MOBILE MENU OVERLAY BUTTON - Show only on mobile */}
//         <button
//           className="fixed z-50 top-5 left-5 bg-amber-400 hover:bg-amber-500 rounded-full w-12 h-12 flex items-center justify-center shadow-md md:hidden"
//           onClick={() => setSidebarOpen(true)}
//         >
//           <span className="text-3xl font-bold text-white">≡</span>
//         </button>

//         {/* Responsive Mobile/Tablet Sidebar/Drawer */}
//         {sidebarOpen && (
//           <div
//             className="fixed inset-0 z-[100] bg-black/40 flex justify-end md:hidden"
//             style={{}}
//           >
//             <aside
//               className="relative w-full max-w-xs bg-gradient-to-b from-[#f1e0f5] to-[#f7f5fa] rounded-bl-3xl rounded-tl-3xl shadow-lg min-h-screen flex flex-col overflow-y-auto"
//             >
//               {/* Header */}
//               <div className="flex items-center justify-between px-5 py-4 border-b border-white/30">
//                 <div className="flex items-center gap-2">
//                   <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
//                   <div>
//                     <div className="text-lg font-extrabold text-[#1b346d]">VEER BHARAT</div>
//                     <div className="text-xs font-semibold text-pink-700">वाह! मज़ा आ गया</div>
//                   </div>
//                 </div>
//                 <button
//                   onClick={closeMenu}
//                   className="bg-white hover:bg-pink-100 rounded-full p-2 shadow"
//                   aria-label="Close"
//                 >✕</button>
//               </div>
//               {/* Product/Carousel col */}
//               <div className="flex flex-col items-center py-5 px-2 w-full">
//                 <div className="relative w-40 h-40">
//                   <img
//                     src="/images/mustard-card.jpg"
//                     alt="Mustard Oil Card"
//                     className="rounded-2xl shadow-lg w-full h-full object-cover"
//                   />
//                   <button
//                     onClick={prevProduct}
//                     className="absolute left-[-18px] top-1/2 -translate-y-1/2 rounded-full bg-white border border-amber-400 shadow-lg w-7 h-7 flex items-center justify-center text-xl font-bold text-amber-600"
//                   >‹</button>
//                   <button
//                     onClick={nextProduct}
//                     className="absolute right-[-18px] top-1/2 -translate-y-1/2 rounded-full bg-white border border-amber-400 shadow-lg w-7 h-7 flex items-center justify-center text-xl font-bold text-amber-600"
//                   >›</button>
//                 </div>
//                 <div className="mt-2 text-center font-bold text-base text-amber-800">
//                   100% Nature Fresh<br />Kachi Ghani Mustard Oil
//                 </div>
//               </div>
//               {/* Menu nav */}
//               <nav className="flex flex-col gap-0.5 px-3 pb-6">
//                 <button className="flex items-center gap-2 px-4 py-3 bg-white rounded-xl mb-1 shadow" onClick={goHome}>
//                   <span className="material-icons text-amber-500">home</span>
//                   <span className="font-semibold text-[#1b346d]">Home</span>
//                 </button>
//                 <button className="flex items-center gap-2 px-4 py-3 bg-white rounded-xl mb-1 shadow" onClick={goBlog}>
//                   <span className="material-icons text-amber-500">article</span>
//                   <span className="font-semibold text-[#1b346d]">Blog</span>
//                 </button>
//                 {/* Products Dropdown */}
//                 <div className="bg-white rounded-xl shadow mb-2">
//                   <button onClick={toggleProducts} className="w-full flex items-center justify-between px-4 py-3 font-semibold text-[#1b346d]">
//                     <span className="flex items-center gap-2">
//                       <span className="material-icons text-amber-500">shopping_bag</span>
//                       Products
//                     </span>
//                     <span className="material-icons text-amber-500">{productsOpen ? "expand_less" : "expand_more"}</span>
//                   </button>
//                   {productsOpen && (
//                     <div className="flex flex-col gap-0.5 pb-2">
//                       <button onClick={goAllProducts} className="w-full text-left px-8 py-2 text-sm text-[#1b346d] hover:bg-amber-50 rounded">All Products</button>
//                       <button onClick={goSoyabeanOil} className="w-full text-left px-8 py-2 text-sm text-[#1b346d] hover:bg-amber-50 rounded">Soyabean Oil</button>
//                       <button onClick={goMustardOil} className="w-full text-left px-8 py-2 text-sm text-[#1b346d] hover:bg-amber-50 rounded">Mustard Oil</button>
//                       <button onClick={goPalmOil} className="w-full text-left px-8 py-2 text-sm text-[#1b346d] hover:bg-amber-50 rounded">Palm Oil</button>
//                     </div>
//                   )}
//                 </div>
//               </nav>
//             </aside>
//           </div>
//         )}

//         {/* Orbit Showcase - top */}
//         <RotatingShowcase items={showcaseItems} />

//         {/* Page header */}
//         <header className="mb-8 sm:mb-12 text-center">
//           <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-3 tracking-tight">
//             Our Full Range of Premium Products
//           </h1>
//           <p className="mt-2 text-base sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
//             Handpicked edible oils & culinary essentials — crafted for taste, health and everyday confidence.
//           </p>
//         </header>

//         {/* Products grid */}
//         <div className="grid gap-6 xs:gap-8 sm:gap-10 grid-cols-1 xs:grid-cols-2 lg:grid-cols-3">
//           {products.map((p) => (
//             <article
//               key={p.slug}
//               className="relative group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
//             >
//               <div className="relative h-56 xs:h-64 sm:h-72 md:h-80 w-full overflow-hidden">
//                 <img
//                   src={p.image}
//                   alt={p.name}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </div>
//               <div className="p-4 sm:p-6 md:p-8">
//                 <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">{p.name}</h2>
//                 <p className="mt-1 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">{p.short}</p>
//                 <div className="mt-3 flex items-center gap-2">
//                   {p.price && (
//                     <span className="text-base md:text-lg font-bold px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-50 to-amber-100 text-amber-700 border-2 border-amber-200">
//                       ₹{p.price}
//                     </span>
//                   )}
//                 </div>
//                 <div className="mt-5 flex flex-col xs:flex-row gap-2 xs:gap-3">
//                   <Link
//                     href={`/${p.slug}`}
//                     className="flex-1 text-center rounded-full px-4 py-2.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-base md:text-lg"
//                   >
//                     View Product →
//                   </Link>
//                   <button
//                     onClick={() => setModalVideo({ src: p.video || "/product-demo.mp4", name: p.name })}
//                     className="rounded-full px-4 py-2 xs:px-5 xs:py-3 border-2 border-amber-400 hover:bg-amber-50 transition-all duration-300 font-semibold text-base md:text-lg"
//                   >
//                     Demo
//                   </button>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* VIDEO MODAL */}
//         <AnimatePresence>
//           {modalVideo && (
//             <motion.div
//               key="video-modal"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.18 }}
//               className="fixed inset-0 z-50 flex items-center justify-center p-2 xs:p-4 sm:p-6"
//             >
//               <div className="absolute inset-0 bg-black/70" onClick={closeModal} />
//               <motion.div initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.96, opacity: 0 }} transition={{ duration: 0.18 }} className="relative w-full max-w-lg xs:max-w-2xl md:max-w-3xl rounded-2xl overflow-hidden shadow-2xl bg-black">
//                 <div className="absolute right-3 top-3 z-20">
//                   <button onClick={closeModal} className="rounded-full bg-white/90 px-3 py-2 hover:bg-white transition">Close</button>
//                 </div>
//                 <video src={modalVideo.src} controls autoPlay className="w-full h-[220px] xs:h-[330px] md:h-[60vh] object-cover bg-black" />
//                 <div className="p-3 xs:p-4 bg-gradient-to-t from-black/40 to-transparent text-white flex items-center justify-between">
//                   <div>
//                     <div className="text-base xs:text-lg font-bold">{modalVideo.name}</div>
//                     <div className="text-xs xs:text-sm text-white/80">Veer Bharat — product demo</div>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </main>
//   );
// }






// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";

// // PRODUCTS DATA
// const products = [
//   {
//     slug: "soyabean-oil",
//     name: "Soyabean Oil",
//     short: "Light, versatile and nutrition-forward—lets ingredients shine without heaviness.",
//     image: "/images/soyabeennnn.jpg",
//     price: "180",
//     video: "/product-demo.mp4"
//   },
//   {
//     slug: "mustard-oil",
//     name: "Kachi Ghani Mustard Oil",
//     short: "Traditional cold-pressed purity with authentic aroma and robust flavor.",
//     image: "/images/musterddd.jpg",
//     price: "220",
//     video: "/product-demo.mp4"
//   },
//   {
//     slug: "rice-bran-oil",
//     name: "Rice Bran Oil",
//     short: "Heart-healthy choice with balanced nutrition, high smoke point ideal for deep frying.",
//     image: "/images/soyabeennnn.jpg",
//     price: "195",
//     video: "/product-demo.mp4"
//   },
//   {
//     slug: "palm-oil",
//     name: "Palm Oil",
//     short: "Rich, versatile cooking oil perfect for traditional recipes.",
//     image: "/images/musterddd.jpg",
//     price: "165",
//     video: "/product-demo.mp4"
//   },
//   {
//     slug: "sunflower-oil",
//     name: "Sunflower Oil",
//     short: "Light golden oil with neutral taste, perfect for all-purpose cooking.",
//     image: "/images/soyabeennnn.jpg",
//     price: "175",
//     video: "/product-demo.mp4"
//   },
//   {
//     slug: "brand-rice",
//     name: "Brand Rice",
//     short: "Premium quality rice with authentic aroma and perfect texture.",
//     image: "/images/musterddd.jpg",
//     price: "210",
//     video: "/product-demo.mp4"
//   }
// ];

// // Responsive Rotating Showcase
// function RotatingShowcase({ items = [] }) {
//   const n = items.length || 1;
//   const [index, setIndex] = useState(0);
//   const [radius, setRadius] = useState(140);
//   const containerRef = useRef(null);

//   const rotationDeg = index * (360 / n);

//   useEffect(() => {
//     function setFromWidth() {
//       if (!containerRef.current) return;
//       const w = containerRef.current.clientWidth;
//       setRadius(Math.min(Math.max(w * 0.18, 70), 180));
//     }
//     setFromWidth();
//     window.addEventListener("resize", setFromWidth);
//     return () => window.removeEventListener("resize", setFromWidth);
//   }, []);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "ArrowRight") setIndex((i) => (i + 1) % n);
//       if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + n) % n);
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [n]);

//   const longText = {
//     goodness: "Veer Bharat oils are crafted with careful attention to purity and traditional techniques. Our Kachi Ghani and refined ranges are made from selected seeds and processed using temperature and hygiene controls to preserve natural flavour and nutrients.",
//     benefits: "Health-forward and versatile — our oils bring balanced fatty-acid profiles suitable for a variety of Indian recipes. We source responsibly and work with small farmers so you get consistent taste with improved transparency and fair pricing.",
//     rating: "Market reception has been strong in regional pilots — customers praise the authentic aroma and consistent performance across cooking methods."
//   };

//   if (!items.length) return null;

//   return (
//     <section ref={containerRef} className="max-w-7xl mx-auto px-2 sm:px-4 mb-14 w-full">
//       <div className="grid gap-10 md:grid-cols-2 items-center">
//         {/* LEFT: Product Text */}
//         <div className="space-y-5 order-2 md:order-1">
//           <h2 className="text-3xl md:text-5xl font-extrabold text-[#1b2a3a] tracking-tight">
//             {items[index].name}
//           </h2>
//           <p className="text-base md:text-xl text-slate-700 font-medium">
//             {items[index].short}
//           </p>
//           <div className="mt-4 p-5 sm:p-8 bg-white rounded-3xl shadow-xl border-2 border-amber-100">
//             <h3 className="text-lg md:text-2xl font-bold mb-2 text-amber-600 flex items-center gap-2">
//               <span className="w-2 h-2 bg-amber-500 rounded-full"></span> Goodness
//             </h3>
//             <p className="text-base text-slate-700">{longText.goodness}</p>
//             <h3 className="text-lg md:text-2xl font-bold mt-5 mb-2 text-amber-600 flex items-center gap-2">
//               <span className="w-2 h-2 bg-amber-500 rounded-full"></span> Benefits
//             </h3>
//             <p className="text-base text-slate-700">{longText.benefits}</p>
//             <h3 className="text-lg md:text-2xl font-bold mt-5 mb-2 text-amber-600 flex items-center gap-2">
//               <span className="w-2 h-2 bg-amber-500 rounded-full"></span> Market Rating
//             </h3>
//             <p className="text-base text-slate-700">{longText.rating}</p>
//           </div>
//           <div className="mt-5">
//             <Link href={`/${items[index].slug}`}
//               className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
//             >
//               View Product →
//             </Link>
//           </div>
//         </div>

//         {/* RIGHT: Orbit - mobile-friendly! */}
//         <div className="relative flex items-center justify-center w-full min-h-[320px] md:min-h-[480px] order-1 md:order-2">
//           <button
//             onClick={() => setIndex((i) => (i - 1 + n) % n)}
//             aria-label="Previous"
//             className="absolute left-2 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg border-2 border-amber-400 hover:bg-amber-50 flex items-center justify-center text-2xl font-bold text-amber-600 md:static md:left-0"
//           >
//             ‹
//           </button>
//           <div className="relative w-[220px] h-[220px] xs:w-[270px] xs:h-[270px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] rounded-3xl flex items-center justify-center">
//             {/* Animated background */}
//             <motion.div
//               className="absolute inset-0 rounded-full"
//               style={{ background: "radial-gradient(circle, rgba(251,191,36,0.15) 0%, rgba(251,191,36,0.08) 70%, transparent 100%)" }}
//               animate={{ scale: [1, 1.05, 1] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             />
//             {/* Dashed orbit */}
//             <motion.svg
//               viewBox="0 0 300 300"
//               className="absolute inset-0 w-full h-full pointer-events-none"
//               animate={{ rotate: rotationDeg * 0.25 }}
//               transition={{ type: "spring", stiffness: 140, damping: 22 }}
//             >
//               <defs>
//                 <filter id="glow"><feGaussianBlur stdDeviation="3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
//               </defs>
//               <circle cx="150" cy="150" r="110" stroke="#F59E0B" strokeWidth="6" fill="none" strokeDasharray="8 12" filter="url(#glow)" opacity="0.8"/>
//             </motion.svg>
//             {/* Product images spaced around */}
//             {items.map((it, i) => {
//               const baseAngle = (i * 360) / n;
//               const totalAngle = baseAngle + rotationDeg;
//               const rad = ((totalAngle - 90) * Math.PI) / 180;
//               const x = Math.cos(rad) * radius;
//               const y = Math.sin(rad) * radius;
//               const isActive = i === index;
//               const size = isActive ? 120 : 65;
//               const scale = isActive ? 1 : 0.7;
//               return (
//                 <div
//                   key={it.slug}
//                   className="absolute cursor-pointer"
//                   onClick={() => setIndex(i)}
//                   style={{
//                     left: `calc(50% + ${x}px)`,
//                     top: `calc(50% + ${y}px)`,
//                     transform: `translate(-50%, -50%) scale(${scale})`,
//                     zIndex: isActive ? 50 : 10,
//                     width: size,
//                     height: size,
//                   }}
//                 >
//                   <div
//                     className="relative rounded-2xl overflow-hidden bg-white"
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       boxShadow: isActive
//                         ? "0 18px 36px rgba(245, 158, 11, 0.22), 0 5px 15px rgba(0,0,0,0.10)"
//                         : "0 6px 18px rgba(0,0,0,0.10)",
//                       border: isActive ? "2.5px solid #F59E0B" : "1.5px solid rgba(0,0,0,0.08)",
//                     }}
//                   >
//                     <img
//                       src={it.image}
//                       alt={it.name}
//                       style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                       className={isActive ? "brightness-105" : "brightness-95"}
//                     />
//                   </div>
//                 </div>
//               );
//             })}
//             {/* Mini at top center */}
//             <div className="absolute left-1/2 top-3 -translate-x-1/2 z-40">
//               <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-lg bg-white ring-2 ring-amber-400/30">
//                 <img
//                   src={items[(index + 1) % n].image}
//                   alt="mini"
//                   style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                 />
//               </div>
//             </div>
//           </div>
//           <button
//             onClick={() => setIndex((i) => (i + 1) % n)}
//             aria-label="Next"
//             className="absolute right-2 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg border-2 border-amber-400 hover:bg-amber-50 flex items-center justify-center text-2xl font-bold text-amber-600 md:static md:right-0"
//           >
//             ›
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default function ProductsPage() {
//   const [modalVideo, setModalVideo] = useState(null);
//   const closeModal = () => setModalVideo(null);

//   useEffect(() => {
//     const onKey = (e) => { if (e.key === "Escape") closeModal(); };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   // Top 4 for showcase
//   const showcaseItems = products.slice(0, 4);

//   // SIDEBAR/COLLAPSE-STYLE MENU (for mobile)
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const goHome = () => setSidebarOpen(false);
//   const goBlog = () => setSidebarOpen(false);
//   const [productsOpen, setProductsOpen] = useState(true);
//   const toggleProducts = () => setProductsOpen(p => !p);
//   const goAllProducts = () => setSidebarOpen(false);
//   const goSoyabeanOil = () => setSidebarOpen(false);
//   const goMustardOil = () => setSidebarOpen(false);
//   const goPalmOil = () => setSidebarOpen(false);
//   const prevProduct = () => {};
//   const nextProduct = () => {};
//   const closeMenu = () => setSidebarOpen(false);

//   return (
//     <main style={{ background: "#fef9c3" }} className="min-h-screen py-6 sm:py-12">
//       <div className="max-w-7xl mx-auto px-2 sm:px-6 relative w-full">
        
//         {/* Responsive Mobile/Tablet Sidebar/Drawer */}
//         {sidebarOpen && (
//           <div
//             className="fixed inset-0 z-[200] bg-black/40 flex justify-end md:hidden"
//             onClick={(e) => {
//               if (e.target === e.currentTarget) closeMenu();
//             }}
//           >
//             <aside
//               className="relative w-full max-w-xs bg-gradient-to-b from-[#f1e0f5] to-[#f7f5fa] rounded-bl-3xl rounded-tl-3xl shadow-lg min-h-screen flex flex-col overflow-y-auto"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Header */}
//               <div className="flex items-center justify-between px-5 py-4 border-b border-white/30">
//                 <div className="flex items-center gap-2">
//                   <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
//                   <div>
//                     <div className="text-lg font-extrabold text-[#1b346d]">VEER BHARAT</div>
//                     <div className="text-xs font-semibold text-pink-700">वाह! मज़ा आ गया</div>
//                   </div>
//                 </div>
//                 <button
//                   onClick={closeMenu}
//                   className="bg-white hover:bg-pink-100 rounded-full p-2 shadow"
//                   aria-label="Close"
//                 >✕</button>
//               </div>
//               {/* Product/Carousel col */}
//               <div className="flex flex-col items-center py-5 px-2 w-full">
//                 <div className="relative w-40 h-40">
//                   <img
//                     src="/images/mustard-card.jpg"
//                     alt="Mustard Oil Card"
//                     className="rounded-2xl shadow-lg w-full h-full object-cover"
//                   />
//                   <button
//                     onClick={prevProduct}
//                     className="absolute left-[-18px] top-1/2 -translate-y-1/2 rounded-full bg-white border border-amber-400 shadow-lg w-7 h-7 flex items-center justify-center text-xl font-bold text-amber-600"
//                   >‹</button>
//                   <button
//                     onClick={nextProduct}
//                     className="absolute right-[-18px] top-1/2 -translate-y-1/2 rounded-full bg-white border border-amber-400 shadow-lg w-7 h-7 flex items-center justify-center text-xl font-bold text-amber-600"
//                   >›</button>
//                 </div>
//                 <div className="mt-2 text-center font-bold text-base text-amber-800">
//                   100% Nature Fresh<br />Kachi Ghani Mustard Oil
//                 </div>
//               </div>
//               {/* Menu nav */}
//               <nav className="flex flex-col gap-0.5 px-3 pb-6">
//                 <button className="flex items-center gap-2 px-4 py-3 bg-white rounded-xl mb-1 shadow" onClick={goHome}>
//                   <span className="material-icons text-amber-500">home</span>
//                   <span className="font-semibold text-[#1b346d]">Home</span>
//                 </button>
//                 <button className="flex items-center gap-2 px-4 py-3 bg-white rounded-xl mb-1 shadow" onClick={goBlog}>
//                   <span className="material-icons text-amber-500">article</span>
//                   <span className="font-semibold text-[#1b346d]">Blog</span>
//                 </button>
//                 {/* Products Dropdown */}
//                 <div className="bg-white rounded-xl shadow mb-2">
//                   <button onClick={toggleProducts} className="w-full flex items-center justify-between px-4 py-3 font-semibold text-[#1b346d]">
//                     <span className="flex items-center gap-2">
//                       <span className="material-icons text-amber-500">shopping_bag</span>
//                       Products
//                     </span>
//                     <span className="material-icons text-amber-500">{productsOpen ? "expand_less" : "expand_more"}</span>
//                   </button>
//                   {productsOpen && (
//                     <div className="flex flex-col gap-0.5 pb-2">
//                       <button onClick={goAllProducts} className="w-full text-left px-8 py-2 text-sm text-[#1b346d] hover:bg-amber-50 rounded">All Products</button>
//                       <button onClick={goSoyabeanOil} className="w-full text-left px-8 py-2 text-sm text-[#1b346d] hover:bg-amber-50 rounded">Soyabean Oil</button>
//                       <button onClick={goMustardOil} className="w-full text-left px-8 py-2 text-sm text-[#1b346d] hover:bg-amber-50 rounded">Mustard Oil</button>
//                       <button onClick={goPalmOil} className="w-full text-left px-8 py-2 text-sm text-[#1b346d] hover:bg-amber-50 rounded">Palm Oil</button>
//                     </div>
//                   )}
//                 </div>
//               </nav>
//             </aside>
//           </div>
//         )}

//         {/* Orbit Showcase - NO overlap with content */}
//         <RotatingShowcase items={showcaseItems} />

//         {/* Page header */}
//         <header className="mb-8 sm:mb-12 text-center">
//           <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-3 tracking-tight">
//             Our Full Range of Premium Products
//           </h1>
//           <p className="mt-2 text-base sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
//             Handpicked edible oils & culinary essentials — crafted for taste, health and everyday confidence.
//           </p>
//         </header>

//         {/* Products grid */}
//         <div className="grid gap-6 xs:gap-8 sm:gap-10 grid-cols-1 xs:grid-cols-2 lg:grid-cols-3">
//           {products.map((p) => (
//             <article
//               key={p.slug}
//               className="relative group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
//             >
//               <div className="relative h-56 xs:h-64 sm:h-72 md:h-80 w-full overflow-hidden">
//                 <img
//                   src={p.image}
//                   alt={p.name}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </div>
//               <div className="p-4 sm:p-6 md:p-8">
//                 <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">{p.name}</h2>
//                 <p className="mt-1 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">{p.short}</p>
//                 <div className="mt-3 flex items-center gap-2">
//                   {p.price && (
//                     <span className="text-base md:text-lg font-bold px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-50 to-amber-100 text-amber-700 border-2 border-amber-200">
//                       ₹{p.price}
//                     </span>
//                   )}
//                 </div>
//                 <div className="mt-5 flex flex-col xs:flex-row gap-2 xs:gap-3">
//                   <Link
//                     href={`/${p.slug}`}
//                     className="flex-1 text-center rounded-full px-4 py-2.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-base md:text-lg"
//                   >
//                     View Product →
//                   </Link>
//                   <button
//                     onClick={() => setModalVideo({ src: p.video || "/product-demo.mp4", name: p.name })}
//                     className="rounded-full px-4 py-2 xs:px-5 xs:py-3 border-2 border-amber-400 hover:bg-amber-50 transition-all duration-300 font-semibold text-base md:text-lg"
//                   >
//                     Demo
//                   </button>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* VIDEO MODAL */}
//         <AnimatePresence>
//           {modalVideo && (
//             <motion.div
//               key="video-modal"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.18 }}
//               className="fixed inset-0 z-[300] flex items-center justify-center p-2 xs:p-4 sm:p-6"
//             >
//               <div className="absolute inset-0 bg-black/70" onClick={closeModal} />
//               <motion.div initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.96, opacity: 0 }} transition={{ duration: 0.18 }} className="relative w-full max-w-lg xs:max-w-2xl md:max-w-3xl rounded-2xl overflow-hidden shadow-2xl bg-black">
//                 <div className="absolute right-3 top-3 z-20">
//                   <button onClick={closeModal} className="rounded-full bg-white/90 px-3 py-2 hover:bg-white transition">Close</button>
//                 </div>
//                 <video src={modalVideo.src} controls autoPlay className="w-full h-[220px] xs:h-[330px] md:h-[60vh] object-cover bg-black" />
//                 <div className="p-3 xs:p-4 bg-gradient-to-t from-black/40 to-transparent text-white flex items-center justify-between">
//                   <div>
//                     <div className="text-base xs:text-lg font-bold">{modalVideo.name}</div>
//                     <div className="text-xs xs:text-sm text-white/80">Veer Bharat — product demo</div>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </main>
//   );
// }



"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// PRODUCTS DATA
const products = [
  {
    slug: "soyabean-oil",
    name: "Soyabean Oil",
    short: "Light, versatile and nutrition-forward—lets ingredients shine without heaviness.",
    image: "/images/soyabeennnn.jpg",
    price: "180",
    video: "/product-demo.mp4"
  },
  {
    slug: "mustard-oil",
    name: "Kachi Ghani Mustard Oil",
    short: "Traditional cold-pressed purity with authentic aroma and robust flavor.",
    image: "/images/musterddd.jpg",
    price: "220",
    video: "/product-demo.mp4"
  },
  {
    slug: "rice-bran-oil",
    name: "Rice Bran Oil",
    short: "Heart-healthy choice with balanced nutrition, high smoke point ideal for deep frying.",
    image: "/images/soyabeennnn.jpg",
    price: "195",
    video: "/product-demo.mp4"
  },
  {
    slug: "palm-oil",
    name: "Palm Oil",
    short: "Rich, versatile cooking oil perfect for traditional recipes.",
    image: "/images/musterddd.jpg",
    price: "165",
    video: "/product-demo.mp4"
  },
  {
    slug: "sunflower-oil",
    name: "Sunflower Oil",
    short: "Light golden oil with neutral taste, perfect for all-purpose cooking.",
    image: "/images/soyabeennnn.jpg",
    price: "175",
    video: "/product-demo.mp4"
  },
  {
    slug: "brand-rice",
    name: "Brand Rice",
    short: "Premium quality rice with authentic aroma and perfect texture.",
    image: "/images/musterddd.jpg",
    price: "210",
    video: "/product-demo.mp4"
  }
];

// Responsive Rotating Showcase
function RotatingShowcase({ items = [] }) {
  const n = items.length || 1;
  const [index, setIndex] = useState(0);
  const [radius, setRadius] = useState(140);
  const containerRef = useRef(null);

  const rotationDeg = index * (360 / n);

  useEffect(() => {
    function setFromWidth() {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      setRadius(Math.min(Math.max(w * 0.18, 70), 180));
    }
    setFromWidth();
    window.addEventListener("resize", setFromWidth);
    return () => window.removeEventListener("resize", setFromWidth);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % n);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + n) % n);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [n]);

  const longText = {
    goodness: "Veer Bharat oils are crafted with careful attention to purity and traditional techniques. Our Kachi Ghani and refined ranges are made from selected seeds and processed using temperature and hygiene controls to preserve natural flavour and nutrients.",
    benefits: "Health-forward and versatile — our oils bring balanced fatty-acid profiles suitable for a variety of Indian recipes. We source responsibly and work with small farmers so you get consistent taste with improved transparency and fair pricing.",
    rating: "Market reception has been strong in regional pilots — customers praise the authentic aroma and consistent performance across cooking methods."
  };

  if (!items.length) return null;

  return (
    <section ref={containerRef} className="max-w-7xl mx-auto px-2 sm:px-4 mb-14 w-full relative">
      <div className="grid gap-10 md:grid-cols-2 items-center">
        {/* LEFT: Product Text */}
        <div className="space-y-5 order-2 md:order-1">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1b2a3a] tracking-tight">
            {items[index].name}
          </h2>
          <p className="text-base md:text-xl text-slate-700 font-medium">
            {items[index].short}
          </p>
          <div className="mt-4 p-5 sm:p-8 bg-white rounded-3xl shadow-xl border-2 border-amber-100">
            <h3 className="text-lg md:text-2xl font-bold mb-2 text-amber-600 flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-500 rounded-full"></span> Goodness
            </h3>
            <p className="text-base text-slate-700">{longText.goodness}</p>
            <h3 className="text-lg md:text-2xl font-bold mt-5 mb-2 text-amber-600 flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-500 rounded-full"></span> Benefits
            </h3>
            <p className="text-base text-slate-700">{longText.benefits}</p>
            <h3 className="text-lg md:text-2xl font-bold mt-5 mb-2 text-amber-600 flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-500 rounded-full"></span> Market Rating
            </h3>
            <p className="text-base text-slate-700">{longText.rating}</p>
          </div>
          <div className="mt-5">
            <Link href={`/${items[index].slug}`}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
            >
              View Product →
            </Link>
          </div>
        </div>

        {/* RIGHT: Orbit - FIXED Z-INDEX! */}
        <div className="relative flex items-center justify-center w-full min-h-[320px] md:min-h-[480px] order-1 md:order-2">
          <button
            onClick={() => setIndex((i) => (i - 1 + n) % n)}
            aria-label="Previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg border-2 border-amber-400 hover:bg-amber-50 flex items-center justify-center text-2xl font-bold text-amber-600 md:static md:left-0"
          >
            ‹
          </button>
          <div className="relative w-[220px] h-[220px] xs:w-[270px] xs:h-[270px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] rounded-3xl flex items-center justify-center">
            {/* Animated background - Z-INDEX 1 */}
            <motion.div
              className="absolute inset-0 rounded-full z-[1]"
              style={{ background: "radial-gradient(circle, rgba(251,191,36,0.15) 0%, rgba(251,191,36,0.08) 70%, transparent 100%)" }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Dashed orbit - Z-INDEX 2 */}
            <motion.svg
              viewBox="0 0 300 300"
              className="absolute inset-0 w-full h-full pointer-events-none z-[2]"
              animate={{ rotate: rotationDeg * 0.25 }}
              transition={{ type: "spring", stiffness: 140, damping: 22 }}
            >
              <defs>
                <filter id="glow"><feGaussianBlur stdDeviation="3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
              </defs>
              <circle cx="150" cy="150" r="110" stroke="#F59E0B" strokeWidth="6" fill="none" strokeDasharray="8 12" filter="url(#glow)" opacity="0.8"/>
            </motion.svg>
            {/* Product images spaced around - Z-INDEX 3 */}
            {items.map((it, i) => {
              const baseAngle = (i * 360) / n;
              const totalAngle = baseAngle + rotationDeg;
              const rad = ((totalAngle - 90) * Math.PI) / 180;
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;
              const isActive = i === index;
              const size = isActive ? 120 : 65;
              const scale = isActive ? 1 : 0.7;
              return (
                <div
                  key={it.slug}
                  className="absolute cursor-pointer z-[3]"
                  onClick={() => setIndex(i)}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: `translate(-50%, -50%) scale(${scale})`,
                    width: size,
                    height: size,
                  }}
                >
                  <div
                    className="relative rounded-2xl overflow-hidden bg-white"
                    style={{
                      width: "100%",
                      height: "100%",
                      boxShadow: isActive
                        ? "0 18px 36px rgba(245, 158, 11, 0.22), 0 5px 15px rgba(0,0,0,0.10)"
                        : "0 6px 18px rgba(0,0,0,0.10)",
                      border: isActive ? "2.5px solid #F59E0B" : "1.5px solid rgba(0,0,0,0.08)",
                    }}
                  >
                    <img
                      src={it.image}
                      alt={it.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      className={isActive ? "brightness-105" : "brightness-95"}
                    />
                  </div>
                </div>
              );
            })}
            {/* Mini at top center - Z-INDEX 4 */}
            <div className="absolute left-1/2 top-3 -translate-x-1/2 z-[4]">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-lg bg-white ring-2 ring-amber-400/30">
                <img
                  src={items[(index + 1) % n].image}
                  alt="mini"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
          <button
            onClick={() => setIndex((i) => (i + 1) % n)}
            aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg border-2 border-amber-400 hover:bg-amber-50 flex items-center justify-center text-2xl font-bold text-amber-600 md:static md:right-0"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

export default function ProductsPage() {
  const [modalVideo, setModalVideo] = useState(null);
  const closeModal = () => setModalVideo(null);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Top 4 for showcase
  const showcaseItems = products.slice(0, 4);

  // SIDEBAR/COLLAPSE-STYLE MENU (for mobile)
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const goHome = () => setSidebarOpen(false);
  const goBlog = () => setSidebarOpen(false);
  const [productsOpen, setProductsOpen] = useState(true);
  const toggleProducts = () => setProductsOpen(p => !p);
  const goAllProducts = () => setSidebarOpen(false);
  const goSoyabeanOil = () => setSidebarOpen(false);
  const goMustardOil = () => setSidebarOpen(false);
  const goPalmOil = () => setSidebarOpen(false);
  const prevProduct = () => {};
  const nextProduct = () => {};
  const closeMenu = () => setSidebarOpen(false);

  return (
    <main style={{ background: "#fef9c3" }} className="min-h-screen py-6 sm:py-12">
      {/* CONTAINER WITH PROPER Z-INDEX CONTROL */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 relative w-full">
        
        {/* Responsive Mobile/Tablet Sidebar/Drawer - Z-INDEX 200 */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-[200] bg-black/40 flex justify-end md:hidden"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeMenu();
            }}
          >
            <aside
              className="relative w-full max-w-xs bg-gradient-to-b from-[#f1e0f5] to-[#f7f5fa] rounded-bl-3xl rounded-tl-3xl shadow-lg min-h-screen flex flex-col overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/30">
                <div className="flex items-center gap-2">
                  <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
                  <div>
                    <div className="text-lg font-extrabold text-[#1b346d]">VEER BHARAT</div>
                    <div className="text-xs font-semibold text-pink-700">वाह! मज़ा आ गया</div>
                  </div>
                </div>
                <button
                  onClick={closeMenu}
                  className="bg-white hover:bg-pink-100 rounded-full p-2 shadow"
                  aria-label="Close"
                >✕</button>
              </div>
              {/* Product/Carousel col */}
              <div className="flex flex-col items-center py-5 px-2 w-full">
                <div className="relative w-40 h-40">
                  <img
                    src="/images/mustard-card.jpg"
                    alt="Mustard Oil Card"
                    className="rounded-2xl shadow-lg w-full h-full object-cover"
                  />
                  <button
                    onClick={prevProduct}
                    className="absolute left-[-18px] top-1/2 -translate-y-1/2 rounded-full bg-white border border-amber-400 shadow-lg w-7 h-7 flex items-center justify-center text-xl font-bold text-amber-600"
                  >‹</button>
                  <button
                    onClick={nextProduct}
                    className="absolute right-[-18px] top-1/2 -translate-y-1/2 rounded-full bg-white border border-amber-400 shadow-lg w-7 h-7 flex items-center justify-center text-xl font-bold text-amber-600"
                  >›</button>
                </div>
                <div className="mt-2 text-center font-bold text-base text-amber-800">
                  100% Nature Fresh<br />Kachi Ghani Mustard Oil
                </div>
              </div>
              {/* Menu nav */}
              <nav className="flex flex-col gap-0.5 px-3 pb-6">
                <button className="flex items-center gap-2 px-4 py-3 bg-white rounded-xl mb-1 shadow" onClick={goHome}>
                  <span className="material-icons text-amber-500">home</span>
                  <span className="font-semibold text-[#1b346d]">Home</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-3 bg-white rounded-xl mb-1 shadow" onClick={goBlog}>
                  <span className="material-icons text-amber-500">article</span>
                  <span className="font-semibold text-[#1b346d]">Blog</span>
                </button>
                {/* Products Dropdown */}
                <div className="bg-white rounded-xl shadow mb-2">
                  <button onClick={toggleProducts} className="w-full flex items-center justify-between px-4 py-3 font-semibold text-[#1b346d]">
                    <span className="flex items-center gap-2">
                      <span className="material-icons text-amber-500">shopping_bag</span>
                      Products
                    </span>
                    <span className="material-icons text-amber-500">{productsOpen ? "expand_less" : "expand_more"}</span>
                  </button>
                  {productsOpen && (
                    <div className="flex flex-col gap-0.5 pb-2">
                      <button onClick={goAllProducts} className="w-full text-left px-8 py-2 text-sm text-[#1b346d] hover:bg-amber-50 rounded">All Products</button>
                      <button onClick={goSoyabeanOil} className="w-full text-left px-8 py-2 text-sm text-[#1b346d] hover:bg-amber-50 rounded">Soyabean Oil</button>
                      <button onClick={goMustardOil} className="w-full text-left px-8 py-2 text-sm text-[#1b346d] hover:bg-amber-50 rounded">Mustard Oil</button>
                      <button onClick={goPalmOil} className="w-full text-left px-8 py-2 text-sm text-[#1b346d] hover:bg-amber-50 rounded">Palm Oil</button>
                    </div>
                  )}
                </div>
              </nav>
            </aside>
          </div>
        )}

        {/* Orbit Showcase - STAYS BELOW NAVBAR (no high z-index) */}
        <RotatingShowcase items={showcaseItems} />

        {/* Page header */}
        <header className="mb-8 sm:mb-12 text-center">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-3 tracking-tight">
            Our Full Range of Premium Products
          </h1>
          <p className="mt-2 text-base sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
            Handpicked edible oils & culinary essentials — crafted for taste, health and everyday confidence.
          </p>
        </header>

        {/* Products grid */}
        <div className="grid gap-6 xs:gap-8 sm:gap-10 grid-cols-1 xs:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.slug}
              className="relative group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-56 xs:h-64 sm:h-72 md:h-80 w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4 sm:p-6 md:p-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">{p.name}</h2>
                <p className="mt-1 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">{p.short}</p>
                <div className="mt-3 flex items-center gap-2">
                  {p.price && (
                    <span className="text-base md:text-lg font-bold px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-50 to-amber-100 text-amber-700 border-2 border-amber-200">
                      ₹{p.price}
                    </span>
                  )}
                </div>
                <div className="mt-5 flex flex-col xs:flex-row gap-2 xs:gap-3">
                  <Link
                    href={`/${p.slug}`}
                    className="flex-1 text-center rounded-full px-4 py-2.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-base md:text-lg"
                  >
                    View Product →
                  </Link>
                  <button
                    onClick={() => setModalVideo({ src: p.video || "/product-demo.mp4", name: p.name })}
                    className="rounded-full px-4 py-2 xs:px-5 xs:py-3 border-2 border-amber-400 hover:bg-amber-50 transition-all duration-300 font-semibold text-base md:text-lg"
                  >
                    Demo
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* VIDEO MODAL - HIGHEST Z-INDEX */}
        <AnimatePresence>
          {modalVideo && (
            <motion.div
              key="video-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-0 z-[300] flex items-center justify-center p-2 xs:p-4 sm:p-6"
            >
              <div className="absolute inset-0 bg-black/70" onClick={closeModal} />
              <motion.div initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.96, opacity: 0 }} transition={{ duration: 0.18 }} className="relative w-full max-w-lg xs:max-w-2xl md:max-w-3xl rounded-2xl overflow-hidden shadow-2xl bg-black">
                <div className="absolute right-3 top-3 z-20">
                  <button onClick={closeModal} className="rounded-full bg-white/90 px-3 py-2 hover:bg-white transition">Close</button>
                </div>
                <video src={modalVideo.src} controls autoPlay className="w-full h-[220px] xs:h-[330px] md:h-[60vh] object-cover bg-black" />
                <div className="p-3 xs:p-4 bg-gradient-to-t from-black/40 to-transparent text-white flex items-center justify-between">
                  <div>
                    <div className="text-base xs:text-lg font-bold">{modalVideo.name}</div>
                    <div className="text-xs xs:text-sm text-white/80">Veer Bharat — product demo</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}