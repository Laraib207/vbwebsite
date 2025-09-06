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

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for dynamic effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "h-20 bg-[rgba(254,254,254,0.95)] shadow-md"
            : "h-28 bg-[rgba(254,254,254,0.85)] shadow"
        }`}
      >
        <div className="border-b border-[rgba(8,52,139,0.08)] h-full">
          <div className="container mx-auto flex items-center justify-between h-full px-6">
            {/* Brand */}
            <Link
              href="/"
              className="flex items-center gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#08348b] rounded"
              aria-label="Veer Bharat Home"
              onClick={() => setOpen(false)}
            >
              {/* Logo */}
              <div
                className={`relative overflow-hidden rounded-lg ring-2 ring-[#08348b]/10 transition-all duration-300 ${
                  scrolled ? "w-14 h-14" : "w-20 h-20"
                } shadow-lg`}
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
                  हर बूंद में भरोसा
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-10 text-lg font-semibold">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/products">Products</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/contact">Contact</NavLink>

              <a
                href="#"
                className="ml-4 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#08348b] via-[#aa2266] to-[#5d169e] text-white text-lg font-bold shadow-lg hover:scale-[1.05] hover:shadow-xl transition"
              >
                Shop Now
              </a>
            </nav>

            {/* Mobile hamburger */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setOpen((s) => !s)}
                aria-expanded={open}
                aria-label={open ? "Close menu" : "Open menu"}
                className="relative w-12 h-12 flex items-center justify-center rounded-lg hover:bg-[#08348b]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#08348b]"
              >
                <svg
                  className="w-8 h-8 text-[#08348b]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  {open ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden bg-white border-t border-[rgba(8,52,139,0.08)] shadow-inner overflow-hidden transition-all duration-300 ${
            open ? "max-h-[600px] py-6 opacity-100" : "max-h-0 py-0 opacity-0"
          }`}
        >
          <div className="container mx-auto px-6 flex flex-col gap-4 text-lg font-medium">
            <MobileLink href="/" onClick={() => setOpen(false)}>
              Home
            </MobileLink>
            <MobileLink href="/products" onClick={() => setOpen(false)}>
              Products
            </MobileLink>
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
          </div>
        </div>
      </header>

      {/* Spacer div to push content below fixed navbar */}
      <div className="h-28 md:h-28"></div>
    </>
  );
}

/* helpers */
function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="relative px-2 py-1 text-gray-700 hover:text-[#08348b] transition group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#08348b] via-[#aa2266] to-[#5d169e] group-hover:w-full transition-all" />
    </Link>
  );
}

function MobileLink({ href, children, onClick }) {
  return (
    <Link
      href={href}
      className="block px-4 py-3 rounded-md text-[#08348b] hover:bg-[#08348b]/5 font-semibold transition"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
