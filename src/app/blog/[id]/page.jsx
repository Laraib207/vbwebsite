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
    content: `Ever explored the world of **cold-pressed mustard oil**? Curious about its uses and the awesome benefits it brings to the table?

Let's dive into the cool and informative realm of this Cold-Pressed Mustard Oil. 🌿💡

Cold-pressed mustard oil comes to life from mustard seeds, taking a chill pill in the extraction process—no heat, no chemicals. The result? A superstar oil with a unique flavor twist, a treasure of nutrients, and a fan club for its health perks.

## Powerhouse Of Nutrients

It's got omega-3 fatty acids, the superheroes for your heart, and vitamin E, the skin's BFF fighting for your glow-up game. And guess what? The cool part is, thanks to the extraction process avoiding hot vibes, these nutritional rockstars stay locked and loaded, making it the wholesome boost your diet deserves. 💫

## Flavor And Aroma

Cold-pressing keeps the bold and zesty vibes intact, giving mustard oil its unmistakable kick. It's like a flavor fiesta with its unique taste and a powerful aroma that throws a party in your dishes. 🎉🌿

## Ayurvedic Wellness

Mustard oil has scored big in the wellness arena! Ayurveda gives it a high-five for improving the digestion, boosting circulation, and rocking natural antibacterial vibes. When it comes to massages, this oil is like a spa day for your skin and muscles. Ancient healing, meet modern bliss! 🌿🧘

## Other Uses

It's also a beauty secret! Massage it on your scalp and hair for a dose of strength and shine. And guess what? Your skin is in for a treat too – the moisturizing magic makes it a go-to for a pampering skincare routine. Talk about a versatile oil! 💆‍♀️✨`
  },
  {
    id: "2",
    title: "Soyabean Oil – The Heart-Healthy Choice",
    category: "Soyabean Oil",
    image: "/images/soyabean-blog.jpg",
    date: "February 15, 2024",
    author: "Veer Bharat Team",
    views: 445,
    content: `Soyabean oil has emerged as one of the most popular cooking oils in modern Indian kitchens, and for good reason. This light, versatile oil brings together health benefits, culinary flexibility, and affordability in one golden package.

## Rich In Polyunsaturated Fats

Soyabean oil is packed with omega-3 and omega-6 fatty acids, essential nutrients that your body can't produce on its own. These healthy fats support heart health, reduce inflammation, and contribute to brain function. With low saturated fat content, it's an excellent choice for those watching their cholesterol levels.

## Vitamin E Powerhouse

One of the standout features of soyabean oil is its high vitamin E content. This powerful antioxidant protects your cells from damage, supports immune function, and promotes healthy skin. Regular consumption can contribute to your daily vitamin E requirements.

## Versatile Cooking Companion

From shallow frying samosas to making salad dressings, soyabean oil adapts to every cooking method. Its neutral flavor doesn't overpower dishes, making it perfect for both Indian and continental cuisines. The high smoke point ensures it remains stable even at elevated temperatures.

## Cost-Effective Quality

Compared to other premium oils, soyabean oil offers excellent value for money without compromising on quality. This makes it accessible to families across all income brackets, democratizing access to healthy cooking oils.`
  },
  {
    id: "3",
    title: "Sunflower Oil – Sunshine In A Bottle",
    category: "Sunflower Oil",
    image: "/images/sunflower-blog.jpg",
    date: "March 10, 2024",
    author: "Veer Bharat Team",
    views: 521,
    content: `Extracted from the seeds of the cheerful sunflower plant, sunflower oil has become a kitchen staple for millions. Its light texture, neutral taste, and impressive nutritional profile make it a favorite among home cooks and professional chefs alike.

## Vitamin E Champion

Sunflower oil is one of the richest sources of vitamin E among all cooking oils. Just a tablespoon provides a significant portion of your daily vitamin E needs. This fat-soluble antioxidant protects your body's cells from oxidative stress.

## Heart-Friendly Fats

With a balanced ratio of polyunsaturated and monounsaturated fats, sunflower oil supports cardiovascular health. It helps maintain healthy cholesterol levels when used as part of a balanced diet.

## Light & Non-Greasy

Unlike heavier oils, sunflower oil has a light texture that doesn't leave food feeling greasy. This makes it perfect for sautéing vegetables, making crispy pakoras, or even baking cakes and cookies.

## Stability & Shelf Life

Refined sunflower oil has excellent stability and a long shelf life when stored properly. The refining process removes impurities while retaining beneficial nutrients.`
  },
  {
    id: "4",
    title: "Rice Bran Oil – The Cholesterol Fighter",
    category: "Rice Bran Oil",
    image: "/images/ricebran-blog.jpg",
    date: "April 5, 2024",
    author: "Veer Bharat Team",
    views: 389,
    content: `Rice bran oil, extracted from the nutrient-rich outer layer of rice grains, is one of Asia's best-kept health secrets. Popular in Japan and other Asian countries for decades, this oil is now gaining recognition worldwide.

## Oryzanol Magic

The star component of rice bran oil is gamma-oryzanol, a unique compound rarely found in other oils. Studies suggest that oryzanol can help lower bad cholesterol (LDL) while maintaining or even increasing good cholesterol (HDL).

## Balanced Fatty Acid Profile

Rice bran oil boasts a near-perfect balance of saturated, monounsaturated, and polyunsaturated fats. This ideal ratio, recommended by the World Health Organization, makes it one of the healthiest cooking oils available.

## High Smoke Point Excellence

With a smoke point of around 232°C (450°F), rice bran oil is perfect for high-temperature cooking methods like deep frying and stir-frying. It doesn't break down easily, ensuring that your food remains healthy.

## Skin & Beauty Benefits

Beyond cooking, rice bran oil is prized in skincare for its moisturizing properties. Rich in vitamin E and antioxidants, it can be used topically to nourish skin and reduce signs of aging.`
  },
  {
    id: "5",
    title: "Palm Oil – The Versatile Kitchen Essential",
    category: "Palm Oil",
    image: "/images/palm-blog.jpg",
    date: "May 20, 2024",
    author: "Veer Bharat Team",
    views: 467,
    content: `Palm oil, derived from the fruit of the oil palm tree, is one of the most widely used cooking oils globally. Its unique properties make it indispensable in both home kitchens and commercial food production.

## Natural Semi-Solid State

Unlike most other oils, palm oil is semi-solid at room temperature due to its balanced composition of saturated and unsaturated fats. This unique characteristic makes it ideal for creating textures in baked goods.

## Rich In Carotenoids

Palm oil's distinctive red-orange color comes from its high beta-carotene content, the precursor to vitamin A. These carotenoids are powerful antioxidants that support eye health and boost immunity.

## High Temperature Stability

With excellent heat stability, palm oil is perfect for deep frying and commercial food preparation. It doesn't oxidize easily, meaning it can be reused more times than many other oils.

## Versatile Applications

Beyond cooking, palm oil is used in everything from making traditional ghee alternatives to preparing authentic sweets and savories. Professional bakers particularly value it for creating consistent, high-quality baked goods.

## Sustainability Matters

At Veer Bharat, we source our palm oil from certified sustainable plantations that follow ethical farming practices.`
  },
  {
    id: "6",
    title: "Kachi Ghani vs Refined Oil – The Truth",
    category: "Mustard Oil",
    image: "/images/mustard-blog.jpg",
    date: "June 12, 2024",
    author: "Veer Bharat Team",
    views: 612,
    content: `The debate between Kachi Ghani (cold-pressed) and refined oils has been ongoing in Indian households for years. Understanding the differences can help you make informed choices for your family's health.

## Kachi Ghani – The Traditional Method

Kachi Ghani, or cold-press extraction, is an ancient technique where oil seeds are crushed at low temperatures without applying heat. This gentle process preserves the natural aroma, flavor, and nutritional content of the oil.

## The Kachi Ghani Advantage

Cold-pressed oils retain their natural pungency and strong aroma, which many consider essential for authentic taste in traditional recipes. The absence of chemical solvents means you get pure, unadulterated oil.

## Refined Oil – The Modern Approach

Refining involves heating the oil and using chemical solvents to extract maximum oil from seeds. The oil then undergoes bleaching and deodorizing to remove impurities, color, and odor.

## Benefits Of Refined Oil

Refined oils have a higher smoke point, making them suitable for high-temperature cooking without breaking down. Their neutral flavor doesn't overpower delicate dishes.

## Making The Right Choice

Both types have their place in your kitchen. Use Kachi Ghani mustard oil for tadkas, pickles, and traditional recipes. Opt for refined oils for versatile everyday cooking and when you need a neutral flavor.`
  }
];

// Generate static params
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
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto px-6 pt-8">
        <nav className="flex items-center gap-3 text-base text-gray-600 font-medium">
          <Link href="/" className="hover:text-amber-600 transition">Home</Link>
          <span className="text-xl">›</span>
          <Link href="/blog" className="hover:text-amber-600 transition">Blog</Link>
          <span className="text-xl">›</span>
          <span className="text-gray-900 font-bold">{blog.category}</span>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <span className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-lg font-bold mb-6 shadow-xl">
            {blog.category}
          </span>
          
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-8 leading-tight">
            {blog.title}
          </h1>

          <div className="flex items-center justify-center gap-8 text-gray-600 text-lg font-medium">
            <div className="flex items-center gap-3">
              <span className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-amber-400 flex items-center justify-center text-white font-bold text-xl">
                V
              </span>
              <span className="font-bold">{blog.author}</span>
            </div>
            <span className="text-2xl">•</span>
            <span className="text-lg">📅 {blog.date}</span>
            <span className="text-2xl">•</span>
            <span className="text-lg">👁️ {blog.views} views</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-[450px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl mb-14 border-4 border-white">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        {/* Content */}
        <article className="prose prose-xl max-w-none">
          <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-14">
            <div 
              className="text-gray-800 leading-relaxed space-y-8 text-lg"
              dangerouslySetInnerHTML={{ 
                __html: blog.content
                  .split('\n\n')
                  .map(para => {
                    if (para.startsWith('##')) {
                      return `<h2 class="text-4xl font-black text-amber-600 mt-10 mb-6">${para.replace('## ', '')}</h2>`;
                    }
                    return `<p class="text-justify text-xl leading-relaxed">${para}</p>`;
                  })
                  .join('') 
              }}
            />

            {/* Share Section */}
            <div className="mt-14 pt-10 border-t-2 border-amber-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Share this article</h3>
              <div className="flex gap-4">
                <button className="px-7 py-4 rounded-full bg-blue-500 text-white text-lg font-bold hover:scale-105 hover:shadow-xl transition">
                  Facebook
                </button>
                <button className="px-7 py-4 rounded-full bg-sky-400 text-white text-lg font-bold hover:scale-105 hover:shadow-xl transition">
                  Twitter
                </button>
                <button className="px-7 py-4 rounded-full bg-green-500 text-white text-lg font-bold hover:scale-105 hover:shadow-xl transition">
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Related Blogs */}
        <section className="mt-20">
          <h2 className="text-4xl font-black text-gray-900 mb-10">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedBlogs.map((related) => (
              <Link
                key={related.id}
                href={`/blog/${related.id}`}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border-2 border-transparent hover:border-amber-400"
              >
                <div className="relative h-56">
                  <Image
                    src={related.image}
                    alt={related.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 group-hover:text-amber-600 transition leading-tight mb-3">
                    {related.title}
                  </h3>
                  <p className="text-base text-gray-600 font-medium">{related.category}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Back Button */}
        <div className="mt-16 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition"
          >
            ← Back to Blog Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
