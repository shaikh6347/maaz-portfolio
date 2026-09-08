
"use client";

import {
  FormEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Bot,
  Minimize2,
  Send,
  Sparkles,
  Trash2,
} from "lucide-react";
import { profile } from "@/data/profile";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const suggestions = [
  "Who is Maaz Shaikh?",
  "What technologies does Maaz know?",
  "Tell me about his projects.",
  "Does he know Spring Boot?",
  "Does he work with .NET?",
  "What frontend technologies does he know?",
  "How can I contact Maaz?",
  "Can I hire Maaz?",
];

const initialMessage: Message = {
  role: "assistant",
  content: `Hi! I'm Maaz AI. Ask me anything about ${profile.name}'s portfolio, skills, projects, certificates, or how to contact him.`,
};

export function AIChat({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [open]);

  if (!open) return null;

  async function send(event?: FormEvent) {
    event?.preventDefault();

    const text = input.trim();

    if (!text || loading) return;

    const userMessage: Message = {
      role: "user",
      content: text,
    };

    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
          history: nextMessages,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "AI request failed");
      }

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            data.answer ||
            profile.aiFallback ||
            "I don't have that information in my portfolio knowledge.",
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "The AI service is temporarily unavailable. You can still use the Contact section to reach Maaz directly.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();

      if (!loading) {
        void send();
      }
    }
  }

  function clearChat() {
    setMessages([
      {
        role: "assistant",
        content: `Chat cleared. What would you like to know about ${profile.name}?`,
      },
    ]);

    setInput("");
  }

  function useSuggestion(question: string) {
    setInput(question);
    inputRef.current?.focus();
  }

  return (
    <div className="fixed inset-x-4 bottom-4 z-[100] mx-auto w-auto max-w-md sm:right-4 sm:left-auto sm:mx-0">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#090909]/95 shadow-2xl shadow-black/60 backdrop-blur-2xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#d8b46a]/10 text-[#f0d9a3]">
              <Sparkles size={17} />
            </div>

            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                Maaz AI
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </div>

              <div className="text-[11px] text-white/35">
                Portfolio knowledge assistant
              </div>
            </div>
          </div>

          <div className="flex gap-1">
            <button
              type="button"
              onClick={clearChat}
              aria-label="Clear chat"
              title="Clear chat"
              className="rounded-lg p-2 text-white/45 transition hover:bg-white/5 hover:text-white"
            >
              <Trash2 size={15} />
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Minimize AI"
              title="Minimize"
              className="rounded-lg p-2 text-white/45 transition hover:bg-white/5 hover:text-white"
            >
              <Minimize2 size={15} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="h-[430px] overflow-y-auto p-4">
          <div className="space-y-3">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex ${
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.role === "user"
                      ? "bg-[#f0d9a3] text-black"
                      : "bg-white/5 text-white/75"
                  }`}
                >
                  {message.role === "assistant" && (
                    <div className="mb-1 flex items-center gap-1.5 text-[#d8b46a]">
                      <Bot size={14} />
                      <span className="text-[10px] font-medium">
                        Maaz AI
                      </span>
                    </div>
                  )}

                  <div className="whitespace-pre-wrap break-words">
                    {message.content}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl bg-white/5 px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/40" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/40 [animation-delay:120ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/40 [animation-delay:240ms]" />
                  </div>
                </div>
              </div>
            )}

            <div ref={endRef} />
          </div>
        </div>

        {/* Suggestions */}
        <div className="border-t border-white/10 p-3">
          <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
            {suggestions.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => useSuggestion(item)}
                disabled={loading}
                className="shrink-0 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-white/50 transition hover:border-[#d8b46a]/30 hover:text-[#f0d9a3] disabled:cursor-not-allowed disabled:opacity-40"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={send}
            className="flex items-center gap-2"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
              maxLength={1200}
              placeholder="Ask Maaz AI..."
              className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#d8b46a]/50 disabled:opacity-50"
            />

            <button
              type="submit"
              disabled={!input.trim() || loading}
              aria-label="Send message"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#f0d9a3] text-black transition hover:bg-[#ffe8af] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Send size={17} />
            </button>
          </form>

          <div className="mt-2 text-center text-[10px] text-white/20">
            Press Enter to send
          </div>
        </div>
      </div>
    </div>
  );
}

export function AIButton({
  onClick,
}: {
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Open Maaz AI"
      className="fixed bottom-5 right-5 z-[70] flex items-center gap-2 rounded-full border border-[#d8b46a]/30 bg-black/80 px-4 py-3 text-sm text-[#f0d9a3] shadow-xl shadow-black/30 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[#d8b46a]/60 hover:bg-black"
    >
      <span className="grid h-7 w-7 place-items-center rounded-full bg-[#d8b46a]/10">
        <Sparkles size={14} />
      </span>

      Maaz AI
    </button>
  );
}
