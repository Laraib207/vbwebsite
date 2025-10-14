"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Showcase Items Data
const showcaseItems = [
  {
    id: 1,
    name: "Premium Refined Palm Oil",
    short: "High-stability oil perfect for deep frying and baking",
    image: "/images/palm-oil-1.jpg",
  },
  {
    id: 2,
    name: "Golden Palm Cooking Oil",
    short: "Rich in vitamins and ideal for commercial kitchens",
    image: "/images/palm-oil-2.jpg",
  },
];

// Product Variants Data
const productVariants = [
  {
    id: 1,
    name: "Refined Palm Oil 1L",
    price: "140",
    image: "/images/palm-oil-1.jpg",
    description: "Stable and versatile palm oil for all high-temperature cooking",
    video: "/videos/palm-demo.mp4",
  },
  {
    id: 2,
    name: "Premium Palm Oil 5L",
    price: "670",
    image: "/images/palm-oil-2.jpg",
    description: "Economical family pack for everyday cooking and frying needs",
    video: "/videos/palm-demo.mp4",
  },
];

// FIXED Rotating Showcase Component - Same structure as products.js
function RotatingShowcase({ items = [] }) {
  const n = items.length || 1;
  const [index, setIndex] = useState(0);
  const [radius, setRadius] = useState(140);
  const containerRef = useRef(null);

  const rotationDeg = index * (360 / n);

  useEffect(() => {
    function setFromWidth() {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      setRadius(Math.min(Math.max(w * 0.18, 70), 180));
    }
    setFromWidth();
    window.addEventListener("resize", setFromWidth);
    return () => window.removeEventListener("resize", setFromWidth);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % n);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + n) % n);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [n]);

  const longText = {
    goodness: "Veer Bharat Palm Oil is sourced from certified sustainable plantations and refined using state-of-the-art facilities that maintain nutritional integrity. Rich in vitamin A and E, our palm oil undergoes multiple filtration stages to ensure clarity and purity.",
    benefits: "With its high stability at elevated temperatures, palm oil is ideal for deep frying, baking, and commercial food preparation. It imparts a rich golden color and enhances texture in baked goods, making it popular among professional chefs and home bakers alike.",
    rating: "Veer Bharat Palm Oil has gained strong traction in the food service industry and among households looking for economical yet quality cooking oil. Restaurant owners appreciate its cost-effectiveness and performance in high-volume frying."
  };

  if (!items.length) return null;

  return (
    <section ref={containerRef} className="max-w-7xl mx-auto px-2 sm:px-4 mb-14 w-full relative">
      <div className="grid gap-10 md:grid-cols-2 items-center">
        {/* LEFT: Product Text */}
        <div className="space-y-5 order-2 md:order-1">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1b2a3a] tracking-tight">
            {items[index].name}
          </h2>
          <p className="text-base md:text-xl text-slate-700 font-medium">
            {items[index].short}
          </p>
          <div className="mt-4 p-5 sm:p-8 bg-white rounded-3xl shadow-xl border-2 border-orange-100">
            <h3 className="text-lg md:text-2xl font-bold mb-2 text-orange-600 flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Goodness
            </h3>
            <p className="text-base text-slate-700">{longText.goodness}</p>
            <h3 className="text-lg md:text-2xl font-bold mt-5 mb-2 text-orange-600 flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Benefits
            </h3>
            <p className="text-base text-slate-700">{longText.benefits}</p>
            <h3 className="text-lg md:text-2xl font-bold mt-5 mb-2 text-orange-600 flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Market Rating
            </h3>
            <p className="text-base text-slate-700">{longText.rating}</p>
          </div>
          <div className="mt-5">
            <button className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg">
              View All Products →
            </button>
          </div>
        </div>

        {/* RIGHT: Orbit - FIXED Z-INDEX! */}
        <div className="relative flex items-center justify-center w-full min-h-[320px] md:min-h-[480px] order-1 md:order-2">
          <button
            onClick={() => setIndex((i) => (i - 1 + n) % n)}
            aria-label="Previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg border-2 border-orange-400 hover:bg-orange-50 flex items-center justify-center text-2xl font-bold text-orange-600 md:static md:left-0"
          >
            ‹
          </button>
          <div className="relative w-[220px] h-[220px] xs:w-[270px] xs:h-[270px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] rounded-3xl flex items-center justify-center">
            {/* Animated background - Z-INDEX 1 */}
            <motion.div
              className="absolute inset-0 rounded-full z-[1]"
              style={{ background: "radial-gradient(circle, rgba(251,146,60,0.15) 0%, rgba(251,146,60,0.08) 70%, transparent 100%)" }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Dashed orbit - Z-INDEX 2 */}
            <motion.svg
              viewBox="0 0 300 300"
              className="absolute inset-0 w-full h-full pointer-events-none z-[2]"
              animate={{ rotate: rotationDeg * 0.25 }}
              transition={{ type: "spring", stiffness: 140, damping: 22 }}
            >
              <defs>
                <filter id="glow"><feGaussianBlur stdDeviation="3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
              </defs>
              <circle cx="150" cy="150" r="110" stroke="#FB923C" strokeWidth="6" fill="none" strokeDasharray="8 12" filter="url(#glow)" opacity="0.8"/>
            </motion.svg>
            {/* Product images spaced around - Z-INDEX 3 */}
            {items.map((it, i) => {
              const baseAngle = (i * 360) / n;
              const totalAngle = baseAngle + rotationDeg;
              const rad = ((totalAngle - 90) * Math.PI) / 180;
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;
              const isActive = i === index;
              const size = isActive ? 120 : 65;
              const scale = isActive ? 1 : 0.7;
              return (
                <div
                  key={it.id}
                  className="absolute cursor-pointer z-[3]"
                  onClick={() => setIndex(i)}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: `translate(-50%, -50%) scale(${scale})`,
                    width: size,
                    height: size,
                  }}
                >
                  <div
                    className="relative rounded-2xl overflow-hidden bg-white"
                    style={{
                      width: "100%",
                      height: "100%",
                      boxShadow: isActive
                        ? "0 18px 36px rgba(251, 146, 60, 0.22), 0 5px 15px rgba(0,0,0,0.10)"
                        : "0 6px 18px rgba(0,0,0,0.10)",
                      border: isActive ? "2.5px solid #FB923C" : "1.5px solid rgba(0,0,0,0.08)",
                    }}
                  >
                    <img
                      src={it.image}
                      alt={it.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      className={isActive ? "brightness-105" : "brightness-95"}
                    />
                  </div>
                </div>
              );
            })}
            {/* Mini at top center - Z-INDEX 4 */}
            <div className="absolute left-1/2 top-3 -translate-x-1/2 z-[4]">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-lg bg-white ring-2 ring-orange-400/30">
                <img
                  src={items[(index + 1) % n].image}
                  alt="mini"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
          <button
            onClick={() => setIndex((i) => (i + 1) % n)}
            aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg border-2 border-orange-400 hover:bg-orange-50 flex items-center justify-center text-2xl font-bold text-orange-600 md:static md:right-0"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

// Why Choose Section
function WhyChooseSection() {
  const features = [
    {
      icon: "🔥",
      title: "High Stability",
      description: "Perfect for high-temperature cooking and deep frying without breaking down or producing smoke"
    },
    {
      icon: "🌟",
      title: "Vitamin Rich",
      description: "Naturally rich in Vitamin A and E, providing essential nutrients for healthy living"
    },
    {
      icon: "🍰",
      title: "Perfect for Baking",
      description: "Semi-solid consistency at room temperature makes it ideal for pastries and traditional sweets"
    },
    {
      icon: "💰",
      title: "Cost Effective",
      description: "Economical choice for commercial kitchens and bulk cooking without compromising quality"
    },
    {
      icon: "✨",
      title: "Golden Color",
      description: "Imparts beautiful golden hue to food, enhancing visual appeal and texture"
    },
    {
      icon: "✅",
      title: "Certified Quality",
      description: "Sourced from sustainable plantations with rigorous quality control at every stage"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 mb-20">
      <div className="text-center mb-14">
        <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg mb-6 shadow-xl">
          ✨ Why Choose Palm Oil
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
          Why Choose Veer Bharat Palm Oil?
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
          Experience superior stability, rich texture, and unmatched value in every drop
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -8 }}
            className="p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-orange-400"
          >
            <div className="text-6xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-black text-gray-900 mb-3">{feature.title}</h3>
            <p className="text-base text-gray-600 leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Product Variants Grid
function ProductVariantsGrid({ products }) {
  const [modalVideo, setModalVideo] = useState(null);

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Choose Your Perfect Size
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
            From home kitchens to commercial operations - find the right size for your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden border-2 border-transparent hover:border-orange-400 transition-all duration-500"
            >
              <div className="relative h-80 w-full overflow-hidden bg-gradient-to-br from-orange-50 to-red-50">
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  className="group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                  {product.description}
                </p>

                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl font-black text-orange-600">₹{product.price}</span>
                  <span className="text-xs text-purple-600 font-medium">✓ High Stability</span>
                </div>

                <div className="flex items-center gap-3">
                  <button className="flex-1 text-center rounded-full px-6 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    🛒 Add to Cart
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setModalVideo({ src: product.video, name: product.name })}
                    className="rounded-full px-5 py-4 border-2 border-orange-500 text-orange-600 font-bold hover:bg-orange-50 transition-all text-lg"
                  >
                    🎥
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Video Modal - Z-INDEX 300 */}
      <AnimatePresence>
        {modalVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setModalVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full rounded-3xl overflow-hidden shadow-2xl bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalVideo(null)}
                className="absolute right-5 top-5 z-20 rounded-full bg-white/90 px-6 py-3 text-lg font-bold hover:bg-white transition"
              >
                ✕ Close
              </button>
              <video
                src={modalVideo.src}
                controls
                autoPlay
                className="w-full h-[70vh] object-cover"
              />
              <div className="p-6 bg-gradient-to-t from-black to-transparent text-white">
                <div className="text-2xl font-bold">{modalVideo.name}</div>
                <div className="text-lg text-white/80 mt-1">
                  Veer Bharat — Premium Palm Oil Demo
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Main Component
export default function PalmOilPage() {
  return (
    <main style={{ background: "#fff7ed" }} className="min-h-screen py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 relative w-full">
        {/* Page Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-7 py-4 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 text-white font-bold text-xl mb-8 shadow-2xl">
              🔥 Veer Bharat Premium Palm Oil
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              High-Stability Cooking Oil
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-medium leading-relaxed">
              Perfect for deep frying, baking, and commercial food preparation with rich golden color
            </p>
          </motion.div>
        </div>

        {/* Rotating Showcase - FIXED */}
        <RotatingShowcase items={showcaseItems} />

        {/* Why Choose Section */}
        <WhyChooseSection />

        {/* Product Variants Grid */}
        <ProductVariantsGrid products={productVariants} />

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <div className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Ready for Superior Cooking?</h2>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Order now and experience the stability and richness of premium palm oil
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-10 py-5 rounded-full bg-white text-orange-600 text-xl font-bold shadow-xl hover:scale-105 transition-all duration-300">
                🛒 Order Now
              </button>
              <button className="px-10 py-5 rounded-full border-2 border-white text-white text-xl font-bold hover:bg-white/10 transition-all duration-300">
                📞 Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}