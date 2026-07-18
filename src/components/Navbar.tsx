import { Search, MessageCircle, Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "./ui/sheet";

const WHATSAPP_NUMBER = "15551234567";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/categories" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Close sheet when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  };

  const handleSearch = (query: string) => {
    if (query.trim()) {
      navigate(`/products?search=${encodeURIComponent(query.trim())}`);
      setIsOpen(false);
    } else {
      navigate('/products');
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(searchQuery);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b">
      {/* Top bar */}
      <div className="bg-primary/5 text-primary text-[10px] md:text-xs py-1.5 border-b border-primary/10">
        <div className="container mx-auto px-4 text-center font-medium tracking-wide">
          WELCOME TO TIME AIR TECHNOLOGY - YOUR TRUSTED INDUSTRIAL EQUIPMENT PROVIDER
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-primary shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-4 py-3 md:py-4">

            {/* Mobile Menu Trigger */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0">
                  <SheetHeader className="p-6 bg-primary text-primary-foreground text-left">
                    <SheetTitle className="text-primary-foreground text-2xl font-bold">Menu</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col h-full bg-background">
                    <nav className="flex-1 p-6">
                      <ul className="space-y-4">
                        {navLinks.map((link) => (
                          <li key={link.path}>
                            <Link
                              to={link.path}
                              className={`text-xl font-semibold hover:text-primary transition-colors block py-2 ${location.pathname === link.path ? "text-primary border-l-4 border-primary pl-4 -ml-4" : "text-foreground"
                                }`}
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                    <div className="p-6 border-t bg-muted/30">
                      <Button
                        variant="whatsapp"
                        size="lg"
                        className="w-full shadow-md"
                        onClick={handleWhatsAppClick}
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Chat on WhatsApp
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <h1 className="text-lg md:text-2xl font-bold text-primary-foreground tracking-tight group-hover:scale-105 transition-transform">
                Time Air <span className="text-secondary-foreground font-light">Technology</span>
              </h1>
            </Link>

            {/* Search Bar - Hidden on mobile */}
            <form onSubmit={handleSearchSubmit} className="hidden md:flex flex-1 max-w-xl items-center gap-2">
              <div className="relative flex-1 group">
                <Input
                  type="search"
                  placeholder="Search for parts..."
                  className="w-full bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 pr-10 focus:bg-background focus:text-foreground focus:ring-secondary transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary-foreground/50 group-focus-within:text-primary transition-colors" />
              </div>
              <Button type="submit" variant="secondary" className="shadow-md hover:shadow-lg transition-all">
                Search
              </Button>
            </form>

            {/* WhatsApp Button - Subtle on desktop */}
            <div className="flex items-center gap-2">
              <Button
                variant="whatsapp"
                size="sm"
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 shadow-md hover:scale-105 transition-all text-xs md:text-sm"
              >
                <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
                <span className="hidden sm:inline">Support</span>
              </Button>
            </div>
          </div>

          <nav className="hidden md:block border-t border-primary-foreground/10">
            <ul className="flex items-center justify-center gap-6 py-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${location.pathname === link.path
                      ? "bg-primary-foreground/20 text-primary-foreground shadow-inner"
                      : "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                      }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
