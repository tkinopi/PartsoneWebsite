import { motion } from "framer-motion";

interface ContactOptionCardProps {
  title: string;
  imageSrc: string;
  href: string;
  index: number;
}

const ContactOptionCard = ({ title, imageSrc, href, index }: ContactOptionCardProps) => {
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
    window.location.href = href;
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
        <h3 className="text-lg font-bold text-center text-gray-900 group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

export default ContactOptionCard;