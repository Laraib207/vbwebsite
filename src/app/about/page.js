// src/app/about/page.js  (or src/pages/About.jsx)
// Make sure to `npm install framer-motion` and put images in public:
// /public/event1.jpg, /public/event2.jpg, /public/team1.jpg, /public/veer-logo.png

  // "use client";

  // import React from "react";
  // import { motion } from "framer-motion";

  // /* ============================
  //   Small reusable Card (player/profile)
  //   ============================ */
  // function SpotlightCard({ img = "/team1.jpg", title, subtitle, children }) {
  //   return (
  //     <motion.div
  //       initial={{ opacity: 0, y: 20, scale: 0.985 }}
  //       whileInView={{ opacity: 1, y: 0, scale: 1 }}
  //       whileHover={{ scale: 1.02, y: -6 }}
  //       viewport={{ once: true, amount: 0.3 }}
  //       transition={{ duration: 0.45, ease: "easeOut" }}
  //       className="bg-white rounded-2xl shadow-2xl overflow-hidden relative border border-white/60"
  //     >
  //       <div className="relative h-56 sm:h-64 lg:h-72">
  //         <img
  //           src={img}
  //           alt={title}
  //           className="w-full h-full object-cover transform transition-transform duration-500"
  //         />
  //         <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-90" />
  //         <div className="absolute left-4 bottom-4">
  //           <div className="text-white font-bold text-xl md:text-2xl drop-shadow">{title}</div>
  //           {subtitle && <div className="text-sm text-white/90 mt-1 drop-shadow">{subtitle}</div>}
  //         </div>
  //       </div>

  //       <div className="p-5">
  //         <div className="text-sm text-gray-600">{children}</div>
  //         <div className="mt-4 flex gap-3">
  //           <button className="px-4 py-2 rounded-full bg-red-600 text-white font-semibold shadow hover:scale-105 transition">
  //             Learn More
  //           </button>
  //           <button className="px-4 py-2 rounded-full border border-gray-200 text-gray-800 bg-white hover:shadow-md transition">
  //             Contact
  //           </button>
  //         </div>
  //       </div>
  //     </motion.div>
  //   );
  // }

  // /* ============================
  //   Horizontal slider / gallery
  //   Opens left-right (slide) when in view
  //   ============================ */
  // function GallerySlider({ images = [] }) {
  //   return (
  //     <motion.div
  //       initial={{ opacity: 0, x: -40 }}
  //       whileInView={{ opacity: 1, x: 0 }}
  //       viewport={{ once: true }}
  //       transition={{ duration: 0.7 }}
  //       className="overflow-x-auto no-scrollbar py-4"
  //     >
  //       <div className="flex gap-6 px-2">
  //         {images.map((img, i) => (
  //           <motion.div
  //             key={i}
  //             whileHover={{ scale: 1.03 }}
  //             className="min-w-[280px] md:min-w-[340px] bg-white/60 rounded-2xl p-3 shadow-lg border"
  //           >
  //             <div className="h-44 md:h-52 overflow-hidden rounded-xl">
  //               <img src={img} alt={`event-${i}`} className="w-full h-full object-cover" />
  //             </div>
  //             <div className="mt-3">
  //               <div className="font-semibold text-gray-800">Veer Bharat Display</div>
  //               <div className="text-sm text-gray-600 mt-1">On-ground sampling & exhibition moment</div>
  //             </div>
  //           </motion.div>
  //         ))}
  //       </div>
  //     </motion.div>
  //   );
  // }

  // /* ============================
  //   Blog-style card (expensive feel)
  //   ============================ */
  // function BlogCard({ title, excerpt }) {
  //   return (
  //     <motion.article
  //       initial={{ opacity: 0, y: 20 }}
  //       whileInView={{ opacity: 1, y: 0 }}
  //       viewport={{ once: true }}
  //       transition={{ duration: 0.6 }}
  //       className="bg-gradient-to-br from-white/90 to-white rounded-2xl p-6 shadow-2xl border"
  //     >
  //       <h3 className="text-2xl font-extrabold text-red-600">{title}</h3>
  //       <p className="mt-3 text-gray-700 leading-relaxed">{excerpt}</p>
  //       <div className="mt-6 flex gap-3">
  //         <a className="text-sm font-semibold text-red-600 hover:underline" href="#">
  //           Read more →
  //         </a>
  //       </div>
  //     </motion.article>
  //   );
  // }

  // /* ============================
  //   Main About page component
  //   ============================ */
  // export default function About() {
  //   return (
  //     <main className="bg-gradient-to-b from-yellow-50 via-yellow-100 to-white min-h-screen text-gray-800">
  //       {/* HERO */}
  //       <section className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
  //         <div className="grid gap-8 lg:grid-cols-2 items-center">
  //           {/* Left: text + logo */}
  //           <motion.div
  //             initial={{ opacity: 0, x: -30 }}
  //             whileInView={{ opacity: 1, x: 0 }}
  //             viewport={{ once: true }}
  //             transition={{ duration: 0.7 }}
  //             className="space-y-6"
  //           >
  //             <div className="flex items-center gap-4">
  //               <img src="/veer-logo.png" alt="Veer Bharat" className="w-20 h-20 object-contain" />
  //               <div>
  //                 <div className="text-sm text-gray-600 uppercase tracking-widest">Sri Shyam Agro Industries</div>
  //                 <div className="text-3xl md:text-4xl font-extrabold text-red-600">Veer Bharat</div>
  //               </div>
  //             </div>

  //             <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
  //               We deliver purity. We deliver trust.
  //             </h1>

  //             <p className="text-lg text-gray-700 max-w-xl leading-relaxed">
  //               Veer Bharat blends tradition and modern quality — from premium mustard oils to ready-to-cook ranges. We craft every product with care and the highest standards, so every family can enjoy honest, delightful food.
  //             </p>

  //             <div className="flex gap-4 mt-4">
  //               <a className="inline-block px-6 py-3 rounded-2xl bg-red-600 text-white font-semibold shadow hover:scale-105 transition" href="#">
  //                 View Products
  //               </a>
  //               <a className="inline-block px-6 py-3 rounded-2xl border border-red-600 text-red-600 bg-white/80 hover:bg-red-50 transition" href="#">
  //                 Contact Sales
  //               </a>
  //             </div>

  //             {/* A short "chat-like" line in English (polished and readable) */}
  //             <div className="mt-6 bg-gradient-to-r from-white/50 to-white/30 p-4 rounded-xl border shadow-sm">
  //               <div className="text-sm text-gray-600 italic">
  //                 “Warm greetings from Team Veer Bharat, Delhi — bringing flavour & smiles to every home, one dish at a time.”
  //               </div>
  //             </div>
  //           </motion.div>

  //           {/* Right: Spotlight / Nehru portrait card with small product row */}
  //           <motion.div
  //             initial={{ opacity: 0, x: 30 }}
  //             whileInView={{ opacity: 1, x: 0 }}
  //             viewport={{ once: true }}
  //             transition={{ duration: 0.7 }}
  //             className="flex flex-col gap-6"
  //           >
  //             <SpotlightCard
  //               img="/event1.jpg"
  //               title="Veer Bharat — At Exhibitions"
  //               subtitle="Product displays & sampling"
  //             >
  //               Our on-ground teams in Delhi and across regions present live tasting, in-store sampling and product education — connecting families with quality food.
  //             </SpotlightCard>

  //             <div className="grid grid-cols-2 gap-4">
  //               <div className="bg-white rounded-2xl p-4 shadow-lg border">
  //                 <div className="text-sm text-gray-500">Recent Event</div>
  //                 <div className="text-lg font-semibold text-gray-800">National Food Expo</div>
  //                 <div className="mt-3 text-sm text-gray-600">Interactive demos, retail partnerships & distribution drives.</div>
  //               </div>

  //               <div className="bg-white rounded-2xl p-4 shadow-lg border">
  //                 <div className="text-sm text-gray-500">Our Promise</div>
  //                 <div className="text-lg font-semibold text-gray-800">100% Purity</div>
  //                 <div className="mt-3 text-sm text-gray-600">Cold-pressed, lab-tested, and loved by households.</div>
  //               </div>
  //             </div>
  //           </motion.div>
  //         </div>
  //       </section>

  //       {/* HORIZONTAL GALLERY (opens left→right when seen) */}
  //       <section className="max-w-7xl mx-auto px-6 py-6">
  //         <h2 className="text-2xl font-bold text-gray-800 mb-4">Moments — Live Exhibitions & Sampling</h2>
  //         <GallerySlider images={["/event1.jpg", "/event2.jpg", "/event1.jpg"]} />
  //       </section>

  //       {/* FEATURE HIGHLIGHTS (stats) */}
  //       <section className="max-w-6xl mx-auto px-6 py-10">
  //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  //           {[
  //             { value: "70–80 Cr", label: "Turnover (est.)" },
  //             { value: "100%", label: "Purity Promise" },
  //             { value: "Pan-India", label: "Distribution" },
  //           ].map((s, i) => (
  //             <motion.div
  //               key={i}
  //               initial={{ opacity: 0, y: 20 }}
  //               whileInView={{ opacity: 1, y: 0 }}
  //               viewport={{ once: true }}
  //               transition={{ duration: 0.5, delay: i * 0.08 }}
  //               className="bg-white p-6 rounded-2xl shadow hover:shadow-2xl transition"
  //             >
  //               <div className="text-3xl font-extrabold text-red-600">{s.value}</div>
  //               <div className="text-sm text-gray-600 mt-1">{s.label}</div>
  //             </motion.div>
  //           ))}
  //         </div>
  //       </section>

  //       {/* BLOG/ARTICLE AREA — expensive editorial style */}
  //       <section className="max-w-5xl mx-auto px-6 py-12">
  //         <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Stories from the Field</h2>

  //         <div className="grid gap-6 lg:grid-cols-2">
  //           <BlogCard
  //             title="How our Delhi team brought flavour to local markets"
  //             excerpt="Our Delhi activation team travelled store-to-store, serving warm samples and explaining the craft behind our oils — one dish at a time. Consumers loved the taste and authenticity, and retail partners asked for expanded listings."
  //           />
  //           <BlogCard
  //             title="From trading to cuisine: The evolution of Veer Bharat"
  //             excerpt="What started as trade in cereals and grains became a journey into food manufacturing. Today we celebrate the families that trusted our products and inspired our product expansion."
  //           />
  //         </div>
  //       </section>

  //       {/* TIMELINE / JOURNEY — classy */}
  //       <section className="bg-gradient-to-b from-white to-red-50 py-12">
  //         <div className="max-w-4xl mx-auto px-6 space-y-6">
  //           <h2 className="text-2xl font-bold text-gray-800 text-center">Journey So Far</h2>

  //           <div className="space-y-4">
  //             {[
  //               { year: "2014", text: "Started trading rice, wheat & corn" },
  //               { year: "2018", text: "Expanded trading of oil refineries" },
  //               { year: "2022", text: "Launched Veer Bharat brand" },
  //               { year: "2025", text: "Scaling product lines & retail presence" },
  //             ].map((t, i) => (
  //               <motion.div
  //                 key={i}
  //                 initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
  //                 whileInView={{ opacity: 1, x: 0 }}
  //                 viewport={{ once: true }}
  //                 transition={{ duration: 0.6, delay: i * 0.06 }}
  //                 className="bg-white rounded-xl p-5 shadow hover:shadow-lg transition"
  //               >
  //                 <div className="flex items-center justify-between">
  //                   <div>
  //                     <div className="text-sm text-gray-500">{t.year}</div>
  //                     <div className="text-md font-semibold text-gray-700">{t.text}</div>
  //                   </div>
  //                   <div className="text-red-600 font-bold">•</div>
  //                 </div>
  //               </motion.div>
  //             ))}
  //           </div>
  //         </div>
  //       </section>

  //       {/* CTA & Footer-ish */}
  //       <section className="py-12">
  //         <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
  //           <div>
  //             <div className="text-xl font-bold">Join the Veer Bharat journey</div>
  //             <div className="text-sm text-gray-600 mt-1">
  //               For distribution, partnerships or product trials — get in touch.
  //             </div>
  //           </div>
  //           <div className="flex gap-3">
  //             <a className="px-5 py-3 rounded-2xl bg-red-600 text-white font-semibold hover:scale-105 transition" href="/contact">
  //               Contact Us
  //             </a>
  //             <a className="px-5 py-3 rounded-2xl border border-gray-300 text-gray-800 hover:bg-gray-50 transition" href="/company-profile.pdf">
  //               Company Profile
  //             </a>
  //           </div>
  //         </div>
  //       </section>
  //     </main>
  //   );
  // }



//   "use client";

// import React from "react";
// import { motion } from "framer-motion";

// /* ============================
//    About Page (Veer Bharat style)
//    ============================ */
// export default function About() {
//   return (
//     <main
//       className="min-h-screen text-gray-800"
//       style={{ backgroundColor: "#fef9c3" }}
//     >
//       {/* BELIEF SECTION */}
//       <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
//         {/* Text left */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="space-y-6"
//         >
//           <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-600 uppercase tracking-wide">
//             The Belief
//           </h2>
//           <p className="text-lg leading-relaxed text-gray-700">
//             At <span className="font-bold">Veer Bharat</span>, we believe in the
//             power of nourishment and trust. Every home deserves food that is
//             pure, safe, and crafted with care. That’s why we bring you premium
//             edible oils, rice, and ready-to-cook products that combine{" "}
//             <span className="font-semibold">quality, taste, and health</span>.
//           </p>
//           <p className="text-lg leading-relaxed text-gray-700">
//             With Veer Bharat, you don’t just enhance the flavor of your meals —
//             you choose authenticity and purity. Our promise is simple: to bring
//             every family closer through food that is wholesome, trusted, and
//             made with love.
//           </p>
//         </motion.div>

//         {/* Image right */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="flex justify-center"
//         >
//           <img
//             src="/images/veer-products.png"
//             alt="Veer Bharat Products"
//             className="max-w-lg w-full object-contain drop-shadow-xl"
//           />
//         </motion.div>
//       </section>

//       {/* LEGACY SECTION */}
//       <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
//         {/* Image left */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="flex justify-center order-2 md:order-1"
//         >
//           <img
//             src="/images/veer-products.png"
//             alt="Veer Bharat Legacy Products"
//             className="max-w-lg w-full object-contain drop-shadow-xl"
//           />
//         </motion.div>

//         {/* Text right */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="space-y-6 order-1 md:order-2"
//         >
//           <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-600 uppercase tracking-wide">
//             The Legacy
//           </h2>
//           <p className="text-lg leading-relaxed text-gray-700">
//             Our journey began with a vision — to bring premium, affordable food
//             essentials to Indian households. Over the years,{" "}
//             <span className="font-bold">Veer Bharat</span> has become a trusted
//             name, offering oils, rice, pasta, vermicelli, noodles, and more.
//           </p>
//           <p className="text-lg leading-relaxed text-gray-700">
//             Each product is crafted in state-of-the-art facilities, tested for
//             quality, and packed with care. From humble beginnings to serving
//             families across India, our legacy is built on{" "}
//             <span className="font-semibold">purity, tradition, and progress</span>.
//           </p>
//         </motion.div>
//       </section>
//     </main>
//   );
// }



"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

/* ============================
   Reusable components
   ============================ */

function HeroCard({ title, subtitle, children, img }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white/95 rounded-3xl p-8 shadow-2xl border border-white/60"
      style={{ backdropFilter: "saturate(140%) blur(6px)" }}
    >
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-yellow-600 tracking-wide">
            {title}
          </h3>
          <div className="mt-4 text-xl md:text-2xl text-gray-800 font-semibold">{subtitle}</div>
          <div className="mt-5 text-lg md:text-xl text-gray-700 leading-relaxed">{children}</div>
        </div>

        {img && (
          <div className="w-full md:w-80 lg:w-96 flex-shrink-0">
            <img src={img} alt={title} className="w-full h-full object-contain rounded-2xl drop-shadow-2xl" />
          </div>
        )}
      </div>
    </motion.div>
  );
}

function FancyStat({ value, label }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl p-6 shadow-lg border"
    >
      <div className="text-4xl md:text-5xl font-extrabold text-red-600">{value}</div>
      <div className="mt-2 text-base text-gray-600">{label}</div>
    </motion.div>
  );
}

function Testimonial({ quote, author, img = "/images/team1.jpg" }) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white rounded-2xl p-6 shadow-2xl border">
      <div className="flex gap-4 items-start">
        <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
          <img src={img} alt={author} className="w-full h-full object-cover" />
        </div>
        <div>
          <div className="text-lg text-gray-800 font-semibold">“{quote}”</div>
          <div className="mt-2 text-sm text-gray-600">— {author}</div>
        </div>
      </div>
    </motion.div>
  );
}

/* WhatsApp FAB (kept) */
function WhatsAppFAB({ number = "919266328444", message = "Hi Veer Bharat! I want to know more." }) {
  const waUrl = `https://wa.me/${number.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
  return (
    <a href={waUrl} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
      className="fixed right-4 bottom-5 z-50 flex items-center gap-3 px-4 py-3 rounded-full bg-gradient-to-tr from-emerald-400 to-green-500 text-white shadow-2xl hover:scale-105 transform transition">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.523 3.477A11.912 11.912 0 0012 0C5.373 0 .002 5.373 0 12c0 2.115.553 4.183 1.6 6.05L0 24l6.158-1.6A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12 0-3.2-1.244-6.199-3.477-8.523z"/><path d="M17.27 14.12c-.28-.14-1.66-.82-1.92-.92-.26-.1-.45-.14-.64.14s-.74.92-.91 1.11c-.17.19-.35.21-.64.07-1.74-.87-2.88-1.56-4.04-3.51-.3-.52.3-.48.87-1.59.1-.28 0-.48-.03-.64-.03-.18-.64-1.49-.88-2.03-.23-.54-.46-.47-.64-.48-.17-.01-.37-.02-.57-.02-.2 0-.52.07-.78.36-.26.28-1 1-1 2.44 0 1.42 1.03 2.8 1.17 3 .15.2 2.02 3.08 4.9 4.32 2.85 1.23 2.85.82 3.36.77.5-.05 1.66-.68 1.9-1.35.24-.67.24-1.25.17-1.36-.07-.11-.26-.17-.54-.3z"/></svg>
      <span className="hidden md:inline-block font-semibold text-sm">Chat on WhatsApp</span>
    </a>
  );
}

/* ============================
   Page: About (Expanded, premium)
   ============================ */
export default function About() {
  return (
    <main className="min-h-screen text-gray-900" style={{ backgroundColor: "#fef9c3" }}>
      <WhatsAppFAB />

      {/* TOP SECTION — large visible text, hero */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-yellow-600 tracking-tight leading-tight">
              THE BELIEF
            </h1>
            <p className="mt-6 text-2xl md:text-2xl text-gray-800 max-w-3xl leading-relaxed font-semibold">
              We believe in the power of people and the joy of sharing wholesome food. Veer Bharat brings premium oils and kitchen essentials made with unwavering purity and care.
            </p>

            <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
              Every bottle and packet we craft goes through strict quality checks — ensuring every home enjoys healthful, delicious meals. Choose authenticity. Choose flavour. Choose Veer Bharat.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/products" className="inline-block px-6 py-3 rounded-2xl bg-red-600 text-white font-bold shadow-lg hover:scale-105 transition text-lg">View Products</Link>
              <Link href="#contact" className="inline-block px-6 py-3 rounded-2xl border-2 border-red-600 text-red-600 bg-white/90 hover:bg-red-50 transition text-lg">Contact Sales</Link>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white rounded-3xl p-6 shadow-2xl border" style={{ maxWidth: 560 }}>
              <img src="/images/veer-products.png" alt="Veer Bharat products" className="w-full h-auto object-contain rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* RICH PRODUCT STRIP (horizontal banner) */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-yellow-100/80 to-white rounded-3xl p-6 shadow-inner border border-yellow-200">
            <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-3">
              {/* repeat product mini cards to add length */}
              {[
                "/images/veer-products.png",
                "/images/event1.jpg",
                "/images/event2.jpg",
                "/images/veer-products.png",
                "/images/event1.jpg",
                "/images/event2.jpg",
              ].map((src, i) => (
                <div key={i} className="flex-shrink-0 w-56 md:w-72 bg-white rounded-2xl p-4 shadow-lg border">
                  <img src={src} alt={`prod-${i}`} className="w-full h-40 object-contain rounded-lg" />
                  <div className="mt-3 text-lg font-semibold text-gray-800">Veer Bharat Range</div>
                  <div className="text-sm text-gray-600 mt-1">Oil • Rice • Noodles • Snacks</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS (bigger and premium) */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <FancyStat value="70–80 Cr" label="Turnover (est.)" />
          <FancyStat value="100%" label="Purity Promise" />
          <FancyStat value="Pan-India" label="Distribution" />
        </div>
      </section>

      {/* DETAILED LEGACY (larger text + image left) */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img src="/images/veer-products.png" alt="Veer legacy" className="w-full rounded-3xl object-contain shadow-2xl border" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-600 tracking-tight">THE LEGACY</h2>
            <p className="mt-6 text-2xl text-gray-800 font-semibold leading-relaxed max-w-xl">
              Our roots are built on trust — Veer Bharat started with a simple mission: bring affordable, high-quality food essentials to every Indian kitchen. Today we craft oils, rice, pastas and ready-to-cook items using modern facilities and time-honored care.
            </p>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-xl">
              From small neighbourhood stores to pan-India shelves, our products are lab-tested, packed hygienically and delivered with love. This is the legacy that continues to grow — one happy family at a time.
            </p>

            <div className="mt-8 flex gap-4">
              <Link href="/company-profile.pdf" className="inline-block px-6 py-3 rounded-2xl border border-gray-300 text-gray-800 bg-white font-semibold hover:shadow-md transition">Company Profile</Link>
              <Link href="/contact" className="inline-block px-6 py-3 rounded-2xl bg-red-600 text-white font-semibold shadow-lg hover:scale-105 transition">Meet Sales</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM & TESTIMONIALS (adds scroll length) */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-extrabold text-gray-800">Our Field Team & Customers</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <Testimonial quote="Their oil tastes pure and cooks beautifully." author="R. Sharma, Home Chef" img="/images/team1.jpg" />
          <Testimonial quote="Great distribution, always on time with samples." author="Store Manager — Delhi" img="/images/team2.jpg" />
          <Testimonial quote="Packaging is neat and product stays fresh." author="Mrs. Kaur" img="/images/team3.jpg" />
        </div>
      </section>

      {/* CERTIFICATIONS & FAQ (more length) */}
      <section className="max-w-7xl mx-auto px-6 py-12 bg-white/60 rounded-2xl border shadow-inner">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h4 className="text-2xl font-bold text-gray-800">Certifications</h4>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl shadow">ISO 9001</div>
              <div className="p-4 bg-white rounded-xl shadow">FSSAI Approved</div>
              <div className="p-4 bg-white rounded-xl shadow">Lab Tested</div>
              <div className="p-4 bg-white rounded-xl shadow">Hygienic Packaging</div>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-bold text-gray-800">FAQ</h4>
            <div className="mt-4 space-y-3">
              <details className="p-4 bg-white rounded-xl shadow">
                <summary className="font-semibold cursor-pointer">Where are your products manufactured?</summary>
                <div className="mt-2 text-sm text-gray-600">Manufactured at modern facilities across India following strict quality norms.</div>
              </details>
              <details className="p-4 bg-white rounded-xl shadow">
                <summary className="font-semibold cursor-pointer">Do you offer bulk distribution?</summary>
                <div className="mt-2 text-sm text-gray-600">Yes — we partner with distributors and retailers nationwide. Contact sales for details.</div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* STORIES / BLOG PREVIEW (adds content) */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-extrabold text-gray-800">Stories from the Field</h3>
        <div className="mt-6 grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-2xl border">
            <img src="/images/event1.jpg" alt="story" className="w-full rounded-lg mb-4 object-cover h-56" />
            <h5 className="text-2xl font-bold text-gray-800">Local markets, real reactions</h5>
            <p className="mt-3 text-gray-700">Our sampling teams bring live tasting and sincere feedback — building trust one household at a time.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-2xl border">
            <img src="/images/event2.jpg" alt="story2" className="w-full rounded-lg mb-4 object-cover h-56" />
            <h5 className="text-2xl font-bold text-gray-800">From pantry to plate</h5>
            <p className="mt-3 text-gray-700">Our evolution into cooking essentials is guided by families who tell us what matters most — taste and safety.</p>
          </div>
        </div>
      </section>

      {/* CTA & FOOTER */}
      <section id="contact" className="py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-2xl font-bold">Join the Veer Bharat journey</div>
            <div className="text-sm text-gray-700 mt-1">For distribution, partnerships, or product trials — get in touch.</div>
          </div>
          <div className="flex gap-3">
            <Link href="/contact" className="px-5 py-3 rounded-2xl bg-red-600 text-white font-semibold hover:scale-105 transition">Contact Us</Link>
            <Link href="/company-profile.pdf" className="px-5 py-3 rounded-2xl border border-gray-300 text-gray-800 hover:bg-gray-50 transition">Company Profile</Link>
          </div>
        </div>
      </section>

      {/* extra bottom spacer to increase scroll and luxe feel */}
      <div className="h-24" />
    </main>
  );
}
