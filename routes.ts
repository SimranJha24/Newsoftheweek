import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema, insertNewsletterSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Create inquiry endpoint
  app.post("/api/inquiries", async (req, res) => {
    try {
      const inquiry = insertInquirySchema.parse(req.body);
      const created = await storage.createInquiry(inquiry);
      res.json(created);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Get inquiries endpoint (for admin purposes)
  app.get("/api/inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getInquiries();
      res.json(inquiries);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Newsletter subscription endpoint
  app.post("/api/newsletter", async (req, res) => {
    try {
      const subscription = insertNewsletterSchema.parse(req.body);
      const created = await storage.subscribeNewsletter(subscription);
      res.json(created);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid email", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Rate card download endpoint
  app.get("/api/rate-card", async (req, res) => {
    try {
      // In a real implementation, this would serve a PDF file
      res.json({ 
        message: "Rate card download initiated", 
        downloadUrl: "/downloads/rate-card.pdf" 
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Media kit download endpoint
  app.get("/api/media-kit", async (req, res) => {
    try {
      // In a real implementation, this would serve a PDF file
      res.json({ 
        message: "Media kit download initiated", 
        downloadUrl: "/downloads/media-kit.pdf" 
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
