import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';
type Language = 'EN' | 'HI';
export type FestiveMode = 'janmashtami' | 'off';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  festiveMode: FestiveMode;
  setFestiveMode: (mode: FestiveMode) => void;
  toggleFestiveMode: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  EN: {
    'nav.home': 'Home',
    'nav.solutions': 'Solutions',
    'nav.ai_tools': 'AI Tools',
    'nav.pricing': 'Pricing',
    'nav.about': 'About',
    'nav.partner': 'Partner With Us',
    'nav.contact': 'Contact',
    'nav.get_started': 'Get Started',
    'nav.talk_expert': 'Talk to an Expert',
    'hero.headline': 'One Platform. Powerful Digital, Financial & AI Solutions.',
    'hero.subtitle': 'AVRX helps individuals and businesses build, grow, protect and manage their digital and financial future with modern technology-driven solutions.',
    'hero.explore': 'Explore Solutions',
    'hero.ai_assistant': 'Meet AVRX AI'
  },
  HI: {
    'nav.home': 'मुख्य पृष्ठ',
    'nav.solutions': 'समाधान',
    'nav.ai_tools': 'AI उपकरण',
    'nav.pricing': 'मूल्य निर्धारण',
    'nav.about': 'हमारे बारे में',
    'nav.partner': 'पार्टनर बनें',
    'nav.contact': 'संपर्क करें',
    'nav.get_started': 'शुरू करें',
    'nav.talk_expert': 'विशेषज्ञ से बात करें',
    'hero.headline': 'एक मंच। शक्तिशाली डिजिटल, वित्तीय और AI समाधान।',
    'hero.subtitle': 'AVRX व्यक्तियों और व्यवसायों को आधुनिक तकनीक संचालित समाधानों के साथ अपने डिजिटल और वित्तीय भविष्य को बनाने, विकसित करने, सुरक्षित करने और प्रबंधित करने में मदद करता है।',
    'hero.explore': 'समाधान देखें',
    'hero.ai_assistant': 'AVRX AI से मिलें'
  }
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('avrx_theme');
    return (saved as Theme) || 'dark';
  });

  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('avrx_lang');
    return (saved as Language) || 'EN';
  });

  // Clean Futuristic Theme (Festive theme removed as requested)
  const [festiveMode, setFestiveModeState] = useState<FestiveMode>('off');

  useEffect(() => {
    localStorage.removeItem('avrx_festive_mode');
    document.documentElement.classList.remove('theme-janmashtami');
  }, []);

  const setFestiveMode = (mode: FestiveMode) => {
    setFestiveModeState(mode);
  };

  const toggleFestiveMode = () => {
    setFestiveModeState(prev => (prev === 'janmashtami' ? 'off' : 'off'));
  };

  useEffect(() => {
    localStorage.setItem('avrx_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('avrx_lang', lang);
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations['EN']?.[key] || key;
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      toggleTheme, 
      festiveMode, 
      setFestiveMode, 
      toggleFestiveMode, 
      language, 
      setLanguage, 
      t 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
