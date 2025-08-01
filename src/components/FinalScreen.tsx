import React, { useEffect, useState } from 'react';
import FloatingHearts from './FloatingHearts';

interface FinalScreenProps {
  name: string;
  onReplay: () => void;
  onPrevious: () => void;
  onNext?: () => void;
  showNext?: boolean;
}

const FinalScreen: React.FC<FinalScreenProps> = ({ name, onReplay, onPrevious, onNext, showNext }) => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col romantic-gradient-starry relative overflow-hidden">
      <FloatingHearts />
      
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 50 }, (_, index) => (
            <div
              key={index}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              ✨
            </div>
          ))}
        </div>
      )}
      
      <div className="flex-1 flex flex-col justify-center items-center p-6 z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 romantic-shadow">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-relaxed">
              Thank you for reading, {name}.
            </h1>
            
            <div className="text-6xl animate-pulse mb-8">
              💖
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 z-10 gap-4 sm:gap-0">
        <button
          onClick={onPrevious}
          className="romantic-button order-2 sm:order-1"
        >
          ← Previous
        </button>

        <div className="flex space-x-2 order-1 sm:order-2">
          {Array.from({ length: 13 }, (_, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === 12 ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        <button
          onClick={showNext && onNext ? onNext : onReplay}
          className="romantic-button order-3"
        >
          {showNext ? 'Continue →' : '🔄 Replay'}
        </button>
      </div>
    </div>
  );
};

export default FinalScreen;