import { motion } from "framer-motion";

interface TeamMemberCardProps {
  name: string;
  position: string;
  description: string;
  imageSrc: string;
  index: number;
}

const TeamMemberCard = ({ name, position, description, imageSrc, index }: TeamMemberCardProps) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: index * 0.1 
      }
    }
  };
  
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-md text-center transition-all hover:shadow-lg hover:-translate-y-1"
      variants={item}
    >
      <div className="h-64 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={`${name} - ${position}`} 
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h4 className="font-bold text-xl mb-1">{name}</h4>
        <p className="text-primary mb-3">{position}</p>
        <p className="text-muted-foreground text-sm">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
