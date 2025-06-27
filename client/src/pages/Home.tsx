import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Code, Cpu, Brain, Factory, Truck, Shield, ArrowRight, Rocket, Users, ShieldCheck } from "lucide-react";

export default function Home() {
  const solutions = [
    {
      icon: Code,
      title: "Software Solutions",
      description: "Custom enterprise software development, cloud platforms, and digital transformation tools tailored to your business needs.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
    },
    {
      icon: Cpu,
      title: "Hardware Solutions",
      description: "Advanced hardware systems, IoT devices, and infrastructure solutions for seamless technology integration.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
    },
    {
      icon: Brain,
      title: "AI-Driven Solutions",
      description: "Machine learning, predictive analytics, and intelligent automation to optimize operations and decision-making.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
    }
  ];

  const industries = [
    {
      title: "Manufacturing",
      description: "Smart factory solutions, predictive maintenance, and production optimization.",
      image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=250"
    },
    {
      title: "Transportation",
      description: "Fleet management, route optimization, and intelligent logistics systems.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=250"
    },
    {
      title: "Security",
      description: "Cybersecurity, surveillance systems, and threat detection solutions.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=250"
    },
    {
      title: "Business Automation",
      description: "Workflow automation, process optimization, and digital transformation.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=250"
    },
    {
      title: "Enterprise",
      description: "Large-scale enterprise solutions, integration, and digital platforms.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=250"
    },
    {
      title: "Custom Solutions",
      description: "Tailored technology solutions designed for your unique business needs.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=250"
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
            <h2 className="text-4xl font-bold text-ms-dark mb-4">Our Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integrated technology stack designed to transform your business operations and drive sustainable growth.
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
                      href="/solutions"
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
                    href="/industries"
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
                Founded on the principle of technological excellence, Qondala delivers comprehensive enterprise solutions that drive innovation and operational efficiency across industries.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our integrated approach combines cutting-edge software development, robust hardware solutions, and AI-driven intelligence to solve complex business challenges and unlock new opportunities for growth.
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
