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

        <div className="mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,4fr] gap-8 items-start">
            {/* 左側: 住所情報 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-5 rounded-xl self-start sticky top-24"
            >
              <h3 className="text-2xl font-bold mb-4">Tokyo</h3>

              <div className="space-y-3 mb-6">
                <p className="text-base">〒150-0033</p>
                <p className="text-base">
                  東京都渋谷区猿楽町3-3
                  <br />
                  Imas Shibuya 2F
                </p>

                <div className="pt-1">
                  <p className="text-sm text-gray-500">「渋谷駅」徒歩9分</p>
                  <p className="text-sm text-gray-500">「代官山駅」徒歩8分</p>
                </div>
              </div>

              <Button
                asChild
                variant="default"
                className="flex items-center gap-2 w-full justify-center"
              >
                <a
                  href="https://maps.google.com/?q=東京都渋谷区猿楽町3-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="h-4 w-4" />
                  Google Map
                </a>
              </Button>
            </motion.div>

            {/* 右側: 地図 */}
            <div className="h-auto relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden shadow-xl w-full"
                style={{ height: "70vh", minHeight: "700px" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.9877302938166!2d139.70204727552982!3d35.65267393154259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b5b3008ed9f%3A0xe56ae7e0592c3913!2zSW1hcyBTaGlidXlhLCAyZiDvvJMt77yTIOeMv-alveeUuiDmuIvosLfljLog5p2x5Lqs6YO9IDE1MC0wMDMz!5e0!3m2!1sja!2sjp!4v1748879973939!5m2!1sja!2sjp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Partsone Tokyo Office"
                  className="absolute inset-0"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Office;
