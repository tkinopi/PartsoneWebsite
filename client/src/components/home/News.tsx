import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import type { NewsArticle } from "@shared/schema";

const News = () => {
  const { data: newsArticles, isLoading } = useQuery<NewsArticle[]>({
    queryKey: ["/api/news"],
  });

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

  if (isLoading) {
    return (
      <section id="news" className="py-20 bg-white">
        <Container>
          <SectionTitle title="News" subtitle="" />
          <div className="mt-12 space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-muted p-6 rounded-lg animate-pulse">
                <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-full"></div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="news" className="py-20 bg-white">
      <Container>
        <SectionTitle 
          title="News" 
          subtitle="" 
        />
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="mt-12 space-y-6"
        >
          {newsArticles?.slice(0, 3).map((article) => (
            <Link key={article.id} href={`/news/${article.id}`}>
              <motion.div 
                className="bg-muted hover:bg-slate-50 p-6 rounded-lg transition-all group cursor-pointer"
                variants={itemVariants}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="md:w-3/4">
                    <div className="flex flex-col sm:flex-row gap-2 sm:items-center mb-2">
                      <span className="text-sm text-muted-foreground font-medium">
                        {formatDate(new Date(article.publishedAt).toISOString().split('T')[0])}
                      </span>
                      <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                  {article.imageUrl && (
                    <div className="md:w-1/4 overflow-hidden rounded-lg">
                      <img 
                        src={article.imageUrl} 
                        alt={article.title} 
                        className="w-full h-32 object-cover transition-transform group-hover:scale-105 duration-300"
                        loading="lazy" 
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="text-primary border-primary hover:bg-primary/10" asChild>
            <Link href="/news">
              ニュース一覧を見る
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default News;