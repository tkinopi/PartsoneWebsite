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
import { ArrowRight, Loader2 } from "lucide-react";

const recruitmentContactSchema = z.object({
  name: z.string().min(1, "お名前を入力してください"),
  email: z
    .string()
    .min(1, "メールアドレスを入力してください")
    .email("正しいメールアドレスを入力してください"),
  phone: z.string().optional(),
  position: z.string().min(1, "応募ポジションを選択してください"),
  experience: z.string().optional(),
  message: z.string().min(1, "志望動機・自己PRを入力してください"),
});

type RecruitmentContactFormValues = z.infer<typeof recruitmentContactSchema>;

const RecruitmentContact = () => {
  const { toast } = useToast();

  useEffect(() => {
    document.title = "採用お問い合わせ | Partsone";

    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = "Partsoneの採用情報、求人に関するお問い合わせページです。";
    document.head.appendChild(metaDescription);

    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  const form = useForm<RecruitmentContactFormValues>({
    resolver: zodResolver(recruitmentContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      message: "",
    },
  });

  const onSubmit = async (data: RecruitmentContactFormValues) => {
    try {
      await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          ...data,
          subject: "採用について",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast({
        title: "送信完了",
        description: "応募を受け付けました。人事担当者より折り返しご連絡いたします。",
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
            title="採用お問い合わせ"
            subtitle="新卒・中途採用、インターンシップについてお気軽にお問い合わせください"
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
                        <Input placeholder="佐藤 次郎" {...field} />
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
                  name="position"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        応募ポジション <span className="text-red-500">*</span>
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="応募ポジションを選択してください" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="新卒採用">新卒採用</SelectItem>
                          <SelectItem value="中途採用（エンジニア）">中途採用（エンジニア）</SelectItem>
                          <SelectItem value="中途採用（営業）">中途採用（営業）</SelectItem>
                          <SelectItem value="中途採用（マネジメント）">中途採用（マネジメント）</SelectItem>
                          <SelectItem value="長期インターンシップ">長期インターンシップ</SelectItem>
                          <SelectItem value="その他">その他</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>経験・スキル</FormLabel>
                      <FormControl>
                        <Input placeholder="関連する経験やスキルがあればご記入ください" {...field} />
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
                        志望動機・自己PR <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="志望動機や自己PRをご記入ください"
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
                        応募する
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

export default RecruitmentContact;