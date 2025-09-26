"use client";

import { createContext, useContext, useEffect, useState } from "react";

type IntroContextType = {
  isIntroEnded: boolean;
  setIntroEnded: (value: boolean) => void;
};

const IntroContext = createContext<IntroContextType | undefined>(undefined);

export const IntroProvider = ({ children }: { children: React.ReactNode }) => {
  const [isIntroEnded, setIsIntroEnded] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const played = sessionStorage.getItem("introPlayed") === "true";
    setIsIntroEnded(played);
  }, []);

  const setIntroEnded = (value: boolean) => {
    setIsIntroEnded(value);
    if (value) sessionStorage.setItem("introPlayed", "true");
  };

  if (!hasMounted) return null; // prevent hydration mismatch

  return (
    <IntroContext.Provider value={{ isIntroEnded, setIntroEnded }}>
      {children}
    </IntroContext.Provider>
  );
};

export const useIntro = () => {
  const ctx = useContext(IntroContext);
  if (!ctx) throw new Error("useIntro must be used within IntroProvider");
  return ctx;
};
