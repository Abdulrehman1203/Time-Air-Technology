import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const WHATSAPP_NUMBER = "15551234567";

const WhatsAppFloat = () => {
  const handleClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'd like to inquire about your products`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        variant="whatsapp"
        size="icon"
        className="h-14 w-14 rounded-full shadow-xl hover:scale-110 transition-transform"
        onClick={handleClick}
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </Button>
      <div className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-whatsapp opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-whatsapp"></span>
      </div>
    </div>
  );
};

export default WhatsAppFloat;
