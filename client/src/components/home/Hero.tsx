import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Link } from "wouter";

const Hero = () => {
  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 80;
      const sectionPosition = section.getBoundingClientRect().top;
      const offsetPosition = sectionPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section 
      className="relative h-screen flex items-center" 
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-overlay" />
      <Container className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            部品を再生し、産業を刷新する。
          </h1>
          <p className="text-xl text-white mb-8">
            自動車アフターパーツの流通をデジタルで最適化し、<br />
            リサイクルの常識を変革。
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() => handleScrollToSection("services")}
            >
              サービスを見る
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white text-secondary hover:bg-secondary/10 hover:text-white"
              asChild
            >
              <Link href="/contact">
                お問い合わせ
              </Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
