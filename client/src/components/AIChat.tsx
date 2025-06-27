import { useState, useRef, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MessageCircle, Send, Bot, User, X, Minimize2 } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { cn } from "@/lib/utils";

interface ChatMessage {
  id: string;
  message: string;
  isUser: boolean;
  timestamp: Date;
}

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [sessionId, setSessionId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessageMutation = useMutation({
    mutationFn: async ({ message, sessionId }: { message: string; sessionId: string | null }) => {
      const response = await apiRequest("POST", "/api/chat", { message, sessionId });
      return response.json();
    },
    onSuccess: (data) => {
      setSessionId(data.sessionId);
      // Add AI response to messages
      setMessages(prev => [...prev, {
        id: Date.now().toString() + "_ai",
        message: data.response,
        isUser: false,
        timestamp: new Date()
      }]);
    },
    onError: (error) => {
      // Add error message
      setMessages(prev => [...prev, {
        id: Date.now().toString() + "_error",
        message: "Sorry, I'm having trouble connecting right now. Please try again or contact our support team directly.",
        isUser: false,
        timestamp: new Date()
      }]);
    }
  });

  const handleSendMessage = () => {
    if (!inputMessage.trim() || sendMessageMutation.isPending) return;

    const userMessage = {
      id: Date.now().toString(),
      message: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    sendMessageMutation.mutate({ message: inputMessage, sessionId });
    setInputMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const initialMessage = {
    id: "welcome",
    message: "Hello! I'm Qondala Assistant, your AI-powered technology consultant.\n\nI can help you learn about Qondala's enterprise solutions:\n\n• Software Development & Custom Applications\n• Hardware Solutions & IT Infrastructure\n• AI-Driven Automation & Process Integration\n• Healthcare Technology & Medical Systems\n• Logistics & Supply Chain Optimization\n• Security Solutions & Risk Management\n\nWhat would you like to know about our technology services?",
    isUser: false,
    timestamp: new Date()
  };

  const displayMessages = messages.length === 0 ? [initialMessage] : messages;

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
        <div className="bg-gradient-to-r from-black to-gray-800 text-white px-4 py-2 rounded-full shadow-xl text-sm font-semibold border-2 border-white/20 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <Bot className="h-3 w-3 text-white" />
            </div>
            Qondala Assistant
          </div>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              size="lg"
              className="rounded-full w-16 h-16 bg-gradient-to-br from-black to-gray-800 hover:from-gray-800 hover:to-black shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 border-2 border-white"
            >
              <Bot className="h-8 w-8 text-white" />
              <span className="sr-only">Open Qondala Assistant</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-2xl max-w-4xl h-[700px] md:h-[800px] flex flex-col p-0 border-2 border-black">
            <DialogHeader className="p-6 pb-4 bg-gradient-to-r from-black to-gray-800 text-white rounded-t-lg border-b-2 border-white/20">
              <DialogTitle className="flex items-center text-white text-xl font-bold">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 animate-pulse">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                Qondala Assistant
              </DialogTitle>
              <p className="text-white/80 text-sm mt-2">AI-Powered Enterprise Technology Consultant | Ask me about our solutions</p>
            </DialogHeader>
            
            <div className="flex-1 flex flex-col min-h-0">
              {/* Messages Area */}
              <ScrollArea className="flex-1 p-6 bg-gradient-to-b from-gray-50 to-white">
                <div className="space-y-6">
                  {displayMessages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        "flex gap-4",
                        message.isUser ? "justify-end" : "justify-start"
                      )}
                    >
                      {!message.isUser && (
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-black to-gray-800 flex items-center justify-center flex-shrink-0 shadow-lg border-2 border-white animate-pulse">
                          <Bot className="h-6 w-6 text-white" />
                        </div>
                      )}
                      <div
                        className={cn(
                          "max-w-[75%] rounded-2xl p-4 text-base shadow-md",
                          message.isUser
                            ? "bg-gradient-to-br from-ms-blue to-ms-blue-dark text-white shadow-blue-200"
                            : "bg-white text-gray-800 border-2 border-gray-100"
                        )}
                      >
                        {!message.isUser && (
                          <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-black">
                            <Bot className="h-4 w-4" />
                            Qondala Assistant
                          </div>
                        )}
                        <div className="whitespace-pre-wrap">{message.message}</div>
                      </div>
                      {message.isUser && (
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center flex-shrink-0 shadow-lg border-2 border-white">
                          <User className="h-6 w-6 text-white" />
                        </div>
                      )}
                    </div>
                  ))}
                  {sendMessageMutation.isPending && (
                    <div className="flex gap-4 justify-start">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-black to-gray-800 flex items-center justify-center flex-shrink-0 shadow-lg border-2 border-white animate-pulse">
                        <Bot className="h-6 w-6 text-white" />
                      </div>
                      <div className="bg-white border-2 border-gray-100 rounded-2xl p-4 text-base shadow-md max-w-[75%]">
                        <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-black">
                          <Bot className="h-4 w-4" />
                          Qondala Assistant is thinking...
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-black rounded-full animate-bounce"></div>
                          <div className="w-3 h-3 bg-black rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                          <div className="w-3 h-3 bg-black rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div ref={messagesEndRef} />
              </ScrollArea>

              {/* Input Area */}
              <div className="p-6 border-t-2 border-gray-100 bg-white">
                <div className="flex gap-3">
                  <Input
                    ref={inputRef}
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask Qondala Assistant about our solutions..."
                    disabled={sendMessageMutation.isPending}
                    className="flex-1 h-12 text-base rounded-xl border-2 border-gray-200 focus:border-ms-blue"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || sendMessageMutation.isPending}
                    size="lg"
                    className="bg-gradient-to-br from-ms-blue to-ms-blue-dark hover:from-ms-blue-dark hover:to-ms-blue h-12 w-12 rounded-xl shadow-lg"
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <Bot className="h-4 w-4 text-black" />
                    Qondala Assistant • AI-powered technology consultant
                  </p>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-600 font-medium">Assistant Online</span>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}