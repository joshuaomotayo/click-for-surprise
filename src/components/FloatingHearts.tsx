import React from 'react';

const FloatingHearts: React.FC = () => {
  return (
    <div className="floating-hearts">
      {Array.from({ length: 9 }, (_, index) => (
        <div key={index} className="heart">
          💖
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;