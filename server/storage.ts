import { 
  users, 
  type User, 
  type InsertUser,
  contactSubmissions,
  type ContactSubmission,
  type InsertContactSubmission,
  newsArticles,
  type NewsArticle,
  type InsertNewsArticle
} from "@shared/schema";

// Modify the interface with CRUD methods
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact submission methods
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  getContactSubmission(id: number): Promise<ContactSubmission | undefined>;
  
  // News article methods
  createNewsArticle(article: InsertNewsArticle): Promise<NewsArticle>;
  getNewsArticles(): Promise<NewsArticle[]>;
  getPublishedNewsArticles(): Promise<NewsArticle[]>;
  getNewsArticle(id: number): Promise<NewsArticle | undefined>;
  updateNewsArticle(id: number, article: Partial<InsertNewsArticle>): Promise<NewsArticle | undefined>;
  deleteNewsArticle(id: number): Promise<boolean>;
  
  // Job application methods
  createJobApplication(application: InsertJobApplication): Promise<JobApplication>;
  getJobApplications(): Promise<JobApplication[]>;
  getJobApplication(id: number): Promise<JobApplication | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private newsArticles: Map<number, NewsArticle>;
  private userCurrentId: number;
  private contactSubmissionCurrentId: number;
  private newsArticleCurrentId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.newsArticles = new Map();
    this.userCurrentId = 1;
    this.contactSubmissionCurrentId = 1;
    this.newsArticleCurrentId = 1;
    
    // Initialize with sample news articles
    this.initializeNewsArticles();
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Contact submission methods
  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.contactSubmissionCurrentId++;
    const createdAt = new Date();
    
    const submission: ContactSubmission = {
      ...insertSubmission,
      phone: insertSubmission.phone || null,
      id,
      createdAt,
    };
    
    this.contactSubmissions.set(id, submission);
    console.log(`New contact submission received: ID ${id} from ${submission.name} (${submission.email})`);
    
    return submission;
  }
  
  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
  
  async getContactSubmission(id: number): Promise<ContactSubmission | undefined> {
    return this.contactSubmissions.get(id);
  }
  
  // News article methods
  async createNewsArticle(insertArticle: InsertNewsArticle): Promise<NewsArticle> {
    const id = this.newsArticleCurrentId++;
    const now = new Date();
    
    const article: NewsArticle = {
      ...insertArticle,
      imageUrl: insertArticle.imageUrl || null,
      contentImages: insertArticle.contentImages ?? null,
      id,
      createdAt: now,
      updatedAt: now,
      publishedAt: insertArticle.publishedAt || now,
      published: insertArticle.published ?? true,
    };
    
    this.newsArticles.set(id, article);
    return article;
  }
  
  async getNewsArticles(): Promise<NewsArticle[]> {
    return Array.from(this.newsArticles.values()).sort(
      (a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()
    );
  }
  
  async getPublishedNewsArticles(): Promise<NewsArticle[]> {
    return Array.from(this.newsArticles.values())
      .filter(article => article.published)
      .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  }
  
  async getNewsArticle(id: number): Promise<NewsArticle | undefined> {
    return this.newsArticles.get(id);
  }
  
  async updateNewsArticle(id: number, updateData: Partial<InsertNewsArticle>): Promise<NewsArticle | undefined> {
    const existingArticle = this.newsArticles.get(id);
    if (!existingArticle) return undefined;
    
    const updatedArticle: NewsArticle = {
      ...existingArticle,
      ...updateData,
      updatedAt: new Date(),
    };
    
    this.newsArticles.set(id, updatedArticle);
    return updatedArticle;
  }
  
  async deleteNewsArticle(id: number): Promise<boolean> {
    return this.newsArticles.delete(id);
  }
  
  private initializeNewsArticles() {
    const sampleArticles = [
      {
        title: "循環型自動車部品事業の新展開について",
        content: "パーツワンは、循環型経済の実現に向けて自動車部品リサイクル事業を大幅に拡張することを発表いたします。従来の部品回収から、AI技術を活用した品質評価システムまで、包括的なソリューションを提供してまいります。これまでの経験とノウハウを活かし、自動車部品の価値を最大化する新しいアプローチを導入します。廃車から取り出された部品一つひとつを丁寧に検査し、品質基準をクリアしたもののみを市場に流通させることで、お客様に安心してご利用いただける高品質なリサイクル部品を提供いたします。",
        excerpt: "循環型経済実現に向けた自動車部品リサイクル事業の拡張を発表",
        category: "事業展開",
        imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
        published: true,
        publishedAt: new Date("2024-01-15"),
      },
      {
        title: "Uzoneアプリ正式リリースのお知らせ",
        content: "当社が開発したリサイクル自動車部品流通プラットフォーム「Uzone」が正式にリリースされました。部品業者様と修理工場様を効率的に結ぶデジタルプラットフォームとして、業界の DX 推進に貢献してまいります。\n\nこのアプリは、インターンシップ期間中に生まれたアイデアから誕生したもので、現場のニーズを深く理解した実用的な機能を搭載しています。\n\nリアルタイムでの在庫確認、品質情報の詳細表示、簡単な発注システムなど、日々の業務を効率化する機能が満載です。",
        excerpt: "リサイクル自動車部品流通プラットフォーム「Uzone」正式リリース",
        category: "プロダクト",
        imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
        contentImages: [
          "https://images.unsplash.com/photo-1560472355-536de3962603?w=800&h=500&fit=crop",
          "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=700&h=450&fit=crop",
          "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=750&h=480&fit=crop"
        ],
        published: true,
        publishedAt: new Date("2024-02-20"),
      },
      {
        title: "環境省との協力による静脈産業研究プロジェクト開始",
        content: "パーツワンは環境省と連携し、静脈産業の発展と循環型社会の実現に向けた研究プロジェクトを開始いたします。日本の「もったいない」文化を世界に発信する取り組みの一環として推進してまいります。この研究では、自動車リサイクル業界における最新技術の導入効果や環境負荷削減の定量的評価を行い、持続可能な社会の実現に向けた具体的な施策を検討します。国際的な環境基準に対応した循環型ビジネスモデルの構築を目指し、日本発の革新的なソリューションを世界に展開していく予定です。",
        excerpt: "環境省と連携した静脈産業研究プロジェクトを開始",
        category: "社会貢献",
        imageUrl: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=250&fit=crop",
        published: true,
        publishedAt: new Date("2024-03-10"),
      },
      {
        title: "自動車部品の3Dスキャン技術導入について",
        content: "パーツワンでは、最新の3Dスキャン技術を導入し、自動車部品の精密な形状測定とデジタル化を開始いたします。この技術により、部品の損傷度合いをより正確に評価できるようになり、品質管理の精度が大幅に向上します。また、3Dデータを活用することで、お客様により詳細な商品情報を提供できるほか、将来的には3Dプリンティング技術との連携も視野に入れています。デジタル技術の力で、循環型経済をさらに推進してまいります。",
        excerpt: "3Dスキャン技術導入により部品品質管理を高度化",
        category: "技術革新",
        imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
        published: true,
        publishedAt: new Date("2024-04-05"),
      },
      {
        title: "地域パートナー企業との連携強化を発表",
        content: "パーツワンは、全国の地域パートナー企業との連携をさらに強化し、日本全国での循環型自動車部品ネットワークの構築を進めることを発表いたします。地域密着型の事業展開により、それぞれの地域特性を活かした効率的な部品回収・流通システムを確立します。地域の雇用創出にも貢献しながら、全国どこでも高品質なリサイクル部品をお届けできる体制を整備してまいります。地域と共に成長する持続可能なビジネスモデルを追求します。",
        excerpt: "全国の地域パートナー企業との連携強化で循環型ネットワークを拡大",
        category: "事業展開",
        imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
        published: true,
        publishedAt: new Date("2024-04-22"),
      },
      {
        title: "若手エンジニア向けインターンシップ制度を拡充",
        content: "パーツワンでは、次世代のイノベーションを担う若手エンジニアの育成に力を入れており、インターンシップ制度をさらに拡充することを発表いたします。実際のプロジェクトに参加できる実践的なプログラムを通じて、循環型経済やデジタル技術への理解を深めていただきます。過去のインターンシップでは、Uzoneアプリのアイデアが生まれるなど、若いアイデアから革新的なサービスが誕生しています。今後も若い才能と共に、業界の未来を切り拓いてまいります。",
        excerpt: "次世代人材育成のためインターンシップ制度を拡充",
        category: "人材育成",
        imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
        published: true,
        publishedAt: new Date("2024-05-10"),
      }
    ];
    
    sampleArticles.forEach(article => {
      this.createNewsArticle(article);
    });
  }
}

export const storage = new MemStorage();
