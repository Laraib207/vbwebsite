export default function Team() {
  const members = [
    { name: "Nitish Kumar", role: "Managing Director", image: "/team1.jpg" },
    { name: "HR Manager", role: "Human Resources", image: "/team2.jpg" },
    { name: "Dedicated Staff", role: "Our Strong Workforce", image: "/team3.jpg" },
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold text-red-600 text-center mb-12">Meet Our Team</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {members.map((m, i) => (
          <div key={i} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 text-center">
            <img src={m.image} alt={m.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-red-500" />
            <h3 className="text-xl font-bold">{m.name}</h3>
            <p className="text-gray-600">{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}