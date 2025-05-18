import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQPage() {
  const faqItems = [
    {
      question: "レンタル機器の予約はどのように行いますか？",
      answer: "当社のウェブサイトから、または直接お電話にてご予約いただけます。必要な機器の種類、数量、レンタル期間をご指定ください。"
    },
    {
      question: "キャンセルポリシーについて教えてください",
      answer: "レンタル開始日の7日前までのキャンセルは無料です。それ以降のキャンセルについては、レンタル料金の一部をキャンセル料としていただく場合があります。"
    },
    {
      question: "レンタル機器が故障した場合はどうすればよいですか？",
      answer: "即時にサポートセンターまでご連絡ください。可能な限り迅速に代替機器を提供いたします。お客様の過失による故障の場合、修理費用をご負担いただく場合があります。"
    },
    {
      question: "レンタル期間の延長は可能ですか？",
      answer: "はい、可能です。延長をご希望の場合は、当初のレンタル期間終了前にご連絡ください。延長期間の料金は、現行のレンタル料金に基づいて計算されます。"
    },
    {
      question: "支払い方法にはどのようなオプションがありますか？",
      answer: "クレジットカード、銀行振込、または請求書発行（法人のお客様）にて承っております。"
    },
    {
      question: "デリバリーとピックアップサービスはありますか？",
      answer: "はい、追加料金にて配送サービスをご利用いただけます。料金は配送先の距離と機器の量によって異なります。"
    },
    {
      question: "レンタル前に機器の試用や確認はできますか？",
      answer: "はい、事前予約の上、当社ショールームにて機器の確認や操作説明を受けることが可能です。"
    },
    {
      question: "国際的なレンタルや海外での使用は可能ですか？",
      answer: "一部の機器については国際的なレンタルも承っておりますが、追加料金や制限が適用される場合があります。詳細はお問い合わせください。"
    }
  ];

  return (
    <div className="py-20">
      <Container>
        <SectionTitle 
          title="よくある質問" 
          subtitle="お客様からよくいただくご質問とその回答をまとめました"
          center
        />
        
        <div className="max-w-3xl mx-auto mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                <AccordionContent>
                  <p>{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600">
            ご質問が解決しない場合は、
            <a href="/contact" className="text-primary hover:underline">
              お問い合わせフォーム
            </a>
            からお気軽にご連絡ください。
          </p>
        </div>
      </Container>
    </div>
  );
}