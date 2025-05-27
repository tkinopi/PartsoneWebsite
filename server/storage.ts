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
        content: "パーツワンは、循環型経済の実現に向けて自動車部品リサイクル事業を大幅に拡張することを発表いたします。従来の部品回収から、AI技術を活用した品質評価システムまで、包括的なソリューションを提供してまいります。",
        excerpt: "循環型経済実現に向けた自動車部品リサイクル事業の拡張を発表",
        category: "事業展開",
        imageUrl: null,
        published: true,
        publishedAt: new Date("2024-01-15"),
      },
      {
        title: "Uzoneアプリ正式リリースのお知らせ",
        content: "当社が開発したリサイクル自動車部品流通プラットフォーム「Uzone」が正式にリリースされました。部品業者様と修理工場様を効率的に結ぶデジタルプラットフォームとして、業界の DX 推進に貢献してまいります。",
        excerpt: "リサイクル自動車部品流通プラットフォーム「Uzone」正式リリース",
        category: "プロダクト",
        imageUrl: null,
        published: true,
        publishedAt: new Date("2024-02-20"),
      },
      {
        title: "環境省との協力による静脈産業研究プロジェクト開始",
        content: "パーツワンは環境省と連携し、静脈産業の発展と循環型社会の実現に向けた研究プロジェクトを開始いたします。日本の「もったいない」文化を世界に発信する取り組みの一環として推進してまいります。",
        excerpt: "環境省と連携した静脈産業研究プロジェクトを開始",
        category: "社会貢献",
        imageUrl: null,
        published: true,
        publishedAt: new Date("2024-03-10"),
      }
    ];
    
    sampleArticles.forEach(article => {
      this.createNewsArticle(article);
    });
  }
}

export const storage = new MemStorage();
