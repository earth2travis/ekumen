"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface Message {
  role: 'user' | 'assistant';
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
    const savedMessages = localStorage.getItem('farmaleaf-conversation');
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages);
        // Convert timestamp strings back to Date objects
        const messagesWithDates = parsed.map((msg: { role: string; content: string; timestamp: string }) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }));
        setMessages(messagesWithDates);
      } catch (error) {
        console.error('Error loading saved conversation:', error);
      }
    }
  }, []);

  // Save conversation to localStorage whenever messages change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('farmaleaf-conversation', JSON.stringify(messages));
    }
  }, [messages]);

  // Auto-scroll to bottom of conversation
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
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
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    };

    // Add user message to conversation
    const updatedMessages = limitMessages([...messages, userMessage]);
    setMessages(updatedMessages);
    setInput(''); // Clear input immediately
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.error ? `Error: ${data.error}` : data.response,
        timestamp: new Date()
      };

      // Add assistant response to conversation
      setMessages(prev => limitMessages([...prev, assistantMessage]));
    } catch (error) {
      console.error('Error calling API:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Sorry, there was an error processing your request. Please try again.',
        timestamp: new Date()
      };
      setMessages(prev => limitMessages([...prev, errorMessage]));
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setInput("");
    setMessages([]);
    localStorage.removeItem('farmaleaf-conversation');
  };

  return (
    <div className="min-h-screen bg-white text-black p-4">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-center mb-8">Farmaleaf</h1>

        {/* Conversation History */}
        {messages.length > 0 && (
          <div className="mb-8 space-y-4 max-h-96 overflow-y-auto border border-black rounded-md p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-3 rounded-md ${
                  message.role === 'user' 
                    ? 'bg-black text-white ml-8' 
                    : 'bg-gray-100 text-black mr-8'
                }`}
              >
                <div className="flex justify-between items-start mb-1">
                  <span className="text-sm font-semibold">
                    {message.role === 'user' ? 'You' : 'Farmaleaf'}
                  </span>
                  <span className="text-xs opacity-70">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                </div>
                <pre className="whitespace-pre-wrap text-sm">{message.content}</pre>
              </div>
            ))}
            {isLoading && (
              <div className="bg-gray-100 text-black mr-8 p-3 rounded-md">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-sm font-semibold">Farmaleaf</span>
                </div>
                <div className="text-sm">Thinking...</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Farmaleaf..."
            className="min-h-[100px] bg-white border-black text-black resize-none"
            disabled={isLoading}
          />

          <div className="flex gap-2">
            <Button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-black text-white hover:bg-gray-800"
            >
              {isLoading ? "Sending..." : "Send"}
            </Button>

            <Button
              type="button"
              onClick={handleClear}
              variant="outline"
              className="border-black text-black hover:bg-gray-100"
              disabled={messages.length === 0}
            >
              Clear
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
