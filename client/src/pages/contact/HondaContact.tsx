import { useEffect, useState } from "react";
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
import { Link } from "wouter";
import HondaActionCard from "@/components/contact/HondaActionCard";
import hondaImage from "@assets/honda_image_1.jpg";
import phoneImage from "@assets/for_general_1.png";
import pdfImage from "@assets/IMG_1065.jpg";
import mediaImage from "@assets/IMG_4862.jpg";
const specOptions = [
  "AT",
  "CVT",
  "MT",
  "2WD",
  "4WD",
  "VSA有",
  "ABS有",
  "ABS無",
];

const hondaContactSchema = z.object({
  factoryName: z.string().min(1, "貴工場名を入力してください"),
  address: z.string().min(1, "住所を入力してください"),
  tel: z.string().min(1, "TELを入力してください"),
  fax: z.string().optional(),
  person: z.string().min(1, "ご担当者名を入力してください"),
  email: z
    .string()
    .min(1, "e-mailを入力してください")
    .email("正しいメールアドレスを入力してください"),
  maker: z.string().min(1, "メーカー(通称名)を入力してください"),
  firstYear: z.string().min(1, "初年度登録を入力してください"),
  vin: z.string().min(1, "車台番号を入力してください"),
  model: z.string().min(1, "型式を入力してください"),
  engine: z.string().min(1, "原動機/ターボを入力してください"),
  modelCode: z.string().min(1, "型式指定を入力してください"),
  classCode: z.string().min(1, "類別区分を入力してください"),
  colorCode: z.string().min(1, "カラー番号を入力してください"),
  specs: z.array(z.string()).min(1, "仕様を1つ以上選択してください"),
  partName: z.string().min(1, "部品名を入力してください"),
  partDetail: z.string().min(1, "部品名の詳細を入力してください"),
  agree: z.boolean().refine((val) => val === true, {
    message: "個人情報保護方針に同意してください",
  }),
});

type HondaContactFormValues = z.infer<typeof hondaContactSchema>;

const HondaContact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.title = "ホンダディーラー様向けお問い合わせ | Partsone";

    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "ホンダディーラー様向けの専用サービスに関するお問い合わせページです。";
    document.head.appendChild(metaDescription);

    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  const form = useForm<HondaContactFormValues>({
    resolver: zodResolver(hondaContactSchema),
    defaultValues: {
      factoryName: "",
      address: "",
      tel: "",
      fax: "",
      person: "",
      email: "",
      maker: "",
      firstYear: "",
      vin: "",
      model: "",
      engine: "",
      modelCode: "",
      classCode: "",
      colorCode: "",
      specs: [],
      partName: "",
      partDetail: "",
      agree: false as boolean,
    },
  });

  const onSubmit = async (data: HondaContactFormValues) => {
    setSubmitting(true);
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
        description:
          "お問い合わせを受け付けました。担当者より折り返しご連絡いたします。",
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
    } finally {
      setSubmitting(false);
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
              pdfUrl="/attached_assets/contact_1751203397110.pdf"
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
                  name="factoryName"
                  render={({ field }: { field: any }) => (
                    <FormItem>
                      <FormLabel>
                        貴工場名 <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="○○自動車工場" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }: { field: any }) => (
                    <FormItem>
                      <FormLabel>
                        住所 <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="東京都○○区○○1-2-3" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="tel"
                  render={({ field }: { field: any }) => (
                    <FormItem>
                      <FormLabel>
                        TEL <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="03-1234-5678" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="fax"
                  render={({ field }: { field: any }) => (
                    <FormItem>
                      <FormLabel>FAX</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="03-1234-5679" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="person"
                  render={({ field }: { field: any }) => (
                    <FormItem>
                      <FormLabel>
                        ご担当者名 <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="山田 太郎" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }: { field: any }) => (
                    <FormItem>
                      <FormLabel>
                        e-mail <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="example@sample.com" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="maker"
                  render={({ field }: { field: any }) => (
                    <FormItem>
                      <FormLabel>
                        メーカー(通称名) <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="ホンダ" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="firstYear"
                  render={({ field }: { field: any }) => (
                    <FormItem>
                      <FormLabel>
                        初年度登録 <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="2020年4月" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="vin"
                  render={({ field }: { field: any }) => (
                    <FormItem>
                      <FormLabel>
                        車台番号 <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="XXXX-XXXXXXX" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="model"
                  render={({ field }: { field: any }) => (
                    <FormItem>
                      <FormLabel>
                        型式 <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="DBA-XXXX" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="engine"
                  render={({ field }: { field: any }) => (
                    <FormItem>
                      <FormLabel>
                        原動機/ターボ <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="L15B/ターボ" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="modelCode"
                  render={({ field }: { field: any }) => (
                    <FormItem>
                      <FormLabel>
                        型式指定 <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="12345" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="classCode"
                  render={({ field }: { field: any }) => (
                    <FormItem>
                      <FormLabel>
                        類別区分 <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="6789" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="colorCode"
                  render={({ field }: { field: any }) => (
                    <FormItem>
                      <FormLabel>
                        カラー番号 <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="NH-123P" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="specs"
                  render={({ field }: { field: any }) => (
                    <FormItem>
                      <FormLabel>
                        仕様 <span className="text-red-500">*</span>
                      </FormLabel>
                      <div className="flex flex-wrap gap-4">
                        {specOptions.map((option) => (
                          <label
                            key={option}
                            className="flex items-center space-x-2"
                          >
                            <input
                              type="checkbox"
                              value={option}
                              checked={field.value?.includes(option)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  field.onChange([...(field.value || []), option]);
                                } else {
                                  field.onChange(
                                    (field.value || []).filter(
                                      (v: string) => v !== option
                                    )
                                  );
                                }
                              }}
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="partName"
                  render={({ field }: { field: any }) => (
                    <FormItem>
                      <FormLabel>
                        部品名 <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="部品名"
                          className="min-h-[80px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="partDetail"
                  render={({ field }: { field: any }) => (
                    <FormItem>
                      <FormLabel>
                        部品名の詳細 <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="部品名の詳細"
                          className="min-h-[80px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="agree"
                  render={({ field }: { field: any }) => (
                    <FormItem>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="agree"
                          checked={field.value}
                          onChange={(e) => field.onChange(e.target.checked)}
                          className="accent-red-500"
                        />
                        <label
                          htmlFor="agree"
                          className="select-none"
                        >
                          <Link
                            href="/support/privacy-policy"
                            className="text-red-500 underline cursor-pointer"
                          >
                            個人情報保護方針
                          </Link>
                          の内容に同意する
                        </label>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={submitting || !form.watch("agree")}
                  >
                    {submitting ? (
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