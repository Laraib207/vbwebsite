// export default function Blog() {
//   const blogs = [
//     {
//       title: "Kachi Ghani Mustard Oil – Taste & Health",
//       img: "/product1.jpg",
//       desc: `Veer Bharat Kachi Ghani Mustard Oil is a symbol of purity and wellness. 
//       Extracted through the traditional cold-press method, it retains natural antioxidants 
//       and essential oils. Its strong aroma and authentic taste enhance every dish...`,
//     },
//     {
//       title: "Soyabean Oil – Light & Healthy Cooking",
//       img: "/product2.jpg",
//       desc: `Veer Bharat Soyabean Oil is the modern family’s healthy cooking choice. 
//       Light in texture, it doesn’t overpower your meals and keeps the natural taste intact...`,
//     },
//     {
//       title: "Sunflower Oil – The Vitamin Powerhouse",
//       img: "/product3.jpg",
//       desc: `Veer Bharat Sunflower Oil is enriched with Vitamin E and natural antioxidants, 
//       making it one of the healthiest cooking oils available today...`,
//     },

    
//     {
//       title: "Rice Bran Oil – The Cholesterol Fighter",
//       img: "/product4.jpg",
//       desc: `Rice Bran Oil from Veer Bharat is a modern solution for a healthy heart. 
//       Extracted from the outer layer of rice grains, it is naturally rich in Oryzanol...`,
//     },
//   ];

//   return (
//     <section className="py-16 px-6 max-w-7xl mx-auto">
//       <h2 className="text-4xl font-bold text-center text-red-600 mb-12">
//         Our Blog Hub
//       </h2>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//         {blogs.map((post, i) => (
//           <div
//             key={i}
//             className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden"
//           >
//             <img
//               src={post.img}
//               alt={post.title}
//               className="w-full h-56 object-cover"
//             />
//             <div className="p-6">
//               <h3 className="text-2xl font-bold text-yellow-700 mb-3">
//                 {post.title}
//               </h3>
//               <p className="text-gray-600 text-justify">{post.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }





"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const BlogHero = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmNTk1MGYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDE0YzQgMCA4LTQgOC04cy00LTgtOC04LTggNC04IDggNCA4IDggOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-bold mb-4">
            🌾 KNOWLEDGE HUB
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 mb-4">
            Veer Bharat Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
            Discover the goodness, benefits & secrets of our premium oils. Dive deep into health, taste, and tradition.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="relative h-[400px]">
            <Image
              src="/images/blog-hero.jpg"
              alt="Veer Bharat Oils"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-black mb-2">Pure. Natural. Authentic.</h3>
              <p className="text-lg">Experience the tradition of quality cooking oils</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const BlogGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const blogs = [
    {
      id: 1,
      title: "Goodness Of Cold-Pressed Mustard Oil",
      category: "Mustard Oil",
      image: "/images/mustard-blog.jpg",
      date: "January 1, 2024",
      readTime: "3 min read",
      excerpt: "Ever explored the world of cold-pressed mustard oil? Curious about its uses and the awesome benefits it brings to the table?",
      content: `Cold-pressed mustard oil comes to life from mustard seeds, taking a chill pill in the extraction process—no heat, no chemicals. The result? A superstar oil with a unique flavor twist, a treasure of nutrients, and a fan club for its health perks.

**Powerhouse Of Nutrients:** It's got omega-3 fatty acids, the superheroes for your heart, and vitamin E, the skin's BFF fighting for your glow-up game. And guess what? The cool part is, thanks to the extraction process avoiding hot vibes, these nutritional rockstars stay locked and loaded, making it the wholesome boost your diet deserves.

**Flavor And Aroma:** Cold-pressing keeps the bold and zesty vibes intact, giving mustard oil its unmistakable kick. It's like a flavor fiesta with its unique taste and a powerful aroma that throws a party in your dishes.

**Ayurvedic Wellness:** Mustard oil has scored big in the wellness arena! Ayurveda gives it a high-five for improving the digestion, boosting circulation, and rocking natural antibacterial vibes. When it comes to massages, this oil is like a spa day for your skin and muscles. Ancient healing, meet modern bliss!`
    },
    {
      id: 2,
      title: "Soyabean Oil – The Heart-Healthy Choice",
      category: "Soyabean Oil",
      image: "/images/soyabean-blog.jpg",
      date: "February 15, 2024",
      readTime: "4 min read",
      excerpt: "Discover why soyabean oil is becoming the go-to choice for health-conscious families across India.",
      content: `Soyabean oil has emerged as one of the most popular cooking oils in modern Indian kitchens, and for good reason. This light, versatile oil brings together health benefits, culinary flexibility, and affordability in one golden package.

**Rich In Polyunsaturated Fats:** Soyabean oil is packed with omega-3 and omega-6 fatty acids, essential nutrients that your body can't produce on its own. These healthy fats support heart health, reduce inflammation, and contribute to brain function. With low saturated fat content, it's an excellent choice for those watching their cholesterol levels.

**Vitamin E Powerhouse:** One of the standout features of soyabean oil is its high vitamin E content. This powerful antioxidant protects your cells from damage, supports immune function, and promotes healthy skin. Regular consumption can contribute to your daily vitamin E requirements, helping you maintain overall wellness.

**Versatile Cooking Companion:** From shallow frying samosas to making salad dressings, soyabean oil adapts to every cooking method. Its neutral flavor doesn't overpower dishes, making it perfect for both Indian and continental cuisines. The high smoke point ensures it remains stable even at elevated temperatures, ideal for deep frying without breaking down into harmful compounds.

**Cost-Effective Quality:** Compared to other premium oils, soyabean oil offers excellent value for money without compromising on quality. This makes it accessible to families across all income brackets, democratizing access to healthy cooking oils.`
    },
    {
      id: 3,
      title: "Sunflower Oil – Sunshine In A Bottle",
      category: "Sunflower Oil",
      image: "/images/sunflower-blog.jpg",
      date: "March 10, 2024",
      readTime: "3 min read",
      excerpt: "Bright, light, and loaded with benefits – sunflower oil brings the goodness of sunflowers to your kitchen.",
      content: `Extracted from the seeds of the cheerful sunflower plant, sunflower oil has become a kitchen staple for millions. Its light texture, neutral taste, and impressive nutritional profile make it a favorite among home cooks and professional chefs alike.

**Vitamin E Champion:** Sunflower oil is one of the richest sources of vitamin E among all cooking oils. Just a tablespoon provides a significant portion of your daily vitamin E needs. This fat-soluble antioxidant protects your body's cells from oxidative stress, supports immune function, and promotes healthy, glowing skin.

**Heart-Friendly Fats:** With a balanced ratio of polyunsaturated and monounsaturated fats, sunflower oil supports cardiovascular health. It helps maintain healthy cholesterol levels when used as part of a balanced diet. The absence of cholesterol and low saturated fat content make it an excellent choice for heart-conscious individuals.

**Light & Non-Greasy:** Unlike heavier oils, sunflower oil has a light texture that doesn't leave food feeling greasy. This makes it perfect for sautéing vegetables, making crispy pakoras, or even baking cakes and cookies. Its neutral flavor ensures that the natural taste of your ingredients shines through.

**Stability & Shelf Life:** Refined sunflower oil has excellent stability and a long shelf life when stored properly. The refining process removes impurities while retaining beneficial nutrients, giving you a clean, pure oil that performs consistently across various cooking applications.`
    },
    {
      id: 4,
      title: "Rice Bran Oil – The Cholesterol Fighter",
      category: "Rice Bran Oil",
      image: "/images/ricebran-blog.jpg",
      date: "April 5, 2024",
      readTime: "4 min read",
      excerpt: "Unlock the secret of Japanese longevity with rice bran oil – nature's answer to heart health.",
      content: `Rice bran oil, extracted from the nutrient-rich outer layer of rice grains, is one of Asia's best-kept health secrets. Popular in Japan and other Asian countries for decades, this oil is now gaining recognition worldwide for its remarkable health benefits.

**Oryzanol Magic:** The star component of rice bran oil is gamma-oryzanol, a unique compound rarely found in other oils. Studies suggest that oryzanol can help lower bad cholesterol (LDL) while maintaining or even increasing good cholesterol (HDL). This makes rice bran oil a powerful ally in maintaining cardiovascular health and preventing heart disease.

**Balanced Fatty Acid Profile:** Rice bran oil boasts a near-perfect balance of saturated, monounsaturated, and polyunsaturated fats. This ideal ratio, recommended by the World Health Organization, makes it one of the healthiest cooking oils available. It supports overall wellness while providing the fats your body needs for optimal function.

**High Smoke Point Excellence:** With a smoke point of around 232°C (450°F), rice bran oil is perfect for high-temperature cooking methods like deep frying and stir-frying. It doesn't break down easily, ensuring that your food remains healthy even when cooked at high heat. This stability also means less oil absorption, resulting in lighter, less greasy fried foods.

**Skin & Beauty Benefits:** Beyond cooking, rice bran oil is prized in skincare for its moisturizing properties. Rich in vitamin E and antioxidants, it can be used topically to nourish skin, reduce signs of aging, and promote a healthy complexion. Many beauty products now incorporate rice bran oil for its proven benefits.`
    },
    {
      id: 5,
      title: "Palm Oil – The Versatile Kitchen Essential",
      category: "Palm Oil",
      image: "/images/palm-blog.jpg",
      date: "May 20, 2024",
      readTime: "3 min read",
      excerpt: "From your kitchen to bakeries worldwide – discover why palm oil is the chef's secret weapon.",
      content: `Palm oil, derived from the fruit of the oil palm tree, is one of the most widely used cooking oils globally. Its unique properties make it indispensable in both home kitchens and commercial food production.

**Natural Semi-Solid State:** Unlike most other oils, palm oil is semi-solid at room temperature due to its balanced composition of saturated and unsaturated fats. This unique characteristic makes it ideal for creating textures in baked goods, giving pastries their flaky layers and cookies their perfect crumb.

**Rich In Carotenoids:** Palm oil's distinctive red-orange color comes from its high beta-carotene content, the precursor to vitamin A. These carotenoids are powerful antioxidants that support eye health, boost immunity, and promote healthy skin. The refining process creates the golden-yellow palm oil commonly found in stores while retaining beneficial nutrients.

**High Temperature Stability:** With excellent heat stability, palm oil is perfect for deep frying and commercial food preparation. It doesn't oxidize easily, meaning it can be reused more times than many other oils without breaking down into harmful compounds. This makes it economical for restaurants and food manufacturers.

**Versatile Applications:** Beyond cooking, palm oil is used in everything from making traditional ghee alternatives to preparing authentic sweets and savories. Its neutral flavor and smooth texture make it suitable for both Indian and international cuisines. Professional bakers particularly value it for creating consistent, high-quality baked goods.

**Sustainability Matters:** At Veer Bharat, we source our palm oil from certified sustainable plantations that follow ethical farming practices. This ensures you get quality oil while supporting environmental conservation and fair labor practices.`
    },
    {
      id: 6,
      title: "Kachi Ghani vs Refined Oil – The Truth",
      category: "Mustard Oil",
      image: "/images/kachi-refined.jpg",
      date: "June 12, 2024",
      readTime: "5 min read",
      excerpt: "What's the real difference? We break down the science and tradition behind oil extraction methods.",
      content: `The debate between Kachi Ghani (cold-pressed) and refined oils has been ongoing in Indian households for years. Understanding the differences can help you make informed choices for your family's health.

**Kachi Ghani – The Traditional Method:** Kachi Ghani, or cold-press extraction, is an ancient technique where oil seeds are crushed at low temperatures without applying heat. This gentle process preserves the natural aroma, flavor, and nutritional content of the oil. The result is a robust oil with its natural antioxidants, vitamins, and minerals intact.

**The Kachi Ghani Advantage:** Cold-pressed oils retain their natural pungency and strong aroma, which many consider essential for authentic taste in traditional recipes. The absence of chemical solvents means you get pure, unadulterated oil just as nature intended. Health enthusiasts prefer Kachi Ghani oils for their higher antioxidant content and natural anti-inflammatory properties.

**Refined Oil – The Modern Approach:** Refining involves heating the oil and using chemical solvents to extract maximum oil from seeds. The oil then undergoes bleaching and deodorizing to remove impurities, color, and odor. This process creates a light, neutral-tasting oil with a longer shelf life.

**Benefits Of Refined Oil:** Refined oils have a higher smoke point, making them suitable for high-temperature cooking without breaking down. Their neutral flavor doesn't overpower delicate dishes, and they generally cost less than cold-pressed varieties. The refining process also removes any naturally occurring toxins or anti-nutrients.

**Making The Right Choice:** Both types have their place in your kitchen. Use Kachi Ghani mustard oil for tadkas, pickles, and traditional recipes where you want that authentic punch. Opt for refined oils for versatile everyday cooking, baking, and when you need a neutral flavor. The key is understanding your cooking needs and choosing accordingly.`
    }
  ];

  const categories = ["All", "Mustard Oil", "Soyabean Oil", "Sunflower Oil", "Rice Bran Oil", "Palm Oil"];

  const filteredBlogs = activeCategory === "All" 
    ? blogs 
    : blogs.filter(blog => blog.category === activeCategory);

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${
              activeCategory === cat
                ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg scale-105"
                : "bg-white text-gray-700 hover:bg-gray-50 shadow"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBlogs.map((blog, idx) => (
          <motion.article
            key={blog.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-amber-400"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold shadow-lg">
                  {blog.category}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                <span className="flex items-center gap-1">
                  📅 {blog.date}
                </span>
                <span className="flex items-center gap-1">
                  ⏱️ {blog.readTime}
                </span>
              </div>

              <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                {blog.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {blog.excerpt}
              </p>

              <div className="bg-gray-50 rounded-2xl p-4 mb-4">
                <p className="text-xs text-gray-700 leading-relaxed line-clamp-4">
                  {blog.content}
                </p>
              </div>

              <Link
                href={`/blog/${blog.id}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                Read Full Article →
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-amber-50">
      <BlogHero />
      <BlogGrid />
    </main>
  );
}