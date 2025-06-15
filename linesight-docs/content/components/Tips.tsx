import React from 'react';

interface TipProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Tip: React.FC<TipProps> = ({ 
  title = "Tip", 
  children, 
  className = "" 
}) => {
  return (
    <div 
      className={`tip-container ${className}`}
      role="complementary"
      aria-labelledby="tip-title"
    >
      <div className="tip-header">
        <svg 
          className="tip-icon" 
          width="16" 
          height="16" 
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm2.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
        </svg>
        <h4 id="tip-title" className="tip-title">{title}</h4>
      </div>
      <div className="tip-content">
        {children}
      </div>
    </div>
  );
};