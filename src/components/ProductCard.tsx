import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

const WHATSAPP_NUMBER = "15551234567";

interface ProductCardProps {
  name: string;
  image: string;
  description?: string;
}

const ProductCard = ({ name, image, description }: ProductCardProps) => {
  const handleWhatsAppOrder = () => {
    const message = `Hi, I'd like to order ${name}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-200 flex flex-col h-full">
      <CardContent className="p-0 flex-1 flex flex-col">
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2">{name}</h3>
          {description && (
            <p className="text-sm text-muted-foreground mb-2 line-clamp-2 flex-1">{description}</p>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 mt-auto">
        <Button
          variant="whatsapp"
          className="w-full"
          onClick={handleWhatsAppOrder}
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Order on Whatsapp
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
