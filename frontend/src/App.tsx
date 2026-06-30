import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useThemeMode } from './context/ThemeContext';
import { Discover } from './pages/Discover';
import { 
  Compass, 
  BookOpen, 
  Search, 
  Bell, 
  User, 
  Layers, 
  Book, 
  Sparkles,
  TrendingUp,
  AlertCircle
} from 'lucide-react';

// Define the available pages for our internal application routing system
type ActivePage = 'discover' | 'ai-assistant' | 'library' | 'alerts' | 'profile';

function App() {
  const { mode, toggleThemeMode } = useThemeMode();
  const [currentPage, setCurrentPage] = useState<ActivePage>('discover');
  const [globalSearch, setGlobalSearch] = useState('');

  // Renders the designated view matching the current internal route state
  const renderPageContent = () => {
    switch (currentPage) {
      case 'discover':
        return <Discover />;
      
      case 'ai-assistant':
        return (
          <div className="space-y-6">
            <header className="mb-8 border-b border-radar-border/20 pb-6 transition-colors duration-300 [.book-mode-active_&]:border-book-border/60 [.book-mode-active_&]:pb-8">
              <span className="text-xs font-semibold tracking-wider text-accent-primary uppercase flex items-center gap-2 mb-2 transition-colors duration-300 [.book-mode-active_&]:text-book-text/60 [.book-mode-active_&]:font-serif [.book-mode-active_&]:italic">
                <Sparkles className="w-3.5 h-3.5" /> LLM-DeepSearch Active
              </span>
              <h1 className="text-4xl font-extrabold tracking-tighter text-white font-sans transition-all duration-300 [.book-mode-active_&]:text-book-text [.book-mode-active_&]:font-serif [.book-mode-active_&]:italic [.book-mode-active_&]:font-normal">
                AI Deep Insight Engine
              </h1>
              <p className="text-sm text-radar-muted mt-2 font-sans transition-all duration-300 [.book-mode-active_&]:text-book-text/80 [.book-mode-active_&]:font-serif [.book-mode-active_&]:italic">
                Describe your exact emotional preference or cross-compare themes. Our engine looks past keywords to map conceptual structural links.
              </p>
            </header>
            <div className="glass-panel p-8 rounded-3xl border border-radar-border transition-all duration-300 [.book-mode-active_&]:bg-book-surface [.book-mode-active_&]:border-book-border/80 [.book-mode-active_&]:shadow-none">
              <textarea 
                placeholder="Ex: 'I want a sci-fi book that feels like Interstellar but focuses heavily on corporate espionage instead of family ties...'" 
                className="w-full h-40 bg-radar-elevated/50 border border-radar-border/60 rounded-2xl p-4 text-sm text-white placeholder-radar-muted focus:outline-none focus:border-accent-primary transition-all duration-300 [.book-mode-active_&]:bg-book-bg [.book-mode-active_&]:border-book-border [.book-mode-active_&]:text-book-text [.book-mode-active_&]:placeholder-book-text/40 [.book-mode-active_&]:font-serif"
              />
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs text-radar-muted transition-colors duration-300 [.book-mode-active_&]:text-book-text/60 [.book-mode-active_&]:font-serif">Powered by OpenAI / Anthropic APIs</span>
                <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-accent-primary hover:bg-accent-hover text-white text-xs font-semibold tracking-wide transition-all shadow-lg shadow-accent-primary/20 [.book-mode-active_&]:bg-book-text [.book-mode-active_&]:text-book-bg [.book-mode-active_&]:hover:opacity-90 [.book-mode-active_&]:shadow-none">
                  Analyze Query
                </button>
              </div>
            </div>
          </div>
        );

      case 'library':
        return (
          <div className="space-y-8">
            <header className="border-b border-radar-border/20 pb-6 transition-colors duration-300 [.book-mode-active_&]:border-book-border/60 [.book-mode-active_&]:pb-8">
              <h1 className="text-4xl font-extrabold tracking-tighter text-white font-sans transition-all duration-300 [.book-mode-active_&]:text-book-text [.book-mode-active_&]:font-serif [.book-mode-active_&]:italic [.book-mode-active_&]:font-normal">My Personal Library</h1>
              <p className="text-sm text-radar-muted mt-2 font-sans transition-all duration-300 [.book-mode-active_&]:text-book-text/80 [.book-mode-active_&]:font-serif [.book-mode-active_&]:italic">Manage your read states, core favorites, and offline collections.</p>
            </header>
            
            <div className="flex gap-3 border-b border-radar-border/40 pb-4 transition-colors duration-300 [.book-mode-active_&]:border-book-border/40">
              {['Reading', 'Want to Read', 'Finished', 'Favorites'].map((tab, idx) => (
                <button key={tab} className={`px-4 py-1.5 rounded-xl text-xs font-medium transition-all duration-300 ${idx === 0 ? 'bg-radar-elevated text-white border border-radar-border/80 [.book-mode-active_&]:bg-book-text [.book-mode-active_&]:text-book-bg [.book-mode-active_&]:border-transparent' : 'text-radar-muted hover:text-white [.book-mode-active_&]:text-book-text/60 [.book-mode-active_&]:hover:text-book-text [.book-mode-active_&]:font-serif'}`}>
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass-panel p-6 rounded-2xl flex items-center justify-between transition-all duration-300 [.book-mode-active_&]:bg-book-surface [.book-mode-active_&]:border-book-border/80 [.book-mode-active_&]:shadow-none">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-14 bg-radar-elevated rounded flex items-center justify-center border border-radar-border transition-colors duration-300 [.book-mode-active_&]:bg-book-bg [.book-mode-active_&]:border-book-border"><BookOpen className="w-4 h-4 text-radar-muted transition-colors duration-300 [.book-mode-active_&]:text-book-text/60" /></div>
                  <div>
                    <h4 className="text-sm font-semibold text-white font-sans transition-colors duration-300 [.book-mode-active_&]:text-book-text [.book-mode-active_&]:font-serif">{navItemInfo('Project Hail Mary')}</h4>
                    <p className="text-xs text-radar-muted font-sans transition-colors duration-300 [.book-mode-active_&]:text-book-text/70 [.book-mode-active_&]:font-serif">Andy Weir</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-accent-primary/10 text-accent-primary text-[10px] font-semibold tracking-wide transition-colors duration-300 [.book-mode-active_&]:bg-book-bg [.book-mode-active_&]:text-book-text/80 [.book-mode-active_&]:border [.book-mode-active_&]:border-book-border [.book-mode-active_&]:font-serif">READING</span>
              </div>
            </div>
          </div>
        );

      case 'alerts':
        return (
          <div className="space-y-6">
            <header className="border-b border-radar-border/20 pb-6 transition-colors duration-300 [.book-mode-active_&]:border-book-border/60 [.book-mode-active_&]:pb-8">
              <h1 className="text-4xl font-extrabold tracking-tighter text-white font-sans transition-all duration-300 [.book-mode-active_&]:text-book-text [.book-mode-active_&]:font-serif [.book-mode-active_&]:italic [.book-mode-active_&]:font-normal">Active Price Trackers</h1>
              <p className="text-sm text-radar-muted mt-2 font-sans transition-all duration-300 [.book-mode-active_&]:text-book-text/80 [.book-mode-active_&]:font-serif [.book-mode-active_&]:italic">Real-time delta tracking across Amazon, Flipkart, Bookswagon, and Crossword.</p>
            </header>
            <div className="glass-panel p-8 rounded-2xl border border-radar-border text-center max-w-xl mx-auto mt-12 transition-all duration-300 [.book-mode-active_&]:bg-book-surface [.book-mode-active_&]:border-book-border/80 [.book-mode-active_&]:shadow-none">
              <div className="w-12 h-12 rounded-full bg-radar-elevated border border-radar-border flex items-center justify-center mx-auto mb-4 transition-colors duration-300 [.book-mode-active_&]:bg-book-bg [.book-mode-active_&]:border-book-border">
                <Bell className="w-5 h-5 text-accent-primary transition-colors duration-300 [.book-mode-active_&]:text-book-text" />
              </div>
              <h3 className="text-md font-bold text-white mb-1 font-sans transition-colors duration-300 [.book-mode-active_&]:text-book-text [.book-mode-active_&]:font-serif">No Alerts Created</h3>
              <p className="text-xs text-radar-muted mb-4 font-sans transition-colors duration-300 [.book-mode-active_&]:text-book-text/70 [.book-mode-active_&]:font-serif">Search for a book and tap "Set Target Price" to monitor market variances.</p>
            </div>
          </div>
        );

      case 'profile':
        return (
          <div className="space-y-8">
            <header className="border-b border-radar-border/20 pb-6 transition-colors duration-300 [.book-mode-active_&]:border-book-border/60 [.book-mode-active_&]:pb-8">
              <h1 className="text-4xl font-extrabold tracking-tighter text-white font-sans transition-all duration-300 [.book-mode-active_&]:text-book-text [.book-mode-active_&]:font-serif [.book-mode-active_&]:italic [.book-mode-active_&]:font-normal">Account Control</h1>
              <p className="text-sm text-radar-muted mt-2 font-sans transition-all duration-300 [.book-mode-active_&]:text-book-text/80 [.book-mode-active_&]:font-serif [.book-mode-active_&]:italic">Identity parameters, authentication keys, and preference configurations.</p>
            </header>
            <div className="glass-panel p-6 rounded-2xl flex items-center gap-6 max-w-2xl transition-all duration-300 [.book-mode-active_&]:bg-book-surface [.book-mode-active_&]:border-book-border/80 [.book-mode-active_&]:shadow-none">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-accent-primary to-purple-400 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-accent-primary/25 transition-all duration-300 [.book-mode-active_&]:from-book-text [.book-mode-active_&]:to-book-text/80 [.book-mode-active_&]:shadow-none">
                U
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-sans transition-colors duration-300 [.book-mode-active_&]:text-book-text [.book-mode-active_&]:font-serif">Beta Tester</h3>
                <p className="text-xs text-radar-muted font-sans transition-colors duration-300 [.book-mode-active_&]:text-book-text/70 [.book-mode-active_&]:font-serif">developer@readradar.app</p>
                <div className="mt-3 flex gap-2">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-radar-elevated text-radar-muted font-mono uppercase transition-colors duration-300 [.book-mode-active_&]:bg-book-bg [.book-mode-active_&]:text-book-text/70 [.book-mode-active_&]:font-serif">Sci-Fi</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-radar-elevated text-radar-muted font-mono uppercase transition-colors duration-300 [.book-mode-active_&]:bg-book-bg [.book-mode-active_&]:text-book-text/70 [.book-mode-active_&]:font-serif">Thrillers</span>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return <Discover />;
    }
  };

  // Helper function to manage layout specific content strings safely
  function navItemInfo(str: string) {
    return str;
  }

  return (
    <div className="min-h-screen flex font-sans transition-colors duration-500">
      
      {/* ========================================================================= */}
      {/* GLOBAL SIDEBAR COMPONENT                                                   */}
      {/* ========================================================================= */}
      <aside className="w-64 border-r border-radar-border/40 bg-radar-surface/30 backdrop-blur-lg flex flex-col justify-between p-4 fixed h-full z-20 transition-all duration-500 [.book-mode-active_&]:bg-book-surface/40 [.book-mode-active_&]:border-book-border/40">
        <div>
          {/* ReadRadar Logo Corner - Fully Adapts to Font and Color */}
          <div className="flex items-center gap-3 px-2 py-4 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-accent-primary to-purple-400 flex items-center justify-center shadow-md shadow-accent-primary/20 transition-all duration-300 [.book-mode-active_&]:bg-none [.book-mode-active_&]:bg-book-text [.book-mode-active_&]:shadow-none">
              <Layers className="w-4 h-4 text-white transition-colors duration-300 [.book-mode-active_&]:text-book-bg" />
            </div>
            <span className="font-bold tracking-tight text-lg bg-clip-text text-transparent bg-gradient-to-r from-white to-radar-muted transition-all duration-300 [.book-mode-active_&]:from-book-text [.book-mode-active_&]:to-book-text [.book-mode-active_&]:font-serif [.book-mode-active_&]:italic [.book-mode-active_&]:font-semibold">
              ReadRadar
            </span>
          </div>

          {/* Sidebar Nav Buttons */}
          <nav className="space-y-1">
            {[
              { id: 'discover', icon: Compass, label: 'Discover' },
              { id: 'ai-assistant', icon: Sparkles, label: 'AI Assistant' },
              { id: 'library', icon: BookOpen, label: 'My Library' },
              { id: 'alerts', icon: Bell, label: 'Price Alerts' },
              { id: 'profile', icon: User, label: 'Profile' },
            ].map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id as ActivePage)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all group duration-200 ${
                    isActive 
                      ? 'bg-radar-elevated text-white border border-radar-border/80 shadow-sm [.book-mode-active_&]:bg-book-bg/80 [.book-mode-active_&]:text-book-text [.book-mode-active_&]:border-book-border' 
                      : 'text-radar-muted hover:text-white hover:bg-radar-elevated/40 [.book-mode-active_&]:text-book-text/70 [.book-mode-active_&]:hover:bg-book-bg/30 [.book-mode-active_&]:hover:text-book-text'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className={`w-4 h-4 transition-colors duration-300 ${
                      isActive ? 'text-accent-primary [.book-mode-active_&]:text-book-text' : 'text-radar-muted group-hover:text-white [.book-mode-active_&]:group-hover:text-book-text'
                    }`} />
                    <span className="transition-all duration-300 [.book-mode-active_&]:font-serif">{item.label}</span>
                  </div>
                  {isActive && (
                    <motion.div 
                      layoutId="sidebarGlow" 
                      className="w-1 h-4 bg-accent-primary rounded-full [.book-mode-active_&]:bg-book-text" 
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Theme Mode Selector Button */}
        <div className="border-t border-radar-border/40 pt-4 transition-colors duration-300 [.book-mode-active_&]:border-book-border/40">
          <button 
            onClick={toggleThemeMode}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-radar-elevated/40 border border-radar-border/60 hover:border-accent-primary/40 transition-all text-xs font-medium text-radar-muted hover:text-white [.book-mode-active_&]:bg-book-bg/80 [.book-mode-active_&]:border-book-border [.book-mode-active_&]:text-book-text"
          >
            <div className="flex items-center gap-2">
              <Book className="w-4 h-4 text-accent-primary transition-colors duration-300 [.book-mode-active_&]:text-book-text" />
              <span className="transition-all duration-300 [.book-mode-active_&]:font-serif">{mode === 'modern' ? 'Switch to Book Mode' : 'Switch to Modern UI'}</span>
            </div>
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-radar-border text-white transition-colors duration-300 [.book-mode-active_&]:bg-book-border [.book-mode-active_&]:text-book-text font-mono">
              ⌥B
            </span>
          </button>
        </div>
      </aside>

      {/* ========================================================================= */}
      {/* MAIN VIEWPORT ARCHITECTURE CONTAINER                                       */}
      {/* ========================================================================= */}
      <div className="flex-1 pl-64 flex flex-col min-h-screen">
        
        {/* Sticky Translucent Blur Header */}
        <header className="h-16 border-b border-radar-border/30 bg-radar-bg/40 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between px-8 transition-colors duration-500 [.book-mode-active_&]:bg-book-bg/50 [.book-mode-active_&]:border-book-border/30">
          <div className="relative w-96">
            <Search className="w-4 h-4 text-radar-muted absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 [.book-mode-active_&]:text-book-text/50" />
            <input 
              type="text"
              value={globalSearch}
              onChange={(e) => setGlobalSearch(e.target.value)}
              placeholder="Omni-search index globally..."
              className="w-full bg-radar-elevated/40 border border-radar-border/50 rounded-xl pl-10 pr-4 py-1.5 text-xs text-white placeholder-radar-muted focus:outline-none focus:border-accent-primary/60 transition-all duration-300 [.book-mode-active_&]:bg-book-surface [.book-mode-active_&]:border-book-border [.book-mode-active_&]:text-book-text [.book-mode-active_&]:placeholder-book-text/40 [.book-mode-active_&]:font-serif"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <div 
              onClick={() => setCurrentPage('profile')}
              className="w-8 h-8 rounded-full bg-radar-elevated border border-radar-border flex items-center justify-center cursor-pointer hover:border-accent-primary transition-all duration-300 [.book-mode-active_&]:bg-book-surface [.book-mode-active_&]:border-book-border"
            >
              <User className="w-4 h-4 text-radar-muted transition-colors duration-300 [.book-mode-active_&]:text-book-text" />
            </div>
          </div>
        </header>

        {/* Primary Screen Render Frame */}
        <main className="flex-1 p-8 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              {renderPageContent()}
            </motion.div>
          </AnimatePresence>
        </main>

      </div>
    </div>
  );
}

export default App;