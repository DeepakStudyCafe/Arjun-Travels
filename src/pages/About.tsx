import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import aboutTeam from "@/assets/about-team.jpg";

const values = [
  "Acceptance & Development",
  "Availability",
  "Customer Satisfaction & Exceed Expectations",
  "Integrity in our work",
];

const capabilities = [
  "A-Class Engineering & Construction Business",
  "ISO Certified Quality Management",
  "Over 60 Years of Industry Experience",
  "Approved Vendor for Saudi Electricity Company",
  "Comprehensive Design & Build Services",
  "24/7 Emergency Response Team",
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-navy-light" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

        <div className="container-width relative z-10 pt-32 pb-20">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-6 animate-fade-up">
              About Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up delay-100">
              Pioneering Industrial{" "}
              <span className="text-gradient-gold">Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 animate-fade-up delay-200">
              For over six decades, Arjun Travels L.L.C has been at the
              forefront of industrial services and construction, delivering
              world-class solutions across India.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <img
                src={aboutTeam}
                alt="Our professional team"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>

            <div className="animate-fade-up">
              <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Building a Legacy of{" "}
                <span className="text-secondary">Trust & Quality</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Arjun Travels L.L.C (also known as Alnmothj Company Limited) is
                an "A" class engineering and construction business, pioneering
                in its field for over 60 years and offering comprehensive
                construction services via traditional or design and build
                procurement.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                We create government buildings, hotels, hospitals, office
                blocks, roads, utility systems and major structures. We work in
                partnership with sophisticated customers who value the highest
                levels of quality, safety and technical expertise.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
                >
                  <Link to="/services">
                    Our Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary/20 hover:bg-primary/5"
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="section-padding bg-muted">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="bg-card p-8 rounded-2xl shadow-elegant hover-lift animate-fade-up">
              <div className="p-4 bg-secondary/10 rounded-xl w-fit mb-6">
                <Eye className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To exceed the expectations of our customers in quality, timely
                delivery and cost effectiveness through continuous improvement
                and customer interactions.
              </p>
            </div>

            {/* Mission */}
            <div
              className="bg-card p-8 rounded-2xl shadow-elegant hover-lift animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              <div className="p-4 bg-secondary/10 rounded-xl w-fit mb-6">
                <Target className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide Construction, Engineering and Industrial solutions to
                all industries and technical societies mainly, Petrochemicals,
                Oil & Gas, Refineries and power generation.
              </p>
            </div>

            {/* Values */}
            <div
              className="bg-card p-8 rounded-2xl shadow-elegant hover-lift animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              <div className="p-4 bg-secondary/10 rounded-xl w-fit mb-6">
                <Heart className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Values
              </h3>
              <ul className="space-y-2">
                {values.map((value) => (
                  <li
                    key={value}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-primary">
        <div className="container-width">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Our Capabilities & <span className="text-secondary">Certifications</span>
            </h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto">
              We maintain the highest standards of quality and safety across all
              our operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={capability}
                className="flex items-start gap-4 bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CheckCircle className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
                <span className="text-primary-foreground font-medium">
                  {capability}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Motto */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-3xl p-8 md:p-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Motto
            </h2>
            <p className="text-2xl md:text-3xl text-secondary font-display italic max-w-3xl mx-auto">
              "Quality First - to be able to look at our Projects in decades to
              come and be proud that they were built by Arjun Travels L.L.C."
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted">
        <div className="container-width text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Let's discuss how we can bring our expertise to your next project.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-lg px-8 shadow-gold"
          >
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
