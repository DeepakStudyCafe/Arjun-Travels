import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const services = [
  "HVAC Solutions",
  "Fire Fighting",
  "Solar Energy",
  "Construction",
  "Electrical Trading",
  "Safety Equipment",
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-width p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-2xl font-bold mb-2">
                ARJUN TRAVELS
              </h3>
              <p className="text-xs tracking-widest uppercase text-primary-foreground/70">
                L.L.C
              </p>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted partner for comprehensive industrial services,
              construction, and engineering solutions across India.
            </p>
            
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-secondary">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-secondary">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-secondary">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">+91 96673 99819</p>
                  
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                <a
                  href="mailto:info@arjuntravels.in"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  info@arjuntravels.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                <span className="text-primary-foreground/80">
                  Delhi India
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                <span className="text-primary-foreground/80">
                  Sun - Thu: 8:00 AM - 10:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-2 text-sm text-primary-foreground/60">
            <div className="w-full md:w-1/3 text-left">
              <span>© {new Date().getFullYear()} Arjun Travels L.L.C. All rights reserved.</span>
            </div>
            <div className="w-full md:w-1/3 flex flex-col md:flex-row items-center justify-center text-center">
              <span>Developed with ❤️ by&nbsp;</span>
              <a
                href="tel:+919798217532"
                className="text-secondary font-semibold hover:underline hover:text-secondary/80 transition-colors"
                title="Call Deepak"
              >
                Deepak
              </a>
            </div>
            <div className="w-full md:w-1/3 text-right">
              <a
                href="https://www.arjuntravels.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                www.arjuntravels.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
