export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold text-red-600 mb-6 text-center">Contact Us</h2>
      <p className="text-gray-700 text-center mb-8">
        Get in touch with us for business inquiries or partnership opportunities.
      </p>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full border rounded-lg px-4 py-3" />
        <input type="email" placeholder="Your Email" className="w-full border rounded-lg px-4 py-3" />
        <textarea placeholder="Your Message" rows="5" className="w-full border rounded-lg px-4 py-3"></textarea>
        <button type="submit" className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
          Send Message
        </button>
      </form>
      <div className="mt-10 text-center">
        <p>Email: <span className="text-red-600">info@veer-bharat.com</span></p>
        <p>Website: <span className="text-red-600">www.veer-bharat.com</span></p>
      </div>
    </section>
  );
}