import React, { useState } from 'react';
import FloatingHearts from './FloatingHearts';

interface WelcomeScreenProps {
  onStart: (name: string) => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  const [name, setName] = useState('');

  const handleStart = () => {
    if (name.trim()) {
      onStart(name.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleStart();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center romantic-gradient-sunset relative overflow-hidden">
      <FloatingHearts />
      
      <div className="text-center z-10 p-8 max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            💕 Love Journey 💕
          </h1>
          <p className="text-xl text-white/90 leading-relaxed drop-shadow-md">
            Enter your beautiful name to begin this journey of love
          </p>
        </div>

        <div className="space-y-6">
          <div className="relative">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Your beautiful name..."
              className="w-full px-6 py-4 text-lg rounded-full border-2 border-white/30 bg-white/20 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:border-white/60 focus:bg-white/30 transition-all duration-300"
            />
          </div>
          
          <button
            onClick={handleStart}
            disabled={!name.trim()}
            className="romantic-button w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-lg"
          >
            Start the Journey 🌸
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;