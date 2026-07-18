import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

// Air Filters
import irAirFilter from "@/assets/products/IR-airfilter.jpg";
import compairAirFilter from "@/assets/products/compair-airfilter.jpg";
import atlascopcoSmallAirFilter from "@/assets/products/atlascopco-small-air-filter.jpg";
import atlascopcoAirFilter from "@/assets/products/Atlascopco-airfilter.jpg";
import fleetguardAirFilter from "@/assets/products/Fleetguard air filter.jpg";

// Compressor Parts
import completeCompressorPartKit from "@/assets/products/Complete Compressor part kit.jpg";
import atlascopcoOilIndicator from "@/assets/products/atlascopco oil indicator comp part.jpg";
import atlascopcoDifferentialPressure from "@/assets/products/Atlas Copco differential pressure indicators comp  part.jpg";
import compairMlsCartridge from "@/assets/compair-MLS-Carridge12-comppart.jpeg";

// Line Filters
import shenzenSingleLineFilter from "@/assets/products/Shenzen Single line filterr.jpg";
import shenzenCompleteLineFilter from "@/assets/products/Shenzen  Complete line filter.jpg";
import powerboyLineFilter from "@/assets/products/Powerboy line filterr.jpg";
import mpPlLineFilter from "@/assets/products/MP 10_30 - PL 10_10 line filter .jpg";
import hadLineFilter from "@/assets/products/HAD 20B Line filter.jpg";
import MannLinefilter from "@/assets/products/Mann Line filter.jpg";

// Separator Filters
import shenzenSeparatorFilter from "@/assets/products/shenzen-sepratefilter.jpg";
import originalOilSeparatorFilter from "@/assets/products/origginal oil seprarator  filter.jpg";
import mannSeparatorFilter from "@/assets/products/Mann- Seprate filter.jpg";
import atlascopcoSeparatorFilter from "@/assets/products/Atlascopco-sepratorfilter.jpg";
import allSizeSeparatorFilter from "@/assets/products/All-size-sepratorfilter.jpg";
import aircompSeparatorFilter from "@/assets/products/Aircomp-seprator filterr.jpg";

// Compressor Oil
import teslaCompressorOil from "@/assets/products/Tesla SAE 80 Compressor Oil.jpg";
import pplLubeCompressorOil from "@/assets/products/PPL Lube Professional Formula Compressor Oil SAE 68.jpeg";

// Oil Filters
import sullairFiberglassElement from "@/assets/products/sullairoilfilter.jpeg";
import irCompressorFilter from "@/assets/products/ingersoiloilfilter.jpeg";
import irCompressorFilter2 from "@/assets/products/ingersoiloilfiter2.jpeg";
import atlasCopcoOilFilter1 from "@/assets/products/AtlasCopcoOilFilter(1613).jpeg";
import atlasCopcoOilFilter3 from "@/assets/products/atlascopco1614oilfilter.jpeg";
import soumacOilFilter1 from "@/assets/products/Soumac Oil Filter (SO-4840).jpeg";
import soumacOilFilter2 from "@/assets/products/soumac-oil-filter-so-4611.jpeg";
import kaeserOilFilter from "@/assets/products/Kaeseroilfiter.jpeg";
import kobelcoOilFilter from "@/assets/products/Kobelcooilfilter.jpeg";
import mannOilFilter from "@/assets/products/manfilteroil.jpeg";
import buschExhaustFilter from "@/assets/products/buschexhaustfilter.jpeg";
import teslaCompressorOil68 from "@/assets/products/compressoroil.jpeg";

const products = [
  // Air Filters (5 products)
  {
    name: "IR Air Filter",
    image: irAirFilter,
    description: "High-quality air filter from Ingersoll Rand for optimal filtration",
    category: "Air Filters",
  },
  {
    name: "Compair Air Filter",
    image: compairAirFilter,
    description: "Premium Compair air filter for industrial applications",
    category: "Air Filters",
  },
  {
    name: "Atlas Copco Small Air Filter",
    image: atlascopcoSmallAirFilter,
    description: "Compact Atlas Copco air filter for space-limited installations",
    category: "Air Filters",
  },
  {
    name: "Atlas Copco Air Filter",
    image: atlascopcoAirFilter,
    description: "Standard Atlas Copco air filter for reliable performance",
    category: "Air Filters",
  },
  {
    name: "Fleetguard Air Filter",
    image: fleetguardAirFilter,
    description: "Heavy-duty Fleetguard air filter for harsh environments",
    category: "Air Filters",
  },

  // Line Filters (5 products)
  {
    name: "Shenzen Single Line Filter",
    image: shenzenSingleLineFilter,
    description: "Single stage Shenzen line filter for compressed air systems",
    category: "Line Filters",
  },
  {
    name: "Shenzen Complete Line Filter",
    image: shenzenCompleteLineFilter,
    description: "Complete Shenzen line filter kit for comprehensive filtration",
    category: "Line Filters",
  },
  {
    name: "Powerboy Line Filter",
    image: powerboyLineFilter,
    description: "Powerboy line filter for efficient air purification",
    category: "Line Filters",
  },
  {
    name: "MP 10/30 - PL 10/10 Line Filter",
    image: mpPlLineFilter,
    description: "Professional grade MP-PL line filter for demanding applications",
    category: "Line Filters",
  },
  {
    name: "HAD 20B Line Filter",
    image: hadLineFilter,
    description: "Heavy-duty HAD 20B line filter for industrial use",
    category: "Line Filters",
  },
  {
    name: "Mann Line Filter",
    image: MannLinefilter,
    description: "Mann line filter for efficient air purification",
    category: "Line Filters",
  },

  // Separator Filters (6 products)
  {
    name: "Shenzen Separator Filter",
    image: shenzenSeparatorFilter,
    description: "Shenzen separator filter for efficient oil separation",
    category: "Separator Filters",
  },
  {
    name: "Original Oil Separator Filter",
    image: originalOilSeparatorFilter,
    description: "Original quality oil separator filter for air compressors",
    category: "Separator Filters",
  },
  {
    name: "Mann Separator Filter",
    image: mannSeparatorFilter,
    description: "Premium Mann separator filter with superior efficiency",
    category: "Separator Filters",
  },
  {
    name: "Atlas Copco Separator Filter",
    image: atlascopcoSeparatorFilter,
    description: "Genuine Atlas Copco separator filter for optimal performance",
    category: "Separator Filters",
  },
  {
    name: "All Size Separator Filter",
    image: allSizeSeparatorFilter,
    description: "Universal separator filter compatible with various compressor sizes",
    category: "Separator Filters",
  },
  {
    name: "Aircomp Separator Filter",
    image: aircompSeparatorFilter,
    description: "Aircomp separator filter for reliable oil separation",
    category: "Separator Filters",
  },

  // Compressor Oil (2 products)
  {
    name: "Tesla SAE 80 Compressor Oil",
    image: teslaCompressorOil,
    description: "Premium Tesla SAE 80 compressor oil for extended equipment life",
    category: "Compressor Oil",
  },
  {
    name: "PPL Lube Professional Formula Compressor Oil SAE 68",
    image: pplLubeCompressorOil,
    description: "Professional grade PPL Lube SAE 68 compressor oil with 4000 hours working life",
    category: "Compressor Oil",
  },
  {
    name: "Tesla SAE 68 Compressor Oil",
    image: teslaCompressorOil68,
    description: "Premium Tesla SAE 68 mineral oil for screw compressors, providing excellent lubrication and protection",
    category: "Compressor Oil",
  },

  // Compressor Parts (4 products)
  {
    name: "Complete Compressor Part Kit",
    image: completeCompressorPartKit,
    description: "Complete compressor service kit with all essential parts",
    category: "Compressor Parts",
  },
  {
    name: "Atlas Copco Oil Indicator",
    image: atlascopcoOilIndicator,
    description: "Atlas Copco oil level indicator for accurate monitoring",
    category: "Compressor Parts",
  },
  {
    name: "Atlas Copco Differential Pressure Indicator",
    image: atlascopcoDifferentialPressure,
    description: "Atlas Copco differential pressure indicator for filter monitoring",
    category: "Compressor Parts",
  },
  {
    name: "CompAir MLS Cartridge 120 - SG4000 Grease",
    image: compairMlsCartridge,
    description: "CompAir MLS Cartridge 120 filled with SG4000 grease (120 cm³ / 4.06 fl.oz) - Part No. SCWG4000-120",
    category: "Compressor Parts",
  },
  {
    name: "Busch Exhaust Filter",
    image: buschExhaustFilter,
    description: "High-efficiency Busch exhaust filter for vacuum pumps and compressors",
    category: "Compressor Parts",
  },

  // Oil Filters (8 products)
  {
    name: "Sullair Fiberglass Element",
    image: sullairFiberglassElement,
    description: "Sullair Fiberglass Element P/N 250025-525 for high-efficiency filtration",
    category: "Oil Filters",
  },
  {
    name: "Ingersoll Rand Compressor Filter",
    image: irCompressorFilter,
    description: "High-pressure, high-efficiency Ingersoll Rand compressor filter (39911631)",
    category: "Oil Filters",
  },
  {
    name: "Atlas Copco Oil Filter (1613)",
    image: atlasCopcoOilFilter1,
    description: "Genuine Atlas Copco Oil Filter (1613 6105 90) for industrial compressors",
    category: "Oil Filters",
  },
  {
    name: "Atlas Copco Original Oil Filter",
    image: atlasCopcoOilFilter3,
    description: "Atlas Copco Original Part Oil Filter (1614 8747 00), built for durability",
    category: "Oil Filters",
  },
  {
    name: "Soumac Oil Filter (SO-4840)",
    image: soumacOilFilter1,
    description: "Soumac Oil Filter SO-4840, premium quality replacement for major brands",
    category: "Oil Filters",
  },
  {
    name: "Soumac Oil Filter (SO-4611)",
    image: soumacOilFilter2,
    description: "Soumac Oil Filter SO-4611, efficient and reliable compressor filtration",
    category: "Oil Filters",
  },
  {
    name: "Kaeser Oil Filter",
    image: kaeserOilFilter,
    description: "Kaeser Oil Filter 6.3465.0B1, made in Austria for superior protection",
    category: "Oil Filters",
  },
  {
    name: "Kobelco Oil Filter",
    image: kobelcoOilFilter,
    description: "Genuine Kobelco oil filter for optimal compressor lubrication and engine protection",
    category: "Oil Filters",
  },
  {
    name: "Ingersoll Rand Coolant Filter (24900433)",
    image: irCompressorFilter2,
    description: "Ingersoll Rand Coolant Filter 24900433, engineered for high-pressure industrial applications",
    category: "Oil Filters",
  },
  {
    name: "Mann Filter (W 1374)",
    image: mannOilFilter,
    description: "Premium Mann Filter W 1374, made in Germany for superior filtration efficiency",
    category: "Oil Filters",
  },
];

const Products = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const categoryFilter = searchParams.get("category");
  const searchQuery = searchParams.get("search");

  useEffect(() => {
    const titleBase = "Time Air Technology";
    if (searchQuery && categoryFilter) {
      document.title = `${searchQuery} in ${categoryFilter} | ${titleBase}`;
    } else if (searchQuery) {
      document.title = `Search: ${searchQuery} | ${titleBase}`;
    } else if (categoryFilter) {
      document.title = `${categoryFilter} | ${titleBase}`;
    } else {
      document.title = `Products | ${titleBase}`;
    }
  }, [searchQuery, categoryFilter]);

  // Filter products based on category and search query
  let filteredProducts = products;

  // Apply category filter
  if (categoryFilter) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === categoryFilter
    );
  }

  // Apply search filter
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );
  }

  // Get the page title and description based on filters
  let pageTitle = "Our Products";
  let pageDescription = "";

  if (searchQuery && categoryFilter) {
    pageTitle = `Search Results for "${searchQuery}" in ${categoryFilter}`;
    pageDescription = `${filteredProducts.length} product(s) found`;
  } else if (searchQuery) {
    pageTitle = `Search Results for "${searchQuery}"`;
    pageDescription = `${filteredProducts.length} product(s) found`;
  } else if (categoryFilter) {
    pageTitle = categoryFilter;
    pageDescription = `Browse our range of ${categoryFilter.toLowerCase()} - ${filteredProducts.length} Products Available`;
  } else {
    pageDescription = `Browse our complete range of industrial equipment and accessories - ${filteredProducts.length} Products Available`;
  }

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{pageTitle}</h1>
          <p className="text-lg text-primary-foreground/90">
            {pageDescription}
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-12">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-muted/30 rounded-2xl border-2 border-dashed border-muted flex flex-col items-center animate-in fade-in zoom-in duration-300">
            <div className="p-4 bg-background rounded-full shadow-sm mb-4">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">No products found</h3>
            <p className="text-muted-foreground max-w-sm mx-auto">
              {searchQuery
                ? `We couldn't find anything matching "${searchQuery}". Try using different keywords or checking for typos.`
                : "No products are currently available in this category."}
            </p>
            <Button
              variant="outline"
              className="mt-6"
              onClick={() => navigate('/products')}
            >
              View All Products
            </Button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Products;
