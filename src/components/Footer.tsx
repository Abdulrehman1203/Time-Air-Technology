import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Time Air Technology</h3>
            <p className="text-primary-foreground/80 mb-4">
              Your trusted supplier for industrial compressor parts, filters, and accessories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=Air%20Filters" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Air Filters
                </Link>
              </li>
              <li>
                <Link to="/products?category=Compressor%20Oil" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Compressor Oil
                </Link>
              </li>
              <li>
                <Link to="/products?category=Compressor%20Parts" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Compressor Parts
                </Link>
              </li>
              <li>
                <Link to="/products?category=Line%20Filters" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Line Filters
                </Link>
              </li>
              <li>
                <Link to="/products?category=Oil%20Filters" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Oil Filters
                </Link>
              </li>
              <li>
                <Link to="/products?category=Separator%20Filters" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Separator Filters
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <div className="flex items-start gap-2 mb-2">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <div className="text-primary-foreground/80">
                    <p className="font-semibold">Head Office:</p>
                    <p>123 Industrial Avenue, Tech District, City</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2 mb-2">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <div className="text-primary-foreground/80">
                    <p className="font-semibold">Warehouse:</p>
                    <p>456 Warehouse Blvd, Logistics Park, City</p>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <p>+1 555 123 4567</p>
                  <p>+1 555 987 6543</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  contact@dummy-timeairtechnology.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
          <p>&copy; 2025 Time Air Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
