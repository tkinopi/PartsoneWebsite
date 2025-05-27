import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertNewsArticleSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // Store the contact submission
      const submission = await storage.createContactSubmission(validatedData);
      
      // Send success response
      res.status(201).json({
        message: "お問い合わせを受け付けました。担当者が確認次第、ご連絡いたします。",
        submission
      });
    } catch (error) {
      if (error instanceof ZodError) {
        // Handle validation errors
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          message: "入力データが正しくありません。", 
          errors: validationError.details 
        });
      }
      
      // Handle other errors
      console.error("Contact form submission error:", error);
      res.status(500).json({ message: "サーバーエラーが発生しました。後ほど再度お試しください。" });
    }
  });

  // News articles endpoints
  app.get("/api/news", async (req: Request, res: Response) => {
    try {
      const articles = await storage.getPublishedNewsArticles();
      res.json(articles);
    } catch (error) {
      console.error("Failed to fetch news articles:", error);
      res.status(500).json({ message: "ニュース記事の取得に失敗しました。" });
    }
  });

  app.get("/api/news/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "無効な記事IDです。" });
      }

      const article = await storage.getNewsArticle(id);
      if (!article) {
        return res.status(404).json({ message: "記事が見つかりません。" });
      }

      res.json(article);
    } catch (error) {
      console.error("Failed to fetch news article:", error);
      res.status(500).json({ message: "ニュース記事の取得に失敗しました。" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
