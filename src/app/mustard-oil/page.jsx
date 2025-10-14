// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";

// /* ---------------- Rotating Showcase ---------------- */
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
//     goodness:
//       "Veer Bharat Mustard Oil is extracted using the traditional Kachi Ghani method, ensuring that the natural pungency and nutrients remain intact. Rich in omega-3 fatty acids and antioxidants, our mustard oil is processed under strict quality controls. Each batch undergoes rigorous testing for purity and authenticity, giving you the confidence of pure, unadulterated oil that has been trusted in Indian kitchens for generations.",
//     benefits:
//       "Perfect for tadka, pickling, and deep frying, our mustard oil adds a distinctive sharp flavor to your dishes. It is known for its antibacterial properties and helps boost immunity. The oil's high smoke point makes it ideal for high-temperature cooking while retaining its nutritional value. Regular use can contribute to better heart health and improved digestion, making it a staple choice for health-conscious families.",
//     rating:
//       "Veer Bharat Mustard Oil has received excellent feedback from customers across North India. Users appreciate its authentic aroma, consistent quality, and competitive pricing. Food enthusiasts praise its ability to enhance traditional recipes, while health-conscious buyers value its purity certifications. Our expanding distribution network continues to bring this traditional favorite to more households every day.",
//   };

//   return (
//     <section ref={containerRef} className="max-w-7xl mx-auto px-6 mb-12">
//       <div className="grid gap-8 md:grid-cols-2 items-center">
//         <div className="space-y-5">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-[#1b2a3a]">
//             {items[index].name}
//           </h2>
//           <p className="text-lg text-slate-700 max-w-xl">{items[index].short}</p>

//           <div className="mt-4 p-6 bg-white rounded-2xl shadow-sm border">
//             <h3 className="text-xl font-semibold mb-2 text-amber-700">Goodness</h3>
//             <p className="text-sm text-slate-700 leading-relaxed">{longText.goodness}</p>

//             <h3 className="text-xl font-semibold mt-4 mb-2 text-amber-700">Benefits</h3>
//             <p className="text-sm text-slate-700 leading-relaxed">{longText.benefits}</p>

//             <h3 className="text-xl font-semibold mt-4 mb-2 text-amber-700">Market Rating</h3>
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
//               href="/products"
//               className="ml-4 inline-flex items-center gap-2 rounded-full px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-semibold shadow hover:shadow-lg transition"
//             >
//               View All Products →
//             </Link>
//           </div>
//         </div>

//         <div className="relative w-full flex justify-center md:justify-end">
//           <div
//             className="relative w-[320px] h-[320px] md:w-[520px] md:h-[520px] rounded-3xl p-6 flex items-center justify-center"
//             style={{ borderRadius: 28 }}
//           >
//             <motion.svg
//               viewBox="0 0 300 300"
//               className="absolute inset-0 w-full h-full pointer-events-none"
//               animate={{ rotate: rotationDeg * 0.25 }}
//               transition={{ type: "spring", stiffness: 140, damping: 22 }}
//             >
//               <circle cx="150" cy="150" r="108" stroke="#F6C85F" strokeWidth="6" fill="none" strokeDasharray="6 8" />
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
//                 <div
//                   key={it.id}
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

// /* ---------------- Main Page ---------------- */
// export default function MustardOilPage() {
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
//     {
//       id: 1,
//       name: "Premium Kachi Ghani Mustard Oil",
//       short: "Pure, cold-pressed mustard oil with authentic aroma",
//       image: "/images/mustard-oil-1.jpg",
//     },
//     {
//       id: 2,
//       name: "Traditional Sarson Ka Tel",
//       short: "Perfect for tadka, pickling, and everyday cooking",
//       image: "/images/mustard-oil-2.jpg",
//     },
//   ];

//   const productVariants = [
//     {
//       id: 1,
//       name: "Kachi Ghani Mustard Oil 1L",
//       price: "180",
//       image: "/images/mustard-oil-1.jpg",
//       description: "Cold-pressed pure mustard oil, ideal for authentic Indian cooking",
//       video: "/videos/mustard-demo.mp4",
//     },
//     {
//       id: 2,
//       name: "Premium Mustard Oil 5L",
//       price: "850",
//       image: "/images/mustard-oil-2.jpg",
//       description: "Family pack of premium quality mustard oil with rich aroma",
//       video: "/videos/mustard-demo.mp4",
//     },
//   ];

//   return (
//     <main style={{ background: "#fef9c3" }} className="min-h-screen py-12">
//       <div className="max-w-7xl mx-auto px-6 relative">
//         <RotatingShowcase items={showcaseItems} />

//         <header className="mb-8 text-center">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Veer Bharat Mustard Oil</h1>
//           <p className="mt-2 text-gray-800 max-w-2xl mx-auto">
//             Traditional Kachi Ghani mustard oil — pure, pungent, and packed with natural goodness for your kitchen.
//           </p>
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
//                   <span className="text-sm font-semibold px-3 py-1 rounded-full bg-amber-50 text-amber-700 border">₹{p.price}</span>
//                   <span className="text-xs text-green-600 font-medium">✓ Pure & Certified</span>
//                 </div>

//                 <div className="mt-4 flex items-center gap-2">
//                   <button className="rounded-full px-4 py-2 bg-amber-400 text-black font-bold shadow hover:bg-amber-500 transition">
//                     Add to Cart
//                   </button>
//                   <button
//                     onClick={() => setModalVideo({ src: p.video, name: p.name })}
//                     className="rounded-full px-3 py-2 border hover:bg-gray-50 transition"
//                   >
//                     Demo
//                   </button>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

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
//               <motion.div
//                 initial={{ scale: 0.96, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.96, opacity: 0 }}
//                 transition={{ duration: 0.18 }}
//                 className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl bg-black"
//               >
//                 <div className="absolute right-3 top-3 z-20">
//                   <button onClick={closeModal} className="rounded-full bg-white/90 px-3 py-2 hover:bg-white transition">
//                     Close
//                   </button>
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




"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";


/* ---------------- Rotating Showcase with 5 Product Sizes ---------------- */
function RotatingShowcase({ items = [] }) {
  const n = items.length || 1;
  const [index, setIndex] = useState(0);
  const [radius, setRadius] = useState(200);
  const containerRef = useRef(null);

  const rotationDeg = index * (360 / n);

  useEffect(() => {
    function setFromWidth() {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const r = Math.min(Math.max(w * 0.22, 140), 300);
      setRadius(r);
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

  if (!items.length) return null;

  const currentItem = items[index];

  return (
    <section ref={containerRef} className="max-w-7xl mx-auto px-6 mb-20">
      <div className="grid gap-14 lg:grid-cols-2 items-center">
        {/* LEFT: Product Details */}
        <motion.div 
          key={index}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-7"
        >
          <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-base shadow-xl">
            ⭐ Featured Product
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
            {currentItem.name}
          </h2>

          <p className="text-2xl text-gray-700 font-medium leading-relaxed">
            {currentItem.short}
          </p>

          <div className="flex items-center gap-4">
            <span className="text-4xl font-black text-amber-600">₹{currentItem.price}</span>
            <span className="text-lg text-gray-500">({currentItem.size})</span>
          </div>

          {/* Benefits Cards */}
          <div className="space-y-4">
            <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl border-2 border-amber-200 shadow-lg">
              <h3 className="text-xl font-bold mb-2 text-amber-700 flex items-center gap-2">
                <span>🌾</span> Pure Kachi Ghani
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Veer Bharat Mustard Oil is extracted using traditional cold-press methods, preserving natural nutrients and authentic pungent flavor. Rich in omega-3 fatty acids and antioxidants, perfect for authentic Indian cooking.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl border-2 border-green-200 shadow-lg">
              <h3 className="text-xl font-bold mb-2 text-green-700 flex items-center gap-2">
                <span>💚</span> Health Benefits
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Ideal for tadka, pickling, and deep frying with high smoke point. Known for antibacterial properties, boosts immunity, supports heart health and improves digestion naturally.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl border-2 border-purple-200 shadow-lg">
              <h3 className="text-xl font-bold mb-2 text-purple-700 flex items-center gap-2">
                <span>⭐</span> Customer Favorite
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Highly praised across North India for authentic aroma, consistent quality, and competitive pricing. Trusted by thousands of families for traditional recipes.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              🛒 Add to Cart
            </button>
            <Link
              href="/products"
              className="px-8 py-4 rounded-full border-2 border-amber-500 text-amber-600 text-lg font-bold hover:bg-amber-50 transition-all duration-300"
            >
              View All Products →
            </Link>
          </div>
        </motion.div>

        {/* RIGHT: Circular Carousel */}
        <div className="relative w-full flex flex-col items-center gap-8">
          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 z-20">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIndex((i) => (i - 1 + n) % n)}
              aria-label="Previous Size"
              className="w-16 h-16 rounded-full bg-white shadow-2xl flex items-center justify-center text-4xl font-bold text-amber-600 border-2 border-amber-400 hover:bg-amber-50 transition-all"
            >
              ‹
            </motion.button>

            <div className="text-center">
              <div className="text-2xl font-black text-gray-900">
                {index + 1} / {n}
              </div>
              <div className="text-base text-gray-600">Available Sizes</div>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIndex((i) => (i + 1) % n)}
              aria-label="Next Size"
              className="w-16 h-16 rounded-full bg-white shadow-2xl flex items-center justify-center text-4xl font-bold text-amber-600 border-2 border-amber-400 hover:bg-amber-50 transition-all"
            >
              ›
            </motion.button>
          </div>

          {/* Circular Display */}
          <div className="relative w-[400px] h-[400px] md:w-[600px] md:h-[600px]">
            {/* Animated Circle */}
            <motion.svg
              viewBox="0 0 300 300"
              className="absolute inset-0 w-full h-full pointer-events-none"
              animate={{ rotate: rotationDeg * 0.2 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <defs>
                <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F59E0B" />
                  <stop offset="50%" stopColor="#F97316" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
              </defs>
              <circle
                cx="150"
                cy="150"
                r="130"
                stroke="url(#circleGradient)"
                strokeWidth="10"
                fill="none"
                strokeDasharray="10 15"
                opacity="0.6"
              />
            </motion.svg>

            {/* Product Images Orbiting */}
            {items.map((item, i) => {
              const baseAngle = (i * 360) / n;
              const totalAngle = baseAngle + rotationDeg;
              const rad = ((totalAngle - 90) * Math.PI) / 180;
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;
              const isActive = i === index;
              const size = isActive ? 280 : 120;
              const scale = isActive ? 1 : 0.7;

              return (
                <motion.div
                  key={item.id}
                  className="absolute cursor-pointer"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: `translate(-50%, -50%) scale(${scale})`,
                    zIndex: isActive ? 60 : 15,
                    width: size,
                    height: size,
                  }}
                  onClick={() => setIndex(i)}
                  whileHover={{ scale: scale * 1.05 }}
                  transition={{
                    left: { duration: 0.6 },
                    top: { duration: 0.6 },
                    transform: { duration: 0.4 },
                  }}
                >
                  <div
                    className="relative rounded-3xl overflow-hidden bg-white"
                    style={{
                      width: "100%",
                      height: "100%",
                      boxShadow: isActive
                        ? "0 30px 60px rgba(245, 158, 11, 0.4), 0 15px 40px rgba(0,0,0,0.3)"
                        : "0 10px 30px rgba(0,0,0,0.15)",
                      border: isActive ? "4px solid #F59E0B" : "2px solid rgba(0,0,0,0.1)",
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      style={{ objectFit: "cover" }}
                      priority={isActive}
                    />
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    )}
                    {isActive && (
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="text-xl font-black drop-shadow-lg">
                          {item.size}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}

            {/* Center Logo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
              <motion.div
                className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-amber-400 to-orange-500"
                animate={{ rotate: -rotationDeg }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                <Image
                  src="/logo.png"
                  alt="Veer Bharat"
                  width={112}
                  height={112}
                  style={{ objectFit: "cover" }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ---------------- Why Choose Section ---------------- */
function WhyChooseSection() {
  const features = [
    {
      icon: "🏆",
      title: "Premium Quality",
      description: "FSSAI certified pure mustard oil extracted using traditional Kachi Ghani cold-press method"
    },
    {
      icon: "🌱",
      title: "100% Natural",
      description: "No chemicals, no preservatives, no artificial additives - just pure goodness from nature"
    },
    {
      icon: "💪",
      title: "Health Benefits",
      description: "Rich in omega-3 fatty acids, vitamin E, and natural antioxidants for better health"
    },
    {
      icon: "🔥",
      title: "High Smoke Point",
      description: "Perfect for deep frying, tadka, and high-temperature cooking without breaking down"
    },
    {
      icon: "✅",
      title: "Lab Tested",
      description: "Every batch undergoes rigorous quality testing for purity and safety standards"
    },
    {
      icon: "💰",
      title: "Best Price",
      description: "Premium quality at competitive prices - great value for money for your family"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 mb-20">
      <div className="text-center mb-14">
        <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg mb-6 shadow-xl">
          ✨ Why Customers Love Us
        </div>
        <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
          Why Choose Veer Bharat?
        </h2>
        <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
          Experience the authentic taste and health benefits of pure, traditional mustard oil
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
            className="p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-amber-400"
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


/* ---------------- Product Variants Grid ---------------- */
function ProductVariantsGrid({ products }) {
  const [modalVideo, setModalVideo] = useState(null);

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="text-center mb-14">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            Choose Your Perfect Size
          </h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
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
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden border-2 border-transparent hover:border-amber-400 transition-all duration-500"
            >
              {product.popular && (
                <div className="absolute top-5 right-5 z-10 px-5 py-2 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-bold shadow-xl">
                  🔥 Best Seller
                </div>
              )}

              <div className="relative h-80 w-full overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-7">
                <div className="text-sm font-bold text-amber-600 mb-2">{product.size}</div>
                <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                  {product.description}
                </p>

                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl font-black text-amber-600">₹{product.price}</span>
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
                  <button className="flex-1 text-center rounded-full px-6 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-lg font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    🛒 Add to Cart
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setModalVideo({ src: product.video, name: product.name })}
                    className="rounded-full px-5 py-4 border-2 border-amber-500 text-amber-600 font-bold hover:bg-amber-50 transition-all text-lg"
                  >
                    🎥
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {modalVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
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
                  Veer Bharat — Premium Mustard Oil Demo
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


/* ---------------- Main Mustard Oil Page ---------------- */
export default function MustardOilPage() {
  // 5 Product Sizes for Carousel
  const showcaseItems = [
    {
      id: 1,
      name: "Premium 15 Liter Pack",
      short: "Bulk pack perfect for restaurants and large families",
      size: "15 Liter Tin",
      price: "2,550",
      image: "/images/mustard-15l.jpg",
    },
    {
      id: 2,
      name: "Family Pack 5 Liter Jar",
      short: "Convenient jar packaging for everyday cooking needs",
      size: "5 Liter Jar",
      price: "900",
      image: "/images/mustard-5l-jar.jpg",
    },
    {
      id: 3,
      name: "Standard 1 Liter Bottle",
      short: "Most popular size for regular household use",
      size: "1 Liter Bottle",
      price: "185",
      image: "/images/mustard-1l.jpg",
    },
    {
      id: 4,
      name: "Handy 500ml Bottle",
      short: "Compact size perfect for small kitchens and trials",
      size: "500ml Bottle",
      price: "95",
      image: "/images/mustard-500ml.jpg",
    },
    {
      id: 5,
      name: "Travel 200ml Bottle",
      short: "Portable size ideal for travel and outdoor cooking",
      size: "200ml Bottle",
      price: "40",
      image: "/images/mustard-200ml.jpg",
    },
  ];

  // Product Variants for Grid
  const productVariants = [
    {
      id: 1,
      name: "Premium 15 Liter Tin",
      size: "15 Liter",
      price: "2,550",
      originalPrice: "2,850",
      discount: 10,
      image: "/images/mustard-15l.jpg",
      description: "Best value bulk pack for restaurants, caterers, and large families. Industrial-grade tin packaging ensures freshness.",
      video: "/videos/mustard-demo.mp4",
      popular: true,
    },
    {
      id: 2,
      name: "Family 5 Liter Jar",
      size: "5 Liter",
      price: "900",
      originalPrice: "1,000",
      discount: 10,
      image: "/images/mustard-5l-jar.jpg",
      description: "Convenient jar with easy-pour spout. Perfect for families who cook regularly with authentic flavors.",
      video: "/videos/mustard-demo.mp4",
      popular: true,
    },
    {
      id: 3,
      name: "Standard 1 Liter Bottle",
      size: "1 Liter",
      price: "185",
      image: "/images/mustard-1l.jpg",
      description: "Our most popular size! Perfect balance of convenience and value for everyday cooking needs.",
      video: "/videos/mustard-demo.mp4",
      popular: true,
    },
    {
      id: 4,
      name: "Compact 500ml Bottle",
      size: "500ml",
      price: "95",
      image: "/images/mustard-500ml.jpg",
      description: "Ideal for small households, bachelors, or trying out Veer Bharat quality for the first time.",
      video: "/videos/mustard-demo.mp4",
    },
    {
      id: 5,
      name: "Travel 200ml Bottle",
      size: "200ml",
      price: "40",
      image: "/images/mustard-200ml.jpg",
      description: "Ultra-portable size perfect for camping, picnics, or keeping in your office pantry.",
      video: "/videos/mustard-demo.mp4",
    },
  ];

  return (
    <main style={{ background: "#fef9c3" }} className="min-h-screen py-16">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-7 py-4 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 text-white font-bold text-xl mb-8 shadow-2xl">
            🌾 Veer Bharat Premium Mustard Oil
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-6 leading-tight">
            Traditional Kachi Ghani
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 max-w-4xl mx-auto font-medium leading-relaxed">
            Pure, cold-pressed mustard oil with authentic aroma and natural goodness for your authentic Indian kitchen
          </p>
        </motion.div>
      </div>

      {/* Rotating Showcase */}
      <RotatingShowcase items={showcaseItems} />

      {/* Why Choose Section */}
      <WhyChooseSection />

      {/* Product Variants Grid */}
      <ProductVariantsGrid products={productVariants} />

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-5xl font-black mb-6">Ready to Experience Purity?</h2>
          <p className="text-2xl mb-8 max-w-2xl mx-auto">
            Order now and get your first bottle of authentic Kachi Ghani mustard oil delivered to your doorstep
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="px-10 py-5 rounded-full bg-white text-amber-600 text-xl font-bold shadow-xl hover:scale-105 transition-all duration-300">
              🛒 Order Now
            </button>
            <Link
              href="/contact"
              className="px-10 py-5 rounded-full border-2 border-white text-white text-xl font-bold hover:bg-white/10 transition-all duration-300"
            >
              📞 Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}









