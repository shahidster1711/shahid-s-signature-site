
import React from 'react';
import VisuallyHidden from './VisuallyHidden.tsx';

interface IconButtonProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({ href, label, children }) => {
  return (
    <a
      className="block rounded-sm text-slate-400 transition-colors hover:text-fuchsia-400 focus:outline-none focus-visible:text-fuchsia-400 focus-visible:ring-2 focus-visible:ring-fuchsia-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${label} (opens in a new tab)`}
      title={label}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </a>
  );
};

export default IconButton;
