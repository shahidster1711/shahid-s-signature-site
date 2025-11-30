
import React from 'react';

const ChatIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M17 3.34a10 10 0 1 1-14.995 8.984L2 22l8.66-8.66A10 10 0 0 1 17 3.34z"></path>
        <path d="m15 9-2 2 2 2"></path>
        <path d="m9 9 2 2-2 2"></path>
    </svg>
);

export default ChatIcon;
