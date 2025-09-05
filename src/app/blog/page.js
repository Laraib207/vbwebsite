export default function Blog() {
  const blogs = [
    {
      title: "Kachi Ghani Mustard Oil – Taste & Health",
      img: "/product1.jpg",
      desc: `Veer Bharat Kachi Ghani Mustard Oil is a symbol of purity and wellness. 
      Extracted through the traditional cold-press method, it retains natural antioxidants 
      and essential oils. Its strong aroma and authentic taste enhance every dish...`,
    },
    {
      title: "Soyabean Oil – Light & Healthy Cooking",
      img: "/product2.jpg",
      desc: `Veer Bharat Soyabean Oil is the modern family’s healthy cooking choice. 
      Light in texture, it doesn’t overpower your meals and keeps the natural taste intact...`,
    },
    {
      title: "Sunflower Oil – The Vitamin Powerhouse",
      img: "/product3.jpg",
      desc: `Veer Bharat Sunflower Oil is enriched with Vitamin E and natural antioxidants, 
      making it one of the healthiest cooking oils available today...`,
    },
    {
      title: "Rice Bran Oil – The Cholesterol Fighter",
      img: "/product4.jpg",
      desc: `Rice Bran Oil from Veer Bharat is a modern solution for a healthy heart. 
      Extracted from the outer layer of rice grains, it is naturally rich in Oryzanol...`,
    },
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-red-600 mb-12">
        Our Blog Hub
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((post, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden"
          >
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-yellow-700 mb-3">
                {post.title}
              </h3>
              <p className="text-gray-600 text-justify">{post.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
