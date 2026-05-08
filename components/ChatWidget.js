"use client";

import { useState, useRef, useEffect } from "react";

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatMessageContent(text) {
  if (!text) return "";
  let escaped = escapeHtml(text);
  escaped = escaped.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
    '<a href="$2" target="_blank" rel="noreferrer noopener" class="text-dork underline hover:text-yellow-300">$1</a>'
  );
  escaped = escaped.replace(/\r?\n/g, "<br />");
  return escaped;
}

function ChatWidgetInner() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      textareaRef.current?.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput("");
    setError("");
    setIsLoading(true);

    // Add user message to chat
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);

    try {
      // Convert messages to format expected by API
      const history = messages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          history: history,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to get response");
      }

      const data = await response.json();

      // Add AI response to chat
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch (err) {
      console.error("Error:", err);
      setError(err.message || "Failed to send message. Please try again.");
      // Remove the last user message if there was an error
      setMessages((prev) => prev.slice(0, -1));
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 50);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button - Bottom Right */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999] pointer-events-auto w-12 h-12 md:w-14 md:h-14 rounded-full bg-dork hover:bg-yellow-400 text-[#5c4a42] shadow-lg hover:shadow-xl transition-all font-bold flex items-center justify-center text-sm border-2 border-[#5c4a42]"
        aria-label="Ask AI"
        title="Ask AI"
      >
        💬
      </button>

      {/* Chat Widget - Bottom Right */}
      {isOpen && (
        <div className="fixed inset-x-2 bottom-16 md:left-auto md:right-6 md:bottom-24 md:w-96 md:inset-x-auto z-[9999] pointer-events-auto max-h-[calc(100vh-5rem)] md:max-h-[600px] bg-slate-700 text-slate-100 rounded-2xl shadow-2xl border-2 border-dork flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-dork to-sky-300 text-slate-950 p-3 md:p-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2 md:gap-3">
              <span className="text-lg md:text-xl">🤓</span>
              <h3 className="font-stopbuck text-base md:text-lg">Dorky Bot</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-lg md:text-xl hover:opacity-75 transition font-bold flex-shrink-0"
            >
              ✕
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-3 md:p-4 bg-slate-600/95 space-y-3 md:space-y-4 min-h-0">
            {messages.length === 0 && (
              <div className="text-center text-slate-300 py-6 md:py-8">
                <p className="font-stopbuck text-base md:text-lg mb-2">Welcome to Dorky Bot!</p>
                <p className="text-sm">
                  Ask me anything about Dorkcoin.
                </p>
              </div>
            )}

            {messages.map((message, idx) => (
              <div
                key={idx}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] md:max-w-xs px-3 md:px-4 py-2 md:py-3 rounded-lg ${
                    message.role === "user"
                      ? "bg-dork text-[#5c4a42] rounded-br-none"
                      : "bg-slate-800 text-slate-100 rounded-bl-none"
                  }`}
                >
                  <div
                    className="text-sm break-words whitespace-pre-wrap leading-6"
                    dangerouslySetInnerHTML={{ __html: formatMessageContent(message.content) }}
                  />
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 text-slate-100 px-3 md:px-4 py-2 md:py-3 rounded-lg rounded-bl-none">
                  <div className="flex gap-2">
                    <span className="inline-block w-2 h-2 bg-dork rounded-full animate-bounce"></span>
                    <span className="inline-block w-2 h-2 bg-dork rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></span>
                    <span className="inline-block w-2 h-2 bg-dork rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                  </div>
                </div>
              </div>
            )}

            {error && (
              <div className="flex justify-start">
                <div className="bg-red-100 text-red-700 px-3 md:px-4 py-2 md:py-3 rounded-lg text-sm">
                  {error}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-slate-700 p-3 md:p-4 bg-slate-900">
            <div className="flex gap-2">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask me anything about Dorkcoin..."
                autoFocus
                tabIndex={0}
                className="flex-1 resize-none p-2 md:p-3 border border-slate-700 rounded-lg focus:outline-none focus:border-dork focus:ring-2 focus:ring-dork focus:ring-opacity-50 bg-slate-950 text-slate-100 placeholder:text-slate-500 text-sm disabled:bg-slate-800 disabled:cursor-not-allowed"
                rows="2"
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !input.trim()}
                className="bg-dork hover:bg-yellow-400 disabled:bg-slate-700 text-[#5c4a42] font-bold px-3 md:px-4 py-2 md:py-3 rounded-lg transition flex items-center justify-center disabled:cursor-not-allowed text-sm md:text-base"
              >
                {isLoading ? "..." : "Ask"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function ChatWidget() {
  return process.env.NEXT_PUBLIC_ENABLE_AI_CHAT === "true" ? <ChatWidgetInner /> : null;
}
