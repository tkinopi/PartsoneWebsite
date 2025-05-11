import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import ServiceCard from "@/components/cards/ServiceCard";
import { motion } from "framer-motion";
import { servicesData } from "@/lib/constants";

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-muted">
      <Container>
        <SectionTitle 
          title="サービス" 
          subtitle="Partsoneは多様なレンタルサービスを提供し、お客様のビジネスニーズに合わせたソリューションをご用意しています。" 
        />
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              index={index}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Services;
