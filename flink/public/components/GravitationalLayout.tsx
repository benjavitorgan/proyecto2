import React, { useState, useEffect } from 'react';

const GravitationalLayout: React.FC = () => {
  const [elements, setElements] = useState<{ x: number; y: number }[]>([]);

  const applyGravity = () => {
    const updatedElements = elements.map(element => ({
      ...element,
      x: element.x,
      y: element.y + 0.5, // Adjust the gravity strength as needed
    }));
    setElements(updatedElements);
  };

  useEffect(() => {
    const interval = setInterval(applyGravity, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen bg-gray-100">
      {elements.map((element, index) => (
        <div
          key={index}
          className="absolute w-10 h-10 bg-blue-500 rounded-full"
          style={{ top: `${element.y}px`, left: `${element.x}px` }}
        ></div>
      ))}
    </div>
  );
};

export default GravitationalLayout;
