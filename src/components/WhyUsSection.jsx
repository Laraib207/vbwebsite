// import React from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// export default function WhyUsSection() {
//   const cards = [
//     {
//       img: "/images/quality.jpg",
//       title: "Quality",
//       subtitle: "Premium Selection",
//       desc: "Carefully selected, premium brown mustard seeds ensure that we deliver the highest-quality products. Our rigorous quality control process guarantees that only the finest seeds make it to your kitchen, providing you with oil that meets the highest standards of excellence."
//     },
//     {
//       img: "/images/purity.jpg",
//       title: "Purity",
//       subtitle: "Double Filtered",
//       desc: "Double filtration allows us to deliver 100% pure mustard oil, free from any additives. Our state-of-the-art filtration technology removes all impurities while preserving the natural nutrients and authentic flavor, ensuring you get nothing but pure, unadulterated goodness in every drop."
//     },
//     {
//       img: "/images/flavour.jpg",
//       title: "Flavour",
//       subtitle: "Authentic Taste",
//       desc: "Millions recognise our brand for its exceptional taste and pungency. The traditional cold-pressed extraction method we use retains the natural aroma and distinctive sharp flavor that makes our mustard oil the preferred choice for authentic Indian cooking and health-conscious consumers."
//     }
//   ];

//   return (
//     <section className="py-20 bg-[#f5f1e8]">
//       <div className="container mx-auto max-w-7xl px-6">
//         {/* Header + long descriptive paragraph (200+ words) */}
//         <motion.h2
//           initial={{ y: 16, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           className="text-3xl md:text-4xl font-extrabold mb-4 text-center text-[#0b2b52]"
//         >
//           Why Veer Bharat Mustard Oil
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.08 }}
//           className="max-w-4xl mx-auto text-center text-gray-700 mb-12 text-lg leading-relaxed"
//           style={{ textAlign: "justify" }}
//         >
//           At Veer Bharat, we believe that great food begins with great ingredients, and our commitment to excellence drives every step of our production process. For generations, we have been dedicated to bringing you the finest mustard oil, crafted with traditional methods and modern precision. Our journey starts with the careful selection of premium brown mustard seeds, sourced from trusted farmers who share our passion for quality. These seeds are then processed using time-honored cold-pressing techniques that preserve their natural nutrients, authentic flavor, and therapeutic properties. What sets us apart is our unwavering dedication to purity—our advanced double-filtration system ensures that you receive 100% pure mustard oil, completely free from additives or chemicals. This meticulous process not only guarantees exceptional quality but also delivers the distinctive pungent aroma and robust taste that millions of families across India have come to trust and love. Whether you're preparing traditional Indian cuisine, seeking natural health benefits, or simply looking for an oil that brings authentic flavor to your dishes, Veer Bharat Mustard Oil stands as your reliable partner in the kitchen, combining heritage with innovation to serve you better every single day.
//         </motion.p>

//         {/* Three feature cards */}
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {cards.map((c, i) => (
//             <motion.article
//               key={i}
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.08 }}
//               className="relative rounded-2xl overflow-hidden shadow-2xl border border-amber-100 bg-white/60 backdrop-blur-sm transform transition hover:-translate-y-2 duration-300"
//             >
//               {/* Large image area */}
//               <div
//                 className="relative w-full"
//                 style={{ aspectRatio: "1280/700", minHeight: 180 }}
//               >
//                 <Image
//                   src={c.img}
//                   alt={c.title}
//                   fill
//                   className="object-cover object-center transition-transform duration-700 hover:scale-105"
//                   unoptimized
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 pointer-events-none" />
//               </div>

//               {/* Wavy divider */}
//               <div className="absolute left-0 right-0 -mt-6 pointer-events-none">
//                 <svg viewBox="0 0 1440 80" className="w-full h-8 md:h-10" preserveAspectRatio="none" aria-hidden>
//                   <path d="M0,40 C120,90 360,0 720,40 C1080,80 1320,10 1440,40 L1440,80 L0,80 Z" fill="#fffaf0" />
//                 </svg>
//               </div>

//               {/* Content */}
//               <div className="bg-[#fffaf0] px-6 py-8 pt-12 min-h-[260px]">
//                 <h3 className="text-2xl md:text-3xl font-extrabold mb-1 text-amber-900">{c.title}</h3>
//                 <div className="text-sm md:text-base font-semibold text-amber-700 mb-4">{c.subtitle}</div>

//                 <p className="text-gray-700 leading-relaxed text-sm md:text-base" style={{ textAlign: "justify" }}>
//                   {c.desc}
//                 </p>

//                 <div className="mt-6 flex items-center justify-between gap-4">
//                   <a
//                     href="/products"
//                     className="inline-block text-sm md:text-base font-bold rounded-full bg-amber-500 px-5 py-3 text-black shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition"
//                     aria-label={`Explore products - ${c.title}`}
//                   >
//                     Explore Products
//                   </a>

//                   <a
//                     href="/contact"
//                     className="text-sm md:text-base text-amber-900 underline hover:text-amber-700"
//                   >
//                     Contact Us
//                   </a>
//                 </div>
//               </div>

//               {/* Badge */}
//               <div className="absolute left-5 top-5 z-20">
//                 <div className="inline-flex items-center gap-2 bg-white/95 px-3 py-1 rounded-full shadow-sm border border-amber-100">
//                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
//                     <circle cx="12" cy="12" r="9" stroke="#B45309" strokeWidth="1.2" />
//                     <path d="M8 12l2 2 4-4" stroke="#B45309" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
//                   </svg>
//                   <span className="text-xs font-semibold text-amber-900">Quality Certified</span>
//                 </div>
//               </div>
//             </motion.article>
//           ))}
//         </div>

//         {/* CTA row below cards - center aligned */}
//         <div className="mt-12 text-center">
//           <h4 className="text-xl font-bold mb-3 text-[#0b2b52]">Discover our full range</h4>
//           <p className="max-w-2xl mx-auto text-gray-600 mb-6">From cold-pressed mustard to high-stability frying oils — find the right oil for your kitchen. Click any category below to explore detailed product pages and specifications.</p>

//           <div className="flex flex-wrap items-center justify-center gap-3">
//             <a href="/products/kachi-ghani" className="px-4 py-2 rounded-full bg-[#fef3d9] text-[#0b2b52] font-semibold shadow-sm hover:scale-105 transition">Kachi Ghani Mustard Oil</a>
//             <a href="/products/soybean" className="px-4 py-2 rounded-full bg-[#fff3f0] text-[#0b2b52] font-semibold shadow-sm hover:scale-105 transition">Soybean Oil</a>
//             <a href="/products/palm" className="px-4 py-2 rounded-full bg-[#eef9ff] text-[#0b2b52] font-semibold shadow-sm hover:scale-105 transition">Palm / Pam Oil</a>
//             <a href="/products/rice-bran" className="px-4 py-2 rounded-full bg-[#f6fff4] text-[#0b2b52] font-semibold shadow-sm hover:scale-105 transition">Rice Bran Oil</a>
//           </div>
//         </div>
//       </div>

//       {/* Category Section immediately below */}
//       {/* <CategorySection /> */}
//     </section>
//   );
// }


import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WhyUsSection() {
  const cards = [
    {
      img: "/images/quality.jpg",
      title: "Quality",
      subtitle: "Premium Selection",
      desc: "Carefully selected, premium brown mustard seeds ensure that we deliver the highest-quality products. Our rigorous quality control process guarantees that only the finest seeds make it to your kitchen, providing you with oil that meets the highest standards of excellence.",
      icon: ""
    },
    {
      img: "/images/purity.jpg",
      title: "Purity",
      subtitle: "Double Filtered",
      desc: "Double filtration allows us to deliver 100% pure mustard oil, free from any additives. Our state-of-the-art filtration technology removes all impurities while preserving the natural nutrients and authentic flavor, ensuring you get nothing but pure, unadulterated goodness in every drop.",
      icon: ""
    },
    {
      img: "/images/flavour.jpg",
      title: "Product",
      subtitle: "Authentic Taste",
      desc: "Millions recognise our brand for its exceptional taste and pungency. The traditional cold-pressed extraction method we use retains the natural aroma and distinctive sharp flavor that makes our mustard oil the preferred choice for authentic Indian cooking and health-conscious consumers.",
      icon: ""
    }
  ];

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-[#fef9c3] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-200/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-200/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute top-20 left-10 w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-75" />
          <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-amber-500 rounded-full animate-pulse delay-150" />
        </div>
      </div>

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Premium Header Section */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 md:mb-6"
            // 
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-2.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full shadow-lg">
              <span className="text-lg md:text-xl">✨</span>
              <span className="text-xs md:text-sm font-bold text-white uppercase tracking-wider">Why Choose Us</span>
              <span className="text-lg md:text-xl">✨</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 bg-gradient-to-r from-amber-900 via-amber-800 to-yellow-900 bg-clip-text text-transparent leading-tight px-4"
          >
           Why Veer Bharat 
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-20 h-1.5 md:w-32 md:h-2 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-6 md:mb-8 rounded-full"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-5xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed px-4 md:px-6 text-justify"
          >
            At Veer Bharat, we believe that great food begins with great ingredients, and our commitment to excellence drives every step of our production process. For generations, we have been dedicated to bringing you the finest mustard oil, crafted with traditional methods and modern precision. Our journey starts with the careful selection of premium brown mustard seeds, sourced from trusted farmers who share our passion for quality. These seeds are then processed using time-honored cold-pressing techniques that preserve their natural nutrients, authentic flavor, and therapeutic properties. What sets us apart is our unwavering dedication to purity—our advanced double-filtration system ensures that you receive 100% pure mustard oil, completely free from additives or chemicals. This meticulous process not only guarantees exceptional quality but also delivers the distinctive pungent aroma and robust taste that millions of families across India have come to trust and love. Whether you're preparing traditional Indian cuisine, seeking natural health benefits, or simply looking for an oil that brings authentic flavor to your dishes, Veer Bharat Mustard Oil stands as your reliable partner in the kitchen, combining heritage with innovation to serve you better every single day.
          </motion.p>
        </div>

        {/* Premium Feature Cards */}
        <div className="grid gap-6 md:gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-12 md:mb-16">
          {cards.map((card, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-2xl hover:shadow-amber-500/20 transition-all duration-500"
            >
              {/* Premium Badge */}
              <div className="absolute left-4 md:left-6 top-4 md:top-6 z-30">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full blur-md opacity-70" />
                  <div className="relative bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-500 px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-xl border-2 border-white/50">
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <svg className="w-3 h-3 md:w-4 md:h-4" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-[10px] md:text-xs font-black text-white uppercase tracking-wide">Premium</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Image Container with Overlay */}
              <div className="relative w-full h-56 sm:h-60 md:h-72 lg:h-80 overflow-hidden">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />
                
                {/* Floating Icon */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.5 }}
                  className="absolute bottom-4 right-4 md:bottom-6 md:right-6"
                >
                  <div className="text-4xl md:text-5xl lg:text-6xl filter drop-shadow-2xl opacity-90 group-hover:scale-125 transition-transform duration-500">
                    {card.icon}
                  </div>
                </motion.div>
              </div>

              {/* Elegant Wave Divider */}
              <div className="absolute left-0 right-0 -mt-1 pointer-events-none z-10">
                <svg viewBox="0 0 1440 60" className="w-full h-8 md:h-12" preserveAspectRatio="none">
                  <path d="M0,32 C240,80 480,0 720,32 C960,64 1200,16 1440,32 L1440,60 L0,60 Z" fill="white" />
                </svg>
              </div>

              {/* Premium Content Section */}
              <div className="relative bg-white px-5 py-6 md:px-7 md:py-8 lg:px-8 lg:py-10">
                <div className="mb-4 md:mb-5">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-1.5 md:mb-2 bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent">
                    {card.title}
                  </h3>
                  <div className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full border border-amber-200">
                    <span className="text-xs md:text-sm font-bold text-amber-800 uppercase tracking-wide">
                      {card.subtitle}
                    </span>
                  </div>
                </div>

                <div className="h-1 w-16 md:w-20 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mb-4 md:mb-5" />

                <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8 text-justify min-h-[120px] md:min-h-[140px]">
                  {card.desc}
                </p>

                {/* Premium Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4">
                  <motion.a
                    href="/products"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group/btn flex-1"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl blur-md opacity-60 group-hover/btn:opacity-100 transition-opacity" />
                    <div className="relative bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 px-5 py-3 md:px-6 md:py-3.5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                      <span className="text-sm md:text-base font-black text-white uppercase tracking-wide">
                        Explore Products →
                      </span>
                    </div>
                  </motion.a>

                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-3 md:px-6 md:py-3.5 bg-white hover:bg-amber-50 border-2 border-amber-300 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
                  >
                    <span className="text-sm md:text-base font-bold text-amber-900">
                      Contact Us
                    </span>
                  </motion.a>
                </div>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-bl from-amber-300/20 to-transparent rounded-bl-full" />
            </motion.article>
          ))}
        </div>

        {/* Premium CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="relative bg-gradient-to-br from-white via-amber-50 to-yellow-50 rounded-3xl md:rounded-[2.5rem] shadow-2xl border-2 border-amber-200 p-6 md:p-10 lg:p-12 overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 md:w-64 md:h-64 bg-gradient-to-bl from-amber-200/30 to-transparent rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 md:w-64 md:h-64 bg-gradient-to-tr from-yellow-200/30 to-transparent rounded-full blur-2xl" />

          <div className="relative text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="inline-block mb-4 md:mb-6"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl">🌟</div>
            </motion.div>

            <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-5 bg-gradient-to-r from-amber-900 via-amber-700 to-yellow-800 bg-clip-text text-transparent px-4">
              Discover Our Premium Collection
            </h4>

            <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed px-4">
              From cold-pressed mustard to high-stability frying oils — find the perfect oil for your kitchen. Each product is crafted with care, quality, and tradition.
            </p>

            {/* Premium Category Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
              {[
                { name: "Kachi Ghani", url: "/products/kachi-ghani", gradient: "from-amber-400 to-yellow-400" },
                { name: "Soybean Oil", url: "/products/soybean", gradient: "from-amber-500 to-orange-400" },
                { name: "Palm Oil", url: "/products/palm", gradient: "from-yellow-400 to-amber-500" },
                { name: "Rice Bran", url: "/products/rice-bran", gradient: "from-amber-600 to-yellow-500" }
              ].map((product, i) => (
                <motion.a
                  key={i}
                  href={product.url}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group/pill relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} rounded-full blur-md opacity-50 group-hover/pill:opacity-100 transition-opacity`} />
                  <div className={`relative bg-gradient-to-r ${product.gradient} px-4 py-2.5 md:px-6 md:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white/50`}>
                    <span className="text-xs md:text-sm lg:text-base font-black text-white uppercase tracking-wide whitespace-nowrap">
                      {product.name}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Premium Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
            >
              {[
                { number: "100%", label: "Pure & Natural" },
                { number: "5+", label: "Years Legacy" },
                { number: "1M+", label: "Happy Families" },
                { number: "99.9%", label: "Quality Rate" }
              ].map((stat, i) => (
                <div key={i} className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg border border-amber-200">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mb-1 md:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm font-bold text-gray-600 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 80" className="w-full h-12 md:h-16" preserveAspectRatio="none">
          <path d="M0,48 C240,80 480,16 720,48 C960,80 1200,16 1440,48 L1440,80 L0,80 Z" fill="#fef3c7" opacity="0.3" />
        </svg>
      </div>
    </section>
  );
}


