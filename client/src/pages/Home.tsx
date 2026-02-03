import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Code, Cpu, Brain, Plane, Truck, Shield, ArrowRight, Rocket, Users, ShieldCheck } from "lucide-react";
import industriesBackground from "@assets/12_1751503697250.png";

export default function Home() {
  const solutions = [
    {
      icon: Brain,
      title: "Connected Systems & Data Integration",
      description: "Unified data platforms and intelligent tools that seamlessly connect operations, improve efficiency, security, and enable real-time decision-making across complex enterprise environments.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
    },
    {
      icon: Cpu,
      title: "Advanced Software Solutions",
      description: "Custom enterprise software platforms with AI-powered automation, real-time analytics, and seamless integration capabilities that transform business operations and accelerate digital transformation.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
    },
    {
      icon: Plane,
      title: "Drone Technology & High-Performance Computing",
      description: "Cutting-edge drone systems integrated with powerful computing infrastructure for autonomous operations, data collection, and mission-critical applications across industries.",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
    }
  ];

  const industries = [
    {
      title: "Healthcare",
      description: "Data-driven platforms that empower patients, providers, and public health organizations.",
      image: "/medical-workers-optimized.jpg"
    },
    {
      title: "Logistics",
      description: "Global networks, advanced supply chain applications, and trade intelligence solutions.",
      image: "/logistics-warehouse-optimized.jpg"
    },
    {
      title: "Government Agencies",
      description: "High-quality office supplies, equipment, and integrated IT solutions for government operations.",
      image: "/government-voting-optimized.jpg"
    },
    {
      title: "Enterprise",
      description: "Connected systems and digital transformation solutions for large-scale operations.",
      image: "/enterprise-business-optimized.jpg"
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
      <section id="solutions" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-zinex-red font-semibold uppercase tracking-wider text-sm">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold text-zinex-blue mt-3 mb-6">Our Core Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Delivering advanced software, drone technology, high-performance computing, and AI solutions that connect operations, automate decisions, and accelerate progress across industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              const links = ["/connected-systems", "/advanced-software", "/drone-technology"];
              return (
                <Link key={index} href={links[index]}>
                  <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                    {/* Image */}
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={solution.image} 
                        alt={solution.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinex-blue/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                    </div>
                    
                    {/* Icon Badge */}
                    <div className="absolute top-36 left-6 w-16 h-16 bg-zinex-red rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-white h-8 w-8" />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 pt-10">
                      <h3 className="text-xl font-bold text-zinex-blue mb-3 group-hover:text-zinex-red transition-colors duration-300">
                        {solution.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {solution.description}
                      </p>
                      <div className="flex items-center text-zinex-red font-semibold text-sm">
                        <span>Learn More</span>
                        <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          
          {/* CTA */}
          <div className="text-center mt-12">
            <Link href="/solutions">
              <Button className="bg-zinex-blue hover:bg-zinex-blue/90 text-white px-8 py-3 text-lg">
                View All Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section 
        id="industries" 
        className="py-20 relative"
        style={{
          backgroundImage: `url(${industriesBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Specialized solutions across key industry verticals, delivering measurable impact and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="group bg-ms-gray card-hover h-full flex flex-col">
                <CardContent className="p-6 flex flex-col h-full">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="rounded-lg w-full h-40 object-cover mb-4"
                  />
                  <h3 className="text-xl font-bold text-ms-dark mb-3">{industry.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{industry.description}</p>
                  <Link
                    href={
                      industry.title === "Healthcare" ? "/healthcare" : 
                      industry.title === "Logistics" ? "/logistics" :
                      industry.title === "Government Agencies" ? "/government" :
                      industry.title === "Enterprise" ? "/enterprise" :
                      "/industries"
                    }
                    className="inline-flex items-center text-ms-blue font-semibold hover:text-ms-blue-dark transition-colors mt-auto"
                  >
                    <span>Learn More</span>
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
              <h2 className="text-4xl font-bold text-zinex-blue mb-6">About Zinex Technology</h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Zinex Technology is transforming healthcare and logistics through connected systems, unified data, and intelligent tools that enhance efficiency, security, and collaboration.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Beyond technology, Zinex Technology provides high-quality office supplies and equipment to government agencies and enterprises, integrating IT solutions with essential business needs. Driven by innovation and customer feedback, we create smarter, more connected ecosystems that drive progress across industries.
              </p>
              <div className="space-y-4">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div key={index} className="flex items-center">
                      <div className="w-12 h-12 bg-ms-blue rounded-full flex items-center justify-center mr-4">
                        <IconComponent className="text-black h-6 w-6" />
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
                src="/developers-working-optimized.jpg"
                alt="Developers collaborating on code in modern office environment"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
