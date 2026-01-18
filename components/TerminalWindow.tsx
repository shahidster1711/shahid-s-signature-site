
import React, { useState, useEffect, useRef } from 'react';

const commands = [
    { prompt: '❯ ', cmd: 'SELECT status FROM cloud_engineer WHERE name = "Shahid";', output: '┌─────────┐\n│ status  │\n├─────────┤\n│ ONLINE  │\n└─────────┘' },
    { prompt: '❯ ', cmd: 'memsqlctl cluster-status --all', output: '✓ Cluster: prod-01\n✓ Nodes: 6/6 healthy\n✓ Replication: sync\n✓ Uptime: 99.9%' },
    { prompt: '❯ ', cmd: 'aws rds describe-db-instances --query "DBInstances[].DBInstanceStatus"', output: '[\n  "available",\n  "available",\n  "available"\n]' },
];

const TerminalWindow: React.FC = () => {
    const [currentCommand, setCurrentCommand] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [showOutput, setShowOutput] = useState(false);
    const [showCursor, setShowCursor] = useState(true);
    const timeoutRefs = useRef<number[]>([]);

    useEffect(() => {
        const cmd = commands[currentCommand];
        const fullCommand = cmd.prompt + cmd.cmd;
        let charIndex = 0;
        let cancelled = false;
        
        // Clear any pending timeouts from previous runs
        timeoutRefs.current.forEach(id => clearTimeout(id));
        timeoutRefs.current = [];
        
        setDisplayText('');
        setShowOutput(false);

        const scheduleTimeout = (fn: () => void, delay: number) => {
            const id = window.setTimeout(() => {
                if (!cancelled) fn();
            }, delay);
            timeoutRefs.current.push(id);
            return id;
        };

        const typeCommand = () => {
            if (cancelled) return;
            if (charIndex < fullCommand.length) {
                setDisplayText(fullCommand.substring(0, charIndex + 1));
                charIndex++;
                scheduleTimeout(typeCommand, 40 + Math.random() * 30);
            } else {
                scheduleTimeout(() => {
                    setShowOutput(true);
                    scheduleTimeout(() => {
                        setCurrentCommand((prev) => (prev + 1) % commands.length);
                    }, 3000);
                }, 500);
            }
        };

        scheduleTimeout(typeCommand, 800);

        return () => {
            cancelled = true;
            timeoutRefs.current.forEach(id => clearTimeout(id));
            timeoutRefs.current = [];
        };
    }, [currentCommand]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(c => !c);
        }, 530);
        return () => clearInterval(cursorInterval);
    }, []);

    const cmd = commands[currentCommand];

    return (
        <div className="bg-slate-900/80 border border-slate-700/50 rounded-xl shadow-2xl shadow-accent/5 overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-slate-700/50">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/20"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/20"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/20"></div>
                </div>
                <div className="flex-grow text-center">
                    <span className="text-xs font-mono text-slate-500">shahid@cloud-workstation</span>
                </div>
            </div>
            
            {/* Terminal Body */}
            <div className="p-5 font-mono text-sm min-h-[180px] space-y-2">
                <div className="text-accent">
                    <span>{displayText}</span>
                    {!showOutput && (
                        <span className={`inline-block w-2 h-4 bg-accent ml-0.5 transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
                    )}
                </div>
                {showOutput && (
                    <pre className="text-slate-400 text-xs mt-3 animate-fadeIn whitespace-pre-wrap">{cmd.output}</pre>
                )}
            </div>
        </div>
    );
};

export default TerminalWindow;
