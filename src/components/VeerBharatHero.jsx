// import React from "react";
// import { motion } from "framer-motion";

// /**
//  * Put these files in public/images/ exactly as named:
//  * - Veer Bharat Post (1).png
//  * - WhatsApp Image 2025-09-23 at 13.35.21.jpeg
//  * - WhatsApp Image 2025-09-23 at 13.35.21-2.jpeg
//  * - WhatsApp Image 2025-09-23 at 13.35.21-3.jpeg
//  * - WhatsApp Image 2025-09-23 at 13.35.21-4.jpeg
//  * - WhatsApp Image 2025-09-23 at 13.35.21-5.jpeg
//  * - WhatsApp Image 2025-09-23 at 13.35.20-3.jpeg
//  * - WhatsApp Image 2025-09-23 at 13.35.20-2.jpeg
//  */

// const bubblesData = [
//   { src: "/images/WhatsApp Image 2025-09-23 at 13.35.21.jpeg", alt: "Reduces Cholesterol", label: "Reduces\nCholesterol" },
//   { src: "/images/WhatsApp Image 2025-09-23 at 13.35.20-3.jpeg", alt: "High Smoke Point", label: "High Smoke\nPoint" },
//   { src: "/images/WhatsApp Image 2025-09-23 at 13.35.21-5.jpeg", alt: "Skin-Improving Benefits", label: "Skin-Improving\nBenefits" },
//   { src: "/images/WhatsApp Image 2025-09-23 at 13.35.21-2.jpeg", alt: "Natural Antioxidants", label: "Natural\nAntioxidants" },
//   { src: "/images/WhatsApp Image 2025-09-23 at 13.35.21-3.jpeg", alt: "Physically Refined", label: "Physically\nRefined" },
//   { src: "/images/WhatsApp Image 2025-09-23 at 13.35.21-4.jpeg", alt: "Balanced MUFA & PUFA", label: "Balanced\nMUFA & PUFA" },
// ];

// // Desktop positions - arranged in circle around product
// const desktopPositions = [
//   { left: "8%", top: "50%", transform: "translateY(-50%)" },
//   { left: "22%", top: "15%" },
//   { left: "28%", top: "75%" },
//   { right: "22%", top: "15%" },
//   { right: "28%", top: "75%" },
//   { right: "8%", top: "50%", transform: "translateY(-50%)" }
// ];

// function Bubble({ src, alt, label, stylePos, i }) {
//   const size = 220; // Uniform size for all bubbles

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       viewport={{ once: true }}
//       transition={{ 
//         duration: 0.6, 
//         delay: i * 0.1,
//         type: "spring",
//         stiffness: 200
//       }}
//       whileHover={{ scale: 1.08, y: -8 }}
//       style={{
//         position: stylePos ? "absolute" : "relative",
//         zIndex: 20,
//         ...stylePos,
//       }}
//       className={stylePos ? "hidden xl:block" : "block xl:hidden"}
//     >
//       <motion.div
//         animate={{
//           y: [0, -12, 0],
//         }}
//         transition={{
//           duration: 3 + (i % 3) * 0.5,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: i * 0.2,
//         }}
//         className="flex flex-col items-center"
//       >
//         <div
//           className="rounded-full overflow-hidden flex items-center justify-center shadow-2xl"
//           style={{
//             width: stylePos ? size : 140,
//             height: stylePos ? size : 140,
//             background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
//             border: "none",
//           }}
//         >
//           <div
//             className="rounded-full overflow-hidden flex items-center justify-center"
//             style={{
//               width: stylePos ? size - 20 : 120,
//               height: stylePos ? size - 20 : 120,
//               backgroundColor: "#fef3c3",
//             }}
//           >
//             <img src={src} alt={alt} className="w-4/5 h-4/5 object-contain" />
//           </div>
//         </div>
//         {stylePos && (
//           <div 
//             className="mt-4 text-center font-bold text-amber-900 leading-tight px-2"
//             style={{
//               fontSize: "15px",
//               maxWidth: size,
//               whiteSpace: "pre-line",
//             }}
//           >
//             {label}
//           </div>
//         )}
//       </motion.div>
//     </motion.div>
//   );
// }

// export default function VeerBharatHero() {
//   const productImg = "/images/Veer Bharat Post (1).png";
//   const heading = "VEER BHARAT KACHI GHANI MUSTARD OIL";
//   const description1 = "Made from 100% pure mustard seeds, Veer Bharat Kachi Ghani Mustard Oil is a heart-healthy cooking oil rich in natural goodness, which helps reduce cholesterol levels and improve overall health.";
//   const description2 = "It's ideal for everyday cooking with a balanced blend of monounsaturated and polyunsaturated fats. Free from harmful chemicals, it's packed with antioxidants and offers a mild flavour, making it perfect for frying, sautéing, and more. Choose Veer Bharat Kachi Ghani Mustard Oil for a healthier, cholesterol-conscious, and nutritious lifestyle.";

//   return (
//     <section className="relative overflow-hidden" style={{ background: "#fef9c3", minHeight: "100vh" }}>
//       <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 md:py-16 lg:py-20">
        
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-8 md:mb-12"
//         >
//           <h1 
//             className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight mb-6 md:mb-8"
//             style={{
//               fontFamily: "'Arial Black', sans-serif",
//               color: "#000",
//               letterSpacing: "0.02em",
//             }}
//           >
//             {heading}
//           </h1>
          
//           <div className="max-w-5xl mx-auto space-y-4 md:space-y-6 px-4">
//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed"
//               style={{
//                 fontFamily: "'Arial', sans-serif",
//                 color: "#1f2937",
//                 lineHeight: "1.7",
//               }}
//             >
//               {description1}
//             </motion.p>

//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed"
//               style={{
//                 fontFamily: "'Arial', sans-serif",
//                 color: "#1f2937",
//                 lineHeight: "1.7",
//               }}
//             >
//               {description2}
//             </motion.p>
//           </div>
//         </motion.div>

//         {/* Main Product Section */}
//         <div className="relative mt-12 md:mt-16 lg:mt-20">
          
//           {/* Desktop Layout with surrounding bubbles */}
//           <div className="relative w-full flex justify-center items-center min-h-[700px] xl:min-h-[800px]">
            
//             {/* Shadow under product */}
//             <div className="absolute bottom-0 w-[300px] md:w-[400px] lg:w-[500px] h-8 md:h-12 rounded-full bg-black/10 blur-3xl" />

//             {/* Center Product - WITH BLINKING EFFECT */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 1, type: "spring" }}
//               className="z-30 relative"
//             >
//               <motion.div
//                 animate={{
//                   y: [0, -15, 0],
//                   rotate: [0, 2, 0, -2, 0],
//                 }}
//                 transition={{
//                   duration: 5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="relative"
//               >
//                 {/* BLINKING GLOW EFFECT */}
//                 <motion.div
//                   animate={{
//                     opacity: [0.4, 0.8, 0.4],
//                     scale: [1, 1.05, 1],
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                   className="absolute inset-0 rounded-full blur-3xl"
//                   style={{
//                     background: "radial-gradient(circle, rgba(251,191,36,0.6) 0%, rgba(245,158,11,0.3) 50%, transparent 70%)",
//                     zIndex: -1,
//                   }}
//                 />

//                 <motion.img
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                   src={productImg}
//                   alt="Veer Bharat Mustard Oil"
//                   className="w-64 sm:w-80 md:w-96 lg:w-[480px] xl:w-[600px] h-auto object-contain mx-auto"
//                   style={{
//                     filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.3))",
//                   }}
//                 />
//               </motion.div>
//             </motion.div>

//             {/* Desktop bubbles arranged in circle */}
//             {bubblesData.map((b, i) => (
//               <Bubble
//                 key={i}
//                 src={b.src}
//                 alt={b.alt}
//                 label={b.label}
//                 stylePos={desktopPositions[i]}
//                 i={i}
//               />
//             ))}
//           </div>

//           {/* Mobile/Tablet Grid Layout */}
//           <div className="xl:hidden mt-12 space-y-8">
//             {/* Top row - 3 bubbles */}
//             <div className="grid grid-cols-3 gap-4 px-4">
//               {bubblesData.slice(0, 3).map((b, i) => (
//                 <div key={i} className="flex flex-col items-center">
//                   <Bubble src={b.src} alt={b.alt} label={b.label} stylePos={null} i={i} />
//                   <p className="mt-3 text-xs sm:text-sm font-bold text-amber-900 text-center leading-tight whitespace-pre-line">
//                     {b.label}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             {/* Center product for mobile */}
//             <div className="flex justify-center px-4">
//               <motion.div
//                 animate={{
//                   y: [0, -10, 0],
//                 }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="relative"
//               >
//                 <motion.div
//                   animate={{
//                     opacity: [0.3, 0.7, 0.3],
//                     scale: [1, 1.08, 1],
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                   className="absolute inset-0 rounded-full blur-2xl"
//                   style={{
//                     background: "radial-gradient(circle, rgba(251,191,36,0.5) 0%, transparent 70%)",
//                     zIndex: -1,
//                   }}
//                 />
//                 <img
//                   src={productImg}
//                   alt="Veer Bharat Mustard Oil"
//                   className="w-48 sm:w-64 h-auto object-contain"
//                   style={{
//                     filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.25))",
//                   }}
//                 />
//               </motion.div>
//             </div>

//             {/* Bottom row - 3 bubbles */}
//             <div className="grid grid-cols-3 gap-4 px-4">
//               {bubblesData.slice(3, 6).map((b, i) => (
//                 <div key={i} className="flex flex-col items-center">
//                   <Bubble src={b.src} alt={b.alt} label={b.label} stylePos={null} i={i + 3} />
//                   <p className="mt-3 text-xs sm:text-sm font-bold text-amber-900 text-center leading-tight whitespace-pre-line">
//                     {b.label}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }






// import React from "react";
// import { motion } from "framer-motion";

// /**
//  * Put these files in public/images/ exactly as named:
//  * - Veer Bharat Post (1).png (Main product image - ONLY ONE USED)
//  * - WhatsApp Image 2025-09-23 at 13.35.21.jpeg
//  * - WhatsApp Image 2025-09-23 at 13.35.21-2.jpeg
//  * - WhatsApp Image 2025-09-23 at 13.35.21-3.jpeg
//  * - WhatsApp Image 2025-09-23 at 13.35.21-4.jpeg
//  * - WhatsApp Image 2025-09-23 at 13.35.21-5.jpeg
//  * - WhatsApp Image 2025-09-23 at 13.35.20-3.jpeg
//  */

// const benefitsData = [
//   { 
//     src: "/images/WhatsApp Image 2025-09-23 at 13.35.21.jpeg", 
//     alt: "Reduces Cholesterol", 
//     label: "Reduces\nCholesterol" 
//   },
//   { 
//     src: "/images/WhatsApp Image 2025-09-23 at 13.35.20-3.jpeg", 
//     alt: "High Smoke Point", 
//     label: "High Smoke\nPoint" 
//   },
//   { 
//     src: "/images/WhatsApp Image 2025-09-23 at 13.35.21-5.jpeg", 
//     alt: "Skin-Improving Benefits", 
//     label: "Skin-Improving\nBenefits" 
//   },
//   { 
//     src: "/images/WhatsApp Image 2025-09-23 at 13.35.21-2.jpeg", 
//     alt: "Natural Antioxidants", 
//     label: "Natural\nAntioxidants" 
//   },
//   { 
//     src: "/images/WhatsApp Image 2025-09-23 at 13.35.21-3.jpeg", 
//     alt: "Physically Refined", 
//     label: "Physically\nRefined" 
//   },
//   { 
//     src: "/images/WhatsApp Image 2025-09-23 at 13.35.21-4.jpeg", 
//     alt: "Balanced MUFA & PUFA", 
//     label: "Balanced\nMUFA & PUFA" 
//   },
// ];

// // Desktop positions - exact replica of King's Rice Bran Oil layout
// const desktopPositions = [
//   { left: "6%", top: "42%" },      // Left side - top
//   { left: "18%", top: "12%" },     // Left upper
//   { left: "24%", top: "70%" },     // Left lower
//   { right: "18%", top: "16%" },    // Right upper
//   { right: "24%", top: "66%" },    // Right lower
//   { right: "6%", top: "42%" }      // Right side - top
// ];

// function BenefitBubble({ src, alt, label, stylePos, i }) {
//   const desktopSize = 240;
//   const mobileSize = 120;

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.5 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       viewport={{ once: true }}
//       transition={{ 
//         duration: 0.7, 
//         delay: i * 0.12,
//         type: "spring",
//         stiffness: 180
//       }}
//       whileHover={{ scale: 1.1, y: -10 }}
//       style={{
//         position: stylePos ? "absolute" : "relative",
//         zIndex: 20,
//         ...stylePos,
//       }}
//       className={stylePos ? "hidden xl:block" : "block xl:hidden"}
//     >
//       <motion.div
//         animate={{
//           y: [0, -15, 0],
//         }}
//         transition={{
//           duration: 3.5 + (i % 3) * 0.6,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: i * 0.25,
//         }}
//         className="flex flex-col items-center"
//       >
//         {/* Blinking outer glow */}
//         <motion.div
//           animate={{
//             opacity: [0.6, 1, 0.6],
//             scale: [1, 1.08, 1],
//             boxShadow: [
//               "0 0 30px rgba(251,191,36,0.4)",
//               "0 0 50px rgba(251,191,36,0.8)",
//               "0 0 30px rgba(251,191,36,0.4)",
//             ]
//           }}
//           transition={{
//             duration: 2.5,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: i * 0.3,
//           }}
//           className="rounded-full"
//           style={{
//             width: stylePos ? desktopSize : mobileSize,
//             height: stylePos ? desktopSize : mobileSize,
//             background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #f97316 100%)",
//             padding: "8px",
//             boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
//           }}
//         >
//           <div
//             className="rounded-full overflow-hidden flex items-center justify-center w-full h-full"
//             style={{
//               backgroundColor: "#fef9c3",
//             }}
//           >
//             <img 
//               src={src} 
//               alt={alt} 
//               className="w-[75%] h-[75%] object-contain"
//               style={{
//                 mixBlendMode: "normal",
//               }}
//             />
//           </div>
//         </motion.div>

//         {/* Label below bubble - desktop only */}
//         {stylePos && (
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3 + i * 0.1 }}
//             className="mt-5 text-center font-black leading-tight px-2"
//             style={{
//               fontSize: "17px",
//               maxWidth: desktopSize,
//               whiteSpace: "pre-line",
//               color: "#0f172a",
//               fontFamily: "'Arial Black', sans-serif",
//               textShadow: "0 2px 4px rgba(0,0,0,0.1)",
//             }}
//           >
//             {label}
//           </motion.div>
//         )}
//       </motion.div>
//     </motion.div>
//   );
// }

// export default function VeerBharatHero() {
//   const productImg = "/images/Veer Bharat Post (1).png";

//   return (
//     <section 
//       className="relative overflow-hidden" 
//       style={{ 
        
//         background: "#fef9c3",
//         minHeight: "100vh" 
//       }}
//     >
//       <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 py-12 md:py-16 lg:py-20 xl:py-24">
        
//         {/* HEADER SECTION - Premium Typography */}
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1 }}
//           className="text-center mb-10 md:mb-14 lg:mb-16"
//         >
//           <h1 
//             className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight mb-6 md:mb-8 lg:mb-10 leading-tight"
//             style={{
//               fontFamily: "'Arial Black', 'Helvetica', sans-serif",
//               color: "#000000",
//               letterSpacing: "0.01em",
//               textTransform: "uppercase",
//             }}
//           >
//             VEER BHARAT KACHI GHANI
//             <br />
//             MUSTARD OIL
//           </h1>
          
//           {/* Description paragraphs with premium styling */}
//           <div className="max-w-6xl mx-auto space-y-5 md:space-y-7 px-4 md:px-8">
//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.9, delay: 0.2 }}
//               className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed font-medium"
//               style={{
//                 fontFamily: "'Georgia', 'Times New Roman', serif",
//                 color: "#1e293b",
//                 lineHeight: "1.75",
//                 fontWeight: "500",
//               }}
//             >
//               Made from 100% pure mustard seeds, Veer Bharat Kachi Ghani Mustard Oil is a heart-healthy cooking oil rich in natural goodness, which helps reduce cholesterol levels and improve overall health.
//             </motion.p>

//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.9, delay: 0.4 }}
//               className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed font-medium"
//               style={{
//                 fontFamily: "'Georgia', 'Times New Roman', serif",
//                 color: "#1e293b",
//                 lineHeight: "1.75",
//                 fontWeight: "500",
//               }}
//             >
//               It's ideal for everyday cooking with a balanced blend of monounsaturated and polyunsaturated fats. Free from harmful chemicals, it's packed with antioxidants and offers a mild flavour, making it perfect for frying, sautéing, and more. Choose Veer Bharat Kachi Ghani Mustard Oil for a healthier, cholesterol-conscious, and nutritious lifestyle.
//             </motion.p>
//           </div>
//         </motion.div>

//         {/* MAIN PRODUCT SECTION */}
//         <div className="relative mt-16 md:mt-20 lg:mt-24 xl:mt-28">
          
//           {/* Desktop Layout - Circular arrangement */}
//           <div className="relative w-full flex justify-center items-center min-h-[700px] xl:min-h-[850px]">
            
//             {/* Soft shadow under product */}
//             <motion.div
//               animate={{
//                 scale: [1, 1.15, 1],
//                 opacity: [0.08, 0.14, 0.08],
//               }}
//               transition={{
//                 duration: 4.5,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="absolute bottom-4 w-[350px] md:w-[450px] lg:w-[550px] xl:w-[650px] h-10 md:h-14 lg:h-16 rounded-full bg-black/10 blur-3xl"
//             />

//             {/* CENTER PRODUCT - WITH PREMIUM BLINKING EFFECT */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.7, y: 80 }}
//               whileInView={{ opacity: 1, scale: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ 
//                 duration: 1.3, 
//                 type: "spring",
//                 stiffness: 120 
//               }}
//               className="z-40 relative"
//             >
//               <motion.div
//                 animate={{
//                   y: [0, -18, 0],
//                   rotate: [0, 2, 0, -2, 0],
//                 }}
//                 transition={{
//                   y: {
//                     duration: 5.5,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   },
//                   rotate: {
//                     duration: 7,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   },
//                 }}
//                 className="relative"
//               >
//                 {/* BLINKING RADIAL GLOW - Multiple layers */}
//                 <motion.div
//                   animate={{
//                     opacity: [0.3, 0.7, 0.3],
//                     scale: [1, 1.15, 1],
//                   }}
//                   transition={{
//                     duration: 2.5,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                   className="absolute inset-0 rounded-full blur-3xl"
//                   style={{
//                     background: "radial-gradient(circle, rgba(251,191,36,0.7) 0%, rgba(245,158,11,0.5) 40%, transparent 70%)",
//                     zIndex: -1,
//                     transform: "scale(1.3)",
//                   }}
//                 />

//                 <motion.div
//                   animate={{
//                     opacity: [0.4, 0.9, 0.4],
//                     scale: [1, 1.1, 1],
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                     delay: 0.5,
//                   }}
//                   className="absolute inset-0 rounded-full blur-2xl"
//                   style={{
//                     background: "radial-gradient(circle, rgba(251,191,36,0.8) 0%, rgba(245,158,11,0.4) 50%, transparent 70%)",
//                     zIndex: -2,
//                   }}
//                 />

//                 {/* PRODUCT IMAGE - Larger size */}
//                 <motion.img
//                   whileHover={{ scale: 1.06, rotate: 3 }}
//                   transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                   src={productImg}
//                   alt="Veer Bharat Kachi Ghani Mustard Oil"
//                   className="relative z-10 w-72 sm:w-96 md:w-[480px] lg:w-[580px] xl:w-[700px] h-auto object-contain mx-auto"
//                   style={{
//                     filter: "drop-shadow(0 35px 70px rgba(0,0,0,0.35)) drop-shadow(0 20px 40px rgba(251,191,36,0.3))",
//                   }}
//                 />
//               </motion.div>
//             </motion.div>

//             {/* Desktop benefit bubbles - arranged in circle */}
//             {benefitsData.map((b, i) => (
//               <BenefitBubble
//                 key={i}
//                 src={b.src}
//                 alt={b.alt}
//                 label={b.label}
//                 stylePos={desktopPositions[i]}
//                 i={i}
//               />
//             ))}
//           </div>

//           {/* MOBILE/TABLET LAYOUT - Grid Style */}
//           <div className="xl:hidden mt-12 md:mt-16 space-y-10">
            
//             {/* Top row - 3 benefits */}
//             <div className="grid grid-cols-3 gap-3 sm:gap-5 px-2 sm:px-4">
//               {benefitsData.slice(0, 3).map((b, i) => (
//                 <div key={i} className="flex flex-col items-center">
//                   <BenefitBubble 
//                     src={b.src} 
//                     alt={b.alt} 
//                     label={b.label} 
//                     stylePos={null} 
//                     i={i} 
//                   />
//                   <motion.p 
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.3 + i * 0.1 }}
//                     className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base font-black text-center leading-tight whitespace-pre-line"
//                     style={{
//                       color: "#0f172a",
//                       fontFamily: "'Arial Black', sans-serif",
//                     }}
//                   >
//                     {b.label}
//                   </motion.p>
//                 </div>
//               ))}
//             </div>

//             {/* Center product for mobile */}
//             <div className="flex justify-center px-4 py-6">
//               <motion.div
//                 animate={{
//                   y: [0, -12, 0],
//                   rotate: [0, 2, 0, -2, 0],
//                 }}
//                 transition={{
//                   duration: 5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="relative"
//               >
//                 <motion.div
//                   animate={{
//                     opacity: [0.3, 0.8, 0.3],
//                     scale: [1, 1.12, 1],
//                   }}
//                   transition={{
//                     duration: 2.5,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                   className="absolute inset-0 rounded-full blur-2xl"
//                   style={{
//                     background: "radial-gradient(circle, rgba(251,191,36,0.6) 0%, transparent 70%)",
//                     zIndex: -1,
//                   }}
//                 />
//                 <img
//                   src={productImg}
//                   alt="Veer Bharat Mustard Oil"
//                   className="w-56 sm:w-72 md:w-80 h-auto object-contain relative z-10"
//                   style={{
//                     filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.3))",
//                   }}
//                 />
//               </motion.div>
//             </div>

//             {/* Bottom row - 3 benefits */}
//             <div className="grid grid-cols-3 gap-3 sm:gap-5 px-2 sm:px-4">
//               {benefitsData.slice(3, 6).map((b, i) => (
//                 <div key={i} className="flex flex-col items-center">
//                   <BenefitBubble 
//                     src={b.src} 
//                     alt={b.alt} 
//                     label={b.label} 
//                     stylePos={null} 
//                     i={i + 3} 
//                   />
//                   <motion.p 
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.3 + i * 0.1 }}
//                     className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base font-black text-center leading-tight whitespace-pre-line"
//                     style={{
//                       color: "#0f172a",
//                       fontFamily: "'Arial Black', sans-serif",
//                     }}
//                   >
//                     {b.label}
//                   </motion.p>
//                 </div>
//               ))}
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* Bottom spacing */}
//       <div className="h-16 md:h-20" />
//     </section>
//   );
// }





// import React from "react";
// import { motion } from "framer-motion";

// /**
//  * VEER BHARAT KACHI GHANI MUSTARD OIL - HERO SECTION
//  * 
//  * Features:
//  * - Text above product with increased sizing for visibility
//  * - 6 benefit icons arranged in circle AROUND the product (not below)
//  * - Electric current tumble motion on bottle
//  * - Full-width responsive text
//  * - Same #fef9c3 background
//  * - Works on mobile, tablet, desktop
//  * 
//  * Images in public/images/:
//  * - Veer-Bharat-Post-1-2.jpg (Desktop product)
//  * - WhatsApp-Image-2025-10-07-at-10.57.53.jpg (Mobile product)
//  * - WhatsApp Image 2025-09-23 at 13.35.21.jpeg
//  * - WhatsApp Image 2025-09-23 at 13.35.20-3.jpeg
//  * - WhatsApp Image 2025-09-23 at 13.35.21-5.jpeg
//  * - WhatsApp Image 2025-09-23 at 13.35.21-2.jpeg
//  * - WhatsApp Image 2025-09-23 at 13.35.21-3.jpeg
//  * - WhatsApp Image 2025-09-23 at 13.35.21-4.jpeg
//  */

// const benefitsData = [
//   { 
//     src: "/images/WhatsApp Image 2025-09-23 at 13.35.21.jpeg", 
//     alt: "Reduces Cholesterol", 
//     label: "Reduces\nCholesterol" 
//   },
//   { 
//     src: "/images/WhatsApp Image 2025-09-23 at 13.35.20-3.jpeg", 
//     alt: "High Smoke Point", 
//     label: "High Smoke\nPoint" 
//   },
//   { 
//     src: "/images/WhatsApp Image 2025-09-23 at 13.35.21-5.jpeg", 
//     alt: "Skin-Improving Benefits", 
//     label: "Skin-Improving\nBenefits" 
//   },
//   { 
//     src: "/images/WhatsApp Image 2025-09-23 at 13.35.21-2.jpeg", 
//     alt: "Natural Antioxidants", 
//     label: "Natural\nAntioxidants" 
//   },
//   { 
//     src: "/images/WhatsApp Image 2025-09-23 at 13.35.21-3.jpeg", 
//     alt: "Physically Refined", 
//     label: "Physically\nRefined" 
//   },
//   { 
//     src: "/images/WhatsApp Image 2025-09-23 at 13.35.21-4.jpeg", 
//     alt: "Balanced MUFA & PUFA", 
//     label: "Balanced\nMUFA & PUFA" 
//   },
// ];

// // Desktop circular positions - icons AROUND product center
// const desktopPositions = [
//   { left: "8%", top: "40%" },      // Left middle
//   { left: "18%", top: "8%" },      // Left top
//   { left: "22%", top: "70%" },     // Left bottom
//   { right: "18%", top: "12%" },    // Right top
//   { right: "22%", top: "66%" },    // Right bottom
//   { right: "8%", top: "40%" }      // Right middle
// ];

// function BenefitBubble({ src, alt, label, stylePos, i }) {
//   const desktopSize = 170;

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.3 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{ 
//         duration: 0.75, 
//         delay: i * 0.12,
//         type: "spring",
//         stiffness: 170
//       }}
//       whileHover={{ 
//         scale: 1.12, 
//         y: -12,
//         transition: { duration: 0.25 } 
//       }}
//       style={{
//         position: "absolute",
//         zIndex: 30,
//         ...stylePos,
//       }}
//     >
//       <motion.div
//         animate={{
//           y: [0, -16, 0],
//         }}
//         transition={{
//           duration: 4 + (i % 3) * 0.5,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: i * 0.2,
//         }}
//         className="flex flex-col items-center"
//       >
//         {/* Golden gradient circle with glow */}
//         <motion.div
//           animate={{
//             boxShadow: [
//               "0 0 25px rgba(251,146,60,0.5), 0 0 45px rgba(251,191,36,0.3)",
//               "0 0 45px rgba(251,146,60,0.8), 0 0 70px rgba(251,191,36,0.5)",
//               "0 0 25px rgba(251,146,60,0.5), 0 0 45px rgba(251,191,36,0.3)",
//             ]
//           }}
//           transition={{
//             duration: 2.8,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: i * 0.25,
//           }}
//           className="rounded-full relative"
//           style={{
//             width: desktopSize,
//             height: desktopSize,
//             background: "linear-gradient(140deg, #fb923c 0%, #fbbf24 50%, #f59e0b 100%)",
//             padding: "5px",
//             boxShadow: "0 15px 40px rgba(0,0,0,0.22)",
//           }}
//         >
//           <div
//             className="rounded-full overflow-hidden flex items-center justify-center w-full h-full"
//             style={{
//               backgroundColor: "#fffbeb",
//             }}
//           >
//             <img 
//               src={src} 
//               alt={alt} 
//               className="w-[75%] h-[75%] object-contain"
//               style={{
//                 mixBlendMode: "multiply",
//                 filter: "contrast(1.08)",
//               }}
//             />
//           </div>
//         </motion.div>

//         {/* Label text */}
//         <motion.div
//           initial={{ opacity: 0, y: 12 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4 + i * 0.1 }}
//           className="mt-5 text-center font-bold leading-tight px-2"
//           style={{
//             fontSize: "16px",
//             maxWidth: desktopSize + 15,
//             whiteSpace: "pre-line",
//             color: "#0f172a",
//             fontFamily: "'Arial', 'Helvetica', sans-serif",
//             fontWeight: "700",
//             textShadow: "0 2px 4px rgba(0,0,0,0.12)",
//           }}
//         >
//           {label}
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// }

// export default function VeerBharatHero() {
//   const productImgDesktop = "/images/WhatsApp-Image-2025-10-07-at-10.57.53.jpg";
//   const productImgMobile = "/images/WhatsApp-Image-2025-10-07-at-10.57.53.jpg";

//   return (
//     <section 
//       className="relative overflow-hidden" 
//       style={{ 
//         background: "#fef9c3",
//         minHeight: "100vh",
//         width: "100%",
//       }}
//     >
//       {/* Background pattern */}
//       <div 
//         className="absolute inset-0 opacity-[0.02]"
//         style={{
//           backgroundImage: "radial-gradient(circle, #000 1.5px, transparent 1.5px)",
//           backgroundSize: "40px 40px",
//         }}
//       />

//       <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-20 py-10 md:py-14 lg:py-16 xl:py-20">
        
//         {/* HEADER SECTION - INCREASED TEXT SIZING */}
//         <motion.div
//           initial={{ opacity: 0, y: -60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1.1, ease: "easeOut" }}
//           className="text-center mb-12 md:mb-16 lg:mb-20 w-full"
//         >
//           {/* Main Heading - LARGER SIZE */}
//           <h1 
//             className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black tracking-tight mb-8 md:mb-10 lg:mb-14 leading-[1.1] px-2"
//             style={{
//               fontFamily: "'Impact', 'Arial Black', sans-serif",
//               color: "#000000",
//               letterSpacing: "-0.015em",
//               textTransform: "uppercase",
//               textShadow: "3px 3px 0px rgba(251,146,60,0.3), 6px 6px 0px rgba(251,191,36,0.18)",
//             }}
//           >
//             VEER BHARAT KACHI GHANI
//             <br />
//             MUSTARD OIL
//           </h1>
          
//           {/* Description Paragraphs - LARGER SIZE FOR VISIBILITY */}
//           <div className="w-full space-y-6 md:space-y-8 lg:space-y-10">
//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 1, delay: 0.3 }}
//               className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl leading-relaxed font-normal px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32"
//               style={{
//                 fontFamily: "'Georgia', 'Times New Roman', serif",
//                 color: "#1e293b",
//                 lineHeight: "1.8",
//                 fontWeight: "400",
//               }}
//             >
//               Made from 100% pure mustard seeds, Veer Bharat Kachi Ghani Mustard Oil is a heart-healthy cooking oil rich in natural goodness, which helps reduce cholesterol levels and improve overall health.
//             </motion.p>

//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 1, delay: 0.5 }}
//               className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl leading-relaxed font-normal px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32"
//               style={{
//                 fontFamily: "'Georgia', 'Times New Roman', serif",
//                 color: "#1e293b",
//                 lineHeight: "1.8",
//                 fontWeight: "400",
//               }}
//             >
//               It's ideal for everyday cooking with a balanced blend of monounsaturated and polyunsaturated fats. Free from harmful chemicals, it's packed with antioxidants and offers a mild flavour, making it perfect for frying, sautéing, and more. Choose Veer Bharat Kachi Ghani Mustard Oil for a healthier, cholesterol-conscious, and nutritious lifestyle.
//             </motion.p>
//           </div>
//         </motion.div>

//         {/* PRODUCT WITH SURROUNDING ICONS SECTION */}
//         <div className="relative mt-14 md:mt-20 lg:mt-24 xl:mt-28 w-full hidden lg:block">
          
//           {/* Container with centered product and surrounding icons */}
//           <div className="relative w-full flex justify-center items-center min-h-[700px] xl:min-h-[850px]">
            
//             {/* Shadow under product */}
//             <motion.div
//               animate={{
//                 scale: [1, 1.15, 1],
//                 opacity: [0.08, 0.15, 0.08],
//               }}
//               transition={{
//                 duration: 5,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="absolute bottom-10 w-[400px] xl:w-[600px] h-12 xl:h-16 rounded-full bg-black/15 blur-3xl"
//             />

//             {/* CENTER PRODUCT - ELECTRIC TUMBLE MOTION */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.7, y: 80 }}
//               whileInView={{ opacity: 1, scale: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ 
//                 duration: 1.4, 
//                 type: "spring",
//                 stiffness: 100 
//               }}
//               className="z-50 relative"
//             >
//               <motion.div
//                 animate={{
//                   y: [0, -20, 0],
//                   rotate: [0, -2, 1.5, -1, 1, -0.5, 2, -1, 0],
//                   x: [0, -3, 2.5, -2, 3, -1.5, 2, -2.5, 0],
//                 }}
//                 transition={{
//                   y: {
//                     duration: 6,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   },
//                   rotate: {
//                     duration: 4.5,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   },
//                   x: {
//                     duration: 4,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   },
//                 }}
//                 className="relative"
//               >
//                 {/* Radial glow layers */}
//                 <motion.div
//                   animate={{
//                     opacity: [0.4, 0.7, 0.4],
//                     scale: [1, 1.2, 1],
//                   }}
//                   transition={{
//                     duration: 3,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                   className="absolute inset-0 rounded-full blur-[80px]"
//                   style={{
//                     background: "radial-gradient(circle, rgba(251,146,60,0.75) 0%, rgba(251,191,36,0.55) 40%, transparent 70%)",
//                     zIndex: -1,
//                     transform: "scale(1.4)",
//                   }}
//                 />

//                 <motion.div
//                   animate={{
//                     opacity: [0.3, 0.6, 0.3],
//                     scale: [1, 1.15, 1],
//                   }}
//                   transition={{
//                     duration: 2.5,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                     delay: 0.7,
//                   }}
//                   className="absolute inset-0 rounded-full blur-[60px]"
//                   style={{
//                     background: "radial-gradient(circle, rgba(251,146,60,0.85) 0%, rgba(251,191,36,0.45) 50%, transparent 70%)",
//                     zIndex: -2,
//                   }}
//                 />

//                 {/* PRODUCT IMAGE */}
//                 <motion.img
//                   whileHover={{ 
//                     scale: 1.07,
//                     transition: { duration: 0.4 } 
//                   }}
//                   src={productImgDesktop}
//                   alt="Veer Bharat Kachi Ghani Mustard Oil"
//                   className="relative z-10 w-[450px] lg:w-[550px] xl:w-[650px] 2xl:w-[750px] h-auto object-contain mx-auto"
//                   style={{
//                     filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.4)) drop-shadow(0 20px 50px rgba(251,146,60,0.35)) contrast(1.04) brightness(1.02)",
//                     imageRendering: "high-quality",
//                   }}
//                 />
//               </motion.div>
//             </motion.div>

//             {/* 6 BENEFIT ICONS AROUND THE PRODUCT */}
//             {benefitsData.map((b, i) => (
//               <BenefitBubble
//                 key={`benefit-${i}`}
//                 src={b.src}
//                 alt={b.alt}
//                 label={b.label}
//                 stylePos={desktopPositions[i]}
//                 i={i}
//               />
//             ))}
//           </div>
//         </div>

//         {/* MOBILE/TABLET VERSION - Product only (no icons below) */}
//         <div className="lg:hidden mt-12 md:mt-16">
//           <div className="flex justify-center px-4 py-8">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.7 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 1.2 }}
//               animate={{
//                 y: [0, -12, 0],
//                 rotate: [0, -1.5, 1, -0.5, 1.5, -1, 0],
//                 x: [0, -2, 1.5, -1, 2, -1.5, 0],
//               }}
//               transition={{
//                 y: {
//                   duration: 5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 },
//                 rotate: {
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 },
//                 x: {
//                   duration: 3.5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 },
//               }}
//               className="relative"
//             >
//               <motion.div
//                 animate={{
//                   opacity: [0.35, 0.75, 0.35],
//                   scale: [1, 1.15, 1],
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="absolute inset-0 rounded-full blur-[60px]"
//                 style={{
//                   background: "radial-gradient(circle, rgba(251,146,60,0.6) 0%, transparent 70%)",
//                   zIndex: -1,
//                 }}
//               />
//               <img
//                 src={productImgMobile}
//                 alt="Veer Bharat Mustard Oil"
//                 className="w-64 sm:w-80 md:w-96 h-auto object-contain relative z-10"
//                 style={{
//                   filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.35)) contrast(1.03)",
//                 }}
//               />
//             </motion.div>
//           </div>
//         </div>

//       </div>

//       {/* Bottom spacing */}
//       <div className="h-16 md:h-20 lg:h-24" />
//     </section>
//   );
// }




// import React from "react";
// import { motion } from "framer-motion";

// /**
//  * VEER BHARAT KACHI GHANI MUSTARD OIL - FULLY RESPONSIVE
//  * 
//  * Mobile: Product only (NO icons)
//  * Tablet: Product with icons around
//  * Desktop/Laptop: Product with icons around
//  * 
//  * Images in public/images/:
//  * - Veer-Bharat-Post-1-2.jpg
//  * - WhatsApp-Image-2025-10-07-at-10.57.53.jpg
//  * - All benefit icon images
//  */

// const benefitsData = [
//   { 
//     src: "/images/Reduces1.jpeg", 
//     alt: "Reduces Cholesterol", 
//     label: "Reduces\nCholesterol" 
//   },
//   { 
//     src: "/images/WhatsApp Image 2025-09-23 at 13.35.20-3.jpeg", 
//     alt: "High Smoke Point", 
//     label: "High Smoke\nPoint" 
//   },
//   { 
//     src: "/images/WhatsApp Image 2025-09-23 at 13.35.21-5.jpeg", 
//     alt: "Skin-Improving Benefits", 
//     label: "Skin-Improving\nBenefits" 
//   },
//   { 
//     src: "/images/WhatsApp Image 2025-09-23 at 13.35.21-2.jpeg", 
//     alt: "Natural Antioxidants", 
//     label: "Natural\nAntioxidants" 
//   },
//   { 
//     src: "/images/WhatsApp Image 2025-09-23 at 13.35.21-3.jpeg", 
//     alt: "Physically Refined", 
//     label: "Physically\nRefined" 
//   },
//   { 
//     src: "/images/WhatsApp Image 2025-09-23 at 13.35.21-4.jpeg", 
//     alt: "Balanced MUFA & PUFA", 
//     label: "Balanced\nMUFA & PUFA" 
//   },
// ];

// // Desktop/Laptop positions (1024px+)
// const desktopPositions = [
//   { left: "8%", top: "40%" },
//   { left: "18%", top: "8%" },
//   { left: "22%", top: "70%" },
//   { right: "18%", top: "12%" },
//   { right: "22%", top: "66%" },
//   { right: "8%", top: "40%" }
// ];

// // Tablet positions (768px - 1023px)
// const tabletPositions = [
//   { left: "5%", top: "38%" },
//   { left: "12%", top: "5%" },
//   { left: "16%", top: "68%" },
//   { right: "12%", top: "9%" },
//   { right: "16%", top: "64%" },
//   { right: "5%", top: "38%" }
// ];

// function BenefitBubble({ src, alt, label, stylePos, i }) {
//   const size = 170;

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.3 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{ 
//         duration: 0.75, 
//         delay: i * 0.12,
//         type: "spring",
//         stiffness: 170
//       }}
//       whileHover={{ 
//         scale: 1.12, 
//         y: -12,
//         transition: { duration: 0.25 } 
//       }}
//       style={{
//         position: "absolute",
//         zIndex: 30,
//         ...stylePos,
//       }}
//       // CRITICAL: Hide on mobile (< 768px), show on tablet and desktop
//       className="hidden md:block"
//     >
//       <motion.div
//         animate={{
//           y: [0, -16, 0],
//         }}
//         transition={{
//           duration: 4 + (i % 3) * 0.5,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: i * 0.2,
//         }}
//         className="flex flex-col items-center"
//       >
//         {/* Golden gradient circle */}
//         <motion.div
//           animate={{
//             boxShadow: [
//               "0 0 25px rgba(251,146,60,0.5), 0 0 45px rgba(251,191,36,0.3)",
//               "0 0 45px rgba(251,146,60,0.8), 0 0 70px rgba(251,191,36,0.5)",
//               "0 0 25px rgba(251,146,60,0.5), 0 0 45px rgba(251,191,36,0.3)",
//             ]
//           }}
//           transition={{
//             duration: 2.8,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: i * 0.25,
//           }}
//           className="rounded-full relative"
//           style={{
//             width: size,
//             height: size,
//             background: "linear-gradient(140deg, #fb923c 0%, #fbbf24 50%, #f59e0b 100%)",
//             padding: "5px",
//             boxShadow: "0 15px 40px rgba(0,0,0,0.22)",
//           }}
//         >
//           <div
//             className="rounded-full overflow-hidden flex items-center justify-center w-full h-full"
//             style={{
//               backgroundColor: "#fffbeb",
//             }}
//           >
//             <img 
//               src={src} 
//               alt={alt} 
//               className="w-[75%] h-[75%] object-contain"
//               style={{
//                 mixBlendMode: "multiply",
//                 filter: "contrast(1.08)",
//               }}
//             />
//           </div>
//         </motion.div>

//         {/* Label text */}
//         <motion.div
//           initial={{ opacity: 0, y: 12 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4 + i * 0.1 }}
//           className="mt-3 md:mt-4 lg:mt-5 text-center font-bold leading-tight px-2"
//           style={{
//             fontSize: "clamp(12px, 1.5vw, 16px)",
//             maxWidth: size + 15,
//             whiteSpace: "pre-line",
//             color: "#0f172a",
//             fontFamily: "'Arial', 'Helvetica', sans-serif",
//             fontWeight: "700",
//             textShadow: "0 2px 4px rgba(0,0,0,0.12)",
//           }}
//         >
//           {label}
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// }

// export default function VeerBharatHero() {
//   const productImgDesktop = "/images/WhatsApp-Image-2025-10-07-at-10.57.53.jpg";
//   const productImgMobile = "/images/WhatsApp-Image-2025-10-07-at-10.57.53.jpg";

//   return (
//     <section 
//       className="relative overflow-hidden w-full" 
//       style={{ 
//         background: "#fef9c3",
//         minHeight: "100vh",
//       }}
//     >
//       {/* Background pattern */}
//       <div 
//         className="absolute inset-0 opacity-[0.02]"
//         style={{
//           backgroundImage: "radial-gradient(circle, #000 1.5px, transparent 1.5px)",
//           backgroundSize: "40px 40px",
//         }}
//       />

//       {/* Main container */}
//       <div className="relative w-full px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 2xl:px-16 py-6 sm:py-8 md:py-10 lg:py-14 xl:py-16 2xl:py-20">
        
//         {/* HEADER SECTION - FLUID TYPOGRAPHY */}
//         <motion.div
//           initial={{ opacity: 0, y: -60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1.1, ease: "easeOut" }}
//           className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20 w-full"
//         >
//           {/* Main Heading */}
//           <h1 
//             className="font-black tracking-tight mb-6 sm:mb-8 md:mb-10 lg:mb-14 leading-[1.1] px-2 sm:px-3"
//             style={{
//               fontSize: "clamp(1.75rem, 5vw + 1rem, 6rem)",
//               fontFamily: "'Impact', 'Arial Black', sans-serif",
//               color: "#000000",
//               letterSpacing: "-0.015em",
//               textTransform: "uppercase",
//               textShadow: "2px 2px 0px rgba(251,146,60,0.3), 4px 4px 0px rgba(251,191,36,0.18)",
//             }}
//           >
//             VEER BHARAT KACHI GHANI
//             <br />
//             MUSTARD OIL
//           </h1>
          
//           {/* Description Paragraphs */}
//           <div className="w-full space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 xl:space-y-10">
//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 1, delay: 0.3 }}
//               className="leading-relaxed font-normal px-3 sm:px-6 md:px-10 lg:px-14 xl:px-20 2xl:px-28"
//               style={{
//                 fontSize: "clamp(0.875rem, 1.5vw + 0.5rem, 2rem)",
//                 fontFamily: "'Georgia', 'Times New Roman', serif",
//                 color: "#1e293b",
//                 lineHeight: "1.75",
//                 fontWeight: "400",
//               }}
//             >
//               Made from 100% pure mustard seeds, Veer Bharat Kachi Ghani Mustard Oil is a heart-healthy cooking oil rich in natural goodness, which helps reduce cholesterol levels and improve overall health.
//             </motion.p>

//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 1, delay: 0.5 }}
//               className="leading-relaxed font-normal px-3 sm:px-6 md:px-10 lg:px-14 xl:px-20 2xl:px-28"
//               style={{
//                 fontSize: "clamp(0.875rem, 1.5vw + 0.5rem, 2rem)",
//                 fontFamily: "'Georgia', 'Times New Roman', serif",
//                 color: "#1e293b",
//                 lineHeight: "1.75",
//                 fontWeight: "400",
//               }}
//             >
//               It's ideal for everyday cooking with a balanced blend of monounsaturated and polyunsaturated fats. Free from harmful chemicals, it's packed with antioxidants and offers a mild flavour, making it perfect for frying, sautéing, and more. Choose Veer Bharat Kachi Ghani Mustard Oil for a healthier, cholesterol-conscious, and nutritious lifestyle.
//             </motion.p>
//           </div>
//         </motion.div>

//         {/* DESKTOP & LAPTOP VERSION (1024px+) - Product with icons around */}
//         <div className="relative mt-10 sm:mt-12 md:mt-14 lg:mt-18 xl:mt-24 w-full hidden lg:block">
          
//           <div className="relative w-full flex justify-center items-center" style={{ minHeight: "clamp(600px, 50vh, 900px)" }}>
            
//             {/* Shadow */}
//             <motion.div
//               animate={{
//                 scale: [1, 1.15, 1],
//                 opacity: [0.08, 0.15, 0.08],
//               }}
//               transition={{
//                 duration: 5,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="absolute bottom-8 lg:bottom-10 xl:bottom-12 rounded-full bg-black/15 blur-3xl"
//               style={{
//                 width: "clamp(350px, 40vw, 600px)",
//                 height: "clamp(40px, 4vw, 70px)",
//               }}
//             />

//             {/* CENTER PRODUCT */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.7, y: 80 }}
//               whileInView={{ opacity: 1, scale: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ 
//                 duration: 1.4, 
//                 type: "spring",
//                 stiffness: 100 
//               }}
//               className="z-50 relative"
//             >
//               <motion.div
//                 animate={{
//                   y: [0, -20, 0],
//                   rotate: [0, -2, 1.5, -1, 1, -0.5, 2, -1, 0],
//                   x: [0, -3, 2.5, -2, 3, -1.5, 2, -2.5, 0],
//                 }}
//                 transition={{
//                   y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
//                   rotate: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
//                   x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
//                 }}
//                 className="relative"
//               >
//                 {/* Radial glows */}
//                 <motion.div
//                   animate={{
//                     opacity: [0.4, 0.7, 0.4],
//                     scale: [1, 1.2, 1],
//                   }}
//                   transition={{
//                     duration: 3,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                   className="absolute inset-0 rounded-full blur-[80px]"
//                   style={{
//                     background: "radial-gradient(circle, rgba(251,146,60,0.75) 0%, rgba(251,191,36,0.55) 40%, transparent 70%)",
//                     zIndex: -1,
//                     transform: "scale(1.4)",
//                   }}
//                 />

//                 <motion.div
//                   animate={{
//                     opacity: [0.3, 0.6, 0.3],
//                     scale: [1, 1.15, 1],
//                   }}
//                   transition={{
//                     duration: 2.5,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                     delay: 0.7,
//                   }}
//                   className="absolute inset-0 rounded-full blur-[60px]"
//                   style={{
//                     background: "radial-gradient(circle, rgba(251,146,60,0.85) 0%, rgba(251,191,36,0.45) 50%, transparent 70%)",
//                     zIndex: -2,
//                   }}
//                 />

//                 {/* PRODUCT IMAGE */}
//                 <motion.img
//                   whileHover={{ scale: 1.07, transition: { duration: 0.4 } }}
//                   src={productImgDesktop}
//                   alt="Veer Bharat Kachi Ghani Mustard Oil"
//                   className="relative z-10 h-auto object-contain mx-auto"
//                   style={{
//                     width: "clamp(400px, 35vw, 700px)",
//                     filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.4)) drop-shadow(0 20px 50px rgba(251,146,60,0.35)) contrast(1.04) brightness(1.02)",
//                     imageRendering: "high-quality",
//                   }}
//                 />
//               </motion.div>
//             </motion.div>

//             {/* DESKTOP ICONS AROUND PRODUCT */}
//             {benefitsData.map((b, i) => (
//               <BenefitBubble
//                 key={`desktop-benefit-${i}`}
//                 src={b.src}
//                 alt={b.alt}
//                 label={b.label}
//                 stylePos={desktopPositions[i]}
//                 i={i}
//               />
//             ))}
//           </div>
//         </div>

//         {/* TABLET VERSION (768px - 1023px) - Product with icons around */}
//         <div className="relative mt-10 sm:mt-12 md:mt-14 w-full hidden md:block lg:hidden">
          
//           <div className="relative w-full flex justify-center items-center min-h-[550px]">
            
//             {/* Shadow */}
//             <motion.div
//               animate={{
//                 scale: [1, 1.12, 1],
//                 opacity: [0.08, 0.14, 0.08],
//               }}
//               transition={{
//                 duration: 4.5,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="absolute bottom-8 w-[320px] h-10 rounded-full bg-black/15 blur-2xl"
//             />

//             {/* CENTER PRODUCT */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.7 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 1.3 }}
//               className="z-50 relative"
//             >
//               <motion.div
//                 animate={{
//                   y: [0, -16, 0],
//                   rotate: [0, -1.5, 1, -0.8, 1.5, -1, 0],
//                   x: [0, -2, 2, -1.5, 2, -1, 0],
//                 }}
//                 transition={{
//                   y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
//                   rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
//                   x: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
//                 }}
//                 className="relative"
//               >
//                 <motion.div
//                   animate={{ opacity: [0.35, 0.65, 0.35], scale: [1, 1.15, 1] }}
//                   transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
//                   className="absolute inset-0 rounded-full blur-[60px]"
//                   style={{
//                     background: "radial-gradient(circle, rgba(251,146,60,0.7) 0%, rgba(251,191,36,0.5) 40%, transparent 70%)",
//                     zIndex: -1,
//                     transform: "scale(1.35)",
//                   }}
//                 />

//                 <img
//                   src={productImgDesktop}
//                   alt="Veer Bharat Mustard Oil"
//                   className="relative z-10 w-[380px] h-auto object-contain mx-auto"
//                   style={{
//                     filter: "drop-shadow(0 35px 70px rgba(0,0,0,0.35)) contrast(1.03)",
//                   }}
//                 />
//               </motion.div>
//             </motion.div>

//             {/* TABLET ICONS AROUND PRODUCT */}
//             {benefitsData.map((b, i) => (
//               <BenefitBubble
//                 key={`tablet-benefit-${i}`}
//                 src={b.src}
//                 alt={b.alt}
//                 label={b.label}
//                 stylePos={tabletPositions[i]}
//                 i={i}
//               />
//             ))}
//           </div>
//         </div>

//         {/* MOBILE VERSION (< 768px) - PRODUCT ONLY, NO ICONS */}
//         <div className="md:hidden mt-8 sm:mt-10">
//           <div className="flex justify-center px-3 sm:px-4 py-6 sm:py-8">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.7 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 1.2 }}
//               animate={{
//                 y: [0, -12, 0],
//                 rotate: [0, -1.5, 1, -0.5, 1.5, -1, 0],
//                 x: [0, -2, 1.5, -1, 2, -1.5, 0],
//               }}
//               transition={{
//                 y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
//                 rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
//                 x: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
//               }}
//               className="relative"
//             >
//               <motion.div
//                 animate={{
//                   opacity: [0.35, 0.75, 0.35],
//                   scale: [1, 1.15, 1],
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="absolute inset-0 rounded-full blur-[50px]"
//                 style={{
//                   background: "radial-gradient(circle, rgba(251,146,60,0.6) 0%, transparent 70%)",
//                   zIndex: -1,
//                 }}
//               />
//               <img
//                 src={productImgMobile}
//                 alt="Veer Bharat Mustard Oil"
//                 className="relative z-10 h-auto object-contain"
//                 style={{
//                   width: "clamp(220px, 70vw, 350px)",
//                   filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.3)) contrast(1.03)",
//                 }}
//               />
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom spacing */}
//       <div className="h-10 sm:h-12 md:h-16 lg:h-20 xl:h-24" />
//     </section>
//   );
// }






"use client";
import React from "react";

const benefitsData = [
  { 
    src: "/images/WhatsApp-Image-2025-09-23-at-13.35.21-2.jpg", 
    label: "Reduces\nCholesterol"
  },
  { 
    src: "/images/WhatsApp-Image-2025-09-23-at-13.35.20-3-1.jpg", 
    label: "High Smoke\nPoint"
  },
  { 
    src: "/images/WhatsApp-Image-2025-09-23-at-13.35.21.jpg", 
    label: "Skin-Improving\nBenefits"
  },
  { 
    src: "/images/WhatsApp-Image-2025-10-11-at-11.53.02-2.jpg", 
    label: "Natural\nAntioxidants"
  },
  { 
    src: "/images/WhatsApp-Image-2025-09-23-at-13.35.21-3.jpg", 
    label: "Physically\nRefined"
  },
  { 
    src: "/images/WhatsApp-Image-2025-10-11-at-11.53.02.jpeg", 
    label: "Balanced\nMUFA & PUFA"
  },
];

export default function VeerBharatHero() {
  const productImg = "/images/WhatsApp-Image-2025-10-07-at-10.57.53.jpg";

  return (
    <section
      className="relative overflow-hidden w-full min-h-screen"
      style={{
        background: "linear-gradient(135deg, #DFC6F6 0%, #fef9c3 50%, #DFC6F6 100%)",
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)
          `,
        }}></div>
      </div>

      {/* Classical Borders */}
      <div className="absolute top-0 left-0 w-48 h-48 md:w-72 md:h-72 border-l-4 border-t-4 border-purple-400 opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 md:w-72 md:h-72 border-r-4 border-b-4 border-yellow-400 opacity-20"></div>

      <div className="relative w-full px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-6xl mx-auto mb-12 sm:mb-16">
          
          {/* Top Divider */}
          <div className="flex items-center justify-center mb-8 gap-4">
            <div className="w-32 md:w-40 h-[3px] bg-gradient-to-r from-transparent via-purple-500 to-purple-600"></div>
            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 animate-pulse"></div>
            <div className="w-32 md:w-40 h-[3px] bg-gradient-to-l from-transparent via-yellow-500 to-yellow-600"></div>
          </div>

          {/* Main Heading */}
          <h1 className="font-black leading-tight mb-6 sm:mb-8" style={{
            fontFamily: "'Playfair Display', 'Georgia', serif",
            color: "#0f172a",
            textShadow: "2px 2px 4px rgba(0,0,0,0.15)",
          }}>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-3">
              VEER BHARAT
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-3 bg-gradient-to-r from-[#16335f] via-orange-500 to-[#16335f] bg-clip-text text-transparent">
              KACHI GHANI
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              MUSTARD OIL
            </span>
          </h1>

          {/* Description */}
          <div className="max-w-5xl mx-auto px-4">
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-900 leading-relaxed font-bold mb-6" style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
            }}>
              Made from <span className="text-purple-700">100% pure mustard seeds</span>, Veer Bharat Kachi Ghani Mustard Oil is a <span className="text-orange-600">heart-healthy cooking oil</span> rich in natural goodness, which helps reduce cholesterol levels and improve overall health.
            </p>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-900 leading-relaxed font-bold" style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
            }}>
              It's ideal for everyday cooking with a balanced blend of monounsaturated and polyunsaturated fats. Free from harmful chemicals, it's packed with antioxidants and offers a mild flavour, making it perfect for frying, sautéing, and more. Choose Veer Bharat Kachi Ghani Mustard Oil for a healthier, cholesterol-conscious, and nutritious lifestyle.
            </p>
          </div>
        </div>

        {/* MAIN LAYOUT - TOP 3 CIRCLES, PRODUCT, BOTTOM 3 CIRCLES */}
        <div className="max-w-7xl mx-auto">
          
          {/* TOP 3 BENEFITS */}
          <div className="flex justify-around items-center mb-8 sm:mb-12 md:mb-16 px-4 gap-4 sm:gap-6 md:gap-8">
            {benefitsData.slice(0, 3).map((benefit, idx) => (
              <div
                key={`top-${idx}`}
                className="flex flex-col items-center hover:scale-110 transition-transform duration-500"
                style={{
                  animation: `fadeInScale 0.8s ease-out ${idx * 0.15}s both`
                }}
              >
                {/* Circular Benefit */}
                <div className="relative mb-3 sm:mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full blur-xl opacity-60 animate-pulse"></div>
                  <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-500 flex items-center justify-center shadow-2xl border-4 sm:border-6 border-white">
                    <img
                      src={benefit.src}
                      alt={benefit.label}
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain"
                    />
                  </div>
                </div>
                {/* Label */}
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-black text-gray-900 text-center whitespace-pre-line leading-tight" style={{
                  fontFamily: "'Georgia', serif",
                }}>
                  {benefit.label}
                </p>
              </div>
            ))}
          </div>

          {/* CENTER PRODUCT IMAGE */}
          <div className="text-center my-8 sm:my-12 md:my-16">
            <div className="relative inline-block">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-yellow-400 to-orange-500 rounded-full blur-3xl opacity-50 animate-pulse" style={{
                transform: "scale(1.4)",
              }}></div>
              
              {/* Product Image */}
              <img
                src={productImg}
                alt="Veer Bharat Kachi Ghani Mustard Oil"
                className="relative z-10 w-56 sm:w-72 md:w-96 lg:w-[450px] xl:w-[550px] h-auto mx-auto hover:scale-105 transition-transform duration-700"
                style={{
                  filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.4))",
                }}
              />
            </div>
          </div>

          {/* BOTTOM 3 BENEFITS */}
          <div className="flex justify-around items-center mt-8 sm:mt-12 md:mt-16 px-4 gap-4 sm:gap-6 md:gap-8">
            {benefitsData.slice(3, 6).map((benefit, idx) => (
              <div
                key={`bottom-${idx}`}
                className="flex flex-col items-center hover:scale-110 transition-transform duration-500"
                style={{
                  animation: `fadeInScale 0.8s ease-out ${(idx + 3) * 0.15}s both`
                }}
              >
                {/* Circular Benefit */}
                <div className="relative mb-3 sm:mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full blur-xl opacity-60 animate-pulse"></div>
                  <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-500 flex items-center justify-center shadow-2xl border-4 sm:border-6 border-white">
                    <img
                      src={benefit.src}
                      alt={benefit.label}
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain"
                    />
                  </div>
                </div>
                {/* Label */}
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-black text-gray-900 text-center whitespace-pre-line leading-tight" style={{
                  fontFamily: "'Georgia', serif",
                }}>
                  {benefit.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CLOSING STATEMENT */}
        <div className="text-center max-w-5xl mx-auto mt-16 sm:mt-20 md:mt-24">
          <div className="bg-gradient-to-r from-purple-100 via-yellow-100 to-purple-100 rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl border-4 border-purple-300">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4" style={{
              fontFamily: "'Playfair Display', serif",
              color: "#0f172a",
            }}>
              ELEVATE YOUR EXPERIENCE
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900" style={{
              fontFamily: "'Georgia', serif",
            }}>
              Experience the <span className="text-purple-700">Purity</span>, <span className="text-orange-600">Health</span>, and <span className="text-green-700">Tradition</span> in Every Drop!
            </p>
          </div>
        </div>

      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}