import { useEffect } from "react";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import News from "@/components/home/News";
import CallToAction from "@/components/home/CallToAction";
import Office from "@/components/home/Office";
import ActionLinks from "@/components/home/ActionLinks";
import { motion, useScroll, useSpring } from "framer-motion";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />
      <Hero />
      <Services />
      <News />
      <ActionLinks />
      <Office />
    </>
  );
};

export default Home;
