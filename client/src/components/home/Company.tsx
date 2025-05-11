import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import TeamMemberCard from "@/components/cards/TeamMemberCard";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faSyncAlt, 
  faRocket, 
  faHandsHelping 
} from "@fortawesome/free-solid-svg-icons";
import { teamMembersData } from "@/lib/constants";

const Company = () => {
  const values = [
    {
      icon: faSyncAlt,
      title: "変化",
      description: "常に変化する市場環境やテクノロジーに敏感に対応し、最新のサービスを提供し続けます。",
    },
    {
      icon: faRocket,
      title: "挑戦",
      description: "新しいアイデアや技術に積極的に挑戦し、業界の常識を超えるサービスを目指します。",
    },
    {
      icon: faHandsHelping,
      title: "貢献",
      description: "お客様のビジネス成長をサポートし、社会全体の発展に貢献します。",
    },
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
    <section id="company" className="py-20 bg-white">
      <Container>
        <SectionTitle 
          title="企業文化" 
          subtitle="Partsoneは「変化・挑戦・貢献」を理念に掲げ、常に革新的なサービスを提供することで社会に貢献します。" 
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Partsoneのチームミーティング" 
              className="rounded-lg shadow-xl"
              loading="lazy"
            />
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h3 
              className="text-2xl font-bold mb-6"
              variants={itemVariants}
            >
              私たちの価値観
            </motion.h3>
            
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div 
                  key={index} 
                  className="flex"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary text-white">
                      <FontAwesomeIcon icon={value.icon} className="text-xl" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="bg-muted rounded-xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">チームメンバー</h3>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {teamMembersData.map((member, index) => (
              <TeamMemberCard 
                key={index}
                name={member.name}
                position={member.position}
                description={member.description}
                imageSrc={member.imageSrc}
                index={index}
              />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Company;
