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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";

const generalContactSchema = z.object({
  name: z.string().min(1, "お名前を入力してください"),
  email: z
    .string()
    .min(1, "メールアドレスを入力してください")
    .email("正しいメールアドレスを入力してください"),
  company: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string().min(1, "お問い合わせ件名を選択してください"),
  message: z.string().min(1, "お問い合わせ内容を入力してください"),
});

type GeneralContactFormValues = z.infer<typeof generalContactSchema>;

const GeneralContact = () => {
  const { toast } = useToast();

  useEffect(() => {
    document.title = "総合お問い合わせ | Partsone";

    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = "Partsoneへの総合的なお問い合わせページです。サービス全般についてお気軽にお問い合わせください。";
    document.head.appendChild(metaDescription);

    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  const form = useForm<GeneralContactFormValues>({
    resolver: zodResolver(generalContactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: GeneralContactFormValues) => {
    try {
      await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
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
            title="総合お問い合わせ"
            subtitle="Uzoneやその他のサービスについて、お気軽にお問い合わせください"
            center
          />
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
                        お名前 <span className="text-red-500">*</span>
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
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        メールアドレス <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="example@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>会社名</FormLabel>
                      <FormControl>
                        <Input placeholder="株式会社〇〇〇〇" {...field} />
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
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        お問い合わせ件名 <span className="text-red-500">*</span>
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="お問い合わせ件名を選択してください" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Uzoneについて">Uzoneについて</SelectItem>
                          <SelectItem value="サービスについて">サービスについて</SelectItem>
                          <SelectItem value="お見積もり依頼">お見積もり依頼</SelectItem>
                          <SelectItem value="事業提携について">事業提携について</SelectItem>
                          <SelectItem value="その他">その他</SelectItem>
                        </SelectContent>
                      </Select>
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
                          placeholder="お問い合わせ内容をご記入ください"
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

          {/* 問い合わせ先情報 */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                お電話でのお問い合わせ
              </h3>
              <p className="text-lg font-bold">03-3463-2065</p>
              <p className="text-sm text-gray-500">
                受付時間: 平日 9:00〜18:00
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                メールでのお問い合わせ
              </h3>
              <p className="text-lg font-bold">info@partsone.co.jp</p>
              <p className="text-sm text-gray-500">24時間受付</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GeneralContact;