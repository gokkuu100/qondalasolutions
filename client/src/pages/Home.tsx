import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Code, Cpu, Brain, Factory, Truck, Shield, ArrowRight, Rocket, Users, ShieldCheck } from "lucide-react";

export default function Home() {
  const solutions = [
    {
      icon: Truck,
      title: "Logistics & Supply Chain Optimization",
      description: "Advanced supply chain management solutions utilizing global trade intelligence for seamless, secure, and timely inventory, asset, and personnel movement.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
    },
    {
      icon: Code,
      title: "Healthcare Technology Solutions",
      description: "Development of open, data-driven platforms to enhance patient outcomes, streamline operations, and foster collaboration across healthcare ecosystems.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
    },
    {
      icon: Brain,
      title: "Connected Systems & Data Integration",
      description: "Implementation of unified data and intelligent tools to improve efficiency, security, and real-time decision-making in logistics and healthcare.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
    }
  ];

  const industries = [
    {
      title: "Healthcare",
      description: "Data-driven platforms that empower patients, providers, and public health organizations.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=250"
    },
    {
      title: "Logistics",
      description: "Global networks, advanced supply chain applications, and trade intelligence solutions.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=250"
    },
    {
      title: "Government Agencies",
      description: "High-quality office supplies, equipment, and integrated IT solutions for government operations.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=250"
    },
    {
      title: "Enterprise",
      description: "Connected systems and digital transformation solutions for large-scale operations.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=250"
    }
  ];

  const values = [
    {
      icon: Rocket,
      title: "Innovation First",
      description: "Leading-edge technology solutions"
    },
    {
      icon: Users,
      title: "Customer Success",
      description: "Dedicated support and partnership"
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Security", 
      description: "Bank-level security and compliance"
    }
  ];

  return (
    <div>
      <Hero />

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-ms-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ms-dark mb-4">Our Core Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creating smarter, more connected ecosystems that drive progress across healthcare, logistics, and enterprise operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <Card key={index} className="card-hover bg-white shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-ms-blue rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="text-white h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-ms-dark mb-4">{solution.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="rounded-lg w-full h-48 object-cover mb-4"
                    />
                    <Link
                      href={index === 0 ? "/logistics" : index === 1 ? "/healthcare" : "/connected-systems"}
                      className="text-ms-blue font-semibold hover:text-ms-blue-dark transition-colors duration-200 inline-flex items-center"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ms-dark mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized solutions across key industry verticals, delivering measurable impact and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="group bg-ms-gray card-hover">
                <CardContent className="p-6">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="rounded-lg w-full h-40 object-cover mb-4"
                  />
                  <h3 className="text-xl font-bold text-ms-dark mb-3">{industry.title}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <Link
                    href={industry.title === "Healthcare" ? "/healthcare" : industry.title === "Logistics" ? "/logistics" : "/industries"}
                    className="inline-flex items-center text-ms-blue font-semibold hover:text-ms-blue-dark transition-colors"
                  >
                    <span>Explore {industry.title}</span>
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Stats />

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-ms-dark mb-6">About Qondala</h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Qondala is transforming healthcare and logistics through connected systems, unified data, and intelligent tools that enhance efficiency, security, and collaboration.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Beyond technology, Qondala provides high-quality office supplies and equipment to government agencies and enterprises, integrating IT solutions with essential business needs. Driven by innovation and customer feedback, we create smarter, more connected ecosystems that drive progress across industries.
              </p>
              <div className="space-y-4">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div key={index} className="flex items-center">
                      <div className="w-12 h-12 bg-ms-blue rounded-full flex items-center justify-center mr-4">
                        <IconComponent className="text-white h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-ms-dark">{value.title}</h4>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Professional business team in modern office"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
