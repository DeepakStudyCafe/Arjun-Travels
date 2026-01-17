import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Building2, Flame, Sun, Zap, ShieldCheck, Wrench, Users, Target, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import serviceHvac from "@/assets/service-hvac.jpg";
import serviceFire from "@/assets/service-fire.jpg";
import serviceSolar from "@/assets/service-solar.jpg";
import serviceConstruction from "@/assets/service-construction.jpg";

const services = [
  {
    icon: Building2,
    title: "HVAC Solutions",
    description: "Expert duct fabrication and HVAC air movement products with 8+ years of industry experience.",
    image: serviceHvac,
  },
  {
    icon: Flame,
    title: "Fire Fighting",
    description: "UL certified systems, maintenance, and 24/7 emergency services for complete fire protection.",
    image: serviceFire,
  },
  {
    icon: Sun,
    title: "Solar Energy",
    description: "Complete solar PV solutions from design to installation for sustainable power generation.",
    image: serviceSolar,
  },
  {
    icon: Building2,
    title: "Construction",
    description: "General construction of residential and government buildings with quality-first approach.",
    image: serviceConstruction,
  },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "50+", label: "Expert Team" },
  { value: "100%", label: "Client Satisfaction" },
];

const clients = [
  "SABIC",
  "Saudi Aramco",
  "Saudi Electricity Company",
  "MARAFIQ",
  "Zamil Group",
  "RAPCO EPC",
];

const values = [
  {
    icon: Target,
    title: "Customer Focus",
    description: "We exceed expectations in quality, timely delivery and cost effectiveness.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    description: "Excellence in performance without compromising health and safety standards.",
  },
  {
    icon: Award,
    title: "Integrity",
    description: "Our work ethics revolve around integrity and professional excellence.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Building long-term relationships with sophisticated customers worldwide.",
  },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Industrial facilities and engineering"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
        </div>

        {/* Content */}
        <div className="container-width relative z-10 pt-32 pb-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-3xl w-full flex flex-col items-center md:items-start text-center md:text-left">
              <div className="animate-fade-up">
                <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-6">
                  Industrial Excellence Since 2016
                </span>
              </div>
              <h1 className="animate-fade-up delay-100 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
                Building Tomorrow's <span className="text-gradient-gold">Infrastructure</span> Today
              </h1>
              <p className="animate-fade-up delay-200 text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl">
                Your trusted partner for comprehensive industrial services,
                engineering solutions, and construction excellence across India and beyond.
              </p>
              <div className="animate-fade-up delay-300 flex flex-wrap gap-4 justify-center md:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-lg px-8 py-6 shadow-gold"
                >
                  <Link to="/services">
                    Explore Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-secondary bg-secondary/10 text-secondary hover:bg-secondary/80 hover:text-secondary-foreground font-semibold text-lg px-8 py-6 border-2 "
                >
                  <Link to="/contact">Get a Quote</Link>
                </Button>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
              <div className="w-full md:w-[400px] lg:w-[480px] aspect-[4/3] flex items-center justify-center">
                <img
                  src="banner.jfif"
                  alt="Industrial Excellence Banner"
                  className="rounded-2xl shadow-xl object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-secondary rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 -mt-12">
        <div className="container-width">
          <div className="bg-card rounded-2xl shadow-xl p-8 md:p-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="font-display text-3xl md:text-4xl font-bold text-secondary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
              What We Do
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Comprehensive Industrial <span className="text-secondary">Solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From HVAC to construction, we deliver excellence across a wide
              spectrum of industrial and engineering services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.title}
                to="/services"
                className="group relative overflow-hidden rounded-2xl bg-card shadow-elegant hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-secondary rounded-lg">
                      <service.icon className="h-5 w-5 text-secondary-foreground" />
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-primary-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-primary-foreground/80 mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-secondary font-medium group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
            >
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
                Why Choose Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Your Trusted Partner for{" "}
                <span className="text-secondary">Industrial Excellence</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                With over 60 years of pioneering experience in engineering and
                construction, we offer comprehensive services via traditional or
                design-and-build procurement, creating everything from
                government buildings to major industrial structures.
              </p>
              <ul className="space-y-4">
                {[
                  "A-Class Engineering & Construction Business",
                  "ISO Certified Quality Management",
                  "Approved vendor for Saudi Electricity Company",
                  "24/7 Emergency Services Available",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="bg-card p-6 rounded-xl shadow-elegant hover-lift animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-3 bg-secondary/10 rounded-lg w-fit mb-4">
                    <value.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="section-padding bg-primary">
        <div className="container-width">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
              Trusted By Industry Leaders
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Our Valued <span className="text-secondary">Clients</span>
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto">
              We're proud to serve some of the most respected organizations in
              the region.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((client, index) => (
              <div
                key={client}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-primary-foreground font-semibold text-center text-sm md:text-base">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="bg-gradient-to-r from-primary to-navy-light rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
                Contact us today for a free consultation and discover how we can
                bring your vision to life with excellence and precision.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-lg px-8 shadow-gold"
                >
                  <Link to="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                 asChild
                variant="outline"
                size="lg"
                className="border-secondary bg-secondary/10 text-secondary hover:bg-secondary/80 hover:text-secondary-foreground font-semibold text-lg px-8 py-4 border-2 "
                >
                  <a href="tel:+919667399819">Call Us Now</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
