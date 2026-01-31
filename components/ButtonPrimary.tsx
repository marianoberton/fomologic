import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ButtonPrimaryProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  showIcon?: boolean;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ children, className = '', href, onClick, type = "button", disabled, showIcon = true }) => {
  const baseClasses = `
    group relative inline-flex items-center justify-center gap-3
    rounded-full bg-[#CED600] text-[#272727]
    font-manrope font-bold uppercase tracking-wide
    px-8 py-4
    transition-all duration-300
    hover:scale-105 active:scale-95
    cursor-pointer
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
    ${className}
  `;

  const content = (
    <>
      <span>{children}</span>
      {showIcon && (
        <ArrowUpRight 
          size={20} 
          className="transition-transform duration-300 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]" 
        />
      )}
    </>
  );

  if (href) {
    if (href.startsWith('http') || href.startsWith('mailto:')) {
         return <a href={href} className={baseClasses} target="_blank" rel="noopener noreferrer">{content}</a>;
    }
    return <Link to={href} className={baseClasses}>{content}</Link>;
  }

  return (
    <button type={type} className={baseClasses} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
};

export default ButtonPrimary;
