// components/Footer.jsx
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#fff6f1] border-t border-[rgba(8,52,139,0.04)] mt-12">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand / Logo + socials (left) */}
          <div className="md:col-span-3 flex flex-col md:flex-row md:items-start gap-4">
            <div className="flex-shrink-0">
              <div className="relative w-20 h-20 rounded-md overflow-hidden shadow">
                <Image src="/logo.png" alt="Veer Bharat / Bulbul logo" fill style={{ objectFit: "cover" }} />
              </div>
            </div>

            <div className="mt-1 md:mt-0">
              <h4 className="text-[#08348b] font-bold text-lg">VEER BHARAT</h4>
              <p className="text-sm text-[#6b6972] mt-1">MUSTERD OIL AND MANY MORE</p>

              <div className="mt-4 flex items-center gap-3">
                <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-[#e9eefc] flex items-center justify-center hover:opacity-90">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#08348b" xmlns="http://www.w3.org/2000/svg"><path d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.99H7.898v-2.888h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.888h-2.33v6.99C18.343 21.128 22 16.991 22 12z"/></svg>
                </a>
                <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-full bg-[#eef7ff] flex items-center justify-center hover:opacity-90">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#1d9bf0" xmlns="http://www.w3.org/2000/svg"><path d="M22 5.92c-.64.28-1.3.48-2 .56.72-.44 1.28-1.14 1.54-1.98-.68.4-1.44.68-2.25.84A3.64 3.64 0 0016.5 4c-2 0-3.62 1.6-3.62 3.57 0 .28.03.55.09.81C9.3 8.23 6.2 6.57 4 3.98c-.31.52-.48 1.12-.48 1.76 0 1.22.62 2.3 1.56 2.94-.58-.02-1.13-.18-1.61-.44v.04c0 1.72 1.2 3.14 2.8 3.47-.29.08-.6.12-.92.12-.22 0-.44-.02-.65-.06.44 1.38 1.72 2.38 3.24 2.4A7.28 7.28 0 012 19.54 10.3 10.3 0 007 21c6.26 0 9.68-5.22 9.68-9.75v-.44c.66-.48 1.24-1.08 1.7-1.76-.6.28-1.24.48-1.9.56.68-.44 1.2-1.18 1.44-2.04z"/></svg>
                </a>
                <a href="#" aria-label="YouTube" className="w-8 h-8 rounded-full bg-[#fff1f1] flex items-center justify-center hover:opacity-90">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#d52e3e" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 6.2a2.9 2.9 0 00-2.05-2.05C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.45.65A2.9 2.9 0 00.5 6.2 30.2 30.2 0 000 12a30.2 30.2 0 00.5 5.8 2.9 2.9 0 002.05 2.05C4.3 20.5 12 20.5 12 20.5s7.7 0 9.45-.65a2.9 2.9 0 002.05-2.05A30.2 30.2 0 0024 12a30.2 30.2 0 00-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
                </a>
                <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-[#fff5f9] flex items-center justify-center hover:opacity-90">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#aa2266" xmlns="http://www.w3.org/2000/svg"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a4 4 0 100 8 4 4 0 000-8zm6.5-.5a1 1 0 11-.002 2.002A1 1 0 0118.5 6.5z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Menu (center-left) */}
          <div className="md:col-span-2">
            <h5 className="text-[#2f3a6a] font-semibold mb-3">Menu</h5>
            <ul className="space-y-2 text-sm text-[#5b5b66]">
              <li><Link href="/" className="hover:text-[#08348b]">Home</Link></li>
              <li><Link href="/products" className="hover:text-[#08348b]">Products</Link></li>
              <li><Link href="/about" className="hover:text-[#08348b]">About Us</Link></li>
              <li><Link href="/veerbharat.io" className="hover:text-[#08348b]">Manufacturing</Link></li>
              <li><Link href="/blogs" className="hover:text-[#08348b]">Blogs</Link></li>
            </ul>
          </div>

          {/* Products (center) */}
          {/* <div className="md:col-span-2">
            <h5 className="text-[#2f3a6a] font-semibold mb-3">Products</h5>
            <ul className="space-y-2 text-sm text-[#5b5b66]">
              <li><Link href="/products/kachi-ghani" className="hover:text-[#08348b]">Kachi Ghani Mustard Oil</Link></li>
              <li><Link href="/products/mustard-oil-cake" className="hover:text-[#08348b]">Mustard Oil Cake</Link></li>
              <li><Link href="/products/mustard-oil-powder" className="hover:text-[#08348b]">Mustard Oil Powder</Link></li>
              <li><Link href="/products/yellow-mustard" className="hover:text-[#08348b]">Yellow Mustard Oil</Link></li>
            </ul>
          </div> */}

          {/* Legal (center-right) */}
          <div className="md:col-span-2">
            <h5 className="text-[#2f3a6a] font-semibold mb-3">Legal</h5>
            <ul className="space-y-2 text-sm text-[#5b5b66]">
              <li><Link href="/terms" className="hover:text-[#08348b]">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-[#08348b]">Privacy Policy</Link></li>
              <li><Link href="/refund" className="hover:text-[#08348b]">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Contact Us (right) */}
          <div className="md:col-span-3">
            <h5 className="text-[#2f3a6a] font-semibold mb-3">Contact Us</h5>

            <div className="text-sm text-[#5b5b66] space-y-3">
              <div>
                <div className="font-semibold text-[#0b2b52]">Corporate Office</div>
                <div className="mt-1">
                  Sri Shayam Agro Industries 
                </div>
              </div>

              <div>
                <div className="font-medium">E-Mail:</div>
                <a href="mailto:info@arihantoilmills.com" className="block hover:text-[#08348b]">info@veerbharat.com</a>
              </div>

              <div>
                <div className="font-medium">Phone:</div>
                <div className="mt-1 font-semibold text-[#0b2b52]">
                  <a href="tel:8802000091" className="block">+91 9266328444</a>
                  {/* <a href="tel:9216506091" className="block">9216506091</a>
                  <a href="tel:9216806091" className="block">9216806091</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom border + copyright */}
        <div className="mt-10 border-t border-[rgba(8,52,139,0.06)] pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#5b5b66]">
            <div>Copyright © {new Date().getFullYear()} VEER BHARAT</div>

            <div className="flex items-center gap-3">
              <a href="#" className="text-[#08348b] hover:underline">Privacy</a>
              <span className="text-gray-300">•</span>
              <a href="#" className="text-[#08348b] hover:underline">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
