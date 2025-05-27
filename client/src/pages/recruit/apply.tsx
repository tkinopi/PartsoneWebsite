import { useState } from "react";
import { SectionTitle } from "@/components/ui/section-title";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { sendApplicationEmail } from "@/lib/mailto";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "wouter";

const applicationSchema = z.object({
  position: z.string().min(1, { message: "応募ポジションを選択してください" }),
  employmentType: z.string().min(1, { message: "雇用形態を選択してください" }),
  firstName: z.string().min(1, { message: "名を入力してください" }),
  lastName: z.string().min(1, { message: "姓を入力してください" }),
  email: z.string().email({ message: "有効なメールアドレスを入力してください" }),
  phone: z.string().min(1, { message: "電話番号を入力してください" }),
  address: z.string().min(1, { message: "住所を入力してください" }),
  education: z.string().min(1, { message: "最終学歴を入力してください" }),
  currentCompany: z.string().optional(),
  experience: z.string().min(1, { message: "職務経験を入力してください" }),
  skills: z.string().min(1, { message: "スキルを入力してください" }),
  motivation: z.string().min(1, { message: "志望動機を入力してください" }),
  resumeFile: z.string().optional(),
  coverLetterFile: z.string().optional(),
  portfolioUrl: z.string().url().optional().or(z.literal("")),
  referralSource: z.string().optional(),
  privacyPolicy: z.literal(true, {
    errorMap: () => ({ message: "プライバシーポリシーに同意してください" }),
  }),
});

type ApplicationValues = z.infer<typeof applicationSchema>;

export default function ApplyPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  const form = useForm<ApplicationValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      position: "",
      employmentType: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      education: "",
      currentCompany: "",
      experience: "",
      skills: "",
      motivation: "",
      resumeFile: "",
      coverLetterFile: "",
      portfolioUrl: "",
      referralSource: "",
      privacyPolicy: true,
    },
  });

  async function onSubmit(data: ApplicationValues) {
    setIsSubmitting(true);
    try {
      // 応募データをメール形式でまとめる
      const applicationData = {
        name: `${data.lastName} ${data.firstName}`,
        email: data.email,
        phone: data.phone,
        position: data.position,
        message: `
【応募情報】
ポジション: ${data.position}
雇用形態: ${data.employmentType}

【個人情報】
氏名: ${data.lastName} ${data.firstName}
メールアドレス: ${data.email}
電話番号: ${data.phone}
住所: ${data.address}

【学歴・職歴】
最終学歴: ${data.education}
現在の会社: ${data.currentCompany || '未記入'}

【職務経験】
${data.experience}

【スキルセット】
${data.skills}

【志望動機】
${data.motivation}

【ポートフォリオURL】
${data.portfolioUrl || '未記入'}

【履歴書】
${data.resumeFile || '未添付'}

【職務経歴書】
${data.coverLetterFile || '未添付'}

【応募のきっかけ】
${data.referralSource || '未選択'}
        `
      };

      // メールクライアントを開いて応募内容を送信
      sendApplicationEmail(applicationData);
      
      // 送信成功をシミュレート
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "応募が完了しました",
        description: "お申し込みいただきありがとうございます。確認メールをお送りしました。",
      });
      
      setApplicationSubmitted(true);
    } catch (error) {
      toast({
        title: "エラーが発生しました",
        description: "応募の送信中にエラーが発生しました。後ほど再度お試しください。",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (applicationSubmitted) {
    return (
      <div className="pt-24 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center py-12">
            <div className="bg-green-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">応募が完了しました</h2>
            <p className="text-xl mb-8">
              Partsoneへの応募をいただき、ありがとうございます。<br />
              ご入力いただいたメールアドレス宛に確認メールをお送りしました。
            </p>
            <p className="mb-8">
              応募内容を確認の上、1週間以内に採用担当者よりご連絡いたします。<br />
              ご質問がある場合は、<a href="mailto:recruit@partsone.com" className="text-primary underline">recruit@partsone.com</a> までお問い合わせください。
            </p>
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
          <SectionTitle 
            title="採用応募フォーム" 
            subtitle="Partsoneで一緒に働きませんか？" 
            center={true}
          />
          
          <div className="bg-white p-8 rounded-lg shadow-md mt-12">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold border-b pb-2">応募情報</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="position"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>応募ポジション <span className="text-red-500">*</span></FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="応募ポジションを選択してください" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="フロントエンドエンジニア">フロントエンドエンジニア</SelectItem>
                              <SelectItem value="バックエンドエンジニア">バックエンドエンジニア</SelectItem>
                              <SelectItem value="フルスタックエンジニア">フルスタックエンジニア</SelectItem>
                              <SelectItem value="インフラエンジニア">インフラエンジニア</SelectItem>
                              <SelectItem value="QAエンジニア">QAエンジニア</SelectItem>
                              <SelectItem value="セールスマネージャー">セールスマネージャー</SelectItem>
                              <SelectItem value="マーケティングマネージャー">マーケティングマネージャー</SelectItem>
                              <SelectItem value="カスタマーサクセスマネージャー">カスタマーサクセスマネージャー</SelectItem>
                              <SelectItem value="ビジネスアナリスト">ビジネスアナリスト</SelectItem>
                              <SelectItem value="インターンシップ">インターンシップ</SelectItem>
                              <SelectItem value="新卒採用">新卒採用</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="employmentType"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>雇用形態 <span className="text-red-500">*</span></FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="fulltime" id="fulltime" />
                                <Label htmlFor="fulltime">正社員</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="contract" id="contract" />
                                <Label htmlFor="contract">契約社員</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="intern" id="intern" />
                                <Label htmlFor="intern">インターンシップ</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="newgrad" id="newgrad" />
                                <Label htmlFor="newgrad">新卒採用</Label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-xl font-bold border-b pb-2">個人情報</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>姓 <span className="text-red-500">*</span></FormLabel>
                          <FormControl>
                            <Input placeholder="例: 山田" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>名 <span className="text-red-500">*</span></FormLabel>
                          <FormControl>
                            <Input placeholder="例: 太郎" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>メールアドレス <span className="text-red-500">*</span></FormLabel>
                          <FormControl>
                            <Input placeholder="example@email.com" type="email" {...field} />
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
                          <FormLabel>電話番号 <span className="text-red-500">*</span></FormLabel>
                          <FormControl>
                            <Input placeholder="例: 09012345678" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>住所 <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                          <Input placeholder="例: 東京都渋谷区〇〇1-2-3" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-xl font-bold border-b pb-2">職歴・学歴</h3>
                  
                  <FormField
                    control={form.control}
                    name="education"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>最終学歴 <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                          <Input placeholder="例: 〇〇大学 △△学部 □□学科 20XX年卒業" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="currentCompany"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>現在の会社名（任意）</FormLabel>
                        <FormControl>
                          <Input placeholder="例: 株式会社〇〇" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>職務経験 <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="これまでの職務経験について記入してください。プロジェクト、役割、成果など" 
                            className="min-h-[150px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="skills"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>スキルセット <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="保有するスキル、技術、資格などを記入してください" 
                            className="min-h-[100px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-xl font-bold border-b pb-2">志望動機</h3>
                  
                  <FormField
                    control={form.control}
                    name="motivation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>志望動機 <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Partsoneを志望する理由、キャリアプランなどについて記入してください" 
                            className="min-h-[200px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-xl font-bold border-b pb-2">添付書類・リンク</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="resumeFile"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>履歴書（任意）</FormLabel>
                          <FormControl>
                            <Input type="file" {...field} value={undefined} onChange={(e) => {
                              field.onChange(e.target.files ? e.target.files[0].name : "");
                            }} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="coverLetterFile"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>職務経歴書（任意）</FormLabel>
                          <FormControl>
                            <Input type="file" {...field} value={undefined} onChange={(e) => {
                              field.onChange(e.target.files ? e.target.files[0].name : "");
                            }} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="portfolioUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ポートフォリオ・GitHubなどのURL（任意）</FormLabel>
                        <FormControl>
                          <Input placeholder="例: https://github.com/username" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="referralSource"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>応募のきっかけ（任意）</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="どこで当社を知りましたか？" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="company-website">会社のウェブサイト</SelectItem>
                            <SelectItem value="job-board">求人サイト</SelectItem>
                            <SelectItem value="friend-referral">知人の紹介</SelectItem>
                            <SelectItem value="social-media">SNS</SelectItem>
                            <SelectItem value="event">イベント・セミナー</SelectItem>
                            <SelectItem value="other">その他</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="privacyPolicy"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          <span>個人情報の取り扱いについて </span>
                          <span className="text-red-500">*</span>
                        </FormLabel>
                        <p className="text-sm text-muted-foreground">
                          入力いただいた個人情報は、採用選考の目的のみに使用し、適切に管理いたします。詳細は
                          <a href="#" className="text-primary hover:underline"> プライバシーポリシー </a>
                          をご確認ください。
                        </p>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex justify-center pt-6">
                  <Button type="submit" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "送信中..." : "応募する"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
}