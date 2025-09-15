// "use client";

// import { useState } from "react";
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

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false); // mobile menu
  const [scrolled, setScrolled] = useState(false);
  const [teamOpen, setTeamOpen] = useState(false); // desktop dropdown state (for keyboard & touch)
  const teamRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close team dropdown on outside click (desktop)
  useEffect(() => {
    const onDoc = (e) => {
      if (teamRef.current && !teamRef.current.contains(e.target)) {
        setTeamOpen(false);
      }
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  return (
    <>
      <header
        // header is NOT fixed/sticky now; it sits in normal document flow
        className={`w-full transition-all duration-300 bg-white/90 border-b border-[rgba(8,52,139,0.04)] ${
          scrolled ? "py-3 shadow-sm" : "py-5 shadow-sm"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          {/* logo + brand */}
          <Link
            href="/"
            className="flex items-center gap-4"
            onClick={() => setOpen(false)}
            aria-label="Veer Bharat Home"
          >
            <div
              className={`relative overflow-hidden rounded-lg ring-2 ring-[#08348b]/8 transition-all duration-300 shadow-lg flex-shrink-0 ${
                scrolled ? "w-14 h-14" : "w-20 h-20"
              }`}
              aria-hidden={false}
            >
              <Image
                src="/logo.png"
                alt="Veer Bharat logo"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            <div className="flex flex-col leading-tight">
              <span
                className={`font-extrabold tracking-tight transition-all duration-300 ${
                  scrolled ? "text-2xl" : "text-3xl"
                } text-[#08348b]`}
              >
                VEER BHARAT
              </span>
              <span
                className={`italic text-[#aa2266] transition-all duration-300 ${
                  scrolled ? "text-sm" : "text-base"
                }`}
              >
                वह! मज़ा आ गया
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-lg font-semibold">
            <div className="flex items-center gap-6">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/products">Products</NavLink>

              {/* Team with dropdown */}
              <div
                ref={teamRef}
                onMouseEnter={() => setTeamOpen(true)}
                onMouseLeave={() => setTeamOpen(false)}
                className="relative"
              >
                <button
                  onClick={() => setTeamOpen((s) => !s)}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") setTeamOpen(false);
                    if (e.key === "ArrowDown") setTeamOpen(true);
                  }}
                  aria-expanded={teamOpen}
                  aria-haspopup="true"
                  className="flex items-center gap-2 px-3 py-2 rounded hover:bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#08348b]"
                >
                  Team
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`transition-transform ${teamOpen ? "rotate-180" : "rotate-0"}`}
                    aria-hidden
                  >
                    <path d="M6 9l6 6 6-6" stroke="#08348b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <div
                  role="menu"
                  aria-label="Team menu"
                  className={`absolute top-full mt-2 right-0 w-44 rounded-md bg-white/95 text-[#082f63] shadow-lg ring-1 ring-black/10 backdrop-blur transition-all duration-200 ${
                    teamOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-y-1"
                  }`}
                >
                  <ul className="flex flex-col py-2">
                    <li>
                      <Link href="/team" onClick={() => setTeamOpen(false)} className="block px-4 py-2 hover:bg-[#08348b]/6">
                        Our Team
                      </Link>
                    </li>
                    <li>
                      <Link href="/gallery" onClick={() => setTeamOpen(false)} className="block px-4 py-2 hover:bg-[#08348b]/6">
                        Gallery
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <NavLink href="/about">About</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>

            {/* CTA */}
            <a
              href="#"
              className="ml-4 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#08348b] via-[#aa2266] to-[#5d169e] text-white text-lg font-bold shadow-lg hover:scale-[1.05] transition"
            >
              Shop Now
            </a>

            {/* Social icons (right side) */}
            <div className="ml-4 flex items-center gap-3">
              <SocialIcon
                href="https://www.instagram.com/veerbharatofficial"
                label="Instagram"
                ariaLabel="Veer Bharat Instagram"
                svg={
                  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
                    <defs>
                      <linearGradient id="instaGrad" x1="0" x2="1">
                        <stop offset="0" stopColor="#f58529" />
                        <stop offset="0.5" stopColor="#dd2a7b" />
                        <stop offset="1" stopColor="#515bd4" />
                      </linearGradient>
                    </defs>
                    <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#instaGrad)" />
                    <circle cx="12" cy="12" r="3.2" fill="#fff" opacity="0.95" />
                    <circle cx="17" cy="7" r="0.9" fill="#fff" />
                  </svg>
                }
              />

              <SocialIcon
                href="https://www.facebook.com/share/1CKoYSoAVg/"
                label="Facebook"
                ariaLabel="Veer Bharat Facebook"
                svg={
                  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
                    <rect x="2" y="2" width="20" height="20" rx="3" fill="#1877F2" />
                    <path d="M15 8.5h1.8V6.2H15c-.9 0-1.3.4-1.3 1.2V9H12v2.1h1.7v6.6h2.1v-6.6H17l.3-2.1h-1.6V7.8c0-.5.2-1.3 1.1-1.3z" fill="#fff" />
                  </svg>
                }
              />

              <SocialIcon
                href="https://www.linkedin.com/company/veer-bharat" // <-- replace with your company LinkedIn URL
                label="LinkedIn"
                ariaLabel="Veer Bharat LinkedIn"
                svg={
                  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
                    <rect x="2" y="2" width="20" height="20" rx="3" fill="#0A66C2" />
                    <path
                      d="M8.1 17H5.5V9.5h2.6V17zm-1.3-8.6c-.8 0-1.3-.6-1.3-1.3 0-.8.6-1.3 1.3-1.3.8 0 1.3.6 1.3 1.3 0 .7-.5 1.3-1.3 1.3zM19 17h-2.6v-3.7c0-.9-.3-1.5-1.1-1.5-.6 0-.9.4-1.1.8-.1.2-.1.5-.1.7V17h-2.6s.1-6.7 0-7.5h2.6v1.1c.3-.5.8-1.2 2-1.2 1.5 0 2.7 1 2.7 3.3V17z"
                      fill="#fff"
                    />
                  </svg>
                }
              />

              <SocialIcon
                href="https://www.youtube.com/@Veer.officialbharat"
                label="YouTube"
                ariaLabel="Veer Bharat YouTube"
                svg={
                  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
                    <rect x="2" y="6" width="20" height="12" rx="3" fill="#FF0000" />
                    <polygon points="10,9 16,12 10,15" fill="#fff" />
                  </svg>
                }
              />
            </div>
          </nav>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative w-12 h-12 flex items-center justify-center rounded-lg hover:bg-[#08348b]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#08348b]"
            >
              <svg className="w-8 h-8 text-[#08348b]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden bg-white border-t border-[rgba(8,52,139,0.06)] shadow-inner overflow-hidden transition-all duration-300 ${
            open ? "max-h-[640px] py-6 opacity-100" : "max-h-0 py-0 opacity-0"
          }`}
        >
          <div className="container mx-auto px-6 flex flex-col gap-4 text-lg font-medium">
            <MobileLink href="/" onClick={() => setOpen(false)}>
              Home
            </MobileLink>
            <MobileLink href="/products" onClick={() => setOpen(false)}>
              Products
            </MobileLink>

            {/* Mobile: Team expands to show Gallery */}
            <details className="group bg-transparent rounded-md">
              <summary className="px-4 py-3 cursor-pointer list-none flex items-center justify-between">
                Team
                <span className="text-gray-500 group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <div className="pl-4 pr-4 pb-2 flex flex-col gap-1">
                <MobileLink href="/team" onClick={() => setOpen(false)}>
                  Our Team
                </MobileLink>
                <MobileLink href="/gallery" onClick={() => setOpen(false)}>
                  Gallery
                </MobileLink>
              </div>
            </details>

            <MobileLink href="/about" onClick={() => setOpen(false)}>
              About
            </MobileLink>
            <MobileLink href="/contact" onClick={() => setOpen(false)}>
              Contact
            </MobileLink>

            <a
              href="#"
              className="mt-3 w-full text-center inline-block px-5 py-3 rounded-lg bg-gradient-to-r from-[#08348b] via-[#aa2266] to-[#5d169e] text-white font-bold shadow-lg hover:scale-[1.03] transition"
              onClick={() => setOpen(false)}
            >
              Shop Now
            </a>

            {/* Social icons in mobile */}
            <div className="flex items-center gap-4 pt-2">
              <SocialIconSmall href="https://www.instagram.com/veerbharatofficial" label="Instagram" />
              <SocialIconSmall href="https://www.facebook.com/share/1CKoYSoAVg/" label="Facebook" />
              <SocialIconSmall href="https://www.linkedin.com/company/veer-bharat" label="LinkedIn" />
              <SocialIconSmall href="https://www.youtube.com/@Veer.officialbharat" label="YouTube" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

/* small helpers */
function NavLink({ href, children }) {
  return (
    <Link href={href} className="relative px-2 py-1 text-gray-700 hover:text-[#08348b] transition group">
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#08348b] via-[#aa2266] to-[#5d169e] group-hover:w-full transition-all" />
    </Link>
  );
}

function MobileLink({ href, children, onClick }) {
  return (
    <Link href={href} className="block px-4 py-3 rounded-md text-[#08348b] hover:bg-[#08348b]/5 font-semibold transition" onClick={onClick}>
      {children}
    </Link>
  );
}

/* Social small button used in desktop right side */
function SocialIcon({ href, label, svg, ariaLabel }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={ariaLabel || label}
      className="p-2 rounded-md hover:bg-white/20 transition flex items-center justify-center"
    >
      <span className="sr-only">{label}</span>
      {svg}
    </a>
  );
}

/* mobile simple circular icons */
function SocialIconSmall({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="w-10 h-10 rounded-full bg-[#08348b]/5 flex items-center justify-center hover:scale-105 transition"
    >
      <span className="sr-only">{label}</span>

      {label.toLowerCase().includes("insta") && (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
          <defs>
            <linearGradient id="g2" x1="0" x2="1">
              <stop offset="0" stopColor="#f58529" />
              <stop offset="0.5" stopColor="#dd2a7b" />
              <stop offset="1" stopColor="#515bd4" />
            </linearGradient>
          </defs>
          <rect x="3" y="3" width="18" height="18" rx="5" fill="url(#g2)" />
          <circle cx="12" cy="12" r="3.2" fill="#fff" opacity="0.95" />
        </svg>
      )}

      {label.toLowerCase().includes("facebook") && (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
          <rect x="2" y="2" width="20" height="20" rx="3" fill="#1877F2" />
          <path d="M15 8.5h1.8V6.2H15c-.9 0-1.3.4-1.3 1.2V9H12v2.1h1.7v6.6h2.1v-6.6H17l.3-2.1h-1.6V7.8c0-.5.2-1.3 1.1-1.3z" fill="#fff" />
        </svg>
      )}

      {label.toLowerCase().includes("linkedin") && (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
          <rect x="2" y="2" width="20" height="20" rx="3" fill="#0A66C2" />
          <path
            d="M8.1 17H5.5V9.5h2.6V17zm-1.3-8.6c-.8 0-1.3-.6-1.3-1.3 0-.8.6-1.3 1.3-1.3.8 0 1.3.6 1.3 1.3 0 .7-.5 1.3-1.3 1.3zM19 17h-2.6v-3.7c0-.9-.3-1.5-1.1-1.5-.6 0-.9.4-1.1.8-.1.2-.1.5-.1.7V17h-2.6s.1-6.7 0-7.5h2.6v1.1c.3-.5.8-1.2 2-1.2 1.5 0 2.7 1 2.7 3.3V17z"
            fill="#fff"
          />
        </svg>
      )}

      {label.toLowerCase().includes("youtube") && (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
          <rect x="2" y="6" width="20" height="12" rx="3" fill="#FF0000" />
          <polygon points="10,9 16,12 10,15" fill="#fff" />
        </svg>
      )}
    </a>
  );
}
