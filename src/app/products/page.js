// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { products } from "../../data/products";

// export default function ProductsPage() {
//   return (
//     <main className="container py-10">
//       <header className="mb-6">
//         <h1 className="text-3xl sm:text-4xl font-extrabold">Our Full Range of Products</h1>
//         <p className="mt-1 text-ink-500">Click a product card to open its dedicated page.</p>
//       </header>

//       <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//         {products.map((p) => (
//           <Link
//             key={p.slug}
//             href={`/products/${p.slug}`}
//             className="card overflow-hidden hover:-translate-y-1 transition"
//           >
//             <div className="relative h-56">
//               <Image src={p.image} alt={p.name} fill className="object-cover" />
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-extrabold">{p.name}</h3>
//               <p className="mt-2 text-sm text-ink-500">{p.short}</p>
//               <div className="mt-3 flex flex-wrap gap-2">
//                 {p.highlights.slice(0, 3).map((h) => (
//                   <span key={h} className="badge">{h}</span>
//                 ))}
//               </div>
//               <span className="mt-4 inline-block font-semibold underline">Read more →</span>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </main>
//   );
// }



// src/app/products/page.js

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "../../data/products";

/* generateLongCaption unchanged (keeps ~170 words) */
function generateLongCaption(name = "This product", short = "") {
  const para1 = `${name} from Veer Bharat is crafted to blend tradition with modern quality. Built on a foundation of careful sourcing, stringent quality checks and culinary expertise, ${name} brings a dependable flavour profile to every kitchen. Whether used for everyday frying or for special family recipes, ${name} is formulated to retain natural aroma and provide consistent performance across cooking methods.`;
  const para2 = `Our approach for ${name} focuses on purity and usability: premium raw materials, temperature-controlled processing, and hygiene standards that meet modern food safety expectations. Families choose ${name} because it preserves the taste of home-cooked meals, helps create crisp, golden textures and retains nutrients where it matters.`;
  const para3 = `By choosing ${name}, you choose a product that balances health and flavour. ${short ? `${short}. ` : ""}From our small-batch pilot tests to large-scale distribution, every step is designed to ensure that each bottle carries the Veer Bharat promise: pure, consistent, and trusted. Add ${name} to your pantry and experience the difference in texture, aroma, and overall satisfaction in every dish.`;
  return `${para1} ${para2} ${para3}`;
}

export default function ProductsPage() {
  const [selectedSlug, setSelectedSlug] = useState(null); // which product shows in right-column
  const [modalVideo, setModalVideo] = useState(null); // { src, name }
  const closeModal = () => setModalVideo(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        closeModal();
        setSelectedSlug(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const selectedProduct = products.find((p) => p.slug === selectedSlug) || null;

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6 relative">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Our Full Range of Products
          </h1>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Handpicked edible oils & culinary essentials — crafted for taste, health and everyday
            confidence. Click a card to view details or the play button to see a product demo.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => {
            const captionPreview = (p.short || "").slice(0, 110); // short preview
            const videoSrc = p.video || "/product-demo.mp4";
            return (
              <article
                key={p.slug}
                className="relative group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-transform transform hover:-translate-y-2"
              >
                <div className="relative h-64 md:h-72 w-full overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="p-5 md:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-xl md:text-2xl font-extrabold text-gray-900">{p.name}</h2>
                      <p className="mt-1 text-gray-600 text-sm md:text-base max-w-xl">{captionPreview}{p.short && p.short.length > 110 ? "…" : ""}</p>
                      <div className="mt-3 flex items-center gap-2">
                        {p.price && (
                          <span className="text-sm font-semibold px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-100">
                            ₹{p.price}
                          </span>
                        )}
                        {p.qualityBadge && (
                          <span className="text-xs font-medium px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-100">
                            {p.qualityBadge}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-3">
                      <Link
                        href={`/products/${p.slug}`}
                        className="hidden md:inline-flex items-center gap-2 rounded-full px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold shadow"
                      >
                        View Product →
                      </Link>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setModalVideo({ src: videoSrc, name: p.name })}
                          className="inline-flex items-center gap-2 rounded-full px-3 py-2 border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition"
                          aria-label={`Play video for ${p.name}`}
                        >
                          <svg className="w-4 h-4 text-red-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                            <path d="M8 5v14l11-7z" />
                          </svg>
                          <span className="hidden sm:inline">Demo</span>
                        </button>

                        <button
                          onClick={() => setSelectedSlug(p.slug)}
                          className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-3 py-2 text-sm text-gray-800 hover:shadow transition"
                          aria-expanded={selectedSlug === p.slug}
                        >
                          Read Details
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* highlights row */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.highlights?.slice(0, 4).map((h, i) => (
                      <span key={i} className="bg-gray-100 text-gray-800 text-xs md:text-sm px-2 py-1 rounded-lg">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* DETAILS COLUMN: slides in from right on desktop, overlays full width on mobile */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.aside
              key="details-column"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "tween", duration: 0.35 }}
              className="fixed inset-y-0 right-0 z-50 w-full md:w-[44%] lg:w-[38%] bg-white shadow-2xl overflow-auto"
              aria-modal="true"
              role="dialog"
            >
              {/* overlay for mobile to dim background and allow clicking to close */}
              <div
                className="md:hidden absolute inset-0 bg-black/40"
                onClick={() => setSelectedSlug(null)}
              />

              <div className="relative p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-extrabold text-gray-900">{selectedProduct.name}</h3>
                    <p className="mt-1 text-gray-600 text-sm">{selectedProduct.short}</p>
                    <div className="mt-2 flex items-center gap-2">
                      {selectedProduct.price && (
                        <span className="text-lg font-bold px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-100">
                          ₹{selectedProduct.price}
                        </span>
                      )}
                      {selectedProduct.qualityBadge && (
                        <span className="text-sm font-medium px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-100">
                          {selectedProduct.qualityBadge}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSelectedSlug(null)}
                      className="rounded-full bg-gray-100 px-3 py-2 text-sm font-medium hover:scale-105 transition"
                      aria-label="Close details"
                    >
                      Close
                    </button>
                  </div>
                </div>

                <div className="mt-5 space-y-6 prose prose-sm md:prose-base max-w-none text-gray-700">
                  <p>{generateLongCaption(selectedProduct.name, selectedProduct.short)}</p>

                  <div className="w-full bg-gray-900 rounded-lg overflow-hidden">
                    <video
                      src={selectedProduct.video || "/product-demo.mp4"}
                      controls
                      className="w-full h-56 md:h-72 object-cover bg-black"
                      poster={selectedProduct.image}
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href={`/products/${selectedProduct.slug}`}
                      className="rounded-full px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold shadow"
                    >
                      Buy / Details
                    </Link>
                    <a
                      href="/company-profile.pdf"
                      className="rounded-full px-4 py-2 border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition"
                    >
                      Company Profile (PDF)
                    </a>
                    <button
                      onClick={() => setModalVideo({ src: selectedProduct.video || "/product-demo.mp4", name: selectedProduct.name })}
                      className="rounded-full px-4 py-2 border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition"
                    >
                      Open Demo in Modal
                    </button>
                  </div>

                  {/* extra product metadata */}
                  <div className="mt-2 grid grid-cols-2 gap-3 text-sm text-gray-600">
                    <div>
                      <div className="font-semibold text-gray-800">Net Quantity</div>
                      <div>{selectedProduct.net || "Not specified"}</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Packaging</div>
                      <div>{selectedProduct.packaging || "Bottle"}</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Sourced From</div>
                      <div>{selectedProduct.source || "Local partners"}</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Shelf Life</div>
                      <div>{selectedProduct.shelfLife || "See label"}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Video modal (plays product video) */}
        <AnimatePresence>
          {modalVideo && (
            <motion.div
              key="video-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6"
            >
              <div className="absolute inset-0 bg-black/70" onClick={closeModal} />

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl bg-black"
              >
                <div className="absolute right-3 top-3 z-20">
                  <button
                    onClick={closeModal}
                    className="rounded-full bg-white/90 px-3 py-2 text-black font-semibold shadow hover:scale-105 transition"
                  >
                    Close
                  </button>
                </div>

                <video
                  src={modalVideo.src}
                  controls
                  autoPlay
                  className="w-full h-[60vh] md:h-[72vh] object-cover bg-black"
                />
                <div className="p-4 bg-gradient-to-t from-black/40 to-transparent text-white flex items-center justify-between">
                  <div>
                    <div className="text-lg font-bold">{modalVideo.name}</div>
                    <div className="text-sm text-white/80">Veer Bharat — product demo</div>
                  </div>
                  <div className="text-sm text-white/80">Press Esc to close</div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
