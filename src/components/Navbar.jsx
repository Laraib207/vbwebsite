// "use client";

// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);







//   return (
//     <header className="sticky top-0 z-50 shadow-md">
//       <div className="backdrop-blur-md bg-[rgba(254,254,254,0.9)] border-b border-[rgba(8,52,139,0.08)]">
//         {/* Larger header */}
//         <div className="container mx-auto flex items-center justify-between h-24 px-6">
//           {/* Brand */}
//           <Link
//             href="/"
//             className="flex items-center gap-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#08348b] rounded"
//             aria-label="Veer Bharat Home"
//             onClick={() => setOpen(false)}
//           >
//             {/* Bigger logo box */}
//             <div className="relative w-20 h-20 rounded-lg overflow-hidden shadow-xl ring-2 ring-[#08348b]/10">
//               <Image
//                 src="/logo.png"
//                 alt="Veer Bharat logo"
//                 fill
//                 style={{ objectFit: "cover" }}
//                 priority
//               />
//             </div>

//             <div className="flex flex-col leading-tight">
//               <span className="text-[#08348b] font-extrabold text-3xl tracking-tight">
//                 VEER BHARAT
//               </span>
//               <span className="text-[#aa2266] text-base italic">
//                 हर बूंद में भरोसा
//               </span>
//             </div>
//           </Link>

//           {/* Desktop nav */}
//           <nav className="hidden md:flex items-center gap-10 text-lg font-semibold">
//             <NavLink href="/">Home</NavLink>
//             <NavLink href="/products">Products</NavLink>
//             <NavLink href="/about">About</NavLink>
//             <NavLink href="/contact">Contact</NavLink>

//             <a
//               href="#"
//               className="ml-4 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#08348b] via-[#aa2266] to-[#5d169e] text-white text-lg font-bold shadow-lg hover:scale-[1.05] hover:shadow-xl transition"
//             >
//               Shop Now
//             </a>
//           </nav>

//           {/* Mobile hamburger */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setOpen((s) => !s)}
//               aria-expanded={open}
//               aria-label={open ? "Close menu" : "Open menu"}
//               className="relative w-12 h-12 flex items-center justify-center rounded-lg hover:bg-[#08348b]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#08348b]"
//             >
//               <svg
//                 className="w-8 h-8 text-[#08348b]"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth={2}
//                 viewBox="0 0 24 24"
//               >
//                 {open ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         <div
//           className={`md:hidden bg-white border-t border-[rgba(8,52,139,0.08)] shadow-inner overflow-hidden transition-all duration-300 ${
//             open ? "max-h-[600px] py-6 opacity-100" : "max-h-0 py-0 opacity-0"
//           }`}
//         >
//           <div className="container mx-auto px-6 flex flex-col gap-4 text-lg font-medium">
//             <MobileLink href="/" onClick={() => setOpen(false)}>
//               Home
//             </MobileLink>
//             <MobileLink href="/products" onClick={() => setOpen(false)}>
//               Products
//             </MobileLink>
//             <MobileLink href="/about" onClick={() => setOpen(false)}>
//               About
//             </MobileLink>
//             <MobileLink href="/contact" onClick={() => setOpen(false)}>
//               Contact
//             </MobileLink>

//             <a
//               href="#"
//               className="mt-3 w-full text-center inline-block px-5 py-3 rounded-lg bg-gradient-to-r from-[#08348b] via-[#aa2266] to-[#5d169e] text-white font-bold shadow-lg hover:scale-[1.03] transition"
//               onClick={() => setOpen(false)}
//             >
//               Shop Now
//             </a>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// /* helpers */
// function NavLink({ href, children }) {
//   return (
//     <Link
//       href={href}
//       className="relative px-2 py-1 text-gray-700 hover:text-[#08348b] transition group"
//     >
//       {children}
//       <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#08348b] via-[#aa2266] to-[#5d169e] group-hover:w-full transition-all" />
//     </Link>
//   );
// }

// function MobileLink({ href, children, onClick }) {
//   return (
//     <Link
//       href={href}
//       className="block px-4 py-3 rounded-md text-[#08348b] hover:bg-[#08348b]/5 font-semibold transition"
//       onClick={onClick}
//     >
//       {children}
//     </Link>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // Track scroll for dynamic effect
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       {/* Navbar */}
//       <header
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           scrolled
//             ? "h-20 bg-[rgba(254,254,254,0.95)] shadow-md"
//             : "h-28 bg-[rgba(254,254,254,0.85)] shadow"
//         }`}
//       >
//         <div className="border-b border-[rgba(8,52,139,0.08)] h-full">
//           <div className="container mx-auto flex items-center justify-between h-full px-6">
//             {/* Brand */}
//             <Link
//               href="/"
//               className="flex items-center gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#08348b] rounded"
//               aria-label="Veer Bharat Home"
//               onClick={() => setOpen(false)}
//             >
//               {/* Logo */}
//               <div
//                 className={`relative overflow-hidden rounded-lg ring-2 ring-[#08348b]/10 transition-all duration-300 ${
//                   scrolled ? "w-14 h-14" : "w-20 h-20"
//                 } shadow-lg`}
//               >
//                 <Image
//                   src="/logo.png"
//                   alt="Veer Bharat logo"
//                   fill
//                   style={{ objectFit: "cover" }}
//                   priority
//                 />
//               </div>

//               <div className="flex flex-col leading-tight">
//                 <span
//                   className={`font-extrabold tracking-tight transition-all duration-300 ${
//                     scrolled ? "text-2xl" : "text-3xl"
//                   } text-[#08348b]`}
//                 >
//                   VEER BHARAT
//                 </span>
//                 <span
//                   className={`italic text-[#aa2266] transition-all duration-300 ${
//                     scrolled ? "text-sm" : "text-base"
//                   }`}
//                 >
//                   हर बूंद में भरोसा
//                 </span>
//               </div>
//             </Link>

//             {/* Desktop nav */}
//             <nav className="hidden md:flex items-center gap-10 text-lg font-semibold">
//               <NavLink href="/">Home</NavLink>
//               <NavLink href="/products">Products</NavLink>
//               <NavLink href="/about">About</NavLink>
//               <NavLink href="/contact">Contact</NavLink>

//               <a
//                 href="#"
//                 className="ml-4 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#08348b] via-[#aa2266] to-[#5d169e] text-white text-lg font-bold shadow-lg hover:scale-[1.05] hover:shadow-xl transition"
//               >
//                 Shop Now
//               </a>
//             </nav>

//             {/* Mobile hamburger */}
//             <div className="md:hidden flex items-center">
//               <button
//                 onClick={() => setOpen((s) => !s)}
//                 aria-expanded={open}
//                 aria-label={open ? "Close menu" : "Open menu"}
//                 className="relative w-12 h-12 flex items-center justify-center rounded-lg hover:bg-[#08348b]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#08348b]"
//               >
//                 <svg
//                   className="w-8 h-8 text-[#08348b]"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                   viewBox="0 0 24 24"
//                 >
//                   {open ? (
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   ) : (
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   )}
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         <div
//           className={`md:hidden bg-white border-t border-[rgba(8,52,139,0.08)] shadow-inner overflow-hidden transition-all duration-300 ${
//             open ? "max-h-[600px] py-6 opacity-100" : "max-h-0 py-0 opacity-0"
//           }`}
//         >
//           <div className="container mx-auto px-6 flex flex-col gap-4 text-lg font-medium">
//             <MobileLink href="/" onClick={() => setOpen(false)}>
//               Home
//             </MobileLink>
//             <MobileLink href="/products" onClick={() => setOpen(false)}>
//               Products
//             </MobileLink>
//             <MobileLink href="/about" onClick={() => setOpen(false)}>
//               About
//             </MobileLink>
//             <MobileLink href="/contact" onClick={() => setOpen(false)}>
//               Contact
//             </MobileLink>

//             <a
//               href="#"
//               className="mt-3 w-full text-center inline-block px-5 py-3 rounded-lg bg-gradient-to-r from-[#08348b] via-[#aa2266] to-[#5d169e] text-white font-bold shadow-lg hover:scale-[1.03] transition"
//               onClick={() => setOpen(false)}
//             >
//               Shop Now
//             </a>
//           </div>
//         </div>
//       </header>

//       {/* Spacer div to push content below fixed navbar */}
//       <div className="h-28 md:h-28"></div>
//     </>
//   );
// }

// /* helpers */
// function NavLink({ href, children }) {
//   return (
//     <Link
//       href={href}
//       className="relative px-2 py-1 text-gray-700 hover:text-[#08348b] transition group"
//     >
//       {children}
//       <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#08348b] via-[#aa2266] to-[#5d169e] group-hover:w-full transition-all" />
//     </Link>
//   );
// }

// function MobileLink({ href, children, onClick }) {
//   return (
//     <Link
//       href={href}
//       className="block px-4 py-3 rounded-md text-[#08348b] hover:bg-[#08348b]/5 font-semibold transition"
//       onClick={onClick}
//     >
//       {children}
//     </Link>
//   );
// }

// app/components/Navbar.jsx

// app/components/Navbar.jsx



// "use client";

// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Navbar() {
//   const [open, setOpen] = useState(false); // mobile menu
//   const [scrolled, setScrolled] = useState(false);
//   const [teamOpen, setTeamOpen] = useState(false); // desktop dropdown state (for keyboard & touch)
//   const teamRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // close team dropdown on outside click (desktop)
//   useEffect(() => {
//     const onDoc = (e) => {
//       if (teamRef.current && !teamRef.current.contains(e.target)) {
//         setTeamOpen(false);
//       }
//     };
//     document.addEventListener("click", onDoc);
//     return () => document.removeEventListener("click", onDoc);
//   }, []);

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           scrolled ? "h-20 bg-white/95 shadow-md" : "h-28 bg-white/90 shadow"
//         }`}
//       >
//         <div className="border-b border-[rgba(8,52,139,0.08)] h-full">
//           <div className="container mx-auto flex items-center justify-between h-full px-6">
//             <Link href="/" className="flex items-center gap-4" onClick={() => setOpen(false)} aria-label="Veer Bharat Home">
//               <div className={`${scrolled ? "w-14 h-14" : "w-20 h-20"} relative overflow-hidden rounded-lg ring-2 ring-[#08348b]/10 transition-all duration-300 shadow-lg`}>
//                 <Image src="/logo.png" alt="Veer Bharat logo" fill style={{ objectFit: "cover" }} priority />
//               </div>
//               <div className="flex flex-col leading-tight">
//                 <span className={`font-extrabold tracking-tight transition-all duration-300 ${scrolled ? "text-2xl" : "text-3xl"} text-[#08348b]`}>VEER BHARAT</span>
//                 <span className={`italic text-[#aa2266] transition-all duration-300 ${scrolled ? "text-sm" : "text-base"}`}>हर बूंद में भरोसा</span>
//               </div>
//             </Link>

//             {/* Desktop nav */}
//             <nav className="hidden md:flex items-center gap-6 text-lg font-semibold">
//               <NavLink href="/">Home</NavLink>
//               <NavLink href="/products">Products</NavLink>

//               {/* Team with dropdown */}
//               <div
//                 ref={teamRef}
//                 onMouseEnter={() => setTeamOpen(true)}
//                 onMouseLeave={() => setTeamOpen(false)}
//                 className="relative"
//               >
//                 {/* the Team button (focusable) */}
//                 <button
//                   onClick={() => setTeamOpen((s) => !s)}
//                   onKeyDown={(e) => {
//                     if (e.key === "Escape") setTeamOpen(false);
//                     if (e.key === "ArrowDown") setTeamOpen(true);
//                   }}
//                   aria-expanded={teamOpen}
//                   aria-haspopup="true"
//                   className="flex items-center gap-2 px-3 py-2 rounded hover:bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#08348b]"
//                 >
//                   Team
//                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className={`transition-transform ${teamOpen ? "rotate-180" : "rotate-0"}`}>
//                     <path d="M6 9l6 6 6-6" stroke="#08348b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                   </svg>
//                 </button>

//                 {/* Dropdown */}
//                 <div
//                   role="menu"
//                   aria-label="Team menu"
//                   className={`absolute top-full mt-2 right-0 w-44 rounded-md bg-white/95 text-[#082f63] shadow-lg ring-1 ring-black/10 backdrop-blur transition-opacity duration-200 ${
//                     teamOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-y-1"
//                   }`}
//                 >
//                   <ul className="flex flex-col py-2">
//                     <li>
//                       <Link href="/team" onClick={() => setTeamOpen(false)} className="block px-4 py-2 hover:bg-[#08348b]/6">
//                         Our Team
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/gallery" onClick={() => setTeamOpen(false)} className="block px-4 py-2 hover:bg-[#08348b]/6">
//                         Gallery
//                       </Link>
//                     </li>
//                     {/* add more team-related links here if needed */}
//                   </ul>
//                 </div>
//               </div>

//               <NavLink href="/about">About</NavLink>
//               <NavLink href="/contact">Contact</NavLink>

//               <a href="#" className="ml-4 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#08348b] via-[#aa2266] to-[#5d169e] text-white text-lg font-bold shadow-lg hover:scale-[1.05] transition">Shop Now</a>
//             </nav>

//             {/* Mobile hamburger */}
//             <div className="md:hidden flex items-center">
//               <button onClick={() => setOpen((s) => !s)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} className="relative w-12 h-12 flex items-center justify-center rounded-lg hover:bg-[#08348b]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#08348b]">
//                 <svg className="w-8 h-8 text-[#08348b]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                   {open ? (
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                   ) : (
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//                   )}
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         <div className={`md:hidden bg-white border-t border-[rgba(8,52,139,0.08)] shadow-inner overflow-hidden transition-all duration-300 ${open ? "max-h-[640px] py-6 opacity-100" : "max-h-0 py-0 opacity-0"}`}>
//           <div className="container mx-auto px-6 flex flex-col gap-4 text-lg font-medium">
//             <MobileLink href="/" onClick={() => setOpen(false)}>Home</MobileLink>
//             <MobileLink href="/products" onClick={() => setOpen(false)}>Products</MobileLink>

//             {/* Mobile: Team expands to show Gallery */}
//             <details className="group bg-transparent rounded-md">
//               <summary className="px-4 py-3 cursor-pointer list-none flex items-center justify-between">
//                 Team
//                 <span className="text-gray-500 group-open:rotate-180 transition-transform">▾</span>
//               </summary>
//               <div className="pl-4 pr-4 pb-2 flex flex-col gap-1">
//                 <MobileLink href="/team" onClick={() => setOpen(false)}>Our Team</MobileLink>
//                 <MobileLink href="/gallery" onClick={() => setOpen(false)}>Gallery</MobileLink>
//               </div>
//             </details>

//             <MobileLink href="/about" onClick={() => setOpen(false)}>About</MobileLink>
//             <MobileLink href="/contact" onClick={() => setOpen(false)}>Contact</MobileLink>

//             <a href="#" className="mt-3 w-full text-center inline-block px-5 py-3 rounded-lg bg-gradient-to-r from-[#08348b] via-[#aa2266] to-[#5d169e] text-white font-bold shadow-lg hover:scale-[1.03] transition" onClick={() => setOpen(false)}>
//               Shop Now
//             </a>
//           </div>
//         </div>
//       </header>

//       {/* spacer */}
//       <div className="h-28 md:h-28" />
//     </>
//   );
// }

// /* small helpers */
// function NavLink({ href, children }) {
//   return (
//     <Link href={href} className="relative px-2 py-1 text-gray-700 hover:text-[#08348b] transition group">
//       {children}
//       <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#08348b] via-[#aa2266] to-[#5d169e] group-hover:w-full transition-all" />
//     </Link>
//   );
// }

// function MobileLink({ href, children, onClick }) {
//   return (
//     <Link href={href} className="block px-4 py-3 rounded-md text-[#08348b] hover:bg-[#08348b]/5 font-semibold transition" onClick={onClick}>
//       {children}
//     </Link>
//   );
// }


// "use client";

// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Navbar() {
//   const [open, setOpen] = useState(false); // mobile menu
//   const [scrolled, setScrolled] = useState(false);
//   const [teamOpen, setTeamOpen] = useState(false); // desktop dropdown state
//   const teamRef = useRef(null);
//   const teamButtonRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // close team dropdown on outside click (desktop)
//   useEffect(() => {
//     const onDoc = (e) => {
//       if (
//         teamRef.current &&
//         !teamRef.current.contains(e.target) &&
//         teamButtonRef.current &&
//         !teamButtonRef.current.contains(e.target)
//       ) {
//         setTeamOpen(false);
//       }
//     };
//     document.addEventListener("click", onDoc);
//     return () => document.removeEventListener("click", onDoc);
//   }, []);

//   // close on Escape (keyboard)
//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "Escape") {
//         setTeamOpen(false);
//         setOpen(false);
//       }
//     };
//     document.addEventListener("keydown", onKey);
//     return () => document.removeEventListener("keydown", onKey);
//   }, []);

//   return (
//     <>
//       <header
//         // background set to #6EC1E4, allow dropdown overflow
//         className={`w-full transition-all duration-300 border-b border-[rgba(8,52,139,0.04)] overflow-visible ${
//           scrolled
//             ? "fixed top-0 left-0 z-50 py-3 shadow-sm"
//             : "relative py-5 shadow-sm"
//         }`}
//         style={{ backgroundColor: "#DFC6F6" }}
//       >
//         <div className="container mx-auto flex items-center justify-between px-6">
//           {/* logo + brand */}
//           <Link
//             href="/"
//             className="flex items-center gap-4"
//             onClick={() => setOpen(false)}
//             aria-label="Veer Bharat Home"
//           >
//             <div
//               className={`relative overflow-hidden rounded-lg ring-2 ring-[#08348b]/8 transition-all duration-300 shadow-lg flex-shrink-0 ${
//                 scrolled ? "w-14 h-14" : "w-20 h-20"
//               }`}
//               aria-hidden={false}
//             >
//               {/* Ensure /logo.png exists in public/ — this will be visible */}
//               <Image
//                 src="/logo.png"
//                 alt="Veer Bharat logo"
//                 fill
//                 style={{ objectFit: "cover" }}
//                 priority
//               />
//             </div>

//             <div className="flex flex-col leading-tight">
//               <span
//                 className={`font-extrabold tracking-tight transition-all duration-300 ${
//                   scrolled ? "text-2xl" : "text-3xl"
//                 } text-[#08348b]`}
//               >
//                 VEER BHARAT
//               </span>
//               <span
//                 className={`italic text-[#aa2266] transition-all duration-300 ${
//                   scrolled ? "text-sm" : "text-base"
//                 }`}
//               >
//                 वह! मज़ा आ गया
//               </span>
//             </div>
//           </Link>

//           {/* Desktop nav */}
//           <nav className="hidden md:flex items-center gap-6 text-lg font-semibold">
//             <div className="flex items-center gap-6">
//               <NavLink href="/">Home</NavLink>
//               <NavLink href="/products">Products</NavLink>

//               {/* Team with dropdown (desktop) */}
//               <div className="relative" ref={teamRef}>
//                 <button
//                   ref={teamButtonRef}
//                   onClick={() => setTeamOpen((s) => !s)}
//                   onMouseEnter={() => setTeamOpen(true)}
//                   onFocus={() => setTeamOpen(true)}
//                   onKeyDown={(e) => {
//                     if (e.key === "Escape") setTeamOpen(false);
//                     if (e.key === "ArrowDown") setTeamOpen(true);
//                   }}
//                   aria-expanded={teamOpen}
//                   aria-haspopup="menu"
//                   className="flex items-center gap-2 px-3 py-2 rounded hover:bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#08348b]"
//                 >
//                   Team
//                   <svg
//                     width="12"
//                     height="12"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     className={`transition-transform ${teamOpen ? "rotate-180" : "rotate-0"}`}
//                     aria-hidden
//                   >
//                     <path d="M6 9l6 6 6-6" stroke="#08348b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                   </svg>
//                 </button>

//                 {/* Dropdown — solid white background, fixed min-w, strong shadow */}
//                 <div
//                   role="menu"
//                   aria-label="Team menu"
//                   onMouseEnter={() => setTeamOpen(true)}
//                   onMouseLeave={() => setTeamOpen(false)}
//                   className={`absolute top-full mt-2 right-0 min-w-[180px] rounded-md bg-white text-[#082f63] shadow-lg ring-1 ring-black/10 backdrop-blur-sm transition-all duration-150 transform origin-top-right z-50 ${
//                     teamOpen ? "opacity-100 pointer-events-auto translate-y-0 scale-100" : "opacity-0 pointer-events-none -translate-y-1 scale-95"
//                   }`}
//                 >
//                   <ul className="flex flex-col py-2">
//                     <li role="none">
//                       <Link
//                         href="/team"
//                         role="menuitem"
//                         tabIndex={teamOpen ? 0 : -1}
//                         onClick={() => setTeamOpen(false)}
//                         className="block px-4 py-2 hover:bg-gray-100 text-sm"
//                       >
//                         Our Team
//                       </Link>
//                     </li>
//                     <li role="none">
//                       <Link
//                         href="/gallery"
//                         role="menuitem"
//                         tabIndex={teamOpen ? 0 : -1}
//                         onClick={() => setTeamOpen(false)}
//                         className="block px-4 py-2 hover:bg-gray-100 text-sm"
//                       >
//                         Gallery
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </div>

//               <NavLink href="/about">About</NavLink>
//               <NavLink href="/contact">Contact</NavLink>

//               {/* Manufacturing external link (opens in new tab) */}
//               <a
//                 href="https://veerbharat.io"
//                 target="_blank"
//                 rel="noreferrer noopener"
//                 className="relative px-2 py-1 text-gray-700 hover:text-[#08348b] transition group font-semibold"
//               >
//               Brochure
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#08348b] via-[#aa2266] to-[#5d169e] group-hover:w-full transition-all" />
//               </a>
//             </div>

//             {/* CTA - lighter & logo-related tone */}
//             <a
//               href="#"
//               className="ml-4 inline-flex items-center gap-2 px-4 py-2 rounded bg-gradient-to-r from-[#fff7cc] via-[#fde68a] to-[#ffd54f] text-[#082f63] text-lg font-bold shadow-sm hover:scale-[1.03] transition"
//             >
//               Shop Now
//             </a>

//             {/* Social icons (right side) */}
//             <div className="ml-4 flex items-center gap-3">
//               <SocialIcon href="https://www.instagram.com/veerbharatofficial" label="Instagram" ariaLabel="Veer Bharat Instagram" svg={<SvgInstagram />} />
//               <SocialIcon href="https://www.facebook.com/veerbharatofficial" label="Facebook" ariaLabel="Veer Bharat Facebook" svg={<SvgFacebook />} />
//               <SocialIcon href="https://www.linkedin.com/company/veer-bharat" label="LinkedIn" ariaLabel="Veer Bharat LinkedIn" svg={<SvgLinkedIn />} />
//               <SocialIcon href="https://www.youtube.com/@Veerbharatofficial1" label="YouTube" ariaLabel="Veer Bharat YouTube" svg={<SvgYouTube />} />
//             </div>
//           </nav>

//           {/* Mobile hamburger */}
//           <div className="md:hidden flex items-center gap-3">
//             <button
//               onClick={() => setOpen((s) => !s)}
//               aria-expanded={open}
//               aria-label={open ? "Close menu" : "Open menu"}
//               className="relative w-12 h-12 flex items-center justify-center rounded-lg hover:bg-[#08348b]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#08348b]"
//             >
//               <svg className="w-8 h-8 text-[#08348b]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                 {open ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         <div className={`md:hidden bg-white border-t border-[rgba(8,52,139,0.06)] shadow-inner overflow-hidden transition-all duration-300 ${open ? "max-h-[640px] py-6 opacity-100" : "max-h-0 py-0 opacity-0"}`}>
//           <div className="container mx-auto px-6 flex flex-col gap-4 text-lg font-medium">
//             <MobileLink href="/" onClick={() => setOpen(false)}>
//               Home
//             </MobileLink>
//             <MobileLink href="/products" onClick={() => setOpen(false)}>
//               Products
//             </MobileLink>

//             {/* Mobile: Team expands to show Gallery */}
//             <details className="group bg-transparent rounded-md">
//               <summary className="px-4 py-3 cursor-pointer list-none flex items-center justify-between">
//                 Team
//                 <span className="text-gray-500 group-open:rotate-180 transition-transform">▾</span>
//               </summary>
//               <div className="pl-4 pr-4 pb-2 flex flex-col gap-1">
//                 <MobileLink href="/team" onClick={() => setOpen(false)}>
//                   Our Team
//                 </MobileLink>
//                 <MobileLink href="/gallery" onClick={() => setOpen(false)}>
//                   Gallery
//                 </MobileLink>
//               </div>
//             </details>

//             <MobileLink href="/about" onClick={() => setOpen(false)}>
//               About
//             </MobileLink>
//             <MobileLink href="/contact" onClick={() => setOpen(false)}>
//               Contact
//             </MobileLink>

//             {/* Manufacturing (mobile) - external */}
//             <a
//               href="https://veerbharat.io"
//               target="_blank"
//               rel="noreferrer noopener"
//               className="block px-4 py-3 rounded-md text-[#08348b] hover:bg-[#08348b]/5 font-semibold transition"
//               onClick={() => setOpen(false)}
//             >
//               Brochure
//             </a>

//             <a
//               href="#"
//               className="mt-3 w-full text-center inline-block px-5 py-3 rounded-lg bg-gradient-to-r from-[#fff7cc] via-[#fde68a] to-[#ffd54f] text-[#082f63] font-bold shadow-sm hover:scale-[1.03] transition"
//               onClick={() => setOpen(false)}
//             >
//               Shop Now
//             </a>

//             <div className="flex items-center gap-4 pt-2">
//               <SocialIconSmall href="https://www.instagram.com/veerbharatofficial" label="Instagram" />
//               <SocialIconSmall href="https://www.facebook.com/share/1CKoYSoAVg/" label="Facebook" />
//               <SocialIconSmall href="https://www.linkedin.com/company/veer-bharat" label="LinkedIn" />
//               <SocialIconSmall href="https://www.youtube.com/@Veer.officialbharat" label="YouTube" />
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// }

// /* small helpers */
// function NavLink({ href, children }) {
//   return (
//     <Link href={href} className="relative px-2 py-1 text-gray-700 hover:text-[#08348b] transition group">
//       {children}
//       <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#08348b] via-[#aa2266] to-[#5d169e] group-hover:w-full transition-all" />
//     </Link>
//   );
// }

// function MobileLink({ href, children, onClick }) {
//   return (
//     <Link href={href} className="block px-4 py-3 rounded-md text-[#08348b] hover:bg-[#08348b]/5 font-semibold transition" onClick={onClick}>
//       {children}
//     </Link>
//   );
// }

// /* Social small button used in desktop right side */
// function SocialIcon({ href, label, svg, ariaLabel }) {
//   return (
//     <a href={href} target="_blank" rel="noreferrer noopener" aria-label={ariaLabel || label} className="p-2 rounded-md hover:bg-white/20 transition flex items-center justify-center">
//       <span className="sr-only">{label}</span>
//       {svg}
//     </a>
//   );
// }

// /* mobile simple circular icons */
// function SocialIconSmall({ href, label }) {
//   return (
//     <a href={href} target="_blank" rel="noreferrer noopener" aria-label={label} className="w-10 h-10 rounded-full bg-[#08348b]/5 flex items-center justify-center hover:scale-105 transition">
//       <span className="sr-only">{label}</span>

//       {label.toLowerCase().includes("insta") && (
//         <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
//           <defs>
//             <linearGradient id="g2" x1="0" x2="1">
//               <stop offset="0" stopColor="#f58529" />
//               <stop offset="0.5" stopColor="#dd2a7b" />
//               <stop offset="1" stopColor="#515bd4" />
//             </linearGradient>
//           </defs>
//           <rect x="3" y="3" width="18" height="18" rx="5" fill="url(#g2)" />
//           <circle cx="12" cy="12" r="3.2" fill="#fff" opacity="0.95" />
//         </svg>
//       )}

//       {label.toLowerCase().includes("facebook") && (
//         <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
//           <rect x="2" y="2" width="20" height="20" rx="3" fill="#1877F2" />
//           <path d="M15 8.5h1.8V6.2H15c-.9 0-1.3.4-1.3 1.2V9H12v2.1h1.7v6.6h2.1v-6.6H17l.3-2.1h-1.6V7.8c0-.5.2-1.3 1.1-1.3z" fill="#fff" />
//         </svg>
//       )}

//       {label.toLowerCase().includes("linkedin") && (
//         <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
//           <rect x="2" y="2" width="20" height="20" rx="3" fill="#0A66C2" />
//           <path d="M8.1 17H5.5V9.5h2.6V17zm-1.3-8.6c-.8 0-1.3-.6-1.3-1.3 0-.8.6-1.3 1.3-1.3.8 0 1.3.6 1.3 1.3 0 .7-.5 1.3-1.3 1.3zM19 17h-2.6v-3.7c0-.9-.3-1.5-1.1-1.5-.6 0-.9.4-1.1.8-.1.2-.1.5-.1.7V17h-2.6s.1-6.7 0-7.5h2.6v1.1c.3-.5.8-1.2 2-1.2 1.5 0 2.7 1 2.7 3.3V17z" fill="#fff" />
//         </svg>
//       )}

//       {label.toLowerCase().includes("youtube") && (
//         <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
//           <rect x="2" y="6" width="20" height="12" rx="3" fill="#FF0000" />
//           <polygon points="10,9 16,12 10,15" fill="#fff" />
//         </svg>
//       )}
//     </a>
//   );
// }

// /* small inline SVG components for cleanliness */
// function SvgInstagram() {
//   return (
//     <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
//       <defs>
//         <linearGradient id="instaGrad" x1="0" x2="1">
//           <stop offset="0" stopColor="#f58529" />
//           <stop offset="0.5" stopColor="#dd2a7b" />
//           <stop offset="1" stopColor="#515bd4" />
//         </linearGradient>
//       </defs>
//       <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#instaGrad)" />
//       <circle cx="12" cy="12" r="3.2" fill="#fff" opacity="0.95" />
//       <circle cx="17" cy="7" r="0.9" fill="#fff" />
//     </svg>
//   );
// }
// function SvgFacebook() {
//   return (
//     <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
//       <rect x="2" y="2" width="20" height="20" rx="3" fill="#1877F2" />
//       <path d="M15 8.5h1.8V6.2H15c-.9 0-1.3.4-1.3 1.2V9H12v2.1h1.7v6.6h2.1v-6.6H17l.3-2.1h-1.6V7.8c0-.5.2-1.3 1.1-1.3z" fill="#fff" />
//     </svg>
//   );
// }
// function SvgLinkedIn() {
//   return (
//     <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
//       <rect x="2" y="2" width="20" height="20" rx="3" fill="#0A66C2" />
//       <path d="M8.1 17H5.5V9.5h2.6V17zm-1.3-8.6c-.8 0-1.3-.6-1.3-1.3 0-.8.6-1.3 1.3-1.3.8 0 1.3.6 1.3 1.3 0 .7-.5 1.3-1.3 1.3zM19 17h-2.6v-3.7c0-.9-.3-1.5-1.1-1.5-.6 0-.9.4-1.1.8-.1.2-.1.5-.1.7V17h-2.6s.1-6.7 0-7.5h2.6v1.1c.3-.5.8-1.2 2-1.2 1.5 0 2.7 1 2.7 3.3V17z" fill="#fff" />
//     </svg>
//   );
// }
// function SvgYouTube() {
//   return (
//     <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
//       <rect x="2" y="6" width="20" height="12" rx="3" fill="#FF0000" />
//       <polygon points="10,9 16,12 10,15" fill="#fff" />
//     </svg>
//   );
// }


// components/Navbar.jsx

// components/Navbar.jsx

// "use client";

// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Navbar() {
//   const [open, setOpen] = useState(false); // mobile menu
//   const [scrolled, setScrolled] = useState(false);
//   const [teamOpen, setTeamOpen] = useState(false);
//   const [brochureOpen, setBrochureOpen] = useState(false);
//   const [viewerOpen, setViewerOpen] = useState(false);

//   // refs for click-outside
//   const teamRef = useRef(null);
//   const teamButtonRef = useRef(null);
//   const brochureRef = useRef(null);
//   const brochureButtonRef = useRef(null);

//   // update this path if your pdf name/path is different
//   const pdfPath = "/docs/pdf/brochure.pdf";

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     // click outside to close dropdowns
//     const onDoc = (e) => {
//       if (
//         teamRef.current &&
//         !teamRef.current.contains(e.target) &&
//         teamButtonRef.current &&
//         !teamButtonRef.current.contains(e.target)
//       ) {
//         setTeamOpen(false);
//       }
//       if (
//         brochureRef.current &&
//         !brochureRef.current.contains(e.target) &&
//         brochureButtonRef.current &&
//         !brochureButtonRef.current.contains(e.target)
//       ) {
//         setBrochureOpen(false);
//       }
//     };
//     document.addEventListener("click", onDoc);
//     return () => document.removeEventListener("click", onDoc);
//   }, []);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "Escape") {
//         setTeamOpen(false);
//         setBrochureOpen(false);
//         setOpen(false);
//         setViewerOpen(false);
//       }
//     };
//     document.addEventListener("keydown", onKey);
//     return () => document.removeEventListener("keydown", onKey);
//   }, []);

//   return (
//     <>
//       <header
//         className={`w-full transition-all duration-300 border-b border-[rgba(8,52,139,0.04)] ${
//           scrolled ? "fixed top-0 left-0 z-50 py-3 shadow-sm" : "relative py-5 shadow-sm"
//         }`}
//         style={{ backgroundColor: "#DFC6F6" }}
//       >
//         <div className="container mx-auto flex items-center justify-between px-6">
//           {/* LEFT: Logo + Brand (clean, left-aligned, no box) */}
//           <Link href="/" className="flex items-center gap-4" onClick={() => setOpen(false)} aria-label="Veer Bharat Home">
//             <div className={`flex items-center ${scrolled ? "gap-2" : "gap-3"}`}>
//               <div className={`relative ${scrolled ? "w-14 h-14" : "w-20 h-20"} flex-shrink-0`}>
//                 <Image src="/logo.png" alt="Veer Bharat logo" fill style={{ objectFit: "contain" }} priority sizes="80px" />
//               </div>

//               <div className="flex flex-col leading-tight">
//                 <span className={`font-extrabold tracking-tight transition-all duration-300 ${scrolled ? "text-2xl" : "text-3xl"} text-[#08348b]`}>
//                   VEER BHARAT
//                 </span>
//                 <span className={`italic text-[#aa2266] transition-all duration-300 ${scrolled ? "text-sm" : "text-base"}`}>
//                   वह! मज़ा आ गया
//                 </span>
//               </div>
//             </div>
//           </Link>

//           {/* RIGHT */}
//           <div className="flex items-center gap-4">
//             {/* Desktop nav */}
//             <nav className="hidden md:flex items-center gap-6 text-lg font-semibold">
//               <div className="flex items-center gap-6">
//                 <NavLink href="/">Home</NavLink>
//                 <NavLink href="/products">Products</NavLink>

//                 {/* Team dropdown */}
//                 <div className="relative" ref={teamRef}>
//                   <button
//                     ref={teamButtonRef}
//                     onClick={() => setTeamOpen((s) => !s)}
//                     onMouseEnter={() => setTeamOpen(true)}
//                     onFocus={() => setTeamOpen(true)}
//                     aria-expanded={teamOpen}
//                     aria-haspopup="menu"
//                     className="flex items-center gap-2 px-3 py-2 rounded hover:bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#08348b]"
//                   >
//                     Team
//                     <ChevronIcon open={teamOpen} />
//                   </button>

//                   <div
//                     role="menu"
//                     aria-label="Team menu"
//                     onMouseEnter={() => setTeamOpen(true)}
//                     onMouseLeave={() => setTeamOpen(false)}
//                     className={`absolute top-full mt-2 right-0 min-w-[180px] rounded-md bg-white text-[#082f63] shadow-lg ring-1 ring-black/10 backdrop-blur-sm transition-all duration-150 transform origin-top-right z-50 ${
//                       teamOpen ? "opacity-100 pointer-events-auto translate-y-0 scale-100" : "opacity-0 pointer-events-none -translate-y-1 scale-95"
//                     }`}
//                   >
//                     <ul className="flex flex-col py-2">
//                       <li>
//                         <Link href="/team" role="menuitem" tabIndex={teamOpen ? 0 : -1} onClick={() => setTeamOpen(false)} className="block px-4 py-2 hover:bg-gray-100 text-sm">
//                           Our Team
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/gallery" role="menuitem" tabIndex={teamOpen ? 0 : -1} onClick={() => setTeamOpen(false)} className="block px-4 py-2 hover:bg-gray-100 text-sm">
//                           Gallery
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 <NavLink href="/about">About</NavLink>
//                 <NavLink href="/contact">Contact</NavLink>

//                 {/* Brochure dropdown: View (modal) & Download */}
//                 <div className="relative" ref={brochureRef}>
//                   <button
//                     ref={brochureButtonRef}
//                     onClick={() => setBrochureOpen((s) => !s)}
//                     onMouseEnter={() => setBrochureOpen(true)}
//                     onFocus={() => setBrochureOpen(true)}
//                     aria-expanded={brochureOpen}
//                     aria-haspopup="menu"
//                     className="flex items-center gap-2 px-3 py-2 rounded hover:bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#08348b] font-semibold"
//                   >
//                     Brochure
//                     <ChevronIcon open={brochureOpen} />
//                   </button>

//                   <div
//                     role="menu"
//                     aria-label="Brochure menu"
//                     onMouseEnter={() => setBrochureOpen(true)}
//                     onMouseLeave={() => setBrochureOpen(false)}
//                     className={`absolute top-full mt-2 right-0 min-w-[220px] rounded-md bg-white text-[#082f63] shadow-lg ring-1 ring-black/10 backdrop-blur-sm transition-all duration-150 transform origin-top-right z-50 ${
//                       brochureOpen ? "opacity-100 pointer-events-auto translate-y-0 scale-100" : "opacity-0 pointer-events-none -translate-y-1 scale-95"
//                     }`}
//                   >
//                     <ul className="flex flex-col py-2">
//                       <li>
//                         <button
//                           onClick={() => {
//                             setViewerOpen(true); // open modal viewer (works on any page)
//                             setBrochureOpen(false);
//                           }}
//                           role="menuitem"
//                           tabIndex={brochureOpen ? 0 : -1}
//                           className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
//                         >
//                           View Brochure
//                         </button>
//                       </li>

//                       <li>
//                         <a
//                           href={pdfPath}
//                           download
//                           onClick={() => setBrochureOpen(false)}
//                           role="menuitem"
//                           tabIndex={brochureOpen ? 0 : -1}
//                           className="block px-4 py-2 hover:bg-gray-100 text-sm"
//                         >
//                           Download Brochure
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>

//               <a href="#" className="ml-4 inline-flex items-center gap-2 px-4 py-2 rounded bg-gradient-to-r from-[#fff7cc] via-[#fde68a] to-[#ffd54f] text-[#082f63] text-lg font-bold shadow-sm hover:scale-[1.03] transition">
//                 Shop Now
//               </a>
//             </nav>

//             {/* Desktop socials */}
//             <div className="hidden md:flex items-center gap-3 ml-4">
//               <SocialIcon href="https://www.instagram.com/veerbharatofficial" label="Instagram" ariaLabel="Veer Bharat Instagram" svg={<SvgInstagram />} />
//               <SocialIcon href="https://www.facebook.com/veerbharatofficial" label="Facebook" ariaLabel="Veer Bharat Facebook" svg={<SvgFacebook />} />
//               <SocialIcon href="https://www.linkedin.com/company/veer-bharat" label="LinkedIn" ariaLabel="Veer Bharat LinkedIn" svg={<SvgLinkedIn />} />
//               <SocialIcon href="https://www.youtube.com/@Veerbharatofficial1" label="YouTube" ariaLabel="Veer Bharat YouTube" svg={<SvgYouTube />} />
//               <SocialIcon href="https://twitter.com/veerbharat" label="Twitter" ariaLabel="Veer Bharat Twitter" svg={<SvgTwitter />} />
//             </div>

//             {/* Mobile hamburger */}
//             <div className="md:hidden flex items-center gap-3">
//               <button
//                 onClick={() => setOpen((s) => !s)}
//                 aria-expanded={open}
//                 aria-label={open ? "Close menu" : "Open menu"}
//                 className="relative w-12 h-12 flex items-center justify-center rounded-lg hover:bg-[#08348b]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#08348b]"
//               >
//                 <svg className="w-8 h-8 text-[#08348b]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                   {open ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile menu (collapsible) */}
//         <div className={`md:hidden bg-white border-t border-[rgba(8,52,139,0.06)] shadow-inner overflow-hidden transition-all duration-300 ${open ? "max-h-[640px] py-6 opacity-100" : "max-h-0 py-0 opacity-0"}`}>
//           <div className="container mx-auto px-6 flex flex-col gap-4 text-lg font-medium">
//             <MobileLink href="/" onClick={() => setOpen(false)}>Home</MobileLink>
//             <MobileLink href="/products" onClick={() => setOpen(false)}>Products</MobileLink>

//             <details className="group bg-transparent rounded-md">
//               <summary className="px-4 py-3 cursor-pointer list-none flex items-center justify-between">
//                 Team
//                 <span className="text-gray-500 group-open:rotate-180 transition-transform">▾</span>
//               </summary>
//               <div className="pl-4 pr-4 pb-2 flex flex-col gap-1">
//                 <MobileLink href="/team" onClick={() => setOpen(false)}>Our Team</MobileLink>
//                 <MobileLink href="/gallery" onClick={() => setOpen(false)}>Gallery</MobileLink>
//               </div>
//             </details>

//             <MobileLink href="/about" onClick={() => setOpen(false)}>About</MobileLink>
//             <MobileLink href="/contact" onClick={() => setOpen(false)}>Contact</MobileLink>

//             {/* Brochure in mobile */}
//             <div className="pl-4 pr-4 pb-2">
//               <div className="flex flex-col gap-2">
//                 <button onClick={() => { setViewerOpen(true); setOpen(false); }} className="w-full text-left px-4 py-3 rounded-md text-[#08348b] hover:bg-[#08348b]/5 font-semibold transition">View Brochure</button>
//                 <a href={pdfPath} download className="w-full block text-center px-4 py-3 rounded-md bg-gradient-to-r from-[#08348b] via-[#aa2266] to-[#5d169e] text-white font-semibold">Download Brochure</a>
//               </div>
//             </div>

//             <a href="#" className="mt-3 w-full text-center inline-block px-5 py-3 rounded-lg bg-gradient-to-r from-[#fff7cc] via-[#fde68a] to-[#ffd54f] text-[#082f63] font-bold shadow-sm hover:scale-[1.03] transition" onClick={() => setOpen(false)}>Shop Now</a>

//             <div className="flex items-center gap-4 pt-2">
//               <SocialIconSmall href="https://www.instagram.com/veerbharatofficial" label="Instagram" />
//               <SocialIconSmall href="https://www.facebook.com/share/1CKoYSoAVg/" label="Facebook" />
//               <SocialIconSmall href="https://www.linkedin.com/company/veer-bharat" label="LinkedIn" />
//               <SocialIconSmall href="https://www.youtube.com/@Veer.officialbharat" label="YouTube" />
//               <SocialIconSmall href="https://twitter.com/veerbharat" label="Twitter" />
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* PDF Viewer Modal (works on any page including Products) */}
//       {viewerOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//           <div className="absolute inset-0 bg-black/50" onClick={() => setViewerOpen(false)} />

//           <div className="relative w-full max-w-6xl h-[80vh] bg-white rounded shadow-lg overflow-hidden z-60">
//             <div className="flex items-center justify-between px-4 py-3 border-b">
//               <h3 className="text-lg font-semibold text-[#082f63]">Brochure Preview</h3>
//               <div className="flex items-center gap-2">
//                 <a href={pdfPath} download className="px-3 py-1 text-sm rounded border border-gray-200 hover:bg-gray-50">Download</a>
//                 <button onClick={() => setViewerOpen(false)} className="px-3 py-1 text-sm rounded border border-gray-200 hover:bg-gray-50">Close</button>
//               </div>
//             </div>

//             <div className="w-full h-full">
//               {/* iframe shows inline PDF; works cross-page */}
//               <iframe src={`${pdfPath}#view=FitH`} title="Brochure PDF" className="w-full h-full" />
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// /* ---------- helpers ---------- */

// function NavLink({ href, children }) {
//   return (
//     <Link href={href} className="relative px-2 py-1 text-gray-700 hover:text-[#08348b] transition group">
//       {children}
//       <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#08348b] via-[#aa2266] to-[#5d169e] group-hover:w-full transition-all" />
//     </Link>
//   );
// }

// function MobileLink({ href, children, onClick }) {
//   return (
//     <Link href={href} className="block px-4 py-3 rounded-md text-[#08348b] hover:bg-[#08348b]/5 font-semibold transition" onClick={onClick}>
//       {children}
//     </Link>
//   );
// }

// function ChevronIcon({ open }) {
//   return (
//     <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className={`transition-transform ${open ? "rotate-180" : "rotate-0"}`} aria-hidden>
//       <path d="M6 9l6 6 6-6" stroke="#08348b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );
// }

// /* social icons - nicer vector shapes */
// function SocialIcon({ href, label, svg, ariaLabel }) {
//   return (
//     <a href={href} target="_blank" rel="noreferrer noopener" aria-label={ariaLabel || label} className="p-2 rounded-md hover:bg-white/20 transition flex items-center justify-center">
//       <span className="sr-only">{label}</span>
//       {svg}
//     </a>
//   );
// }

// function SocialIconSmall({ href, label }) {
//   const name = (label || "").toLowerCase();
//   return (
//     <a href={href} target="_blank" rel="noreferrer noopener" aria-label={label} className="w-10 h-10 rounded-full bg-[#08348b]/5 flex items-center justify-center hover:scale-105 transition">
//       <span className="sr-only">{label}</span>
//       {/* simple icon */}
//       <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
//         <circle cx="12" cy="12" r="10" fill="#08348b" />
//       </svg>
//     </a>
//   );
// }

// /* SVGs for desktop socials */
// function SvgInstagram() {
//   return (
//     <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
//       <defs>
//         <linearGradient id="igGrad" x1="0" x2="1">
//           <stop offset="0" stopColor="#f58529" />
//           <stop offset="0.5" stopColor="#dd2a7b" />
//           <stop offset="1" stopColor="#515bd4" />
//         </linearGradient>
//       </defs>
//       <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#igGrad)" />
//       <circle cx="12" cy="12" r="3.2" fill="#fff" opacity="0.95" />
//       <circle cx="17" cy="7" r="0.9" fill="#fff" />
//     </svg>
//   );
// }
// function SvgFacebook() {
//   return (
//     <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
//       <rect x="2" y="2" width="20" height="20" rx="3" fill="#1877F2" />
//       <path d="M15 8.5h1.8V6.2H15c-.9 0-1.3.4-1.3 1.2V9H12v2.1h1.7v6.6h2.1v-6.6H17l.3-2.1h-1.6V7.8c0-.5.2-1.3 1.1-1.3z" fill="#fff" />
//     </svg>
//   );
// }
// function SvgLinkedIn() {
//   return (
//     <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
//       <rect x="2" y="2" width="20" height="20" rx="3" fill="#0A66C2" />
//       <path d="M8.1 17H5.5V9.5h2.6V17zm-1.3-8.6c-.8 0-1.3-.6-1.3-1.3 0-.8.6-1.3 1.3-1.3.8 0 1.3.6 1.3 1.3 0 .7-.5 1.3-1.3 1.3zM19 17h-2.6v-3.7c0-.9-.3-1.5-1.1-1.5-.6 0-.9.4-1.1.8-.1.2-.1.5-.1.7V17h-2.6s.1-6.7 0-7.5h2.6v1.1c.3-.5.8-1.2 2-1.2 1.5 0 2.7 1 2.7 3.3V17z" fill="#fff" />
//     </svg>
//   );
// }
// function SvgYouTube() {
//   return (
//     <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
//       <rect x="2" y="6" width="20" height="12" rx="3" fill="#FF0000" />
//       <polygon points="10,9 16,12 10,15" fill="#fff" />
//     </svg>
//   );
// }
// function SvgTwitter() {
//   return (
//     <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
//       <rect x="2" y="2" width="20" height="20" rx="4" fill="#1DA1F2" />
//       <path d="M7.9 18c7.5 0 11.6-6.3 11.6-11.7v-.5A8.3 8.3 0 0 0 20 5.4a8.1 8.1 0 0 1-2.3.6 4.1 4.1 0 0 0 1.8-2.3 8.2 8.2 0 0 1-2.6 1A4.1 4.1 0 0 0 9.6 8.9a11.6 11.6 0 0 1-8.4-4.2 4.1 4.1 0 0 0 1.2 5.5 4 4 0 0 1-1.9-.5v.1c0 1.9 1.3 3.6 3.1 4a4.2 4.2 0 0 1-1.9.1c.5 1.6 2 2.7 3.8 2.8A8.3 8.3 0 0 1 5 17.6 11.7 11.7 0 0 0 12 19" fill="#fff" />
//     </svg>
//   );
// }





// "use client";

// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [teamOpen, setTeamOpen] = useState(false);
//   const [brochureOpen, setBrochureOpen] = useState(false);
//   const [viewerOpen, setViewerOpen] = useState(false);

//   const teamRef = useRef(null);
//   const teamButtonRef = useRef(null);
//   const brochureRef = useRef(null);
//   const brochureButtonRef = useRef(null);

//   const pdfPath = "/docs/pdf/brochure.pdf";

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const onDoc = (e) => {
//       if (
//         teamRef.current &&
//         !teamRef.current.contains(e.target) &&
//         teamButtonRef.current &&
//         !teamButtonRef.current.contains(e.target)
//       ) {
//         setTeamOpen(false);
//       }
//       if (
//         brochureRef.current &&
//         !brochureRef.current.contains(e.target) &&
//         brochureButtonRef.current &&
//         !brochureButtonRef.current.contains(e.target)
//       ) {
//         setBrochureOpen(false);
//       }
//     };
//     document.addEventListener("click", onDoc);
//     return () => document.removeEventListener("click", onDoc);
//   }, []);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "Escape") {
//         setTeamOpen(false);
//         setBrochureOpen(false);
//         setOpen(false);
//         setViewerOpen(false);
//       }
//     };
//     document.addEventListener("keydown", onKey);
//     return () => document.removeEventListener("keydown", onKey);
//   }, []);

//   return (
//     <>
//       <header
//         className={`w-full transition-all duration-300 border-b border-[rgba(8,52,139,0.04)] ${
//           scrolled ? "fixed top-0 left-0 z-50 py-2 shadow-sm" : "relative py-4 shadow-sm"
//         }`}
//         style={{ backgroundColor: "#DFC6F6" }}
//       >
//         {/* full-width bar so logo sits left-most */}
//         <div className="w-full flex items-center px-2 md:px-4">
//           {/* LEFT: Logo (fixed left-most) */}
//           <div className="flex items-center flex-shrink-0">
//             <Link href="/" aria-label="Veer Bharat Home" className="block">
//               <div style={{ width: 150, height: 120 }} className="overflow-hidden">
//                 <Image
//                   src="/logo.png"
//                   alt="Veer Bharat logo"
//                   width={200}
//                   height={124}
//                   style={{ objectFit: "contain" }}
//                   priority
//                 />
//               </div>
//             </Link>
//             {/* Brand text to the right of logo (kept small on mobile) */}
//             <div className="hidden sm:flex flex-col leading-tight ml-2">
//               <span className="font-extrabold text-2xl md:text-3xl tracking-tight text-[#08348b]">VEER BHARAT</span>
//               <span className="italic text-sm md:text-base text-[#aa2266]">वाह! मज़ा आ गया</span>
//             </div>
//           </div>

//           {/* CENTER: nav (centered on desktop) */}
//           <nav className="hidden md:flex flex-1 justify-center items-center">
//             <ul className="flex items-center gap-8 text-lg font-semibold">
//               <li><NavLink href="/">Home</NavLink></li>
//               <li><NavLink href="/blog">Blog</NavLink></li>
//               <li><NavLink href="/products">Products</NavLink></li>

//               {/* Brochure (desktop dropdown) */}
//               <li className="relative" ref={brochureRef}>
//                 <button
//                   ref={brochureButtonRef}
//                   onClick={() => setBrochureOpen((s) => !s)}
//                   onMouseEnter={() => setBrochureOpen(true)}
//                   onFocus={() => setBrochureOpen(true)}
//                   className="flex items-center gap-2 px-2 py-1 rounded hover:bg-white/30 focus:outline-none"
//                 >
//                   Brochure <ChevronIcon open={brochureOpen} />
//                 </button>

//                 <div
//                   className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 min-w-[220px] rounded-md bg-white text-[#082f63] shadow-lg ring-1 ring-black/10 transition-all z-50 ${
//                     brochureOpen ? "opacity-100 pointer-events-auto translate-y-0 scale-100" : "opacity-0 pointer-events-none -translate-y-1 scale-95"
//                   }`}
//                   onMouseEnter={() => setBrochureOpen(true)}
//                   onMouseLeave={() => setBrochureOpen(false)}
//                 >
//                   <ul className="py-2">
//                     <li>
//                       <button
//                         onClick={() => {
//                           setViewerOpen(true);
//                           setBrochureOpen(false);
//                           setOpen(false);
//                         }}
//                         className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
//                       >
//                         View Brochure
//                       </button>
//                     </li>
//                     <li>
//                       <a href={pdfPath} download className="block px-4 py-2 hover:bg-gray-100 text-sm">Download Brochure</a>
//                     </li>
//                   </ul>
//                 </div>
//               </li>

//               <li className="relative" ref={teamRef}>
//                 <button
//                   ref={teamButtonRef}
//                   onClick={() => setTeamOpen((s) => !s)}
//                   onMouseEnter={() => setTeamOpen(true)}
//                   onFocus={() => setTeamOpen(true)}
//                   className="flex items-center gap-2 px-2 py-1 rounded hover:bg-white/30 focus:outline-none"
//                 >
//                   Team <ChevronIcon open={teamOpen} />
//                 </button>

//                 <div
//                   className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 min-w-[180px] rounded-md bg-white text-[#082f63] shadow-lg ring-1 ring-black/10 transition-all z-50 ${
//                     teamOpen ? "opacity-100 pointer-events-auto translate-y-0 scale-100" : "opacity-0 pointer-events-none -translate-y-1 scale-95"
//                   }`}
//                   onMouseEnter={() => setTeamOpen(true)}
//                   onMouseLeave={() => setTeamOpen(false)}
//                 >
//                   <ul className="py-2">
//                     <li>
//                       <Link href="/team" className="block px-4 py-2 hover:bg-gray-100 text-sm" onClick={() => { setOpen(false); setTeamOpen(false); }}>
//                         Our Team
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/gallery" className="block px-4 py-2 hover:bg-gray-100 text-sm" onClick={() => { setOpen(false); setTeamOpen(false); }}>
//                         Gallery
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </li>

//               <li><NavLink href="/about">About</NavLink></li>
//               <li><NavLink href="/contact">Contact</NavLink></li>
//             </ul>
//           </nav>

//           {/* RIGHT: shop + social + mobile hamburger */}
//           <div className="flex items-center gap-4 flex-shrink-0">
//             <div className="hidden md:flex items-center gap-2">
//               <a
//                 href="#"
//                 className="inline-flex items-center px-4 py-2 rounded bg-gradient-to-r from-[#fff7cc] to-[#ffd54f] text-[#082f63] text-lg font-bold shadow-sm"
//               >
//                 Shop Now
//               </a>

//               {/* desktop socials */}
//               <IconLink href="https://www.instagram.com/veerbharatofficial" ariaLabel="Instagram" svg={<SvgInstagram />} />
//               <IconLink href="https://www.facebook.com/veerbharatofficial" ariaLabel="Facebook" svg={<SvgFacebook />} />
//               <IconLink href="https://www.linkedin.com/company/veer-bharat" ariaLabel="LinkedIn" svg={<SvgLinkedIn />} />
//               <IconLink href="https://www.youtube.com/@Veerbharatofficial1" ariaLabel="YouTube" svg={<SvgYouTube />} />
//               <IconLink href="https://twitter.com/veerbharat" ariaLabel="Twitter" svg={<SvgTwitter />} />
//             </div>

//             {/* mobile hamburger */}
//             <div className="md:hidden">
//               <button
//                 onClick={() => setOpen((s) => !s)}
//                 aria-label={open ? "Close menu" : "Open menu"}
//                 className="w-10 h-10 flex items-center justify-center"
//               >
//                 <svg className="w-7 h-7 text-[#08348b]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                   {open ? (
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                   ) : (
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//                   )}
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile menu (slide down) */}
//         <div className={`md:hidden bg-white border-t shadow-inner overflow-hidden transition-all duration-300 ${open ? "max-h-[1000px] py-6" : "max-h-0 py-0"}`}>
//           <div className="px-4 flex flex-col gap-3 text-lg font-medium">
//             <MobileLink href="/" onClick={() => setOpen(false)}>Home</MobileLink>
//             <MobileLink href="/blog" onClick={() => setOpen(false)}>Blog</MobileLink>
//             <MobileLink href="/products" onClick={() => setOpen(false)}>Products</MobileLink>

//             <div className="flex flex-col gap-2">
//               <button onClick={() => { setViewerOpen(true); setOpen(false); }} className="px-4 py-3 rounded-md text-[#08348b] hover:bg-[#08348b]/5 font-semibold">
//                 View Brochure
//               </button>
//               <a href={pdfPath} download className="px-4 py-3 text-center rounded-md bg-gradient-to-r from-[#08348b] to-[#5d169e] text-white font-semibold">
//                 Download Brochure
//               </a>
//             </div>

//             <MobileLink href="/about" onClick={() => setOpen(false)}>About</MobileLink>

//             <details className="group bg-transparent rounded-md">
//               <summary className="px-4 py-3 cursor-pointer list-none flex items-center justify-between">
//                 Team <span className="group-open:rotate-180">▾</span>
//               </summary>
//               <div className="pl-4 pr-4 pb-2 flex flex-col gap-1">
//                 <MobileLink href="/team" onClick={() => setOpen(false)}>Our Team</MobileLink>
//                 <MobileLink href="/gallery" onClick={() => setOpen(false)}>Gallery</MobileLink>
//               </div>
//             </details>

//             <MobileLink href="/contact" onClick={() => setOpen(false)}>Contact</MobileLink>

//             <a href="#" className="mt-3 px-5 py-3 rounded-lg bg-gradient-to-r from-[#fff7cc] to-[#ffd54f] text-[#082f63] font-bold text-center">
//               Shop Now
//             </a>

//             {/* MOBILE SOCIAL ICONS — show only inside mobile menu at bottom */}
//             <div className="flex items-center gap-3 pt-4 pb-2 border-t mt-4">
//               <IconLink href="https://www.instagram.com/veerbharatofficial" ariaLabel="Instagram" svg={<SvgInstagram />} />
//               <IconLink href="https://www.facebook.com/veerbharatofficial" ariaLabel="Facebook" svg={<SvgFacebook />} />
//               <IconLink href="https://www.linkedin.com/company/veer-bharat" ariaLabel="LinkedIn" svg={<SvgLinkedIn />} />
//               <IconLink href="https://www.youtube.com/@Veerbharatofficial1" ariaLabel="YouTube" svg={<SvgYouTube />} />
//               <IconLink href="https://twitter.com/veerbharat" ariaLabel="Twitter" svg={<SvgTwitter />} />
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Brochure modal */}
//       {viewerOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//           <div className="absolute inset-0 bg-black/50" onClick={() => setViewerOpen(false)} />
//           <div className="relative w-full max-w-6xl h-[80vh] bg-white rounded shadow-lg overflow-hidden">
//             <div className="flex items-center justify-between px-4 py-3 border-b">
//               <h3 className="text-lg font-semibold text-[#082f63]">Brochure Preview</h3>
//               <div className="flex items-center gap-2">
//                 <a href={pdfPath} download className="px-3 py-1 text-sm rounded border hover:bg-gray-50">Download</a>
//                 <button onClick={() => setViewerOpen(false)} className="px-3 py-1 text-sm rounded border hover:bg-gray-50">Close</button>
//               </div>
//             </div>
//             <iframe src={`${pdfPath}#view=FitH`} className="w-full h-full" />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// /* ---------- helpers ---------- */
// function NavLink({ href, children }) {
//   return (
//     <Link href={href} className="px-2 py-1 text-gray-700 hover:text-[#08348b] transition">
//       {children}
//     </Link>
//   );
// }
// function MobileLink({ href, children, onClick }) {
//   return (
//     <Link href={href} onClick={onClick} className="px-4 py-3 rounded-md text-[#08348b] hover:bg-[#08348b]/5 font-semibold">
//       {children}
//     </Link>
//   );
// }
// function ChevronIcon({ open }) {
//   return (
//     <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className={`transition-transform ${open ? "rotate-180" : ""}`}>
//       <path d="M6 9l6 6 6-6" stroke="#08348b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );
// }
// function IconLink({ href, ariaLabel, svg }) {
//   return (
//     <a href={href} target="_blank" rel="noreferrer noopener" aria-label={ariaLabel} className="w-9 h-9 flex items-center justify-center">
//       {svg}
//     </a>
//   );
// }

// /* --- SVGs --- */
// function SvgInstagram() {
//   return (
//     <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
//       <defs>
//         <linearGradient id="ig" x1="0" x2="1">
//           <stop offset="0" stopColor="#f58529" />
//           <stop offset="0.5" stopColor="#dd2a7b" />
//           <stop offset="1" stopColor="#515bd4" />
//         </linearGradient>
//       </defs>
//       <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#ig)" />
//       <circle cx="12" cy="12" r="3.2" fill="#fff" />
//       <circle cx="17" cy="7" r="0.9" fill="#fff" />
//     </svg>
//   );
// }
// function SvgFacebook() {
//   return (
//     <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
//       <rect x="2" y="2" width="20" height="20" rx="3" fill="#1877F2" />
//       <path d="M15 8.5h1.8V6.2H15c-.9 0-1.3.4-1.3 1.2V9H12v2.1h1.7v6.6h2.1v-6.6H17l.3-2.1h-1.6V7.8c0-.5.2-1.3 1.1-1.3z" fill="#fff" />
//     </svg>
//   );
// }
// function SvgLinkedIn() {
//   return (
//     <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
//       <rect x="2" y="2" width="20" height="20" rx="3" fill="#0A66C2" />
//       <path d="M8.1 17H5.5V9.5h2.6V17zm-1.3-8.6c-.8 0-1.3-.6-1.3-1.3 0-.8.6-1.3 1.3-1.3.8 0 1.3.6 1.3 1.3 0 .7-.5 1.3-1.3 1.3zM19 17h-2.6v-3.7c0-.9-.3-1.5-1.1-1.5-.6 0-.9.4-1.1.8-.1.2-.1.5-.1.7V17h-2.6s.1-6.7 0-7.5h2.6v1.1c.3-.5.8-1.2 2-1.2 1.5 0 2.7 1 2.7 3.3V17z" fill="#fff" />
//     </svg>
//   );
// }
// function SvgYouTube() {
//   return (
//     <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
//       <rect x="2" y="6" width="20" height="12" rx="3" fill="#FF0000" />
//       <polygon points="10,9 16,12 10,15" fill="#fff" />
//     </svg>
//   );
// }
// function SvgTwitter() {
//   return (
//     <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
//       <rect x="2" y="2" width="20" height="20" rx="4" fill="#1DA1F2" />
//       <path d="M7.9 18c7.5 0 11.6-6.3 11.6-11.7v-.5A8.3 8.3 0 0 0 20 5.4a8.1 8.1 0 0 1-2.3.6 4.1 4.1 0 0 0 1.8-2.3 8.2 8.2 0 0 1-2.6 1A4.1 4.1 0 0 0 9.6 8.9a11.6 11.6 0 0 1-8.4-4.2 4.1 4.1 0 0 0 1.2 5.5 4 4 0 0 1-1.9-.5v.1c0 1.9 1.3 3.6 3.1 4a4.2 4.2 0 0 1-1.9.1c.5 1.6 2 2.7 3.8 2.8A8.3 8.3 0 0 1 5 17.6 11.7 11.7 0 0 0 12 19" fill="#fff" />
//     </svg>
//   );
// }







// "use client";

// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// // Use the LogoLink you created earlier (path assumes src/app/components/LogoLink.jsx)
// import LogoLink from "@/components/LogoLink";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [teamOpen, setTeamOpen] = useState(false);
//   const [brochureOpen, setBrochureOpen] = useState(false);
//   const [viewerOpen, setViewerOpen] = useState(false);

//   const teamRef = useRef(null);
//   const teamButtonRef = useRef(null);
//   const brochureRef = useRef(null);
//   const brochureButtonRef = useRef(null);

//   const pdfPath = "/docs/pdf/brochure.pdf";

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const onDoc = (e) => {
//       if (
//         teamRef.current &&
//         !teamRef.current.contains(e.target) &&
//         teamButtonRef.current &&
//         !teamButtonRef.current.contains(e.target)
//       ) {
//         setTeamOpen(false);
//       }
//       if (
//         brochureRef.current &&
//         !brochureRef.current.contains(e.target) &&
//         brochureButtonRef.current &&
//         !brochureButtonRef.current.contains(e.target)
//       ) {
//         setBrochureOpen(false);
//       }
//     };
//     document.addEventListener("click", onDoc);
//     return () => document.removeEventListener("click", onDoc);
//   }, []);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "Escape") {
//         setTeamOpen(false);
//         setBrochureOpen(false);
//         setOpen(false);
//         setViewerOpen(false);
//       }
//     };
//     document.addEventListener("keydown", onKey);
//     return () => document.removeEventListener("keydown", onKey);
//   }, []);

//   return (
//     <>
//       <header
//         className={`w-full transition-all duration-300 border-b border-[rgba(8,52,139,0.04)] ${
//           scrolled ? "fixed top-0 left-0 z-50 py-2 shadow-sm" : "relative py-4 shadow-sm"
//         }`}
//         style={{ backgroundColor: "#DFC6F6" }}
//       >
//         {/* full-width bar so logo sits left-most */}
//         <div className="w-full flex items-center px-2 md:px-4">
//           {/* LEFT: Logo (fixed left-most) */}
//           <div className="flex items-center flex-shrink-0">
//             <LogoLink href="/" aria-label="Veer Bharat Home" className="block">
//               <div style={{ width: 150, height: 120 }} className="overflow-hidden">
//                 <Image
//                   src="/logo.png"
//                   alt="Veer Bharat logo"
//                   width={200}
//                   height={124}
//                   style={{ objectFit: "contain" }}
//                   priority
//                 />
//               </div>
//             </LogoLink>
//             {/* Brand text to the right of logo (kept small on mobile) */}
//             <div className="hidden sm:flex flex-col leading-tight ml-2">
//               <span className="font-extrabold text-2xl md:text-3xl tracking-tight text-[#08348b]">VEER BHARAT</span>
//               <span className="italic text-sm md:text-base text-[#aa2266]">वाह! मज़ा आ गया</span>
//             </div>
//           </div>

//           {/* CENTER: nav (centered on desktop) */}
//           <nav className="hidden md:flex flex-1 justify-center items-center">
//             <ul className="flex items-center gap-8 text-lg font-semibold">
//               <li><NavLink href="/">Home</NavLink></li>
//               <li><NavLink href="/blog">Blog</NavLink></li>
//               <li><NavLink href="/products">Products</NavLink></li>

//               {/* Brochure (desktop dropdown) */}
//               <li className="relative" ref={brochureRef}>
//                 <button
//                   ref={brochureButtonRef}
//                   onClick={() => setBrochureOpen((s) => !s)}
//                   onMouseEnter={() => setBrochureOpen(true)}
//                   onFocus={() => setBrochureOpen(true)}
//                   className="flex items-center gap-2 px-2 py-1 rounded hover:bg-white/30 focus:outline-none"
//                 >
//                   Brochure <ChevronIcon open={brochureOpen} />
//                 </button>

//                 <div
//                   className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 min-w-[220px] rounded-md bg-white text-[#082f63] shadow-lg ring-1 ring-black/10 transition-all z-50 ${
//                     brochureOpen ? "opacity-100 pointer-events-auto translate-y-0 scale-100" : "opacity-0 pointer-events-none -translate-y-1 scale-95"
//                   }`}
//                   onMouseEnter={() => setBrochureOpen(true)}
//                   onMouseLeave={() => setBrochureOpen(false)}
//                 >
//                   <ul className="py-2">
//                     <li>
//                       <button
//                         onClick={() => {
//                           setViewerOpen(true);
//                           setBrochureOpen(false);
//                           setOpen(false);
//                         }}
//                         className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
//                       >
//                         View Brochure
//                       </button>
//                     </li>
//                     <li>
//                       <a href={pdfPath} download className="block px-4 py-2 hover:bg-gray-100 text-sm">Download Brochure</a>
//                     </li>
//                   </ul>
//                 </div>
//               </li>

//               <li className="relative" ref={teamRef}>
//                 <button
//                   ref={teamButtonRef}
//                   onClick={() => setTeamOpen((s) => !s)}
//                   onMouseEnter={() => setTeamOpen(true)}
//                   onFocus={() => setTeamOpen(true)}
//                   className="flex items-center gap-2 px-2 py-1 rounded hover:bg-white/30 focus:outline-none"
//                 >
//                   Team <ChevronIcon open={teamOpen} />
//                 </button>

//                 <div
//                   className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 min-w-[180px] rounded-md bg-white text-[#082f63] shadow-lg ring-1 ring-black/10 transition-all z-50 ${
//                     teamOpen ? "opacity-100 pointer-events-auto translate-y-0 scale-100" : "opacity-0 pointer-events-none -translate-y-1 scale-95"
//                   }`}
//                   onMouseEnter={() => setTeamOpen(true)}
//                   onMouseLeave={() => setTeamOpen(false)}
//                 >
//                   <ul className="py-2">
//                     <li>
//                       <LogoLink
//                         href="/team"
//                         className="block px-4 py-2 hover:bg-gray-100 text-sm"
//                         onClick={() => { setOpen(false); setTeamOpen(false); }}
//                       >
//                         Our Team
//                       </LogoLink>
//                     </li>
//                     <li>
//                       <LogoLink
//                         href="/gallery"
//                         className="block px-4 py-2 hover:bg-gray-100 text-sm"
//                         onClick={() => { setOpen(false); setTeamOpen(false); }}
//                       >
//                         Gallery
//                       </LogoLink>
//                     </li>
//                   </ul>
//                 </div>
//               </li>

//               <li><NavLink href="/about">About</NavLink></li>
//               <li><NavLink href="/contact">Contact</NavLink></li>
//             </ul>
//           </nav>

//           {/* RIGHT: shop + social + mobile hamburger */}
//           <div className="flex items-center gap-4 flex-shrink-0">
//             <div className="hidden md:flex items-center gap-2">
//               <a
//                 href="#"
//                 className="inline-flex items-center px-4 py-2 rounded bg-gradient-to-r from-[#fff7cc] to-[#ffd54f] text-[#082f63] text-lg font-bold shadow-sm"
//               >
//                 Shop Now
//               </a>

//               {/* desktop socials */}
//               <IconLink href="https://www.instagram.com/veerbharatofficial" ariaLabel="Instagram" svg={<SvgInstagram />} />
//               <IconLink href="https://www.facebook.com/veerbharatofficial" ariaLabel="Facebook" svg={<SvgFacebook />} />
//               <IconLink href="https://www.linkedin.com/company/veer-bharat" ariaLabel="LinkedIn" svg={<SvgLinkedIn />} />
//               <IconLink href="https://www.youtube.com/@Veerbharatofficial1" ariaLabel="YouTube" svg={<SvgYouTube />} />
//               <IconLink href="https://twitter.com/veerbharat" ariaLabel="Twitter" svg={<SvgTwitter />} />
//             </div>

//             {/* mobile hamburger */}
//             <div className="md:hidden">
//               <button
//                 onClick={() => setOpen((s) => !s)}
//                 aria-label={open ? "Close menu" : "Open menu"}
//                 className="w-10 h-10 flex items-center justify-center"
//               >
//                 <svg className="w-7 h-7 text-[#08348b]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                   {open ? (
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                   ) : (
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//                   )}
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile menu (slide down) */}
//         <div className={`md:hidden bg-white border-t shadow-inner overflow-hidden transition-all duration-300 ${open ? "max-h-[1000px] py-6" : "max-h-0 py-0"}`}>
//           <div className="px-4 flex flex-col gap-3 text-lg font-medium">
//             <MobileLink href="/" onClick={() => setOpen(false)}>Home</MobileLink>
//             <MobileLink href="/blog" onClick={() => setOpen(false)}>Blog</MobileLink>
//             <MobileLink href="/products" onClick={() => setOpen(false)}>Products</MobileLink>

//             <div className="flex flex-col gap-2">
//               <button onClick={() => { setViewerOpen(true); setOpen(false); }} className="px-4 py-3 rounded-md text-[#08348b] hover:bg-[#08348b]/5 font-semibold">
//                 View Brochure
//               </button>
//               <a href={pdfPath} download className="px-4 py-3 text-center rounded-md bg-gradient-to-r from-[#08348b] to-[#5d169e] text-white font-semibold">
//                 Download Brochure
//               </a>
//             </div>

//             <MobileLink href="/about" onClick={() => setOpen(false)}>About</MobileLink>

//             <details className="group bg-transparent rounded-md">
//               <summary className="px-4 py-3 cursor-pointer list-none flex items-center justify-between">
//                 Team <span className="group-open:rotate-180">▾</span>
//               </summary>
//               <div className="pl-4 pr-4 pb-2 flex flex-col gap-1">
//                 <MobileLink href="/team" onClick={() => setOpen(false)}>Our Team</MobileLink>
//                 <MobileLink href="/gallery" onClick={() => setOpen(false)}>Gallery</MobileLink>
//               </div>
//             </details>

//             <MobileLink href="/contact" onClick={() => setOpen(false)}>Contact</MobileLink>

//             <a href="#" className="mt-3 px-5 py-3 rounded-lg bg-gradient-to-r from-[#fff7cc] to-[#ffd54f] text-[#082f63] font-bold text-center">
//               Shop Now
//             </a>

//             {/* MOBILE SOCIAL ICONS — show only inside mobile menu at bottom */}
//             <div className="flex items-center gap-3 pt-4 pb-2 border-t mt-4">
//               <IconLink href="https://www.instagram.com/veerbharatofficial" ariaLabel="Instagram" svg={<SvgInstagram />} />
//               <IconLink href="https://www.facebook.com/veerbharatofficial" ariaLabel="Facebook" svg={<SvgFacebook />} />
//               <IconLink href="https://www.linkedin.com/company/veer-bharat" ariaLabel="LinkedIn" svg={<SvgLinkedIn />} />
//               <IconLink href="https://www.youtube.com/@Veerbharatofficial1" ariaLabel="YouTube" svg={<SvgYouTube />} />
//               <IconLink href="https://twitter.com/veerbharat" ariaLabel="Twitter" svg={<SvgTwitter />} />
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Brochure modal */}
//       {viewerOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//           <div className="absolute inset-0 bg-black/50" onClick={() => setViewerOpen(false)} />
//           <div className="relative w-full max-w-6xl h-[80vh] bg-white rounded shadow-lg overflow-hidden">
//             <div className="flex items-center justify-between px-4 py-3 border-b">
//               <h3 className="text-lg font-semibold text-[#082f63]">Brochure Preview</h3>
//               <div className="flex items-center gap-2">
//                 <a href={pdfPath} download className="px-3 py-1 text-sm rounded border hover:bg-gray-50">Download</a>
//                 <button onClick={() => setViewerOpen(false)} className="px-3 py-1 text-sm rounded border hover:bg-gray-50">Close</button>
//               </div>
//             </div>
//             <iframe src={`${pdfPath}#view=FitH`} className="w-full h-full" />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// /* ---------- helpers ---------- */
// function NavLink({ href, children }) {
//   return (
//     <LogoLink href={href} className="px-2 py-1 text-gray-700 hover:text-[#08348b] transition">
//       {children}
//     </LogoLink>
//   );
// }
// function MobileLink({ href, children, onClick }) {
//   return (
//     <LogoLink href={href} className="px-4 py-3 rounded-md text-[#08348b] hover:bg-[#08348b]/5 font-semibold" onClick={onClick}>
//       {children}
//     </LogoLink>
//   );
// }
// function ChevronIcon({ open }) {
//   return (
//     <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className={`transition-transform ${open ? "rotate-180" : ""}`}>
//       <path d="M6 9l6 6 6-6" stroke="#08348b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );
// }
// function IconLink({ href, ariaLabel, svg }) {
//   return (
//     <a href={href} target="_blank" rel="noreferrer noopener" aria-label={ariaLabel} className="w-9 h-9 flex items-center justify-center">
//       {svg}
//     </a>
//   );
// }

// /* --- SVGs --- */
// function SvgInstagram() {
//   return (
//     <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
//       <defs>
//         <linearGradient id="ig" x1="0" x2="1">
//           <stop offset="0" stopColor="#f58529" />
//           <stop offset="0.5" stopColor="#dd2a7b" />
//           <stop offset="1" stopColor="#515bd4" />
//         </linearGradient>
//       </defs>
//       <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#ig)" />
//       <circle cx="12" cy="12" r="3.2" fill="#fff" />
//       <circle cx="17" cy="7" r="0.9" fill="#fff" />
//     </svg>
//   );
// }
// function SvgFacebook() {
//   return (
//     <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
//       <rect x="2" y="2" width="20" height="20" rx="3" fill="#1877F2" />
//       <path d="M15 8.5h1.8V6.2H15c-.9 0-1.3.4-1.3 1.2V9H12v2.1h1.7v6.6h2.1v-6.6H17l.3-2.1h-1.6V7.8c0-.5.2-1.3 1.1-1.3z" fill="#fff" />
//     </svg>
//   );
// }
// function SvgLinkedIn() {
//   return (
//     <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
//       <rect x="2" y="2" width="20" height="20" rx="3" fill="#0A66C2" />
//       <path d="M8.1 17H5.5V9.5h2.6V17zm-1.3-8.6c-.8 0-1.3-.6-1.3-1.3 0-.8.6-1.3 1.3-1.3.8 0 1.3.6 1.3 1.3 0 .7-.5 1.3-1.3 1.3zM19 17h-2.6v-3.7c0-.9-.3-1.5-1.1-1.5-.6 0-.9.4-1.1.8-.1.2-.1.5-.1.7V17h-2.6s.1-6.7 0-7.5h2.6v1.1c.3-.5.8-1.2 2-1.2 1.5 0 2.7 1 2.7 3.3V17z" fill="#fff" />
//     </svg>
//   );
// }
// function SvgYouTube() {
//   return (
//     <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
//       <rect x="2" y="6" width="20" height="12" rx="3" fill="#FF0000" />
//       <polygon points="10,9 16,12 10,15" fill="#fff" />
//     </svg>
//   );
// }
// function SvgTwitter() {
//   return (
//     <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
//       <rect x="2" y="2" width="20" height="20" rx="4" fill="#1DA1F2" />
//       <path d="M7.9 18c7.5 0 11.6-6.3 11.6-11.7v-.5A8.3 8.3 0 0 0 20 5.4a8.1 8.1 0 0 1-2.3.6 4.1 4.1 0 0 0 1.8-2.3 8.2 8.2 0 0 1-2.6 1A4.1 4.1 0 0 0 9.6 8.9a11.6 11.6 0 0 1-8.4-4.2 4.1 4.1 0 0 0 1.2 5.5 4 4 0 0 1-1.9-.5v.1c0 1.9 1.3 3.6 3.1 4a4.2 4.2 0 0 1-1.9.1c.5 1.6 2 2.7 3.8 2.8A8.3 8.3 0 0 1 5 17.6 11.7 11.7 0 0 0 12 19" fill="#fff" />
//     </svg>
//   );
// }










// "use client";

// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import LogoLink from "@/components/LogoLink";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [teamOpen, setTeamOpen] = useState(false);
//   const [brochureOpen, setBrochureOpen] = useState(false);
//   const [viewerOpen, setViewerOpen] = useState(false);
//   const [productsOpen, setProductsOpen] = useState(false);

//   const teamRef = useRef(null);
//   const teamButtonRef = useRef(null);
//   const brochureRef = useRef(null);
//   const brochureButtonRef = useRef(null);
//   const productsRef = useRef(null);
//   const productsButtonRef = useRef(null);

//   const pdfPath = "/docs/pdf/brochure.pdf";

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const onDoc = (e) => {
//       if (teamRef.current && !teamRef.current.contains(e.target) &&
//           teamButtonRef.current && !teamButtonRef.current.contains(e.target)) setTeamOpen(false);
//       if (brochureRef.current && !brochureRef.current.contains(e.target) &&
//           brochureButtonRef.current && !brochureButtonRef.current.contains(e.target)) setBrochureOpen(false);
//       if (productsRef.current && !productsRef.current.contains(e.target) &&
//           productsButtonRef.current && !productsButtonRef.current.contains(e.target)) setProductsOpen(false);
//     };
//     document.addEventListener("click", onDoc);
//     return () => document.removeEventListener("click", onDoc);
//   }, []);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "Escape") {
//         setTeamOpen(false);
//         setBrochureOpen(false);
//         setProductsOpen(false);
//         setOpen(false);
//         setViewerOpen(false);
//       }
//     };
//     document.addEventListener("keydown", onKey);
//     return () => document.removeEventListener("keydown", onKey);
//   }, []);

//   return (
//     <>
//       <header
//         className={`w-full transition-all duration-300 border-b border-[rgba(8,52,139,0.04)] ${
//           scrolled ? "fixed top-0 left-0 z-50 py-2 shadow-sm" : "relative py-4 shadow-sm"
//         }`}
//         style={{ backgroundColor: "#DFC6F6" }}
//       >
//         <div className="w-full flex items-center px-2 md:px-4">
//           <div className="flex items-center flex-shrink-0">
//             <LogoLink href="/" aria-label="Veer Bharat Home" className="block">
//               <div style={{ width: 150, height: 120 }} className="overflow-hidden">
//                 <Image
//                   src="/logo.png"
//                   alt="Veer Bharat logo"
//                   width={200}
//                   height={124}
//                   style={{ objectFit: "contain" }}
//                   priority
//                 />
//               </div>
//             </LogoLink>
//             <div className="hidden sm:flex flex-col leading-tight ml-2">
//               <span className="font-extrabold text-2xl md:text-3xl tracking-tight text-[#08348b]">VEER BHARAT</span>
//               <span className="italic text-sm md:text-base text-[#aa2266]">वाह! मज़ा आ गया</span>
//             </div>
//           </div>

//           <nav className="hidden md:flex flex-1 justify-center items-center">
//             <ul className="flex items-center gap-8 text-lg font-semibold">
//               <li><NavLink href="/">Home</NavLink></li>
//               <li><NavLink href="/blog">Blog</NavLink></li>

//               {/* Products dropdown */}
//               <li className="relative" ref={productsRef}>
//                 <button
//                   ref={productsButtonRef}
//                   onClick={() => setProductsOpen((s) => !s)}
//                   onMouseEnter={() => setProductsOpen(true)}
//                   onFocus={() => setProductsOpen(true)}
//                   className="flex items-center gap-2 px-2 py-1 rounded hover:bg-white/30 focus:outline-none"
//                 >
//                   Products <ChevronIcon open={productsOpen} />
//                 </button>
//                 <div
//                   className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 min-w-[220px] rounded-md bg-white text-[#082f63] shadow-lg ring-1 ring-black/10 transition-all z-50 ${
//                     productsOpen ? "opacity-100 pointer-events-auto translate-y-0 scale-100" : "opacity-0 pointer-events-none -translate-y-1 scale-95"
//                   }`}
//                   onMouseEnter={() => setProductsOpen(true)}
//                   onMouseLeave={() => setProductsOpen(false)}
//                 >
//                   <ul className="py-2">
//                     <li>
//                       <LogoLink href="/products" className="block px-4 py-2 hover:bg-gray-100 text-sm" onClick={() => setProductsOpen(false)}>All Products</LogoLink>
//                     </li>
//                     <li>
//                       <LogoLink href="/soyabean-oil" className="block px-4 py-2 hover:bg-gray-100 text-sm" onClick={() => setProductsOpen(false)}>Soyabean Oil</LogoLink>
//                     </li>
//                     <li>
//                       <LogoLink href="/mustard-oil" className="block px-4 py-2 hover:bg-gray-100 text-sm" onClick={() => setProductsOpen(false)}>Mustard Oil</LogoLink>
//                     </li>
//                     <li>
//                       <LogoLink href="/palm-oil" className="block px-4 py-2 hover:bg-gray-100 text-sm" onClick={() => setProductsOpen(false)}>Palm Oil</LogoLink>
//                     </li>
//                     <li>
//                       <LogoLink href="/brand-rice" className="block px-4 py-2 hover:bg-gray-100 text-sm" onClick={() => setProductsOpen(false)}>Brand Rice</LogoLink>
//                     </li>
//                   </ul>
//                 </div>
//               </li>

//               <li className="relative" ref={brochureRef}>
//                 <button
//                   ref={brochureButtonRef}
//                   onClick={() => setBrochureOpen((s) => !s)}
//                   onMouseEnter={() => setBrochureOpen(true)}
//                   onFocus={() => setBrochureOpen(true)}
//                   className="flex items-center gap-2 px-2 py-1 rounded hover:bg-white/30 focus:outline-none"
//                 >
//                   Brochure <ChevronIcon open={brochureOpen} />
//                 </button>
//                 <div
//                   className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 min-w-[220px] rounded-md bg-white text-[#082f63] shadow-lg ring-1 ring-black/10 transition-all z-50 ${
//                     brochureOpen ? "opacity-100 pointer-events-auto translate-y-0 scale-100" : "opacity-0 pointer-events-none -translate-y-1 scale-95"
//                   }`}
//                   onMouseEnter={() => setBrochureOpen(true)}
//                   onMouseLeave={() => setBrochureOpen(false)}
//                 >
//                   <ul className="py-2">
//                     <li>
//                       <button
//                         onClick={() => { setViewerOpen(true); setBrochureOpen(false); setOpen(false); }}
//                         className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
//                       >
//                         View Brochure
//                       </button>
//                     </li>
//                     <li>
//                       <a href={pdfPath} download className="block px-4 py-2 hover:bg-gray-100 text-sm">Download Brochure</a>
//                     </li>
//                   </ul>
//                 </div>
//               </li>

//               <li className="relative" ref={teamRef}>
//                 <button
//                   ref={teamButtonRef}
//                   onClick={() => setTeamOpen((s) => !s)}
//                   onMouseEnter={() => setTeamOpen(true)}
//                   onFocus={() => setTeamOpen(true)}
//                   className="flex items-center gap-2 px-2 py-1 rounded hover:bg-white/30 focus:outline-none"
//                 >
//                   Team <ChevronIcon open={teamOpen} />
//                 </button>
//                 <div
//                   className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 min-w-[180px] rounded-md bg-white text-[#082f63] shadow-lg ring-1 ring-black/10 transition-all z-50 ${
//                     teamOpen ? "opacity-100 pointer-events-auto translate-y-0 scale-100" : "opacity-0 pointer-events-none -translate-y-1 scale-95"
//                   }`}
//                   onMouseEnter={() => setTeamOpen(true)}
//                   onMouseLeave={() => setTeamOpen(false)}
//                 >
//                   <ul className="py-2">
//                     <li>
//                       <LogoLink href="/team" className="block px-4 py-2 hover:bg-gray-100 text-sm" onClick={() => setTeamOpen(false)}>Our Team</LogoLink>
//                     </li>
//                     <li>
//                       <LogoLink href="/gallery" className="block px-4 py-2 hover:bg-gray-100 text-sm" onClick={() => setTeamOpen(false)}>Gallery</LogoLink>
//                     </li>
//                   </ul>
//                 </div>
//               </li>

//               <li><NavLink href="/about">About</NavLink></li>
//               <li><NavLink href="/contact">Contact</NavLink></li>
//             </ul>
//           </nav>

//           {/* Right section (shop & socials) remain same as your previous code */}
//         </div>

//         {/* Mobile menu */}
//         <div className={`md:hidden bg-white border-t shadow-inner overflow-hidden transition-all duration-300 ${open ? "max-h-[1000px] py-6" : "max-h-0 py-0"}`}>
//           <div className="px-4 flex flex-col gap-3 text-lg font-medium">
//             <MobileLink href="/" onClick={() => setOpen(false)}>Home</MobileLink>
//             <MobileLink href="/blog" onClick={() => setOpen(false)}>Blog</MobileLink>

//             <details className="group bg-transparent rounded-md">
//               <summary className="px-4 py-3 cursor-pointer list-none flex items-center justify-between">
//                 Products <span className="group-open:rotate-180">▾</span>
//               </summary>
//               <div className="pl-4 pr-4 pb-2 flex flex-col gap-1">
//                 <MobileLink href="/products" onClick={() => setOpen(false)}>All Products</MobileLink>
//                 <MobileLink href="/soyabean-oil" onClick={() => setOpen(false)}>Soyabean Oil</MobileLink>
//                 <MobileLink href="/mustard-oil" onClick={() => setOpen(false)}>Mustard Oil</MobileLink>
//                 <MobileLink href="/palm-oil" onClick={() => setOpen(false)}>Palm Oil</MobileLink>
//                 <MobileLink href="/brand-rice" onClick={() => setOpen(false)}>Brand Rice</MobileLink>
//               </div>
//             </details>

//             {/* Other mobile links remain the same */}
//           </div>
//         </div>
//       </header>

//       {/* Brochure modal */}
//       {viewerOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//           <div className="absolute inset-0 bg-black/50" onClick={() => setViewerOpen(false)} />
//           <div className="relative w-full max-w-6xl h-[80vh] bg-white rounded shadow-lg overflow-hidden">
//             <div className="flex items-center justify-between px-4 py-3 border-b">
//               <h3 className="text-lg font-semibold text-[#082f63]">Brochure Preview</h3>
//               <div className="flex items-center gap-2">
//                 <a href={pdfPath} download className="px-3 py-1 text-sm rounded border hover:bg-gray-50">Download</a>
//                 <button onClick={() => setViewerOpen(false)} className="px-3 py-1 text-sm rounded border hover:bg-gray-50">Close</button>
//               </div>
//             </div>
//             <iframe src={`${pdfPath}#view=FitH`} className="w-full h-full" />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// /* ---------- helpers ---------- */
// function NavLink({ href, children }) {
//   return (
//     <LogoLink href={href} className="px-2 py-1 text-gray-700 hover:text-[#08348b] transition">
//       {children}
//     </LogoLink>
//   );
// }
// function MobileLink({ href, children, onClick }) {
//   return (
//     <LogoLink href={href} className="px-4 py-3 rounded-md text-[#08348b] hover:bg-[#08348b]/5 font-semibold" onClick={onClick}>
//       {children}
//     </LogoLink>
//   );
// }
// function ChevronIcon({ open }) {
//   return (
//     <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className={`transition-transform ${open ? "rotate-180" : ""}`}>
//       <path d="M6 9l6 6 6-6" stroke="#08348b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );
// }




"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import LogoLink from "@/components/LogoLink";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [teamOpen, setTeamOpen] = useState(false);
  const [brochureOpen, setBrochureOpen] = useState(false);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const teamRef = useRef(null);
  const teamButtonRef = useRef(null);
  const brochureRef = useRef(null);
  const brochureButtonRef = useRef(null);
  const productsRef = useRef(null);
  const productsButtonRef = useRef(null);

  const pdfPath = "/docs/pdf/brochure.pdf";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onDoc = (e) => {
      if (teamRef.current && !teamRef.current.contains(e.target) &&
          teamButtonRef.current && !teamButtonRef.current.contains(e.target)) setTeamOpen(false);
      if (brochureRef.current && !brochureRef.current.contains(e.target) &&
          brochureButtonRef.current && !brochureButtonRef.current.contains(e.target)) setBrochureOpen(false);
      if (productsRef.current && !productsRef.current.contains(e.target) &&
          productsButtonRef.current && !productsButtonRef.current.contains(e.target)) setProductsOpen(false);
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setTeamOpen(false);
        setBrochureOpen(false);
        setProductsOpen(false);
        setOpen(false);
        setViewerOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <>
      <header
        className={`w-full transition-all duration-300 border-b border-[rgba(8,52,139,0.04)] ${
          scrolled ? "fixed top-0 left-0 z-50 py-2 shadow-sm" : "relative py-4 shadow-sm"
        }`}
        style={{ backgroundColor: "#DFC6F6" }}
      >
        <div className="w-full flex items-center justify-between px-2 md:px-4">
          {/* Logo and Brand Name */}
          <div className="flex items-center flex-shrink-0">
            <LogoLink href="/" aria-label="Veer Bharat Home" className="block">
              <div style={{ width: 120, height: 100 }} className="overflow-hidden md:w-[150px] md:h-[120px]">
                <Image
                  src="/logo.png"
                  alt="Veer Bharat logo"
                  width={200}
                  height={124}
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </LogoLink>
            {/* Brand name - visible on all screens */}
            <div className="flex flex-col leading-tight ml-2">
              <span className="font-extrabold text-xl sm:text-2xl md:text-3xl tracking-tight text-[#08348b]">VEER BHARAT</span>
              <span className="italic text-sm sm:text-sm md:text-base text-[#aa2266]">वाह! मज़ा आ गया</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center items-center">
            <ul className="flex items-center gap-8 text-xl font-bold">
              <li><NavLink href="/">Home</NavLink></li>
              <li><NavLink href="/blog">Blog</NavLink></li>

              {/* Products dropdown */}
              <li className="relative" ref={productsRef}>
                <button
                  ref={productsButtonRef}
                  onClick={() => setProductsOpen((s) => !s)}
                  onMouseEnter={() => setProductsOpen(true)}
                  onFocus={() => setProductsOpen(true)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/40 focus:outline-none transition-all"
                >
                  Products <ChevronIcon open={productsOpen} />
                </button>
                <div
                  className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 min-w-[240px] rounded-xl bg-white text-[#082f63] shadow-2xl ring-1 ring-black/10 transition-all z-50 ${
                    productsOpen ? "opacity-100 pointer-events-auto translate-y-0 scale-100" : "opacity-0 pointer-events-none -translate-y-1 scale-95"
                  }`}
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <ul className="py-2">
                    <li>
                      <LogoLink href="/products" className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold" onClick={() => setProductsOpen(false)}>All Products</LogoLink>
                    </li>
                    <li>
                      <LogoLink href="/soyabean-oil" className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold" onClick={() => setProductsOpen(false)}>Soyabean Oil</LogoLink>
                    </li>
                    <li>
                      <LogoLink href="/mustard-oil" className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold" onClick={() => setProductsOpen(false)}>Mustard Oil</LogoLink>
                    </li>
                    <li>
                      <LogoLink href="/palm-oil" className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold" onClick={() => setProductsOpen(false)}>Palm Oil</LogoLink>
                    </li>
                    <li>
                      <LogoLink href="/brand-rice" className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold" onClick={() => setProductsOpen(false)}>Brand Rice</LogoLink>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="relative" ref={brochureRef}>
                <button
                  ref={brochureButtonRef}
                  onClick={() => setBrochureOpen((s) => !s)}
                  onMouseEnter={() => setBrochureOpen(true)}
                  onFocus={() => setBrochureOpen(true)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/40 focus:outline-none transition-all"
                >
                  Brochure <ChevronIcon open={brochureOpen} />
                </button>
                <div
                  className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 min-w-[240px] rounded-xl bg-white text-[#082f63] shadow-2xl ring-1 ring-black/10 transition-all z-50 ${
                    brochureOpen ? "opacity-100 pointer-events-auto translate-y-0 scale-100" : "opacity-0 pointer-events-none -translate-y-1 scale-95"
                  }`}
                  onMouseEnter={() => setBrochureOpen(true)}
                  onMouseLeave={() => setBrochureOpen(false)}
                >
                  <ul className="py-2">
                    <li>
                      <button
                        onClick={() => { setViewerOpen(true); setBrochureOpen(false); setOpen(false); }}
                        className="w-full text-left px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold"
                      >
                        View Brochure
                      </button>
                    </li>
                    <li>
                      <a href={pdfPath} download className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold">Download Brochure</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="relative" ref={teamRef}>
                <button
                  ref={teamButtonRef}
                  onClick={() => setTeamOpen((s) => !s)}
                  onMouseEnter={() => setTeamOpen(true)}
                  onFocus={() => setTeamOpen(true)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/40 focus:outline-none transition-all"
                >
                  Team <ChevronIcon open={teamOpen} />
                </button>
                <div
                  className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 min-w-[200px] rounded-xl bg-white text-[#082f63] shadow-2xl ring-1 ring-black/10 transition-all z-50 ${
                    teamOpen ? "opacity-100 pointer-events-auto translate-y-0 scale-100" : "opacity-0 pointer-events-none -translate-y-1 scale-95"
                  }`}
                  onMouseEnter={() => setTeamOpen(true)}
                  onMouseLeave={() => setTeamOpen(false)}
                >
                  <ul className="py-2">
                    <li>
                      <LogoLink href="/team" className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold" onClick={() => setTeamOpen(false)}>Our Team</LogoLink>
                    </li>
                    <li>
                      <LogoLink href="/gallery" className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold" onClick={() => setTeamOpen(false)}>Gallery</LogoLink>
                    </li>
                    <li>
                      <LogoLink href="/Managing-Director" className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold" onClick={() => setTeamOpen(false)}>Managing Director</LogoLink>
                    </li>
                  </ul>
                </div>
              </li>

              <li><NavLink href="/about">About</NavLink></li>
              <li><NavLink href="/contact">Contact</NavLink></li>
            </ul>
          </nav>

          {/* Mobile Hamburger Button - Ultra Cool Design */}
          <button
            className="md:hidden relative z-50 w-12 h-12 flex flex-col items-center justify-center gap-1.5 focus:outline-none bg-white/30 rounded-xl backdrop-blur-sm hover:bg-white/50 transition-all shadow-lg"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-7 h-0.5 bg-gradient-to-r from-[#08348b] to-[#aa2266] rounded-full transition-all duration-300 ease-in-out ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-7 h-0.5 bg-gradient-to-r from-[#08348b] to-[#aa2266] rounded-full transition-all duration-300 ease-in-out ${
                open ? "opacity-0 scale-0" : "opacity-100 scale-100"
              }`}
            />
            <span
              className={`block w-7 h-0.5 bg-gradient-to-r from-[#08348b] to-[#aa2266] rounded-full transition-all duration-300 ease-in-out ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Slide Menu - Ultra Modern & Cool */}
        <div
          className={`md:hidden fixed inset-0 z-40 transition-opacity duration-500 ${
            open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          style={{ top: scrolled ? "70px" : "120px" }}
        >
          {/* Backdrop with blur */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-black/60 via-purple-900/40 to-black/60 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />

          {/* Slide Menu with stunning design */}
          <div
            className={`absolute right-0 top-0 bottom-0 w-[320px] max-w-[85vw] bg-gradient-to-br from-[#DFC6F6] via-white to-[#f0e4ff] shadow-2xl transform transition-all duration-500 ease-out overflow-y-auto ${
              open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
            style={{
              backgroundImage: 'linear-gradient(135deg, #DFC6F6 0%, #ffffff 50%, #f0e4ff 100%)',
              boxShadow: '-10px 0 50px rgba(8, 52, 139, 0.3)'
            }}
          >
            {/* Decorative header bar */}
            <div className="h-2 bg-gradient-to-r from-[#08348b] via-[#aa2266] to-[#08348b]" />
            
            <div className="px-6 py-8 flex flex-col gap-3">
              {/* Menu title with animation */}
              <div className={`text-center mb-4 transition-all duration-700 ${open ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
                <h3 className="text-2xl font-extrabold text-[#08348b] tracking-tight">Menu</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-[#08348b] to-[#aa2266] rounded-full mx-auto mt-2" />
              </div>

              <MobileLink 
                href="/" 
                onClick={() => setOpen(false)}
                icon="🏠"
                delay="100"
                isOpen={open}
              >
                Home
              </MobileLink>
              
              <MobileLink 
                href="/blog" 
                onClick={() => setOpen(false)}
                icon="📝"
                delay="150"
                isOpen={open}
              >
                Blog
              </MobileLink>

              <details className={`group transition-all duration-700 delay-200 ${open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                <summary className="px-5 py-4 cursor-pointer list-none flex items-center justify-between bg-gradient-to-r from-white/70 to-white/50 rounded-xl hover:from-white hover:to-white/80 transition-all shadow-md hover:shadow-lg backdrop-blur-sm border border-purple-100">
                  <span className="flex items-center gap-3 text-[#08348b] font-bold text-lg">
                    <span className="text-2xl">🛍️</span>
                    Products
                  </span>
                  <span className="text-[#08348b] text-xl font-bold group-open:rotate-180 transition-transform duration-300">▾</span>
                </summary>
                <div className="pl-8 pr-4 pb-2 pt-3 flex flex-col gap-2 animate-fadeIn">
                  <SubMenuLink href="/products" onClick={() => setOpen(false)}>All Products</SubMenuLink>
                  <SubMenuLink href="/soyabean-oil" onClick={() => setOpen(false)}>Soyabean Oil</SubMenuLink>
                  <SubMenuLink href="/mustard-oil" onClick={() => setOpen(false)}>Mustard Oil</SubMenuLink>
                  <SubMenuLink href="/palm-oil" onClick={() => setOpen(false)}>Palm Oil</SubMenuLink>
                  <SubMenuLink href="/brand-rice" onClick={() => setOpen(false)}>Brand Rice</SubMenuLink>
                </div>
              </details>

              <details className={`group transition-all duration-700 delay-250 ${open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                <summary className="px-5 py-4 cursor-pointer list-none flex items-center justify-between bg-gradient-to-r from-white/70 to-white/50 rounded-xl hover:from-white hover:to-white/80 transition-all shadow-md hover:shadow-lg backdrop-blur-sm border border-purple-100">
                  <span className="flex items-center gap-3 text-[#08348b] font-bold text-lg">
                    <span className="text-2xl">📄</span>
                    Brochure
                  </span>
                  <span className="text-[#08348b] text-xl font-bold group-open:rotate-180 transition-transform duration-300">▾</span>
                </summary>
                <div className="pl-8 pr-4 pb-2 pt-3 flex flex-col gap-2">
                  <button
                    onClick={() => { setViewerOpen(true); setOpen(false); }}
                    className="text-left px-4 py-3 rounded-lg text-[#08348b] hover:bg-white/80 bg-white/40 font-semibold transition-all text-base border border-purple-50"
                  >
                    View Brochure
                  </button>
                  <a
                    href={pdfPath}
                    download
                    className="px-4 py-3 rounded-lg text-[#08348b] hover:bg-white/80 bg-white/40 font-semibold transition-all text-base border border-purple-50"
                    onClick={() => setOpen(false)}
                  >
                    Download Brochure
                  </a>
                </div>
              </details>

              <details className={`group transition-all duration-700 delay-300 ${open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                <summary className="px-5 py-4 cursor-pointer list-none flex items-center justify-between bg-gradient-to-r from-white/70 to-white/50 rounded-xl hover:from-white hover:to-white/80 transition-all shadow-md hover:shadow-lg backdrop-blur-sm border border-purple-100">
                  <span className="flex items-center gap-3 text-[#08348b] font-bold text-lg">
                    <span className="text-2xl">👥</span>
                    Team
                  </span>
                  <span className="text-[#08348b] text-xl font-bold group-open:rotate-180 transition-transform duration-300">▾</span>
                </summary>
                <div className="pl-8 pr-4 pb-2 pt-3 flex flex-col gap-2">
                  <SubMenuLink href="/team" onClick={() => setOpen(false)}>Our Team</SubMenuLink>
                  <SubMenuLink href="/gallery" onClick={() => setOpen(false)}>Gallery</SubMenuLink>
                  <SubMenuLink href="/Managing-Director" onClick={() => setOpen(false)}>Managing Director</SubMenuLink>
                </div>
              </details>

              <MobileLink 
                href="/about" 
                onClick={() => setOpen(false)}
                icon="ℹ️"
                delay="350"
                isOpen={open}
              >
                About
              </MobileLink>
              
              <MobileLink 
                href="/contact" 
                onClick={() => setOpen(false)}
                icon="📞"
                delay="400"
                isOpen={open}
              >
                Contact
              </MobileLink>
            </div>

            {/* Decorative footer element */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#08348b]/10 to-transparent pointer-events-none" />
          </div>
        </div>
      </header>

      {/* Brochure modal */}
      {viewerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setViewerOpen(false)} />
          <div className="relative w-full max-w-6xl h-[80vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-[#DFC6F6] to-white">
              <h3 className="text-xl font-bold text-[#082f63]">Brochure Preview</h3>
              <div className="flex items-center gap-3">
                <a href={pdfPath} download className="px-4 py-2 text-base font-semibold rounded-lg border-2 border-[#08348b] text-[#08348b] hover:bg-[#08348b] hover:text-white transition-all">Download</a>
                <button onClick={() => setViewerOpen(false)} className="px-4 py-2 text-base font-semibold rounded-lg border-2 border-gray-300 hover:bg-gray-100 transition-all">Close</button>
              </div>
            </div>
            <iframe src={`${pdfPath}#view=FitH`} className="w-full h-full" />
          </div>
        </div>
      )}
    </>
  );
}

/* ---------- helpers ---------- */
function NavLink({ href, children }) {
  return (
    <LogoLink href={href} className="px-3 py-2 text-gray-700 hover:text-[#08348b] transition-all hover:scale-105">
      {children}
    </LogoLink>
  );
}

function MobileLink({ href, children, onClick, icon, delay, isOpen }) {
  return (
    <LogoLink
      href={href}
      className={`px-5 py-4 rounded-xl text-[#08348b] font-bold text-lg bg-gradient-to-r from-white/70 to-white/50 hover:from-white hover:to-white/80 transition-all transform hover:scale-105 hover:shadow-lg shadow-md backdrop-blur-sm border border-purple-100 flex items-center gap-3 duration-700 delay-${delay} ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
      onClick={onClick}
    >
      <span className="text-2xl">{icon}</span>
      {children}
    </LogoLink>
  );
}

function SubMenuLink({ href, children, onClick }) {
  return (
    <LogoLink
      href={href}
      className="px-4 py-3 rounded-lg text-[#08348b] hover:bg-white/80 bg-white/40 font-semibold transition-all transform hover:translate-x-1 text-base border border-purple-50"
      onClick={onClick}
    >
      {children}
    </LogoLink>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
