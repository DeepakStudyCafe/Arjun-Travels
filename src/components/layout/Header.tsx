import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-elegant py-3"
          : "bg-transparent py-5"
      )}
    >
      {/* Top bar */}
      <div
        className={cn(
          "hidden md:block transition-all duration-300 overflow-hidden",
          isScrolled ? "h-0 opacity-0" : "h-auto opacity-100 pb-3"
        )}
      >
        <div className="container-width">
          <div className="flex justify-end items-center gap-6 text-sm">
            <a
              href="tel:+919667399819"
              className="flex items-center gap-2 text-primary-foreground/90 hover:text-secondary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>+91 9667399819</span>
            </a>
            <a
              href="mailto:info@arjuntravels.in"
              className="flex items-center gap-2 text-primary-foreground/90 hover:text-secondary transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>info@arjuntravels.in</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container-width">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Arjun Travels Logo"
              className="h-16 md:h-28 w-auto object-contain drop-shadow-md -my-4 md:-my-8"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "relative font-medium transition-colors gold-underline",
                  location.pathname === item.href
                    ? isScrolled
                      ? "text-secondary"
                      : "text-secondary"
                    : isScrolled
                    ? "text-foreground hover:text-secondary"
                    : "text-primary-foreground hover:text-secondary"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-6"
            >
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden p-2 transition-colors",
              isScrolled ? "text-foreground" : "text-primary-foreground"
            )}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-96 opacity-100 pt-6" : "max-h-0 opacity-0"
          )}
        >
          <div className="flex flex-col gap-4 bg-card rounded-lg p-6 shadow-elegant">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "font-medium py-2 transition-colors",
                  location.pathname === item.href
                    ? "text-secondary"
                    : "text-foreground hover:text-secondary"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold mt-2"
            >
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Get a Quote
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
