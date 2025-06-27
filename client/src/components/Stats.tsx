export default function Stats() {
  const stats = [
    { value: "500+", label: "Enterprise Clients" },
    { value: "1,200+", label: "Projects Delivered" },
    { value: "25+", label: "Countries Served" },
    { value: "99.9%", label: "System Uptime" },
  ];

  return (
    <section className="py-16 bg-ms-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
