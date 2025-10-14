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

  // Fallback: sample details if missing, for full responsiveness
  const highlights = product.highlights || ["Pure", "Lab-tested", "Cold-pressed"];
  const gallery = product.gallery || [product.image];
  const long = product.long || product.short || "";
  const tagline = product.tagline || "The best of tradition meets taste and nutrition.";

  return (
    <main>
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
        <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col justify-end pb-10 px-2 md:px-6">
          <div className="flex flex-wrap gap-1 items-center mb-2">
            {highlights.slice(0, 3).map((hl) => (
              <span key={hl} className="inline-block bg-amber-100 text-amber-800 rounded-full px-3 py-1 mr-2 text-xs font-semibold">{hl}</span>
            ))}
          </div>
          <h1 className="mt-1 text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1b2a3a]">
            {product.name}
          </h1>
          <p className="mt-2 text-base md:text-lg text-ink-700 max-w-xl">{tagline}</p>
          <div className="mt-5 flex flex-col xs:flex-row gap-2 md:gap-4">
            <Link href="/contact" className="btn-primary w-full xs:w-auto text-center">Enquire</Link>
            <Link href="/products" className="btn-ghost w-full xs:w-auto text-center">Back to Products</Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-2 md:px-6 py-7 sm:py-10 grid gap-6 md:gap-10 grid-cols-1 md:grid-cols-[1.2fr_1fr]">
        <article className="bg-white/80 rounded-2xl shadow p-4 xs:p-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold">About {product.name}</h2>
          <p className="mt-3 text-ink-700 leading-relaxed">{long}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {highlights.map((h) => (
              <span key={h} className="inline-block bg-amber-50 text-amber-700 rounded-full px-3 py-1 text-xs sm:text-sm font-semibold">{h}</span>
            ))}
          </div>
        </article>
        <aside className="space-y-4">
          {gallery.map((src, i) => (
            <div key={i} className="relative h-36 xs:h-40 sm:h-48 rounded-2xl overflow-hidden border border-cream-300 bg-white/70">
              <Image src={src} alt={`${product.name} ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
          <div className="bg-white/80 shadow rounded-2xl p-4">
            <h3 className="font-extrabold">Pack Sizes</h3>
            <p className="text-sm text-ink-500 mt-1">
              500 ml • 1 L • 2 L • 5 L (varies by product)
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}

