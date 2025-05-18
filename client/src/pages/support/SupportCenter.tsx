import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MessageSquare, Clock } from "lucide-react";
import { Link } from "wouter";

export default function SupportCenterPage() {
  const supportChannels = [
    {
      title: "メールサポート",
      description: "技術的な質問やお問い合わせはメールでお送りください。24時間以内に返信いたします。",
      icon: Mail,
      action: {
        label: "メールを送る",
        href: "/contact"
      }
    },
    {
      title: "電話サポート",
      description: "緊急のご質問や即時のサポートが必要な場合は、お電話ください。",
      icon: Phone,
      action: {
        label: "電話する",
        href: "tel:0312345678"
      }
    },
    {
      title: "チャットサポート",
      description: "簡単な質問や情報確認は、ライブチャットでお気軽にどうぞ。",
      icon: MessageSquare,
      action: {
        label: "チャットを開始",
        href: "#"
      }
    },
    {
      title: "営業時間",
      description: "サポート受付時間：平日 9:00〜18:00（土日祝日除く）",
      icon: Clock,
      action: null
    }
  ];

  return (
    <div className="py-20">
      <Container>
        <SectionTitle 
          title="サポートセンター" 
          subtitle="お客様をサポートするためのさまざまな方法をご用意しています"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {supportChannels.map((channel, index) => (
            <Card key={index} className="border border-gray-200">
              <CardHeader className="pb-2">
                <div className="flex items-center mb-2">
                  <channel.icon className="w-5 h-5 text-primary mr-2" />
                  <CardTitle>{channel.title}</CardTitle>
                </div>
                <CardDescription>{channel.description}</CardDescription>
              </CardHeader>
              {channel.action && (
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={channel.action.href}>
                      {channel.action.label}
                    </Link>
                  </Button>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
        
        <div className="mt-16">
          <SectionTitle 
            title="よくある質問" 
            subtitle="お客様からよく寄せられるご質問について"
            center
          />
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              よくある質問のページで、よくあるお問い合わせに対する回答をご確認いただけます。
            </p>
            <Button asChild>
              <Link href="/support/faq">
                よくある質問を見る
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}