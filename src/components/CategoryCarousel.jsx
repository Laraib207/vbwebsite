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





// import React from "react";

// /**
//  * CategoryCarousel Component - Single Content Section
//  *
//  * Place this image in public/images/:
//  * - veer-bharat-banner.jpg
//  * - logo.png
//  *
//  * Usage:
//  *  import CategoryCarousel from "@/components/CategoryCarousel"
//  *  <CategoryCarousel />
//  * 
//  */

// export default function CategoryCarousel() {
//   return (
//     <section className="py-8 sm:py-12 lg:py-16 relative overflow-visible" style={{ backgroundColor: "#fef9c3" }}>
//       <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
//           {/* LEFT: Content Section */}
//           <div className="relative z-10 order-2 lg:order-1">
//             <div className="text-center lg:text-left">
              
//               {/* Main Headline - Highlighted */}
//               <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#15325a] mb-8 sm:mb-10 leading-tight">
//                 Tradition Meets Purity
//               </h1>

//               {/* Content - All Same Style */}
//               <div className="space-y-6 mb-10">
//                 <p className="text-lg sm:text-xl text-[#24304a] leading-relaxed">
//                   Established in 2000, we, Sri Shyam Agro Industries, are reckoned among the most trusted manufacturers and suppliers of healthy range of premium edible oils. Located at RIICO Industrial Area, Khairthal, Rajasthan, we serve households, retailers, and institutional buyers across India with unwavering commitment to quality.
//                 </p>

//                 <p className="text-lg sm:text-xl text-[#24304a] leading-relaxed">
//                   Our Veer Bharat brand products have been well-received in the market over the years. Built on a foundation of quality, transparency, and customer-first service, we combine traditional know-how with modern manufacturing techniques. The brand is a symbol of trust, quality, reliability, and reasonability in pricing.
//                 </p>

//                 <p className="text-lg sm:text-xl text-[#24304a] leading-relaxed">
//                   From Kachi Ghani Mustard Oil to refined cooking oils, each product is developed to suit practical cooking needs while maintaining nutritional value. We are FSSAI Certified and committed to delivering products that are safe, nutritious, and reliably consistent for every kitchen across India.
//                 </p>
//               </div>

//               {/* Buttons */}
//               <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
//                 <a
//                   href="/about"
//                   className="inline-block rounded-xl bg-[#16335f] text-white px-8 sm:px-10 py-4 sm:py-5 font-bold text-lg shadow-xl hover:bg-[#1a3a6b] hover:scale-[1.05] transition-all duration-300 text-center"
//                 >
//                   About Us
//                 </a>
//                 <a
//                   href="/products"
//                   className="inline-block rounded-xl bg-transparent border-3 border-[#16335f] text-[#16335f] px-8 sm:px-10 py-4 sm:py-5 font-bold text-lg hover:bg-[#16335f] hover:text-white transition-all duration-300 text-center shadow-lg"
//                 >
//                   Our Products
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT: Single Banner Image */}
//           <div className="flex justify-center lg:justify-end relative order-1 lg:order-2">
//             <div
//               className="rounded-2xl overflow-hidden shadow-2xl w-full max-w-[320px] sm:max-w-[380px] md:max-w-[460px] lg:max-w-[540px] transform hover:scale-[1.02] transition-transform duration-500"
//               style={{ position: "relative", aspectRatio: "4/3" }}
//             >
//               Banner Image
//               <img
//                 src="/images/veer-bharat-banner.jpg"
//                 alt="Veer Bharat Oil & Food Brand - Sri Shyam Agro Industries"
//                 className="w-full h-full object-cover block"
//                 style={{ display: "block" }}
//               />

//               {/* Overlay for better visibility */}
//               <div 
//                 style={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                   bottom: 0,
//                   background: "linear-gradient(135deg, rgba(21,50,90,0.1) 0%, rgba(255,255,255,0.05) 100%)",
//                   zIndex: 10
//                 }}
//               />

//               {/* Company Logo - Top Left */}
//               <div
//                 style={{
//                   position: "absolute",
//                   left: -15,
//                   top: -15,
//                   zIndex: 40,
//                   width: "120px",
//                   height: "120px",
//                   borderRadius: "50%",
//                   background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   boxShadow: "0 12px 32px rgba(0,0,0,0.2), 0 4px 12px rgba(0,0,0,0.1)",
//                   border: "4px solid rgba(22, 51, 95, 0.1)",
//                 }}
//                 className="hover:scale-110 transition-transform duration-300 sm:w-[130px] sm:h-[130px] md:w-[140px] md:h-[140px]"
//               >
//                 <img
//                   src="/images/logo.png"
//                   alt="Veer Bharat Logo"
//                   className="max-w-[75%] max-h-[75%] object-contain"
//                 />
//               </div>

//               {/* Since 2000 Badge - Bottom Right */}
//               <div
//                 style={{
//                   position: "absolute",
//                   bottom: 20,
//                   right: 20,
//                   background: "linear-gradient(135deg, rgba(22,51,95,0.95) 0%, rgba(26,58,107,0.95) 100%)",
//                   color: "white",
//                   padding: "10px 20px",
//                   borderRadius: "25px",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   zIndex: 35,
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px",
//                   backdropFilter: "blur(10px)",
//                   boxShadow: "0 8px 25px rgba(0,0,0,0.3)"
//                 }}
//                 className="sm:text-sm sm:px-6 sm:py-3"
//               >
//                 Since 2000
//               </div>

//               {/* FSSAI Certified Badge - Bottom Left */}
//               <div
//                 style={{
//                   position: "absolute",
//                   bottom: 20,
//                   left: 20,
//                   background: "linear-gradient(135deg, rgba(34,139,34,0.95) 0%, rgba(0,128,0,0.95) 100%)",
//                   color: "white",
//                   padding: "10px 20px",
//                   borderRadius: "25px",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   zIndex: 35,
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px",
//                   backdropFilter: "blur(10px)",
//                   boxShadow: "0 8px 25px rgba(0,0,0,0.3)"
//                 }}
//                 className="sm:text-sm sm:px-6 sm:py-3"
//               >
//                 FSSAI Certified
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Decorative Elements */}
//       <div 
//         className="absolute top-10 left-10 w-20 h-20 rounded-full bg-[#16335f] opacity-5 animate-pulse hidden lg:block"
//         style={{ animation: "pulse 3s infinite" }}
//       />
//       <div 
//         className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-[#16335f] opacity-5 animate-pulse hidden lg:block"
//         style={{ animation: "pulse 4s infinite" }}
//       />
//     </section>
//   );
// }



// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// /**
//  * components/CategoryCarousel.jsx
//  * - Single strong heading (no duplicate)
//  * - Left text column: larger, more readable typography
//  * - Right image: big white card, rounded, shadowed; image uses objectFit: contain
//  * - Removed "Our Products" button (only About Us remains)
//  * - Place your image at: /public/images/Brochure.png
//  *
//  * Notes:
//  * - For perfect background removal: upload a transparent PNG (same filename) to /public/images/
//  * - This layout is responsive and keeps the page visually full and balanced.
//  */

// export default function CategoryCarousel() {
//   return (
//     <section
//       className="py-12 lg:py-20 relative"
//       style={{ backgroundColor: "#fef9c3" }}
//     >
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         {/* SINGLE MAIN HEADING (no centered duplicate) */}
//         <div className="mb-8 lg:mb-12">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#0f355e] leading-tight">
//             Veer Bharat
//           </h1>

//           <div className="mt-3 w-28 h-1 rounded bg-gradient-to-r from-[#f6a623] via-[#f0c05a] to-[#48b04a]" />
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
//           {/* LEFT: content (single block, enlarged text) */}
//           <div className="order-1 lg:order-1">
//             <div className="max-w-2xl">
//               <p className="text-lg md:text-xl text-[#24304a] leading-relaxed mb-6">
//                 Since its establishment in 2000,{" "}
//                 <Link href="/about" className="text-[#16335f] font-semibold underline">
//                   Sri Shyam Agro Industries
//                 </Link>{" "}
//                 has been dedicated to bringing the finest quality edible oils to every household.
//                 With a strong commitment to purity, trust, and customer satisfaction, Veer Bharat
//                 has become a name synonymous with healthy living and authentic taste.
//               </p>

//               <div className="space-y-6 text-[1.02rem] md:text-[1.06rem] text-[#24304a]">
//                 <p className="leading-relaxed">
//                   We specialize in producing a wide range of oils, including <strong>Kachi Ghani
//                   Mustard Oil</strong>, <strong>Soybean Oil</strong>, <strong>Palm Oil</strong>, and many
//                   more. Each drop of our oil reflects our thoughtful practices — from carefully
//                   sourcing raw materials to using advanced extraction techniques that retain natural
//                   aroma, flavor, and nutrition. Our oils are not just a cooking essential; they are a
//                   tradition of health, care, and wellness carried forward for generations.
//                 </p>

//                 <p className="leading-relaxed">
//                   At Veer Bharat, we believe that true quality lies in balancing tradition with
//                   modern technology. That is why our products combine time-honored methods with
//                   strict quality standards, ensuring you receive only the best for your family’s
//                   kitchen.
//                 </p>

//                 <p className="leading-relaxed">
//                   Choosing Veer Bharat means choosing trust, purity, and goodness that enrich every
//                   meal. With us, tradition truly meets purity — making your food healthier, tastier,
//                   and filled with care.
//                 </p>
//               </div>

//               {/* Only About Us button (Products removed as requested) */}
//               <div className="mt-8">
//                 <Link
//                   href="/about"
//                   className="inline-block rounded-xl bg-[#16335f] text-white px-7 py-3 font-semibold shadow hover:bg-[#122c4f] transition"
//                 >
//                   About Us
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT: Large image card (fills the bracket area in your screenshot) */}
//           <div className="order-2 lg:order-2 flex justify-center lg:justify-end">
//             <div
//               className="bg-white rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center"
//               style={{
//                 width: "100%",
//                 maxWidth: "880px", // controls the big width on desktop
//                 height: "520px",   // controls the big height to match bracket area
//                 padding: "28px",
//               }}
//             >
//               {/* Using Next/Image with objectFit: "contain" ensures entire basket is visible */}
//               <Image
//                 src="/images/Brochure.png"
//                 alt="Veer Bharat product basket"
//                 width={1600}
//                 height={1000}
//                 style={{ width: "100%", height: "100%", objectFit: "contain" }}
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";

// /**
//  * CategoryCarousel.jsx
//  *
//  * Behavior:
//  * - NO heading (you add it in other component/page)
//  * - Left column: content (text)
//  * - Right column: image card whose HEIGHT is matched to the left content height (JS measures it)
//  * - Use a transparent PNG for perfect background removal: /public/images/Brochure.png
//  * - If you don't have a transparent PNG, the image will appear inside a white rounded card (still neat)
//  *
//  * Paste this file to: components/CategoryCarousel.jsx
//  */

// export default function CategoryCarousel() {
//   const leftRef = useRef(null);
//   const imageCardRef = useRef(null);

//   useEffect(() => {
//     if (!leftRef.current || !imageCardRef.current) return;

//     const setImageHeight = () => {
//       // Measure left column height and set same height on right image wrapper
//       const leftH = leftRef.current.offsetHeight;
//       // Add small extra padding so the image card breathes visually
//       const paddingExtra = 28; // px
//       imageCardRef.current.style.height = `${leftH + paddingExtra}px`;
//     };

//     setImageHeight();

//     // update on resize
//     let t;
//     const onResize = () => {
//       clearTimeout(t);
//       t = setTimeout(setImageHeight, 120);
//     };
//     window.addEventListener("resize", onResize);

//     // also observe mutations in left column (if content changes)
//     const obs = new MutationObserver(() => {
//       setImageHeight();
//     });
//     obs.observe(leftRef.current, { childList: true, subtree: true, characterData: true });

//     return () => {
//       window.removeEventListener("resize", onResize);
//       obs.disconnect();
//       clearTimeout(t);
//     };
//   }, []);

//   return (
//     <section
//       className="py-12 lg:py-16"
//       style={{ backgroundColor: "#fef9c3" }}
//     >
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
//           {/* LEFT: Content (you already added heading elsewhere) */}
//           <div className="order-1 lg:order-1">
//             <div ref={leftRef} className="max-w-2xl">
//               <p className="text-lg md:text-xl text-[#24304a] leading-relaxed mb-6">
//                 Since its establishment in 2000,&nbsp;
//                 <Link href="/about" className="text-[#16335f] font-semibold underline">
//                   Sri Shyam Agro Industries
//                 </Link>
//                 &nbsp;has been dedicated to bringing the finest quality edible oils to every
//                 household. With a strong commitment to purity, trust, and customer satisfaction,
//                 Veer Bharat has become a name synonymous with healthy living and authentic taste.
//               </p>

//               <div className="space-y-6 text-[1.02rem] md:text-[1.06rem] text-[#24304a] mb-6">
//                 <p className="leading-relaxed">
//                   We specialize in producing a wide range of oils, including <strong>Kachi Ghani
//                   Mustard Oil</strong>, <strong>Soybean Oil</strong>, <strong>Palm Oil</strong>, and many
//                   more. Each drop of our oil reflects our thoughtful practices — from carefully
//                   sourcing raw materials to using advanced extraction techniques that retain natural
//                   aroma, flavor, and nutrition. Our oils are not just a cooking essential; they are a
//                   tradition of health, care, and wellness carried forward for generations.
//                 </p>

//                 <p className="leading-relaxed">
//                   At Veer Bharat, we believe that true quality lies in balancing tradition with
//                   modern technology. That is why our products combine time-honored methods with strict
//                   quality standards, ensuring you receive only the best for your family’s kitchen.
//                 </p>

//                 <p className="leading-relaxed">
//                   Choosing Veer Bharat means choosing trust, purity, and goodness that enrich every
//                   meal. With us, tradition truly meets purity — making your food healthier, tastier,
//                   and filled with care.
//                 </p>
//               </div>

//               {/* Only About Us button */}
//               <div className="mt-6">
//                 <Link
//                   href="/about"
//                   className="inline-block rounded-xl bg-[#16335f] text-white px-7 py-3 font-semibold shadow hover:bg-[#122c4f] transition"
//                 >
//                   About Us
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT: Image card. its height is set to match left column via JS */}
//           <div className="order-2 lg:order-2 flex justify-center lg:justify-end">
//             <div
//               ref={imageCardRef}
//               className="bg-white rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center"
//               style={{
//                 width: "100%",
//                 maxWidth: "880px", // matches large layout; change if you want wider/narrower
//                 minHeight: "420px", // fallback min height
//                 transition: "height 220ms ease",
//                 padding: "28px",
//                 boxSizing: "border-box"
//               }}
//             >
//               {/* Use a transparent PNG for background-free image:
//                   /public/images/Brochure.png
//                   If you don't have a transparent PNG, the image will be shown as-is inside the white card.
//               */}
//               <div style={{ position: "relative", width: "100%", height: "100%" }}>
//                 <Image
//                   src="/images/Brochure.png"
//                   alt="Veer Bharat product basket"
//                   fill
//                   style={{ objectFit: "contain" }}
//                   priority
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// /**
//  * components/CategoryCarousel.jsx
//  *
//  * - Image size fixed to 880 x 520 (max width) and uses object-fit: cover
//  * - Wrapper is responsive (width: 100%; maxWidth: 880px) so on mobile it scales down
//  * - No card / no extra wrapper — image sits directly in the right column
//  * - Make sure the image file exists at: /public/images/Brochure.png (or the transparent version)
//  */

// export default function CategoryCarousel() {
//   return (
//     <section className="py-12 lg:py-16" style={{ backgroundColor: "#fef9c3" }}>
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         {/* Heading is handled elsewhere per your request */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
//           {/* LEFT: content */}
//           <div className="order-1 lg:order-1">
//             <div className="max-w-2xl">
//               <p className="text-lg md:text-xl text-[#24304a] leading-relaxed mb-6">
//                 Since its establishment in 2000,&nbsp;
//                 <Link href="/about" className="text-[#16335f] font-semibold underline">
//                   Sri Shyam Agro Industries
//                 </Link>
//                 &nbsp;has been dedicated to bringing the finest quality edible oils to every
//                 household. With a strong commitment to purity, trust, and customer satisfaction,
//                 Veer Bharat has become a name synonymous with healthy living and authentic taste.
//               </p>

//               <div className="space-y-6 text-[1.02rem] md:text-[1.06rem] text-[#24304a] mb-6">
//                 <p className="leading-relaxed">
//                   We specialize in producing a wide range of oils, including <strong>Kachi Ghani
//                   Mustard Oil</strong>, <strong>Soybean Oil</strong>, <strong>Palm Oil</strong>, and many
//                   more. Each drop of our oil reflects our thoughtful practices — from carefully
//                   sourcing raw materials to using advanced extraction techniques that retain natural
//                   aroma, flavor, and nutrition. Our oils are not just a cooking essential; they are a
//                   tradition of health, care, and wellness carried forward for generations.
//                 </p>

//                 <p className="leading-relaxed">
//                   At Veer Bharat, we believe that true quality lies in balancing tradition with
//                   modern technology. That is why our products combine time-honored methods with strict
//                   quality standards, ensuring you receive only the best for your family’s kitchen.
//                 </p>

//                 <p className="leading-relaxed">
//                   Choosing Veer Bharat means choosing trust, purity, and goodness that enrich every
//                   meal. With us, tradition truly meets purity — making your food healthier, tastier,
//                   and filled with care.
//                 </p>
//               </div>

//               {/* Only About Us button */}
//               <div className="mt-6">
//                 <Link
//                   href="/about"
//                   className="inline-block rounded-xl bg-[#16335f] text-white px-7 py-3 font-semibold shadow hover:bg-[#122c4f] transition"
//                 >
//                   About Us
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT: direct image, sized to 880x520 (object-fit: cover). responsive */}
//           <div className="order-2 lg:order-2 flex justify-center lg:justify-end items-start">
//             <div
//               style={{
//                 width: "100%",
//                 maxWidth: 880,   // fixed max width (880)
//                 height: 520,     // fixed height (520)
//                 position: "relative",
//               }}
//             >
//               <Image
//                 src="/images/Brochure.png"
//                 alt="Veer Bharat product basket"
//                 width={880}
//                 height={520}
//                 style={{ objectFit: "cover", width: "100%", height: "100%" }}
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// /**
//  * components/CategoryCarousel.jsx
//  *
//  * Enhanced with scroll animations and modern design
//  * - Image slides in from right on scroll
//  * - Text fades in from left
//  * - Removed image border
//  * - Added "Veer Bharat" heading
//  * - Increased text sizing
//  */

// export default function CategoryCarousel() {
//   const [isVisible, setIsVisible] = React.useState(false);
//   const sectionRef = React.useRef(null);

//   React.useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="py-16 lg:py-24 relative overflow-hidden"
//       style={{
//         background: "linear-gradient(135deg, #fef9c3 0%, #fef3c7 50%, #fef9c3 100%)",
//       }}
//     >
//       {/* Decorative elements */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300 rounded-full blur-3xl"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//           {/* LEFT: content with fade-in from left */}
//           <div
//             className={`order-2 lg:order-1 transition-all duration-1000 ease-out ${
//               isVisible
//                 ? "opacity-100 translate-x-0"
//                 : "opacity-0 -translate-x-12"
//             }`}
//           >
//             <div className="max-w-2xl">
//               {/* Veer Bharat Heading */}
//               <div className="mb-8">
//                 <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#16335f] via-[#1e4577] to-[#16335f] mb-2 tracking-tight leading-tight">
//                   Veer Bharat
//                 </h2>
//                 <div className="h-1.5 w-32 bg-gradient-to-r from-[#16335f] to-orange-400 rounded-full"></div>
//               </div>

//               <p className="text-xl md:text-2xl text-[#24304a] leading-relaxed mb-8 font-normal">
//                 Since its establishment in 2000,{" "}
//                 <Link
//                   href="/about"
//                   className="text-[#16335f] font-bold underline decoration-2 underline-offset-4 hover:text-[#0f2847] transition-colors"
//                 >
//                   Sri Shyam Agro Industries
//                 </Link>{" "}
//                 has been dedicated to bringing the finest quality edible oils to
//                 every household. With a strong commitment to purity, trust, and
//                 customer satisfaction, Veer Bharat has become a name synonymous
//                 with healthy living and authentic taste.
//               </p>

//               <div className="space-y-7 text-[1.15rem] md:text-[1.25rem] text-[#24304a] mb-8">
//                 <div
//                   className={`transition-all duration-1000 delay-200 ${
//                     isVisible ? "opacity-100" : "opacity-0"
//                   }`}
//                 >
//                   <p className="leading-relaxed font-normal">
//                     We specialize in producing a wide range of oils, including{" "}
//                     <strong className="font-bold text-[#16335f]">
//                       Kachi Ghani Mustard Oil
//                     </strong>
//                     ,{" "}
//                     <strong className="font-bold text-[#16335f]">
//                       Soybean Oil
//                     </strong>
//                     ,{" "}
//                     <strong className="font-bold text-[#16335f]">
//                       Palm Oil
//                     </strong>
//                     , and many more. Each drop of our oil reflects our
//                     thoughtful practices — from carefully sourcing raw materials
//                     to using advanced extraction techniques that retain natural
//                     aroma, flavor, and nutrition.
//                   </p>
//                 </div>

//                 <div
//                   className={`transition-all duration-1000 delay-400 ${
//                     isVisible ? "opacity-100" : "opacity-0"
//                   }`}
//                 >
//                   <p className="leading-relaxed font-normal">
//                     At Veer Bharat, we believe that true quality lies in
//                     balancing tradition with modern technology. That is why our
//                     products combine time-honored methods with strict quality
//                     standards, ensuring you receive only the best for your
//                     family's kitchen.
//                   </p>
//                 </div>

//                 <div
//                   className={`transition-all duration-1000 delay-600 ${
//                     isVisible ? "opacity-100" : "opacity-0"
//                   }`}
//                 >
//                   <p className="leading-relaxed font-normal">
//                     Choosing Veer Bharat means choosing trust, purity, and
//                     goodness that enrich every meal. With us, tradition truly
//                     meets purity — making your food healthier, tastier, and
//                     filled with care.
//                   </p>
//                 </div>
//               </div>

//               {/* Button with enhanced styling */}
//               <div
//                 className={`mt-10 transition-all duration-1000 delay-700 ${
//                   isVisible
//                     ? "opacity-100 translate-y-0"
//                     : "opacity-0 translate-y-4"
//                 }`}
//               >
//                 <Link
//                   href="/about"
//                   className="inline-block rounded-2xl bg-gradient-to-r from-[#16335f] to-[#1e4577] text-white px-12 py-5 font-bold text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
//                 >
//                   <span className="relative z-10">About Us</span>
//                   <div className="absolute inset-0 bg-gradient-to-r from-[#0f2847] to-[#16335f] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT: image slides in from right with scale effect - NO BORDER */}
//           <div
//             className={`order-1 lg:order-2 flex justify-center lg:justify-end items-center transition-all duration-1200 ease-out ${
//               isVisible
//                 ? "opacity-100 translate-x-0 scale-100"
//                 : "opacity-0 translate-x-16 scale-95"
//             }`}
//           >
//             <div
//               className="relative group"
//               style={{
//                 width: "100%",
//                 maxWidth: 880,
//                 height: 520,
//               }}
//             >
//               {/* Glowing effect behind image */}
//               <div className="absolute -inset-6 bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-400 rounded-3xl opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500"></div>

//               {/* Image container - NO BORDER, just shadow */}
//               <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
//                 <Image
//                   src="/images/Brochure.png"
//                   alt="Veer Bharat product basket"
//                   width={880}
//                   height={520}
//                   style={{
//                     objectFit: "cover",
//                     width: "100%",
//                     height: "100%",
//                   }}
//                   className="transition-transform duration-700 group-hover:scale-110"
//                   priority
//                 />
//               </div>

//               {/* Decorative corner accent */}
//               <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#16335f] to-[#1e4577] rounded-full opacity-15 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CategoryCarousel() {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 relative overflow-hidden bg-gradient-to-tr from-[#fef9c3] via-[#fef3c7] to-[#fef9c3]"
    >
      {/* Soft Decorative elements - subtle */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <div className="absolute top-24 left-12 w-72 h-72 bg-yellow-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-24 right-10 w-96 h-96 bg-orange-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left Side - Text Content */}
          <div
            className={`order-2 lg:order-1 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="max-w-3xl">
              {/* Heading */}
              <div className="mb-8">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#16335f] via-[#1e4577] to-[#16335f] tracking-tight leading-tight select-text">
                  Veer Bharat
                </h2>
                <div className="h-1.5 w-28 bg-gradient-to-r from-[#16335f]/90 to-orange-400 rounded-full mt-1"></div>
              </div>

              {/* Description */}
              <p className="text-lg sm:text-xl md:text-2xl text-[#24304a] leading-relaxed mb-8 font-normal">
                Since its establishment in 2000,{" "}
                <Link
                  href="/about"
                  className="text-[#16335f] font-semibold underline decoration-2 underline-offset-4 hover:text-[#0f2847] transition-colors"
                >
                  Sri Shyam Agro Industries
                </Link>{" "}
                has been dedicated to bringing the finest quality edible oils to every household. With a strong commitment to purity, trust, and customer satisfaction, Veer Bharat has become a name synonymous with healthy living and authentic taste.
              </p>

              {/* Detailed paragraphs */}
              <div className="space-y-7 text-[1.15rem] md:text-[1.25rem] text-[#24304a] mb-8">
                <div className={`transition-opacity duration-1000 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                  <p className="leading-relaxed font-normal">
                    We specialize in producing a wide range of oils, including{" "}
                    <strong className="font-semibold text-[#16335f]">
                      Kachi Ghani Mustard Oil
                    </strong>
                    ,{" "}
                    <strong className="font-semibold text-[#16335f]">
                      Soybean Oil
                    </strong>
                    ,{" "}
                    <strong className="font-semibold text-[#16335f]">
                      Palm Oil
                    </strong>
                    , and many more. Each drop of our oil reflects our thoughtful practices — from carefully sourcing raw materials to using advanced extraction techniques that retain natural aroma, flavor, and nutrition.
                  </p>
                </div>

                <div className={`transition-opacity duration-1000 delay-400 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                  <p className="leading-relaxed font-normal">
                    At Veer Bharat, we believe that true quality lies in balancing tradition with modern technology. That is why our products combine time-honored methods with strict quality standards, ensuring you receive only the best for your family's kitchen.
                  </p>
                </div>

                <div className={`transition-opacity duration-1000 delay-600 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                  <p className="leading-relaxed font-normal">
                    Choosing Veer Bharat means choosing trust, purity, and goodness that enrich every meal. With us, tradition truly meets purity — making your food healthier, tastier, and filled with care.
                  </p>
                </div>
              </div>

              {/* Button */}
              <div className={`mt-10 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                <Link
                  href="/about"
                  className="inline-block rounded-2xl bg-gradient-to-r from-[#16335f] to-[#1e4577] text-white px-12 py-5 font-semibold text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">About Us</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0f2847] to-[#16335f] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side - Image without background */}
          <div
            className={`order-1 lg:order-2 flex justify-center lg:justify-end items-center transition-transform duration-1200 ease-out ${
              isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-16 scale-95"
            }`}
          >
            <div className="relative group w-full max-w-[880px] h-[520px] shadow-2xl rounded-3xl overflow-hidden transition-transform duration-700 group-hover:scale-[1.05]">
              <Image
                src="/images/Brochure.png"
                alt="Veer Bharat product basket"
                fill
                style={{ objectFit: "cover" }}
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 880px"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatIn {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}
