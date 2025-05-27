import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { formatDate } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { NewsArticle } from "@shared/schema";

export default function NewsList() {
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

  // カテゴリー別にニュースを分類
  const categories = Array.from(new Set(newsArticles?.map(article => article.category) || []));
  
  if (isLoading) {
    return (
      <div className="pt-24 pb-16">
        <Container>
          <div className="max-w-5xl mx-auto">
            <SectionTitle title="ニュース一覧" subtitle="読み込み中..." />
            <div className="mt-12 space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-muted p-6 rounded-lg animate-pulse">
                  <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
                  <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-full"></div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    );
  }
  
  return (
    <div className="pt-24 pb-16">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* パンくずリスト */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-primary">
              ホーム
            </Link>
            <span>/</span>
            <span className="text-gray-600">ニュース一覧</span>
          </div>
          
          <SectionTitle 
            title="ニュース一覧" 
            subtitle="Partsoneの最新情報をお届けします" 
          />
          
          <div className="mt-12">
            {categories.map(category => (
              <div key={category} className="mb-16">
                <h2 className="text-2xl font-bold mb-6 border-b pb-3">
                  {category}
                </h2>
                
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                  className="space-y-6"
                >
                  {newsArticles
                    ?.filter(article => article.category === category)
                    .map(article => (
                      <Link key={article.id} href={`/news/${article.id}`}>
                        <motion.div 
                          className="bg-muted hover:bg-slate-50 p-6 rounded-lg transition-all group cursor-pointer"
                          variants={itemVariants}
                        >
                          <div className="flex flex-col md:flex-row gap-4">
                            <div className="md:flex-1">
                              <div className="flex flex-col sm:flex-row gap-2 sm:items-center mb-2">
                                <span className="text-sm text-muted-foreground font-medium">
                                  {formatDate(new Date(article.publishedAt).toISOString().split('T')[0])}
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
                                  className="w-full aspect-video object-cover transition-transform group-hover:scale-105 duration-300"
                                  loading="lazy" 
                                />
                              </div>
                            )}
                          </div>
                        </motion.div>
                      </Link>
                    ))}
                </motion.div>
              </div>
            ))}
          </div>
          
          {/* 戻るボタン */}
          <div className="mt-12 text-center">
            <Link href="/#news" className="inline-flex items-center gap-2 text-primary hover:underline">
              <ChevronLeft className="h-4 w-4" />
              ホームに戻る
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}