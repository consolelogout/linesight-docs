import React from "react";
import { Lightbulb } from "lucide-react";

interface TipProps {
  children: React.ReactNode;
  className?: string;
}

const Tip: React.FC<TipProps> = ({ children, className = "" }) => {
  return (
    <div className={`callout-container tip-container ${className}`}>
      <div className="callout-icon-wrapper tip-icon-wrapper">
        <Lightbulb color="white" size={14} />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Tip;