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

const OfficialSuppliers = () => {
  return (
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
  );
};

export default OfficialSuppliers;

