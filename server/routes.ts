import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact inquiry routes
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      res.json({ success: true, inquiry });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        message: error instanceof Error ? error.message : "Invalid data provided" 
      });
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const inquiries = await storage.getContactInquiries();
      res.json(inquiries);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contact inquiries" 
      });
    }
  });

  app.get("/api/contact/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ success: false, message: "Invalid ID provided" });
      }
      
      const inquiry = await storage.getContactInquiry(id);
      if (!inquiry) {
        return res.status(404).json({ success: false, message: "Contact inquiry not found" });
      }
      
      res.json(inquiry);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contact inquiry" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
