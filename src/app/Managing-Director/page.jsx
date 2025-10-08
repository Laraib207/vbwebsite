// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// /**
//  * MANAGING DIRECTOR PROFILE PAGE
//  * Mr. Nitish Kumar - Founder of Sri Shyam Agro Industries
//  * 
//  * Images in public/images/:
//  * - 6.jpg (Main formal portrait)
//  * - 7.jpg (Sitting formal photo)
//  * - WhatsApp-Image-2025-09-01-at-17.31.53.jpg (Office meeting)
//  * - banner2.jpg (Team meeting photo)
//  * - banner3.jpg (With company banner)
//  */

// export default function ManagingDirectorPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      
//       {/* HERO SECTION - Premium Introduction */}
//       <section className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-800 text-white">
//         {/* Animated background pattern */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute inset-0" style={{
//             backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
//             backgroundSize: "40px 40px"
//           }} />
//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
//             {/* Text Content */}
//             <motion.div
//               initial={{ opacity: 0, x: -60 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 1 }}
//               className="text-center lg:text-left"
//             >
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.2 }}
//                 className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
//               >
//                 <p className="text-sm md:text-base font-semibold tracking-wide text-yellow-300">
//                   Founder & Managing Director
//                 </p>
//               </motion.div>

//               <h1 
//                 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 leading-tight"
//                 style={{
//                   fontFamily: "'Georgia', serif",
//                   background: "linear-gradient(to right, #ffffff, #fbbf24)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                   backgroundClip: "text",
//                 }}
//               >
//                 Mr. Nitish Kumar
//               </h1>

//               <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mb-6 mx-auto lg:mx-0" />

//               <p className="text-lg sm:text-xl md:text-2xl text-slate-200 mb-6 md:mb-8 leading-relaxed">
//                 Visionary Leader | Industry Pioneer | Growth Architect
//               </p>

//               <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
//                 With over 30 years of exemplary experience in MNC companies and a proven track record of transforming challenges into opportunities, leading Sri Shyam Agro Industries toward unprecedented success since 2015.
//               </p>

//               <div className="mt-8 md:mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg font-bold text-slate-900 shadow-xl"
//                 >
//                   📈 30+ Years Experience
//                 </motion.div>
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg font-semibold border border-white/30"
//                 >
//                   🏆 Industry Leader
//                 </motion.div>
//               </div>
//             </motion.div>

//             {/* Hero Image */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 1, delay: 0.3 }}
//               className="relative"
//             >
//               <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
//                 {/* Glowing border effect */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 rounded-3xl blur-2xl opacity-30 animate-pulse" />
                
//                 <div className="relative h-full rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl">
//                   <Image
//                     src="/images/6.jpg"
//                     alt="Mr. Nitish Kumar - Managing Director"
//                     fill
//                     className="object-cover"
//                     priority
//                   />
//                 </div>

//                 {/* Decorative elements */}
//                 <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full blur-3xl opacity-40" />
//                 <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-40" />
//               </div>
//             </motion.div>

//           </div>
//         </div>

//         {/* Wave separator */}
//         <div className="absolute bottom-0 left-0 right-0">
//           <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(248, 250, 252)"/>
//           </svg>
//         </div>
//       </section>

//       {/* JOURNEY SECTION */}
//       <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
          
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-12 md:mb-16 lg:mb-20"
//           >
//             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-slate-900">
//               The Journey of Excellence
//             </h2>
//             <div className="w-32 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6" />
//             <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
//               From corporate excellence to entrepreneurial success, a story of dedication, innovation, and unwavering commitment to quality.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 md:mb-24">
            
//             {/* Story Content */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="space-y-6"
//             >
//               <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 md:p-8 border border-indigo-100 shadow-lg">
//                 <h3 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4 flex items-center">
//                   <span className="mr-3 text-3xl">🎯</span>
//                   Three Decades of Corporate Mastery
//                 </h3>
//                 <p className="text-base md:text-lg text-slate-700 leading-relaxed">
//                   With 30 years of distinguished service in leading MNC companies, Mr. Nitish Kumar developed unparalleled expertise in marketing, business development, and strategic leadership. His corporate journey equipped him with invaluable insights into market dynamics, consumer behavior, and operational excellence.
//                 </p>
//               </div>

//               <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 md:p-8 border border-yellow-100 shadow-lg">
//                 <h3 className="text-2xl md:text-3xl font-bold text-orange-900 mb-4 flex items-center">
//                   <span className="mr-3 text-3xl">🚀</span>
//                   Birth of Veer Bharat - 2015
//                 </h3>
//                 <p className="text-base md:text-lg text-slate-700 leading-relaxed">
//                   Armed with decades of experience and a vision to serve quality products to Indian households, Mr. Kumar founded Sri Shyam Agro Industries in 2015. The flagship brand "Veer Bharat" was launched with a commitment to deliver pure, healthy, and authentic food products.
//                 </p>
//               </div>

//               <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 md:p-8 border border-green-100 shadow-lg">
//                 <h3 className="text-2xl md:text-3xl font-bold text-green-900 mb-4 flex items-center">
//                   <span className="mr-3 text-3xl">💪</span>
//                   Overcoming Challenges
//                 </h3>
//                 <p className="text-base md:text-lg text-slate-700 leading-relaxed">
//                   The entrepreneurial journey was not without obstacles. Through countless challenges, market fluctuations, and intense competition, Mr. Kumar's resilience and strategic thinking transformed every setback into a stepping stone for growth and innovation.
//                 </p>
//               </div>
//             </motion.div>

//             {/* Image Grid */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="space-y-6"
//             >
//               <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
//                 <Image
//                   src="/images/7.jpg"
//                   alt="Mr. Nitish Kumar Professional"
//                   fill
//                   className="object-cover hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//               <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
//                 <Image
//                   src="/images/banner3.jpg"
//                   alt="With Veer Bharat Brand"
//                   fill
//                   className="object-cover hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//             </motion.div>

//           </div>

//         </div>
//       </section>

//       {/* LEADERSHIP & TEAM SECTION */}
//       <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-12 md:mb-16"
//           >
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
//               Leadership That Inspires
//             </h2>
//             <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6" />
//             <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
//               Leading with vision, empowering with trust, and driving success through collaborative excellence.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
//             {/* Leadership Image */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
//             >
//               <Image
//                 src="/images/banner2.jpg"
//                 alt="Team Leadership"
//                 fill
//                 className="object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//             </motion.div>

//             {/* Leadership Philosophy */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="space-y-6"
//             >
//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
//                 <h3 className="text-xl md:text-2xl font-bold mb-4 text-yellow-400">
//                   🎖️ Visionary Leadership
//                 </h3>
//                 <p className="text-slate-200 leading-relaxed">
//                   Mr. Kumar believes in empowering his team with autonomy, trust, and growth opportunities. His leadership style focuses on collaboration, innovation, and shared success.
//                 </p>
//               </div>

//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
//                 <h3 className="text-xl md:text-2xl font-bold mb-4 text-yellow-400">
//                   🤝 Team Development
//                 </h3>
//                 <p className="text-slate-200 leading-relaxed">
//                   Building a strong, motivated team is at the core of success. Regular training, mentorship programs, and performance recognition ensure every team member reaches their full potential.
//                 </p>
//               </div>

//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
//                 <h3 className="text-xl md:text-2xl font-bold mb-4 text-yellow-400">
//                   📊 Strategic Marketing Expertise
//                 </h3>
//                 <p className="text-slate-200 leading-relaxed">
//                   Leveraging decades of marketing experience, Mr. Kumar has positioned Veer Bharat as a trusted household name through innovative campaigns, customer-centric strategies, and brand authenticity.
//                 </p>
//               </div>
//             </motion.div>

//           </div>

//         </div>
//       </section>

//       {/* ACHIEVEMENTS & MILESTONES */}
//       <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
          
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-12 md:mb-16"
//           >
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-slate-900">
//               Milestones & Achievements
//             </h2>
//             <div className="w-32 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6" />
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            
//             {[
//               { icon: "🏢", title: "30+ Years", desc: "Corporate Experience" },
//               { icon: "📅", title: "Since 2015", desc: "Sri Shyam Agro Industries" },
//               { icon: "🌟", title: "Brand Leader", desc: "Veer Bharat Success" },
//               { icon: "👥", title: "Team Builder", desc: "Inspiring Leadership" },
//             ].map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: idx * 0.1 }}
//                 whileHover={{ scale: 1.05, y: -8 }}
//                 className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 md:p-8 shadow-xl border border-slate-200 text-center"
//               >
//                 <div className="text-5xl md:text-6xl mb-4">{item.icon}</div>
//                 <h3 className="text-2xl md:text-3xl font-black text-indigo-900 mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-slate-600 font-medium">{item.desc}</p>
//               </motion.div>
//             ))}

//           </div>

//         </div>
//       </section>

//       {/* VISION & PHILOSOPHY */}
//       <section className="py-16 md:py-24 bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
//             >
//               <Image
//                 src="/images/WhatsApp-Image-2025-09-01-at-17.31.53.jpg"
//                 alt="Office Leadership"
//                 fill
//                 className="object-cover"
//               />
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="space-y-6"
//             >
//               <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6">
//                 Vision & Philosophy
//               </h2>
              
//               <div className="prose prose-lg max-w-none">
//                 <p className="text-lg text-slate-700 leading-relaxed mb-4">
//                   <strong className="text-indigo-900">"Quality is not an act, it is a habit."</strong> This philosophy drives every decision at Sri Shyam Agro Industries.
//                 </p>

//                 <p className="text-lg text-slate-700 leading-relaxed mb-4">
//                   Mr. Kumar envisions Veer Bharat as a household name synonymous with purity, trust, and health. His commitment extends beyond business success to contribute positively to society by providing authentic, chemical-free products that enhance the well-being of Indian families.
//                 </p>

//                 <p className="text-lg text-slate-700 leading-relaxed">
//                   Through continuous innovation, market research, and customer feedback, the company adapts and evolves while staying true to its core values of integrity, excellence, and customer satisfaction.
//                 </p>
//               </div>

//               <div className="flex flex-wrap gap-4 mt-8">
//                 <div className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold shadow-lg">
//                   🎯 Quality First
//                 </div>
//                 <div className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 rounded-xl font-bold shadow-lg">
//                   💡 Innovation Driven
//                 </div>
//                 <div className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold shadow-lg">
//                   ❤️ Customer Centric
//                 </div>
//               </div>
//             </motion.div>

//           </div>

//         </div>
//       </section>

//       {/* FOOTER CTA */}
//       <section className="py-16 md:py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-800 text-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
//               Building Tomorrow, Today
//             </h2>
//             <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
//               Under Mr. Nitish Kumar's leadership, Sri Shyam Agro Industries continues to grow, innovate, and serve millions of families across India with the trusted Veer Bharat brand.
//             </p>
//             <div className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full font-bold text-lg text-slate-900 shadow-2xl">
//               🏆 Excellence • Innovation • Trust
//             </div>
//           </motion.div>
//         </div>
//       </section>

//     </div>
//   );
// }








"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

/**
 * CLASSICAL & ELEGANT MANAGING DIRECTOR PROFILE PAGE
 * Timeless, Professional, and Sophisticated Design
 * 
 * Features:
 * - Classic typography with serif fonts
 * - Elegant gold and cream color scheme
 * - Smooth, refined animations
 * - Professional layout
 * - Fully responsive
 */

export default function ManagingDirectorPage() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      
      {/* ELEGANT HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-slate-50 overflow-hidden">
        
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              {/* Elegant badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="inline-flex items-center mb-6 px-6 py-2 border-2 border-amber-600 rounded-sm"
              >
                <span className="text-sm font-semibold tracking-[0.3em] text-amber-800 uppercase">
                  Founder & Managing Director
                </span>
              </motion.div>

              {/* Name with classic typography */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 text-slate-900 leading-tight"
                style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
              >
                Mr. Nitish Kumar
              </motion.h1>

              {/* Decorative line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 1 }}
                className="h-[2px] bg-gradient-to-r from-transparent via-amber-600 to-transparent mb-6 max-w-md mx-auto lg:mx-0"
              />

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-xl sm:text-2xl md:text-3xl font-serif text-slate-700 mb-8 leading-relaxed"
                style={{ fontFamily: "'Merriweather', 'Georgia', serif" }}
              >
                Visionary Leader | Industry Pioneer | Growth Architect
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="text-base md:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
              >
                With over three decades of exemplary experience in multinational corporations and a proven track record of transforming challenges into opportunities, leading Sri Shyam Agro Industries toward unprecedented success since 2015.
              </motion.p>

              {/* Elegant stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="flex flex-wrap justify-center lg:justify-start gap-8"
              >
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-serif font-bold text-amber-700">30+</div>
                  <div className="text-sm text-slate-600 uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-serif font-bold text-amber-700">2015</div>
                  <div className="text-sm text-slate-600 uppercase tracking-wider">Company Founded</div>
                </div>
              </motion.div>

            </motion.div>

            {/* Right: Elegant Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative w-full max-w-lg mx-auto">
                
                {/* Decorative border frame */}
                <div className="absolute -inset-4 border-2 border-amber-600/30" />
                <div className="absolute -inset-8 border border-amber-600/20" />
                
                {/* Main image container */}
                <div className="relative aspect-[3/4] overflow-hidden shadow-2xl">
                  <Image
                    src="/images/6.jpg"
                    alt="Mr. Nitish Kumar - Managing Director"
                    fill
                    className="object-cover grayscale-[20%]"
                    priority
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
                </div>

                {/* Quote decoration */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1 }}
                  className="absolute -bottom-8 -right-8 bg-amber-700 text-white p-6 shadow-xl max-w-xs hidden md:block"
                >
                  <p className="text-6xl font-serif leading-none mb-2">"</p>
                  <p className="text-sm font-serif italic">
                    Quality is not an act, it is a habit
                  </p>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          style={{ opacity, scale }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest text-slate-500 mb-2">Scroll</span>
            <div className="w-[2px] h-12 bg-gradient-to-b from-slate-400 to-transparent" />
          </div>
        </motion.div>

      </section>

      {/* THE JOURNEY SECTION */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
              The Journey of Excellence
            </h2>
            <div className="w-24 h-[2px] bg-amber-600 mx-auto mb-6" />
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From corporate excellence to entrepreneurial success, a story of dedication, innovation, and unwavering commitment to quality.
            </p>
          </motion.div>

          {/* Journey content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left: Story cards */}
            <div className="space-y-12">
              
              {[
                {
                  year: "1985 - 2015",
                  title: "Three Decades of Corporate Mastery",
                  desc: "Distinguished service in leading MNC companies, developing unparalleled expertise in marketing, business development, and strategic leadership. Gained invaluable insights into market dynamics, consumer behavior, and operational excellence."
                },
                {
                  year: "2015",
                  title: "Birth of Veer Bharat",
                  desc: "Founded Sri Shyam Agro Industries with decades of experience and a vision to serve quality products to Indian households. Launched the flagship brand 'Veer Bharat' with a commitment to deliver pure, healthy, and authentic food products."
                },
                {
                  year: "2015 - Present",
                  title: "Overcoming Challenges",
                  desc: "Navigating countless obstacles, market fluctuations, and intense competition with resilience and strategic thinking. Transformed every setback into a stepping stone for growth and innovation, building a trusted brand across India."
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  className="relative pl-8 border-l-2 border-amber-600"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amber-600 border-4 border-white" />
                  
                  <div className="text-sm font-semibold text-amber-700 uppercase tracking-wider mb-2">
                    {item.year}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}

            </div>

            {/* Right: Images */}
            <div className="space-y-8">
              {[
                { src: "/images/7.jpg", alt: "Professional Portrait" },
                { src: "/images/banner3.jpg", alt: "With Veer Bharat Brand" },
              ].map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  className="relative group"
                >
                  <div className="absolute -inset-2 border border-amber-600/30 group-hover:border-amber-600/60 transition-colors duration-300" />
                  <div className="relative h-80 md:h-96 overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
              Leadership Philosophy
            </h2>
            <div className="w-24 h-[2px] bg-amber-600 mx-auto mb-6" />
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Leading with vision, empowering with trust, and driving success through collaborative excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <div className="absolute -inset-4 border-2 border-amber-600/30" />
                <div className="relative h-96 md:h-[500px] overflow-hidden shadow-xl">
                  <Image
                    src="/images/banner2.jpg"
                    alt="Team Leadership"
                    fill
                    className="object-cover grayscale-[20%]"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-8">
              
              {[
                {
                  title: "Visionary Leadership",
                  desc: "Empowering teams with autonomy, trust, and growth opportunities. Leadership focused on collaboration, innovation, and shared success in achieving organizational goals."
                },
                {
                  title: "Team Development",
                  desc: "Building strong, motivated teams through regular training, mentorship programs, and performance recognition ensuring every member reaches their full potential."
                },
                {
                  title: "Strategic Marketing Expertise",
                  desc: "Leveraging decades of marketing experience to position Veer Bharat as a trusted household name through innovative campaigns and customer-centric strategies."
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  className="border-l-4 border-amber-600 pl-6"
                >
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* ACHIEVEMENTS SECTION */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
              Milestones & Achievements
            </h2>
            <div className="w-24 h-[2px] bg-amber-600 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            
            {[
              { number: "30+", label: "Years of Experience" },
              { number: "2015", label: "Company Founded" },
              { number: "100%", label: "Commitment to Quality" },
              { number: "#1", label: "Brand Leadership" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-amber-700 mb-3">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-slate-600 uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="w-12 h-[2px] bg-amber-600 mx-auto mt-4" />
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* VISION SECTION */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 mb-6">
                Vision & Philosophy
              </h2>
              
              <div className="space-y-4 text-base md:text-lg text-slate-700 leading-relaxed">
                <p className="font-serif italic text-xl text-amber-800 border-l-4 border-amber-600 pl-6">
                  "Quality is not an act, it is a habit."
                </p>

                <p>
                  This philosophy drives every decision at Sri Shyam Agro Industries. The vision is to establish Veer Bharat as a household name synonymous with purity, trust, and health.
                </p>

                <p>
                  The commitment extends beyond business success to contribute positively to society by providing authentic, chemical-free products that enhance the well-being of Indian families.
                </p>

                <p>
                  Through continuous innovation, market research, and customer feedback, the company adapts and evolves while staying true to its core values of integrity, excellence, and customer satisfaction.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-6">
                {["Quality First", "Innovation Driven", "Customer Centric"].map((value, i) => (
                  <div
                    key={i}
                    className="px-6 py-3 border-2 border-amber-600 text-amber-800 font-semibold text-sm uppercase tracking-wider hover:bg-amber-600 hover:text-white transition-colors duration-300"
                  >
                    {value}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 border-2 border-amber-600/30" />
              <div className="relative h-96 md:h-[500px] overflow-hidden shadow-xl">
                <Image
                  src="/images/WhatsApp-Image-2025-09-01-at-17.31.53.jpg"
                  alt="Office Leadership"
                  fill
                  className="object-cover grayscale-[20%]"
                />
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ELEGANT FOOTER */}
      <section className="py-16 md:py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6">
              Building Tomorrow, Today
            </h2>
            <div className="w-24 h-[2px] bg-amber-600 mx-auto mb-6" />
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
              Under Mr. Nitish Kumar's leadership, Sri Shyam Agro Industries continues to grow, innovate, and serve millions of families across India with the trusted Veer Bharat brand.
            </p>
            <div className="inline-flex items-center gap-4 text-amber-400 font-semibold text-lg">
              <span>Excellence</span>
              <span>•</span>
              <span>Innovation</span>
              <span>•</span>
              <span>Trust</span>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
