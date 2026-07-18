import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeroSlider from "@/components/HeroSlider";
import BrandLogos from "@/components/BrandLogos";
import OfficialSuppliers from "@/components/OfficialSuppliers";
import ProductCard from "@/components/ProductCard";
import { MessageCircle, Clock, Shield, Truck } from "lucide-react";
import airFilterFeatureProd from "@/assets/airfilter-featureprod.jpeg";
import oilFilterFeatureProd from "@/assets/products/SoumacOilFilter(SO-4611).jpeg";
import lineFilterFeatureProd from "@/assets/products/Shenzen Single line filterr.jpg";
const featuredProducts = [
  {
    name: "Air Filters Collection",
    image: airFilterFeatureProd,
    description: "Premium air filters for industrial compressors and machinery",
  },
  {
    name: "Oil Filters Collection",
    image: oilFilterFeatureProd,
    description: "High-quality oil filters for optimal compressor performance",
  },
  {
    name: "Line Filters Collection",
    image: lineFilterFeatureProd,
    description: "Professional line filters for compressed air systems",
  },
];

const Home = () => {
  useEffect(() => {
    document.title = "Time Air Technology | Industrial Compressor Solutions";
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSlider />

      {/* Brand Logos Section */}
      <BrandLogos />

      {/* Trust Indicators */}
      <section className="bg-muted py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <MessageCircle className="h-10 w-10 text-whatsapp" />
              <div>
                <h3 className="font-semibold">Expert Support on WhatsApp</h3>
                <p className="text-sm text-muted-foreground">Usually replies within 1 hour</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="h-10 w-10 text-primary" />
              <div>
                <h3 className="font-semibold">Quality Guaranteed</h3>
                <p className="text-sm text-muted-foreground">Authentic products only</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="h-10 w-10 text-primary" />
              <div>
                <h3 className="font-semibold">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground">Nationwide shipping</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-10 w-10 text-primary" />
              <div>
                <h3 className="font-semibold">Quick Response</h3>
                <p className="text-sm text-muted-foreground">24/7 customer support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-lg text-muted-foreground">
            Premium industrial equipment for your business needs
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Product Categories</h2>
            <p className="text-lg text-muted-foreground">
              Explore our wide range of industrial equipment
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-2 md:px-0">
            {["Air Filters", "Compressor Oil", "Compressor Parts", "Line Filters", "Oil Filters", "Separator Filters"].map(
              (category) => (
                <Link
                  key={category}
                  to={`/products?category=${encodeURIComponent(category)}`}
                  className="bg-background p-4 md:p-6 rounded-xl text-center shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group border border-primary/5"
                >
                  <div className="h-10 w-10 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <div className="h-2 w-2 rounded-full bg-current" />
                  </div>
                  <h3 className="font-bold text-sm md:text-base leading-tight group-hover:text-primary transition-colors">
                    {category}
                  </h3>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* Official Suppliers Section */}
      <OfficialSuppliers />

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Bulk Order?</h2>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
            Contact us on WhatsApp for special pricing and quick quotes
          </p>
          <a
            href="https://wa.me/15551234567?text=Hi, I need a bulk order quote"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors"
          >
            <MessageCircle className="h-6 w-6" />
            Get Bulk Quote on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
