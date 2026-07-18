import { useEffect } from "react";
import { Shield, Users, Award, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import soumacLogo from "@/assets/brands/soumac.jpg";
import atlasLogo from "@/assets/brands/atlas-copco.jpeg";
import kaeserLogo from "@/assets/brands/kaeser.jpeg";
import caterpillarLogo from "@/assets/brands/caterpillar.jpeg";
import compairLogo from "@/assets/brands/compair.jpeg";
import jaguarLogo from "@/assets/brands/jaguar.png";
import ingersollLogo from "@/assets/brands/Ingersoll-rand.svg.png";
import fleetguardLogo from "@/assets/brands/Fleetguard.png";
import perkinsLogo from "@/assets/brands/perkins.svg.png";
import bogeLogo from "@/assets/brands/boge.jpg";
import zakfLogo from "@/assets/brands/zakf.jpeg";

// Authorized Dealer brands
const authorizedDealers = [
  { name: "Shenzen Tognix Air Compressor", logo: null },
  { name: "SOUMAC", logo: soumacLogo },
  { name: "Powerboy", logo: null },
  { name: "Star Power", logo: null },
];

// Official Supplier brands
const officialSuppliers = [
  { name: "Atlas Copco", logo: atlasLogo },
  { name: "Kaeser", logo: kaeserLogo },
  { name: "Caterpillar", logo: caterpillarLogo },
  { name: "CompAir", logo: compairLogo },
  { name: "Jaguar", logo: jaguarLogo },
  { name: "Ingersoll Rand", logo: ingersollLogo },
  { name: "Fleetguard", logo: fleetguardLogo },
  { name: "Perkins", logo: perkinsLogo },
  { name: "BOGE", logo: bogeLogo },
  { name: "ZAKF", logo: zakfLogo },
];

const About = () => {
  useEffect(() => {
    document.title = "About Us | Time Air Technology";
  }, []);

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-primary-foreground/90">
            Your trusted partner in industrial equipment solutions
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Time Air Technology is a leading supplier of industrial compressor parts, filters, and accessories
            in Pakistan. With years of experience in the industry, we have built a
            reputation for providing high-quality products and exceptional customer service.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our mission is to provide businesses with reliable, authentic industrial equipment,
            backed by expert support and quick delivery nationwide.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-bold mb-2">Quality Assurance</h3>
              <p className="text-sm text-muted-foreground">
                Only authentic, tested products from trusted manufacturers
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-bold mb-2">Customer First</h3>
              <p className="text-sm text-muted-foreground">
                Dedicated support team ready to assist via WhatsApp
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Award className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-bold mb-2">Industry Expertise</h3>
              <p className="text-sm text-muted-foreground">
                Years of experience in industrial equipment supply
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Target className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-bold mb-2">Reliable Service</h3>
              <p className="text-sm text-muted-foreground">
                Fast nationwide delivery and competitive pricing
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us */}
        <div className="bg-muted rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Time Air Technology?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Extensive Product Range</h3>
              <p className="text-muted-foreground">
                We offer a comprehensive selection of industrial filters, compressor oils, and
                compressor parts to meet all your business needs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Quality Assurance</h3>
              <p className="text-muted-foreground">
                Our direct relationships with manufacturers ensure we provide authentic products
                without compromising on quality.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Quick Response Time</h3>
              <p className="text-muted-foreground">
                Contact us via WhatsApp and get a response within an hour. We're here to help you
                make the right purchasing decisions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Nationwide Delivery</h3>
              <p className="text-muted-foreground">
                We deliver across Pakistan, ensuring your equipment reaches you quickly and safely,
                no matter where you are.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Authorized Dealers Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Authorized Dealer of Premium Brands
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We are proud authorized dealers of these premium industrial equipment brands
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-4xl mx-auto">
            {authorizedDealers.map((brand) => (
              <div
                key={brand.name}
                className="flex items-center justify-center p-6 bg-background rounded-lg hover:shadow-md transition-shadow min-h-[120px]"
              >
                {brand.logo ? (
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="max-h-16 w-auto object-contain hover:scale-110 transition-transform"
                  />
                ) : (
                  <span className="text-center font-bold text-lg text-primary">
                    {brand.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Suppliers Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Our Official Vendors
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We supply genuine parts and filters from the world's leading industrial equipment manufacturers
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {officialSuppliers.map((brand) => (
              <div
                key={brand.name}
                className="flex items-center justify-center p-4 bg-muted/30 rounded-lg hover:shadow-md transition-shadow"
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="max-h-16 w-auto object-contain hover:scale-110 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
