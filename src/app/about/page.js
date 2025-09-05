// // src/pages/About.jsx

"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="bg-gradient-to-b from-yellow-50 via-yellow-100 to-white min-h-screen">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h1 className="text-5xl font-extrabold text-red-600 mb-4">
            About Veer Bharat
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Veer Bharat (Sri Shyam Agro Industries) is one of India’s
            fastest-growing FMCG companies. With our flagship products like
            <span className="font-semibold"> Mustard Oil</span>,
            <span className="font-semibold"> Soyabean Oil</span> and more, we
            are redefining purity, health, and taste. Founded in 2022, Veer
            Bharat is committed to bringing quality and tradition to every
            kitchen in India.
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <img
            src="/team1.jpg"
            alt="Our Team"
            className="rounded-2xl shadow-2xl w-2/3 hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Founded", value: "2022", desc: "Young & growing brand" },
            { title: "Products", value: "10+", desc: "Pure & authentic oils" },
            { title: "Presence", value: "Pan India", desc: "Trusted by families" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow hover:shadow-2xl transition cursor-pointer"
            >
              <h3 className="text-3xl font-bold text-red-600">{stat.value}</h3>
              <p className="text-lg font-semibold text-gray-800">{stat.title}</p>
              <p className="text-sm text-gray-600">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BLOG STYLE SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-gray-700 space-y-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
          <p className="leading-relaxed">
            From humble beginnings in trading agricultural products, Veer Bharat
            has evolved into a trusted FMCG brand. Our journey is rooted in the
            values of integrity, quality and a deep respect for tradition.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Philosophy</h2>
          <p className="leading-relaxed">
            We believe the best food comes from honest ingredients, careful
            processing and respect for culinary heritage. Every drop of oil we
            produce carries the essence of purity and health.
          </p>
        </motion.div>
      </section>

      {/* TIMELINE */}
      <section className="bg-red-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
            Journey So Far
          </h2>
          <div className="space-y-6">
            {[
              { year: "2014", note: "Started trading rice, wheat & corn" },
              { year: "2018", note: "Expanded trading of oil refineries" },
              { year: "2022", note: "Launched Veer Bharat brand" },
              { year: "2025", note: "Expanding product lines" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-5 shadow hover:shadow-lg transition"
              >
                <div className="flex items-center justify-between">
                  <span className="text-red-600 font-bold">{item.year}</span>
                  <p className="text-gray-700">{item.note}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Veer Bharat Journey</h2>
          <p className="mb-6">
            For distribution, partnerships or to try our products — we’d love to
            hear from you.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-white text-red-600 font-semibold rounded-2xl shadow hover:scale-105 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
