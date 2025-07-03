import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Truck, MapPin, Package, BarChart3, Globe, Zap, CheckCircle, ArrowRight } from "lucide-react";

// Warehouse logistics image
const warehouseImage = "/logistics-warehouse.jpg";
const logisticsHeaderImage = "/logistics-header.png";

export default function Logistics() {
  const features = [
    {
      icon: MapPin,
      title: "Route Optimization",
      description: "Advanced algorithms to optimize delivery routes, reducing fuel costs and improving delivery times."
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Real-time inventory tracking and automated reorder systems for seamless supply chain operations."
    },
    {
      icon: Globe,
      title: "Global Trade Intelligence",
      description: "Comprehensive trade data and analytics for informed decision-making in international logistics."
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Detailed analytics and reporting tools to monitor and optimize logistics performance metrics."
    }
  ];

  const benefits = [
    "Reduced Transportation Costs",
    "Improved Delivery Times",
    "Enhanced Supply Chain Visibility",
    "Better Inventory Control",
    "Increased Customer Satisfaction",
    "Environmental Sustainability"
  ];

  const solutions = [
    {
      title: "Fleet Management Systems",
      description: "Comprehensive fleet tracking and management solutions for optimal vehicle utilization and maintenance.",
      features: ["Real-time Vehicle Tracking", "Maintenance Scheduling", "Driver Performance Monitoring", "Fuel Management"]
    },
    {
      title: "Warehouse Management",
      description: "Advanced warehouse operations management with automated workflows and inventory control.",
      features: ["Automated Picking Systems", "Inventory Optimization", "Order Processing", "Quality Control"]
    },
    {
      title: "Supply Chain Analytics",
      description: "Data-driven insights for supply chain optimization and performance improvement.",
      features: ["Demand Forecasting", "Risk Assessment", "Performance Metrics", "Cost Analysis"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative text-white py-20 min-h-[600px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${logisticsHeaderImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Truck className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Logistics & Supply Chain Solutions
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white max-w-4xl mx-auto">
              Advanced supply chain management solutions utilizing global trade intelligence for seamless, 
              secure, and timely inventory, asset, and personnel movement.
            </p>
            <Button size="lg" className="bg-ms-green text-black hover:bg-green-400" asChild>
              <Link href="/contact">Optimize Your Supply Chain</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ms-dark mb-4">Core Logistics Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our logistics solutions provide comprehensive tools for modern supply chain management and optimization.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-ms-blue rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-ms-dark mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ms-dark mb-4">Logistics Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive logistics and supply chain solutions designed for modern transportation and distribution networks.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-ms-dark">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <div className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-ms-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-ms-dark mb-6">Logistics Benefits</h2>
              <p className="text-xl text-gray-600 mb-8">
                Our logistics solutions deliver measurable improvements in efficiency, cost reduction, and customer satisfaction.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button className="mt-8 bg-ms-blue hover:bg-ms-blue-dark" asChild>
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div>
              <div className="rounded-xl shadow-lg overflow-hidden">
                <img
                  src={warehouseImage}
                  alt="Smiling warehouse worker scanning packages with digital technology"
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                  style={{ aspectRatio: '4/3' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ms-dark mb-4">Logistics Impact</h2>
            <p className="text-xl text-gray-600">
              Proven results from our logistics optimization solutions
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "35%", label: "Cost Reduction" },
              { number: "50%", label: "Faster Delivery" },
              { number: "90%", label: "Inventory Accuracy" },
              { number: "99%", label: "On-Time Delivery" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-ms-blue mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ms-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Supply Chain?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Let's discuss how our logistics solutions can streamline your operations and reduce costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-ms-blue hover:bg-ms-blue-dark" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-ms-dark" asChild>
              <Link href="/solutions">View All Solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}