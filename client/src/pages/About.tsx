import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Users, ShieldCheck, Target, Award, Globe, Clock, TrendingUp } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Rocket,
      title: "Innovation First",
      description: "We leverage cutting-edge technologies to deliver solutions that push the boundaries of what's possible."
    },
    {
      icon: Users,
      title: "Customer Success",
      description: "Your success is our success. We provide dedicated support and build lasting partnerships with every client."
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Security",
      description: "Bank-level security and compliance standards ensure your data and operations are always protected."
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "We focus on delivering measurable outcomes that directly impact your business performance and growth."
    }
  ];

  const achievements = [
    { icon: Award, label: "Industry Awards", value: "25+" },
    { icon: Globe, label: "Global Presence", value: "25+ Countries" },
    { icon: Clock, label: "Years of Experience", value: "15+" },
    { icon: TrendingUp, label: "Client Satisfaction", value: "98%" }
  ];

  const team = [
    {
      name: "Misky Abshir",
      role: "Chief Executive Officer",
      initials: "MA",
      bio: "Visionary leader driving Qondala's strategic growth and innovation",
      image: "/misky-abshir.jpg"
    },
    {
      name: "Ben J. Nielsen",
      role: "Chief Technology Officer",
      initials: "BN",
      bio: "Technology visionary with expertise in enterprise systems and innovation",
      image: "/ben-nielsen.png"
    },
    {
      name: "Hussein Mohamed",
      role: "VP of Operations",
      initials: "HM",
      bio: "Operations excellence with focus on process optimization and efficiency"
    },
    {
      name: "Morris Mbetsa",
      role: "Head of Security",
      initials: "MM",
      bio: "Security expert specializing in enterprise protection and risk management",
      image: "/morris-mbetsa.jpg"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-no-repeat flex items-center"
        style={{ 
          backgroundImage: 'url(/about-hero.png)',
          backgroundPosition: 'center center'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            About Qondala
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Founded on the principle of technological excellence, we deliver comprehensive enterprise solutions that drive innovation and operational efficiency across industries.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* About Us Overview */}
          <div className="text-center mb-20">
            <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Qondala delivers tailored enterprise solutions by integrating leading technologies with deep customization expertise, ensuring alignment with each client's operational requirements.
              </p>
              <p>
                We specialize in logistics optimization, healthcare systems enhancement, and comprehensive IT infrastructure services for government and private enterprises. Our mission-aligned digital ecosystems enable sustainable growth and operational excellence.
              </p>
            </div>
          </div>
          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Mission */}
            <div className="text-center lg:text-left">
              <Rocket className="h-16 w-16 text-ms-blue mx-auto lg:mx-0 mb-6" />
              <h2 className="text-3xl font-bold text-ms-dark mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To empower businesses with innovative technology solutions that transform operations, enhance efficiency, and drive sustainable growth across all industries.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that the right combination of software, hardware, and AI-driven intelligence can solve the most complex business challenges and unlock new opportunities for success.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center lg:text-left">
              <Target className="h-16 w-16 text-ms-blue mx-auto lg:mx-0 mb-6" />
              <h2 className="text-3xl font-bold text-ms-dark mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Driving innovation and excellence in enterprise technology solutions across global markets, becoming the trusted partner for digital transformation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We envision a future where businesses seamlessly integrate advanced technology to achieve unprecedented levels of efficiency, security, and growth.
              </p>
            </div>
          </div>

          

          {/* Core Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-ms-dark mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-600">
                The principles that guide everything we do and every solution we deliver.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-8 pb-6">
                      <div className="w-16 h-16 bg-ms-blue rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="text-white h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold text-ms-dark mb-3">{value.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Leadership Team */}
          <div className="mb-20 bg-green-50 py-16 -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-600 mb-12 text-left">Meet our team!</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {team.map((member, index) => {
                  const bgColors = ['bg-yellow-100', 'bg-blue-100', 'bg-yellow-100', 'bg-blue-100'];
                  return (
                    <div key={index} className={`relative h-80 rounded-lg overflow-hidden ${bgColors[index]}`}>
                      {/* Profile Image Area */}
                      {member.image ? (
                        <div className="w-full h-full">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                          <span className="text-gray-600 text-6xl font-bold">{member.initials}</span>
                        </div>
                      )}
                      
                      {/* Overlay Text */}
                      <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                        <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                        <p className="text-sm opacity-90">{member.role}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Our Journey */}
          <div className="bg-gray-50 py-16 -mx-4 sm:-mx-6 lg:-mx-8 -mb-4 sm:-mb-6 lg:-mb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Journey</h2>
              <p className="text-gray-600 mb-16">Key milestones in our emergence as a forward-thinking technology solutions company.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
                <div className="flex flex-col items-center">
                  <div className="text-5xl font-bold text-green-500 mb-4">2023</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Qondala Founded</h3>
                  <p className="text-gray-600 text-center">Launched with a mission to engineer intelligent software and digital infrastructure that bridges innovation and impact.</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="text-5xl font-bold text-green-500 mb-4">2024</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Strategic Collaborations</h3>
                  <p className="text-gray-600 text-center">Formed pivotal partnerships with private sector, laying the foundation for trusted delivery in complex technology environments.</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="text-5xl font-bold text-green-500 mb-4">2025</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Digital Evolution</h3>
                  <p className="text-gray-600 text-center">Introduced next-gen solutions in cloud, AI, and drone technologies—driving transformation across logistics, defense, and public service landscapes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}