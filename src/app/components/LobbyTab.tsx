import { useState } from "react";
import { Send, AlertTriangle } from "lucide-react";

interface Message {
  id: string;
  type: "user" | "system";
  sender?: string;
  emoji?: string;
  content: string;
  timestamp: string;
}

export function LobbyTab() {
  const [message, setMessage] = useState("");

  const messages: Message[] = [
    {
      id: "1",
      type: "user",
      sender: "AntonM2",
      emoji: "🔥",
      content: "This is my message.",
      timestamp: "12:59 PM",
    },
    {
      id: "2",
      type: "user",
      sender: "AntonM2",
      emoji: "🔥",
      content: "lii",
      timestamp: "02:31 PM",
    },
    {
      id: "3",
      type: "user",
      sender: "Secondary",
      emoji: "😊",
      content: "Yo",
      timestamp: "02:25 PM",
    },
    {
      id: "4",
      type: "user",
      sender: "AntonM2",
      emoji: "🔥",
      content: "Це тест ровідомлення",
      timestamp: "02:25 PM",
    },
    {
      id: "5",
      type: "system",
      content: "🎯 AntonM2 completed mission 'The Compliment Chain' (+15 points)",
      timestamp: "02:26 PM",
    },
    {
      id: "6",
      type: "user",
      sender: "Secondary",
      emoji: "😊",
      content: "Yo",
      timestamp: "02:26 PM",
    },
    {
      id: "7",
      type: "system",
      content: "❌ Secondary's accusation against AntonM2 was incorrect",
      timestamp: "02:28 PM",
    },
    {
      id: "8",
      type: "user",
      sender: "Secondary",
      emoji: "😊",
      content: "Hey",
      timestamp: "01:59 PM",
    },
    {
      id: "9",
      type: "user",
      sender: "AntonM2",
      emoji: "🔥",
      content: "Works?",
      timestamp: "01:59 PM",
    },
    {
      id: "10",
      type: "user",
      sender: "AntonM2",
      emoji: "🔥",
      content: "Лагає, але норм.",
      timestamp: "02:00 PM",
    },
  ];

  const handleSend = () => {
    if (message.trim()) {
      // Handle send message logic
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages Area */}
      <div className="flex-1 overflow-auto px-6 py-6 space-y-4">
        {messages.map((msg) => {
          if (msg.type === "system") {
            return (
              <div key={msg.id} className="flex justify-center">
                <div className="bg-sa-navy-lighter rounded-xl px-4 py-2 max-w-[80%]">
                  <p className="text-sa-text-muted text-sm text-center">{msg.content}</p>
                </div>
              </div>
            );
          }

          return (
            <div key={msg.id} className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sa-navy-lighter flex items-center justify-center">
                <span className="text-lg">{msg.emoji}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-sa-text">{msg.sender}</span>
                  <span className="text-sa-text-muted text-xs">{msg.timestamp}</span>
                </div>
                <p className="text-sa-text">{msg.content}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Message Input */}
      <div className="border-t border-sa-navy-lighter bg-sa-navy p-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            className="flex-1 bg-sa-navy-light border border-sa-navy-lighter rounded-xl px-4 py-3 text-sa-text placeholder:text-sa-text-muted focus:outline-none focus:border-sa-blue transition-colors"
            maxLength={500}
          />
          <button
            onClick={handleSend}
            disabled={!message.trim()}
            className="w-12 h-12 bg-sa-yellow rounded-xl flex items-center justify-center active:scale-95 transition-transform disabled:opacity-50 disabled:active:scale-100 flex-shrink-0"
          >
            <Send className="w-5 h-5 text-sa-navy" />
          </button>
        </div>
        <p className="text-sa-text-muted text-xs mt-2 text-right">
          {message.length}/500
        </p>
      </div>
    </div>
  );
}
