import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "framer-motion";

const About = () => {
  const history = [
    { year: "2007年", event: "パーツワン株式会社 設立" },
    { year: "2010年", event: "東京支社 開設" },
    { year: "2015年", event: "大阪支社 開設" },
    { year: "2018年", event: "ISO9001認証取得" },
    { year: "2020年", event: "福岡支社 開設" },
    { year: "2022年", event: "名古屋支社 開設" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-white">
      <Container>
        <SectionTitle 
          title="会社情報" 
          subtitle="Partsoneは総合レンタル会社として、オフィス向けの機器からイベント用品まで、あらゆるニーズに対応しています。" 
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h3 
              className="text-2xl font-bold mb-4"
              variants={itemVariants}
            >
              企業理念
            </motion.h3>
            <motion.p 
              className="mb-6 text-muted-foreground"
              variants={itemVariants}
            >
              「変化・挑戦・貢献」を基本理念とし、社会に貢献し続ける企業を目指しています。多様な価値観を持つお客様のニーズを的確に捉え、最適なソリューションを提供します。
            </motion.p>
            
            <motion.h3 
              className="text-2xl font-bold mb-4"
              variants={itemVariants}
            >
              会社沿革
            </motion.h3>
            <motion.ul 
              className="space-y-4"
              variants={containerVariants}
            >
              {history.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <span className="text-primary font-bold mr-3">{item.year}</span>
                  <span>{item.event}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Partsone オフィス" 
              className="w-full h-auto"
              loading="lazy"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;
