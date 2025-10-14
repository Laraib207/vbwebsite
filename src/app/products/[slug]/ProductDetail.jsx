// "use client";

// import { notFound } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import { products } from "../../../data/products";

// export default function ProductDetail({ params }) {
//   const product = products.find((p) => p.slug === params.slug);
//   if (!product) return notFound();

//   return (
//     <main>
//       {/* Hero */}
//       <section
//         className="relative w-full"
//         style={{ height: "clamp(60vh,85vh,92vh)" }}
//       >
//         <Image
//           src={product.image}
//           alt={product.name}
//           fill
//           className="object-cover"
//           priority
//         />
//         <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0.4))]" />
//         <div className="relative z-10 container h-full flex flex-col justify-end pb-10">
//           <div className="badge">
//             {product.highlights.slice(0, 3).join(" • ")}
//           </div>
//           <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold">
//             {product.name}
//           </h1>
//           <p className="mt-2 text-lg text-ink-700">{product.tagline}</p>
//           <div className="mt-5 flex gap-3">
//             <Link href="/contact" className="btn-primary">
//               Enquire
//             </Link>
//             <Link href="/products" className="btn-ghost">
//               Back to Products
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Content */}
//       <section className="container py-10 grid gap-8 md:grid-cols-[1.2fr_1fr]">
//         <article className="card p-6">
//           <h2 className="text-2xl font-extrabold">About {product.name}</h2>
//           <p className="mt-3 text-ink-700 leading-relaxed">{product.long}</p>
//           <div className="mt-6 flex flex-wrap gap-2">
//             {product.highlights.map((h) => (
//               <span key={h} className="badge">
//                 {h}
//               </span>
//             ))}
//           </div>
//         </article>

//         <aside className="space-y-4">
//           {product.gallery.map((src, i) => (
//             <div
//               key={i}
//               className="relative h-48 rounded-2xl overflow-hidden border border-cream-300 bg-white/70"
//             >
//               <Image
//                 src={src}
//                 alt={`${product.name} ${i + 1}`}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           ))}
//           <div className="card p-4">
//             <h3 className="font-extrabold">Pack Sizes</h3>
//             <p className="text-sm text-ink-500 mt-1">
//               500 ml • 1 L • 2 L • 5 L (varies by product)
//             </p>
//           </div>
//         </aside>
//       </section>
//     </main>
//   );
// }




"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products } from "../../../data/products";

export default function ProductDetail({ params }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  const highlights = product.highlights || ["Pure", "Lab-tested", "Cold-pressed"];
  const gallery = product.gallery || [product.image];
  const long = product.long || product.short || "";
  const tagline = product.tagline || "The best of tradition meets taste and nutrition.";

  return (
    <main style={{ background: "#fef9c3" }} className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative w-full"
        style={{ height: "clamp(60vh,80vh,92vh)" }}
      >
        <div className="absolute inset-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.83),rgba(255,255,255,0.38))]" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col justify-end pb-10 px-4 md:px-6">
          <div className="flex flex-wrap gap-2 items-center mb-3">
            {highlights.slice(0, 3).map((hl) => (
              <span
                key={hl}
                className="inline-block bg-amber-100 text-amber-800 rounded-full px-3 py-1 text-xs font-semibold shadow-sm"
              >
                {hl}
              </span>
            ))}
          </div>
          <h1 className="mt-2 text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1b2a3a] leading-tight">
            {product.name}
          </h1>
          <p className="mt-3 text-base md:text-lg text-gray-700 max-w-xl leading-relaxed">
            {tagline}
          </p>
          <div className="mt-6 flex flex-col xs:flex-row gap-3 md:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-base md:text-lg"
            >
              Enquire Now →
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 border-2 border-amber-500 text-amber-700 font-bold hover:bg-amber-50 transition-all duration-300 text-base md:text-lg"
            >
              ← Back to Products
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section - Fixed Grid Layout */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-8 sm:py-12">
        <div className="grid gap-6 md:gap-10 grid-cols-1 md:grid-cols-2">
          {/* Left Column - About Product */}
          <article className="bg-white/90 rounded-3xl shadow-xl p-5 xs:p-6 md:p-8 border-2 border-amber-100">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              About {product.name}
            </h2>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              {long}
            </p>
            <div className="mt-6 pt-6 border-t-2 border-amber-100">
              <h3 className="text-lg font-bold text-amber-700 mb-3">Key Features</h3>
              <div className="flex flex-wrap gap-2">
                {highlights.map((h) => (
                  <span
                    key={h}
                    className="inline-block bg-amber-50 text-amber-800 rounded-full px-4 py-2 text-sm font-semibold border border-amber-200"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* Right Column - Gallery & Info */}
          <aside className="space-y-5">
            {/* Gallery Images */}
            {gallery.slice(0, 3).map((src, i) => (
              <div
                key={i}
                className="relative h-40 xs:h-48 sm:h-56 rounded-3xl overflow-hidden border-2 border-amber-200 bg-white shadow-lg"
              >
                <Image
                  src={src}
                  alt={`${product.name} ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}

            {/* Pack Sizes Card */}
            <div className="bg-white/90 shadow-xl rounded-3xl p-5 border-2 border-amber-100">
              <h3 className="text-xl font-extrabold text-gray-900 mb-2">Available Pack Sizes</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="inline-block bg-gradient-to-r from-amber-50 to-amber-100 text-amber-800 rounded-full px-4 py-2 text-sm font-bold border border-amber-200">
                  500 ml
                </span>
                <span className="inline-block bg-gradient-to-r from-amber-50 to-amber-100 text-amber-800 rounde
                d-full px-4 py-2 text-sm font-bold border border-amber-200">
                  1 Litre
                </span>
                <span className="inline-block bg-gradient-to-r from-amber-50 to-amber-100 text-amber-800 rounded-full px-4 py-2 text-sm font-bold border border-amber-200">
                  2 Litres
                </span>
                <span className="inline-block bg-gradient-to-r from-amber-50 to-amber-100 text-amber-800 rounded-full px-4 py-2 text-sm font-bold border border-amber-200">
                  5 Litres
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-3 italic">
                * Pack sizes may vary by product and location
              </p>
            </div>
          </aside>
        </div>

        {/* Additional Information Section */}
        <div className="mt-10 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-3xl p-6 md:p-8 border-2 border-amber-200 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
            Why Choose Veer Bharat?
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div className="bg-white rounded-2xl p-4 shadow-md border border-amber-100">
              <div className="text-3xl mb-2">✓</div>
              <h4 className="font-bold text-gray-900 mb-1">Quality Assured</h4>
              <p className="text-sm text-gray-600">
                Every batch is lab-tested for purity and quality standards
              </p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-md border border-amber-100">
              <div className="text-3xl mb-2">🌾</div>
              <h4 className="font-bold text-gray-900 mb-1">Farm Fresh</h4>
              <p className="text-sm text-gray-600">
                Sourced directly from trusted farmers across India
              </p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-md border border-amber-100">
              <div className="text-3xl mb-2">💚</div>
              <h4 className="font-bold text-gray-900 mb-1">Chemical Free</h4>
              <p className="text-sm text-gray-600">
                No artificial additives, preservatives or chemicals
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}