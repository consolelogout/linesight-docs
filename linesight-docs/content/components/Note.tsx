// components/Note.tsx
import React from 'react';

// This SVG icon is designed to match the image: a solid blue circle with a white 'i'
const InfoIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    className="h-5 w-5"
  >
    {/* Blue circle background */}
    <circle cx="10" cy="10" r="9" fill="#2563EB" /> {/* Tailwind's blue-600 */}
    {/* White 'i' symbol */}
    <path
      d="M10 10.5a.75.75 0 01-.75-.75V6a.75.75 0 011.5 0v3.75a.75.75 0 01-.75.75zM10 13a.75.75 0 100 1.5.75.75 0 000-1.5z"
      fill="white"
    />
  </svg>
);

interface NoteProps {
  children: React.ReactNode;
}

const Note: React.FC<NoteProps> = ({ children }) => {
  return (
    // 1. Main container: flex, rounded, and clips overflow
    <div
      className="
        flex                // Use flex to layout the border-bar and content
        my-4                // Vertical margin for spacing
        bg-gray-900         // The dark background
        rounded-lg          // Use larger rounding to match the image
        overflow-hidden     // CRITICAL: This clips children to the rounded corners
        shadow-sm
      "
    >
      {/* 2. The Left Border Bar: A dedicated div */}
      <div className="w-1 flex-shrink-0 bg-blue-600" />

      {/* 3. Content Area */}
      <div className="flex items-start p-4">
        <div className="mr-3 mt-0.5 flex-shrink-0">
          <InfoIcon />
        </div>
        <div className="text-gray-300">{children}</div>
      </div>
    </div>
  );
};

export default Note;