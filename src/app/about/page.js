export default function About() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold text-red-600 mb-6 text-center">About Veer Bharat</h2>
      <p className="text-lg text-gray-700 leading-relaxed text-center">
        Veer Bharat (Sri Shyam Agro Industries) is one of India’s fastest-growing FMCG companies.
        With our flagship products like Mustard Oil, Soyabean Oil and more, we are redefining purity, health, and taste.
        Founded in 2022, Veer Bharat is committed to bringing quality and tradition to every kitchen in India.
      </p>
      <div className="mt-10 flex justify-center">
        <img src="/team1.jpg" alt="Our Team" className="rounded-xl shadow-xl w-2/3 hover:scale-105 transition" />
      </div>
    </section>
  );
}