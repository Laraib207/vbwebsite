import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WhyUsSection() {
  const cards = [
    {
      img: "/images/quality.jpg",
      title: "Quality",
      subtitle: "Premium Selection",
      desc: "Carefully selected, premium brown mustard seeds ensure that we deliver the highest-quality products. Our rigorous quality control process guarantees that only the finest seeds make it to your kitchen, providing you with oil that meets the highest standards of excellence."
    },
    {
      img: "/images/purity.jpg",
      title: "Purity",
      subtitle: "Double Filtered",
      desc: "Double filtration allows us to deliver 100% pure mustard oil, free from any additives. Our state-of-the-art filtration technology removes all impurities while preserving the natural nutrients and authentic flavor, ensuring you get nothing but pure, unadulterated goodness in every drop."
    },
    {
      img: "/images/flavour.jpg",
      title: "Flavour",
      subtitle: "Authentic Taste",
      desc: "Millions recognise our brand for its exceptional taste and pungency. The traditional cold-pressed extraction method we use retains the natural aroma and distinctive sharp flavor that makes our mustard oil the preferred choice for authentic Indian cooking and health-conscious consumers."
    }
  ];

  return (
    <section className="py-20 bg-[#f5f1e8]">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Header + long descriptive paragraph (200+ words) */}
        <motion.h2
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold mb-4 text-center text-[#0b2b52]"
        >
          Why Veer Bharat Mustard Oil
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="max-w-4xl mx-auto text-center text-gray-700 mb-12 text-lg leading-relaxed"
          style={{ textAlign: "justify" }}
        >
          At Veer Bharat, we believe that great food begins with great ingredients, and our commitment to excellence drives every step of our production process. For generations, we have been dedicated to bringing you the finest mustard oil, crafted with traditional methods and modern precision. Our journey starts with the careful selection of premium brown mustard seeds, sourced from trusted farmers who share our passion for quality. These seeds are then processed using time-honored cold-pressing techniques that preserve their natural nutrients, authentic flavor, and therapeutic properties. What sets us apart is our unwavering dedication to purity—our advanced double-filtration system ensures that you receive 100% pure mustard oil, completely free from additives or chemicals. This meticulous process not only guarantees exceptional quality but also delivers the distinctive pungent aroma and robust taste that millions of families across India have come to trust and love. Whether you're preparing traditional Indian cuisine, seeking natural health benefits, or simply looking for an oil that brings authentic flavor to your dishes, Veer Bharat Mustard Oil stands as your reliable partner in the kitchen, combining heritage with innovation to serve you better every single day.
        </motion.p>

        {/* Three feature cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-amber-100 bg-white/60 backdrop-blur-sm transform transition hover:-translate-y-2 duration-300"
            >
              {/* Large image area */}
              <div
                className="relative w-full"
                style={{ aspectRatio: "1280/700", minHeight: 180 }}
              >
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 pointer-events-none" />
              </div>

              {/* Wavy divider */}
              <div className="absolute left-0 right-0 -mt-6 pointer-events-none">
                <svg viewBox="0 0 1440 80" className="w-full h-8 md:h-10" preserveAspectRatio="none" aria-hidden>
                  <path d="M0,40 C120,90 360,0 720,40 C1080,80 1320,10 1440,40 L1440,80 L0,80 Z" fill="#fffaf0" />
                </svg>
              </div>

              {/* Content */}
              <div className="bg-[#fffaf0] px-6 py-8 pt-12 min-h-[260px]">
                <h3 className="text-2xl md:text-3xl font-extrabold mb-1 text-amber-900">{c.title}</h3>
                <div className="text-sm md:text-base font-semibold text-amber-700 mb-4">{c.subtitle}</div>

                <p className="text-gray-700 leading-relaxed text-sm md:text-base" style={{ textAlign: "justify" }}>
                  {c.desc}
                </p>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <a
                    href="/products"
                    className="inline-block text-sm md:text-base font-bold rounded-full bg-amber-500 px-5 py-3 text-black shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition"
                    aria-label={`Explore products - ${c.title}`}
                  >
                    Explore Products
                  </a>

                  <a
                    href="/contact"
                    className="text-sm md:text-base text-amber-900 underline hover:text-amber-700"
                  >
                    Contact Us
                  </a>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute left-5 top-5 z-20">
                <div className="inline-flex items-center gap-2 bg-white/95 px-3 py-1 rounded-full shadow-sm border border-amber-100">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <circle cx="12" cy="12" r="9" stroke="#B45309" strokeWidth="1.2" />
                    <path d="M8 12l2 2 4-4" stroke="#B45309" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-xs font-semibold text-amber-900">Quality Certified</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA row below cards - center aligned */}
        <div className="mt-12 text-center">
          <h4 className="text-xl font-bold mb-3 text-[#0b2b52]">Discover our full range</h4>
          <p className="max-w-2xl mx-auto text-gray-600 mb-6">From cold-pressed mustard to high-stability frying oils — find the right oil for your kitchen. Click any category below to explore detailed product pages and specifications.</p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="/products/kachi-ghani" className="px-4 py-2 rounded-full bg-[#fef3d9] text-[#0b2b52] font-semibold shadow-sm hover:scale-105 transition">Kachi Ghani Mustard Oil</a>
            <a href="/products/soybean" className="px-4 py-2 rounded-full bg-[#fff3f0] text-[#0b2b52] font-semibold shadow-sm hover:scale-105 transition">Soybean Oil</a>
            <a href="/products/palm" className="px-4 py-2 rounded-full bg-[#eef9ff] text-[#0b2b52] font-semibold shadow-sm hover:scale-105 transition">Palm / Pam Oil</a>
            <a href="/products/rice-bran" className="px-4 py-2 rounded-full bg-[#f6fff4] text-[#0b2b52] font-semibold shadow-sm hover:scale-105 transition">Rice Bran Oil</a>
          </div>
        </div>
      </div>

      {/* Category Section immediately below */}
      {/* <CategorySection /> */}
    </section>
  );
}