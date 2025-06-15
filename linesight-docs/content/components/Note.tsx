import React from "react";
import { CircleAlert } from "lucide-react";

interface NoteProps {
  children: React.ReactNode;
  className?: string;
}

const Note: React.FC<NoteProps> = ({ children, className = "" }) => {
  return (
    <div className={`callout-container note-container ${className}`}>
      <div className="callout-icon-wrapper note-icon-wrapper">
        <CircleAlert size={18} strokeWidth={2.5} />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Note;