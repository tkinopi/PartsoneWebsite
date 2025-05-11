import { useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faMapMarkerAlt, 
  faPhoneAlt, 
  faEnvelope, 
  faClock 
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { SocialIcons } from "@/components/ui/social-icons";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(1, { message: "名前は必須です" }),
  company: z.string().min(1, { message: "会社名は必須です" }),
  email: z.string().email({ message: "有効なメールアドレスを入力してください" }),
  phone: z.string().optional(),
  inquiryType: z.string().min(1, { message: "お問い合わせ内容を選択してください" }),
  message: z.string().min(10, { message: "10文字以上入力してください" }),
  privacyPolicy: z.literal(true, {
    errorMap: () => ({ message: "プライバシーポリシーに同意してください" }),
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      inquiryType: "",
      message: "",
      privacyPolicy: false,
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "送信完了",
        description: "お問い合わせを受け付けました。担当者が確認次第、ご連絡いたします。",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "エラー",
        description: "送信に失敗しました。後ほど再度お試しください。",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const contactInfo = [
    {
      icon: faMapMarkerAlt,
      title: "本社",
      content: [
        "〒100-0001",
        "東京都千代田区千代田1-1-1",
        "パーツワンビル",
      ],
    },
    {
      icon: faPhoneAlt,
      title: "電話番号",
      content: ["03-1234-5678"],
    },
    {
      icon: faEnvelope,
      title: "メールアドレス",
      content: ["info@partsone.com"],
    },
    {
      icon: faClock,
      title: "営業時間",
      content: ["平日 9:00-18:00", "土日祝 休業"],
    },
  ];

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

  return (
    <section id="contact" className="py-20 bg-white">
      <Container>
        <SectionTitle 
          title="お問い合わせ" 
          subtitle="ご質問やお見積りのご依頼など、お気軽にお問い合わせください。専門スタッフがサポートいたします。" 
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <motion.div variants={itemVariants}>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>お名前 <span className="text-primary">*</span></FormLabel>
                        <FormControl>
                          <Input placeholder="山田 太郎" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>会社名 <span className="text-primary">*</span></FormLabel>
                        <FormControl>
                          <Input placeholder="株式会社サンプル" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>メールアドレス <span className="text-primary">*</span></FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="example@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>電話番号</FormLabel>
                        <FormControl>
                          <Input placeholder="03-1234-5678" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <FormField
                    control={form.control}
                    name="inquiryType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>お問い合わせ内容 <span className="text-primary">*</span></FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="選択してください" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="service_inquiry">サービスについて</SelectItem>
                            <SelectItem value="price_inquiry">お見積り依頼</SelectItem>
                            <SelectItem value="support">サポートについて</SelectItem>
                            <SelectItem value="other">その他</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>お問い合わせ詳細 <span className="text-primary">*</span></FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="お問い合わせ内容をご記入ください" 
                            rows={5} 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
                
                <motion.div variants={itemVariants} className="flex items-start space-x-2">
                  <FormField
                    control={form.control}
                    name="privacyPolicy"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm text-muted-foreground">
                            <a href="#" className="text-primary hover:underline">
                              個人情報保護方針
                            </a>
                            に同意します。
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Button 
                    type="submit" 
                    className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "送信中..." : "送信する"}
                  </Button>
                </motion.div>
              </form>
            </Form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-muted rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">お問い合わせ先</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white">
                        <FontAwesomeIcon icon={info.icon} />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      <div className="text-muted-foreground">
                        {info.content.map((line, lineIndex) => (
                          <p key={lineIndex}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-4">ソーシャルメディア</h4>
                <SocialIcons className="text-muted-foreground hover:text-primary" />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
