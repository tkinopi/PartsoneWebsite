import { Link } from "wouter";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Heart, MessageCircle } from "lucide-react";

const ActionLinks = () => {
  return (
    <section className="py-20 bg-black">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center items-center min-h-[30vh]"
        >
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full">
            {/* キャリアカード */}
            <Link href="/recruit/culture" className="block group">
              <div className="border border-white/30 rounded-lg p-10 text-center h-full transition-all duration-300 group-hover:border-primary/70">
                <div className="flex justify-center mb-4 overflow-hidden h-12 relative">
                  <Heart className="w-12 h-12 text-white group-hover:text-primary transition-all duration-300 transform translate-y-12 group-hover:translate-y-0 absolute" />
                </div>
                <div className="transition-all duration-300 transform group-hover:translate-y-0" style={{ transform: 'translateY(30px)' }}>
                  <h3 className="text-4xl font-bold text-white mb-3 group-hover:text-primary transition-colors">Careers</h3>
                  <p className="text-white/80">循環型社会を共に実現しませんか？</p>
                </div>
              </div>
            </Link>

            {/* コンタクトカード */}
            <Link href="/contact" className="block group">
              <div className="bg-white rounded-lg p-10 text-center h-full transition-all duration-300 group-hover:border-primary group-hover:border">
                <div className="flex justify-center mb-4 overflow-hidden h-12 relative">
                  <MessageCircle className="w-12 h-12 text-primary transition-all duration-300 transform translate-y-12 group-hover:translate-y-0 absolute" />
                </div>
                <div className="transition-all duration-300 transform group-hover:translate-y-0" style={{ transform: 'translateY(30px)' }}>
                  <h3 className="text-4xl font-bold text-primary mb-3">Contact</h3>
                  <p className="text-gray-600">お気軽にお問い合わせください</p>
                </div>
              </div>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ActionLinks;