import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
}

const QUICK_PILLS = [
  'Tell me about the packages.',
  'How fast can you build it?',
  'How does the AI work?',
  'Do you use my brand colors?'
];

export const AIChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-msg',
      sender: 'ai',
      text: "Hi, I'm the GetGoLive AI. I can tell you about our process, our packages, or how we transform outdated real estate sites. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isLoading]);

  const sendUserMessage = async (textToSend: string) => {
    const trimmed = textToSend.trim();
    if (!trimmed || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: trimmed,
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const history = newMessages.slice(-8).map((m) => ({
        role: m.sender === 'user' ? 'user' : 'model',
        text: m.text,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed, history }),
      });

      if (!res.ok) throw new Error('API request failed');

      const data = await res.json();
      const aiReply =
        data.reply ||
        'GetGoLive transforms offline businesses into high-velocity digital growth engines.';

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'ai',
          text: aiReply,
        },
      ]);
    } catch (err) {
      console.error('Chat error:', err);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'ai',
          text: 'GetGoLive AI is offline. Reach us via our contact strategy form below.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    sendUserMessage(input);
  };

  return (
    <>
      {/* FULL-SCREEN BACKDROP OVERLAY WHEN OPEN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-[6px]"
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-5 right-5 left-5 md:left-auto md:bottom-6 md:right-6 z-40 select-none pointer-events-none">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* 1. EXTERNAL TRIGGER: Elongated Horizontal Pill (120px x 44px) */
            <motion.div key="collapsed-wrapper" className="flex justify-end w-full">
              <motion.button
                key="collapsed-pill"
                onClick={() => setIsOpen(true)}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                exit={{ scale: 0.9, opacity: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{
                  scale: { duration: 0.3, ease: 'easeOut' },
                }}
                style={{
                  background: 'var(--surface-card)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                }}
                className="pointer-events-auto w-[120px] h-[44px] rounded-full border border-[var(--border-color)] flex items-center justify-center cursor-pointer shadow-2xl transition-colors duration-300"
                aria-label="Open Ask me AI Assistant"
              >
                <span className="font-headline font-bold text-[14px] text-[var(--text-primary)] tracking-tight leading-none">
                  Ask me
                </span>
              </motion.button>
            </motion.div>
          ) : (
            /* 2. EXPANDED CHAT PANEL: FLOATING CARD WITH 20px MARGINS ON MOBILE & 380x460 DESKTOP */
            <motion.div
              key="expanded-panel"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto bg-[var(--surface-card)] border border-[var(--border-color)] text-[var(--text-primary)] shadow-2xl overflow-hidden flex flex-col w-full md:w-[380px] h-[340px] md:h-[460px] rounded-[24px] p-4 md:p-5 transition-colors duration-300"
            >
              {/* 3. HEADER: VERTICALLY CENTERED 44px BAR */}
              <div className="w-full h-[44px] pb-1 border-b border-[var(--border-color)] flex items-center justify-between shrink-0">
                <span className="text-[16px] font-bold font-headline tracking-tight text-[var(--text-primary)] leading-none">
                  GetGoLive
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
                  aria-label="Close Assistant"
                >
                  <X className="w-4 h-4 stroke-[2]" />
                </button>
              </div>

              {/* 4. CHAT MESSAGES BODY */}
              <div className="flex-1 overflow-y-auto space-y-3 pr-1 scrollbar-none my-2">
                {messages.map((msg, index) => {
                  const isUser = msg.sender === 'user';
                  return (
                    <React.Fragment key={msg.id}>
                      <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} w-full`}>
                        <div
                          className={`max-w-[85%] px-4 py-2.5 text-[14px] leading-relaxed font-sans ${
                            isUser
                              ? 'bg-[var(--cta-bg)] text-[var(--cta-text)] font-medium'
                              : 'bg-[var(--bg-primary)] text-[var(--text-primary)] border border-[var(--border-color)]'
                          }`}
                          style={{
                            borderRadius: '16px',
                            ...(isUser
                              ? { borderTopRightRadius: '0px' }
                              : { borderTopLeftRadius: '0px' }),
                          }}
                        >
                          <p className="whitespace-pre-wrap">{msg.text}</p>
                        </div>
                      </div>

                      {/* Quick Action Pills under first welcome message */}
                      {index === 0 && msg.id === 'welcome-msg' && (
                        <div className="flex flex-wrap gap-2 pt-1 pb-1">
                          {QUICK_PILLS.map((pillLabel) => (
                            <button
                              key={pillLabel}
                              type="button"
                              onClick={() => sendUserMessage(pillLabel)}
                              className="h-[32px] px-3 bg-transparent border border-[var(--border-color)] text-[var(--text-primary)] rounded-full text-[12px] font-sans hover:border-[var(--text-primary)] hover:bg-[var(--text-primary)]/5 transition-all cursor-pointer whitespace-nowrap flex items-center justify-center"
                            >
                              {pillLabel}
                            </button>
                          ))}
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}

                {/* Typing Indicator */}
                {isLoading && (
                  <div className="flex justify-start w-full">
                    <div
                      className="bg-[var(--bg-primary)] text-[var(--text-primary)] border border-[var(--border-color)] px-4 py-2.5 max-w-[85%] flex items-center gap-1.5"
                      style={{
                        borderRadius: '16px',
                        borderTopLeftRadius: '0px',
                      }}
                    >
                      <span className="w-1.5 h-1.5 bg-[var(--text-primary)] rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-1.5 h-1.5 bg-[var(--text-primary)] rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-1.5 h-1.5 bg-[var(--text-primary)] rounded-full animate-bounce" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* 5. INPUT BAR & STRICT PURE WHITE CIRCULAR SEND BUTTON */}
              <form onSubmit={handleSubmit} className="pt-2 shrink-0">
                <div className="relative flex items-center h-[48px] bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-full pl-4 pr-1.5 focus-within:border-[var(--text-primary)] transition-colors">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                    className="w-full bg-transparent text-[var(--text-primary)] text-[14px] placeholder-[var(--text-muted)] focus:outline-none pr-2 font-sans"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="w-[28px] h-[28px] rounded-full bg-[var(--cta-bg)] flex items-center justify-center hover:opacity-80 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shrink-0"
                    aria-label="Send Message"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 text-[var(--cta-text)] stroke-[2.5]" />
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
