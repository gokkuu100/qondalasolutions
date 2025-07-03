import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Heart, Users, Database, Shield, Zap, CheckCircle, ArrowRight } from "lucide-react";
// Import medical workers image
const medicalWorkersImage = "/medical-workers.jpg";

export default function Healthcare() {
  const features = [
    {
      icon: Database,
      title: "Electronic Health Records",
      description: "Comprehensive EHR systems that provide secure, real-time access to patient data across all care settings."
    },
    {
      icon: Users,
      title: "Patient Management",
      description: "Streamlined patient workflows from registration to discharge, improving care coordination and outcomes."
    },
    {
      icon: Shield,
      title: "HIPAA Compliance",
      description: "Built-in security and privacy controls ensuring full compliance with healthcare regulations."
    },
    {
      icon: Zap,
      title: "Real-time Analytics",
      description: "Advanced analytics and reporting tools for data-driven clinical and operational decisions."
    }
  ];

  const benefits = [
    "Improved Patient Outcomes",
    "Reduced Administrative Burden",
    "Enhanced Care Coordination",
    "Cost Reduction",
    "Better Resource Utilization",
    "Regulatory Compliance"
  ];

  const solutions = [
    {
      title: "Hospital Management Systems",
      description: "Complete hospital information systems integrating clinical, administrative, and financial operations.",
      features: ["Patient Registration", "Clinical Documentation", "Billing Integration", "Inventory Management"]
    },
    {
      title: "Telemedicine Platforms",
      description: "Secure telehealth solutions enabling remote consultations and patient monitoring.",
      features: ["Video Consultations", "Remote Monitoring", "Digital Prescriptions", "Mobile Health Apps"]
    },
    {
      title: "Medical Device Integration",
      description: "Seamless integration of medical devices with existing healthcare IT infrastructure.",
      features: ["IoT Device Connectivity", "Real-time Data Collection", "Automated Alerts", "Device Management"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ms-blue to-ms-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Healthcare Technology Solutions
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Transform healthcare delivery with data-driven platforms that enhance patient outcomes, 
              streamline operations, and foster collaboration across healthcare ecosystems.
            </p>
            <Button size="lg" className="bg-white text-ms-blue hover:bg-gray-100" asChild>
              <Link href="/contact">Schedule Healthcare Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ms-dark mb-4">Core Healthcare Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our healthcare technology solutions provide the foundation for modern, efficient healthcare delivery.
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
            <h2 className="text-4xl font-bold text-ms-dark mb-4">Healthcare Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare technology solutions designed for modern healthcare organizations.
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
              <h2 className="text-4xl font-bold text-ms-dark mb-6">Healthcare Benefits</h2>
              <p className="text-xl text-gray-600 mb-8">
                Our healthcare technology solutions deliver measurable improvements across all aspects of healthcare delivery.
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
                  src={medicalWorkersImage}
                  alt="Medical professionals collaborating with digital healthcare technology"
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                  style={{ aspectRatio: '4/3' }}
                  onError={(e) => {
                    console.error('Image failed to load:', medicalWorkersImage);
                    console.error('Error event:', e);
                  }}
                  onLoad={() => {
                    console.log('Image loaded successfully:', medicalWorkersImage);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ms-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Healthcare Operations?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Let's discuss how our healthcare technology solutions can improve patient outcomes and operational efficiency.
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