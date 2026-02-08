import React from 'react';

const TechIcon = ({ name, className = '' }) => {
  const common = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    className: `tech-icon ${className}`.trim(),
    'aria-hidden': 'true',
    focusable: 'false',
  };

  switch (name.toLowerCase()) {
    case 'python':
      return (
        <svg {...common} role="img">
          <path d="M7 7a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v3H7V7Z" fill="currentColor" opacity="0.7" />
          <path d="M17 17a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-3h10v3Z" fill="currentColor" />
          <circle cx="10" cy="6.5" r="1" fill="#fff" />
          <circle cx="14" cy="17.5" r="1" fill="#fff" />
        </svg>
      );
    case 'sql':
      return (
        <svg {...common} role="img">
          <ellipse cx="12" cy="6" rx="7" ry="3.5" fill="currentColor" opacity="0.8" />
          <path d="M5 6v8c0 1.9 3.1 3.5 7 3.5s7-1.6 7-3.5V6" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case 'aws':
      return (
        <svg {...common} role="img">
          <path d="M6 14a4 4 0 0 1 4-4 4.5 4.5 0 0 1 8.4 2.2A3.2 3.2 0 0 1 18 18H8a3 3 0 0 1-2-4Z" fill="currentColor" />
        </svg>
      );
    case 'docker':
      return (
        <svg {...common} role="img">
          <rect x="4" y="11" width="4" height="4" rx="1" fill="currentColor" />
          <rect x="9" y="11" width="4" height="4" rx="1" fill="currentColor" opacity="0.8" />
          <rect x="14" y="11" width="4" height="4" rx="1" fill="currentColor" opacity="0.6" />
          <path d="M3 16h18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" fill="currentColor" opacity="0.5" />
        </svg>
      );
    case 'git':
      return (
        <svg {...common} role="img">
          <path d="M12 3 4 11l2 2 2-2 4 4-2 2 2 2 8-8-8-8Z" fill="currentColor" />
          <circle cx="8" cy="11" r="1.4" fill="#fff" />
          <circle cx="12" cy="15" r="1.4" fill="#fff" />
        </svg>
      );
    case 'email':
      return (
        <svg {...common} role="img">
          <rect x="4" y="6" width="16" height="12" rx="2.5" fill="currentColor" />
          <path d="M5 7.5 12 12l7-4.5" stroke="#fff" strokeWidth="1.6" fill="none" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg {...common} role="img">
          <rect x="4" y="4" width="16" height="16" rx="3" fill="currentColor" />
          <circle cx="8.3" cy="9" r="1.3" fill="#fff" />
          <rect x="7.2" y="11" width="2.2" height="6" fill="#fff" />
          <rect x="11" y="11" width="2.2" height="6" fill="#fff" />
          <path d="M13.2 11c1.6 0 2.6 1.2 2.6 2.9V17h-2.2v-3.1c0-.8-.4-1.4-1.1-1.4-.7 0-1.1.6-1.1 1.4V17h-2.2v-6h2.2v.9c.4-.6 1.1-.9 1.8-.9Z" fill="#fff" />
        </svg>
      );
    case 'github':
      return (
        <svg {...common} role="img">
          <circle cx="12" cy="12" r="9" fill="currentColor" />
          <path d="M9.2 17.5c.2-.7.2-1.4.2-2.3-2.2.3-2.8-1-2.8-1s-.4-1 1-1.4c.4-.1.8-.1 1.2-.1 0 0 .5-.7-.1-1.9 0 0 1.1 0 2.1 1 .6-.2 1.3-.3 2-.3s1.4.1 2 .3c1-1 2.1-1 2.1-1-.6 1.2-.1 1.9-.1 1.9.4 0 .8 0 1.2.1 1.4.4 1 1.4 1 1.4s-.6 1.3-2.8 1c0 .9 0 1.6.2 2.3" stroke="#fff" strokeWidth="1.2" fill="none" />
        </svg>
      );
    case 'html':
    case 'css':
    case 'latex':
      return (
        <svg {...common} role="img">
          <path d="M8 7 4 12l4 5" stroke="currentColor" strokeWidth="1.8" fill="none" />
          <path d="M16 7 20 12l-4 5" stroke="currentColor" strokeWidth="1.8" fill="none" />
        </svg>
      );
    default:
      return (
        <svg {...common} role="img">
          <circle cx="12" cy="12" r="6" fill="currentColor" opacity="0.7" />
          <path d="M8.5 12h7" stroke="#fff" strokeWidth="1.6" />
        </svg>
      );
  }
};

export default TechIcon;
