
import React from 'react';

interface AboutProps {
    content: string;
}

const About: React.FC<AboutProps> = ({ content }) => {
    return (
        <p className="text-slate-400">{content}</p>
    );
};

export default About;
