"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

function RotatingShowcase({ items = [] }) {
  const n = items.length || 1;
  const [index, setIndex] = useState(0);
  const [radius, setRadius] = useState(160);
  const containerRef = useRef(null);
  const rotationDeg = index * (360 / n);

  useEffect(() => {
    function setFromWidth() {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const r = Math.min(Math.max(w * 0.18, 90), 240);
      setRadius(r);
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

  if (!items.length) return null;

  const longText = {
    goodness: "Veer Bharat Soyabean Oil is refined through advanced processing techniques that preserve essential nutrients while ensuring lightness and purity. Rich in polyunsaturated fatty acids including omega-3 and omega-6, this oil is low in saturated fats. Our rigorous quality checks guarantee that each bottle meets international standards for edible oils, making it a trusted choice for modern kitchens focused on health and taste.",
    benefits: "Light and versatile, soyabean oil is perfect for all types of cooking — from sautéing vegetables to deep frying snacks. Its neutral flavor doesn't overpower dishes, making it suitable for salad dressings and baking as well. The high vitamin E content acts as a natural antioxidant, supporting skin health and immunity. Its cholesterol-free formula makes it an excellent option for heart-healthy diets.",
    rating: "Customers across urban and semi-urban markets have praised Veer Bharat Soyabean Oil for its consistent quality and affordable pricing. Food bloggers recommend it for its versatility in both Indian and continental recipes. Health-conscious families appreciate the transparency in sourcing and processing. Our brand continues to grow as a reliable everyday cooking oil with strong repeat purchase rates."
  };

  return (
    <section ref={containerRef} className="max-w-7xl mx-auto px-6 mb-12">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-5">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1b2a3a]">{items[index].name}</h2>
          <p className="text-lg text-slate-700 max-w-xl">{items[index].short}</p>
          <div className="mt-4 p-6 bg-white rounded-2xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-2 text-green-700">Goodness</h3>
            <p className="text-sm text-slate-700 leading-relaxed">{longText.goodness}</p>
            <h3 className="text-xl font-semibold mt-4 mb-2 text-green-700">Benefits</h3>
            <p className="text-sm text-slate-700 leading-relaxed">{longText.benefits}</p>
            <h3 className="text-xl font-semibold mt-4 mb-2 text-green-700">Market Rating</h3>
            <p className="text-sm text-slate-700 leading-relaxed">{longText.rating}</p>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <button onClick={() => setIndex((i) => (i - 1 + n) % n)} aria-label="Previous" className="w-12 h-12 rounded-full bg-white shadow-md border hover:scale-105 transition flex items-center justify-center text-2xl">‹</button>
            <button onClick={() => setIndex((i) => (i + 1) % n)} aria-label="Next" className="w-12 h-12 rounded-full bg-white shadow-md border hover:scale-105 transition flex items-center justify-center text-2xl">›</button>
            <Link href="/products" className="ml-4 inline-flex items-center gap-2 rounded-full px-4 py-2 bg-gradient-to-r from-green-400 to-green-500 text-white font-semibold shadow hover:shadow-lg transition">View All Products →</Link>
          </div>
        </div>
        <div className="relative w-full flex justify-center md:justify-end">
          <div className="relative w-[320px] h-[320px] md:w-[520px] md:h-[520px] rounded-3xl p-6 flex items-center justify-center" style={{ borderRadius: 28 }}>
            <motion.svg viewBox="0 0 300 300" className="absolute inset-0 w-full h-full pointer-events-none" animate={{ rotate: rotationDeg * 0.25 }} transition={{ type: "spring", stiffness: 140, damping: 22 }}>
              <circle cx="150" cy="150" r="108" stroke="#4ADE80" strokeWidth="6" fill="none" strokeDasharray="6 8" />
            </motion.svg>
            {items.map((it, i) => {
              const baseAngle = (i * 360) / n;
              const totalAngle = baseAngle + rotationDeg;
              const rad = ((totalAngle - 90) * Math.PI) / 180;
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;
              const isActive = i === index;
              const size = isActive ? 220 : 96;
              const scale = isActive ? 1 : 0.78;
              return (
                <div key={it.id} className="absolute" style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: `translate(-50%, -50%) scale(${scale})`, transition: "left 0.45s, top 0.45s, transform 0.35s", zIndex: isActive ? 50 : 10, width: size, height: size }}>
                  <div className="relative rounded-2xl overflow-hidden bg-white" style={{ width: "100%", height: "100%", boxShadow: isActive ? "0 18px 34px rgba(0,0,0,0.18)" : "0 8px 18px rgba(0,0,0,0.09)", border: "1px solid rgba(0,0,0,0.06)" }}>
                    <Image src={it.image} alt={it.name} fill style={{ objectFit: "cover" }} priority={isActive} />
                  </div>
                </div>
              );
            })}
            <div className="absolute left-1/2 top-3 -translate-x-1/2 z-40">
              <div className="w-12 h-12 rounded-full overflow-hidden border shadow-sm bg-white">
                <Image src={items[(index + 1) % n].image} alt="mini" width={48} height={48} style={{ objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SoyabeanOilPage() {
  const [modalVideo, setModalVideo] = useState(null);
  const closeModal = () => setModalVideo(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const showcaseItems = [
    { id: 1, name: "Premium Refined Soyabean Oil", short: "Light, healthy oil perfect for everyday cooking", image: "/images/soyabean-oil-1.jpg" },
    { id: 2, name: "Heart-Healthy Soya Oil", short: "Rich in omega fatty acids and vitamin E", image: "/images/soyabean-oil-2.jpg" }
  ];

  const productVariants = [
    { id: 1, name: "Refined Soyabean Oil 1L", price: "150", image: "/images/soyabean-oil-1.jpg", description: "Light and versatile soyabean oil for all your cooking needs", video: "/videos/soyabean-demo.mp4" },
    { id: 2, name: "Premium Soyabean Oil 5L", price: "720", image: "/images/soyabean-oil-2.jpg", description: "Family pack of heart-healthy soyabean oil at great value", video: "/videos/soyabean-demo.mp4" }
  ];

  return (
    <main style={{ background: "#f0fdf4" }} className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6 relative">
        <RotatingShowcase items={showcaseItems} />
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Veer Bharat Soyabean Oil</h1>
          <p className="mt-2 text-gray-800 max-w-2xl mx-auto">Light, refined, and heart-healthy soyabean oil — your perfect companion for nutritious everyday cooking.</p>
        </header>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {productVariants.map((p) => (
            <article key={p.id} className="relative group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="relative h-64 md:h-72 w-full overflow-hidden">
                <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 md:p-6">
                <h2 className="text-xl md:text-2xl font-extrabold text-gray-900">{p.name}</h2>
                <p className="mt-1 text-gray-600 text-sm md:text-base">{p.description}</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-sm font-semibold px-3 py-1 rounded-full bg-green-50 text-green-700 border">₹{p.price}</span>
                  <span className="text-xs text-blue-600 font-medium">✓ Heart Healthy</span>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <button className="rounded-full px-4 py-2 bg-green-500 text-white font-bold shadow hover:bg-green-600 transition">Add to Cart</button>
                  <button onClick={() => setModalVideo({ src: p.video, name: p.name })} className="rounded-full px-3 py-2 border hover:bg-gray-50 transition">Demo</button>
                </div>
              </div>
            </article>
          ))}
        </div>
        <AnimatePresence>
          {modalVideo && (
            <motion.div key="video-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }} className="fixed inset-0 z-50 flex items-center justify-center p-6">
              <div className="absolute inset-0 bg-black/70" onClick={closeModal} />
              <motion.div initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.96, opacity: 0 }} transition={{ duration: 0.18 }} className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl bg-black">
                <div className="absolute right-3 top-3 z-20">
                  <button onClick={closeModal} className="rounded-full bg-white/90 px-3 py-2 hover:bg-white transition">Close</button>
                </div>
                <video src={modalVideo.src} controls autoPlay className="w-full h-[60vh] md:h-[72vh] object-cover bg-black" />
                <div className="p-4 bg-gradient-to-t from-black/40 to-transparent text-white flex items-center justify-between">
                  <div>
                    <div className="text-lg font-bold">{modalVideo.name}</div>
                    <div className="text-sm text-white/80">Veer Bharat — product demo</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

