import React, { useState } from "react";

export function HoverCard({ children }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { isHovered })
      )}
    </div>
  );
}

export function HoverCardTrigger({ children }) {
  return (
    <div className="cursor-pointer">
      {children}
    </div>
  );
}

export function HoverCardContent({ children, isHovered }) {
  return (
    <div
      className={`
        absolute z-50 bg-white p-4 shadow-lg rounded-lg 
        top-full left-0 mt-2 min-w-[200px]
        transform transition-all duration-200 ease-in-out
        ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
      `}
    >
      {children}
    </div>
  );
}

export default HoverCard;