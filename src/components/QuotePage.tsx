import React from 'react';
import FloatingHearts from './FloatingHearts';
import TypewriterText from './TypewriterText';

interface QuotePageProps {
  quote: string;
  name: string;
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrevious: () => void;
  backgroundClass: string;
  quoteImage: string;
}

const QuotePage: React.FC<QuotePageProps> = ({
  quote,
  name,
  currentPage,
  totalPages,
  onNext,
  onPrevious,
  backgroundClass,
  quoteImage,
}) => {
  // Replace "Babe" with the person's name
  const personalizedQuote = quote.replace(/Babe/g, name);

  return (
    <div className={`min-h-screen flex flex-col ${backgroundClass} relative overflow-hidden`}>
      <FloatingHearts />
      
      <div className="flex-1 flex flex-col justify-center items-center p-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Image */}
            <div className="flex-shrink-0">
              <img 
                src={quoteImage} 
                alt="Sweet cartoon illustration" 
                className="w-64 h-36 md:w-80 md:h-44 object-cover rounded-2xl romantic-shadow"
              />
            </div>
            
            {/* Quote */}
            <div className="flex-1">
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 md:p-8 romantic-shadow">
                <div className="text-lg md:text-xl leading-relaxed text-white font-medium">
                  <TypewriterText text={personalizedQuote} speed={30} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 z-10 gap-4 sm:gap-0">
        <button
          onClick={onPrevious}
          disabled={currentPage === 1}
          className="romantic-button disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none order-2 sm:order-1"
        >
          ← Previous
        </button>

        <div className="flex space-x-2 order-1 sm:order-2">
          {Array.from({ length: 12 }, (_, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index + 1 === currentPage
                  ? 'bg-white scale-125'
                  : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        <button
          onClick={onNext}
          className="romantic-button order-3"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default QuotePage;