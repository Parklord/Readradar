import React from 'react';
import { motion } from 'framer-motion';
import { useThemeMode } from '../context/ThemeContext';
import { 
  Compass, 
  BookOpen, 
  Search, 
  Bell, 
  User, 
  Layers, 
  Book, 
  Sparkles 
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<LayoutProps> = ({ children }) => {
  const { mode, toggleThemeMode } = useThemeMode();

  return (
    <div className="min-h-screen flex font-sans transition-colors duration-500">
      
      {/* SIDEBAR: Emulates the sleek, locked structures of Linear or Raycast */}
      <aside className="w-64 border-r border-radar-border/40 bg-radar-surface/30 backdrop-blur-lg flex flex-col justify-between p-4 fixed h-full z-20 transition-colors duration-500 body.book-mode-active:bg-book-surface/40 body.book-mode-active:border-book-border/40">
        <div>
          {/* Logo Branding */}
          <div className="flex items-center gap-3 px-2 py-4 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-accent-primary to-purple-400 flex items-center justify-center shadow-md shadow-accent-primary/20">
              <Layers className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold tracking-tight text-lg bg-clip-text text-transparent bg-gradient-to-r from-white to-radar-muted body.book-mode-active:from-book-text body.book-mode-active:to-book-text">
              ReadRadar
            </span>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-1">
            {[
              { icon: Compass, label: 'Discover' },
              { icon: Sparkles, label: 'AI Assistant' },
              { icon: BookOpen, label: 'My Library' },
              { icon: Bell, label: 'Price Alerts' },
              { icon: User, label: 'Profile' },
            ].map((item, index) => (
              <button
                key={index}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group duration-200 text-radar-muted hover:text-white hover:bg-radar-elevated/50 body.book-mode-active:text-book-text/70 body.book-mode-active:hover:bg-book-surface body.book-mode-active:hover:text-book-text"
              >
                <item.icon className="w-4 h-4 text-radar-muted group-hover:text-accent-primary transition-colors body.book-mode-active:group-hover:text-book-text" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Footer Area: Houses dynamic Mode Toggle */}
        <div className="border-t border-radar-border/40 pt-4 body.book-mode-active:border-book-border/40">
          <button 
            onClick={toggleThemeMode}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-radar-elevated/40 border border-radar-border/60 hover:border-accent-primary/40 transition-all text-xs font-medium text-radar-muted hover:text-white body.book-mode-active:bg-book-surface body.book-mode-active:border-book-border body.book-mode-active:text-book-text"
          >
            <div className="flex items-center gap-2">
              <Book className="w-4 h-4 text-accent-primary body.book-mode-active:text-book-text" />
              <span>{mode === 'modern' ? 'Switch to Book Mode' : 'Switch to Modern UI'}</span>
            </div>
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-radar-border text-white body.book-mode-active:bg-book-border body.book-mode-active:text-book-text font-mono">
              M
            </span>
          </button>
        </div>
      </aside>

      {/* MAIN CONTAINER CONTENT SPACE */}
      <div className="flex-1 pl-64 flex flex-col min-h-screen">
        
        {/* TOP BAR SEARCH ELEMENT */}
        <header className="h-16 border-b border-radar-border/30 bg-radar-bg/40 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between px-8 transition-colors duration-500 body.book-mode-active:bg-book-bg/50 body.book-mode-active:border-book-border/30">
          <div className="relative w-96">
            <Search className="w-4 h-4 text-radar-muted absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              placeholder="Search title, author, ISBN or ask AI..."
              className="w-full bg-radar-elevated/40 border border-radar-border/50 rounded-xl pl-10 pr-4 py-1.5 text-xs text-white placeholder-radar-muted focus:outline-none focus:border-accent-primary/60 transition-all body.book-mode-active:bg-book-surface body.book-mode-active:border-book-border body.book-mode-active:text-book-text body.book-mode-active:placeholder-book-text/40"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-radar-elevated border border-radar-border flex items-center justify-center cursor-pointer hover:border-accent-primary transition-all body.book-mode-active:bg-book-surface body.book-mode-active:border-book-border">
              <User className="w-4 h-4 text-radar-muted body.book-mode-active:text-book-text" />
            </div>
          </div>
        </header>

        {/* PAGE CONTENT CONTAINER VIEWPORT WITH FRAMER MOTION TRANSITIONS */}
        <main className="flex-1 p-8 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {children}
          </motion.div>
        </main>

      </div>
    </div>
  );
};