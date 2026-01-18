
import React, { useState, useRef, useEffect } from 'react';
import useChat from '../hooks/useChat.ts';
import CloseIcon from './icons/CloseIcon.tsx';
import SendIcon from './icons/SendIcon.tsx';
import BotIcon from './icons/BotIcon.tsx';
import UserIcon from './icons/UserIcon.tsx';

interface ChatbotProps {
    isOpen: boolean;
    onClose: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onClose }) => {
    const [input, setInput] = useState('');
    const { messages, sendMessage, isLoading } = useChat();
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    const handleSend = () => {
        if (input.trim()) {
            sendMessage(input);
            setInput('');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm" aria-modal="true" role="dialog">
            <div className="flex flex-col w-full max-w-lg h-[80vh] bg-slate-900 border border-slate-700/50 rounded-2xl shadow-2xl shadow-accent/10 mx-4 overflow-hidden">
                {/* Header */}
                <header className="flex items-center justify-between p-4 bg-slate-800/50 border-b border-slate-700/50">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                            <BotIcon className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-slate-200">Ask Me Anything</h2>
                            <p className="text-xs text-slate-500">AI-powered assistant</p>
                        </div>
                    </div>
                    <button 
                        onClick={onClose} 
                        className="p-2 rounded-lg text-slate-400 hover:bg-slate-700/50 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500" 
                        aria-label="Close chat"
                    >
                        <CloseIcon className="w-5 h-5" />
                    </button>
                </header>

                {/* Messages */}
                <div className="flex-1 p-4 overflow-y-auto">
                    <div className="space-y-6">
                        {messages.length === 0 && (
                            <div className="text-center py-8">
                                <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4">
                                    <BotIcon className="w-8 h-8 text-accent" />
                                </div>
                                <p className="text-slate-400 text-sm">Hi! Ask me anything about Shahid's experience, skills, or projects.</p>
                            </div>
                        )}
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                                {msg.role === 'model' && (
                                    <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                                        <BotIcon className="h-4 w-4 text-accent" />
                                    </div>
                                )}
                                <div 
                                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                                        msg.role === 'user' 
                                            ? 'bg-gradient-to-r from-accent to-cyan-500 text-slate-900 rounded-br-md' 
                                            : 'bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-bl-md'
                                    }`}
                                    aria-live={msg.role === 'model' ? 'polite' : undefined}
                                    aria-atomic="true"
                                >
                                    <p className="text-sm whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                                </div>
                                {msg.role === 'user' && (
                                    <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-slate-700/50 border border-slate-600 flex items-center justify-center">
                                        <UserIcon className="h-4 w-4 text-slate-400" />
                                    </div>
                                )}
                            </div>
                        ))}
                        {isLoading && messages[messages.length - 1]?.role === 'user' && (
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                                    <BotIcon className="h-4 w-4 text-accent" />
                                </div>
                                <div className="rounded-2xl px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-bl-md">
                                    <div className="flex items-center space-x-1.5">
                                        <span className="h-2 w-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '-0.3s' }}></span>
                                        <span className="h-2 w-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '-0.15s' }}></span>
                                        <span className="h-2 w-2 bg-accent rounded-full animate-bounce"></span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                </div>

                {/* Input */}
                <footer className="p-4 bg-slate-800/30 border-t border-slate-700/50">
                    <div className="flex items-center gap-3">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && !isLoading && handleSend()}
                            placeholder="Type your question..."
                            className="flex-1 bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all"
                            disabled={isLoading}
                        />
                        <button 
                            onClick={handleSend} 
                            disabled={isLoading} 
                            className="p-3 rounded-xl bg-gradient-to-r from-accent to-cyan-500 text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500" 
                            aria-label="Send message"
                        >
                            <SendIcon className="w-5 h-5" />
                        </button>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Chatbot;
