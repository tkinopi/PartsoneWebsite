import { Link } from "wouter";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Heart, MessageCircle } from "lucide-react";

const ActionLinks = () => {
  return (
    <section className="py-16 bg-black">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* キャリアカード */}
            <Link href="/recruit/culture" className="block group">
              <div className="border border-white/30 rounded-lg p-8 text-center h-full transition-all duration-300 group-hover:border-primary/70">
                <div className="flex justify-center mb-4">
                  <Heart className="w-12 h-12 text-white group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors">Careers</h3>
                <p className="text-white/80">循環型社会の実現に向けて共に歩みませんか？</p>
              </div>
            </Link>

            {/* コンタクトカード */}
            <Link href="/contact" className="block group">
              <div className="bg-white rounded-lg p-8 text-center h-full transition-all duration-300 group-hover:border-primary group-hover:border">
                <div className="flex justify-center mb-4">
                  <MessageCircle className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">Contact</h3>
                <p className="text-gray-600">お気軽にお問い合わせください</p>
              </div>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ActionLinks;