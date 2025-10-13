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
//       <AnimatePresence>
//         {visible && <LogoSplash onDone={hideNow} duration={DURATION} resolveRef={resolveRef} />}
//       </AnimatePresence>
//     </SplashContext.Provider>
//   );
// }

// /* ---------------- LogoSplash UI with circular open/close animation ---------------- */
// function LogoSplash({ onDone, duration = 1600, resolveRef }) {
//   // Container variants for circular scale + borderRadius animation
//   const container = {
//     hidden: {
//       opacity: 0,
//       scale: 0,
//       borderRadius: "50%",
//       transition: { duration: 0.5, ease: "easeInOut" },
//     },
//     show: {
//       opacity: 1,
//       scale: 1,
//       borderRadius: "1.5rem", // same as card border radius
//       transition: { duration: 0.8, ease: [0.2, 0.9, 0.2, 1] },
//     },
//     exit: {
//       opacity: 0,
//       scale: 0,
//       borderRadius: "50%",
//       transition: { duration: 0.6, ease: "easeInOut" },
//     },
//   };

//   // Logo animation (scale & rotate subtle)
//   const logo = {
//     hidden: { opacity: 0, scale: 0.85, rotate: -3 },
//     show: {
//       opacity: 1,
//       scale: [1.05, 0.97, 1],
//       rotate: [0, 1.5, 0],
//       transition: { duration: 1, ease: [0.2, 0.9, 0.2, 1] },
//     },
//   };

//   // Text fade and slide up
//   const text = {
//     hidden: { opacity: 0, y: 12 },
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
//       className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#fef9c3]"
//       variants={container}
//       initial="hidden"
//       animate="show"
//       exit="exit"
//       style={{
//         pointerEvents: "auto",
//         width: "min(90%, 800px)",
//         height: "min(90%, 800px)",
//         maxWidth: "800px",
//         maxHeight: "800px",
//         margin: "auto",
//         boxShadow: "0 8px 32px 0 rgba(223, 198, 246, 0.25)",
//         backdropFilter: "blur(12px)",
//         WebkitBackdropFilter: "blur(12px)",
//         border: "2px solid rgba(254, 249, 195, 0.6)",
//         background: "rgba(223, 198, 246, 0.3)",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//       onAnimationComplete={handleComplete}
//     >
//       {/* Logo container */}
//       <motion.div
//         className="relative rounded-xl overflow-hidden"
//         variants={logo}
//         style={{
//           width: "280px",
//           height: "280px",
//           boxShadow:
//             "0 0 20px 6px rgba(223, 198, 246, 0.6), inset 0 0 15px 3px rgba(254, 249, 195, 0.5)",
//           borderRadius: "1.5rem",
//           marginBottom: "1.5rem",
//         }}
//       >
//         <img src="/logo.png" alt="Veer Bharat" className="w-full h-full object-contain" />

//         {/* shimmer overlay */}
//         <div
//           className="absolute inset-0 shimmer-mask pointer-events-none"
//           aria-hidden="true"
//           style={{
//             background:
//               "linear-gradient(120deg, rgba(223,198,246,0.15), rgba(254,249,195,0.25), rgba(223,198,246,0.15))",
//             maskImage:
//               "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0) 80%)",
//             transform: "translateX(-140%) rotate(8deg)",
//             animation: "splash-shimmer 1s cubic-bezier(.2,.9,.2,1) forwards",
//             mixBlendMode: "screen",
//             opacity: 0.85,
//           }}
//         />
//       </motion.div>

//       {/* Title */}
//       <motion.h1
//         className="font-extrabold tracking-wide"
//         variants={text}
//         style={{
//           fontSize: "2.75rem",
//           color: "#3a2c5a",
//           textShadow: "0 2px 6px rgba(58, 44, 90, 0.5)",
//           fontFamily: "'Georgia', serif",
//           marginBottom: "0.5rem",
//         }}
//       >
//         Happy Navratri
//       </motion.h1>

//       {/* Decorative line */}
//       <motion.div
//         variants={text}
//         style={{
//           width: "120px",
//           height: "4px",
//           margin: "0 auto 1.5rem",
//           borderRadius: "2px",
//           background: "linear-gradient(90deg, #DFC6F6, #fef9c3, #DFC6F6)",
//           boxShadow: "0 0 8px 2px rgba(223, 198, 246, 0.7)",
//         }}
//       />

//       {/* Subtext */}
//       <motion.p
//         className="text-center max-w-xl font-semibold"
//         variants={text}
//         style={{
//           fontSize: "1.15rem",
//           color: "#4b4460",
//           fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif",
//           lineHeight: 1.5,
//           userSelect: "none",
//         }}
//       >
//         शुभ नवरात्रि — Celebrating the vibrant nine nights of Garba & Dandiya. वंदे मातरम्, खुशियों भरा उत्सव।
//       </motion.p>
//     </motion.div>
//   );
// }





// "use client";

// import { createContext, useContext, useCallback, useRef, useState, useEffect } from "react";

// const SplashContext = createContext();

// export function useSplash() {
//   return useContext(SplashContext);
// }

// export default function SplashProvider({ children }) {
//   const [visible, setVisible] = useState(false);
//   const resolveRef = useRef(null);
//   const timeoutRef = useRef(null);

//   const DURATION = 10000; // 10 seconds

//   useEffect(() => {
//     // Check if splash has been shown in this session
//     const splashShown = sessionStorage.getItem('splashShown');
    
//     // Show splash only if not shown in this session
//     if (!splashShown) {
//       setVisible(true);
//       sessionStorage.setItem('splashShown', 'true');
      
//       timeoutRef.current = setTimeout(() => {
//         setVisible(false);
//       }, DURATION);
//     }
//   }, []);

//   const show = useCallback((ms = DURATION) => {
//     setVisible(true);
//     return new Promise((resolve) => {
//       resolveRef.current = resolve;
//       timeoutRef.current = setTimeout(() => {
//         if (resolveRef.current) {
//           resolveRef.current();
//           resolveRef.current = null;
//           setVisible(false);
//         }
//       }, ms);
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
//       {visible && <LogoSplash onDone={hideNow} duration={DURATION} />}
//       <div style={{ display: visible ? "none" : "block" }}>{children}</div>
//     </SplashContext.Provider>
//   );
// }

// /* ---------------- LogoSplash UI with Traditional Style ---------------- */
// function LogoSplash({ onDone, duration = 10000 }) {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           return 100;
//         }
//         return prev + 1;
//       });
//     }, duration / 100);

//     return () => clearInterval(interval);
//   }, [duration]);

//   return (
//     <div
//       style={{
//         position: "fixed",
//         inset: 0,
//         zIndex: 9999,
//         background: "linear-gradient(135deg, #fef9c3 0%, #DFC6F6 50%, #fef9c3 100%)",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         overflow: "hidden",
//       }}
//     >
//       {/* Animated Background Patterns */}
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           opacity: 0.15,
//           backgroundImage: `
//             radial-gradient(circle at 20% 30%, #DFC6F6 0%, transparent 50%),
//             radial-gradient(circle at 80% 70%, #fef9c3 0%, transparent 50%),
//             radial-gradient(circle at 40% 80%, #DFC6F6 0%, transparent 50%),
//             radial-gradient(circle at 90% 20%, #fef9c3 0%, transparent 50%)
//           `,
//           animation: "float 20s ease-in-out infinite",
//         }}
//       />

//       {/* Decorative Corner Elements - Traditional Mandala Style */}
//       <svg
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "200px",
//           height: "200px",
//           opacity: 0.3,
//           animation: "rotate 30s linear infinite",
//         }}
//         viewBox="0 0 100 100"
//       >
//         <circle cx="50" cy="50" r="40" fill="none" stroke="#DFC6F6" strokeWidth="0.5" />
//         <circle cx="50" cy="50" r="30" fill="none" stroke="#fef9c3" strokeWidth="0.5" />
//         <circle cx="50" cy="50" r="20" fill="none" stroke="#DFC6F6" strokeWidth="0.5" />
//       </svg>

//       <svg
//         style={{
//           position: "absolute",
//           top: 0,
//           right: 0,
//           width: "200px",
//           height: "200px",
//           opacity: 0.3,
//           animation: "rotate 25s linear infinite reverse",
//         }}
//         viewBox="0 0 100 100"
//       >
//         <circle cx="50" cy="50" r="40" fill="none" stroke="#fef9c3" strokeWidth="0.5" />
//         <circle cx="50" cy="50" r="30" fill="none" stroke="#DFC6F6" strokeWidth="0.5" />
//         <circle cx="50" cy="50" r="20" fill="none" stroke="#fef9c3" strokeWidth="0.5" />
//       </svg>

//       <svg
//         style={{
//           position: "absolute",
//           bottom: 0,
//           left: 0,
//           width: "200px",
//           height: "200px",
//           opacity: 0.3,
//           animation: "rotate 35s linear infinite",
//         }}
//         viewBox="0 0 100 100"
//       >
//         <circle cx="50" cy="50" r="40" fill="none" stroke="#DFC6F6" strokeWidth="0.5" />
//         <circle cx="50" cy="50" r="30" fill="none" stroke="#fef9c3" strokeWidth="0.5" />
//         <circle cx="50" cy="50" r="20" fill="none" stroke="#DFC6F6" strokeWidth="0.5" />
//       </svg>

//       <svg
//         style={{
//           position: "absolute",
//           bottom: 0,
//           right: 0,
//           width: "200px",
//           height: "200px",
//           opacity: 0.3,
//           animation: "rotate 28s linear infinite reverse",
//         }}
//         viewBox="0 0 100 100"
//       >
//         <circle cx="50" cy="50" r="40" fill="none" stroke="#fef9c3" strokeWidth="0.5" />
//         <circle cx="50" cy="50" r="30" fill="none" stroke="#DFC6F6" strokeWidth="0.5" />
//         <circle cx="50" cy="50" r="20" fill="none" stroke="#fef9c3" strokeWidth="0.5" />
//       </svg>

//       {/* Main Content Container */}
//       <div
//         style={{
//           position: "relative",
//           zIndex: 10,
//           textAlign: "center",
//           animation: "fadeInScale 1.5s ease-out forwards",
//         }}
//       >
//         {/* Logo Container with Traditional Border */}
//         <div
//           style={{
//             position: "relative",
//             width: "280px",
//             height: "280px",
//             margin: "0 auto 2rem",
//             animation: "pulse 3s ease-in-out infinite",
//           }}
//         >
//           {/* Outer Decorative Ring */}
//           <div
//             style={{
//               position: "absolute",
//               inset: "-20px",
//               border: "3px solid",
//               borderImage: "linear-gradient(135deg, #DFC6F6, #fef9c3, #DFC6F6) 1",
//               borderRadius: "50%",
//               animation: "rotate 20s linear infinite",
//             }}
//           />

//           {/* Middle Ring */}
//           <div
//             style={{
//               position: "absolute",
//               inset: "-10px",
//               border: "2px solid",
//               borderColor: "#DFC6F6",
//               borderRadius: "50%",
//               opacity: 0.5,
//               animation: "rotate 15s linear infinite reverse",
//             }}
//           />

//           {/* Logo Background */}
//           <div
//             style={{
//               position: "absolute",
//               inset: 0,
//               background: "linear-gradient(135deg, rgba(223, 198, 246, 0.2), rgba(254, 249, 195, 0.2))",
//               borderRadius: "50%",
//               boxShadow: "0 10px 40px rgba(223, 198, 246, 0.4), inset 0 0 30px rgba(254, 249, 195, 0.3)",
//             }}
//           />

//           {/* Logo Image */}
//           <div
//             style={{
//               position: "absolute",
//               inset: "10px",
//               borderRadius: "50%",
//               overflow: "hidden",
//               background: "white",
//               boxShadow: "0 0 20px rgba(223, 198, 246, 0.5)",
//             }}
//           >
//             <img
//               src="/logo.png"
//               alt="Veer Bharat Logo"
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "contain",
//                 padding: "20px",
//               }}
//             />
//           </div>

//           {/* Shimmer Effect */}
//           <div
//             style={{
//               position: "absolute",
//               inset: 0,
//               background: "linear-gradient(120deg, transparent 30%, rgba(255, 255, 255, 0.6) 50%, transparent 70%)",
//               animation: "shimmer 3s ease-in-out infinite",
//               borderRadius: "50%",
//               pointerEvents: "none",
//             }}
//           />
//         </div>

//         {/* Welcome Text */}
//         <h1
//           style={{
//             fontSize: "clamp(2rem, 5vw, 3.5rem)",
//             fontWeight: 900,
//             background: "linear-gradient(135deg, #7c3aed, #a855f7, #d946ef)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             backgroundClip: "text",
//             marginBottom: "1rem",
//             fontFamily: "'Georgia', serif",
//             letterSpacing: "2px",
//             textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
//             animation: "slideDown 1.5s ease-out 0.5s both",
//           }}
//         >
//           Welcome to Veer Bharat
//         </h1>

//         {/* Hindi Subtitle */}
//         <p
//           style={{
//             fontSize: "clamp(1rem, 3vw, 1.5rem)",
//             color: "#7c3aed",
//             fontWeight: 600,
//             marginBottom: "2rem",
//             fontFamily: "'Noto Sans Devanagari', sans-serif",
//             animation: "slideUp 1.5s ease-out 0.8s both",
//           }}
//         >
//           वीर भारत में आपका स्वागत है
//         </p>

//         {/* Decorative Line */}
//         <div
//           style={{
//             width: "200px",
//             height: "4px",
//             background: "linear-gradient(90deg, transparent, #DFC6F6, #fef9c3, #DFC6F6, transparent)",
//             margin: "0 auto 2rem",
//             borderRadius: "2px",
//             animation: "expand 2s ease-out 1s both",
//           }}
//         />

//         {/* Tagline */}
//         <p
//           style={{
//             fontSize: "clamp(0.9rem, 2.5vw, 1.2rem)",
//             color: "#6b21a8",
//             fontWeight: 500,
//             maxWidth: "600px",
//             margin: "0 auto 2rem",
//             lineHeight: 1.6,
//             padding: "0 1rem",
//             animation: "fadeIn 2s ease-out 1.2s both",
//           }}
//         >
//           Pure, Natural & Authentic Products for Your Family
//         </p>

//         {/* Loading Progress Bar */}
//         <div
//           style={{
//             width: "300px",
//             height: "8px",
//             background: "rgba(223, 198, 246, 0.3)",
//             borderRadius: "999px",
//             margin: "0 auto",
//             overflow: "hidden",
//             boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
//           }}
//         >
//           <div
//             style={{
//               width: `${progress}%`,
//               height: "100%",
//               background: "linear-gradient(90deg, #DFC6F6, #fef9c3, #DFC6F6)",
//               borderRadius: "999px",
//               transition: "width 0.1s ease-out",
//               boxShadow: "0 0 10px rgba(223, 198, 246, 0.8)",
//             }}
//           />
//         </div>

//         {/* Loading Text */}
//         <p
//           style={{
//             marginTop: "1rem",
//             fontSize: "0.9rem",
//             color: "#7c3aed",
//             fontWeight: 600,
//           }}
//         >
//           Loading... {progress}%
//         </p>
//       </div>

//       {/* CSS Animations */}
//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translate(0, 0) scale(1); }
//           25% { transform: translate(10px, -10px) scale(1.05); }
//           50% { transform: translate(-10px, 10px) scale(0.95); }
//           75% { transform: translate(-5px, -5px) scale(1.02); }
//         }

//         @keyframes rotate {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }

//         @keyframes pulse {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(1.05); }
//         }

//         @keyframes shimmer {
//           0% { transform: translateX(-100%) rotate(20deg); }
//           100% { transform: translateX(200%) rotate(20deg); }
//         }

//         @keyframes fadeInScale {
//           from {
//             opacity: 0;
//             transform: scale(0.8);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         @keyframes slideDown {
//           from {
//             opacity: 0;
//             transform: translateY(-30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes slideUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes expand {
//           from {
//             width: 0;
//             opacity: 0;
//           }
//           to {
//             width: 200px;
//             opacity: 1;
//           }
//         }

//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }

//         @media (max-width: 768px) {
//           /* Responsive adjustments handled by clamp() */
//         }
//       `}</style>
//     </div>
//   );
// }




// "use client";

// import { createContext, useContext, useCallback, useRef, useState, useEffect } from "react";
// import { usePathname } from "next/navigation";

// const SplashContext = createContext();

// export function useSplash() {
//   return useContext(SplashContext);
// }

// export default function SplashProvider({ children }) {
//   const [visible, setVisible] = useState(false);
//   const [mounted, setMounted] = useState(false);
//   const resolveRef = useRef(null);
//   const timeoutRef = useRef(null);
//   const pathname = usePathname();

//   const DURATION = 10000; // 10 seconds

//   // Check if component is mounted
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   // Show splash only on home page first visit
//   useEffect(() => {
//     if (!mounted) return;

//     // Check if we're on home page
//     const isHomePage = pathname === "/";
    
//     if (typeof window !== "undefined" && isHomePage) {
//       // Check if splash has been shown in this session
//       const splashShown = sessionStorage.getItem('splashShown');
      
//       // Show splash only if not shown in this session AND on home page
//       if (!splashShown) {
//         setVisible(true);
//         sessionStorage.setItem('splashShown', 'true');
        
//         timeoutRef.current = setTimeout(() => {
//           setVisible(false);
//         }, DURATION);
//       }
//     }
//   }, [mounted, pathname]);

//   const show = useCallback((ms = DURATION) => {
//     setVisible(true);
//     return new Promise((resolve) => {
//       resolveRef.current = resolve;
//       clearTimeout(timeoutRef.current);
//       timeoutRef.current = setTimeout(() => {
//         if (resolveRef.current) {
//           resolveRef.current();
//           resolveRef.current = null;
//           setVisible(false);
//         }
//       }, ms);
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

//   if (!mounted) return null;

//   return (
//     <SplashContext.Provider value={{ show, hideNow }}>
//       {visible && <LogoSplash onDone={hideNow} duration={DURATION} />}
//       <div style={{ display: visible ? "none" : "block" }}>{children}</div>
//     </SplashContext.Provider>
//   );
// }

// /* ---------------- LogoSplash UI with Traditional Style ---------------- */
// function LogoSplash({ onDone, duration = 10000 }) {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           return 100;
//         }
//         return prev + 1;
//       });
//     }, duration / 100);

//     return () => clearInterval(interval);
//   }, [duration]);

//   return (
//     <div
//       style={{
//         position: "fixed",
//         inset: 0,
//         zIndex: 9999,
//         background: "linear-gradient(135deg, #fef9c3 0%, #DFC6F6 50%, #fef9c3 100%)",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         overflow: "hidden",
//       }}
//     >
//       {/* Animated Background Patterns */}
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           opacity: 0.15,
//           backgroundImage: `
//             radial-gradient(circle at 20% 30%, #DFC6F6 0%, transparent 50%),
//             radial-gradient(circle at 80% 70%, #fef9c3 0%, transparent 50%),
//             radial-gradient(circle at 40% 80%, #DFC6F6 0%, transparent 50%),
//             radial-gradient(circle at 90% 20%, #fef9c3 0%, transparent 50%)
//           `,
//           animation: "float 20s ease-in-out infinite",
//         }}
//       />

//       {/* Decorative Corner Elements - Traditional Mandala Style */}
//       <svg
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "200px",
//           height: "200px",
//           opacity: 0.3,
//           animation: "rotate 30s linear infinite",
//         }}
//         viewBox="0 0 100 100"
//       >
//         <circle cx="50" cy="50" r="40" fill="none" stroke="#DFC6F6" strokeWidth="0.5" />
//         <circle cx="50" cy="50" r="30" fill="none" stroke="#fef9c3" strokeWidth="0.5" />
//         <circle cx="50" cy="50" r="20" fill="none" stroke="#DFC6F6" strokeWidth="0.5" />
//       </svg>

//       <svg
//         style={{
//           position: "absolute",
//           top: 0,
//           right: 0,
//           width: "200px",
//           height: "200px",
//           opacity: 0.3,
//           animation: "rotate 25s linear infinite reverse",
//         }}
//         viewBox="0 0 100 100"
//       >
//         <circle cx="50" cy="50" r="40" fill="none" stroke="#fef9c3" strokeWidth="0.5" />
//         <circle cx="50" cy="50" r="30" fill="none" stroke="#DFC6F6" strokeWidth="0.5" />
//         <circle cx="50" cy="50" r="20" fill="none" stroke="#fef9c3" strokeWidth="0.5" />
//       </svg>

//       <svg
//         style={{
//           position: "absolute",
//           bottom: 0,
//           left: 0,
//           width: "200px",
//           height: "200px",
//           opacity: 0.3,
//           animation: "rotate 35s linear infinite",
//         }}
//         viewBox="0 0 100 100"
//       >
//         <circle cx="50" cy="50" r="40" fill="none" stroke="#DFC6F6" strokeWidth="0.5" />
//         <circle cx="50" cy="50" r="30" fill="none" stroke="#fef9c3" strokeWidth="0.5" />
//         <circle cx="50" cy="50" r="20" fill="none" stroke="#DFC6F6" strokeWidth="0.5" />
//       </svg>

//       <svg
//         style={{
//           position: "absolute",
//           bottom: 0,
//           right: 0,
//           width: "200px",
//           height: "200px",
//           opacity: 0.3,
//           animation: "rotate 28s linear infinite reverse",
//         }}
//         viewBox="0 0 100 100"
//       >
//         <circle cx="50" cy="50" r="40" fill="none" stroke="#fef9c3" strokeWidth="0.5" />
//         <circle cx="50" cy="50" r="30" fill="none" stroke="#DFC6F6" strokeWidth="0.5" />
//         <circle cx="50" cy="50" r="20" fill="none" stroke="#fef9c3" strokeWidth="0.5" />
//       </svg>

//       {/* Main Content Container */}
//       <div
//         style={{
//           position: "relative",
//           zIndex: 10,
//           textAlign: "center",
//           animation: "fadeInScale 1.5s ease-out forwards",
//         }}
//       >
//         {/* Logo Container with Traditional Border */}
//         <div
//           style={{
//             position: "relative",
//             width: "280px",
//             height: "280px",
//             margin: "0 auto 2rem",
//             animation: "pulse 3s ease-in-out infinite",
//           }}
//         >
//           {/* Outer Decorative Ring */}
//           <div
//             style={{
//               position: "absolute",
//               inset: "-20px",
//               border: "3px solid",
//               borderImage: "linear-gradient(135deg, #DFC6F6, #fef9c3, #DFC6F6) 1",
//               borderRadius: "50%",
//               animation: "rotate 20s linear infinite",
//             }}
//           />

//           {/* Middle Ring */}
//           <div
//             style={{
//               position: "absolute",
//               inset: "-10px",
//               border: "2px solid",
//               borderColor: "#DFC6F6",
//               borderRadius: "50%",
//               opacity: 0.5,
//               animation: "rotate 15s linear infinite reverse",
//             }}
//           />

//           {/* Logo Background */}
//           <div
//             style={{
//               position: "absolute",
//               inset: 0,
//               background: "linear-gradient(135deg, rgba(223, 198, 246, 0.2), rgba(254, 249, 195, 0.2))",
//               borderRadius: "50%",
//               boxShadow: "0 10px 40px rgba(223, 198, 246, 0.4), inset 0 0 30px rgba(254, 249, 195, 0.3)",
//             }}
//           />

//           {/* Logo Image */}
//           <div
//             style={{
//               position: "absolute",
//               inset: "10px",
//               borderRadius: "50%",
//               overflow: "hidden",
//               background: "white",
//               boxShadow: "0 0 20px rgba(223, 198, 246, 0.5)",
//             }}
//           >
//             <img
//               src="/logo.png"
//               alt="Veer Bharat Logo"
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "contain",
//                 padding: "20px",
//               }}
//             />
//           </div>

//           {/* Shimmer Effect */}
//           <div
//             style={{
//               position: "absolute",
//               inset: 0,
//               background: "linear-gradient(120deg, transparent 30%, rgba(255, 255, 255, 0.6) 50%, transparent 70%)",
//               animation: "shimmer 3s ease-in-out infinite",
//               borderRadius: "50%",
//               pointerEvents: "none",
//             }}
//           />
//         </div>

//         {/* Welcome Text */}
//         <h1
//           style={{
//             fontSize: "clamp(2rem, 5vw, 3.5rem)",
//             fontWeight: 900,
//             background: "linear-gradient(135deg, #7c3aed, #a855f7, #d946ef)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             backgroundClip: "text",
//             marginBottom: "1rem",
//             fontFamily: "'Georgia', serif",
//             letterSpacing: "2px",
//             textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
//             animation: "slideDown 1.5s ease-out 0.5s both",
//           }}
//         >
//           Welcome to Veer Bharat
//         </h1>

//         {/* Hindi Subtitle */}
//         <p
//           style={{
//             fontSize: "clamp(1rem, 3vw, 1.5rem)",
//             color: "#7c3aed",
//             fontWeight: 600,
//             marginBottom: "2rem",
//             fontFamily: "'Noto Sans Devanagari', sans-serif",
//             animation: "slideUp 1.5s ease-out 0.8s both",
//           }}
//         >
//           वीर भारत में आपका स्वागत है
//         </p>

//         {/* Decorative Line */}
//         <div
//           style={{
//             width: "200px",
//             height: "4px",
//             background: "linear-gradient(90deg, transparent, #DFC6F6, #fef9c3, #DFC6F6, transparent)",
//             margin: "0 auto 2rem",
//             borderRadius: "2px",
//             animation: "expand 2s ease-out 1s both",
//           }}
//         />

//         {/* Tagline */}
//         <p
//           style={{
//             fontSize: "clamp(0.9rem, 2.5vw, 1.2rem)",
//             color: "#6b21a8",
//             fontWeight: 500,
//             maxWidth: "600px",
//             margin: "0 auto 2rem",
//             lineHeight: 1.6,
//             padding: "0 1rem",
//             animation: "fadeIn 2s ease-out 1.2s both",
//           }}
//         >
//           Pure, Natural & Authentic Products for Your Family
//         </p>

//         {/* Loading Progress Bar */}
//         <div
//           style={{
//             width: "300px",
//             height: "8px",
//             background: "rgba(223, 198, 246, 0.3)",
//             borderRadius: "999px",
//             margin: "0 auto",
//             overflow: "hidden",
//             boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
//           }}
//         >
//           <div
//             style={{
//               width: `${progress}%`,
//               height: "100%",
//               background: "linear-gradient(90deg, #DFC6F6, #fef9c3, #DFC6F6)",
//               borderRadius: "999px",
//               transition: "width 0.1s ease-out",
//               boxShadow: "0 0 10px rgba(223, 198, 246, 0.8)",
//             }}
//           />
//         </div>

//         {/* Loading Text */}
//         <p
//           style={{
//             marginTop: "1rem",
//             fontSize: "0.9rem",
//             color: "#7c3aed",
//             fontWeight: 600,
//           }}
//         >
//           Loading... {progress}%
//         </p>
//       </div>

//       {/* CSS Animations */}
//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translate(0, 0) scale(1); }
//           25% { transform: translate(10px, -10px) scale(1.05); }
//           50% { transform: translate(-10px, 10px) scale(0.95); }
//           75% { transform: translate(-5px, -5px) scale(1.02); }
//         }

//         @keyframes rotate {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }

//         @keyframes pulse {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(1.05); }
//         }

//         @keyframes shimmer {
//           0% { transform: translateX(-100%) rotate(20deg); }
//           100% { transform: translateX(200%) rotate(20deg); }
//         }

//         @keyframes fadeInScale {
//           from {
//             opacity: 0;
//             transform: scale(0.8);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         @keyframes slideDown {
//           from {
//             opacity: 0;
//             transform: translateY(-30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes slideUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes expand {
//           from {
//             width: 0;
//             opacity: 0;
//           }
//           to {
//             width: 200px;
//             opacity: 1;
//           }
//         }

//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }

//         @media (max-width: 768px) {
//           /* Responsive adjustments handled by clamp() */
//         }
//       `}</style>
//     </div>
//   );
// }





"use client";

import { createContext, useContext, useCallback, useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const SplashContext = createContext();

export function useSplash() {
  return useContext(SplashContext);
}

export default function SplashProvider({ children }) {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const resolveRef = useRef(null);
  const timeoutRef = useRef(null);
  const pathname = usePathname();

  const DURATION = 3000; // 3 seconds

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const isHomePage = pathname === "/";
    
    if (typeof window !== "undefined" && isHomePage) {
      const splashShown = sessionStorage.getItem('splashShown');
      
      if (!splashShown) {
        setVisible(true);
        sessionStorage.setItem('splashShown', 'true');
        
        timeoutRef.current = setTimeout(() => {
          setVisible(false);
        }, DURATION);
      }
    }
  }, [mounted, pathname]);

  const show = useCallback((ms = DURATION) => {
    setVisible(true);
    return new Promise((resolve) => {
      resolveRef.current = resolve;
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        if (resolveRef.current) {
          resolveRef.current();
          resolveRef.current = null;
          setVisible(false);
        }
      }, ms);
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

  if (!mounted) return null;

  return (
    <SplashContext.Provider value={{ show, hideNow }}>
      {visible && <LogoSplash onDone={hideNow} duration={DURATION} />}
      <div style={{ display: visible ? "none" : "block" }}>{children}</div>
    </SplashContext.Provider>
  );
}

function LogoSplash({ onDone, duration = 3000 }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 3.33;
      });
    }, duration / 30);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "linear-gradient(135deg, #1a0b2e 0%, #2d1b4e 25%, #4a2c6d 50%, #2d1b4e 75%, #1a0b2e 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Diwali Diya Background Pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 25 L28 30 L32 30 Z' fill='%23fbbf24' opacity='0.15'/%3E%3Ccircle cx='30' cy='32' r='2' fill='%23f59e0b' opacity='0.2'/%3E%3C/svg%3E")
          `,
          animation: "twinkle 2s ease-in-out infinite",
        }}
      />

      {/* Floating Diyas */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        >
          <svg width="30" height="30" viewBox="0 0 40 40">
            <ellipse cx="20" cy="25" rx="12" ry="4" fill="#d97706" opacity="0.6"/>
            <path d="M20 15 Q15 20, 12 25 L28 25 Q25 20, 20 15 Z" fill="#f59e0b" opacity="0.7"/>
            <ellipse cx="20" cy="12" rx="3" ry="5" fill="#fbbf24" opacity="0.9">
              <animate attributeName="ry" values="5;7;5" dur="1.5s" repeatCount="indefinite"/>
            </ellipse>
          </svg>
        </div>
      ))}

      {/* Sparkles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`spark-${i}`}
          style={{
            position: "absolute",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: "4px",
            height: "4px",
            background: "#fbbf24",
            borderRadius: "50%",
            boxShadow: "0 0 10px #fbbf24",
            animation: `sparkle ${1 + Math.random()}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Decorative Rangoli Corners */}
      <svg
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          width: "clamp(80px, 15vw, 150px)",
          height: "clamp(80px, 15vw, 150px)",
          opacity: 0.4,
          animation: "rotate 40s linear infinite",
        }}
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="45" fill="none" stroke="#fbbf24" strokeWidth="1"/>
        <circle cx="50" cy="50" r="35" fill="none" stroke="#f59e0b" strokeWidth="1"/>
        <circle cx="50" cy="50" r="25" fill="none" stroke="#fbbf24" strokeWidth="1"/>
        <circle cx="50" cy="50" r="15" fill="none" stroke="#f59e0b" strokeWidth="1"/>
      </svg>

      <svg
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          width: "clamp(80px, 15vw, 150px)",
          height: "clamp(80px, 15vw, 150px)",
          opacity: 0.4,
          animation: "rotate 35s linear infinite reverse",
        }}
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="45" fill="none" stroke="#f59e0b" strokeWidth="1"/>
        <circle cx="50" cy="50" r="35" fill="none" stroke="#fbbf24" strokeWidth="1"/>
        <circle cx="50" cy="50" r="25" fill="none" stroke="#f59e0b" strokeWidth="1"/>
        <circle cx="50" cy="50" r="15" fill="none" stroke="#fbbf24" strokeWidth="1"/>
      </svg>

      <svg
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          width: "clamp(80px, 15vw, 150px)",
          height: "clamp(80px, 15vw, 150px)",
          opacity: 0.4,
          animation: "rotate 45s linear infinite",
        }}
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="45" fill="none" stroke="#fbbf24" strokeWidth="1"/>
        <circle cx="50" cy="50" r="35" fill="none" stroke="#f59e0b" strokeWidth="1"/>
        <circle cx="50" cy="50" r="25" fill="none" stroke="#fbbf24" strokeWidth="1"/>
        <circle cx="50" cy="50" r="15" fill="none" stroke="#f59e0b" strokeWidth="1"/>
      </svg>

      <svg
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          width: "clamp(80px, 15vw, 150px)",
          height: "clamp(80px, 15vw, 150px)",
          opacity: 0.4,
          animation: "rotate 38s linear infinite reverse",
        }}
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="45" fill="none" stroke="#f59e0b" strokeWidth="1"/>
        <circle cx="50" cy="50" r="35" fill="none" stroke="#fbbf24" strokeWidth="1"/>
        <circle cx="50" cy="50" r="25" fill="none" stroke="#f59e0b" strokeWidth="1"/>
        <circle cx="50" cy="50" r="15" fill="none" stroke="#fbbf24" strokeWidth="1"/>
      </svg>

      {/* Main Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          animation: "zoomIn 1s ease-out forwards",
          padding: "0 1rem",
          maxWidth: "95vw",
        }}
      >
        {/* Logo Container with Diwali Glow */}
        <div
          style={{
            position: "relative",
            width: "clamp(200px, 40vw, 320px)",
            height: "clamp(200px, 40vw, 320px)",
            margin: "0 auto 1.5rem",
            animation: "glowPulse 2s ease-in-out infinite",
          }}
        >
          {/* Outer Glow Ring */}
          <div
            style={{
              position: "absolute",
              inset: "-30px",
              border: "4px solid",
              borderImage: "linear-gradient(135deg, #fbbf24, #f59e0b, #fbbf24) 1",
              borderRadius: "50%",
              animation: "rotate 15s linear infinite",
              boxShadow: "0 0 40px rgba(251, 191, 36, 0.6), inset 0 0 40px rgba(245, 158, 11, 0.3)",
            }}
          />

          {/* Middle Ring */}
          <div
            style={{
              position: "absolute",
              inset: "-15px",
              border: "3px solid #f59e0b",
              borderRadius: "50%",
              opacity: 0.6,
              animation: "rotate 12s linear infinite reverse",
              boxShadow: "0 0 20px rgba(245, 158, 11, 0.5)",
            }}
          />

          {/* Logo Background with Diwali Glow */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(circle, rgba(251, 191, 36, 0.3), rgba(245, 158, 11, 0.2))",
              borderRadius: "50%",
              boxShadow: "0 15px 60px rgba(251, 191, 36, 0.6), inset 0 0 40px rgba(245, 158, 11, 0.4)",
            }}
          />

          {/* Logo Image */}
          <div
            style={{
              position: "absolute",
              inset: "15px",
              borderRadius: "50%",
              overflow: "hidden",
              background: "linear-gradient(135deg, #ffffff, #fff7ed)",
              boxShadow: "0 0 30px rgba(251, 191, 36, 0.7)",
            }}
          >
            <img
              src="/logo.png"
              alt="Veer Bharat Logo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                padding: "clamp(15px, 5vw, 25px)",
              }}
            />
          </div>

          {/* Shimmer Effect */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(120deg, transparent 30%, rgba(255, 255, 255, 0.8) 50%, transparent 70%)",
              animation: "shimmer 2s ease-in-out infinite",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Diwali Greeting */}
        <h1
          style={{
            fontSize: "clamp(2rem, 6vw, 4rem)",
            fontWeight: 900,
            background: "linear-gradient(135deg, #fbbf24, #f59e0b, #fbbf24, #f59e0b)",
            backgroundSize: "200% 200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "0.5rem",
            fontFamily: "'Georgia', serif",
            letterSpacing: "clamp(1px, 0.5vw, 3px)",
            textShadow: "0 0 30px rgba(251, 191, 36, 0.5)",
            animation: "gradientShift 3s ease infinite, slideDown 1s ease-out",
          }}
        >
          Happy Diwali!
        </h1>

        {/* From Veer Bharat */}
        <p
          style={{
            fontSize: "clamp(1.2rem, 4vw, 2rem)",
            color: "#fbbf24",
            fontWeight: 700,
            marginBottom: "1rem",
            fontFamily: "'Georgia', serif",
            textShadow: "0 0 20px rgba(251, 191, 36, 0.8), 0 0 40px rgba(245, 158, 11, 0.5)",
            animation: "slideUp 1s ease-out 0.3s both",
          }}
        >
          From Veer Bharat
        </p>

        {/* Decorative Diya Line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(10px, 3vw, 20px)",
            margin: "1rem auto 1.5rem",
            animation: "fadeIn 1.5s ease-out 0.5s both",
          }}
        >
          <svg width="clamp(25px, 8vw, 40px)" height="clamp(25px, 8vw, 40px)" viewBox="0 0 40 40">
            <ellipse cx="20" cy="28" rx="12" ry="4" fill="#d97706"/>
            <path d="M20 18 Q15 23, 12 28 L28 28 Q25 23, 20 18 Z" fill="#f59e0b"/>
            <ellipse cx="20" cy="15" rx="3" ry="5" fill="#fbbf24">
              <animate attributeName="ry" values="5;7;5" dur="1.5s" repeatCount="indefinite"/>
            </ellipse>
          </svg>
          
          <div
            style={{
              width: "clamp(100px, 30vw, 200px)",
              height: "3px",
              background: "linear-gradient(90deg, transparent, #fbbf24, #f59e0b, #fbbf24, transparent)",
              borderRadius: "2px",
            }}
          />
          
          <svg width="clamp(25px, 8vw, 40px)" height="clamp(25px, 8vw, 40px)" viewBox="0 0 40 40">
            <ellipse cx="20" cy="28" rx="12" ry="4" fill="#d97706"/>
            <path d="M20 18 Q15 23, 12 28 L28 28 Q25 23, 20 18 Z" fill="#f59e0b"/>
            <ellipse cx="20" cy="15" rx="3" ry="5" fill="#fbbf24">
              <animate attributeName="ry" values="5;7;5" dur="1.5s" repeatCount="indefinite"/>
            </ellipse>
          </svg>
        </div>

        {/* Wish Message */}
        <p
          style={{
            fontSize: "clamp(0.9rem, 3vw, 1.3rem)",
            color: "#fde68a",
            fontWeight: 600,
            maxWidth: "min(600px, 90vw)",
            margin: "0 auto 1.5rem",
            lineHeight: 1.6,
            textShadow: "0 0 15px rgba(251, 191, 36, 0.4)",
            animation: "fadeIn 1.5s ease-out 0.7s both",
          }}
        >
          May this Festival of Lights bring joy, prosperity & happiness to you and your family!
        </p>

        {/* Signature */}
        <p
          style={{
            fontSize: "clamp(1rem, 3vw, 1.4rem)",
            color: "#fbbf24",
            fontWeight: 700,
            marginBottom: "1.5rem",
            fontFamily: "'Georgia', serif",
            fontStyle: "italic",
            textShadow: "0 0 15px rgba(251, 191, 36, 0.6)",
            animation: "fadeIn 1.5s ease-out 0.9s both",
          }}
        >
          Team Veer Bharat 🪔
        </p>

        {/* Loading Progress Bar */}
        <div
          style={{
            width: "clamp(250px, 80vw, 350px)",
            height: "10px",
            background: "rgba(251, 191, 36, 0.2)",
            borderRadius: "999px",
            margin: "0 auto",
            overflow: "hidden",
            boxShadow: "inset 0 2px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(251, 191, 36, 0.3)",
            border: "1px solid rgba(251, 191, 36, 0.3)",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background: "linear-gradient(90deg, #fbbf24, #f59e0b, #fbbf24)",
              borderRadius: "999px",
              transition: "width 0.1s ease-out",
              boxShadow: "0 0 20px rgba(251, 191, 36, 0.9)",
            }}
          />
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes glowPulse {
          0%, 100% { 
            transform: scale(1); 
            filter: brightness(1);
          }
          50% { 
            transform: scale(1.05); 
            filter: brightness(1.2);
          }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%) rotate(20deg); }
          100% { transform: translateX(200%) rotate(20deg); }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes sparkle {
          0%, 100% { 
            opacity: 0; 
            transform: scale(0);
          }
          50% { 
            opacity: 1; 
            transform: scale(1);
          }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.3; }
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
}