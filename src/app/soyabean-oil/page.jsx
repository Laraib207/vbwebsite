// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";

// function RotatingShowcase({ items = [] }) {
//   const n = items.length || 1;
//   const [index, setIndex] = useState(0);
//   const [radius, setRadius] = useState(160);
//   const containerRef = useRef(null);
//   const rotationDeg = index * (360 / n);

//   useEffect(() => {
//     function setFromWidth() {
//       if (!containerRef.current) return;
//       const w = containerRef.current.clientWidth;
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

//   const longText = {
//     goodness: "Veer Bharat Soyabean Oil is refined through advanced processing techniques that preserve essential nutrients while ensuring lightness and purity. Rich in polyunsaturated fatty acids including omega-3 and omega-6, this oil is low in saturated fats. Our rigorous quality checks guarantee that each bottle meets international standards for edible oils, making it a trusted choice for modern kitchens focused on health and taste.",
//     benefits: "Light and versatile, soyabean oil is perfect for all types of cooking — from sautéing vegetables to deep frying snacks. Its neutral flavor doesn't overpower dishes, making it suitable for salad dressings and baking as well. The high vitamin E content acts as a natural antioxidant, supporting skin health and immunity. Its cholesterol-free formula makes it an excellent option for heart-healthy diets.",
//     rating: "Customers across urban and semi-urban markets have praised Veer Bharat Soyabean Oil for its consistent quality and affordable pricing. Food bloggers recommend it for its versatility in both Indian and continental recipes. Health-conscious families appreciate the transparency in sourcing and processing. Our brand continues to grow as a reliable everyday cooking oil with strong repeat purchase rates."
//   };

//   return (
//     <section ref={containerRef} className="max-w-7xl mx-auto px-6 mb-12">
//       <div className="grid gap-8 md:grid-cols-2 items-center">
//         <div className="space-y-5">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-[#1b2a3a]">{items[index].name}</h2>
//           <p className="text-lg text-slate-700 max-w-xl">{items[index].short}</p>
//           <div className="mt-4 p-6 bg-white rounded-2xl shadow-sm border">
//             <h3 className="text-xl font-semibold mb-2 text-green-700">Goodness</h3>
//             <p className="text-sm text-slate-700 leading-relaxed">{longText.goodness}</p>
//             <h3 className="text-xl font-semibold mt-4 mb-2 text-green-700">Benefits</h3>
//             <p className="text-sm text-slate-700 leading-relaxed">{longText.benefits}</p>
//             <h3 className="text-xl font-semibold mt-4 mb-2 text-green-700">Market Rating</h3>
//             <p className="text-sm text-slate-700 leading-relaxed">{longText.rating}</p>
//           </div>
//           <div className="mt-4 flex items-center gap-3">
//             <button onClick={() => setIndex((i) => (i - 1 + n) % n)} aria-label="Previous" className="w-12 h-12 rounded-full bg-white shadow-md border hover:scale-105 transition flex items-center justify-center text-2xl">‹</button>
//             <button onClick={() => setIndex((i) => (i + 1) % n)} aria-label="Next" className="w-12 h-12 rounded-full bg-white shadow-md border hover:scale-105 transition flex items-center justify-center text-2xl">›</button>
//             <Link href="/products" className="ml-4 inline-flex items-center gap-2 rounded-full px-4 py-2 bg-gradient-to-r from-green-400 to-green-500 text-white font-semibold shadow hover:shadow-lg transition">View All Products →</Link>
//           </div>
//         </div>
//         <div className="relative w-full flex justify-center md:justify-end">
//           <div className="relative w-[320px] h-[320px] md:w-[520px] md:h-[520px] rounded-3xl p-6 flex items-center justify-center" style={{ borderRadius: 28 }}>
//             <motion.svg viewBox="0 0 300 300" className="absolute inset-0 w-full h-full pointer-events-none" animate={{ rotate: rotationDeg * 0.25 }} transition={{ type: "spring", stiffness: 140, damping: 22 }}>
//               <circle cx="150" cy="150" r="108" stroke="#4ADE80" strokeWidth="6" fill="none" strokeDasharray="6 8" />
//             </motion.svg>
//             {items.map((it, i) => {
//               const baseAngle = (i * 360) / n;
//               const totalAngle = baseAngle + rotationDeg;
//               const rad = ((totalAngle - 90) * Math.PI) / 180;
//               const x = Math.cos(rad) * radius;
//               const y = Math.sin(rad) * radius;
//               const isActive = i === index;
//               const size = isActive ? 220 : 96;
//               const scale = isActive ? 1 : 0.78;
//               return (
//                 <div key={it.id} className="absolute" style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: `translate(-50%, -50%) scale(${scale})`, transition: "left 0.45s, top 0.45s, transform 0.35s", zIndex: isActive ? 50 : 10, width: size, height: size }}>
//                   <div className="relative rounded-2xl overflow-hidden bg-white" style={{ width: "100%", height: "100%", boxShadow: isActive ? "0 18px 34px rgba(0,0,0,0.18)" : "0 8px 18px rgba(0,0,0,0.09)", border: "1px solid rgba(0,0,0,0.06)" }}>
//                     <Image src={it.image} alt={it.name} fill style={{ objectFit: "cover" }} priority={isActive} />
//                   </div>
//                 </div>
//               );
//             })}
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

// export default function SoyabeanOilPage() {
//   const [modalVideo, setModalVideo] = useState(null);
//   const closeModal = () => setModalVideo(null);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "Escape") closeModal();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   const showcaseItems = [
//     { id: 1, name: "Premium Refined Soyabean Oil", short: "Light, healthy oil perfect for everyday cooking", image: "/images/soyabean-oil-1.jpg" },
//     { id: 2, name: "Heart-Healthy Soya Oil", short: "Rich in omega fatty acids and vitamin E", image: "/images/soyabean-oil-2.jpg" }
//   ];

//   const productVariants = [
//     { id: 1, name: "Refined Soyabean Oil 1L", price: "150", image: "/images/soyabean-oil-1.jpg", description: "Light and versatile soyabean oil for all your cooking needs", video: "/videos/soyabean-demo.mp4" },
//     { id: 2, name: "Premium Soyabean Oil 5L", price: "720", image: "/images/soyabean-oil-2.jpg", description: "Family pack of heart-healthy soyabean oil at great value", video: "/videos/soyabean-demo.mp4" }
//   ];

//   return (
//     <main style={{ background: "#f0fdf4" }} className="min-h-screen py-12">
//       <div className="max-w-7xl mx-auto px-6 relative">
//         <RotatingShowcase items={showcaseItems} />
//         <header className="mb-8 text-center">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Veer Bharat Soyabean Oil</h1>
//           <p className="mt-2 text-gray-800 max-w-2xl mx-auto">Light, refined, and heart-healthy soyabean oil — your perfect companion for nutritious everyday cooking.</p>
//         </header>
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {productVariants.map((p) => (
//             <article key={p.id} className="relative group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
//               <div className="relative h-64 md:h-72 w-full overflow-hidden">
//                 <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
//               </div>
//               <div className="p-5 md:p-6">
//                 <h2 className="text-xl md:text-2xl font-extrabold text-gray-900">{p.name}</h2>
//                 <p className="mt-1 text-gray-600 text-sm md:text-base">{p.description}</p>
//                 <div className="mt-3 flex items-center gap-2">
//                   <span className="text-sm font-semibold px-3 py-1 rounded-full bg-green-50 text-green-700 border">₹{p.price}</span>
//                   <span className="text-xs text-blue-600 font-medium">✓ Heart Healthy</span>
//                 </div>
//                 <div className="mt-4 flex items-center gap-2">
//                   <button className="rounded-full px-4 py-2 bg-green-500 text-white font-bold shadow hover:bg-green-600 transition">Add to Cart</button>
//                   <button onClick={() => setModalVideo({ src: p.video, name: p.name })} className="rounded-full px-3 py-2 border hover:bg-gray-50 transition">Demo</button>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//         <AnimatePresence>
//           {modalVideo && (
//             <motion.div key="video-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }} className="fixed inset-0 z-50 flex items-center justify-center p-6">
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
// import Image from "next/image";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";


// /* ---------------- Rotating Showcase with 5 Product Sizes ---------------- */
// function RotatingShowcase({ items = [] }) {
//   const n = items.length || 1;
//   const [index, setIndex] = useState(0);
//   const [radius, setRadius] = useState(200);
//   const containerRef = useRef(null);

//   const rotationDeg = index * (360 / n);

//   useEffect(() => {
//     function setFromWidth() {
//       if (!containerRef.current) return;
//       const w = containerRef.current.clientWidth;
//       const r = Math.min(Math.max(w * 0.22, 140), 300);
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

//   const currentItem = items[index];

//   return (
//     <section ref={containerRef} className="max-w-7xl mx-auto px-6 mb-20">
//       <div className="grid gap-14 lg:grid-cols-2 items-center">
//         {/* LEFT: Product Details */}
//         <motion.div 
//           key={index}
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className="space-y-7"
//         >
//           <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold text-base shadow-xl">
//             ⭐ Featured Product
//           </div>

//           <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
//             {currentItem.name}
//           </h2>

//           <p className="text-2xl text-gray-700 font-medium leading-relaxed">
//             {currentItem.short}
//           </p>

//           <div className="flex items-center gap-4">
//             <span className="text-4xl font-black text-green-600">₹{currentItem.price}</span>
//             <span className="text-lg text-gray-500">({currentItem.size})</span>
//           </div>

//           {/* Benefits Cards */}
//           <div className="space-y-4">
//             <div className="p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl border-2 border-green-200 shadow-lg">
//               <h3 className="text-xl font-bold mb-2 text-green-700 flex items-center gap-2">
//                 <span>🌱</span> Premium Refined Quality
//               </h3>
//               <p className="text-base text-gray-700 leading-relaxed">
//                 Veer Bharat Soyabean Oil is refined using advanced techniques that preserve essential nutrients. Rich in polyunsaturated fatty acids including omega-3 and omega-6, low in saturated fats, perfect for modern health-conscious kitchens.
//               </p>
//             </div>

//             <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl border-2 border-blue-200 shadow-lg">
//               <h3 className="text-xl font-bold mb-2 text-blue-700 flex items-center gap-2">
//                 <span>💙</span> Heart-Healthy Benefits
//               </h3>
//               <p className="text-base text-gray-700 leading-relaxed">
//                 Light and versatile for all cooking styles - sautéing, frying, baking. Neutral flavor doesn't overpower dishes. High vitamin E content supports immunity. Cholesterol-free formula perfect for heart-healthy diets.
//               </p>
//             </div>

//             <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl border-2 border-purple-200 shadow-lg">
//               <h3 className="text-xl font-bold mb-2 text-purple-700 flex items-center gap-2">
//                 <span>⭐</span> Customer Trusted
//               </h3>
//               <p className="text-base text-gray-700 leading-relaxed">
//                 Praised across urban markets for consistent quality and affordability. Food bloggers recommend for versatility in Indian and continental recipes. Health-conscious families value transparency in sourcing.
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-4 pt-4">
//             <button className="px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-teal-500 text-white text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
//               🛒 Add to Cart
//             </button>
//             <Link
//               href="/products"
//               className="px-8 py-4 rounded-full border-2 border-green-500 text-green-600 text-lg font-bold hover:bg-green-50 transition-all duration-300"
//             >
//               View All Products →
//             </Link>
//           </div>
//         </motion.div>

//         {/* RIGHT: Circular Carousel */}
//         <div className="relative w-full flex flex-col items-center gap-8">
//           {/* Navigation Controls */}
//           <div className="flex items-center justify-center gap-6 z-20">
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setIndex((i) => (i - 1 + n) % n)}
//               aria-label="Previous Size"
//               className="w-16 h-16 rounded-full bg-white shadow-2xl flex items-center justify-center text-4xl font-bold text-green-600 border-2 border-green-400 hover:bg-green-50 transition-all"
//             >
//               ‹
//             </motion.button>

//             <div className="text-center">
//               <div className="text-2xl font-black text-gray-900">
//                 {index + 1} / {n}
//               </div>
//               <div className="text-base text-gray-600">Available Sizes</div>
//             </div>

//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setIndex((i) => (i + 1) % n)}
//               aria-label="Next Size"
//               className="w-16 h-16 rounded-full bg-white shadow-2xl flex items-center justify-center text-4xl font-bold text-green-600 border-2 border-green-400 hover:bg-green-50 transition-all"
//             >
//               ›
//             </motion.button>
//           </div>

//           {/* Circular Display */}
//           <div className="relative w-[400px] h-[400px] md:w-[600px] md:h-[600px]">
//             {/* Animated Circle */}
//             <motion.svg
//               viewBox="0 0 300 300"
//               className="absolute inset-0 w-full h-full pointer-events-none"
//               animate={{ rotate: rotationDeg * 0.2 }}
//               transition={{ type: "spring", stiffness: 100, damping: 20 }}
//             >
//               <defs>
//                 <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#10B981" />
//                   <stop offset="50%" stopColor="#14B8A6" />
//                   <stop offset="100%" stopColor="#06B6D4" />
//                 </linearGradient>
//               </defs>
//               <circle
//                 cx="150"
//                 cy="150"
//                 r="130"
//                 stroke="url(#circleGradient)"
//                 strokeWidth="10"
//                 fill="none"
//                 strokeDasharray="10 15"
//                 opacity="0.6"
//               />
//             </motion.svg>

//             {/* Product Images Orbiting */}
//             {items.map((item, i) => {
//               const baseAngle = (i * 360) / n;
//               const totalAngle = baseAngle + rotationDeg;
//               const rad = ((totalAngle - 90) * Math.PI) / 180;
//               const x = Math.cos(rad) * radius;
//               const y = Math.sin(rad) * radius;
//               const isActive = i === index;
//               const size = isActive ? 280 : 120;
//               const scale = isActive ? 1 : 0.7;

//               return (
//                 <motion.div
//                   key={item.id}
//                   className="absolute cursor-pointer"
//                   style={{
//                     left: `calc(50% + ${x}px)`,
//                     top: `calc(50% + ${y}px)`,
//                     transform: `translate(-50%, -50%) scale(${scale})`,
//                     zIndex: isActive ? 60 : 15,
//                     width: size,
//                     height: size,
//                   }}
//                   onClick={() => setIndex(i)}
//                   whileHover={{ scale: scale * 1.05 }}
//                   transition={{
//                     left: { duration: 0.6 },
//                     top: { duration: 0.6 },
//                     transform: { duration: 0.4 },
//                   }}
//                 >
//                   <div
//                     className="relative rounded-3xl overflow-hidden bg-white"
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       boxShadow: isActive
//                         ? "0 30px 60px rgba(16, 185, 129, 0.4), 0 15px 40px rgba(0,0,0,0.3)"
//                         : "0 10px 30px rgba(0,0,0,0.15)",
//                       border: isActive ? "4px solid #10B981" : "2px solid rgba(0,0,0,0.1)",
//                     }}
//                   >
//                     <Image
//                       src={item.image}
//                       alt={item.name}
//                       fill
//                       style={{ objectFit: "cover" }}
//                       priority={isActive}
//                     />
//                     {isActive && (
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
//                     )}
//                     {isActive && (
//                       <div className="absolute bottom-4 left-4 right-4 text-white">
//                         <div className="text-xl font-black drop-shadow-lg">
//                           {item.size}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </motion.div>
//               );
//             })}

//             {/* Center Logo */}
//             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
//               <motion.div
//                 className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-green-400 to-teal-500"
//                 animate={{ rotate: -rotationDeg }}
//                 transition={{ type: "spring", stiffness: 100, damping: 20 }}
//               >
//                 <Image
//                   src="/logo.png"
//                   alt="Veer Bharat"
//                   width={112}
//                   height={112}
//                   style={{ objectFit: "cover" }}
//                 />
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// /* ---------------- Why Choose Section ---------------- */
// function WhyChooseSection() {
//   const features = [
//     {
//       icon: "🏆",
//       title: "Premium Refined",
//       description: "Advanced refining process preserves nutrients while ensuring lightness and purity for modern cooking"
//     },
//     {
//       icon: "💚",
//       title: "Heart Healthy",
//       description: "Rich in polyunsaturated fats, omega-3 and omega-6, low saturated fat, cholesterol-free formula"
//     },
//     {
//       icon: "🌟",
//       title: "Vitamin E Rich",
//       description: "High vitamin E content acts as natural antioxidant supporting immunity and healthy skin"
//     },
//     {
//       icon: "🍳",
//       title: "Versatile Cooking",
//       description: "Perfect for all cooking methods - frying, sautéing, baking, salad dressings with neutral flavor"
//     },
//     {
//       icon: "✅",
//       title: "Quality Certified",
//       description: "Rigorous quality checks ensure international standards compliance for safe, pure edible oil"
//     },
//     {
//       icon: "💰",
//       title: "Great Value",
//       description: "Affordable pricing without compromising quality - excellent value for health-conscious families"
//     }
//   ];

//   return (
//     <section className="max-w-7xl mx-auto px-6 mb-20">
//       <div className="text-center mb-14">
//         <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg mb-6 shadow-xl">
//           ✨ Why Customers Love Us
//         </div>
//         <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
//           Why Choose Veer Bharat?
//         </h2>
//         <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
//           Experience the perfect blend of health, taste, and versatility in every drop
//         </p>
//       </div>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {features.map((feature, idx) => (
//           <motion.div
//             key={idx}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: idx * 0.1 }}
//             whileHover={{ y: -8 }}
//             className="p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-green-400"
//           >
//             <div className="text-6xl mb-4">{feature.icon}</div>
//             <h3 className="text-2xl font-black text-gray-900 mb-3">{feature.title}</h3>
//             <p className="text-base text-gray-600 leading-relaxed">{feature.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


// /* ---------------- Product Variants Grid ---------------- */
// function ProductVariantsGrid({ products }) {
//   const [modalVideo, setModalVideo] = useState(null);

//   return (
//     <>
//       <section className="max-w-7xl mx-auto px-6 mb-20">
//         <div className="text-center mb-14">
//           <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
//             Choose Your Perfect Size
//           </h2>
//           <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
//             From kitchen essentials to bulk packs - we have the right size for every need
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {products.map((product) => (
//             <motion.article
//               key={product.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -10 }}
//               className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden border-2 border-transparent hover:border-green-400 transition-all duration-500"
//             >
//               {product.popular && (
//                 <div className="absolute top-5 right-5 z-10 px-5 py-2 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-bold shadow-xl">
//                   🔥 Best Seller
//                 </div>
//               )}

//               <div className="relative h-80 w-full overflow-hidden bg-gradient-to-br from-green-50 to-teal-50">
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   fill
//                   className="object-cover group-hover:scale-110 transition-transform duration-700"
//                 />
//               </div>

//               <div className="p-7">
//                 <div className="text-sm font-bold text-green-600 mb-2">{product.size}</div>
//                 <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
//                   {product.name}
//                 </h3>
//                 <p className="text-base text-gray-600 leading-relaxed mb-4">
//                   {product.description}
//                 </p>

//                 <div className="flex items-center gap-3 mb-6">
//                   <span className="text-3xl font-black text-green-600">₹{product.price}</span>
//                   {product.originalPrice && (
//                     <span className="text-lg text-gray-400 line-through">₹{product.originalPrice}</span>
//                   )}
//                   {product.discount && (
//                     <span className="text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
//                       {product.discount}% OFF
//                     </span>
//                   )}
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <button className="flex-1 text-center rounded-full px-6 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white text-lg font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
//                     🛒 Add to Cart
//                   </button>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => setModalVideo({ src: product.video, name: product.name })}
//                     className="rounded-full px-5 py-4 border-2 border-green-500 text-green-600 font-bold hover:bg-green-50 transition-all text-lg"
//                   >
//                     🎥
//                   </motion.button>
//                 </div>
//               </div>
//             </motion.article>
//           ))}
//         </div>
//       </section>

//       {/* Video Modal */}
//       <AnimatePresence>
//         {modalVideo && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
//             onClick={() => setModalVideo(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               className="relative max-w-5xl w-full rounded-3xl overflow-hidden shadow-2xl bg-black"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button
//                 onClick={() => setModalVideo(null)}
//                 className="absolute right-5 top-5 z-20 rounded-full bg-white/90 px-6 py-3 text-lg font-bold hover:bg-white transition"
//               >
//                 ✕ Close
//               </button>
//               <video
//                 src={modalVideo.src}
//                 controls
//                 autoPlay
//                 className="w-full h-[70vh] object-cover"
//               />
//               <div className="p-6 bg-gradient-to-t from-black to-transparent text-white">
//                 <div className="text-2xl font-bold">{modalVideo.name}</div>
//                 <div className="text-lg text-white/80 mt-1">
//                   Veer Bharat — Premium Soyabean Oil Demo
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }


// /* ---------------- Main Soyabean Oil Page ---------------- */
// export default function SoyabeanOilPage() {
//   // 5 Product Sizes for Carousel
//   const showcaseItems = [
//     {
//       id: 1,
//       name: "Premium 15 Liter Pack",
//       short: "Bulk pack perfect for commercial kitchens and large families",
//       size: "15 Liter Tin",
//       price: "2,250",
//       image: "/images/soyabean-15l.jpg",
//     },
//     {
//       id: 2,
//       name: "Family Pack 5 Liter Jar",
//       short: "Convenient jar packaging for everyday cooking needs",
//       size: "5 Liter Jar",
//       price: "750",
//       image: "/images/soyabean-5l-jar.jpg",
//     },
//     {
//       id: 3,
//       name: "Standard 1 Liter Bottle",
//       short: "Most popular size for regular household use",
//       size: "1 Liter Bottle",
//       price: "155",
//       image: "/images/soyabean-1l.jpg",
//     },
//     {
//       id: 4,
//       name: "Handy 500ml Bottle",
//       short: "Compact size perfect for small kitchens and trials",
//       size: "500ml Bottle",
//       price: "80",
//       image: "/images/soyabean-500ml.jpg",
//     },
//     {
//       id: 5,
//       name: "Travel 200ml Bottle",
//       short: "Portable size ideal for travel and outdoor cooking",
//       size: "200ml Bottle",
//       price: "35",
//       image: "/images/soyabean-200ml.jpg",
//     },
//   ];

//   // Product Variants for Grid
//   const productVariants = [
//     {
//       id: 1,
//       name: "Premium 15 Liter Tin",
//       size: "15 Liter",
//       price: "2,250",
//       originalPrice: "2,500",
//       discount: 10,
//       image: "/images/soyabean-15l.jpg",
//       description: "Best value bulk pack for restaurants, caterers, and large families. Heart-healthy refined oil.",
//       video: "/videos/soyabean-demo.mp4",
//       popular: true,
//     },
//     {
//       id: 2,
//       name: "Family 5 Liter Jar",
//       size: "5 Liter",
//       price: "750",
//       originalPrice: "850",
//       discount: 12,
//       image: "/images/soyabean-5l-jar.jpg",
//       description: "Convenient jar with easy-pour spout. Perfect for families cooking with versatile, healthy oil.",
//       video: "/videos/soyabean-demo.mp4",
//       popular: true,
//     },
//     {
//       id: 3,
//       name: "Standard 1 Liter Bottle",
//       size: "1 Liter",
//       price: "155",
//       image: "/images/soyabean-1l.jpg",
//       description: "Our most popular size! Perfect balance of convenience and value for everyday cooking.",
//       video: "/videos/soyabean-demo.mp4",
//       popular: true,
//     },
//     {
//       id: 4,
//       name: "Compact 500ml Bottle",
//       size: "500ml",
//       price: "80",
//       image: "/images/soyabean-500ml.jpg",
//       description: "Ideal for small households, bachelors, or trying out Veer Bharat quality first time.",
//       video: "/videos/soyabean-demo.mp4",
//     },
//     {
//       id: 5,
//       name: "Travel 200ml Bottle",
//       size: "200ml",
//       price: "35",
//       image: "/images/soyabean-200ml.jpg",
//       description: "Ultra-portable size perfect for camping, picnics, or keeping in your office pantry.",
//       video: "/videos/soyabean-demo.mp4",
//     },
//   ];

//   return (
//     <main style={{ background: "#f0fdf4" }} className="min-h-screen py-16">
//       {/* Page Header */}
//       <div className="max-w-7xl mx-auto px-6 text-center mb-16">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="inline-block px-7 py-4 rounded-full bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 text-white font-bold text-xl mb-8 shadow-2xl">
//             🌱 Veer Bharat Premium Soyabean Oil
//           </div>
//           <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-6 leading-tight">
//             Heart-Healthy Refined Oil
//           </h1>
//           <p className="text-2xl md:text-3xl text-gray-700 max-w-4xl mx-auto font-medium leading-relaxed">
//             Light, versatile, and nutrition-forward soyabean oil perfect for all your healthy cooking needs
//           </p>
//         </motion.div>
//       </div>

//       {/* Rotating Showcase */}
//       <RotatingShowcase items={showcaseItems} />

//       {/* Why Choose Section */}
//       <WhyChooseSection />

//       {/* Product Variants Grid */}
//       <ProductVariantsGrid products={productVariants} />

//       {/* CTA Section */}
//       <section className="max-w-7xl mx-auto px-6 mb-16">
//         <div className="bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 rounded-3xl p-12 text-center text-white shadow-2xl">
//           <h2 className="text-5xl font-black mb-6">Ready for Healthier Cooking?</h2>
//           <p className="text-2xl mb-8 max-w-2xl mx-auto">
//             Order now and get premium quality soyabean oil delivered fresh to your doorstep
//           </p>
//           <div className="flex items-center justify-center gap-4">
//             <button className="px-10 py-5 rounded-full bg-white text-green-600 text-xl font-bold shadow-xl hover:scale-105 transition-all duration-300">
//               🛒 Order Now
//             </button>
//             <Link
//               href="/contact"
//               className="px-10 py-5 rounded-full border-2 border-white text-white text-xl font-bold hover:bg-white/10 transition-all duration-300"
//             >
//               📞 Contact Us
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }




"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Showcase Items Data
const showcaseItems = [
  {
    id: 1,
    name: "Premium 15 Liter Pack",
    short: "Bulk pack perfect for commercial kitchens and large families",
    size: "15 Liter Tin",
    price: "2,250",
    image: "/images/soyabean-15l.jpg",
  },
  {
    id: 2,
    name: "Family Pack 5 Liter Jar",
    short: "Convenient jar packaging for everyday cooking needs",
    size: "5 Liter Jar",
    price: "750",
    image: "/images/soyabean-5l-jar.jpg",
  },
  {
    id: 3,
    name: "Standard 1 Liter Bottle",
    short: "Most popular size for regular household use",
    size: "1 Liter Bottle",
    price: "155",
    image: "/images/soyabean-1l.jpg",
  },
  {
    id: 4,
    name: "Handy 500ml Bottle",
    short: "Compact size perfect for small kitchens and trials",
    size: "500ml Bottle",
    price: "80",
    image: "/images/soyabean-500ml.jpg",
  },
  {
    id: 5,
    name: "Travel 200ml Bottle",
    short: "Portable size ideal for travel and outdoor cooking",
    size: "200ml Bottle",
    price: "35",
    image: "/images/soyabean-200ml.jpg",
  },
];

// Product Variants Data
const productVariants = [
  {
    id: 1,
    name: "Premium 15 Liter Tin",
    size: "15 Liter",
    price: "2,250",
    originalPrice: "2,500",
    discount: 10,
    image: "/images/soyabean-15l.jpg",
    description: "Best value bulk pack for restaurants, caterers, and large families. Heart-healthy refined oil.",
    video: "/videos/soyabean-demo.mp4",
    popular: true,
  },
  {
    id: 2,
    name: "Family 5 Liter Jar",
    size: "5 Liter",
    price: "750",
    originalPrice: "850",
    discount: 12,
    image: "/images/soyabean-5l-jar.jpg",
    description: "Convenient jar with easy-pour spout. Perfect for families cooking with versatile, healthy oil.",
    video: "/videos/soyabean-demo.mp4",
    popular: true,
  },
  {
    id: 3,
    name: "Standard 1 Liter Bottle",
    size: "1 Liter",
    price: "155",
    image: "/images/soyabean-1l.jpg",
    description: "Our most popular size! Perfect balance of convenience and value for everyday cooking.",
    video: "/videos/soyabean-demo.mp4",
    popular: true,
  },
  {
    id: 4,
    name: "Compact 500ml Bottle",
    size: "500ml",
    price: "80",
    image: "/images/soyabean-500ml.jpg",
    description: "Ideal for small households, bachelors, or trying out Veer Bharat quality first time.",
    video: "/videos/soyabean-demo.mp4",
  },
  {
    id: 5,
    name: "Travel 200ml Bottle",
    size: "200ml",
    price: "35",
    image: "/images/soyabean-200ml.jpg",
    description: "Ultra-portable size perfect for camping, picnics, or keeping in your office pantry.",
    video: "/videos/soyabean-demo.mp4",
  },
];

// FIXED Rotating Showcase Component - Same as products.js
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
    goodness: "Veer Bharat Soyabean Oil is refined using advanced techniques that preserve essential nutrients. Rich in polyunsaturated fatty acids including omega-3 and omega-6, low in saturated fats, perfect for modern health-conscious kitchens.",
    benefits: "Light and versatile for all cooking styles - sautéing, frying, baking. Neutral flavor doesn't overpower dishes. High vitamin E content supports immunity. Cholesterol-free formula perfect for heart-healthy diets.",
    rating: "Praised across urban markets for consistent quality and affordability. Food bloggers recommend for versatility in Indian and continental recipes. Health-conscious families value transparency in sourcing."
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
          <div className="mt-4 p-5 sm:p-8 bg-white rounded-3xl shadow-xl border-2 border-green-100">
            <h3 className="text-lg md:text-2xl font-bold mb-2 text-green-600 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span> Goodness
            </h3>
            <p className="text-base text-slate-700">{longText.goodness}</p>
            <h3 className="text-lg md:text-2xl font-bold mt-5 mb-2 text-green-600 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span> Benefits
            </h3>
            <p className="text-base text-slate-700">{longText.benefits}</p>
            <h3 className="text-lg md:text-2xl font-bold mt-5 mb-2 text-green-600 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span> Market Rating
            </h3>
            <p className="text-base text-slate-700">{longText.rating}</p>
          </div>
          <div className="mt-5 flex items-center gap-3">
            <span className="text-2xl md:text-4xl font-black text-green-600">₹{items[index].price}</span>
            <span className="text-base md:text-lg text-gray-500">({items[index].size})</span>
          </div>
          <div className="mt-5 flex items-center gap-4">
            <button className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg">
              🛒 Add to Cart
            </button>
            <button className="inline-flex items-center gap-2 rounded-full px-6 py-3 border-2 border-green-500 text-green-600 font-bold hover:bg-green-50 transition-all duration-300 text-lg">
              View All Products →
            </button>
          </div>
        </div>

        {/* RIGHT: Orbit - FIXED Z-INDEX! */}
        <div className="relative flex items-center justify-center w-full min-h-[320px] md:min-h-[480px] order-1 md:order-2">
          <button
            onClick={() => setIndex((i) => (i - 1 + n) % n)}
            aria-label="Previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg border-2 border-green-400 hover:bg-green-50 flex items-center justify-center text-2xl font-bold text-green-600 md:static md:left-0"
          >
            ‹
          </button>
          <div className="relative w-[220px] h-[220px] xs:w-[270px] xs:h-[270px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] rounded-3xl flex items-center justify-center">
            {/* Animated background - Z-INDEX 1 */}
            <motion.div
              className="absolute inset-0 rounded-full z-[1]"
              style={{ background: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(34,197,94,0.08) 70%, transparent 100%)" }}
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
              <circle cx="150" cy="150" r="110" stroke="#10B981" strokeWidth="6" fill="none" strokeDasharray="8 12" filter="url(#glow)" opacity="0.8"/>
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
                  key={it.id}
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
                        ? "0 18px 36px rgba(16, 185, 129, 0.22), 0 5px 15px rgba(0,0,0,0.10)"
                        : "0 6px 18px rgba(0,0,0,0.10)",
                      border: isActive ? "2.5px solid #10B981" : "1.5px solid rgba(0,0,0,0.08)",
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
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-lg bg-white ring-2 ring-green-400/30">
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
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg border-2 border-green-400 hover:bg-green-50 flex items-center justify-center text-2xl font-bold text-green-600 md:static md:right-0"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

// Why Choose Section
function WhyChooseSection() {
  const features = [
    {
      icon: "🏆",
      title: "Premium Refined",
      description: "Advanced refining process preserves nutrients while ensuring lightness and purity for modern cooking"
    },
    {
      icon: "💚",
      title: "Heart Healthy",
      description: "Rich in polyunsaturated fats, omega-3 and omega-6, low saturated fat, cholesterol-free formula"
    },
    {
      icon: "🌟",
      title: "Vitamin E Rich",
      description: "High vitamin E content acts as natural antioxidant supporting immunity and healthy skin"
    },
    {
      icon: "🍳",
      title: "Versatile Cooking",
      description: "Perfect for all cooking methods - frying, sautéing, baking, salad dressings with neutral flavor"
    },
    {
      icon: "✅",
      title: "Quality Certified",
      description: "Rigorous quality checks ensure international standards compliance for safe, pure edible oil"
    },
    {
      icon: "💰",
      title: "Great Value",
      description: "Affordable pricing without compromising quality - excellent value for health-conscious families"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 mb-20">
      <div className="text-center mb-14">
        <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg mb-6 shadow-xl">
          ✨ Why Customers Love Us
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
          Why Choose Veer Bharat?
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
          Experience the perfect blend of health, taste, and versatility in every drop
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -8 }}
            className="p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-green-400"
          >
            <div className="text-6xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-black text-gray-900 mb-3">{feature.title}</h3>
            <p className="text-base text-gray-600 leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Product Variants Grid
function ProductVariantsGrid({ products }) {
  const [modalVideo, setModalVideo] = useState(null);

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Choose Your Perfect Size
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
            From kitchen essentials to bulk packs - we have the right size for every need
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden border-2 border-transparent hover:border-green-400 transition-all duration-500"
            >
              {product.popular && (
                <div className="absolute top-5 right-5 z-10 px-5 py-2 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-bold shadow-xl">
                  🔥 Best Seller
                </div>
              )}

              <div className="relative h-80 w-full overflow-hidden bg-gradient-to-br from-green-50 to-teal-50">
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  className="group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-7">
                <div className="text-sm font-bold text-green-600 mb-2">{product.size}</div>
                <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                  {product.description}
                </p>

                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl font-black text-green-600">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">₹{product.originalPrice}</span>
                  )}
                  {product.discount && (
                    <span className="text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                      {product.discount}% OFF
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <button className="flex-1 text-center rounded-full px-6 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white text-lg font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    🛒 Add to Cart
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setModalVideo({ src: product.video, name: product.name })}
                    className="rounded-full px-5 py-4 border-2 border-green-500 text-green-600 font-bold hover:bg-green-50 transition-all text-lg"
                  >
                    🎥
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Video Modal - Z-INDEX 300 */}
      <AnimatePresence>
        {modalVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setModalVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full rounded-3xl overflow-hidden shadow-2xl bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalVideo(null)}
                className="absolute right-5 top-5 z-20 rounded-full bg-white/90 px-6 py-3 text-lg font-bold hover:bg-white transition"
              >
                ✕ Close
              </button>
              <video
                src={modalVideo.src}
                controls
                autoPlay
                className="w-full h-[70vh] object-cover"
              />
              <div className="p-6 bg-gradient-to-t from-black to-transparent text-white">
                <div className="text-2xl font-bold">{modalVideo.name}</div>
                <div className="text-lg text-white/80 mt-1">
                  Veer Bharat — Premium Soyabean Oil Demo
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Main Component
export default function SoyabeanOilPage() {
  return (
    <main style={{ background: "#f0fdf4" }} className="min-h-screen py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 relative w-full">
        {/* Page Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-7 py-4 rounded-full bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 text-white font-bold text-xl mb-8 shadow-2xl">
              🌱 Veer Bharat Premium Soyabean Oil
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Heart-Healthy Refined Oil
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-medium leading-relaxed">
              Light, versatile, and nutrition-forward soyabean oil perfect for all your healthy cooking needs
            </p>
          </motion.div>
        </div>

        {/* Rotating Showcase - FIXED */}
        <RotatingShowcase items={showcaseItems} />

        {/* Why Choose Section */}
        <WhyChooseSection />

        {/* Product Variants Grid */}
        <ProductVariantsGrid products={productVariants} />

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <div className="bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Ready for Healthier Cooking?</h2>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Order now and get premium quality soyabean oil delivered fresh to your doorstep
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-10 py-5 rounded-full bg-white text-green-600 text-xl font-bold shadow-xl hover:scale-105 transition-all duration-300">
                🛒 Order Now
              </button>
              <button className="px-10 py-5 rounded-full border-2 border-white text-white text-xl font-bold hover:bg-white/10 transition-all duration-300">
                📞 Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}