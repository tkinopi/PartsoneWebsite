import { useEffect, useState } from "react";
import { useParams, Link } from "wouter";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { newsData } from "@/lib/constants";
import { formatDate } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";

export default function NewsDetail() {
  const { id } = useParams<{ id: string }>();
  const [newsItem, setNewsItem] = useState<typeof newsData[0] | undefined>(undefined);
  const [relatedNews, setRelatedNews] = useState<typeof newsData>([]);
  
  useEffect(() => {
    // 対象のニュース記事を検索
    const currentNews = newsData.find(item => item.id === id);
    setNewsItem(currentNews);
    
    // 関連ニュース（同じカテゴリーの他の記事）を取得
    if (currentNews) {
      const related = newsData
        .filter(item => item.id !== id && item.category === currentNews.category)
        .slice(0, 3);
      setRelatedNews(related);
    }
  }, [id]);
  
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
            <Link href="/">
              <a className="hover:text-primary">ホーム</a>
            </Link>
            <span>/</span>
            <Link href="/#news">
              <a className="hover:text-primary">ニュース</a>
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
              <time className="text-muted-foreground" dateTime={newsItem.date}>
                {formatDate(newsItem.date)}
              </time>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{newsItem.title}</h1>
          </div>
          
          {/* アイキャッチ画像 */}
          <div className="aspect-video mb-10 overflow-hidden rounded-lg">
            <img
              src={newsItem.imageSrc}
              alt={newsItem.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* 記事本文 */}
          <div 
            className="prose prose-lg max-w-none mb-16"
            dangerouslySetInnerHTML={{ __html: newsItem.content }}
          />
          
          {/* 関連記事 */}
          {relatedNews.length > 0 && (
            <div className="border-t pt-10 mt-10">
              <h2 className="text-2xl font-bold mb-6">関連ニュース</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedNews.map((news) => (
                  <Link key={news.id} href={`/news/${news.id}`}>
                    <a className="group block">
                      <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                        <img
                          src={news.imageSrc}
                          alt={news.title}
                          className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <time className="text-sm text-muted-foreground" dateTime={news.date}>
                        {formatDate(news.date)}
                      </time>
                      <h3 className="font-bold text-lg mt-2 group-hover:text-primary transition-colors">
                        {news.title}
                      </h3>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          {/* 戻るボタン */}
          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link href="/#news">
                <a className="flex items-center gap-2">
                  <ChevronLeft className="h-4 w-4" />
                  ニュース一覧に戻る
                </a>
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}