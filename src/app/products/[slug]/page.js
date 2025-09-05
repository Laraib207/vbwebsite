"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products } from "../../../data/products";

export default function ProductDetail({ params }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  return (
    <main>
      {/* Hero */}
      <section className="relative w-full" style={{ height: "clamp(60vh,85vh,92vh)" }}>
        <Image src={product.image} alt={product.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0.4))]" />
        <div className="relative z-10 container h-full flex flex-col justify-end pb-10">
          <div className="badge">{product.highlights.slice(0,3).join(" • ")}</div>
          <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold">{product.name}</h1>
          <p className="mt-2 text-lg text-ink-700">{product.tagline}</p>
          <div className="mt-5 flex gap-3">
            <Link href="/contact" className="btn-primary">Enquire</Link>
            <Link href="/products" className="btn-ghost">Back to Products</Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container py-10 grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <article className="card p-6">
          <h2 className="text-2xl font-extrabold">About {product.name}</h2>
          <p className="mt-3 text-ink-700 leading-relaxed">{product.long}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {product.highlights.map((h) => (
              <span key={h} className="badge">{h}</span>
            ))}
          </div>
        </article>

        <aside className="space-y-4">
          {product.gallery.map((src, i) => (
            <div key={i} className="relative h-48 rounded-2xl overflow-hidden border border-cream-300 bg-white/70">
              <Image src={src} alt={`${product.name} ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
          <div className="card p-4">
            <h3 className="font-extrabold">Pack Sizes</h3>
            <p className="text-sm text-ink-500 mt-1">500 ml • 1 L • 2 L • 5 L (varies by product)</p>
          </div>
        </aside>
      </section>
    </main>
  );
}
