import soumacLogo from "@/assets/brands/soumac.jpg";

// Authorized Dealer brands - only 4 brands
const authorizedDealers = [
  { name: "Shenzen Tognix Air Compressor", logo: null },
  { name: "SOUMAC", logo: soumacLogo },
  { name: "Powerboy", logo: null },
  { name: "Star Power", logo: null },
];

const BrandLogos = () => {
  return (
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
  );
};

export default BrandLogos;
