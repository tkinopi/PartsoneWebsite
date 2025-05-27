import { useParams, Link } from "wouter";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { NewsArticle } from "@shared/schema";

export default function NewsDetail() {
  const { id } = useParams<{ id: string }>();
  
  const { data: newsItem, isLoading } = useQuery<NewsArticle>({
    queryKey: [`/api/news/${id}`],
    enabled: !!id,
  });
  
  const { data: allNews } = useQuery<NewsArticle[]>({
    queryKey: ["/api/news"],
  });
  
  const relatedNews = allNews?.filter(
    article => article.id !== parseInt(id || "0") && article.category === newsItem?.category
  ).slice(0, 3) || [];
  
  // Loading state
  if (isLoading) {
    return (
      <div className="pt-24 pb-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse">
              <div className="h-4 bg-gray-300 rounded w-1/4 mb-6"></div>
              <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
              <div className="h-6 bg-gray-300 rounded w-1/2 mb-8"></div>
              <div className="aspect-video bg-gray-300 rounded mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                <div className="h-4 bg-gray-300 rounded w-4/5"></div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  // ニュースが見つからない場合
  if (!newsItem) {
    return (
      <div className="pt-24 pb-16">
        <Container>
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold mb-4">お探しのニュースが見つかりませんでした</h1>
            <p className="mb-8">URLが正しいかご確認ください。</p>
            <Button asChild>
              <Link href="/">トップページに戻る</Link>
            </Button>
          </div>
        </Container>
      </div>
    );
  }
  
  return (
    <div className="pt-24 pb-16">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* パンくずリスト */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-primary">
              ホーム
            </Link>
            <span>/</span>
            <Link href="/#news" className="hover:text-primary">
              ニュース
            </Link>
            <span>/</span>
            <span className="text-gray-600 truncate">{newsItem.title}</span>
          </div>
          
          {/* ニュースヘッダー */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {newsItem.category}
              </span>
              <time className="text-muted-foreground" dateTime={newsItem.publishedAt?.toString() || ''}>
                {formatDate(newsItem.publishedAt || new Date())}
              </time>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{newsItem.title}</h1>
          </div>
          
          {/* アイキャッチ画像 */}
          {newsItem.imageUrl && (
            <div className="aspect-video mb-10 overflow-hidden rounded-lg">
              <img
                src={newsItem.imageUrl}
                alt={newsItem.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          {/* 記事本文 */}
          <div className="prose prose-lg max-w-none mb-16">
            {(() => {
              // 記事内容を段落ごとに分割
              const paragraphs = newsItem.content.split('\n\n').filter(p => p.trim());
              const contentImages = newsItem.contentImages || [];
              const result: JSX.Element[] = [];
              
              paragraphs.forEach((paragraph, index) => {
                // 段落を追加
                result.push(
                  <p key={`paragraph-${index}`} className="text-lg leading-relaxed mb-6">
                    {paragraph}
                  </p>
                );
                
                // 画像がある場合、適切な位置に挿入
                if (contentImages[index] && index < contentImages.length) {
                  result.push(
                    <div key={`image-${index}`} className="my-8">
                      <img
                        src={contentImages[index]}
                        alt={`記事内画像 ${index + 1}`}
                        className="w-full rounded-lg shadow-lg"
                      />
                    </div>
                  );
                }
              });
              
              return result;
            })()}
          </div>
          
          {/* 関連記事 */}
          {relatedNews.length > 0 && (
            <div className="border-t pt-10 mt-10">
              <h2 className="text-2xl font-bold mb-6">関連ニュース</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedNews.map((article) => (
                  <Link key={article.id} href={`/news/${article.id}`} className="group block">
                    {article.imageUrl && (
                      <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                        <img
                          src={article.imageUrl}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                    )}
                    <time className="text-sm text-muted-foreground" dateTime={article.publishedAt.toString()}>
                      {formatDate(article.publishedAt)}
                    </time>
                    <h3 className="font-bold text-lg mt-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          {/* 戻るボタン */}
          <div className="mt-12 text-center">
            <Button variant="outline" asChild className="flex items-center gap-2">
              <Link href="/#news">
                <ChevronLeft className="h-4 w-4" />
                ニュース一覧に戻る
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}