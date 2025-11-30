
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

    useEffect(scrollToBottom, [messages, isLoading]);

    const handleSend = () => {
        if (input.trim()) {
            sendMessage(input);
            setInput('');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" aria-modal="true" role="dialog">
            <div className="flex flex-col w-full max-w-lg h-[80vh] bg-slate-800/80 border border-slate-700 rounded-lg shadow-2xl mx-4">
                <header className="flex items-center justify-between p-4 border-b border-slate-700">
                    <h2 className="text-lg font-bold text-slate-200">Ask Me Anything!</h2>
                    <button 
                        onClick={onClose} 
                        className="p-1 rounded-full text-slate-400 hover:bg-slate-700 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500" 
                        aria-label="Close chat"
                    >
                        <CloseIcon className="w-6 h-6" />
                    </button>
                </header>

                <div className="flex-1 p-4 overflow-y-auto">
                    <div className="space-y-6">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                                {msg.role === 'model' && <div className="flex-shrink-0 h-8 w-8 rounded-full bg-fuchsia-500/20 flex items-center justify-center"><BotIcon className="h-5 w-5 text-fuchsia-400" /></div>}
                                <div 
                                    className={`max-w-md rounded-lg px-4 py-2 ${msg.role === 'user' ? 'bg-fuchsia-600 text-white rounded-br-none' : 'bg-slate-700 text-slate-300 rounded-bl-none'}`}
                                    aria-live={msg.role === 'model' ? 'polite' : undefined}
                                    aria-atomic="true"
                                >
                                    <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                                </div>
                                {msg.role === 'user' && <div className="flex-shrink-0 h-8 w-8 rounded-full bg-slate-600 flex items-center justify-center"><UserIcon className="h-5 w-5 text-slate-300" /></div>}
                            </div>
                        ))}
                        {isLoading && messages[messages.length - 1]?.role === 'user' && (
                             <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-fuchsia-500/20 flex items-center justify-center"><BotIcon className="h-5 w-5 text-fuchsia-400" /></div>
                                <div className="max-w-md rounded-lg px-4 py-2 bg-slate-700 text-slate-300 rounded-bl-none">
                                    <div className="flex items-center space-x-1">
                                        <span className="h-2 w-2 bg-fuchsia-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                        <span className="h-2 w-2 bg-fuchsia-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                        <span className="h-2 w-2 bg-fuchsia-400 rounded-full animate-bounce"></span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                </div>

                <footer className="p-4 border-t border-slate-700">
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && !isLoading && handleSend()}
                            placeholder="Type your question..."
                            className="flex-1 bg-slate-700 border border-slate-600 rounded-full px-4 py-2 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                            disabled={isLoading}
                        />
                        <button onClick={handleSend} disabled={isLoading} className="p-3 rounded-full bg-fuchsia-600 text-white disabled:bg-slate-600 hover:bg-fuchsia-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500" aria-label="Send message">
                            <SendIcon className="w-5 h-5" />
                        </button>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Chatbot;
