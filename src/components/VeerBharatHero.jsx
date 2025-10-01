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


import React from "react";
import { motion } from "framer-motion";

/**
 * Put these files in public/images/ exactly as named:
 * - Veer Bharat Post (1).png (Main product image - ONLY ONE USED)
 * - WhatsApp Image 2025-09-23 at 13.35.21.jpeg
 * - WhatsApp Image 2025-09-23 at 13.35.21-2.jpeg
 * - WhatsApp Image 2025-09-23 at 13.35.21-3.jpeg
 * - WhatsApp Image 2025-09-23 at 13.35.21-4.jpeg
 * - WhatsApp Image 2025-09-23 at 13.35.21-5.jpeg
 * - WhatsApp Image 2025-09-23 at 13.35.20-3.jpeg
 */

const benefitsData = [
  { 
    src: "/images/WhatsApp Image 2025-09-23 at 13.35.21.jpeg", 
    alt: "Reduces Cholesterol", 
    label: "Reduces\nCholesterol" 
  },
  { 
    src: "/images/WhatsApp Image 2025-09-23 at 13.35.20-3.jpeg", 
    alt: "High Smoke Point", 
    label: "High Smoke\nPoint" 
  },
  { 
    src: "/images/WhatsApp Image 2025-09-23 at 13.35.21-5.jpeg", 
    alt: "Skin-Improving Benefits", 
    label: "Skin-Improving\nBenefits" 
  },
  { 
    src: "/images/WhatsApp Image 2025-09-23 at 13.35.21-2.jpeg", 
    alt: "Natural Antioxidants", 
    label: "Natural\nAntioxidants" 
  },
  { 
    src: "/images/WhatsApp Image 2025-09-23 at 13.35.21-3.jpeg", 
    alt: "Physically Refined", 
    label: "Physically\nRefined" 
  },
  { 
    src: "/images/WhatsApp Image 2025-09-23 at 13.35.21-4.jpeg", 
    alt: "Balanced MUFA & PUFA", 
    label: "Balanced\nMUFA & PUFA" 
  },
];

// Desktop positions - exact replica of King's Rice Bran Oil layout
const desktopPositions = [
  { left: "6%", top: "42%" },      // Left side - top
  { left: "18%", top: "12%" },     // Left upper
  { left: "24%", top: "70%" },     // Left lower
  { right: "18%", top: "16%" },    // Right upper
  { right: "24%", top: "66%" },    // Right lower
  { right: "6%", top: "42%" }      // Right side - top
];

function BenefitBubble({ src, alt, label, stylePos, i }) {
  const desktopSize = 240;
  const mobileSize = 120;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.7, 
        delay: i * 0.12,
        type: "spring",
        stiffness: 180
      }}
      whileHover={{ scale: 1.1, y: -10 }}
      style={{
        position: stylePos ? "absolute" : "relative",
        zIndex: 20,
        ...stylePos,
      }}
      className={stylePos ? "hidden xl:block" : "block xl:hidden"}
    >
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 3.5 + (i % 3) * 0.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.25,
        }}
        className="flex flex-col items-center"
      >
        {/* Blinking outer glow */}
        <motion.div
          animate={{
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.08, 1],
            boxShadow: [
              "0 0 30px rgba(251,191,36,0.4)",
              "0 0 50px rgba(251,191,36,0.8)",
              "0 0 30px rgba(251,191,36,0.4)",
            ]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
          className="rounded-full"
          style={{
            width: stylePos ? desktopSize : mobileSize,
            height: stylePos ? desktopSize : mobileSize,
            background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #f97316 100%)",
            padding: "8px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
          }}
        >
          <div
            className="rounded-full overflow-hidden flex items-center justify-center w-full h-full"
            style={{
              backgroundColor: "#fef9c3",
            }}
          >
            <img 
              src={src} 
              alt={alt} 
              className="w-[75%] h-[75%] object-contain"
              style={{
                mixBlendMode: "normal",
              }}
            />
          </div>
        </motion.div>

        {/* Label below bubble - desktop only */}
        {stylePos && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1 }}
            className="mt-5 text-center font-black leading-tight px-2"
            style={{
              fontSize: "17px",
              maxWidth: desktopSize,
              whiteSpace: "pre-line",
              color: "#0f172a",
              fontFamily: "'Arial Black', sans-serif",
              textShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            {label}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function VeerBharatHero() {
  const productImg = "/images/Veer Bharat Post (1).png";

  return (
    <section 
      className="relative overflow-hidden" 
      style={{ 
        background: "#fef9c3",
        minHeight: "100vh" 
      }}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 py-12 md:py-16 lg:py-20 xl:py-24">
        
        {/* HEADER SECTION - Premium Typography */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-10 md:mb-14 lg:mb-16"
        >
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight mb-6 md:mb-8 lg:mb-10 leading-tight"
            style={{
              fontFamily: "'Arial Black', 'Helvetica', sans-serif",
              color: "#000000",
              letterSpacing: "0.01em",
              textTransform: "uppercase",
            }}
          >
            VEER BHARAT KACHI GHANI
            <br />
            MUSTARD OIL
          </h1>
          
          {/* Description paragraphs with premium styling */}
          <div className="max-w-6xl mx-auto space-y-5 md:space-y-7 px-4 md:px-8">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed font-medium"
              style={{
                fontFamily: "'Georgia', 'Times New Roman', serif",
                color: "#1e293b",
                lineHeight: "1.75",
                fontWeight: "500",
              }}
            >
              Made from 100% pure mustard seeds, Veer Bharat Kachi Ghani Mustard Oil is a heart-healthy cooking oil rich in natural goodness, which helps reduce cholesterol levels and improve overall health.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed font-medium"
              style={{
                fontFamily: "'Georgia', 'Times New Roman', serif",
                color: "#1e293b",
                lineHeight: "1.75",
                fontWeight: "500",
              }}
            >
              It's ideal for everyday cooking with a balanced blend of monounsaturated and polyunsaturated fats. Free from harmful chemicals, it's packed with antioxidants and offers a mild flavour, making it perfect for frying, sautéing, and more. Choose Veer Bharat Kachi Ghani Mustard Oil for a healthier, cholesterol-conscious, and nutritious lifestyle.
            </motion.p>
          </div>
        </motion.div>

        {/* MAIN PRODUCT SECTION */}
        <div className="relative mt-16 md:mt-20 lg:mt-24 xl:mt-28">
          
          {/* Desktop Layout - Circular arrangement */}
          <div className="relative w-full flex justify-center items-center min-h-[700px] xl:min-h-[850px]">
            
            {/* Soft shadow under product */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.08, 0.14, 0.08],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-4 w-[350px] md:w-[450px] lg:w-[550px] xl:w-[650px] h-10 md:h-14 lg:h-16 rounded-full bg-black/10 blur-3xl"
            />

            {/* CENTER PRODUCT - WITH PREMIUM BLINKING EFFECT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 80 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1.3, 
                type: "spring",
                stiffness: 120 
              }}
              className="z-40 relative"
            >
              <motion.div
                animate={{
                  y: [0, -18, 0],
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{
                  y: {
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  rotate: {
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="relative"
              >
                {/* BLINKING RADIAL GLOW - Multiple layers */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-full blur-3xl"
                  style={{
                    background: "radial-gradient(circle, rgba(251,191,36,0.7) 0%, rgba(245,158,11,0.5) 40%, transparent 70%)",
                    zIndex: -1,
                    transform: "scale(1.3)",
                  }}
                />

                <motion.div
                  animate={{
                    opacity: [0.4, 0.9, 0.4],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute inset-0 rounded-full blur-2xl"
                  style={{
                    background: "radial-gradient(circle, rgba(251,191,36,0.8) 0%, rgba(245,158,11,0.4) 50%, transparent 70%)",
                    zIndex: -2,
                  }}
                />

                {/* PRODUCT IMAGE - Larger size */}
                <motion.img
                  whileHover={{ scale: 1.06, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  src={productImg}
                  alt="Veer Bharat Kachi Ghani Mustard Oil"
                  className="relative z-10 w-72 sm:w-96 md:w-[480px] lg:w-[580px] xl:w-[700px] h-auto object-contain mx-auto"
                  style={{
                    filter: "drop-shadow(0 35px 70px rgba(0,0,0,0.35)) drop-shadow(0 20px 40px rgba(251,191,36,0.3))",
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Desktop benefit bubbles - arranged in circle */}
            {benefitsData.map((b, i) => (
              <BenefitBubble
                key={i}
                src={b.src}
                alt={b.alt}
                label={b.label}
                stylePos={desktopPositions[i]}
                i={i}
              />
            ))}
          </div>

          {/* MOBILE/TABLET LAYOUT - Grid Style */}
          <div className="xl:hidden mt-12 md:mt-16 space-y-10">
            
            {/* Top row - 3 benefits */}
            <div className="grid grid-cols-3 gap-3 sm:gap-5 px-2 sm:px-4">
              {benefitsData.slice(0, 3).map((b, i) => (
                <div key={i} className="flex flex-col items-center">
                  <BenefitBubble 
                    src={b.src} 
                    alt={b.alt} 
                    label={b.label} 
                    stylePos={null} 
                    i={i} 
                  />
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base font-black text-center leading-tight whitespace-pre-line"
                    style={{
                      color: "#0f172a",
                      fontFamily: "'Arial Black', sans-serif",
                    }}
                  >
                    {b.label}
                  </motion.p>
                </div>
              ))}
            </div>

            {/* Center product for mobile */}
            <div className="flex justify-center px-4 py-6">
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <motion.div
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.12, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-full blur-2xl"
                  style={{
                    background: "radial-gradient(circle, rgba(251,191,36,0.6) 0%, transparent 70%)",
                    zIndex: -1,
                  }}
                />
                <img
                  src={productImg}
                  alt="Veer Bharat Mustard Oil"
                  className="w-56 sm:w-72 md:w-80 h-auto object-contain relative z-10"
                  style={{
                    filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.3))",
                  }}
                />
              </motion.div>
            </div>

            {/* Bottom row - 3 benefits */}
            <div className="grid grid-cols-3 gap-3 sm:gap-5 px-2 sm:px-4">
              {benefitsData.slice(3, 6).map((b, i) => (
                <div key={i} className="flex flex-col items-center">
                  <BenefitBubble 
                    src={b.src} 
                    alt={b.alt} 
                    label={b.label} 
                    stylePos={null} 
                    i={i + 3} 
                  />
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base font-black text-center leading-tight whitespace-pre-line"
                    style={{
                      color: "#0f172a",
                      fontFamily: "'Arial Black', sans-serif",
                    }}
                  >
                    {b.label}
                  </motion.p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="h-16 md:h-20" />
    </section>
  );
}