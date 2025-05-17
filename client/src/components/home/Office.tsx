import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Office = () => {
  return (
    <section id="office" className="py-20 bg-white">
      <Container>
        <SectionTitle 
          title="オフィス" 
          subtitle="Partsoneのオフィス所在地です" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          {/* 左側: 住所情報 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-10 rounded-xl"
          >
            <h3 className="text-3xl font-bold mb-6">Tokyo</h3>
            
            <div className="space-y-4 mb-8">
              <p className="text-lg">〒107-0062</p>
              <p className="text-lg">東京都港区赤坂2-14-27<br />国際新赤坂ビル東館10F</p>
              
              <div className="pt-2">
                <p className="text-sm text-gray-500">東京メトロ「赤坂駅」徒歩3分</p>
                <p className="text-sm text-gray-500">東京メトロ「赤坂見附駅」徒歩8分</p>
              </div>
            </div>
            
            <Button asChild variant="default" className="flex items-center gap-2">
              <a 
                href="https://maps.google.com/?q=東京都港区赤坂2-14-27" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="h-4 w-4" />
                Google Map
              </a>
            </Button>
          </motion.div>
          
          {/* 右側: 地図画像 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.4466958174574!2d139.7362071!3d35.6736375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b835942e165%3A0xb4897f1f4264c771!2z44CSMzMzLTAwMDcg5p2x5Lqs6YO95rGf5p2x5Yy65p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1656406277215!5m2!1sja!2sjp" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Partsone Tokyo Office"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Office;