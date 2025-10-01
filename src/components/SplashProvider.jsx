// "use client";

// import { createContext, useContext, useState, useCallback } from "react";

// const SplashContext = createContext();

// export function useSplash() {
//   return useContext(SplashContext);
// }

// export default function SplashProvider({ children }) {
//   const [visible, setVisible] = useState(false);

//   const show = useCallback((ms = 800) => {
//     setVisible(true);
//     setTimeout(() => setVisible(false), ms);
//   }, []);

//   return (
//     <SplashContext.Provider value={{ show }}>
//       {children}
//       {visible && <LogoSplash />}
//     </SplashContext.Provider>
//   );
// }

// function LogoSplash() {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500">
//       {/* Replace logo.png with your real logo in /public */}
//       <img src="/logo.png" alt="Veer Bharat" className="w-40 h-40 object-contain animate-pulse" />
//     </div>
    
//   );
// }




// "use client";

// import { createContext, useContext, useCallback, useRef, useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const SplashContext = createContext();
// export function useSplash() {
//   return useContext(SplashContext);
// }

// export default function SplashProvider({ children }) {
//   const [visible, setVisible] = useState(false);
//   const resolveRef = useRef(null);
//   const timeoutRef = useRef(null);

//   // duration (ms) of splash animation — adjust if you want shorter/longer
//   const DURATION = 1600;

//   const show = useCallback((ms = DURATION) => {
//     const prefersReduced = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//     if (prefersReduced) {
//       return new Promise((resolve) => {
//         setVisible(true);
//         setTimeout(() => {
//           setVisible(false);
//           resolve();
//         }, 120);
//       });
//     }

//     setVisible(true);
//     return new Promise((resolve) => {
//       resolveRef.current = resolve;
//       // safety hard cap
//       timeoutRef.current = setTimeout(() => {
//         if (resolveRef.current) {
//           resolveRef.current();
//           resolveRef.current = null;
//           setVisible(false);
//         }
//       }, Math.max(3000, ms + 600));
//     });
//   }, []);

//   const hideNow = useCallback(() => {
//     if (resolveRef.current) {
//       resolveRef.current();
//       resolveRef.current = null;
//     }
//     clearTimeout(timeoutRef.current);
//     setVisible(false);
//   }, []);

//   useEffect(() => {
//     return () => clearTimeout(timeoutRef.current);
//   }, []);

//   return (
//     <SplashContext.Provider value={{ show, hideNow }}>
//       {children}
//       <AnimatePresence>{visible && <LogoSplash onDone={hideNow} duration={DURATION} resolveRef={resolveRef} />}</AnimatePresence>
//     </SplashContext.Provider>
//   );
// }

// /* ---------------- LogoSplash UI (bigger logo, light bg, H1 Happy Navratri) ---------------- */
// function LogoSplash({ onDone, duration = 1600, resolveRef }) {
//   const container = {
//     hidden: { opacity: 0 },
//     show: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.03 } },
//     exit: { opacity: 0, transition: { duration: 0.28 } },
//   };
//   const logo = {
//     hidden: { opacity: 0, scale: 0.85, rotate: -4 },
//     show: {
//       opacity: 1,
//       scale: [1.04, 0.96, 1],
//       rotate: [0, 2, 0],
//       transition: { duration: 0.9, ease: [0.2, 0.9, 0.2, 1] },
//     },
//   };
//   const text = {
//     hidden: { opacity: 0, y: 10 },
//     show: { opacity: 1, y: 0, transition: { delay: 0.55, duration: 0.45 } },
//   };

//   const handleComplete = () => {
//     setTimeout(() => {
//       if (resolveRef && resolveRef.current) {
//         resolveRef.current();
//         resolveRef.current = null;
//       }
//       onDone();
//     }, 140);
//   };

//   return (
//     <motion.div
//       className="fixed inset-0 z-[9999] flex items-center justify-center"
//       variants={container}
//       initial="hidden"
//       animate="show"
//       exit="exit"
//       style={{ pointerEvents: "none" }}
//     >
//       {/* Light backdrop (soft cream) */}
//       <motion.div
//         className="absolute inset-0"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.28 }}
//         style={{
//           background:
//             "linear-gradient(180deg, rgba(255,250,240,0.95) 0%, rgba(255,246,230,0.95) 50%, rgba(255,250,240,0.95) 100%)",
//           backdropFilter: "blur(6px)",
//         }}
//       />

//       {/* Subtle particles */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <span className="splash-p p1" />
//         <span className="splash-p p2" />
//         <span className="splash-p p3" />
//         <span className="splash-p p4" />
//         <span className="splash-p p5" />
//       </div>

//       {/* Card (lighter, elegant) */}
//       <motion.div
//         className="relative z-50 p-8 rounded-3xl bg-white/95 shadow-2xl border border-yellow-50 flex flex-col items-center justify-center"
//         style={{ width: "min(88%, 720px)", pointerEvents: "auto" }}
//       >
//         {/* Logo container - BIGGER */}
//         <motion.div
//           className="relative flex items-center justify-center w-64 h-64 rounded-xl overflow-hidden"
//           variants={logo}
//           onAnimationComplete={handleComplete}
//         >
//           <img src="/logo.png" alt="Veer Bharat" className="w-full h-full object-contain" />

//           {/* gold shimmer overlay */}
//           <div className="absolute inset-0 shimmer-mask pointer-events-none" aria-hidden />
//         </motion.div>

//         {/* H1 title - Happy Navratri */}
//         <motion.h1 className="mt-5 text-3xl md:text-4xl font-extrabold text-[#9b4b00] tracking-tight" variants={text}>
//           Happy Navratri
//         </motion.h1>

//         {/* festival subtext (Hindi + Eng) */}
//         <motion.p className="mt-2 text-sm md:text-base text-[#6b3b00] text-center max-w-xl" variants={text}>
//           शुभ नवरात्रि — Celebrating the vibrant nine nights of Garba & Dandiya. वंदे मातरम्, खुशियों भरा उत्सव।
//         </motion.p>
//       </motion.div>
//     </motion.div>
//   );
// }


// "use client";

// import { createContext, useContext, useCallback, useRef, useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const SplashContext = createContext();
// export function useSplash() {
//   return useContext(SplashContext);
// }

// export default function SplashProvider({ children }) {
//   const [visible, setVisible] = useState(false);
//   const resolveRef = useRef(null);
//   const timeoutRef = useRef(null);

//   // duration (ms) of splash animation — adjust if you want shorter/longer
//   const DURATION = 1600;

//   const show = useCallback((ms = DURATION) => {
//     const prefersReduced = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//     if (prefersReduced) {
//       return new Promise((resolve) => {
//         setVisible(true);
//         setTimeout(() => {
//           setVisible(false);
//           resolve();
//         }, 120);
//       });
//     }

//     setVisible(true);
//     return new Promise((resolve) => {
//       resolveRef.current = resolve;
//       // safety hard cap
//       timeoutRef.current = setTimeout(() => {
//         if (resolveRef.current) {
//           resolveRef.current();
//           resolveRef.current = null;
//           setVisible(false);
//         }
//       }, Math.max(3000, ms + 600));
//     });
//   }, []);

//   const hideNow = useCallback(() => {
//     if (resolveRef.current) {
//       resolveRef.current();
//       resolveRef.current = null;
//     }
//     clearTimeout(timeoutRef.current);
//     setVisible(false);
//   }, []);

//   useEffect(() => {
//     return () => clearTimeout(timeoutRef.current);
//   }, []);

//   return (
//     <SplashContext.Provider value={{ show, hideNow }}>
//       {children}
//       <AnimatePresence>{visible && <LogoSplash onDone={hideNow} duration={DURATION} resolveRef={resolveRef} />}</AnimatePresence>
//     </SplashContext.Provider>
//   );
// }

// /* ---------------- LogoSplash UI (bigger logo, deep maroon bg, gold shimmer) ---------------- */
// function LogoSplash({ onDone, duration = 1600, resolveRef }) {
//   const container = {
//     hidden: { opacity: 0 },
//     show: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.03 } },
//     exit: { opacity: 0, transition: { duration: 0.28 } },
//   };
//   const logo = {
//     hidden: { opacity: 0, scale: 0.8, rotate: -6 },
//     show: {
//       opacity: 1,
//       scale: [1.1, 0.95, 1],
//       rotate: [0, 3, 0],
//       transition: { duration: 1.1, ease: [0.2, 0.9, 0.2, 1] },
//     },
//   };
//   const text = {
//     hidden: { opacity: 0, y: 14 },
//     show: { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.5 } },
//   };

//   const handleComplete = () => {
//     setTimeout(() => {
//       if (resolveRef && resolveRef.current) {
//         resolveRef.current();
//         resolveRef.current = null;
//       }
//       onDone();
//     }, 140);
//   };

//   return (
//     <motion.div
//       className="fixed inset-0 z-[9999] flex items-center justify-center"
//       variants={container}
//       initial="hidden"
//       animate="show"
//       exit="exit"
//       style={{ pointerEvents: "none", backgroundColor: "#3b0a0a" }} // deep maroon background
//     >
//       {/* Soft glowing backdrop */}
//       <motion.div
//         className="absolute inset-0"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.9 }}
//         transition={{ duration: 0.4 }}
//         style={{
//           background:
//             "radial-gradient(circle at center, #f9d976 0%, #f39c12 60%, #3b0a0a 100%)",
//           filter: "blur(40px)",
//         }}
//       />

//       {/* Subtle golden particles */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <span className="splash-p p1" style={{ background: "radial-gradient(circle at 30% 30%, #fff8dc, #f7d358)" }} />
//         <span className="splash-p p2" style={{ background: "radial-gradient(circle at 30% 30%, #fff8dc, #f7d358)" }} />
//         <span className="splash-p p3" style={{ background: "radial-gradient(circle at 30% 30%, #fff8dc, #f7d358)" }} />
//         <span className="splash-p p4" style={{ background: "radial-gradient(circle at 30% 30%, #fff8dc, #f7d358)" }} />
//         <span className="splash-p p5" style={{ background: "radial-gradient(circle at 30% 30%, #fff8dc, #f7d358)" }} />
//       </div>

//       {/* Card with gold border and warm cream background */}
//       <motion.div
//         className="relative z-50 p-10 rounded-3xl bg-gradient-to-br from-yellow-50/90 to-yellow-100/90 shadow-[0_0_40px_rgba(255,215,0,0.6)] border border-yellow-400 flex flex-col items-center justify-center"
//         style={{ width: "min(90%, 800px)", pointerEvents: "auto" }}
//       >
//         {/* Bigger logo container */}
//         <motion.div
//           className="relative flex items-center justify-center w-72 h-72 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(255,215,0,0.8)]"
//           variants={logo}
//           onAnimationComplete={handleComplete}
//           style={{ boxShadow: "0 0 40px 8px rgba(255, 215, 0, 0.9)" }}
//         >
//           <img src="/logo.png" alt="Veer Bharat" className="w-full h-full object-contain" />

//           {/* gold shimmer overlay */}
//           <div className="absolute inset-0 shimmer-mask pointer-events-none" aria-hidden />
//         </motion.div>

//         {/* H1 title */}
//         <motion.h1
//           className="mt-6 text-4xl md:text-5xl font-extrabold text-yellow-800 tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]"
//           variants={text}
//         >
//           Happy Navratri
//         </motion.h1>

//         {/* festival subtext */}
//         <motion.p
//           className="mt-3 text-lg md:text-xl text-yellow-900 text-center max-w-xl font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]"
//           variants={text}
//         >
//           शुभ नवरात्रि — Celebrating the vibrant nine nights of Garba & Dandiya. वंदे मातरम्, खुशियों भरा उत्सव।
//         </motion.p>
//       </motion.div>
//     </motion.div>
//   );
// }


"use client";

import { createContext, useContext, useCallback, useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SplashContext = createContext();
export function useSplash() {
  return useContext(SplashContext);
}

export default function SplashProvider({ children }) {
  const [visible, setVisible] = useState(false);
  const resolveRef = useRef(null);
  const timeoutRef = useRef(null);

  const DURATION = 1600;

  const show = useCallback((ms = DURATION) => {
    const prefersReduced = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      return new Promise((resolve) => {
        setVisible(true);
        setTimeout(() => {
          setVisible(false);
          resolve();
        }, 120);
      });
    }

    setVisible(true);
    return new Promise((resolve) => {
      resolveRef.current = resolve;
      timeoutRef.current = setTimeout(() => {
        if (resolveRef.current) {
          resolveRef.current();
          resolveRef.current = null;
          setVisible(false);
        }
      }, Math.max(3000, ms + 600));
    });
  }, []);

  const hideNow = useCallback(() => {
    if (resolveRef.current) {
      resolveRef.current();
      resolveRef.current = null;
    }
    clearTimeout(timeoutRef.current);
    setVisible(false);
  }, []);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <SplashContext.Provider value={{ show, hideNow }}>
      {children}
      <AnimatePresence>
        {visible && <LogoSplash onDone={hideNow} duration={DURATION} resolveRef={resolveRef} />}
      </AnimatePresence>
    </SplashContext.Provider>
  );
}

/* ---------------- LogoSplash UI with circular open/close animation ---------------- */
function LogoSplash({ onDone, duration = 1600, resolveRef }) {
  // Container variants for circular scale + borderRadius animation
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
      borderRadius: "50%",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    show: {
      opacity: 1,
      scale: 1,
      borderRadius: "1.5rem", // same as card border radius
      transition: { duration: 0.8, ease: [0.2, 0.9, 0.2, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0,
      borderRadius: "50%",
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  // Logo animation (scale & rotate subtle)
  const logo = {
    hidden: { opacity: 0, scale: 0.85, rotate: -3 },
    show: {
      opacity: 1,
      scale: [1.05, 0.97, 1],
      rotate: [0, 1.5, 0],
      transition: { duration: 1, ease: [0.2, 0.9, 0.2, 1] },
    },
  };

  // Text fade and slide up
  const text = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { delay: 0.55, duration: 0.45 } },
  };

  const handleComplete = () => {
    setTimeout(() => {
      if (resolveRef && resolveRef.current) {
        resolveRef.current();
        resolveRef.current = null;
      }
      onDone();
    }, 140);
  };

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#fef9c3]"
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{
        pointerEvents: "auto",
        width: "min(90%, 800px)",
        height: "min(90%, 800px)",
        maxWidth: "800px",
        maxHeight: "800px",
        margin: "auto",
        boxShadow: "0 8px 32px 0 rgba(223, 198, 246, 0.25)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "2px solid rgba(254, 249, 195, 0.6)",
        background: "rgba(223, 198, 246, 0.3)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      onAnimationComplete={handleComplete}
    >
      {/* Logo container */}
      <motion.div
        className="relative rounded-xl overflow-hidden"
        variants={logo}
        style={{
          width: "280px",
          height: "280px",
          boxShadow:
            "0 0 20px 6px rgba(223, 198, 246, 0.6), inset 0 0 15px 3px rgba(254, 249, 195, 0.5)",
          borderRadius: "1.5rem",
          marginBottom: "1.5rem",
        }}
      >
        <img src="/logo.png" alt="Veer Bharat" className="w-full h-full object-contain" />

        {/* shimmer overlay */}
        <div
          className="absolute inset-0 shimmer-mask pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(120deg, rgba(223,198,246,0.15), rgba(254,249,195,0.25), rgba(223,198,246,0.15))",
            maskImage:
              "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0) 80%)",
            transform: "translateX(-140%) rotate(8deg)",
            animation: "splash-shimmer 1s cubic-bezier(.2,.9,.2,1) forwards",
            mixBlendMode: "screen",
            opacity: 0.85,
          }}
        />
      </motion.div>

      {/* Title */}
      <motion.h1
        className="font-extrabold tracking-wide"
        variants={text}
        style={{
          fontSize: "2.75rem",
          color: "#3a2c5a",
          textShadow: "0 2px 6px rgba(58, 44, 90, 0.5)",
          fontFamily: "'Georgia', serif",
          marginBottom: "0.5rem",
        }}
      >
        Happy Navratri
      </motion.h1>

      {/* Decorative line */}
      <motion.div
        variants={text}
        style={{
          width: "120px",
          height: "4px",
          margin: "0 auto 1.5rem",
          borderRadius: "2px",
          background: "linear-gradient(90deg, #DFC6F6, #fef9c3, #DFC6F6)",
          boxShadow: "0 0 8px 2px rgba(223, 198, 246, 0.7)",
        }}
      />

      {/* Subtext */}
      <motion.p
        className="text-center max-w-xl font-semibold"
        variants={text}
        style={{
          fontSize: "1.15rem",
          color: "#4b4460",
          fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif",
          lineHeight: 1.5,
          userSelect: "none",
        }}
      >
        शुभ नवरात्रि — Celebrating the vibrant nine nights of Garba & Dandiya. वंदे मातरम्, खुशियों भरा उत्सव।
      </motion.p>
    </motion.div>
  );
}
