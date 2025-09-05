// src/app/about/page.js  (or src/pages/About.jsx)
// Make sure to `npm install framer-motion` and put images in public:
// /public/event1.jpg, /public/event2.jpg, /public/team1.jpg, /public/veer-logo.png

"use client";

import React from "react";
import { motion } from "framer-motion";

/* ============================
   Small reusable Card (player/profile)
   ============================ */
function SpotlightCard({ img = "/team1.jpg", title, subtitle, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.02, y: -6 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="bg-white rounded-2xl shadow-2xl overflow-hidden relative border border-white/60"
    >
      <div className="relative h-56 sm:h-64 lg:h-72">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-90" />
        <div className="absolute left-4 bottom-4">
          <div className="text-white font-bold text-xl md:text-2xl drop-shadow">{title}</div>
          {subtitle && <div className="text-sm text-white/90 mt-1 drop-shadow">{subtitle}</div>}
        </div>
      </div>

      <div className="p-5">
        <div className="text-sm text-gray-600">{children}</div>
        <div className="mt-4 flex gap-3">
          <button className="px-4 py-2 rounded-full bg-red-600 text-white font-semibold shadow hover:scale-105 transition">
            Learn More
          </button>
          <button className="px-4 py-2 rounded-full border border-gray-200 text-gray-800 bg-white hover:shadow-md transition">
            Contact
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ============================
   Horizontal slider / gallery
   Opens left-right (slide) when in view
   ============================ */
function GallerySlider({ images = [] }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="overflow-x-auto no-scrollbar py-4"
    >
      <div className="flex gap-6 px-2">
        {images.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="min-w-[280px] md:min-w-[340px] bg-white/60 rounded-2xl p-3 shadow-lg border"
          >
            <div className="h-44 md:h-52 overflow-hidden rounded-xl">
              <img src={img} alt={`event-${i}`} className="w-full h-full object-cover" />
            </div>
            <div className="mt-3">
              <div className="font-semibold text-gray-800">Veer Bharat Display</div>
              <div className="text-sm text-gray-600 mt-1">On-ground sampling & exhibition moment</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* ============================
   Blog-style card (expensive feel)
   ============================ */
function BlogCard({ title, excerpt }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-white/90 to-white rounded-2xl p-6 shadow-2xl border"
    >
      <h3 className="text-2xl font-extrabold text-red-600">{title}</h3>
      <p className="mt-3 text-gray-700 leading-relaxed">{excerpt}</p>
      <div className="mt-6 flex gap-3">
        <a className="text-sm font-semibold text-red-600 hover:underline" href="#">
          Read more →
        </a>
      </div>
    </motion.article>
  );
}

/* ============================
   Main About page component
   ============================ */
export default function About() {
  return (
    <main className="bg-gradient-to-b from-yellow-50 via-yellow-100 to-white min-h-screen text-gray-800">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          {/* Left: text + logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <img src="/veer-logo.png" alt="Veer Bharat" className="w-20 h-20 object-contain" />
              <div>
                <div className="text-sm text-gray-600 uppercase tracking-widest">Sri Shyam Agro Industries</div>
                <div className="text-3xl md:text-4xl font-extrabold text-red-600">Veer Bharat</div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              We deliver purity. We deliver trust.
            </h1>

            <p className="text-lg text-gray-700 max-w-xl leading-relaxed">
              Veer Bharat blends tradition and modern quality — from premium mustard oils to ready-to-cook ranges. We craft every product with care and the highest standards, so every family can enjoy honest, delightful food.
            </p>

            <div className="flex gap-4 mt-4">
              <a className="inline-block px-6 py-3 rounded-2xl bg-red-600 text-white font-semibold shadow hover:scale-105 transition" href="#">
                View Products
              </a>
              <a className="inline-block px-6 py-3 rounded-2xl border border-red-600 text-red-600 bg-white/80 hover:bg-red-50 transition" href="#">
                Contact Sales
              </a>
            </div>

            {/* A short "chat-like" line in English (polished and readable) */}
            <div className="mt-6 bg-gradient-to-r from-white/50 to-white/30 p-4 rounded-xl border shadow-sm">
              <div className="text-sm text-gray-600 italic">
                “Warm greetings from Team Veer Bharat, Delhi — bringing flavour & smiles to every home, one dish at a time.”
              </div>
            </div>
          </motion.div>

          {/* Right: Spotlight / Nehru portrait card with small product row */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <SpotlightCard
              img="/event1.jpg"
              title="Veer Bharat — At Exhibitions"
              subtitle="Product displays & sampling"
            >
              Our on-ground teams in Delhi and across regions present live tasting, in-store sampling and product education — connecting families with quality food.
            </SpotlightCard>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-4 shadow-lg border">
                <div className="text-sm text-gray-500">Recent Event</div>
                <div className="text-lg font-semibold text-gray-800">National Food Expo</div>
                <div className="mt-3 text-sm text-gray-600">Interactive demos, retail partnerships & distribution drives.</div>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-lg border">
                <div className="text-sm text-gray-500">Our Promise</div>
                <div className="text-lg font-semibold text-gray-800">100% Purity</div>
                <div className="mt-3 text-sm text-gray-600">Cold-pressed, lab-tested, and loved by households.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HORIZONTAL GALLERY (opens left→right when seen) */}
      <section className="max-w-7xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Moments — Live Exhibitions & Sampling</h2>
        <GallerySlider images={["/event1.jpg", "/event2.jpg", "/event1.jpg"]} />
      </section>

      {/* FEATURE HIGHLIGHTS (stats) */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { value: "70–80 Cr", label: "Turnover (est.)" },
            { value: "100%", label: "Purity Promise" },
            { value: "Pan-India", label: "Distribution" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-2xl transition"
            >
              <div className="text-3xl font-extrabold text-red-600">{s.value}</div>
              <div className="text-sm text-gray-600 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BLOG/ARTICLE AREA — expensive editorial style */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Stories from the Field</h2>

        <div className="grid gap-6 lg:grid-cols-2">
          <BlogCard
            title="How our Delhi team brought flavour to local markets"
            excerpt="Our Delhi activation team travelled store-to-store, serving warm samples and explaining the craft behind our oils — one dish at a time. Consumers loved the taste and authenticity, and retail partners asked for expanded listings."
          />
          <BlogCard
            title="From trading to cuisine: The evolution of Veer Bharat"
            excerpt="What started as trade in cereals and grains became a journey into food manufacturing. Today we celebrate the families that trusted our products and inspired our product expansion."
          />
        </div>
      </section>

      {/* TIMELINE / JOURNEY — classy */}
      <section className="bg-gradient-to-b from-white to-red-50 py-12">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center">Journey So Far</h2>

          <div className="space-y-4">
            {[
              { year: "2014", text: "Started trading rice, wheat & corn" },
              { year: "2018", text: "Expanded trading of oil refineries" },
              { year: "2022", text: "Launched Veer Bharat brand" },
              { year: "2025", text: "Scaling product lines & retail presence" },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="bg-white rounded-xl p-5 shadow hover:shadow-lg transition"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500">{t.year}</div>
                    <div className="text-md font-semibold text-gray-700">{t.text}</div>
                  </div>
                  <div className="text-red-600 font-bold">•</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA & Footer-ish */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xl font-bold">Join the Veer Bharat journey</div>
            <div className="text-sm text-gray-600 mt-1">
              For distribution, partnerships or product trials — get in touch.
            </div>
          </div>
          <div className="flex gap-3">
            <a className="px-5 py-3 rounded-2xl bg-red-600 text-white font-semibold hover:scale-105 transition" href="/contact">
              Contact Us
            </a>
            <a className="px-5 py-3 rounded-2xl border border-gray-300 text-gray-800 hover:bg-gray-50 transition" href="/company-profile.pdf">
              Company Profile
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
