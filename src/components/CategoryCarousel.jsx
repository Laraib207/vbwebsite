// import React, { useState, useRef } from "react";

// /**
//  * CategoryCarousel + CategoryCarouselAlt
//  *
//  * Place these images in public/images/:
//  * - bg2.jpeg
//  * - product-ricebran.jpg
//  * - logo.png
//  *
//  * Usage:
//  *  import CategoryCarousel from "@/components/CategoryCarousel"
//  *  <CategoryCarousel />
//  *
//  * or use <CategoryCarouselAlt /> to compare an alternate layout.
//  * 
//  */

// export default function CategoryCarousel() {
//   const items = [
//     {
//       id: "veer Bharat",
//       title: "Veer Bharat — Trusted Oils, Thoughtful Practices",
//       img: "/images/bg2.jpeg", // background / hero image
//       productImg: "/images/product-ricebran.jpg", // main right product image that replaces "photo"
//       desc: `Established in 2010, Veer Bharat has grown into a dependable provider of edible oils and allied products,
//        serving households, retailers, and institutional buyers across India. Built on a foundation of quality, transparency, 
//        and customer-first service, we combine traditional know-how with modern manufacturing to deliver products that are safe,
//       nutritious, and reliably consistent.
//       Our portfolio includes Kachi Ghani mustard oil, light and nutritious soybean oil, refined palm (palm kernel/pam) oil for high-heat cooking,
//       rice bran oil, sunflower oil, blended cooking oils and specialty formulations. We supply bulk institutional orders as well as retail-packed bottles 
//       and tins, meeting the needs of home kitchens, restaurants, and food manufacturers. Each product is developed to suit practical cooking uses — from gentle
//       dressings to high-stability frying — while keeping taste and health in balance.`,
//     },
//   ];

//   const [index, setIndex] = useState(0);
//   const animGuard = useRef(false);

//   function prev() {
//     if (animGuard.current) return;
//     animGuard.current = true;
//     setIndex((i) => (i - 1 + items.length) % items.length);
//     setTimeout(() => (animGuard.current = false), 600);
//   }

//   function next() {
//     if (animGuard.current) return;
//     animGuard.current = true;
//     setIndex((i) => (i + 1) % items.length);
//     setTimeout(() => (animGuard.current = false), 600);
//   }

//   const cur = items[index];

//   return (
//     <section className="py-12 relative overflow-visible" style={{ backgroundColor: "#fef9c3" }}>
//       <div className="container mx-auto max-w-7xl px-6 relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           {/* LEFT: Text */}
//           <div className="relative z-10">
//             <h2 className="text-2xl md:text-4xl font-extrabold text-[#15325a] mb-6">{cur.title}</h2>

//             {/* We show the full description in two paragraphs (split by first double newline if present) */}
//             <p className="text-base md:text-lg text-[#24304a] leading-relaxed mb-4 whitespace-pre-line">
//               {cur.desc.split("\n\n")[0]}
//             </p>

//             <p className="text-base md:text-lg text-[#24304a] leading-relaxed mb-6 whitespace-pre-line">
//               {cur.desc.split("\n\n")[1] ?? ""}
//             </p>

//             <a
//               href="/about"
//               className="inline-block rounded-md bg-[#16335f] text-white px-5 py-2.5 font-semibold shadow hover:scale-[1.02] transition"
//             >
//               About Us
//             </a>
//           </div>

//           {/* RIGHT: Hero area (bg image + product + logo) */}
//           <div className="flex justify-center md:justify-end relative">
//             {/* Background/hero image (subtle, rounded) */}
//             <div
//               className="rounded-xl overflow-hidden shadow-2xl w-[320px] sm:w-[380px] md:w-[460px] lg:w-[540px]"
//               style={{ position: "relative" }}
//             >
//               <img
//                 src={cur.img}
//                 alt="hero background"
//                 className="w-full h-full object-cover block opacity-95"
//                 style={{ display: "block" }}
//               />

//               {/* Product image placed on top/center (absolute) */}
//               <div
//                 style={{
//                   position: "absolute",
//                   left: "50%",
//                   top: "50%",
//                   transform: "translate(-50%, -20%)",
//                   zIndex: 30,
//                   width: "60%",
//                   maxWidth: 260,
//                 }}
//                 className="flex justify-center"
//               >
//                 <img
//                   src={cur.productImg}
//                   alt="product"
//                   className="w-full h-auto object-contain drop-shadow-2xl"
//                 />
//               </div>

//               {/* Logo: placed on the right side where the page had the removed element.
//                   This will sit above the hero background in a circular badge */}
//               <div
//                 style={{
//                   position: "absolute",
//                   right: -18,
//                   top: -18,
//                   zIndex: 40,
//                   width: 140,
//                   height: 140,
//                   borderRadius: "9999px",
//                   background: "white",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   boxShadow: "0 12px 28px rgba(0,0,0,0.18)",
//                   border: "6px solid rgba(255, 99, 71, 0.06)",
//                 }}
//               >
//                 <img
//                   src="/images/logo.png"
//                   alt="Veer Bharat Logo"
//                   style={{ maxWidth: "86%", maxHeight: "86%", objectFit: "contain" }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Dots */}
//       <div className="mt-8 flex items-center justify-center gap-3">
//         {items.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => {
//               if (animGuard.current || i === index) return;
//               animGuard.current = true;
//               setIndex(i);
//               setTimeout(() => (animGuard.current = false), 600);
//             }}
//             className={`w-3 h-3 rounded-full ${i === index ? "bg-[#0b0d11]" : "bg-gray-300"}`}
//             aria-label={`Go to ${i + 1}`}
//           />
//         ))}
//       </div>

//       {/* Arrows */}
//       <button
//         onClick={() => setIndex((i) => (i - 1 + items.length) % items.length)}
//         aria-label="Prev"
//         className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/95 shadow-lg flex items-center justify-center hover:scale-105 transition"
//       >
//         ‹
//       </button>
//       <button
//         onClick={() => setIndex((i) => (i + 1) % items.length)}
//         aria-label="Next"
//         className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/95 shadow-lg flex items-center justify-center hover:scale-105 transition"
//       >
//         ›
//       </button>
//     </section>
//   );
// }

// /* ------------------ Alternate (same assets, slightly different placement) ------------------ */

// export function CategoryCarouselAlt() {
//   const items = [
//     {
//       id: "veer Bharat",
//       title: "Veer Bharat — Trusted Oils, Thoughtful Practices",
//       img: "/images/bg2.jpeg",
//       productImg: "/images/product-ricebran.jpg",
//       desc: `Established in 2010, Veer Bharat has grown into a dependable provider of edible oils and allied products,
//        serving households, retailers, and institutional buyers across India. Built on a foundation of quality, transparency, 
//        and customer-first service, we combine traditional know-how with modern manufacturing to deliver products that are safe,
//       nutritious, and reliably consistent.`,
//     },
//   ];

//   const [index, setIndex] = useState(0);
//   const animGuard = useRef(false);
//   const cur = items[index];

//   return (
//     <section className="py-12 relative overflow-visible" style={{ backgroundColor: "#fef9c3" }}>
//       <div className="container mx-auto max-w-7xl px-6 relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           {/* LEFT: Text (center-left aligned here) */}
//           <div className="relative z-10">
//             <h2 className="text-2xl md:text-4xl font-extrabold text-[#15325a] mb-6">{cur.title}</h2>

//             <p className="text-base md:text-lg text-[#24304a] leading-relaxed mb-6">{cur.desc}</p>

//             <a
//               href="/about"
//               className="inline-block rounded-md bg-[#16335f] text-white px-5 py-2.5 font-semibold shadow hover:scale-[1.02] transition"
//             >
//               About Us
//             </a>
//           </div>

//           {/* RIGHT: larger framed hero box */}
//           <div className="flex justify-center md:justify-end">
//             <div
//               className="rounded-xl overflow-hidden shadow-2xl"
//               style={{ width: "560px", height: "380px", position: "relative" }}
//             >
//               {/* background */}
//               <img src={cur.img} alt="hero" className="w-full h-full object-cover" />

//               {/* product anchored bottom-center */}
//               <div style={{ position: "absolute", left: "50%", bottom: 18, transform: "translateX(-50%)", zIndex: 30, width: "42%" }}>
//                 <img src={cur.productImg} alt="product" className="w-full h-auto object-contain drop-shadow-2xl" />
//               </div>

//               {/* logo at top-right clipped circle */}
//               <div
//                 style={{
//                   position: "absolute",
//                   right: 12,
//                   top: 12,
//                   zIndex: 40,
//                   width: 120,
//                   height: 120,
//                   borderRadius: "9999px",
//                   background: "#ffffff",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   boxShadow: "0 8px 28px rgba(0,0,0,0.14)",
//                 }}
//               >
//                 <img src="/images/logo.png" alt="logo" style={{ maxWidth: "84%", maxHeight: "84%", objectFit: "contain" }} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* simple dot nav */}
//       <div className="mt-8 flex items-center justify-center gap-3">
//         {items.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => {
//               if (animGuard.current || i === index) return;
//               animGuard.current = true;
//               setIndex(i);
//               setTimeout(() => (animGuard.current = false), 600);
//             }}
//             className={`w-3 h-3 rounded-full ${i === index ? "bg-[#0b0d11]" : "bg-gray-300"}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }





import React from "react";

/**
 * CategoryCarousel Component - Single Content Section
 *
 * Place this image in public/images/:
 * - veer-bharat-banner.jpg
 * - logo.png
 *
 * Usage:
 *  import CategoryCarousel from "@/components/CategoryCarousel"
 *  <CategoryCarousel />
 * 
 */

export default function CategoryCarousel() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 relative overflow-visible" style={{ backgroundColor: "#fef9c3" }}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Content Section */}
          <div className="relative z-10 order-2 lg:order-1">
            <div className="text-center lg:text-left">
              
              {/* Main Headline - Highlighted */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#15325a] mb-8 sm:mb-10 leading-tight">
                Tradition Meets Purity
              </h1>

              {/* Content - All Same Style */}
              <div className="space-y-6 mb-10">
                <p className="text-lg sm:text-xl text-[#24304a] leading-relaxed">
                  Established in 2000, we, Sri Shyam Agro Industries, are reckoned among the most trusted manufacturers and suppliers of healthy range of premium edible oils. Located at RIICO Industrial Area, Khairthal, Rajasthan, we serve households, retailers, and institutional buyers across India with unwavering commitment to quality.
                </p>

                <p className="text-lg sm:text-xl text-[#24304a] leading-relaxed">
                  Our Veer Bharat brand products have been well-received in the market over the years. Built on a foundation of quality, transparency, and customer-first service, we combine traditional know-how with modern manufacturing techniques. The brand is a symbol of trust, quality, reliability, and reasonability in pricing.
                </p>

                <p className="text-lg sm:text-xl text-[#24304a] leading-relaxed">
                  From Kachi Ghani Mustard Oil to refined cooking oils, each product is developed to suit practical cooking needs while maintaining nutritional value. We are FSSAI Certified and committed to delivering products that are safe, nutritious, and reliably consistent for every kitchen across India.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                <a
                  href="/about"
                  className="inline-block rounded-xl bg-[#16335f] text-white px-8 sm:px-10 py-4 sm:py-5 font-bold text-lg shadow-xl hover:bg-[#1a3a6b] hover:scale-[1.05] transition-all duration-300 text-center"
                >
                  About Us
                </a>
                <a
                  href="/products"
                  className="inline-block rounded-xl bg-transparent border-3 border-[#16335f] text-[#16335f] px-8 sm:px-10 py-4 sm:py-5 font-bold text-lg hover:bg-[#16335f] hover:text-white transition-all duration-300 text-center shadow-lg"
                >
                  Our Products
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Single Banner Image */}
          <div className="flex justify-center lg:justify-end relative order-1 lg:order-2">
            <div
              className="rounded-2xl overflow-hidden shadow-2xl w-full max-w-[320px] sm:max-w-[380px] md:max-w-[460px] lg:max-w-[540px] transform hover:scale-[1.02] transition-transform duration-500"
              style={{ position: "relative", aspectRatio: "4/3" }}
            >
              {/* Banner Image */}
              <img
                src="/images/veer-bharat-banner.jpg"
                alt="Veer Bharat Oil & Food Brand - Sri Shyam Agro Industries"
                className="w-full h-full object-cover block"
                style={{ display: "block" }}
              />

              {/* Overlay for better visibility */}
              <div 
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "linear-gradient(135deg, rgba(21,50,90,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                  zIndex: 10
                }}
              />

              {/* Company Logo - Top Left */}
              <div
                style={{
                  position: "absolute",
                  left: -15,
                  top: -15,
                  zIndex: 40,
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 12px 32px rgba(0,0,0,0.2), 0 4px 12px rgba(0,0,0,0.1)",
                  border: "4px solid rgba(22, 51, 95, 0.1)",
                }}
                className="hover:scale-110 transition-transform duration-300 sm:w-[130px] sm:h-[130px] md:w-[140px] md:h-[140px]"
              >
                <img
                  src="/images/logo.png"
                  alt="Veer Bharat Logo"
                  className="max-w-[75%] max-h-[75%] object-contain"
                />
              </div>

              {/* Since 2000 Badge - Bottom Right */}
              <div
                style={{
                  position: "absolute",
                  bottom: 20,
                  right: 20,
                  background: "linear-gradient(135deg, rgba(22,51,95,0.95) 0%, rgba(26,58,107,0.95) 100%)",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "25px",
                  fontSize: "12px",
                  fontWeight: "700",
                  zIndex: 35,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.3)"
                }}
                className="sm:text-sm sm:px-6 sm:py-3"
              >
                Since 2000
              </div>

              {/* FSSAI Certified Badge - Bottom Left */}
              <div
                style={{
                  position: "absolute",
                  bottom: 20,
                  left: 20,
                  background: "linear-gradient(135deg, rgba(34,139,34,0.95) 0%, rgba(0,128,0,0.95) 100%)",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "25px",
                  fontSize: "12px",
                  fontWeight: "700",
                  zIndex: 35,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.3)"
                }}
                className="sm:text-sm sm:px-6 sm:py-3"
              >
                FSSAI Certified
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div 
        className="absolute top-10 left-10 w-20 h-20 rounded-full bg-[#16335f] opacity-5 animate-pulse hidden lg:block"
        style={{ animation: "pulse 3s infinite" }}
      />
      <div 
        className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-[#16335f] opacity-5 animate-pulse hidden lg:block"
        style={{ animation: "pulse 4s infinite" }}
      />
    </section>
  );
}