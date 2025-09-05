"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-cream-50/90 backdrop-blur border-b border-cream-300">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Veer Bharat" width={36} height={36} className="rounded-lg"/>
          <span className="font-extrabold tracking-tight">Veer Bharat</span>
        </Link>
        <nav className="flex items-center gap-5 text-sm">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/products" className="hover:underline">Products</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
