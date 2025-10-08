// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// // Blog data
// const blogs = [
//   {
//     id: "1",
//     title: "Goodness Of Cold-Pressed Mustard Oil",
//     category: "Mustard Oil",
//     image: "/images/mustard-blog.jpg",
//     date: "January 1, 2024",
//     author: "bulbuoilsmarketing",
//     views: 602,
//     content: `Ever explored the world of **cold-pressed mustard oil**? Curious about its uses and the awesome benefits it brings to the table?

// Let's dive into the cool and informative realm of this Cold-Pressed Mustard Oil. 🌿💡

// Cold-pressed mustard oil comes to life from mustard seeds, taking a chill pill in the extraction process—no heat, no chemicals. The result? A superstar oil with a unique flavor twist, a treasure of nutrients, and a fan club for its health perks.

// ## Powerhouse Of Nutrients

// It's got omega-3 fatty acids, the superheroes for your heart, and vitamin E, the skin's BFF fighting for your glow-up game. And guess what? The cool part is, thanks to the extraction process avoiding hot vibes, these nutritional rockstars stay locked and loaded, making it the wholesome boost your diet deserves. 💫

// ## Flavor And Aroma

// Cold-pressing keeps the bold and zesty vibes intact, giving mustard oil its unmistakable kick. It's like a flavor fiesta with its unique taste and a powerful aroma that throws a party in your dishes. 🎉🌿

// ## Ayurvedic Wellness

// Mustard oil has scored big in the wellness arena! Ayurveda gives it a high-five for improving the digestion, boosting circulation, and rocking natural antibacterial vibes. When it comes to massages, this oil is like a spa day for your skin and muscles. Ancient healing, meet modern bliss! 🌿🧘

// ## Other Uses

// It's also a beauty secret! Massage it on your scalp and hair for a dose of strength and shine. And guess what? Your skin is in for a treat too – the moisturizing magic makes it a go-to for a pampering skincare routine. Talk about a versatile oil! 💆‍♀️✨`
//   },
//   {
//     id: "2",
//     title: "Soyabean Oil – The Heart-Healthy Choice",
//     category: "Soyabean Oil",
//     image: "/images/soyabean-blog.jpg",
//     date: "February 15, 2024",
//     author: "bulbuoilsmarketing",
//     views: 445,
//     content: `Soyabean oil has emerged as one of the most popular cooking oils in modern Indian kitchens, and for good reason. This light, versatile oil brings together health benefits, culinary flexibility, and affordability in one golden package.

// ## Rich In Polyunsaturated Fats

// Soyabean oil is packed with omega-3 and omega-6 fatty acids, essential nutrients that your body can't produce on its own. These healthy fats support heart health, reduce inflammation, and contribute to brain function. With low saturated fat content, it's an excellent choice for those watching their cholesterol levels.

// ## Vitamin E Powerhouse

// One of the standout features of soyabean oil is its high vitamin E content. This powerful antioxidant protects your cells from damage, supports immune function, and promotes healthy skin. Regular consumption can contribute to your daily vitamin E requirements.

// ## Versatile Cooking Companion

// From shallow frying samosas to making salad dressings, soyabean oil adapts to every cooking method. Its neutral flavor doesn't overpower dishes, making it perfect for both Indian and continental cuisines. The high smoke point ensures it remains stable even at elevated temperatures.

// ## Cost-Effective Quality

// Compared to other premium oils, soyabean oil offers excellent value for money without compromising on quality. This makes it accessible to families across all income brackets, democratizing access to healthy cooking oils.`
//   },
//   {
//     id: "3",
//     title: "Sunflower Oil – Sunshine In A Bottle",
//     category: "Sunflower Oil",
//     image: "/images/sunflower-blog.jpg",
//     date: "March 10, 2024",
//     author: "bulbuoilsmarketing",
//     views: 521,
//     content: `Extracted from the seeds of the cheerful sunflower plant, sunflower oil has become a kitchen staple for millions. Its light texture, neutral taste, and impressive nutritional profile make it a favorite among home cooks and professional chefs alike.

// ## Vitamin E Champion

// Sunflower oil is one of the richest sources of vitamin E among all cooking oils. Just a tablespoon provides a significant portion of your daily vitamin E needs. This fat-soluble antioxidant protects your body's cells from oxidative stress.

// ## Heart-Friendly Fats

// With a balanced ratio of polyunsaturated and monounsaturated fats, sunflower oil supports cardiovascular health. It helps maintain healthy cholesterol levels when used as part of a balanced diet.

// ## Light & Non-Greasy

// Unlike heavier oils, sunflower oil has a light texture that doesn't leave food feeling greasy. This makes it perfect for sautéing vegetables, making crispy pakoras, or even baking cakes and cookies.

// ## Stability & Shelf Life

// Refined sunflower oil has excellent stability and a long shelf life when stored properly. The refining process removes impurities while retaining beneficial nutrients.`
//   },
//   {
//     id: "4",
//     title: "Rice Bran Oil – The Cholesterol Fighter",
//     category: "Rice Bran Oil",
//     image: "/images/ricebran-blog.jpg",
//     date: "April 5, 2024",
//     author: "bulbuoilsmarketing",
//     views: 389,
//     content: `Rice bran oil, extracted from the nutrient-rich outer layer of rice grains, is one of Asia's best-kept health secrets. Popular in Japan and other Asian countries for decades, this oil is now gaining recognition worldwide.

// ## Oryzanol Magic

// The star component of rice bran oil is gamma-oryzanol, a unique compound rarely found in other oils. Studies suggest that oryzanol can help lower bad cholesterol (LDL) while maintaining or even increasing good cholesterol (HDL).

// ## Balanced Fatty Acid Profile

// Rice bran oil boasts a near-perfect balance of saturated, monounsaturated, and polyunsaturated fats. This ideal ratio, recommended by the World Health Organization, makes it one of the healthiest cooking oils available.

// ## High Smoke Point Excellence

// With a smoke point of around 232°C (450°F), rice bran oil is perfect for high-temperature cooking methods like deep frying and stir-frying. It doesn't break down easily, ensuring that your food remains healthy.

// ## Skin & Beauty Benefits

// Beyond cooking, rice bran oil is prized in skincare for its moisturizing properties. Rich in vitamin E and antioxidants, it can be used topically to nourish skin and reduce signs of aging.`
//   },
//   {
//     id: "5",
//     title: "Palm Oil – The Versatile Kitchen Essential",
//     category: "Palm Oil",
//     image: "/images/palm-blog.jpg",
//     date: "May 20, 2024",
//     author: "bulbuoilsmarketing",
//     views: 467,
//     content: `Palm oil, derived from the fruit of the oil palm tree, is one of the most widely used cooking oils globally. Its unique properties make it indispensable in both home kitchens and commercial food production.

// ## Natural Semi-Solid State

// Unlike most other oils, palm oil is semi-solid at room temperature due to its balanced composition of saturated and unsaturated fats. This unique characteristic makes it ideal for creating textures in baked goods.

// ## Rich In Carotenoids

// Palm oil's distinctive red-orange color comes from its high beta-carotene content, the precursor to vitamin A. These carotenoids are powerful antioxidants that support eye health and boost immunity.

// ## High Temperature Stability

// With excellent heat stability, palm oil is perfect for deep frying and commercial food preparation. It doesn't oxidize easily, meaning it can be reused more times than many other oils.

// ## Versatile Applications

// Beyond cooking, palm oil is used in everything from making traditional ghee alternatives to preparing authentic sweets and savories. Professional bakers particularly value it for creating consistent, high-quality baked goods.

// ## Sustainability Matters

// At Veer Bharat, we source our palm oil from certified sustainable plantations that follow ethical farming practices.`
//   },
//   {
//     id: "6",
//     title: "Kachi Ghani vs Refined Oil – The Truth",
//     category: "Mustard Oil",
//     image: "/images/mustard-blog.jpg",
//     date: "June 12, 2024",
//     author: "bulbuoilsmarketing",
//     views: 612,
//     content: `The debate between Kachi Ghani (cold-pressed) and refined oils has been ongoing in Indian households for years. Understanding the differences can help you make informed choices for your family's health.

// ## Kachi Ghani – The Traditional Method

// Kachi Ghani, or cold-press extraction, is an ancient technique where oil seeds are crushed at low temperatures without applying heat. This gentle process preserves the natural aroma, flavor, and nutritional content of the oil.

// ## The Kachi Ghani Advantage

// Cold-pressed oils retain their natural pungency and strong aroma, which many consider essential for authentic taste in traditional recipes. The absence of chemical solvents means you get pure, unadulterated oil.

// ## Refined Oil – The Modern Approach

// Refining involves heating the oil and using chemical solvents to extract maximum oil from seeds. The oil then undergoes bleaching and deodorizing to remove impurities, color, and odor.

// ## Benefits Of Refined Oil

// Refined oils have a higher smoke point, making them suitable for high-temperature cooking without breaking down. Their neutral flavor doesn't overpower delicate dishes.

// ## Making The Right Choice

// Both types have their place in your kitchen. Use Kachi Ghani mustard oil for tadkas, pickles, and traditional recipes. Opt for refined oils for versatile everyday cooking and when you need a neutral flavor.`
//   }
// ];

// // Generate static params for static export
// export function generateStaticParams() {
//   return blogs.map((blog) => ({
//     id: blog.id,
//   }));
// }

// export default function SingleBlogPage({ params }) {
//   const blogId = params.id;

//   // Find current blog
//   const blog = blogs.find(b => b.id === blogId) || blogs[0];

//   // Related blogs
//   const relatedBlogs = blogs.filter(b => b.id !== blog.id).slice(0, 3);

//   return (
//     <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
//       {/* Breadcrumb */}
//       <div className="max-w-4xl mx-auto px-6 pt-8">
//         <nav className="flex items-center gap-2 text-sm text-gray-600">
//           <Link href="/" className="hover:text-amber-600">Home</Link>
//           <span>›</span>
//           <Link href="/blog" className="hover:text-amber-600">Blog</Link>
//           <span>›</span>
//           <span className="text-gray-900 font-semibold">{blog.category}</span>
//         </nav>
//       </div>

//       {/* Hero Section */}
//       <div className="max-w-4xl mx-auto px-6 py-12">
//         <div className="text-center mb-8">
//           <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-bold mb-4">
//             {blog.category}
//           </span>
          
//           <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-6 leading-tight">
//             {blog.title}
//           </h1>

//           <div className="flex items-center justify-center gap-6 text-gray-600 text-sm">
//             <div className="flex items-center gap-2">
//               <span className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-amber-400 flex items-center justify-center text-white font-bold">
//                 V
//               </span>
//               <span className="font-semibold">{blog.author}</span>
//             </div>
//             <span>•</span>
//             <span>📅 {blog.date}</span>
//             <span>•</span>
//             <span>👁️ {blog.views} views</span>
//           </div>
//         </div>

//         {/* Featured Image */}
//         <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl mb-12">
//           <Image
//             src={blog.image}
//             alt={blog.title}
//             fill
//             className="object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
//         </div>

//         {/* Content */}
//         <article className="prose prose-lg max-w-none">
//           <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
//             <div 
//               className="text-gray-700 leading-relaxed space-y-6"
//               dangerouslySetInnerHTML={{ 
//                 __html: blog.content
//                   .split('\n\n')
//                   .map(para => {
//                     if (para.startsWith('##')) {
//                       return `<h2 class="text-3xl font-black text-amber-600 mt-8 mb-4">${para.replace('## ', '')}</h2>`;
//                     }
//                     return `<p class="text-justify">${para}</p>`;
//                   })
//                   .join('') 
//               }}
//             />

//             {/* Share Section */}
//             <div className="mt-12 pt-8 border-t-2 border-amber-100">
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Share this article</h3>
//               <div className="flex gap-3">
//                 <button className="px-5 py-3 rounded-full bg-blue-500 text-white font-bold hover:scale-105 transition">
//                   Facebook
//                 </button>
//                 <button className="px-5 py-3 rounded-full bg-sky-400 text-white font-bold hover:scale-105 transition">
//                   Twitter
//                 </button>
//                 <button className="px-5 py-3 rounded-full bg-green-500 text-white font-bold hover:scale-105 transition">
//                   WhatsApp
//                 </button>
//               </div>
//             </div>
//           </div>
//         </article>

//         {/* Related Blogs */}
//         <section className="mt-16">
//           <h2 className="text-3xl font-black text-gray-900 mb-8">Related Articles</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {relatedBlogs.map((related) => (
//               <Link
//                 key={related.id}
//                 href={`/blog/${related.id}`}
//                 className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden"
//               >
//                 <div className="relative h-48">
//                   <Image
//                     src={related.image}
//                     alt={related.title}
//                     fill
//                     className="object-cover group-hover:scale-110 transition"
//                   />
//                 </div>
//                 <div className="p-4">
//                   <h3 className="font-bold text-lg text-gray-900 group-hover:text-amber-600 transition">
//                     {related.title}
//                   </h3>
//                   <p className="text-sm text-gray-600 mt-2">{related.category}</p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </section>

//         {/* Back Button */}
//         <div className="mt-12 text-center">
//           <Link
//             href="/blog"
//             className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition"
//           >
//             ← Back to Blog Hub
//           </Link>
//         </div>
//       </div>
//     </main>
//   );
// }

// "use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Blog data
const blogs = [
  {
    id: "1",
    title: "Goodness Of Cold-Pressed Mustard Oil",
    category: "Mustard Oil",
    image: "/images/mustard-blog.jpg",
    date: "January 1, 2024",
    author: "Veer Bharat Team",
    views: 602,
    readTime: "5 min read",
    excerpt: "Discover the nutritional powerhouse and authentic flavor of traditional cold-pressed mustard oil for your kitchen.",
    content: `<p>Ever explored the world of <strong>cold-pressed mustard oil</strong>? Curious about its uses and the awesome benefits it brings to the table?</p>

<p>Let's dive into the cool and informative realm of this Cold-Pressed Mustard Oil. 🌿💡</p>

<p>Cold-pressed mustard oil comes to life from mustard seeds, taking a chill pill in the extraction process—no heat, no chemicals. The result? A superstar oil with a unique flavor twist, a treasure of nutrients, and a fan club for its health perks.</p>

<h2>Powerhouse Of Nutrients</h2>

<p>It's got omega-3 fatty acids, the superheroes for your heart, and vitamin E, the skin's BFF fighting for your glow-up game. And guess what? The cool part is, thanks to the extraction process avoiding hot vibes, these nutritional rockstars stay locked and loaded, making it the wholesome boost your diet deserves. 💫</p>

<h2>Flavor And Aroma</h2>

<p>Cold-pressing keeps the bold and zesty vibes intact, giving mustard oil its unmistakable kick. It's like a flavor fiesta with its unique taste and a powerful aroma that throws a party in your dishes. 🎉🌿</p>

<h2>Ayurvedic Wellness</h2>

<p>Mustard oil has scored big in the wellness arena! Ayurveda gives it a high-five for improving the digestion, boosting circulation, and rocking natural antibacterial vibes. When it comes to massages, this oil is like a spa day for your skin and muscles. Ancient healing, meet modern bliss! 🌿🧘</p>

<h2>Other Uses</h2>

<p>It's also a beauty secret! Massage it on your scalp and hair for a dose of strength and shine. And guess what? Your skin is in for a treat too – the moisturizing magic makes it a go-to for a pampering skincare routine. Talk about a versatile oil! 💆‍♀️✨</p>`,
    faqs: [
      {
        question: "What makes cold-pressed mustard oil different?",
        answer: "Cold-pressed mustard oil is extracted without heat or chemicals, preserving all natural nutrients, flavor, and aroma."
      },
      {
        question: "Can I use mustard oil for cooking?",
        answer: "Yes! Mustard oil is excellent for high-heat cooking, tadkas, pickles, and traditional Indian recipes."
      },
      {
        question: "Is mustard oil good for hair?",
        answer: "Absolutely. Regular massage with mustard oil strengthens hair roots, promotes growth, and adds natural shine."
      }
    ]
  },
  {
    id: "2",
    title: "Soyabean Oil – The Heart-Healthy Choice",
    category: "Soyabean Oil",
    image: "/images/soyabean-blog.jpg",
    date: "February 15, 2024",
    author: "Veer Bharat Team",
    views: 445,
    readTime: "4 min read",
    excerpt: "Learn why soyabean oil has become the preferred choice for health-conscious families across India.",
    content: `<p>Soyabean oil has emerged as one of the most popular cooking oils in modern Indian kitchens, and for good reason. This light, versatile oil brings together health benefits, culinary flexibility, and affordability in one golden package.</p>

<h2>Rich In Polyunsaturated Fats</h2>

<p>Soyabean oil is packed with omega-3 and omega-6 fatty acids, essential nutrients that your body can't produce on its own. These healthy fats support heart health, reduce inflammation, and contribute to brain function. With low saturated fat content, it's an excellent choice for those watching their cholesterol levels.</p>

<h2>Vitamin E Powerhouse</h2>

<p>One of the standout features of soyabean oil is its high vitamin E content. This powerful antioxidant protects your cells from damage, supports immune function, and promotes healthy skin. Regular consumption can contribute to your daily vitamin E requirements.</p>

<h2>Versatile Cooking Companion</h2>

<p>From shallow frying samosas to making salad dressings, soyabean oil adapts to every cooking method. Its neutral flavor doesn't overpower dishes, making it perfect for both Indian and continental cuisines. The high smoke point ensures it remains stable even at elevated temperatures.</p>

<h2>Cost-Effective Quality</h2>

<p>Compared to other premium oils, soyabean oil offers excellent value for money without compromising on quality. This makes it accessible to families across all income brackets, democratizing access to healthy cooking oils.</p>`,
    faqs: [
      {
        question: "Is soyabean oil suitable for deep frying?",
        answer: "Yes, soyabean oil has a high smoke point (around 230°C), making it ideal for deep frying and high-temperature cooking."
      },
      {
        question: "Does soyabean oil contain cholesterol?",
        answer: "No, soyabean oil is plant-based and contains zero cholesterol, making it heart-friendly."
      }
    ]
  },
  {
    id: "3",
    title: "Sunflower Oil – Sunshine In A Bottle",
    category: "Sunflower Oil",
    image: "/images/sunflower-blog.jpg",
    date: "March 10, 2024",
    author: "Veer Bharat Team",
    views: 521,
    readTime: "4 min read",
    excerpt: "Discover why sunflower oil is becoming a kitchen essential for families nationwide.",
    content: `<p>Extracted from the seeds of the cheerful sunflower plant, sunflower oil has become a kitchen staple for millions. Its light texture, neutral taste, and impressive nutritional profile make it a favorite among home cooks and professional chefs alike.</p>

<h2>Vitamin E Champion</h2>

<p>Sunflower oil is one of the richest sources of vitamin E among all cooking oils. Just a tablespoon provides a significant portion of your daily vitamin E needs. This fat-soluble antioxidant protects your body's cells from oxidative stress.</p>

<h2>Heart-Friendly Fats</h2>

<p>With a balanced ratio of polyunsaturated and monounsaturated fats, sunflower oil supports cardiovascular health. It helps maintain healthy cholesterol levels when used as part of a balanced diet.</p>

<h2>Light & Non-Greasy</h2>

<p>Unlike heavier oils, sunflower oil has a light texture that doesn't leave food feeling greasy. This makes it perfect for sautéing vegetables, making crispy pakoras, or even baking cakes and cookies.</p>

<h2>Stability & Shelf Life</h2>

<p>Refined sunflower oil has excellent stability and a long shelf life when stored properly. The refining process removes impurities while retaining beneficial nutrients.</p>`,
    faqs: [
      {
        question: "Can I use sunflower oil for baking?",
        answer: "Absolutely! Sunflower oil's neutral flavor and light texture make it perfect for cakes, cookies, and muffins."
      },
      {
        question: "How should I store sunflower oil?",
        answer: "Store in a cool, dark place away from direct sunlight. Once opened, use within 6-8 months for best quality."
      }
    ]
  },
  {
    id: "4",
    title: "Rice Bran Oil – The Cholesterol Fighter",
    category: "Rice Bran Oil",
    image: "/images/ricebran-blog.jpg",
    date: "April 5, 2024",
    author: "Veer Bharat Team",
    views: 389,
    readTime: "5 min read",
    excerpt: "Uncover the hidden health benefits of rice bran oil, Asia's best-kept wellness secret.",
    content: `<p>Rice bran oil, extracted from the nutrient-rich outer layer of rice grains, is one of Asia's best-kept health secrets. Popular in Japan and other Asian countries for decades, this oil is now gaining recognition worldwide.</p>

<h2>Oryzanol Magic</h2>

<p>The star component of rice bran oil is gamma-oryzanol, a unique compound rarely found in other oils. Studies suggest that oryzanol can help lower bad cholesterol (LDL) while maintaining or even increasing good cholesterol (HDL).</p>

<h2>Balanced Fatty Acid Profile</h2>

<p>Rice bran oil boasts a near-perfect balance of saturated, monounsaturated, and polyunsaturated fats. This ideal ratio, recommended by the World Health Organization, makes it one of the healthiest cooking oils available.</p>

<h2>High Smoke Point Excellence</h2>

<p>With a smoke point of around 232°C (450°F), rice bran oil is perfect for high-temperature cooking methods like deep frying and stir-frying. It doesn't break down easily, ensuring that your food remains healthy.</p>

<h2>Skin & Beauty Benefits</h2>

<p>Beyond cooking, rice bran oil is prized in skincare for its moisturizing properties. Rich in vitamin E and antioxidants, it can be used topically to nourish skin and reduce signs of aging.</p>`,
    faqs: [
      {
        question: "What is gamma-oryzanol?",
        answer: "Gamma-oryzanol is a unique antioxidant compound found in rice bran oil that helps manage cholesterol levels and supports heart health."
      },
      {
        question: "Can rice bran oil be used for Indian cooking?",
        answer: "Yes! Its high smoke point and neutral flavor make it perfect for all types of Indian cooking, from tadkas to deep frying."
      }
    ]
  },
  {
    id: "5",
    title: "Palm Oil – The Versatile Kitchen Essential",
    category: "Palm Oil",
    image: "/images/palm-blog.jpg",
    date: "May 20, 2024",
    author: "Veer Bharat Team",
    views: 467,
    readTime: "4 min read",
    excerpt: "Explore the unique properties that make palm oil indispensable in kitchens worldwide.",
    content: `<p>Palm oil, derived from the fruit of the oil palm tree, is one of the most widely used cooking oils globally. Its unique properties make it indispensable in both home kitchens and commercial food production.</p>

<h2>Natural Semi-Solid State</h2>

<p>Unlike most other oils, palm oil is semi-solid at room temperature due to its balanced composition of saturated and unsaturated fats. This unique characteristic makes it ideal for creating textures in baked goods.</p>

<h2>Rich In Carotenoids</h2>

<p>Palm oil's distinctive red-orange color comes from its high beta-carotene content, the precursor to vitamin A. These carotenoids are powerful antioxidants that support eye health and boost immunity.</p>

<h2>High Temperature Stability</h2>

<p>With excellent heat stability, palm oil is perfect for deep frying and commercial food preparation. It doesn't oxidize easily, meaning it can be reused more times than many other oils.</p>

<h2>Versatile Applications</h2>

<p>Beyond cooking, palm oil is used in everything from making traditional ghee alternatives to preparing authentic sweets and savories. Professional bakers particularly value it for creating consistent, high-quality baked goods.</p>

<h2>Sustainability Matters</h2>

<p>At Veer Bharat, we source our palm oil from certified sustainable plantations that follow ethical farming practices.</p>`,
    faqs: [
      {
        question: "Is palm oil healthy?",
        answer: "Yes, when consumed in moderation. Palm oil contains beneficial nutrients like vitamin E and beta-carotene, though it's higher in saturated fats than some other oils."
      },
      {
        question: "Why does palm oil solidify?",
        answer: "Palm oil's balanced fat composition causes it to be semi-solid at room temperature, similar to coconut oil."
      }
    ]
  },
  {
    id: "6",
    title: "Kachi Ghani vs Refined Oil – The Truth",
    category: "Mustard Oil",
    image: "/images/mustard-blog.jpg",
    date: "June 12, 2024",
    author: "Veer Bharat Team",
    views: 612,
    readTime: "6 min read",
    excerpt: "Understand the real differences between traditional Kachi Ghani and refined oils to make informed choices.",
    content: `<p>The debate between Kachi Ghani (cold-pressed) and refined oils has been ongoing in Indian households for years. Understanding the differences can help you make informed choices for your family's health.</p>

<h2>Kachi Ghani – The Traditional Method</h2>

<p>Kachi Ghani, or cold-press extraction, is an ancient technique where oil seeds are crushed at low temperatures without applying heat. This gentle process preserves the natural aroma, flavor, and nutritional content of the oil.</p>

<h2>The Kachi Ghani Advantage</h2>

<p>Cold-pressed oils retain their natural pungency and strong aroma, which many consider essential for authentic taste in traditional recipes. The absence of chemical solvents means you get pure, unadulterated oil.</p>

<h2>Refined Oil – The Modern Approach</h2>

<p>Refining involves heating the oil and using chemical solvents to extract maximum oil from seeds. The oil then undergoes bleaching and deodorizing to remove impurities, color, and odor.</p>

<h2>Benefits Of Refined Oil</h2>

<p>Refined oils have a higher smoke point, making them suitable for high-temperature cooking without breaking down. Their neutral flavor doesn't overpower delicate dishes.</p>

<h2>Making The Right Choice</h2>

<p>Both types have their place in your kitchen. Use Kachi Ghani mustard oil for tadkas, pickles, and traditional recipes. Opt for refined oils for versatile everyday cooking and when you need a neutral flavor.</p>`,
    faqs: [
      {
        question: "Which is healthier: Kachi Ghani or refined oil?",
        answer: "Kachi Ghani retains more natural nutrients, but refined oils have higher smoke points for high-heat cooking. Both can be part of a healthy diet when used appropriately."
      },
      {
        question: "Can I use Kachi Ghani oil for deep frying?",
        answer: "While possible, Kachi Ghani oil has a lower smoke point than refined oils. It's best used for tadkas, pickles, and moderate-heat cooking."
      }
    ]
  }
];

// Required for static export
export function generateStaticParams() {
  return blogs.map((blog) => ({
    id: blog.id,
  }));
}

export default function SingleBlogPage({ params }) {
  const blogId = params.id;
  const blog = blogs.find(b => b.id === blogId) || blogs[0];
  const relatedBlogs = blogs.filter(b => b.id !== blog.id).slice(0, 3);

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Breadcrumb Navigation */}
        <div className="bg-[#fef9c3] border-b border-amber-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm md:text-base text-gray-700 font-medium">
              <Link href="/" className="hover:text-amber-700 transition-colors">
                Home
              </Link>
              <span className="text-gray-400">›</span>
              <Link href="/blog" className="hover:text-amber-700 transition-colors">
                Blog
              </Link>
              <span className="text-gray-400">›</span>
              <span className="text-gray-900 font-semibold truncate">{blog.title}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-sm md:text-base font-bold shadow-md">
              {blog.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 md:mb-8 leading-tight">
            {blog.title}
          </h1>

          {/* Excerpt */}
          {blog.excerpt && (
            <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 leading-relaxed max-w-4xl">
              {blog.excerpt}
            </p>
          )}

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm md:text-base text-gray-600 pb-8 md:pb-10 mb-8 md:mb-10 border-b-2 border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center text-white font-black text-lg md:text-xl shadow-md">
                V
              </div>
              <span className="font-semibold text-gray-900">{blog.author}</span>
            </div>
            <span className="hidden sm:inline text-gray-300">|</span>
            <span>📅 {blog.date}</span>
            <span className="hidden sm:inline text-gray-300">|</span>
            <span>⏱️ {blog.readTime}</span>
            <span className="hidden sm:inline text-gray-300">|</span>
            <span>👁️ {blog.views} views</span>
          </div>

          {/* Featured Image */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl mb-10 md:mb-14">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Main Content */}
          <div className="prose prose-base md:prose-lg lg:prose-xl max-w-none">
            <div 
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>

          {/* FAQ Section */}
          {blog.faqs && blog.faqs.length > 0 && (
            <section className="mt-12 md:mt-16 pt-10 md:pt-12 border-t-2 border-gray-200">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 md:mb-8">
                FAQs
              </h2>
              <div className="space-y-6 md:space-y-8">
                {blog.faqs.map((faq, index) => (
                  <div key={index} className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 md:p-8 shadow-md border border-amber-100">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                      {index + 1}. {faq.question}
                    </h3>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Share Section */}
          <div className="mt-12 md:mt-16 pt-10 md:pt-12 border-t-2 border-gray-200">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Share this article
            </h3>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <button className="px-5 py-3 md:px-6 md:py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base font-bold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                📘 Facebook
              </button>
              <button className="px-5 py-3 md:px-6 md:py-3.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-sm md:text-base font-bold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                🐦 Twitter
              </button>
              <button className="px-5 py-3 md:px-6 md:py-3.5 rounded-xl bg-green-600 hover:bg-green-700 text-white text-sm md:text-base font-bold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                💬 WhatsApp
              </button>
              <button className="px-5 py-3 md:px-6 md:py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm md:text-base font-bold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                🔗 LinkedIn
              </button>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="bg-gradient-to-b from-[#fef9c3] to-amber-50 py-12 md:py-16 lg:py-20 mt-12 md:mt-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-8 md:mb-12">
              Related Articles
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {relatedBlogs.map((related) => (
                <Link
                  key={related.id}
                  href={`/blog/${related.id}`}
                  className="group bg-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-amber-400 transform hover:-translate-y-2"
                >
                  <div className="relative h-48 sm:h-52 md:h-56">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-xs md:text-sm font-bold text-amber-700 shadow-md">
                        {related.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className="font-bold text-lg md:text-xl text-gray-900 group-hover:text-amber-600 transition-colors leading-tight mb-3 line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 mb-4 line-clamp-2">
                      {related.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs md:text-sm text-gray-500">
                      <span>⏱️ {related.readTime}</span>
                      <span className="font-semibold text-amber-600 group-hover:text-amber-700">
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Back Button */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white text-base md:text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            ← Back to Blog
          </Link>
        </div>
      </main>


    </>
  );
}











  // import React from "react";
  // import Image from "next/image";
  // import Link from "next/link";

  // // Blog data
  // const blogs = [
  //   {
  //     id: "1",
  //     title: "Goodness Of Cold-Pressed Mustard Oil",
  //     category: "Mustard Oil",
  //     image: "/images/mustard-blog.jpg",
  //     date: "January 1, 2024",
  //     author: "Veer Bharat Team",
  //     views: 602,
  //     content: `Ever explored the world of **cold-pressed mustard oil**? Curious about its uses and the awesome benefits it brings to the table?

  // Let's dive into the cool and informative realm of this Cold-Pressed Mustard Oil. 🌿💡

  // Cold-pressed mustard oil comes to life from mustard seeds, taking a chill pill in the extraction process—no heat, no chemicals. The result? A superstar oil with a unique flavor twist, a treasure of nutrients, and a fan club for its health perks.

  // ## Powerhouse Of Nutrients

  // It's got omega-3 fatty acids, the superheroes for your heart, and vitamin E, the skin's BFF fighting for your glow-up game. And guess what? The cool part is, thanks to the extraction process avoiding hot vibes, these nutritional rockstars stay locked and loaded, making it the wholesome boost your diet deserves. 💫

  // ## Flavor And Aroma

  // Cold-pressing keeps the bold and zesty vibes intact, giving mustard oil its unmistakable kick. It's like a flavor fiesta with its unique taste and a powerful aroma that throws a party in your dishes. 🎉🌿

  // ## Ayurvedic Wellness

  // Mustard oil has scored big in the wellness arena! Ayurveda gives it a high-five for improving the digestion, boosting circulation, and rocking natural antibacterial vibes. When it comes to massages, this oil is like a spa day for your skin and muscles. Ancient healing, meet modern bliss! 🌿🧘

  // ## Other Uses

  // It's also a beauty secret! Massage it on your scalp and hair for a dose of strength and shine. And guess what? Your skin is in for a treat too – the moisturizing magic makes it a go-to for a pampering skincare routine. Talk about a versatile oil! 💆‍♀️✨`
  //   },
  //   {
  //     id: "2",
  //     title: "Soyabean Oil – The Heart-Healthy Choice",
  //     category: "Soyabean Oil",
  //     image: "/images/soyabean-blog.jpg",
  //     date: "February 15, 2024",
  //     author: "Veer Bharat Team",
  //     views: 445,
  //     content: `Soyabean oil has emerged as one of the most popular cooking oils in modern Indian kitchens, and for good reason. This light, versatile oil brings together health benefits, culinary flexibility, and affordability in one golden package.

  // ## Rich In Polyunsaturated Fats

  // Soyabean oil is packed with omega-3 and omega-6 fatty acids, essential nutrients that your body can't produce on its own. These healthy fats support heart health, reduce inflammation, and contribute to brain function. With low saturated fat content, it's an excellent choice for those watching their cholesterol levels.

  // ## Vitamin E Powerhouse

  // One of the standout features of soyabean oil is its high vitamin E content. This powerful antioxidant protects your cells from damage, supports immune function, and promotes healthy skin. Regular consumption can contribute to your daily vitamin E requirements.

  // ## Versatile Cooking Companion

  // From shallow frying samosas to making salad dressings, soyabean oil adapts to every cooking method. Its neutral flavor doesn't overpower dishes, making it perfect for both Indian and continental cuisines. The high smoke point ensures it remains stable even at elevated temperatures.

  // ## Cost-Effective Quality

  // Compared to other premium oils, soyabean oil offers excellent value for money without compromising on quality. This makes it accessible to families across all income brackets, democratizing access to healthy cooking oils.`
  //   },
  //   {
  //     id: "3",
  //     title: "Sunflower Oil – Sunshine In A Bottle",
  //     category: "Sunflower Oil",
  //     image: "/images/sunflower-blog.jpg",
  //     date: "March 10, 2024",
  //     author: "Veer Bharat Team",
  //     views: 521,
  //     content: `Extracted from the seeds of the cheerful sunflower plant, sunflower oil has become a kitchen staple for millions. Its light texture, neutral taste, and impressive nutritional profile make it a favorite among home cooks and professional chefs alike.

  // ## Vitamin E Champion

  // Sunflower oil is one of the richest sources of vitamin E among all cooking oils. Just a tablespoon provides a significant portion of your daily vitamin E needs. This fat-soluble antioxidant protects your body's cells from oxidative stress.

  // ## Heart-Friendly Fats

  // With a balanced ratio of polyunsaturated and monounsaturated fats, sunflower oil supports cardiovascular health. It helps maintain healthy cholesterol levels when used as part of a balanced diet.

  // ## Light & Non-Greasy

  // Unlike heavier oils, sunflower oil has a light texture that doesn't leave food feeling greasy. This makes it perfect for sautéing vegetables, making crispy pakoras, or even baking cakes and cookies.

  // ## Stability & Shelf Life

  // Refined sunflower oil has excellent stability and a long shelf life when stored properly. The refining process removes impurities while retaining beneficial nutrients.`
  //   },
  //   {
  //     id: "4",
  //     title: "Rice Bran Oil – The Cholesterol Fighter",
  //     category: "Rice Bran Oil",
  //     image: "/images/ricebran-blog.jpg",
  //     date: "April 5, 2024",
  //     author: "Veer Bharat Team",
  //     views: 389,
  //     content: `Rice bran oil, extracted from the nutrient-rich outer layer of rice grains, is one of Asia's best-kept health secrets. Popular in Japan and other Asian countries for decades, this oil is now gaining recognition worldwide.

  // ## Oryzanol Magic

  // The star component of rice bran oil is gamma-oryzanol, a unique compound rarely found in other oils. Studies suggest that oryzanol can help lower bad cholesterol (LDL) while maintaining or even increasing good cholesterol (HDL).

  // ## Balanced Fatty Acid Profile

  // Rice bran oil boasts a near-perfect balance of saturated, monounsaturated, and polyunsaturated fats. This ideal ratio, recommended by the World Health Organization, makes it one of the healthiest cooking oils available.

  // ## High Smoke Point Excellence

  // With a smoke point of around 232°C (450°F), rice bran oil is perfect for high-temperature cooking methods like deep frying and stir-frying. It doesn't break down easily, ensuring that your food remains healthy.

  // ## Skin & Beauty Benefits

  // Beyond cooking, rice bran oil is prized in skincare for its moisturizing properties. Rich in vitamin E and antioxidants, it can be used topically to nourish skin and reduce signs of aging.`
  //   },
  //   {
  //     id: "5",
  //     title: "Palm Oil – The Versatile Kitchen Essential",
  //     category: "Palm Oil",
  //     image: "/images/palm-blog.jpg",
  //     date: "May 20, 2024",
  //     author: "Veer Bharat Team",
  //     views: 467,
  //     content: `Palm oil, derived from the fruit of the oil palm tree, is one of the most widely used cooking oils globally. Its unique properties make it indispensable in both home kitchens and commercial food production.

  // ## Natural Semi-Solid State

  // Unlike most other oils, palm oil is semi-solid at room temperature due to its balanced composition of saturated and unsaturated fats. This unique characteristic makes it ideal for creating textures in baked goods.

  // ## Rich In Carotenoids

  // Palm oil's distinctive red-orange color comes from its high beta-carotene content, the precursor to vitamin A. These carotenoids are powerful antioxidants that support eye health and boost immunity.

  // ## High Temperature Stability

  // With excellent heat stability, palm oil is perfect for deep frying and commercial food preparation. It doesn't oxidize easily, meaning it can be reused more times than many other oils.

  // ## Versatile Applications

  // Beyond cooking, palm oil is used in everything from making traditional ghee alternatives to preparing authentic sweets and savories. Professional bakers particularly value it for creating consistent, high-quality baked goods.

  // ## Sustainability Matters

  // At Veer Bharat, we source our palm oil from certified sustainable plantations that follow ethical farming practices.`
  //   },
  //   {
  //     id: "6",
  //     title: "Kachi Ghani vs Refined Oil – The Truth",
  //     category: "Mustard Oil",
  //     image: "/images/mustard-blog.jpg",
  //     date: "June 12, 2024",
  //     author: "Veer Bharat Team",
  //     views: 612,
  //     content: `The debate between Kachi Ghani (cold-pressed) and refined oils has been ongoing in Indian households for years. Understanding the differences can help you make informed choices for your family's health.

  // ## Kachi Ghani – The Traditional Method

  // Kachi Ghani, or cold-press extraction, is an ancient technique where oil seeds are crushed at low temperatures without applying heat. This gentle process preserves the natural aroma, flavor, and nutritional content of the oil.

  // ## The Kachi Ghani Advantage

  // Cold-pressed oils retain their natural pungency and strong aroma, which many consider essential for authentic taste in traditional recipes. The absence of chemical solvents means you get pure, unadulterated oil.

  // ## Refined Oil – The Modern Approach

  // Refining involves heating the oil and using chemical solvents to extract maximum oil from seeds. The oil then undergoes bleaching and deodorizing to remove impurities, color, and odor.

  // ## Benefits Of Refined Oil

  // Refined oils have a higher smoke point, making them suitable for high-temperature cooking without breaking down. Their neutral flavor doesn't overpower delicate dishes.

  // ## Making The Right Choice

  // Both types have their place in your kitchen. Use Kachi Ghani mustard oil for tadkas, pickles, and traditional recipes. Opt for refined oils for versatile everyday cooking and when you need a neutral flavor.`
  //   }
  // ];

  // // Generate static params
  // export function generateStaticParams() {
  //   return blogs.map((blog) => ({
  //     id: blog.id,
  //   }));
  // }

  // export default function SingleBlogPage({ params }) {
  //   const blogId = params.id;
  //   const blog = blogs.find(b => b.id === blogId) || blogs[0];
  //   const relatedBlogs = blogs.filter(b => b.id !== blog.id).slice(0, 3);

  //   return (
  //     <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
  //       {/* Breadcrumb */}
  //       <div className="max-w-5xl mx-auto px-6 pt-8">
  //         <nav className="flex items-center gap-3 text-base text-gray-600 font-medium">
  //           <Link href="/" className="hover:text-amber-600 transition">Home</Link>
  //           <span className="text-xl">›</span>
  //           <Link href="/blog" className="hover:text-amber-600 transition">Blog</Link>
  //           <span className="text-xl">›</span>
  //           <span className="text-gray-900 font-bold">{blog.category}</span>
  //         </nav>
  //       </div>

  //       {/* Hero Section */}
  //       <div className="max-w-5xl mx-auto px-6 py-12">
  //         <div className="text-center mb-10">
  //           <span className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-lg font-bold mb-6 shadow-xl">
  //             {blog.category}
  //           </span>
            
  //           <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-8 leading-tight">
  //             {blog.title}
  //           </h1>

  //           <div className="flex items-center justify-center gap-8 text-gray-600 text-lg font-medium">
  //             <div className="flex items-center gap-3">
  //               <span className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-amber-400 flex items-center justify-center text-white font-bold text-xl">
  //                 V
  //               </span>
  //               <span className="font-bold">{blog.author}</span>
  //             </div>
  //             <span className="text-2xl">•</span>
  //             <span className="text-lg">📅 {blog.date}</span>
  //             <span className="text-2xl">•</span>
  //             <span className="text-lg">👁️ {blog.views} views</span>
  //           </div>
  //         </div>

  //         {/* Featured Image */}
  //         <div className="relative h-[450px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl mb-14 border-4 border-white">
  //           <Image
  //             src={blog.image}
  //             alt={blog.title}
  //             fill
  //             className="object-cover"
  //           />
  //           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
  //         </div>

  //         {/* Content */}
  //         <article className="prose prose-xl max-w-none">
  //           <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-14">
  //             <div 
  //               className="text-gray-800 leading-relaxed space-y-8 text-lg"
  //               dangerouslySetInnerHTML={{ 
  //                 __html: blog.content
  //                   .split('\n\n')
  //                   .map(para => {
  //                     if (para.startsWith('##')) {
  //                       return `<h2 class="text-4xl font-black text-amber-600 mt-10 mb-6">${para.replace('## ', '')}</h2>`;
  //                     }
  //                     return `<p class="text-justify text-xl leading-relaxed">${para}</p>`;
  //                   })
  //                   .join('') 
  //               }}
  //             />

  //             {/* Share Section */}
  //             <div className="mt-14 pt-10 border-t-2 border-amber-100">
  //               <h3 className="text-3xl font-bold text-gray-900 mb-6">Share this article</h3>
  //               <div className="flex gap-4">
  //                 <button className="px-7 py-4 rounded-full bg-blue-500 text-white text-lg font-bold hover:scale-105 hover:shadow-xl transition">
  //                   Facebook
  //                 </button>
  //                 <button className="px-7 py-4 rounded-full bg-sky-400 text-white text-lg font-bold hover:scale-105 hover:shadow-xl transition">
  //                   Twitter
  //                 </button>
  //                 <button className="px-7 py-4 rounded-full bg-green-500 text-white text-lg font-bold hover:scale-105 hover:shadow-xl transition">
  //                   WhatsApp
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //         </article>

  //         {/* Related Blogs */}
  //         <section className="mt-20">
  //           <h2 className="text-4xl font-black text-gray-900 mb-10">Related Articles</h2>
  //           <div className="grid md:grid-cols-3 gap-8">
  //             {relatedBlogs.map((related) => (
  //               <Link
  //                 key={related.id}
  //                 href={`/blog/${related.id}`}
  //                 className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border-2 border-transparent hover:border-amber-400"
  //               >
  //                 <div className="relative h-56">
  //                   <Image
  //                     src={related.image}
  //                     alt={related.title}
  //                     fill
  //                     className="object-cover group-hover:scale-110 transition duration-500"
  //                   />
  //                 </div>
  //                 <div className="p-6">
  //                   <h3 className="font-bold text-xl text-gray-900 group-hover:text-amber-600 transition leading-tight mb-3">
  //                     {related.title}
  //                   </h3>
  //                   <p className="text-base text-gray-600 font-medium">{related.category}</p>
  //                 </div>
  //               </Link>
  //             ))}
  //           </div>
  //         </section>

  //         {/* Back Button */}
  //         <div className="mt-16 text-center">
  //           <Link
  //             href="/blog"
  //             className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition"
  //           >
  //             ← Back to Blog Hub
  //           </Link>
  //         </div>
  //       </div>
  //     </main>
  //   );
  // }










// "use client";
//   import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// // Blog data
// const blogs = [
//   {
//     id: "1",
//     title: "Goodness Of Cold-Pressed Mustard Oil",
//     category: "Mustard Oil",
//     image: "/images/mustard-blog.jpg",
//     date: "January 1, 2024",
//     author: "Veer Bharat Team",
//     views: 602,
//     readTime: "5 min read",
//     excerpt: "Discover the nutritional powerhouse and authentic flavor of traditional cold-pressed mustard oil for your kitchen.",
//     content: `<p>Ever explored the world of <strong>cold-pressed mustard oil</strong>? Curious about its uses and the awesome benefits it brings to the table?</p>

// <p>Let's dive into the cool and informative realm of this Cold-Pressed Mustard Oil. 🌿💡</p>

// <p>Cold-pressed mustard oil comes to life from mustard seeds, taking a chill pill in the extraction process—no heat, no chemicals. The result? A superstar oil with a unique flavor twist, a treasure of nutrients, and a fan club for its health perks.</p>

// <h2>Powerhouse Of Nutrients</h2>

// <p>It's got omega-3 fatty acids, the superheroes for your heart, and vitamin E, the skin's BFF fighting for your glow-up game. And guess what? The cool part is, thanks to the extraction process avoiding hot vibes, these nutritional rockstars stay locked and loaded, making it the wholesome boost your diet deserves. 💫</p>

// <h2>Flavor And Aroma</h2>

// <p>Cold-pressing keeps the bold and zesty vibes intact, giving mustard oil its unmistakable kick. It's like a flavor fiesta with its unique taste and a powerful aroma that throws a party in your dishes. 🎉🌿</p>

// <h2>Ayurvedic Wellness</h2>

// <p>Mustard oil has scored big in the wellness arena! Ayurveda gives it a high-five for improving the digestion, boosting circulation, and rocking natural antibacterial vibes. When it comes to massages, this oil is like a spa day for your skin and muscles. Ancient healing, meet modern bliss! 🌿🧘</p>

// <h2>Other Uses</h2>

// <p>It's also a beauty secret! Massage it on your scalp and hair for a dose of strength and shine. And guess what? Your skin is in for a treat too – the moisturizing magic makes it a go-to for a pampering skincare routine. Talk about a versatile oil! 💆‍♀️✨</p>`,
//     faqs: [
//       {
//         question: "What makes cold-pressed mustard oil different?",
//         answer: "Cold-pressed mustard oil is extracted without heat or chemicals, preserving all natural nutrients, flavor, and aroma."
//       },
//       {
//         question: "Can I use mustard oil for cooking?",
//         answer: "Yes! Mustard oil is excellent for high-heat cooking, tadkas, pickles, and traditional Indian recipes."
//       },
//       {
//         question: "Is mustard oil good for hair?",
//         answer: "Absolutely. Regular massage with mustard oil strengthens hair roots, promotes growth, and adds natural shine."
//       }
//     ]
//   },
//   {
//     id: "2",
//     title: "Soyabean Oil – The Heart-Healthy Choice",
//     category: "Soyabean Oil",
//     image: "/images/soyabean-blog.jpg",
//     date: "February 15, 2024",
//     author: "Veer Bharat Team",
//     views: 445,
//     readTime: "4 min read",
//     excerpt: "Learn why soyabean oil has become the preferred choice for health-conscious families across India.",
//     content: `<p>Soyabean oil has emerged as one of the most popular cooking oils in modern Indian kitchens, and for good reason. This light, versatile oil brings together health benefits, culinary flexibility, and affordability in one golden package.</p>

// <h2>Rich In Polyunsaturated Fats</h2>

// <p>Soyabean oil is packed with omega-3 and omega-6 fatty acids, essential nutrients that your body can't produce on its own. These healthy fats support heart health, reduce inflammation, and contribute to brain function. With low saturated fat content, it's an excellent choice for those watching their cholesterol levels.</p>

// <h2>Vitamin E Powerhouse</h2>

// <p>One of the standout features of soyabean oil is its high vitamin E content. This powerful antioxidant protects your cells from damage, supports immune function, and promotes healthy skin. Regular consumption can contribute to your daily vitamin E requirements.</p>

// <h2>Versatile Cooking Companion</h2>

// <p>From shallow frying samosas to making salad dressings, soyabean oil adapts to every cooking method. Its neutral flavor doesn't overpower dishes, making it perfect for both Indian and continental cuisines. The high smoke point ensures it remains stable even at elevated temperatures.</p>

// <h2>Cost-Effective Quality</h2>

// <p>Compared to other premium oils, soyabean oil offers excellent value for money without compromising on quality. This makes it accessible to families across all income brackets, democratizing access to healthy cooking oils.</p>`,
//     faqs: [
//       {
//         question: "Is soyabean oil suitable for deep frying?",
//         answer: "Yes, soyabean oil has a high smoke point (around 230°C), making it ideal for deep frying and high-temperature cooking."
//       },
//       {
//         question: "Does soyabean oil contain cholesterol?",
//         answer: "No, soyabean oil is plant-based and contains zero cholesterol, making it heart-friendly."
//       }
//     ]
//   },
//   {
//     id: "3",
//     title: "Sunflower Oil – Sunshine In A Bottle",
//     category: "Sunflower Oil",
//     image: "/images/sunflower-blog.jpg",
//     date: "March 10, 2024",
//     author: "Veer Bharat Team",
//     views: 521,
//     readTime: "4 min read",
//     excerpt: "Discover why sunflower oil is becoming a kitchen essential for families nationwide.",
//     content: `<p>Extracted from the seeds of the cheerful sunflower plant, sunflower oil has become a kitchen staple for millions. Its light texture, neutral taste, and impressive nutritional profile make it a favorite among home cooks and professional chefs alike.</p>

// <h2>Vitamin E Champion</h2>

// <p>Sunflower oil is one of the richest sources of vitamin E among all cooking oils. Just a tablespoon provides a significant portion of your daily vitamin E needs. This fat-soluble antioxidant protects your body's cells from oxidative stress.</p>

// <h2>Heart-Friendly Fats</h2>

// <p>With a balanced ratio of polyunsaturated and monounsaturated fats, sunflower oil supports cardiovascular health. It helps maintain healthy cholesterol levels when used as part of a balanced diet.</p>

// <h2>Light & Non-Greasy</h2>

// <p>Unlike heavier oils, sunflower oil has a light texture that doesn't leave food feeling greasy. This makes it perfect for sautéing vegetables, making crispy pakoras, or even baking cakes and cookies.</p>

// <h2>Stability & Shelf Life</h2>

// <p>Refined sunflower oil has excellent stability and a long shelf life when stored properly. The refining process removes impurities while retaining beneficial nutrients.</p>`,
//     faqs: [
//       {
//         question: "Can I use sunflower oil for baking?",
//         answer: "Absolutely! Sunflower oil's neutral flavor and light texture make it perfect for cakes, cookies, and muffins."
//       },
//       {
//         question: "How should I store sunflower oil?",
//         answer: "Store in a cool, dark place away from direct sunlight. Once opened, use within 6-8 months for best quality."
//       }
//     ]
//   },
//   {
//     id: "4",
//     title: "Rice Bran Oil – The Cholesterol Fighter",
//     category: "Rice Bran Oil",
//     image: "/images/ricebran-blog.jpg",
//     date: "April 5, 2024",
//     author: "Veer Bharat Team",
//     views: 389,
//     readTime: "5 min read",
//     excerpt: "Uncover the hidden health benefits of rice bran oil, Asia's best-kept wellness secret.",
//     content: `<p>Rice bran oil, extracted from the nutrient-rich outer layer of rice grains, is one of Asia's best-kept health secrets. Popular in Japan and other Asian countries for decades, this oil is now gaining recognition worldwide.</p>

// <h2>Oryzanol Magic</h2>

// <p>The star component of rice bran oil is gamma-oryzanol, a unique compound rarely found in other oils. Studies suggest that oryzanol can help lower bad cholesterol (LDL) while maintaining or even increasing good cholesterol (HDL).</p>

// <h2>Balanced Fatty Acid Profile</h2>

// <p>Rice bran oil boasts a near-perfect balance of saturated, monounsaturated, and polyunsaturated fats. This ideal ratio, recommended by the World Health Organization, makes it one of the healthiest cooking oils available.</p>

// <h2>High Smoke Point Excellence</h2>

// <p>With a smoke point of around 232°C (450°F), rice bran oil is perfect for high-temperature cooking methods like deep frying and stir-frying. It doesn't break down easily, ensuring that your food remains healthy.</p>

// <h2>Skin & Beauty Benefits</h2>

// <p>Beyond cooking, rice bran oil is prized in skincare for its moisturizing properties. Rich in vitamin E and antioxidants, it can be used topically to nourish skin and reduce signs of aging.</p>`,
//     faqs: [
//       {
//         question: "What is gamma-oryzanol?",
//         answer: "Gamma-oryzanol is a unique antioxidant compound found in rice bran oil that helps manage cholesterol levels and supports heart health."
//       },
//       {
//         question: "Can rice bran oil be used for Indian cooking?",
//         answer: "Yes! Its high smoke point and neutral flavor make it perfect for all types of Indian cooking, from tadkas to deep frying."
//       }
//     ]
//   },
//   {
//     id: "5",
//     title: "Palm Oil – The Versatile Kitchen Essential",
//     category: "Palm Oil",
//     image: "/images/palm-blog.jpg",
//     date: "May 20, 2024",
//     author: "Veer Bharat Team",
//     views: 467,
//     readTime: "4 min read",
//     excerpt: "Explore the unique properties that make palm oil indispensable in kitchens worldwide.",
//     content: `<p>Palm oil, derived from the fruit of the oil palm tree, is one of the most widely used cooking oils globally. Its unique properties make it indispensable in both home kitchens and commercial food production.</p>

// <h2>Natural Semi-Solid State</h2>

// <p>Unlike most other oils, palm oil is semi-solid at room temperature due to its balanced composition of saturated and unsaturated fats. This unique characteristic makes it ideal for creating textures in baked goods.</p>

// <h2>Rich In Carotenoids</h2>

// <p>Palm oil's distinctive red-orange color comes from its high beta-carotene content, the precursor to vitamin A. These carotenoids are powerful antioxidants that support eye health and boost immunity.</p>

// <h2>High Temperature Stability</h2>

// <p>With excellent heat stability, palm oil is perfect for deep frying and commercial food preparation. It doesn't oxidize easily, meaning it can be reused more times than many other oils.</p>

// <h2>Versatile Applications</h2>

// <p>Beyond cooking, palm oil is used in everything from making traditional ghee alternatives to preparing authentic sweets and savories. Professional bakers particularly value it for creating consistent, high-quality baked goods.</p>

// <h2>Sustainability Matters</h2>

// <p>At Veer Bharat, we source our palm oil from certified sustainable plantations that follow ethical farming practices.</p>`,
//     faqs: [
//       {
//         question: "Is palm oil healthy?",
//         answer: "Yes, when consumed in moderation. Palm oil contains beneficial nutrients like vitamin E and beta-carotene, though it's higher in saturated fats than some other oils."
//       },
//       {
//         question: "Why does palm oil solidify?",
//         answer: "Palm oil's balanced fat composition causes it to be semi-solid at room temperature, similar to coconut oil."
//       }
//     ]
//   },
//   {
//     id: "6",
//     title: "Kachi Ghani vs Refined Oil – The Truth",
//     category: "Mustard Oil",
//     image: "/images/mustard-blog.jpg",
//     date: "June 12, 2024",
//     author: "Veer Bharat Team",
//     views: 612,
//     readTime: "6 min read",
//     excerpt: "Understand the real differences between traditional Kachi Ghani and refined oils to make informed choices.",
//     content: `<p>The debate between Kachi Ghani (cold-pressed) and refined oils has been ongoing in Indian households for years. Understanding the differences can help you make informed choices for your family's health.</p>

// <h2>Kachi Ghani – The Traditional Method</h2>

// <p>Kachi Ghani, or cold-press extraction, is an ancient technique where oil seeds are crushed at low temperatures without applying heat. This gentle process preserves the natural aroma, flavor, and nutritional content of the oil.</p>

// <h2>The Kachi Ghani Advantage</h2>

// <p>Cold-pressed oils retain their natural pungency and strong aroma, which many consider essential for authentic taste in traditional recipes. The absence of chemical solvents means you get pure, unadulterated oil.</p>

// <h2>Refined Oil – The Modern Approach</h2>

// <p>Refining involves heating the oil and using chemical solvents to extract maximum oil from seeds. The oil then undergoes bleaching and deodorizing to remove impurities, color, and odor.</p>

// <h2>Benefits Of Refined Oil</h2>

// <p>Refined oils have a higher smoke point, making them suitable for high-temperature cooking without breaking down. Their neutral flavor doesn't overpower delicate dishes.</p>

// <h2>Making The Right Choice</h2>

// <p>Both types have their place in your kitchen. Use Kachi Ghani mustard oil for tadkas, pickles, and traditional recipes. Opt for refined oils for versatile everyday cooking and when you need a neutral flavor.</p>`,
//     faqs: [
//       {
//         question: "Which is healthier: Kachi Ghani or refined oil?",
//         answer: "Kachi Ghani retains more natural nutrients, but refined oils have higher smoke points for high-heat cooking. Both can be part of a healthy diet when used appropriately."
//       },
//       {
//         question: "Can I use Kachi Ghani oil for deep frying?",
//         answer: "While possible, Kachi Ghani oil has a lower smoke point than refined oils. It's best used for tadkas, pickles, and moderate-heat cooking."
//       }
//     ]
//   }
// ];

// // THIS IS REQUIRED for static export
// export function generateStaticParams() {
//   return blogs.map((blog) => ({
//     id: blog.id,
//   }));
// }

// export default function SingleBlogPage({ params }) {
//   const blogId = params.id;
//   const blog = blogs.find(b => b.id === blogId) || blogs[0];
//   const relatedBlogs = blogs.filter(b => b.id !== blog.id).slice(0, 3);

//   return (
//     <main className="min-h-screen bg-white">
//       {/* Breadcrumb Navigation */}
//       <div className="bg-[#fef9c3] border-b border-amber-200">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <nav className="flex items-center gap-2 text-sm md:text-base text-gray-700 font-medium">
//             <Link href="/" className="hover:text-amber-700 transition-colors">
//               Home
//             </Link>
//             <span className="text-gray-400">›</span>
//             <Link href="/blog" className="hover:text-amber-700 transition-colors">
//               Blog
//             </Link>
//             <span className="text-gray-400">›</span>
//             <span className="text-gray-900 font-semibold truncate">{blog.title}</span>
//           </nav>
//         </div>
//       </div>

//       {/* Hero Section */}
//       <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
//         {/* Category Badge */}
//         <div className="mb-6">
//           <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-sm md:text-base font-bold shadow-md">
//             {blog.category}
//           </span>
//         </div>

//         {/* Title */}
//         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 md:mb-8 leading-tight">
//           {blog.title}
//         </h1>

//         {/* Excerpt */}
//         {blog.excerpt && (
//           <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 leading-relaxed max-w-4xl">
//             {blog.excerpt}
//           </p>
//         )}

//         {/* Meta Information */}
//         <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm md:text-base text-gray-600 pb-8 md:pb-10 mb-8 md:mb-10 border-b-2 border-gray-200">
//           <div className="flex items-center gap-2">
//             <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center text-white font-black text-lg md:text-xl shadow-md">
//               V
//             </div>
//             <span className="font-semibold text-gray-900">{blog.author}</span>
//           </div>
//           <span className="hidden sm:inline text-gray-300">|</span>
//           <span>📅 {blog.date}</span>
//           <span className="hidden sm:inline text-gray-300">|</span>
//           <span>⏱️ {blog.readTime}</span>
//           <span className="hidden sm:inline text-gray-300">|</span>
//           <span>👁️ {blog.views} views</span>
//         </div>

//         {/* Featured Image */}
//         <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl mb-10 md:mb-14">
//           <Image
//             src={blog.image}
//             alt={blog.title}
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>

//         {/* Main Content */}
//         <div className="prose prose-base md:prose-lg lg:prose-xl max-w-none">
//           <div 
//             className="blog-content"
//             dangerouslySetInnerHTML={{ __html: blog.content }}
//           />
//         </div>

//         {/* FAQ Section */}
//         {blog.faqs && blog.faqs.length > 0 && (
//           <section className="mt-12 md:mt-16 pt-10 md:pt-12 border-t-2 border-gray-200">
//             <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 md:mb-8">
//               FAQs
//             </h2>
//             <div className="space-y-6 md:space-y-8">
//               {blog.faqs.map((faq, index) => (
//                 <div key={index} className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 md:p-8 shadow-md border border-amber-100">
//                   <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
//                     {index + 1}. {faq.question}
//                   </h3>
//                   <p className="text-base md:text-lg text-gray-700 leading-relaxed">
//                     {faq.answer}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         {/* Share Section */}
//         <div className="mt-12 md:mt-16 pt-10 md:pt-12 border-t-2 border-gray-200">
//           <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
//             Share this article
//           </h3>
//           <div className="flex flex-wrap gap-3 md:gap-4">
//             <button className="px-5 py-3 md:px-6 md:py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base font-bold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
//               📘 Facebook
//             </button>
//             <button className="px-5 py-3 md:px-6 md:py-3.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-sm md:text-base font-bold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
//               🐦 Twitter
//             </button>
//             <button className="px-5 py-3 md:px-6 md:py-3.5 rounded-xl bg-green-600 hover:bg-green-700 text-white text-sm md:text-base font-bold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
//               💬 WhatsApp
//             </button>
//             <button className="px-5 py-3 md:px-6 md:py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm md:text-base font-bold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
//               🔗 LinkedIn
//             </button>
//           </div>
//         </div>
//       </article>

//       {/* Related Articles */}
//       <section className="bg-gradient-to-b from-[#fef9c3] to-amber-50 py-12 md:py-16 lg:py-20 mt-12 md:mt-16">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-8 md:mb-12">
//             Related Articles
//           </h2>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//             {relatedBlogs.map((related) => (
//               <Link
//                 key={related.id}
//                 href={`/blog/${related.id}`}
//                 className="group bg-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-amber-400 transform hover:-translate-y-2"
//               >
//                 <div className="relative h-48 sm:h-52 md:h-56">
//                   <Image
//                     src={related.image}
//                     alt={related.title}
//                     fill
//                     className="object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute top-4 left-4">
//                     <span className="inline-block px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-xs md:text-sm font-bold text-amber-700 shadow-md">
//                       {related.category}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="p-5 md:p-6">
//                   <h3 className="font-bold text-lg md:text-xl text-gray-900 group-hover:text-amber-600 transition-colors leading-tight mb-3 line-clamp-2">
//                     {related.title}
//                   </h3>
//                   <p className="text-sm md:text-base text-gray-600 mb-4 line-clamp-2">
//                     {related.excerpt}
//                   </p>
//                   <div className="flex items-center justify-between text-xs md:text-sm text-gray-500">
//                     <span>⏱️ {related.readTime}</span>
//                     <span className="font-semibold text-amber-600 group-hover:text-amber-700">
//                       Read More →
//                     </span>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Back Button */}
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
//         <Link
//           href="/blog"
//           className="inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white text-base md:text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
//         >
//           ← Back to Blog
//         </Link>
//       </div>

//       <style jsx>{`
//         :global(.blog-content p) {
//           font-size: 1.125rem;
//           line-height: 1.8;
//           color: #374151;
//           margin-bottom: 1.5rem;
//           text-align: justify;
//         }

//         :global(.blog-content h2) {
//           font-size: 1.875rem;
//           font-weight: 800;
//           color: #0b2b52;
//           margin-top: 2.5rem;
//           margin-bottom: 1.25rem;
//           line-height: 1.3;
//         }

//         :global(.blog-content h3) {
//           font-size: 1.5rem;
//           font-weight: 700;
//           color: #1f2937;
//           margin-top: 2rem;
//           margin-bottom: 1rem;
//         }

//         :global(.blog-content strong) {
//           font-weight: 700;
//           color: #111827;
//         }

//         :global(.blog-content ul),
//         :global(.blog-content ol) {
//           margin-bottom: 1.5rem;
//           padding-left: 1.5rem;
//         }

//         :global(.blog-content li) {
//           font-size: 1.125rem;
//           line-height: 1.8;
//           color: #374151;
//           margin-bottom: 0.75rem;
//         }

//         :global(.blog-content blockquote) {
//           border-left: 4px solid #f59e0b;
//           padding-left: 1.5rem;
//           margin: 2rem 0;
//           font-style: italic;
//           color: #6b7280;
//         }

//         @media (max-width: 768px) {
//           :global(.blog-content p),
//           :global(.blog-content li) {
//             font-size: 1rem;
//             line-height: 1.7;
//           }

//           :global(.blog-content h2) {
//             font-size: 1.5rem;
//             margin-top: 2rem;
//             margin-bottom: 1rem;
//           }

//           :global(.blog-content h3) {
//             font-size: 1.25rem;
//             margin-top: 1.5rem;
//           }
//         }

//         @media (max-width: 640px) {
//           :global(.blog-content p),
//           :global(.blog-content li) {
//             font-size: 0.9375rem;
//             text-align: left;
//           }

//           :global(.blog-content h2) {
//             font-size: 1.375rem;
//           }
//         }
//       `}</style>
//     </main>
//   );
// }
