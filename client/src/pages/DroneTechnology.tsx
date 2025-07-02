import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Zap, Eye, Shield, Radio, MapPin, Cpu, Database, Clock } from "lucide-react";

export default function DroneTechnology() {
  const capabilities = [
    {
      icon: Eye,
      title: "Advanced Surveillance Systems",
      description: "High-resolution imaging and real-time monitoring capabilities for security, inspection, and reconnaissance missions."
    },
    {
      icon: MapPin,
      title: "Autonomous Navigation",
      description: "GPS-enabled autonomous flight systems with obstacle avoidance and precision landing capabilities."
    },
    {
      icon: Database,
      title: "Real-Time Data Collection",
      description: "Advanced sensors and data acquisition systems for environmental monitoring, mapping, and analytics."
    },
    {
      icon: Radio,
      title: "Long-Range Communication",
      description: "Extended communication range with secure data transmission and remote control capabilities."
    },
    {
      icon: Cpu,
      title: "Edge Computing Integration",
      description: "On-board processing power for real-time decision making and immediate data analysis."
    },
    {
      icon: Shield,
      title: "Mission-Critical Reliability",
      description: "Ruggedized designs built for extreme conditions with redundant safety systems."
    }
  ];

  const applications = [
    {
      title: "Infrastructure Inspection",
      description: "Automated inspection of bridges, power lines, pipelines, and industrial facilities",
      benefits: ["Reduced safety risks", "Cost-effective monitoring", "Detailed reporting"]
    },
    {
      title: "Agricultural Monitoring",
      description: "Crop health assessment, precision agriculture, and yield optimization",
      benefits: ["Increased crop yields", "Resource optimization", "Early problem detection"]
    },
    {
      title: "Emergency Response",
      description: "Search and rescue operations, disaster assessment, and emergency communications",
      benefits: ["Rapid deployment", "Life-saving capabilities", "Real-time situational awareness"]
    },
    {
      title: "Security & Surveillance",
      description: "Perimeter monitoring, event security, and threat detection",
      benefits: ["24/7 monitoring", "Scalable coverage", "Intelligent alerts"]
    }
  ];

  const specifications = [
    {
      category: "Performance",
      specs: [
        "Flight time: Up to 120 minutes",
        "Range: 15+ kilometers",
        "Payload capacity: 5-50kg",
        "Operating altitude: 0-4000m"
      ]
    },
    {
      category: "Computing Power",
      specs: [
        "High-performance edge processors",
        "Real-time AI processing",
        "Parallel computing capabilities",
        "Low-latency data transmission"
      ]
    },
    {
      category: "Sensors & Imaging",
      specs: [
        "4K/8K video recording",
        "Thermal imaging cameras",
        "LiDAR mapping systems",
        "Multispectral sensors"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <Button variant="ghost" className="mb-8 text-white hover:text-ms-green">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <div className="flex items-center mb-6">
            <Zap className="h-16 w-16 text-ms-green mr-6" />
            <div>
              <h1 className="text-5xl font-bold mb-4">Drone Technology & High-Performance Computing</h1>
              <p className="text-xl text-gray-300 max-w-3xl">
                Cutting-edge drone systems integrated with powerful computing infrastructure for autonomous operations, data collection, and mission-critical applications across industries.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Capabilities Section */}
      <section className="py-20 bg-ms-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ms-dark mb-4">Advanced Drone Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our drone systems combine cutting-edge hardware with intelligent software for unmatched performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-gray-200">
                <CardContent className="p-6">
                  <capability.icon className="h-12 w-12 text-ms-green mb-4" />
                  <h3 className="text-xl font-bold text-ms-dark mb-3">{capability.title}</h3>
                  <p className="text-gray-600">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ms-dark mb-4">Industry Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Versatile drone solutions designed for specific industry needs and operational requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-ms-dark mb-3">{app.title}</h3>
                  <p className="text-gray-600 mb-4">{app.description}</p>
                  <div className="space-y-2">
                    {app.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-ms-green rounded-full mr-3"></div>
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-ms-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ms-dark mb-4">Technical Specifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade specifications designed for demanding operational environments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specifications.map((spec, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-ms-dark mb-4">{spec.category}</h3>
                  <div className="space-y-3">
                    {spec.specs.map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-ms-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Computing Infrastructure Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-ms-dark mb-6">High-Performance Computing Integration</h2>
              <p className="text-xl text-gray-600 mb-8">
                Our drone systems are powered by advanced computing infrastructure that enables real-time processing, AI-driven decision making, and seamless data integration.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-ms-green mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-ms-dark">Real-Time Processing</h4>
                    <p className="text-gray-600 text-sm">Instant data analysis and decision making at the edge</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Database className="h-6 w-6 text-ms-green mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-ms-dark">Scalable Storage</h4>
                    <p className="text-gray-600 text-sm">Cloud-integrated storage with local caching capabilities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Cpu className="h-6 w-6 text-ms-green mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-ms-dark">AI Computing Power</h4>
                    <p className="text-gray-600 text-sm">Machine learning acceleration for intelligent automation</p>
                  </div>
                </div>
              </div>

              <Link href="/contact">
                <Button className="mt-8 bg-ms-green hover:bg-ms-green/90 text-white px-8 py-3">
                  Explore Drone Solutions
                </Button>
              </Link>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
                alt="Drone Technology"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Deploy Advanced Drone Solutions?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Discover how our cutting-edge drone technology can revolutionize your operations and provide unprecedented insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-ms-green hover:bg-ms-green/90 text-white px-8 py-3">
                Request Demo
              </Button>
            </Link>
            <Link href="/solutions">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3">
                View All Capabilities
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}