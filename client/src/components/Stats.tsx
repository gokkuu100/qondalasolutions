export default function Stats() {
  const stats = [
    { value: "20", label: "Enterprise Clients" },
    { value: "50", label: "Projects Delivered" },
    { value: "10", label: "Countries Served" },
    { value: "99.9%", label: "System Uptime" },
  ];

  return (
    <section className="py-16 bg-ms-blue text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold mb-2 text-black">{stat.value}</div>
              <div className="text-black">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
