import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import productLineFilter from "@/assets/linefilter-featureprod.jpeg";
import productSeparatorFilter from "@/assets/products/All-size-sepratorfilter.jpg";
import productAirFilter from "@/assets/products/compair-airfilter.jpg";
import productCompressorOil from "@/assets/product-compressoroil.jpeg";
import productCompressorParts from "@/assets/product-compressor-parts.jpg";
import productOilFilter from "@/assets/products/AtlasCopcoOilFilter(1613).jpeg";


const categories = [
  {
    name: "Air Filters",
    image: productAirFilter,
    description: "Durable air filters for various industrial applications",
    count: "5 Products",
  },
  {
    name: "Compressor Oil",
    image: productCompressorOil,
    description: "Premium quality compressor oils and lubricants",
    count: "3 Products",
  },
  {
    name: "Compressor Parts",
    image: productCompressorParts,
    description: "Genuine compressor parts and service kits for all major brands",
    count: "5 Products",
  },
  {
    name: "Line Filters",
    image: productLineFilter,
    description: "High-quality line filters for compressed air and gas systems",
    count: "5 Products",
  },
  {
    name: "Oil Filters",
    image: productOilFilter,
    description: "High-performance oil filters for industrial air compressors",
    count: "10 Products",
  },
  {
    name: "Separator Filters",
    image: productSeparatorFilter,
    description: "Premium separator filters for air compressors",
    count: "6 Products",
  },
];

const Categories = () => {
  useEffect(() => {
    document.title = "Product Categories | Time Air Technology";
  }, []);

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Product Categories</h1>
          <p className="text-lg text-primary-foreground/90">
            Explore our comprehensive range of industrial equipment categories
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <Link to={`/products?category=${encodeURIComponent(category.name)}`} key={index}>
              <Card className="group hover:shadow-xl transition-all duration-200 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">{category.description}</p>
                      <p className="text-sm font-semibold text-secondary">{category.count}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Categories;
