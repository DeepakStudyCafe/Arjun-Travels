import { Link } from "react-router-dom";
import { ArrowRight, Building2, Flame, Sun, Zap, ShieldCheck, Wrench, Camera, Factory, FlaskConical, Droplets, PaintBucket, DoorOpen, Grid3X3, Home, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import serviceHvac from "@/assets/service-hvac.jpg";
import serviceFire from "@/assets/service-fire.jpg";
import serviceSolar from "@/assets/service-solar.jpg";
import serviceConstruction from "@/assets/service-construction.jpg";
import serviceElectrical from "@/assets/service-electrical.jpg";
import serviceSafety from "@/assets/service-safety.jpg";

const tradingServices = [
  {
    icon: Building2,
    title: "HVAC Solutions Trading",
    description: "Expert duct fabrication with 8+ years of HVAC industry experience. Manufacturing various types of HVAC air movement products with consistent high-quality work and precise delivery scheduling.",
    image: serviceHvac,
    features: ["Duct Fabrication", "Air Movement Products", "HVAC Specialist Knowledge", "Contractor Support"],
  },
  {
    icon: Flame,
    title: "Fire Fighting Trading",
    description: "UL certified NOVEC 1230 Filling Station, FM200 and CO2 systems, FACP fabrication, testing, and comprehensive fire protection services.",
    image: serviceFire,
    features: ["UL/FM Certified Systems", "24/7 Emergency Service", "Annual Maintenance", "System Inspections"],
  },
  {
    icon: Zap,
    title: "Electrical Trading & Supply",
    description: "Recognized distributor and retailer of Electro-Mechanical Products. Wide range includes Low, Medium and High Voltage Electrical Material.",
    image: serviceElectrical,
    features: ["Transformers", "Cables & Accessories", "Insulators", "Distribution Equipment"],
  },
  {
    icon: Sun,
    title: "Solar Energy Trading",
    description: "Specialized in PV Direct, DC Stand Alone, Grid Direct and Grid tied systems with battery backup. Clean, reliable energy solutions.",
    image: serviceSolar,
    features: ["On/Off Grid Systems", "PV Array Sizing", "25+ Year Durability", "Low Maintenance"],
  },
  {
    icon: ShieldCheck,
    title: "Safety Items Trading",
    description: "Comprehensive safety equipment including PPE, eyewash stations, fall protection, and all workplace safety essentials.",
    image: serviceSafety,
    features: ["Eye Protection", "Fall Protection", "Safety Footwear", "Protective Clothing"],
  },
  {
    icon: Camera,
    title: "CCTV & Security Systems",
    description: "Modern video surveillance with ANPR, facial recognition, cloud storage and real-time alerts for comprehensive security.",
    image: serviceConstruction,
    features: ["Face Recognition", "Plate Recognition", "Cloud Storage", "24/7 Monitoring"],
  },
];

const constructionServices = [
  {
    icon: Building2,
    title: "Residential Building Construction",
    description: "Full spectrum of general construction services including new work, additions, alterations, remodeling and repair of residential buildings.",
  },
  {
    icon: Home,
    title: "Government Building Construction",
    description: "A-class engineering and construction for government buildings, hospitals, office blocks, roads, utility systems and major structures.",
  },
  {
    icon: Grid3X3,
    title: "Prefabricated Buildings",
    description: "Cost-effective prefabrication with off-site assembly, reducing labor costs, material waste and construction time.",
  },
  {
    icon: PaintBucket,
    title: "Painting & Coating Works",
    description: "Internal and external building painting providing protection from UV, chemicals, abrasion and environmental factors.",
  },
  {
    icon: DoorOpen,
    title: "Doors, Windows & Installation",
    description: "Installation of doors, windows, frames, balustrades, stairs and wooden kitchens with proper workmanship.",
  },
  {
    icon: Grid3X3,
    title: "Scaffolding Installation",
    description: "ISO certified scaffolding services with comprehensive safety standards and in-house engineering design team.",
  },
];

const maintenanceServices = [
  {
    icon: Thermometer,
    title: "HVAC Maintenance",
    description: "Installation, maintenance and repair of refrigeration and air conditioning systems for residential and commercial applications.",
  },
  {
    icon: Flame,
    title: "Fire Piping Maintenance",
    description: "Expert service for fire protection systems including inspections, repairs and 24/7 emergency response.",
  },
  {
    icon: Droplets,
    title: "Plumbing & Sanitary",
    description: "Complete plumbing installation, maintenance and repair for bathrooms, kitchens and commercial facilities.",
  },
  {
    icon: Sun,
    title: "Solar System Maintenance",
    description: "Annual cleaning, visual inspections, module testing and energy production analysis to maximize efficiency.",
  },
  {
    icon: Factory,
    title: "Industrial Equipment",
    description: "Maintenance and repair of CNC machines, robotic arms, conveyors, compressors and various industrial equipment.",
  },
  {
    icon: FlaskConical,
    title: "Chemical Materials",
    description: "Trading of industrial chemicals including lubricants, acids, glycols and cleaning products.",
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-navy-light" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

        <div className="container-width relative z-10 pt-32 pb-20">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-6 animate-fade-up">
              Our Services
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up delay-100">
              Comprehensive Industrial{" "}
              <span className="text-gradient-gold">Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 animate-fade-up delay-200">
              From trading and supply to construction and maintenance, we
              deliver excellence across the entire spectrum of industrial
              services.
            </p>
          </div>
        </div>
      </section>

      {/* Trading Services */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
              Trading & Supply
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Industrial <span className="text-secondary">Trading Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Quality products and equipment from trusted global manufacturers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tradingServices.map((service, index) => (
              <div
                key={service.title}
                className="group bg-card rounded-2xl shadow-elegant overflow-hidden hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-secondary/10 rounded-lg">
                      <service.icon className="h-5 w-5 text-secondary" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Services */}
      <section className="section-padding bg-muted">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
              Construction
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Construction & <span className="text-secondary">Building</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Full-service construction from site preparation to project completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {constructionServices.map((service, index) => (
              <div
                key={service.title}
                className="bg-card p-6 rounded-xl shadow-elegant hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="p-3 bg-secondary/10 rounded-lg w-fit mb-4">
                  <service.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Services */}
      <section className="section-padding bg-primary">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
              Maintenance & Repair
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Maintenance <span className="text-secondary">Services</span>
            </h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto">
              Keep your operations running smoothly with our expert maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {maintenanceServices.map((service, index) => (
              <div
                key={service.title}
                className="bg-primary-foreground/5 backdrop-blur-sm p-6 rounded-xl hover:bg-primary-foreground/10 transition-colors animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="p-3 bg-secondary/20 rounded-lg w-fit mb-4">
                  <service.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
              Additional Services
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              More Ways We <span className="text-secondary">Serve You</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Building Maintenance",
              "Camp Services",
              "Water & Sewer Services",
              "Recreation Camping",
              "Furniture Repair",
              "Manpower Recruitment",
              "Parks & Gardens Care",
              "Wholesale Trading",
            ].map((service, index) => (
              <div
                key={service}
                className="bg-muted p-6 rounded-xl text-center hover:bg-secondary/10 transition-colors animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-foreground font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted">
        <div className="container-width">
          <div className="bg-gradient-to-r from-primary to-navy-light rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
                Our team is ready to discuss your specific requirements and
                provide tailored solutions for your project.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-lg px-8 shadow-gold"
              >
                <Link to="/contact">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
