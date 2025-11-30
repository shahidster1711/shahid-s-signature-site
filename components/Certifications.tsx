
import React from 'react';
import { CertificationItem } from '../types.ts';
import ExternalLinkIcon from './icons/ExternalLinkIcon.tsx';
import Card from './common/Card.tsx';

interface CertificationsProps {
    items: CertificationItem[];
}

const Certifications: React.FC<CertificationsProps> = ({ items }) => {
    return (
        <ul className="group/list">
            {items.map((item, index) => (
                <Card key={index}>
                    <div className="z-10 sm:col-span-8">
                        <h3 className="font-medium leading-snug text-slate-200">
                            <div className="group/link font-bold flex items-center hover:text-fuchsia-400 transition-colors focus:outline-none focus-visible:text-fuchsia-400 rounded-sm">
                                {item.name}
                                <ExternalLinkIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                            </div>
                        </h3>
                        <p className="mt-1 text-sm text-slate-400">
                            Credential ID: {item.credentialId}
                        </p>
                        {item.validity && (
                            <p className="mt-1 text-xs text-slate-500">
                                {item.validity}
                            </p>
                        )}
                    </div>
                </Card>
            ))}
        </ul>
    );
};

export default Certifications;
