import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { PageType, ModalType } from '../types';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onOpenModal: (modal: ModalType) => void;
  darkLogo?: boolean;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenModal,
  theme,
  toggleTheme,
}) => {
  const [scrolled, setScrolled] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--nav-bg)] backdrop-blur-[12px] border-b border-[var(--border-color)] shadow-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between gap-2 py-4 md:py-6 px-4 md:px-12 max-w-[1800px] mx-auto w-full global-mobile-container">
        {/* Left Element: Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="text-[14px] md:text-[18px] font-bold font-headline tracking-tight cursor-pointer transition-colors duration-300 shrink-0 text-[var(--text-primary)]"
          aria-label="GetGoLive Home"
        >
          GetGoLive
        </button>

        {/* Center Element: Floating Glass Pill */}
        <div className="bg-[var(--nav-bg)] backdrop-blur-[12px] border border-[var(--border-color)] px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-2.5 md:gap-3.5 shadow-2xl shrink-0">
          {/* Left Side: [ ☰ Menu ] */}
          <button
            onClick={() => onOpenModal('menu')}
            className="flex items-center gap-1.5 text-[11px] md:text-sm font-medium text-[var(--text-primary)] hover:opacity-80 transition-opacity cursor-pointer group"
            aria-label="Open menu"
          >
            <span className="text-xs group-hover:scale-110 transition-transform">☰</span>
            <span className="hidden md:inline">Menu</span>
          </button>

          {/* Micro 1px vertical hairline divider */}
          <div className="w-[1px] h-3.5 bg-[var(--border-color)]" />

          {/* Right Side: Circular Theme Toggle (28px x 28px) */}
          <button
            onClick={toggleTheme}
            className="w-[28px] h-[28px] rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden shrink-0 shadow-sm"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <div
              className={`transition-transform duration-300 ease-out flex items-center justify-center ${
                theme === 'dark' ? 'rotate-180' : 'rotate-0'
              }`}
            >
              {theme === 'light' ? (
                <Sun className="w-3.5 h-3.5 text-[var(--text-primary)]" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-[var(--text-primary)]" />
              )}
            </div>
          </button>
        </div>

        {/* Right Element: Solid CTA Pill Button */}
        <button
          onClick={() => onOpenModal('contact')}
          className="bg-[var(--cta-bg)] text-[var(--cta-text)] font-semibold text-[11px] md:text-[14px] px-[12px] py-[6px] md:px-6 md:py-3 rounded-full hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-lg flex items-center gap-1 shrink-0 whitespace-nowrap"
        >
          <span className="hidden md:inline">+</span>
          <span>Get in touch</span>
        </button>
      </div>
    </nav>
  );
};
