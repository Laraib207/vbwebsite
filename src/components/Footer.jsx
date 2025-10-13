// // // components/Footer.jsx
// import Image from "next/image";
// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="bg-[#fff6f1] border-t border-[rgba(8,52,139,0.04)] mt-12">
//       <div className="container mx-auto px-6 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
//           {/* Brand / Logo + socials (left) */}
//           <div className="md:col-span-3 flex flex-col md:flex-row md:items-start gap-4">
//             <div className="flex-shrink-0">
//               <div className="relative w-20 h-20 rounded-md overflow-hidden shadow">
//                 <Image src="/logo.png" alt="Veer Bharat / Bulbul logo" fill style={{ objectFit: "cover" }} />
//               </div>
//             </div>

//             <div className="mt-1 md:mt-0">
//               <h4 className="text-[#08348b] font-bold text-lg">VEER BHARAT</h4>
//               <p className="text-sm text-[#6b6972] mt-1">MUSTERD OIL AND MANY MORE</p>

//               <div className="mt-4 flex items-center gap-3">
//                 <a href="https://www.facebook.com/share/1CKoYSoAVg/" aria-label="Facebook" className="w-8 h-8 rounded-full bg-[#e9eefc] flex items-center justify-center hover:opacity-90">
//                   <svg width="14" height="14" viewBox="0 0 24 24" fill="#08348b" xmlns="http://www.w3.org/2000/svg"><path d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.99H7.898v-2.888h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.888h-2.33v6.99C18.343 21.128 22 16.991 22 12z"/></svg>
//                 </a>
//                 <a href="https://twitter.com/veerbharat" aria-label="Twitter" className="w-8 h-8 rounded-full bg-[#eef7ff] flex items-center justify-center hover:opacity-90">
//                   <svg width="14" height="14" viewBox="0 0 24 24" fill="#1d9bf0" xmlns="http://www.w3.org/2000/svg"><path d="M22 5.92c-.64.28-1.3.48-2 .56.72-.44 1.28-1.14 1.54-1.98-.68.4-1.44.68-2.25.84A3.64 3.64 0 0016.5 4c-2 0-3.62 1.6-3.62 3.57 0 .28.03.55.09.81C9.3 8.23 6.2 6.57 4 3.98c-.31.52-.48 1.12-.48 1.76 0 1.22.62 2.3 1.56 2.94-.58-.02-1.13-.18-1.61-.44v.04c0 1.72 1.2 3.14 2.8 3.47-.29.08-.6.12-.92.12-.22 0-.44-.02-.65-.06.44 1.38 1.72 2.38 3.24 2.4A7.28 7.28 0 012 19.54 10.3 10.3 0 007 21c6.26 0 9.68-5.22 9.68-9.75v-.44c.66-.48 1.24-1.08 1.7-1.76-.6.28-1.24.48-1.9.56.68-.44 1.2-1.18 1.44-2.04z"/></svg>
//                 </a>
//                 <a href="https://www.youtube.com/@Veer.officialbharat" aria-label="YouTube" className="w-8 h-8 rounded-full bg-[#fff1f1] flex items-center justify-center hover:opacity-90">
//                   <svg width="14" height="14" viewBox="0 0 24 24" fill="#d52e3e" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 6.2a2.9 2.9 0 00-2.05-2.05C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.45.65A2.9 2.9 0 00.5 6.2 30.2 30.2 0 000 12a30.2 30.2 0 00.5 5.8 2.9 2.9 0 002.05 2.05C4.3 20.5 12 20.5 12 20.5s7.7 0 9.45-.65a2.9 2.9 0 002.05-2.05A30.2 30.2 0 0024 12a30.2 30.2 0 00-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
//                 </a>
//                 <a href="https://www.instagram.com/veerbharatofficial" aria-label="Instagram" className="w-8 h-8 rounded-full bg-[#fff5f9] flex items-center justify-center hover:opacity-90">
//                   <svg width="14" height="14" viewBox="0 0 24 24" fill="#aa2266" xmlns="http://www.w3.org/2000/svg"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a4 4 0 100 8 4 4 0 000-8zm6.5-.5a1 1 0 11-.002 2.002A1 1 0 0118.5 6.5z"/></svg>
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Menu (center-left) */}
//           <div className="md:col-span-2">
//             <h5 className="text-[#2f3a6a] font-semibold mb-3">Menu</h5>
//             <ul className="space-y-2 text-sm text-[#5b5b66]">
//               <li><Link href="/" className="hover:text-[#08348b]">Home</Link></li>
//               <li><Link href="/products" className="hover:text-[#08348b]">Products</Link></li>
//               <li><Link href="/about" className="hover:text-[#08348b]">About Us</Link></li>
//               <li><Link href="/veerbharat.io" className="hover:text-[#08348b]">Manufacturing</Link></li>
//               <li><Link href="/blogs" className="hover:text-[#08348b]">Blogs</Link></li>
//             </ul>
//           </div>





//           {/* Products (center) */}
//           {/* <div className="md:col-span-2">
//             <h5 className="text-[#2f3a6a] font-semibold mb-3">Products</h5>
//             <ul className="space-y-2 text-sm text-[#5b5b66]">
//               <li><Link href="/products/kachi-ghani" className="hover:text-[#08348b]">Kachi Ghani Mustard Oil</Link></li>
//               <li><Link href="/products/mustard-oil-cake" className="hover:text-[#08348b]">Mustard Oil Cake</Link></li>
//               <li><Link href="/products/mustard-oil-powder" className="hover:text-[#08348b]">Mustard Oil Powder</Link></li>
//               <li><Link href="/products/yellow-mustard" className="hover:text-[#08348b]">Yellow Mustard Oil</Link></li>
//             </ul>
//           </div> */}

//           {/* Legal (center-right) */}





//           <div className="md:col-span-2">
//             <h5 className="text-[#2f3a6a] font-semibold mb-3">Legal</h5>
//             <ul className="space-y-2 text-sm text-[#5b5b66]">
//               <li><Link href="/terms" className="hover:text-[#08348b]">Terms & Conditions</Link></li>
//               <li><Link href="/privacy" className="hover:text-[#08348b]">Privacy Policy</Link></li>
//               <li><Link href="/refund" className="hover:text-[#08348b]">Refund Policy</Link></li>
//             </ul>
//           </div>

//           {/* Contact Us (right) */}
//           <div className="md:col-span-3">
//             <h5 className="text-[#2f3a6a] font-semibold mb-3">Contact Us</h5>

//             <div className="text-sm text-[#5b5b66] space-y-3">
//               <div>
//                 <div className="font-semibold text-[#0b2b52]">Corporate Office</div>
//                 <div className="mt-1">
//                   Sri Shayam Agro Industries 
//                 </div>
//               </div>

//               <div>
//                 <div className="font-medium">E-Mail:</div>
//                 <a href="mailto:info@veer-bharat.com" className="block hover:text-[#08348b]">info@veer-bharat.com</a>
//               </div>

//               <div>
//                 <div className="font-medium">Phone:</div>
//                 <div className="mt-1 font-semibold text-[#0b2b52]">
//                   <a href="tel:8802000091" className="block">+91 9266328444</a>
//                   {/* <a href="tel:9216506091" className="block">9216506091</a>
//                   <a href="tel:9216806091" className="block">9216806091</a> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* bottom border + copyright */}
//         <div className="mt-10 border-t border-[rgba(8,52,139,0.06)] pt-6">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#5b5b66]">
//             <div>Copyright © {new Date().getFullYear()} VEER BHARAT</div>

//             <div className="flex items-center gap-3">
//               <a href="#" className="text-[#08348b] hover:underline">Privacy</a>
//               <span className="text-gray-300">•</span>
//               <a href="#" className="text-[#08348b] hover:underline">Terms</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }







// // components/Footer.tsx
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const Footer = () => {
//   return (
//     <footer className="bg-[#DFC6F6] border-t border-[rgba(8,52,139,0.06)] mt-12 font-sans">
//       <div className="max-w-7xl mx-auto px-6 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

//           {/* LEFT: Logos (stacked) + social icons */}
//           <div className="md:col-span-3 flex flex-col items-start gap-4">
//             {/* Wrap to avoid overlap: logos are in normal flow, not absolute */}
//             <div className="flex flex-col items-start space-y-2">
//               {/* FSSAI logo (responsive, fixed max size) */}
//               <div className="relative w-full max-w-[267.5px] h-auto">
//                 <Image
//                   src="/FSSAI_Logo.png"
//                   alt="FSSAI registration"
//                   width={267.5}
//                   height={98.64}
//                   style={{ width: "100%", height: "auto", objectFit: "contain" }}
//                   priority
//                 />
//               </div>

//               {/* Company logo (below FSSAI) */}
//               <div className="relative w-full max-w-[267.5px] h-auto">
//                 <Image
//                   src="/logo.png"
//                   alt="Veer Bharat company logo"
//                   width={267.5}
//                   height={98.64}
//                   style={{ width: "100%", height: "auto", objectFit: "contain" }}
//                   priority
//                 />
//               </div>
//             </div>

//             {/* Brand text & small description — placed after logos so nothing hides */}
//             <div className="mt-1">
//               <h4 className="text-[#08348b] font-extrabold text-[1.25rem] md:text-[1.35rem] leading-tight">
//                 VEER BHARAT
//               </h4>
//               <p className="text-[0.95rem] text-[#332e3a] mt-1 uppercase tracking-wide">
//                 MUSTARD OIL & AGRO PRODUCTS
//               </p>

//               <p className="text-[0.92rem] text-[#3b3640] mt-3 max-w-xs">
//                 Registered with the Food Safety & Standards Authority of India (FSSAI).
//                 We maintain strict quality and safety standards across our manufacturing and packaging.
//               </p>

//               <div className="mt-2 text-[0.92rem] text-[#333]">
//                 <strong>FSSAI No:</strong> 10012022000234
//               </div>
//             </div>

//             {/* Social icons - kept below the text to avoid overlap on narrow screens */}
//             <div className="mt-4 flex flex-wrap items-center gap-3">
//               {/* Each icon is a simple circle */}
//               <a href="https://www.facebook.com/share/1CKoYSoAVg/" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm hover:opacity-90">
//                 <svg width="14" height="14" viewBox="0 0 24 24" fill="#08348b" xmlns="http://www.w3.org/2000/svg"><path d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.99H7.898v-2.888h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.888h-2.33v6.99C18.343 21.128 22 16.991 22 12z"/></svg>
//               </a>

//               <a href="https://twitter.com/veerbharat" aria-label="Twitter" className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm hover:opacity-90">
//                 <svg width="14" height="14" viewBox="0 0 24 24" fill="#1d9bf0" xmlns="http://www.w3.org/2000/svg"><path d="M22 5.92c-.64.28-1.3.48-2 .56.72-.44 1.28-1.14 1.54-1.98-.68.4-1.44.68-2.25.84A3.64 3.64 0 0016.5 4c-2 0-3.62 1.6-3.62 3.57 0 .28.03.55.09.81C9.3 8.23 6.2 6.57 4 3.98c-.31.52-.48 1.12-.48 1.76 0 1.22.62 2.3 1.56 2.94-.58-.02-1.13-.18-1.61-.44v.04c0 1.72 1.2 3.14 2.8 3.47-.29.08-.6.12-.92.12-.22 0-.44-.02-.65-.06.44 1.38 1.72 2.38 3.24 2.4A7.28 7.28 0 012 19.54 10.3 10.3 0 007 21c6.26 0 9.68-5.22 9.68-9.75v-.44c.66-.48 1.24-1.08 1.7-1.76-.6.28-1.24.48-1.9.56.68-.44 1.2-1.18 1.44-2.04z"/></svg>
//               </a>

//               <a href="https://www.youtube.com/@Veer.officialbharat" aria-label="YouTube" className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm hover:opacity-90">
//                 <svg width="14" height="14" viewBox="0 0 24 24" fill="#d52e3e" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 6.2a2.9 2.9 0 00-2.05-2.05C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.45.65A2.9 2.9 0 00.5 6.2 30.2 30.2 0 000 12a30.2 30.2 0 00.5 5.8 2.9 2.9 0 002.05 2.05C4.3 20.5 12 20.5 12 20.5s7.7 0 9.45-.65a2.9 2.9 0 002.05-2.05A30.2 30.2 0 0024 12a30.2 30.2 0 00-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
//               </a>

//               <a href="https://www.instagram.com/veerbharatofficial" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm hover:opacity-90">
//                 <svg width="14" height="14" viewBox="0 0 24 24" fill="#aa2266" xmlns="http://www.w3.org/2000/svg"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a4 4 0 100 8 4 4 0 000-8zm6.5-.5a1 1 0 11-.002 2.002A1 1 0 0118.5 6.5z"/></svg>
//               </a>

//               <a href="https://www.linkedin.com/company/veerbharat" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm hover:opacity-90">
//                 <svg width="14" height="14" viewBox="0 0 24 24" fill="#0a66c2" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h3.96V24H.5V8zM8.5 8h3.8v2.16h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.66 4.78 6.12V24h-3.96v-7.02c0-1.67-.03-3.82-2.33-3.82-2.33 0-2.68 1.82-2.68 3.7V24H8.5V8z"/></svg>
//               </a>
//             </div>
//           </div>

//           {/* MENU */}
//           <div className="md:col-span-2">
//             <h5 className="text-[#2f3a6a] font-semibold mb-3 text-[1.15rem]">Menu</h5>
//             <ul className="space-y-2 text-[1rem] text-[#5b5b66]">
//               <li><Link href="/" className="hover:text-[#08348b]">Home</Link></li>
//               <li><Link href="/products" className="hover:text-[#08348b]">Products</Link></li>
//               <li><Link href="/about" className="hover:text-[#08348b]">About Us</Link></li>
//               <li><Link href="/csr" className="hover:text-[#08348b]">CSR & Events</Link></li>
//               <li><Link href="/blogs" className="hover:text-[#08348b]">Blogs</Link></li>
//             </ul>
//           </div>

//           {/* PRODUCTS */}
//           <div className="md:col-span-2">
//             <h5 className="text-[#2f3a6a] font-semibold mb-3 text-[1.15rem]">Products</h5>
//             <ul className="space-y-2 text-[1rem] text-[#5b5b66]">
//               <li><Link href="/products/kachi-ghani" className="hover:text-[#08348b]">Kachi Ghani Mustard Oil</Link></li>
//               <li><Link href="/products/mustard-cake" className="hover:text-[#08348b]">Mustard Oil Cake</Link></li>
//               <li><Link href="/products/mustard-powder" className="hover:text-[#08348b]">Mustard Powder</Link></li>
//               <li><Link href="/products/yellow-mustard" className="hover:text-[#08348b]">Yellow Mustard Oil</Link></li>
//             </ul>
//           </div>

//           {/* LEGAL */}
//           <div className="md:col-span-2">
//             <h5 className="text-[#2f3a6a] font-semibold mb-3 text-[1.15rem]">Legal</h5>
//             <ul className="space-y-2 text-[1rem] text-[#5b5b66]">
//               <li><Link href="/terms" className="hover:text-[#08348b]">Terms & Conditions</Link></li>
//               <li><Link href="/privacy" className="hover:text-[#08348b]">Privacy Policy</Link></li>
//               <li><Link href="/refund" className="hover:text-[#08348b]">Refund Policy</Link></li>
//             </ul>
//           </div>

//           {/* CONTACT */}
//           <div className="md:col-span-3">
//             <h5 className="text-[#2f3a6a] font-semibold mb-3 text-[1.15rem]">Contact Us</h5>
//             <div className="text-[1rem] text-[#5b5b66] space-y-3">
//               <div>
//                 <div className="font-semibold text-[#0b2b52]">Corporate Office</div>
//                 <div className="mt-1">SHREE ARIHANT OIL AND GENERAL MILLS</div>
//                 <div className="mt-1">Tehsil Road, Adjoining Jain Lab, Jagraon – 142026 (Pb.)</div>
//               </div>
//               <div>
//                 <div className="font-medium">E-Mail:</div>
//                 <a href="mailto:info@arihantoilmills.com" className="block hover:text-[#08348b]">info@arihantoilmills.com</a>
//               </div>
//               <div>
//                 <div className="font-medium">Phone:</div>
//                 <div className="mt-1 font-semibold text-[#0b2b52]">
//                   <a href="tel:8802000091" className="block">8802000091</a>
//                   <a href="tel:9216506091" className="block">9216506091</a>
//                   <a href="tel:9216806091" className="block">9216806091</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM COPYRIGHT */}
//         <div className="mt-10 border-t border-[rgba(8,52,139,0.08)] pt-6">
//           <div className="flex items-center justify-center">
//             <div className="text-[1rem] text-[#08348b] font-medium text-center">
//               Copyright © 2025 <span className="font-semibold">VEER BHARAT</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const Footer = () => {
//   return (
//     <footer className="bg-[#DFC6F6] border-t border-[rgba(8,52,139,0.08)] mt-6 font-sans">
//       <div className="max-w-7xl mx-auto px-6 py-6">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

//           {/* LEFT COLUMN: Small Logos & Company Info */}
//           <div className="flex flex-col items-start gap-3">
//             {/* FSSAI Logo - Very Small */}
//             <div className="relative w-full max-w-[180px] h-auto">
//               <Image
//                 src="/FSSAI_Logo.png"
//                 alt="FSSAI registration"
//                 width={180}
//                 height={66}
//                 style={{ width: "100%", height: "auto", objectFit: "contain" }}
//                 priority
//               />
//             </div>

//             {/* Company Logo - Very Small */}
//             <div className="relative w-full max-w-[180px] h-auto">
//               <Image
//                 src="/logo.png"
//                 alt="Veer Bharat company logo"
//                 width={180}
//                 height={66}
//                 style={{ width: "100%", height: "auto", objectFit: "contain" }}
//                 priority
//               />
//             </div>

//             {/* Company Info - Compact */}
//             <div className="mt-1">
//               <h4 className="text-[#08348b] font-extrabold text-xl leading-tight">
//                 VEER BHARAT
//               </h4>
//               <p className="text-sm text-[#332e3a] mt-1 uppercase tracking-wide font-semibold">
//                 वाह! मज़ा आ गया
//               </p>

//               <p className="text-sm text-[#3b3640] mt-2 leading-relaxed">
//                 MUSTARD OIL & AGRO PRODUCTS
//               </p>

//               <p className="text-sm text-[#3b3640] mt-2 leading-relaxed">
//                 Registered with the Food Safety & Standards Authority of India (FSSAI).
//                 We maintain strict quality and safety standards across our manufacturing and packaging.
//               </p>

//               <div className="mt-2 text-sm text-[#333]">
//                 <strong className="text-[#08348b]">FSSAI No:</strong>{" "}
//                 <span className="font-semibold">10012022000234</span>
//               </div>
//             </div>
//           </div>

//           {/* MIDDLE COLUMN: Our Products */}
//           <div>
//             <h5 className="text-[#08348b] font-bold mb-3 text-lg">Our Products</h5>
//             <ul className="space-y-2 text-base text-[#3b3640] font-medium">
//               <li>
//                 <Link href="/soyabean-oil" className="hover:text-[#08348b] hover:underline transition">
//                   Soyabean Oil
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/kachi-ghani" className="hover:text-[#08348b] hover:underline transition">
//                   Kachi Ghani Pure Mustard Oil
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/sunflower-oil" className="hover:text-[#08348b] hover:underline transition">
//                   Sunflower Oil
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/rice-bran-oil" className="hover:text-[#08348b] hover:underline transition">
//                   Rice Bran Oil
//                 </Link>
//               </li>
//             </ul>

//             {/* Additional Links */}
//             <div className="mt-6">
//               <Link
//                 href="/plant-address"
//                 className="text-base text-[#0066cc] font-semibold hover:underline block mb-2"
//               >
//                 Plant Address
//               </Link>
//               <Link
//                 href="/terms"
//                 className="text-base text-[#0066cc] font-semibold hover:underline block mb-2"
//               >
//                 Terms & Conditions
//               </Link>
//               <Link
//                 href="/privacy"
//                 className="text-base text-[#0066cc] font-semibold hover:underline block"
//               >
//                 Privacy Policy
//               </Link>
//             </div>
//           </div>

//           {/* RIGHT COLUMN: Contact Us */}
//           <div>
//             <h5 className="text-[#08348b] font-bold mb-3 text-lg">Contact Us</h5>
//             <div className="text-[#3b3640] space-y-2">
//               <div>
//                 <p className="text-base font-bold text-[#08348b]">
//                   SHREE ARIHANT OIL AND GENERAL MILLS
//                 </p>
//                 <p className="text-base leading-relaxed mt-2">
//                   "Fortune House",
//                 </p>
//                 <p className="text-base leading-relaxed">
//                   Near Navrangpura Railway Crossing,
//                 </p>
//                 <p className="text-base leading-relaxed">
//                   Ahmedabad-380009, Gujarat(India).
//                 </p>
//               </div>

//               <div className="mt-3">
//                 <p className="text-base font-bold text-[#08348b]">Phone:</p>
//                 <a
//                   href="tel:8802000091"
//                   className="block text-base hover:text-[#aa2266] transition mt-1"
//                 >
//                   8802000091
//                 </a>
//                 <a
//                   href="tel:9216506091"
//                   className="block text-base hover:text-[#aa2266] transition"
//                 >
//                   9216506091
//                 </a>
//                 <a
//                   href="tel:9216806091"
//                   className="block text-base hover:text-[#aa2266] transition"
//                 >
//                   9216806091
//                 </a>
//               </div>

//               <div className="mt-3">
//                 <p className="text-base font-bold text-[#08348b]">Email:</p>
//                 <a
//                   href="mailto:info@arihantoilmills.com"
//                   className="text-base hover:text-[#aa2266] hover:underline transition block mt-1 break-all"
//                 >
//                   info@arihantoilmills.com
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* COPYRIGHT SECTION - Single Line */}
//         <div className="mt-6 pt-4 border-t border-[rgba(8,52,139,0.12)]">
//           <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-center">
//             <div className="text-sm text-[#08348b] font-semibold">
//               Copyright © 2025 <span className="font-bold">VEER BHARAT</span>. All Rights Reserved.
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer 
      className="relative overflow-hidden border-t-4 border-purple-300" 
      style={{ 
        background: 'linear-gradient(to right, #fef9c3 0%, #DFC6F6 100%)',
        minHeight: '40vh'
      }}
    >
      <div className="max-w-7xl mx-auto px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* LEFT COLUMN: Products */}
          <div>
            <h3 className="text-gray-900 font-extrabold text-2xl mb-5 pb-2 border-b-3 border-gray-800 inline-block">
              Products
            </h3>
            <ul className="space-y-3 mt-6">
              <li>
                <Link 
                  href="/mustard-oil" 
                  className="text-gray-800 text-lg font-bold hover:text-purple-700 transition-colors duration-200"
                >
                  Kachi Ghani Pure Mustard Oil
                </Link>
              </li>
              <li>
                <Link 
                  href="/soyabean-oil" 
                  className="text-gray-800 text-lg font-bold hover:text-purple-700 transition-colors duration-200"
                >
                  Soyabean Oil
                </Link>
              </li>
              <li>
                <Link 
                  href="/sunflower-oil" 
                  className="text-gray-800 text-lg font-bold hover:text-purple-700 transition-colors duration-200"
                >
                  Sunflower Oil
                </Link>
              </li>
              <li>
                <Link 
                  href="/rice-bran-oil" 
                  className="text-gray-800 text-lg font-bold hover:text-purple-700 transition-colors duration-200"
                >
                  Rice Bran Oil
                </Link>
              </li>
            </ul>

            {/* Company Logo */}
            <div className="mt-8 flex items-center gap-4">
              <div className="relative w-32 h-auto">
                <Image
                  src="/logo.png"
                  alt="Veer Bharat Logo"
                  width={128}
                  height={64}
                  style={{ width: "100%", height: "auto", objectFit: "contain" }}
                  priority
                />
              </div>
              <div>
                <p className="text-gray-900 font-black text-xl">VEER BHARAT</p>
                <p className="text-base text-gray-800 font-bold mt-1">वाह! मज़ा आ गया</p>
              </div>
            </div>
          </div>

          {/* MIDDLE COLUMN: Quick Links */}
          <div>
            <h3 className="text-gray-900 font-extrabold text-2xl mb-5 pb-2 border-b-3 border-gray-800 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3 mt-6">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-800 text-lg font-bold hover:text-purple-700 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-800 text-lg font-bold hover:text-purple-700 transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/recipes" 
                  className="text-gray-800 text-lg font-bold hover:text-purple-700 transition-colors duration-200"
                >
                  Recipes
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-800 text-lg font-bold hover:text-purple-700 transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* FSSAI Logo */}
            <div className="mt-8 p-4 bg-white/60 rounded-lg border-2 border-gray-300">
              <div className="flex items-center gap-4">
                <div className="relative w-24 h-auto">
                  <Image
                    src="/FSSAI_Logo.png"
                    alt="FSSAI Certified"
                    width={96}
                    height={40}
                    style={{ width: "100%", height: "auto", objectFit: "contain" }}
                    priority
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">FSSAI Certified</p>
                  <p className="text-base font-black text-gray-900 mt-1">10012022000234</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Important Links & Contact */}
          <div>
            <h3 className="text-gray-900 font-extrabold text-2xl mb-5 pb-2 border-b-3 border-gray-800 inline-block">
              Important Links
            </h3>
            <ul className="space-y-3 mt-6">
              <li>
                {/* <Link 
                  href="/privacy-policy" 
                  className="text-gray-800 text-lg font-bold hover:text-purple-700 transition-colors duration-200"
                >
                  Privacy Policy
                </Link> */}
              </li>
              <li>
                {/* <Link 
                  href="/infrastructure" 
                  className="text-gray-800 text-lg font-bold hover:text-purple-700 transition-colors duration-200"
                >
                  Infrastructure
                </Link> */}
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="text-gray-800 text-lg font-bold hover:text-purple-700 transition-colors duration-200"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link 
                  href="/clients" 
                  className="text-gray-800 text-lg font-bold hover:text-purple-700 transition-colors duration-200"
                >
                  Clients
                </Link>
              </li>
              <li>
                <Link 
                  href="/media" 
                  className="text-gray-800 text-lg font-bold hover:text-purple-700 transition-colors duration-200"
                >
                  Media
                </Link>
              </li>
            </ul>

            {/* Contact Info
            <div className="mt-6">
              <p className="text-base font-black text-gray-900 mb-2">
                SHREE ARIHANT OIL AND GENERAL MILLS
              </p>
              <p className="text-base font-bold text-gray-800 leading-relaxed">
                "Fortune House", Near Navrangpura Railway Crossing,<br />
                Ahmedabad-380009, Gujarat (India)
              </p>
              
              <div className="mt-4 space-y-2">
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-1">Phone:</p>
                  <div className="space-y-1">
                    <a href="tel:8802000091" className="block text-base font-bold text-gray-800 hover:text-purple-700 transition-colors">
                      8802000091
                    </a>
                    <a href="tel:9216506091" className="block text-base font-bold text-gray-800 hover:text-purple-700 transition-colors">
                      9216506091
                    </a>
                    <a href="tel:9216806091" className="block text-base font-bold text-gray-800 hover:text-purple-700 transition-colors">
                      9216806091
                    </a>
                  </div>
                </div>
                
                <div className="mt-3">
                  <p className="text-sm font-bold text-gray-900 mb-1">Email:</p>
                  <a 
                    href="mailto:info@arihantoilmills.com" 
                    className="text-base font-bold text-gray-800 hover:text-purple-700 hover:underline transition-colors break-all"
                  >
                    info@arihantoilmills.com
                  </a>
                </div>
              </div>
            </div> */}
            

            {/* Social Media */}
            <div className="mt-6">
              <p className="text-sm font-bold text-gray-900 mb-3">Follow Us:</p>
              <div className="flex gap-3">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-purple-700 transition-colors font-bold"
                >
                  f
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-purple-700 transition-colors font-bold text-sm"
                >
                  𝕏
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-purple-700 transition-colors font-bold text-xs"
                >
                  in
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-purple-700 transition-colors"
                >
                  📷
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-purple-700 transition-colors"
                >
                  ▶
                </a>
                <a 
                  href="https://wa.me/918802000091" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors"
                >
                  💬
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT SECTION */}
        <div className="mt-10 pt-5 border-t-2 border-gray-400">
          <p className="text-center text-base font-bold text-gray-900">
            Copyright © 2025 <span className="font-black">VEER BHARAT</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
