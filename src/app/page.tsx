"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import Image from "next/image";
import { Cross1Icon } from "@radix-ui/react-icons";
import ReactMarkdown from "react-markdown";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function Home() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isMultiline, setIsMultiline] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Load conversation from localStorage on mount
  useEffect(() => {
    const savedMessages = localStorage.getItem("ekumen-conversation");
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
      localStorage.setItem("ekumen-conversation", JSON.stringify(messages));
    }
  }, [messages]);

  // Auto-scroll to bottom of conversation
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Simple auto-resize function
  const autoResize = () => {
    if (!textareaRef.current) return;

    // Reset to single line height first
    textareaRef.current.style.height = "56px";

    // Check if content overflows the single line
    const scrollHeight = textareaRef.current.scrollHeight;
    const isMulti = scrollHeight > 56;

    setIsMultiline(isMulti);
    textareaRef.current.style.height = scrollHeight + (isMulti ? 48 : 0) + "px";
  };

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
    setIsMultiline(false); // Reset multiline state

    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = "56px";
    }

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
    setIsMultiline(false);
    localStorage.removeItem("ekumen-conversation");
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-4 cyber-scanlines">
      <div className="max-w-2xl mx-auto space-y-6">
        <Header />

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
                    <div className="flex justify-start items-center gap-2 mb-2">
                      <span className="text-sm font-semibold cyber-heading text-xs">
                        Genly
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
                        : "cyber-message-genly cyber-glass"
                    }`}
                  >
                    {message.role === "user" ? (
                      <pre className="whitespace-pre-wrap text-sm text-right text-background">
                        {message.content}
                      </pre>
                    ) : (
                      <div className="text-sm cyber-text pt-3 pl-3 pb-3">
                        <ReactMarkdown>{message.content}</ReactMarkdown>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="mr-8">
                  <div className="flex justify-start items-center gap-2 mb-2">
                    <span className="text-sm font-semibold cyber-heading text-xs">
                      Genly
                    </span>
                  </div>
                  <div className="cyber-message-genly cyber-glass cyber-pulse">
                    <div className="text-sm cyber-text pt-3 pl-3 pb-3">
                      Observing the patterns...
                    </div>
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
                  ref={textareaRef}
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    autoResize();
                  }}
                  onInput={autoResize}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      if (!isLoading && input.trim()) {
                        const formEvent = e as unknown as React.FormEvent;
                        handleSubmit(formEvent);
                      }
                    }
                  }}
                  placeholder="What are you trying to see?"
                  className="resize-none placeholder-centered"
                  style={{
                    paddingTop: "16px",
                    paddingBottom: isMultiline ? "64px" : "16px",
                    paddingRight: isMultiline ? "16px" : "64px",
                    paddingLeft: "16px",
                    lineHeight: "1.5",
                    minHeight: "56px",
                    maxHeight: "200px",
                    overflow: "hidden",
                    resize: "none",
                  }}
                  disabled={isLoading}
                  rows={1}
                />

                <div
                  className={`absolute transition-all duration-300 ${
                    isMultiline
                      ? "-bottom-1 right-2"
                      : "top-1/2 right-2 -translate-y-1/2"
                  }`}
                >
                  <Button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      const formEvent = e as unknown as React.FormEvent;
                      handleSubmit(formEvent);
                      e.currentTarget.blur();
                    }}
                    disabled={isLoading || !input.trim()}
                    variant="logoButton"
                    size="icon"
                    className="h-12 w-12 flex items-center justify-center logo-super-glow transition-all duration-300"
                  >
                    <Image
                      src="/images/logo.svg"
                      alt="Send"
                      width={60}
                      height={60}
                      className="w-14 h-14"
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
