import { useEffect } from "react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Loader2 } from "lucide-react";
import HondaActionCard from "@/components/contact/HondaActionCard";
import hondaImage from "@assets/honda_image_1.jpg";
import phoneImage from "@assets/IMG_1059.jpg";
import pdfImage from "@assets/IMG_1065.jpg";
import mediaImage from "@assets/IMG_4862.jpg";

const hondaContactSchema = z.object({
  name: z.string().min(1, "お名前を入力してください"),
  email: z
    .string()
    .min(1, "メールアドレスを入力してください")
    .email("正しいメールアドレスを入力してください"),
  dealerName: z.string().min(1, "ディーラー名を入力してください"),
  phone: z.string().optional(),
  message: z.string().min(1, "お問い合わせ内容を入力してください"),
});

type HondaContactFormValues = z.infer<typeof hondaContactSchema>;

const HondaContact = () => {
  const { toast } = useToast();

  useEffect(() => {
    document.title = "ホンダディーラー様向けお問い合わせ | Partsone";

    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = "ホンダディーラー様向けの専用サービスに関するお問い合わせページです。";
    document.head.appendChild(metaDescription);

    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  const form = useForm<HondaContactFormValues>({
    resolver: zodResolver(hondaContactSchema),
    defaultValues: {
      name: "",
      email: "",
      dealerName: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: HondaContactFormValues) => {
    try {
      await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          ...data,
          subject: "ホンダディーラー向けサービス",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast({
        title: "送信完了",
        description: "お問い合わせを受け付けました。担当者より折り返しご連絡いたします。",
        duration: 5000,
      });

      form.reset();
    } catch (error) {
      toast({
        title: "エラーが発生しました",
        description: "送信に失敗しました。時間をおいて再度お試しください。",
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  return (
    <div className="pt-24 pb-16">
      <Container>
        <div className="max-w-4xl mx-auto mb-12">
          <SectionTitle
            title="ホンダディーラー様向けお問い合わせ"
            subtitle="ホンダパーツドットショップやディーラー様専用サービスについてお気軽にお問い合わせください"
            center
          />
        </div>

        {/* アクションカードセクション */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <HondaActionCard
              title="お電話でのお問い合わせ"
              imageSrc={phoneImage}
              index={0}
              type="phone"
              phoneNumber="03-3463-2065"
              phoneHours="受付 9:00～18:00(平日・土曜)日曜・祝日休み"
            />
            <HondaActionCard
              title="お問い合わせ用紙はこちら"
              imageSrc={pdfImage}
              index={1}
              type="pdf"
              pdfUrl="/documents/honda-inquiry-form.pdf"
            />
            <HondaActionCard
              title="HondaParts.Shopはこちら"
              imageSrc={hondaImage}
              index={2}
              type="external"
              href="https://www.hondaparts.shop/"
            />
            <HondaActionCard
              title="HondaParts.メディアはこちら"
              imageSrc={mediaImage}
              index={3}
              type="external"
              href="https://hondaparts-media.webflow.io/"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        担当者名 <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="山田 太郎" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="dealerName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        ディーラー名 <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="○○ホンダ" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        メールアドレス <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="example@honda-dealer.co.jp" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>電話番号</FormLabel>
                      <FormControl>
                        <Input placeholder="080-0000-0000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        お問い合わせ内容 <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="ホンダパーツドットショップやサービス内容についてお聞かせください"
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        送信中...
                      </>
                    ) : (
                      <>
                        送信する
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HondaContact;