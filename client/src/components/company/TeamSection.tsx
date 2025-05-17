import { SectionTitle } from "@/components/ui/section-title";
import { teamMembersData } from "@/lib/constants";
import { motion } from "framer-motion";

const TeamSection = () => {
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
    <section className="mb-16">
      <SectionTitle 
        title="私たちのチーム" 
        subtitle="Partsoneの成長を支える専門家たち" 
        center={true}
      />
      
      <div className="mt-12 max-w-5xl mx-auto">
        <p className="text-xl text-center mb-12">
          Partsoneのメンバーは、それぞれの専門分野で豊富な経験と知識を持ち、
          お客様のビジネス成功のために日々全力で取り組んでいます。
        </p>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {teamMembersData.map((member, index) => (
            <motion.div 
              key={index}
              className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden"
              variants={itemVariants}
            >
              <div className="md:w-1/3">
                <img 
                  src={member.imageSrc} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.position}</p>
                <p className="text-muted-foreground">{member.description}</p>
                <div className="mt-4 flex space-x-3">
                  <a href="#" className="text-primary hover:text-primary/80">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  <a href="#" className="text-primary hover:text-primary/80">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;