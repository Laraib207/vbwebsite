import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[rgba(8,52,139,0.06)] via-[rgba(170,34,102,0.04)] to-[rgba(93,22,158,0.03)] border-t border-[rgba(8,52,139,0.06)] mt-12">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-md overflow-hidden shadow">
              <Image src="/logo.png" alt="Veer Bharat" fill style={{ objectFit: "cover" }} />
            </div>
            <div>
              <h4 className="text-[#08348b] font-bold text-lg">Veer Bharat</h4>
              <p className="text-[#aba7c4] text-sm">हर बूंद में भरोसा</p>
            </div>
          </div>

          {/* Links */}
          <nav className="flex gap-8">
            <div>
              <h5 className="text-sm font-semibold text-gray-700">Company</h5>
              <ul className="mt-2 space-y-1 text-sm text-gray-600">
                <li><Link href="/about" className="hover:text-[#08348b]">About</Link></li>
                <li><Link href="/products" className="hover:text-[#08348b]">Products</Link></li>
                <li><Link href="/contact" className="hover:text-[#08348b]">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="text-sm font-semibold text-gray-700">Support</h5>
              <ul className="mt-2 space-y-1 text-sm text-gray-600">
                <li><Link href="/faq" className="hover:text-[#08348b]">FAQ</Link></li>
                <li><a href="mailto:info@veer-bharat.com" className="hover:text-[#08348b]">info@veer-bharat.com</a></li>
                <li><a href="tel:+919266328444" className="hover:text-[#08348b]">+91 92663 28444</a></li>
              </ul>
            </div>
          </nav>

          {/* Subscribe / small CTA */}
          <div className="w-full md:w-72">
            <label className="text-sm font-medium text-gray-700">Get updates</label>
            <div className="mt-2 flex gap-2">
              <input
                aria-label="Email"
                type="email"
                placeholder="you@domain.com"
                className="w-full px-3 py-2 rounded-md border border-[rgba(8,52,139,0.08)] bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#08348b]"
              />
              <button className="px-4 py-2 rounded-md bg-[#08348b] text-white font-semibold hover:opacity-95">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-[#aba7c4] mt-2">We respect your privacy. Unsubscribe anytime.</p>
          </div>
        </div>

        <div className="border-t border-[rgba(8,52,139,0.06)] mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <div>© {new Date().getFullYear()} Veer Bharat Oils • हर बूंद में भरोसा</div>

          <div className="flex items-center gap-4">
            {/* Simple SVG social icons (replace links) */}
            <a href="#" className="hover:opacity-80" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#08348b" xmlns="http://www.w3.org/2000/svg"><path d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.99H7.898v-2.888h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.888h-2.33v6.99C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
            <a href="#" className="hover:opacity-80" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#aa2266" xmlns="http://www.w3.org/2000/svg"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a4 4 0 100 8 4 4 0 000-8zm6.5-.5a1 1 0 11-.002 2.002A1 1 0 0118.5 6.5z"/></svg>
            </a>

            <a href="https://youtube.com/@veer.officialbharat?si=dlnaMru9MBNGrYl1" className="hover:opacity-80" aria-label="YouTube">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#d52e3e" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 6.2a2.9 2.9 0 00-2.05-2.05C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.45.65A2.9 2.9 0 00.5 6.2 30.2 30.2 0 000 12a30.2 30.2 0 00.5 5.8 2.9 2.9 0 002.05 2.05C4.3 20.5 12 20.5 12 20.5s7.7 0 9.45-.65a2.9 2.9 0 002.05-2.05A30.2 30.2 0 0024 12a30.2 30.2 0 00-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
