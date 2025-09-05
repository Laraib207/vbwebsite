"use client";

import Link from "next/link";
import Image from "next/image";
import { products } from "../../data/products";

export default function ProductsPage() {
  return (
    <main className="container py-10">
      <header className="mb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold">Our Full Range of Products</h1>
        <p className="mt-1 text-ink-500">Click a product card to open its dedicated page.</p>
      </header>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <Link
            key={p.slug}
            href={`/products/${p.slug}`}
            className="card overflow-hidden hover:-translate-y-1 transition"
          >
            <div className="relative h-56">
              <Image src={p.image} alt={p.name} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-extrabold">{p.name}</h3>
              <p className="mt-2 text-sm text-ink-500">{p.short}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.highlights.slice(0, 3).map((h) => (
                  <span key={h} className="badge">{h}</span>
                ))}
              </div>
              <span className="mt-4 inline-block font-semibold underline">Read more →</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
