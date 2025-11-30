
import React, { useState, useEffect } from 'react';

const command = '❯ ~ connect --host singlestore-cluster';

const TerminalWindow: React.FC = () => {
    const [text, setText] = useState('');
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        let typingInterval: number;
        // Typing effect
        const startTyping = () => {
            let i = 0;
            setText('');
            typingInterval = window.setInterval(() => {
                if (i < command.length) {
                    setText(command.substring(0, i + 1));
                    i++;
                } else {
                    clearInterval(typingInterval);
                    // Pause and restart
                    setTimeout(startTyping, 5000);
                }
            }, 80);
        };

        startTyping();

        // Blinking cursor effect
        const cursorInterval = setInterval(() => {
            setShowCursor(c => !c);
        }, 530);

        return () => {
            clearInterval(typingInterval);
            clearInterval(cursorInterval);
        };
    }, []);

    return (
        <div className="bg-[#1A1B26]/50 backdrop-blur-sm border border-slate-700 rounded-xl shadow-2xl shadow-fuchsia-500/10">
            <div className="flex items-center gap-2 p-3 bg-slate-800/50 rounded-t-xl border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="flex-grow text-center text-sm text-slate-400">s2-cluster-prod-01</div>
            </div>
            <div className="p-6 font-mono text-green-400 text-sm min-h-[100px]">
                <code>
                    {text}
                    <span className={`bg-green-400 w-2 h-4 inline-block ml-1 transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
                </code>
            </div>
        </div>
    );
};

export default TerminalWindow;
