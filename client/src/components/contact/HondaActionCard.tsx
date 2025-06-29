import { motion } from "framer-motion";
import { Phone, FileText, ExternalLink } from "lucide-react";

interface HondaActionCardProps {
  title: string;
  imageSrc: string;
  index: number;
  type: "phone" | "pdf" | "external";
  href?: string;
  phoneNumber?: string;
  phoneHours?: string;
  pdfUrl?: string;
}

const HondaActionCard = ({ 
  title, 
  imageSrc, 
  index, 
  type, 
  href, 
  phoneNumber, 
  phoneHours,
  pdfUrl 
}: HondaActionCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
      },
    },
  };

  const handleClick = () => {
    if (type === "phone" && phoneNumber) {
      window.location.href = `tel:${phoneNumber}`;
    } else if (type === "pdf" && pdfUrl) {
      window.open(pdfUrl, '_blank');
    } else if (type === "external" && href) {
      window.open(href, '_blank');
    }
  };

  const getIcon = () => {
    switch (type) {
      case "phone":
        return <Phone className="h-5 w-5" />;
      case "pdf":
        return <FileText className="h-5 w-5" />;
      case "external":
        return <ExternalLink className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
      onClick={handleClick}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-center mb-2">
          <div className="text-primary mr-2">
            {getIcon()}
          </div>
          <h3 className="text-lg font-bold text-center text-gray-900 group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>
        
        {type === "phone" && phoneNumber && phoneHours && (
          <div className="text-center text-sm text-gray-600 mt-2">
            <p className="font-semibold">{phoneNumber}</p>
            <p>{phoneHours}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default HondaActionCard;