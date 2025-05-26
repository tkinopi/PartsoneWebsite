import { useState } from "react";
import { SectionTitle } from "@/components/ui/section-title";
import { teamMembersData } from "@/lib/constants";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TeamSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMember = teamMembersData[activeIndex];

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? teamMembersData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === teamMembersData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="mb-16">
      <SectionTitle 
        title="私たちのチーム" 
        subtitle="Partsoneの成長を支える専門家たち" 
        center={true}
      />
      
      <div className="mt-12 max-w-5xl mx-auto">
        {/* Circle Navigation */}
        <div className="relative flex justify-center items-center mb-20">
          {/* Previous Button */}
          <button 
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-500 hover:bg-gray-600 text-white rounded-full p-2 transition-colors"
            aria-label="Previous member"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          {/* Team Members Circle Navigation */}
          <div className="flex items-end justify-center gap-4 md:gap-6 max-w-4xl overflow-hidden">
            {teamMembersData.map((member, index) => {
              // Calculate positions to show only 5 members at a time
              const isActive = index === activeIndex;
              const isVisible = Math.abs(index - activeIndex) <= 2 || 
                                (activeIndex === 0 && index === teamMembersData.length - 1) || 
                                (activeIndex === teamMembersData.length - 1 && index === 0);
              
              return (
                <div key={index} className={`flex flex-col items-center ${!isVisible ? 'hidden md:flex' : 'flex'}`}>
                  <button
                    onClick={() => setActiveIndex(index)}
                    className={`relative rounded-full overflow-hidden mb-3 transition-all duration-300 border-2 ${
                      isActive 
                        ? 'border-primary w-24 h-24 md:w-28 md:h-28' 
                        : 'border-transparent w-16 h-16 md:w-20 md:h-20 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={member.imageSrc} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                  <span className={`text-center text-sm font-medium transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                    {member.name.split(' ')[0]}
                    <br />
                    {member.name.split(' ')[1]}
                  </span>
                </div>
              );
            })}
          </div>
          
          {/* Next Button */}
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-500 hover:bg-gray-600 text-white rounded-full p-2 transition-colors"
            aria-label="Next member"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        
        {/* Member Detail */}
        <motion.div 
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col md:flex-row gap-8 bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="md:w-1/2 overflow-hidden">
            <img 
              src={activeMember.imageSrc} 
              alt={activeMember.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8">
            <h3 className="text-2xl font-bold">{activeMember.name}</h3>
            <p className="text-primary font-medium text-lg mb-6">{activeMember.position}</p>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                {activeMember.description}
              </p>
            </div>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-primary hover:text-primary/80">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="text-primary hover:text-primary/80">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;