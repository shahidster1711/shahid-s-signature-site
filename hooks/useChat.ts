
import { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import { resumeData } from '../data/resumeData.ts';

interface Message {
    role: 'user' | 'model';
    text: string;
}

const useChat = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const chatRef = useRef<Chat | null>(null);

    useEffect(() => {
        const initChat = () => {
            try {
                if (!process.env.API_KEY) {
                    console.error("API_KEY environment variable not set.");
                    setMessages([{ role: 'model', text: "I'm sorry, but the AI assistant is not configured correctly. Please contact the site owner." }]);
                    return;
                }
                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY, vertexai: true });
                const systemInstruction = `You are an AI assistant for Shahid Moosa's portfolio website. Your goal is to answer questions from visitors and potential employers based *only* on the provided resume information. Be friendly, professional, and concise. If a question cannot be answered from the provided context, politely state that you don't have that information. Do not invent any details. Here is the resume information in JSON format: ${JSON.stringify(resumeData)}`;
                
                chatRef.current = ai.chats.create({
                    model: 'gemini-2.5-flash',
                    config: {
                        systemInstruction,
                    },
                });

                setMessages([{ role: 'model', text: "Hello! I'm Shahid's AI assistant. Feel free to ask me anything about his skills and experience." }]);
            } catch (error) {
                console.error("Failed to initialize Gemini chat:", error);
                setMessages([{ role: 'model', text: "Sorry, I'm having trouble connecting right now. Please try again later." }]);
            }
        };
        initChat();
    }, []);

    const sendMessage = async (message: string) => {
        if (!chatRef.current || isLoading) return;

        setIsLoading(true);
        const userMessage: Message = { role: 'user', text: message };
        setMessages(prev => [...prev, userMessage]);

        try {
            const stream = await chatRef.current.sendMessageStream({ message });
            
            let modelResponse = '';
            let firstChunk = true;

            for await (const chunk of stream) {
                if (firstChunk) {
                    setMessages(prev => [...prev, { role: 'model', text: '' }]);
                    firstChunk = false;
                }
                modelResponse += chunk.text;
                setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1] = { role: 'model', text: modelResponse };
                    return newMessages;
                });
            }
        } catch (error) {
            console.error("Failed to send message:", error);
            setMessages(prev => [...prev, { role: 'model', text: "Oops! Something went wrong. Please try again." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return { messages, sendMessage, isLoading };
};

export default useChat;
