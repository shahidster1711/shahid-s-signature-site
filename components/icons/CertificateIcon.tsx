
import React from 'react';

const CertificateIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 21l-8-4.5v-9l8 4.5 8-4.5v9L12 21z" />
        <path d="M12 12l8-4.5" />
        <path d="M12 12v9" />
        <path d="M12 12L4 7.5" />
        <path d="M16 5.25l-8 4.5" />
    </svg>
);

export default CertificateIcon;
