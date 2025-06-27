import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema, insertChatMessageSchema } from "@shared/schema";
import { generateChatResponse } from "./openai";
import { v4 as uuidv4 } from "uuid";

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

  // Chat AI routes
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, sessionId } = req.body;
      
      if (!message || typeof message !== 'string') {
        return res.status(400).json({ 
          success: false, 
          message: "Message is required" 
        });
      }

      const chatSessionId = sessionId || uuidv4();
      
      // Get conversation history
      const conversationHistory = await storage.getChatMessages(chatSessionId);
      const historyForAI = conversationHistory.map(msg => ({
        role: msg.isUser ? 'user' as const : 'assistant' as const,
        content: msg.message
      }));

      // Store user message
      await storage.createChatMessage({
        sessionId: chatSessionId,
        message,
        isUser: true,
      });

      // Generate AI response
      const aiResponse = await generateChatResponse(message, historyForAI);

      // Store AI response
      await storage.createChatMessage({
        sessionId: chatSessionId,
        message: aiResponse,
        isUser: false,
      });

      res.json({ 
        success: true, 
        response: aiResponse,
        sessionId: chatSessionId
      });
    } catch (error) {
      console.error("Chat API error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to process chat message" 
      });
    }
  });

  app.get("/api/chat/:sessionId", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const messages = await storage.getChatMessages(sessionId);
      res.json(messages);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch chat history" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
