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
  "Babe, from the moment you walked into my life, you've been my peace in chaos, my calm in the storm. I don't say this enough, but you are the strongest person I know — soft when you need to be, fierce when life calls for it. I admire you deeply.",
  
  "Babe, your smile gives me strength. Even when you're tired, you find a way to encourage others. I see you, I honor you, and I'm so proud of the woman you are — graceful, powerful, and unstoppable.",
  
  "Sometimes I just sit and think about how lucky I am. Babe, you love with your whole heart, you protect the people you care about, and you never give up. You're my personal miracle in human form.",
  
  "You've gone through so much, babe. And still, you shine like the sun. Your laughter heals me, your words lift me, and your presence feels like home. You deserve all the joy this world can offer.",
  
  "There are days I want to give up — but then I remember how you hold me, how you fight for us, how you never let life break you. Babe, you're the kind of strong I want our children to inherit.",
  
  "I hope you know, babe, that your worth isn't in what you do for others. It's in the heart you carry, the way you love, the way you show up even when you're hurting. I see all of it. And I love all of it.",
  
  "I know life hasn't always been fair to you, babe. But still, you've never let it change your heart. You're gentle, kind, and yet you carry strength that could move mountains. I'm lucky to know you. I'm honored to love you.",
  
  "Babe, your voice is the one I want to hear on good days, and the one I need on bad ones. You're not just my lover. You're my best friend, my safe place, and the one I turn to when I forget who I am.",
  
  "If love were a language, babe, you speak it fluently. Not just in words — in how you hold me when I'm weak, how you push me when I doubt myself, how you see the best in me always. That's rare. And I'll never take it for granted.",
  
  "Babe, I pray you never forget this: you are enough. Just as you are. You are beautiful in every way. You inspire me to be better, to love deeper, to live fully. You are everything I ever hoped for, and more."
];

const backgroundClasses = [
  "romantic-gradient-sunset",    // Quote 1
  "romantic-gradient-rose",      // Quote 2
  "romantic-gradient-dreamy",    // Quote 3
  "romantic-gradient-sunset",    // Quote 4
  "romantic-gradient-starry",    // Quote 5
  "romantic-gradient-rose",      // Quote 6
  "romantic-gradient-dreamy",    // Quote 7
  "romantic-gradient-sunset",    // Quote 8
  "romantic-gradient-starry",    // Quote 9
  "romantic-gradient-rose",      // Quote 10
];

const quoteImages = [
  quote1Peace,      // Quote 1
  quote2Strength,   // Quote 2
  quote3Miracle,    // Quote 3
  quote4Sunshine,   // Quote 4
  quote5Strong,     // Quote 5
  quote6Worth,      // Quote 6
  quote7Gentle,     // Quote 7
  quote8Bestfriend, // Quote 8
  quote9Language,   // Quote 9
  quote10Enough,    // Quote 10
];

const Lovebook: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0); // 0 = welcome, 1-10 = quotes, 11 = final
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
    if (currentPage < 11) {
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

  // Final Screen
  if (currentPage === 11) {
    return (
      <FinalScreen
        name={girlfriendName}
        onReplay={handleReplay}
        onPrevious={handlePrevious}
      />
    );
  }

  // Quote Pages (1-10)
  const quoteIndex = currentPage - 1;
  return (
    <QuotePage
      quote={quotes[quoteIndex]}
      name={girlfriendName}
      currentPage={currentPage}
      totalPages={11}
      onNext={handleNext}
      onPrevious={handlePrevious}
      backgroundClass={backgroundClasses[quoteIndex]}
      quoteImage={quoteImages[quoteIndex]}
    />
  );
};

export default Lovebook;