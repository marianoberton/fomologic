import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface ButtonSecondaryProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: "button" | "submit" | "reset";
  withIcon?: boolean;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({ 
  children, 
  className = '', 
  href, 
  onClick, 
  type = "button",
  withIcon = true 
}) => {
  const baseClasses = `
    group relative 
    inline-flex items-center justify-center gap-2 
    rounded-full border border-current 
    px-8 py-3 
    font-manrope text-sm font-bold uppercase tracking-wider text-current 
    backdrop-blur-sm
    transition-all duration-300 
    hover:border-[#CED600] hover:bg-[#CED600] hover:text-[#272727] 
    active:scale-95
    cursor-pointer
    ${className}
  `;

  const content = (
    <>
      <span>{children}</span>
      {withIcon && (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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
    <button type={type} className={baseClasses} onClick={onClick}>
      {content}
    </button>
  );
};

export default ButtonSecondary;
