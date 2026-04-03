import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
}

const quickQuestions = [
  "What do you offer?",
  "How do I order?",
  "Turnaround time?",
  "Pricing info",
  "Contact info",
];

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();

  if (lower.match(/hello|hi|hey|sup|what's up|howdy/)) {
    return "Hey there! Welcome to Yellow Rose Swag & Design! 🌹 I'm here to help you with custom apparel, etched glassware, and more. What can I help you with today?";
  }

  if (lower.match(/what.*(do you|y'all|you all).*(offer|sell|make|create|have)|services|products|what do you do/)) {
    return "We specialize in three main areas:\n\n🎽 **Custom Apparel** — T-shirts, hoodies, long-sleeves with your unique designs\n\n🥂 **Etched Glassware** — Permanent, high-definition glass etching for gifts & celebrations\n\n🎁 **Seasonal Items** — Custom tote bags, Christmas stockings, and specialty gifts\n\nEverything is 100% custom-made just for you!";
  }

  if (lower.match(/how.*(order|start|begin|get started|place)|ordering|submit/)) {
    return "Ordering is easy! Just scroll down to our **contact form** and fill in:\n\n1. Your name & contact info\n2. Choose the service you need\n3. Tell us your design vision\n4. Upload any reference images\n\nOnce submitted, we'll reach out within 24 hours to discuss your project details and pricing! You can also call us at **318-829-7479** or email **yellowroseswag@gmail.com**.";
  }

  if (lower.match(/how long|turnaround|when.*ready|time.*take|delivery|ship/)) {
    return "Turnaround depends on the project:\n\n⚡ **Custom Apparel** — Typically 5-7 business days\n⚡ **Etched Glassware** — 3-5 business days\n⚡ **Bulk Orders** — We'll provide a timeline based on quantity\n\nRush orders may be available — just ask! We always try to work with your timeline.";
  }

  if (lower.match(/price|cost|how much|pricing|rates|charge|expensive|cheap|budget/)) {
    return "Pricing varies based on your project:\n\n💰 Pricing depends on item type, quantity, design complexity, and customization level.\n\nWe offer competitive rates and **volume discounts** for bulk orders!\n\nFor an accurate quote, fill out our contact form or call us at **318-829-7479**. We'll get back to you within 24 hours with pricing.";
  }

  if (lower.match(/contact|reach|call|phone|email|address|location|where/)) {
    return "Here's how to reach us:\n\n📧 **Email:** yellowroseswag@gmail.com\n📱 **Phone:** 318-829-7479\n📍 **Location:** Elgin, South Carolina\n📸 **Instagram:** @yellowrose_swag\n\nWe'd love to hear from you!";
  }

  if (lower.match(/bulk|corporate|team|group|large order|wholesale/)) {
    return "We love bulk and corporate orders! 🏢\n\nWhether it's team uniforms, corporate gifts, event merchandise, or family reunion shirts — we've got you covered.\n\n**Volume discounts** are available! Fill out the contact form and select 'Bulk/Corporate Order' or call us at **318-829-7479** to discuss your needs.";
  }

  if (lower.match(/glass|etching|etched|wine|cup|mug|tumbler/)) {
    return "Our etched glassware is one of our specialties! 🥂\n\nWe create **permanent, high-definition etchings** on various glassware — perfect for:\n\n• Wedding gifts & favors\n• Anniversary celebrations\n• Corporate events\n• Holiday gifts\n• Memorial pieces\n\nEach piece is handcrafted with precision. Check out our gallery to see examples!";
  }

  if (lower.match(/shirt|t-shirt|tee|hoodie|apparel|clothes|clothing|sweatshirt/)) {
    return "Custom apparel is our bread and butter! 🎽\n\nWe offer:\n• **T-Shirts** — All sizes, colors, and styles\n• **Hoodies** — Perfect for teams and families\n• **Long-Sleeves** — Great for cooler weather\n\nWe use premium materials and professional-grade printing. Tell us your vision and we'll bring it to life!";
  }

  if (lower.match(/owner|who.*run|who.*own|seger|about/)) {
    return "Yellow Rose Swag & Design is owned by **Seger Tyler** in Elgin, South Carolina. 🌹\n\nSeger is a nurse who LOVES creating custom designs. The company was born from the desire to honor her grandmother — the yellow rose was her Nanny's favorite flower!\n\nIt's a true family-owned and operated business where every order is treated like family.";
  }

  if (lower.match(/thank|thanks|appreciate|awesome|great|perfect/)) {
    return "You're welcome! 😊 We're so glad we could help. If you have any other questions, just ask! And when you're ready to start your custom project, our contact form is right below. We can't wait to create something amazing for you! 🌹";
  }

  if (lower.match(/stocking|christmas|holiday|seasonal|tote|bag/)) {
    return "We create beautiful seasonal items! 🎄\n\n• **Custom Christmas Stockings** — Personalized with names, designs\n• **Canvas Tote Bags** — Stylish, functional, custom-printed\n• **Holiday Gift Sets** — Curated gift combinations\n\nThese make amazing gifts! Order early for the holiday season to guarantee availability.";
  }

  return "Great question! While I might not have the specific answer, here's what I can help with:\n\n• Our services & products\n• How to place an order\n• Turnaround times\n• Pricing information\n• Contact details\n\nOr you can reach us directly at **yellowroseswag@gmail.com** or call **318-829-7479** — we'd love to help! 🌹";
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hey! 👋 Welcome to Yellow Rose Swag & Design! I'm here to help you with custom apparel, glassware, and more. What can I help you with?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      text: text.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getBotResponse(text);
      const botMsg: Message = {
        id: Date.now() + 1,
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600 + Math.random() * 800);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-[8.5rem] md:bottom-24 right-4 md:right-6 z-[60] w-[calc(100vw-2rem)] sm:w-[400px] max-h-[55vh] md:max-h-[70vh] bg-white rounded-2xl shadow-2xl border border-border/50 flex flex-col overflow-hidden"
          >
            <div className="bg-primary p-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Yellow Rose Assistant</p>
                  <p className="text-white/50 text-xs flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                    Online now
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/70 hover:text-white"
                data-testid="button-close-chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0 bg-gray-50/50">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2.5 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                    msg.sender === "bot" ? "bg-secondary text-primary" : "bg-primary text-white"
                  }`}>
                    {msg.sender === "bot" ? <Bot className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
                  </div>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${
                      msg.sender === "user"
                        ? "bg-primary text-white rounded-br-md"
                        : "bg-white text-foreground shadow-sm border border-border/30 rounded-bl-md"
                    }`}
                  >
                    {msg.text.split(/(\*\*.*?\*\*)/).map((part, i) =>
                      part.startsWith("**") && part.endsWith("**")
                        ? <strong key={i}>{part.slice(2, -2)}</strong>
                        : <span key={i}>{part}</span>
                    )}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2.5"
                >
                  <div className="w-7 h-7 rounded-full bg-secondary text-primary flex items-center justify-center shrink-0">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm border border-border/30">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-primary/30 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 rounded-full bg-primary/30 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 rounded-full bg-primary/30 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-3 border-t border-border/30 bg-white shrink-0">
              <div className="flex flex-wrap gap-1.5 mb-3">
                {quickQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary/10 text-primary font-medium hover:bg-secondary/20 transition-colors"
                    data-testid={`button-quick-${q.toLowerCase().replace(/[^a-z]/g, '-')}`}
                  >
                    {q}
                  </button>
                ))}
              </div>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2.5 rounded-xl border border-border bg-background/50 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-all"
                  data-testid="input-chat-message"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center hover:bg-primary/90 disabled:opacity-30 transition-all active:scale-90"
                  data-testid="button-send-message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-[4.5rem] md:bottom-4 right-4 md:right-6 z-[60] w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-colors ${
          isOpen
            ? "bg-primary/80 text-white"
            : "bg-secondary text-primary hover:bg-yellow-400"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        data-testid="button-open-chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2 }}
          className="fixed bottom-[8rem] md:bottom-20 right-4 md:right-6 z-[59] bg-white rounded-xl shadow-lg px-4 py-2.5 text-sm font-medium text-primary border border-border/50 max-w-[200px]"
        >
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-border/50 rotate-45" />
          Need help? Chat with us!
        </motion.div>
      )}
    </>
  );
}
