import React, { useState, useEffect } from 'react';
import WelcomeScreen from '../components/WelcomeScreen';
import QuotePage from '../components/QuotePage';
import FinalScreen from '../components/FinalScreen';
import quote1Peace from '../assets/quote1-peace.webp';
import quote2Strength from '../assets/quote2-strength.webp';
import quote3Miracle from '../assets/quote3-miracle.webp';
import quote4Sunshine from '../assets/quote4-sunshine.webp';
import quote5Strong from '../assets/quote5-strong.webp';
import quote6Worth from '../assets/quote6-worth.webp';
import quote7Gentle from '../assets/quote7-gentle.webp';
import quote8Bestfriend from '../assets/quote8-bestfriend.webp';
import quote9Language from '../assets/quote9-language.webp';
import quote10Enough from '../assets/quote10-enough.webp';

const quotes = [
  "Babe, we met back in January. From the moment we met, I felt something real. Things started well, but then life asked us both to pause and heal.",
  
  "We needed some time apart. It wasn't easy, but we stayed in touch. I've always been sure of what I feel for you. This story is important to me — always will be.",
  
  "Throughout the ups and downs, we kept talking. There were moments when stopping seemed like the easiest choice. Sometimes I felt disappointed, sometimes sad. Yet, the peace I find with you outweighs any doubt.",
  
  "I remember when I surprised your family with that gift. Seeing them laugh and smile brought me such joy. Those moments when I could be part of your world meant everything to me.",
  
  "I look forward to seeing the best version of you — The version who loves fully, The version ready to share everything, The version open to something real with me.",
  
  "I hold onto the memories we made — The dates, the gifts, The joy I saw in your eyes when you accepted them. And your daily 'thank you for yesterday' means more than you know.",
  
  "With you, I don't have to pretend. I'm free to be myself. I appreciate your honesty, openness, and beautiful spirit.",
  
  "I often wonder what you're doing, And I cherish the random moments you share — The photos, the messages, Small things that brighten my day.",
  
  "When you face challenges, I'm here. Your worries feel like my own, Sometimes I forget my own because I want to support you. And that connection means a lot.",
  
  "I believe in us and what we can build together. I'm ready to make a plan and move forward — if you're open to it.",
  
  "I don't want to rush or pressure anything. I respect where we've been and where we could go. This moment is about honesty and hope — Hoping we can find a way forward together.",
  
  "So, Babe, I ask simply: Are you willing to give us another chance? To explore what we can be — calmly, openly, and honestly? I'm here, ready if you are."
];

const backgroundClasses = [
  "romantic-gradient-sunset",    // Quote 1
  "romantic-gradient-rose",      // Quote 2
  "romantic-gradient-dreamy",    // Quote 3
  "romantic-gradient-starry",    // Quote 4 (new family gift slide)
  "romantic-gradient-sunset",    // Quote 5
  "romantic-gradient-rose",      // Quote 6
  "romantic-gradient-dreamy",    // Quote 7
  "romantic-gradient-sunset",    // Quote 8
  "romantic-gradient-starry",    // Quote 9
  "romantic-gradient-rose",      // Quote 10
  "romantic-gradient-dreamy",    // Quote 11
  "romantic-gradient-sunset",    // Quote 12
];

const quoteImages = [
  quote1Peace,      // Quote 1
  quote2Strength,   // Quote 2
  quote3Miracle,    // Quote 3
  quote4Sunshine,   // Quote 4 (new family gift slide)
  quote5Strong,     // Quote 5
  quote6Worth,      // Quote 6
  quote7Gentle,     // Quote 7
  quote8Bestfriend, // Quote 8
  quote9Language,   // Quote 9
  quote10Enough,    // Quote 10
  quote1Peace,      // Quote 11 (reuse image)
  quote2Strength,   // Quote 12 (reuse image)
];

const Lovebook: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0); // 0 = welcome, 1-12 = quotes, 13 = final, 14 = reply
  const [girlfriendName, setGirlfriendName] = useState('');

  // Load from localStorage on mount
  useEffect(() => {
    const savedName = localStorage.getItem('lovebook-girlfriend-name');
    const savedPage = localStorage.getItem('lovebook-current-page');
    
    if (savedName) {
      setGirlfriendName(savedName);
      if (savedPage) {
        setCurrentPage(parseInt(savedPage, 10));
      } else {
        setCurrentPage(1); // Skip welcome if name exists
      }
    }
  }, []);

  // Save to localStorage when state changes
  useEffect(() => {
    if (girlfriendName) {
      localStorage.setItem('lovebook-girlfriend-name', girlfriendName);
    }
  }, [girlfriendName]);

  useEffect(() => {
    if (currentPage > 0) {
      localStorage.setItem('lovebook-current-page', currentPage.toString());
    }
  }, [currentPage]);

  const handleStart = (name: string) => {
    setGirlfriendName(name);
    setCurrentPage(1);
  };

  const handleNext = () => {
    if (currentPage < 14) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleReplay = () => {
    setCurrentPage(1);
  };

  // Welcome Screen
  if (currentPage === 0) {
    return <WelcomeScreen onStart={handleStart} />;
  }

  // Final Screen (after all quotes)
  if (currentPage === 13) {
    return (
      <FinalScreen
        name={girlfriendName}
        onReplay={handleReplay}
        onPrevious={handlePrevious}
        onNext={handleNext}
        showNext={true}
      />
    );
  }

  // Reply Screen
  if (currentPage === 14) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center romantic-gradient-starry relative overflow-hidden p-6">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 romantic-shadow">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to reply? 💕
            </h2>
            <p className="text-white/90 mb-8 leading-relaxed">
              I'd love to hear from you, {girlfriendName}
            </p>
            <a
              href="https://wa.link/ydfo6p"
              target="_blank"
              rel="noopener noreferrer"
              className="romantic-button inline-block w-full text-lg"
            >
              Click me to reply 💬
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-6 left-6">
          <button
            onClick={handlePrevious}
            className="romantic-button"
          >
            ← Back
          </button>
        </div>
      </div>
    );
  }

  // Quote Pages (1-12)
  const quoteIndex = currentPage - 1;
  return (
    <QuotePage
      quote={quotes[quoteIndex]}
      name={girlfriendName}
      currentPage={currentPage}
      totalPages={12}
      onNext={handleNext}
      onPrevious={handlePrevious}
      backgroundClass={backgroundClasses[quoteIndex]}
      quoteImage={quoteImages[quoteIndex]}
    />
  );
};

export default Lovebook;