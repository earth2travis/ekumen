"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Cross1Icon } from "@radix-ui/react-icons";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function Home() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load conversation from localStorage on mount
  useEffect(() => {
    const savedMessages = localStorage.getItem("farmaleaf-conversation");
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages);
        // Convert timestamp strings back to Date objects
        const messagesWithDates = parsed.map(
          (msg: { role: string; content: string; timestamp: string }) => ({
            ...msg,
            timestamp: new Date(msg.timestamp),
          })
        );
        setMessages(messagesWithDates);
      } catch (error) {
        console.error("Error loading saved conversation:", error);
      }
    }
  }, []);

  // Save conversation to localStorage whenever messages change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("farmaleaf-conversation", JSON.stringify(messages));
    }
  }, [messages]);

  // Auto-scroll to bottom of conversation
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Limit conversation to last 20 messages (10 exchanges) for cost control
  const limitMessages = (msgs: Message[]): Message[] => {
    if (msgs.length > 20) {
      return msgs.slice(-20);
    }
    return msgs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    // Add user message to conversation
    const updatedMessages = limitMessages([...messages, userMessage]);
    setMessages(updatedMessages);
    setInput(""); // Clear input immediately
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      const assistantMessage: Message = {
        role: "assistant",
        content: data.error ? `Error: ${data.error}` : data.response,
        timestamp: new Date(),
      };

      // Add assistant response to conversation
      setMessages((prev) => limitMessages([...prev, assistantMessage]));
    } catch (error) {
      console.error("Error calling API:", error);
      const errorMessage: Message = {
        role: "assistant",
        content:
          "Sorry, there was an error processing your request. Please try again.",
        timestamp: new Date(),
      };
      setMessages((prev) => limitMessages([...prev, errorMessage]));
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setInput("");
    setMessages([]);
    localStorage.removeItem("farmaleaf-conversation");
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-4 cyber-scanlines">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex justify-start mb-8 pt-4">
          <Image
            src="/images/combination-mark.svg"
            alt="Farmaleaf"
            width={200}
            height={80}
          />
        </div>

        {/* Conversation History */}
        {messages.length > 0 && (
          <Card className="mb-8 cyber-glass">
            <CardContent className="space-y-4 max-h-[60vh] overflow-y-auto cyber-scrollbar p-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`${
                    message.role === "user" ? "flex justify-end ml-8" : "mr-8"
                  }`}
                >
                  {message.role === "assistant" && (
                    <div className="flex justify-start items-center gap-2 mb-1">
                      <span className="text-sm font-semibold cyber-heading text-xs">
                        Yebá
                      </span>
                      <span className="text-xs opacity-70 font-mono">
                        {message.timestamp.toLocaleTimeString([], {
                          hour12: false,
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  )}
                  <div
                    className={`${
                      message.role === "user"
                        ? "cyber-message-user"
                        : "cyber-message-yeba cyber-glass"
                    }`}
                  >
                    <pre
                      className={`whitespace-pre-wrap text-sm ${
                        message.role === "user"
                          ? "text-right text-background"
                          : "cyber-text"
                      }`}
                    >
                      {message.content}
                    </pre>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="mr-8">
                  <div className="flex justify-start items-center gap-2 mb-1">
                    <span className="text-sm font-semibold cyber-heading text-xs">
                      Yebá
                    </span>
                  </div>
                  <div className="cyber-message-yeba cyber-glass cyber-pulse">
                    <pre className="whitespace-pre-wrap text-sm cyber-text">
                      Searching through the ancient wisdom...
                    </pre>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
              <div className="flex justify-end pt-2">
                <Button
                  type="button"
                  onClick={handleClear}
                  variant="outline"
                  size="sm"
                  disabled={messages.length === 0}
                >
                  <Cross1Icon className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="cyber-glass">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      if (!isLoading && input.trim()) {
                        const formEvent = e as unknown as React.FormEvent;
                        handleSubmit(formEvent);
                      }
                    }
                  }}
                  placeholder="Tell Yebá what ails you..."
                  className="min-h-[56px] max-h-[200px] pr-12 resize-none flex items-center placeholder-centered"
                  style={{
                    paddingTop: "16px",
                    paddingBottom: "16px",
                    lineHeight: "1.3",
                    display: "flex",
                    alignItems: "center",
                  }}
                  disabled={isLoading}
                  rows={1}
                />

                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center">
                  <Button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      const formEvent = e as unknown as React.FormEvent;
                      handleSubmit(formEvent);
                    }}
                    disabled={isLoading || !input.trim()}
                    variant="logoButton"
                    size="icon"
                    className="h-16 w-16 flex items-center justify-center logo-super-glow transition-all duration-300"
                  >
                    <Image
                      src="/images/logo.svg"
                      alt="Send"
                      width={88}
                      height={88}
                      className="w-20 h-20"
                      style={{
                        filter:
                          "brightness(0) saturate(100%) invert(70%) sepia(77%) saturate(2494%) hue-rotate(118deg) brightness(94%) contrast(101%)",
                        fontWeight: "bold",
                      }}
                    />
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
