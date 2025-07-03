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
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      initials: "SJ",
      bio: "15+ years of experience in enterprise technology leadership"
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      initials: "MC",
      bio: "Expert in AI/ML technologies and scalable system architecture"
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Operations",
      initials: "ER",
      bio: "Operations excellence with focus on process optimization and efficiency"
    },
    {
      name: "David Kim",
      role: "Chief Security Officer",
      initials: "DK",
      bio: "Cybersecurity expert with extensive enterprise protection experience"
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
          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-ms-dark mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To empower businesses with innovative technology solutions that transform operations, enhance efficiency, and drive sustainable growth across all industries.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe that the right combination of software, hardware, and AI-driven intelligence can solve the most complex business challenges and unlock new opportunities for success.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div key={index} className="text-center p-4 bg-ms-light rounded-lg">
                      <IconComponent className="h-8 w-8 text-ms-blue mx-auto mb-2" />
                      <div className="text-2xl font-bold text-ms-dark">{achievement.value}</div>
                      <div className="text-sm text-gray-600">{achievement.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="bg-gradient-to-br from-ms-blue/10 to-ms-blue/20 rounded-xl shadow-lg p-12 flex items-center justify-center">
                <div className="text-center">
                  <Target className="h-24 w-24 text-ms-blue mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-ms-dark mb-4">Vision & Excellence</h3>
                  <p className="text-gray-600 max-w-sm">
                    Driving innovation and excellence in enterprise technology solutions across global markets
                  </p>
                </div>
              </div>
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
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-ms-dark mb-4">Leadership Team</h2>
              <p className="text-lg text-gray-600">
                Meet the experienced professionals driving Qondala's vision and innovation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-20 h-20 bg-ms-blue rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl font-bold">{member.initials}</span>
                    </div>
                    <h3 className="text-lg font-bold text-ms-dark mb-1">{member.name}</h3>
                    <Badge variant="secondary" className="mb-3 bg-ms-light text-ms-dark">{member.role}</Badge>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Company Timeline */}
          <div className="bg-ms-light rounded-2xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-ms-dark mb-4">Our Journey</h2>
              <p className="text-lg text-gray-600">
                Key milestones in our growth and evolution as a leading technology solutions provider.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  year: "2009",
                  title: "Company Founded",
                  description: "Established with a vision to transform enterprise technology solutions"
                },
                {
                  year: "2015",
                  title: "Global Expansion",
                  description: "Expanded operations to serve clients across 25+ countries worldwide"
                },
                {
                  year: "2020",
                  title: "AI Innovation",
                  description: "Launched advanced AI and machine learning capabilities for enterprise clients"
                }
              ].map((milestone, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-ms-blue mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-bold text-ms-dark mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}