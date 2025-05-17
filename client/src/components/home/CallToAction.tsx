import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

const CallToAction = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const headerOffset = 80;
      const sectionPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = sectionPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section 
      className="relative py-20" 
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-secondary to-transparent opacity-90" />
      <Container className="relative z-10">
        <motion.div 
          className="max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            お客様のビジネス成長をサポートするソリューション
          </h2>
          <p className="text-lg text-white mb-8">
            Partsoneは、ソーシング事業とデジタルプラットフォーム事業を通じて、お客様のビジネス課題解決と成長戦略をサポートします。
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white"
            onClick={handleScrollToContact}
          >
            今すぐ相談する
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default CallToAction;
