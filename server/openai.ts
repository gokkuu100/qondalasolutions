import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateChatResponse(message: string, conversationHistory: Array<{role: 'user' | 'assistant', content: string}>): Promise<string> {
  try {
    const systemPrompt = `You are Qondala Assistant, a helpful AI assistant for Qondala - a technology company that offers comprehensive enterprise solutions combining software, hardware, and AI-driven automation.

About Qondala:
- We serve businesses across manufacturing, transportation, security, and enterprise automation
- Our solutions include: Software Development, Hardware Solutions, AI-Driven Solutions, Cloud Platforms, Digital Transformation
- Industries we serve: Manufacturing (smart factory, predictive maintenance), Transportation (fleet management, route optimization), Security (cybersecurity, surveillance), Enterprise (ERP, system integration), Business Automation (workflow automation, process optimization)
- We have 500+ enterprise clients, 1,200+ projects delivered, serve 25+ countries, with 99.9% system uptime

Your role:
- Help visitors understand Qondala's services and solutions
- Answer questions about our technology offerings
- Provide information about industries we serve
- Guide users toward contacting our team for specific needs
- Be professional, knowledgeable, and helpful
- Keep responses concise but informative
- If asked about pricing or specific implementations, encourage users to contact our team for a personalized consultation

Always maintain a professional, corporate tone while being friendly and helpful.`;

    const messages = [
      { role: "system" as const, content: systemPrompt },
      ...conversationHistory,
      { role: "user" as const, content: message }
    ];

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages,
      max_tokens: 500,
      temperature: 0.7,
    });

    return response.choices[0].message.content || "I apologize, but I'm having trouble processing your request right now. Please try again or contact our support team directly.";
  } catch (error) {
    console.error("OpenAI API error:", error);
    return "I'm currently experiencing technical difficulties. Please contact our support team directly for immediate assistance at contact@qondala.com or +1 (555) 123-4567.";
  }
}