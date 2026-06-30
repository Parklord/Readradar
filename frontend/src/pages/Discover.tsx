import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, BookOpen, X, Filter } from 'lucide-react';

// === Mock Data for Core Discovery Index ===
const trendingBooks = [
  { id: 1, title: 'Project Hail Mary', author: 'Andy Weir', rating: 4.8, pages: 476, category: 'Sci-Fi', snippet: 'A lone astronaut must save humanity from an extinction-level threat...' },
  { id: 2, title: 'Atomic Habits', author: 'James Clear', rating: 4.9, pages: 306, category: 'Self-Help', snippet: 'Tiny changes, remarkable results. An easy framework to build good habits...' },
  { id: 3, title: 'Verity', author: 'Colleen Hoover', rating: 4.5, pages: 336, category: 'Thriller', snippet: 'A struggling co-writer finds an unfinished manuscript containing horrifying admissions...' },
];

const featuredBooks = [
  { id: 4, title: 'The Silent Patient', author: 'Alex Michaelides', rating: 4.6, price: 11.99 },
  { id: 5, title: 'Invisible Women', author: 'Caroline Criado Perez', rating: 4.7, price: 14.50 },
  { id: 6, title: 'Dune', author: 'Frank Herbert', rating: 4.8, price: 9.99 },
];

export const Discover: React.FC = () => {
  const [activeSearch, setActiveSearch] = useState('');
  const [showAiModal, setShowAiModal] = useState(false);

  return (
    <div className="space-y-12 max-w-7xl mx-auto">
      
      {/* 1. PAGE HEADER */}
      <header className="mb-10 border-b border-radar-border/20 pb-6 transition-colors duration-300 [.book-mode-active_&]:border-book-border/60 [.book-mode-active_&]:pb-8">
        <h1 className="text-4xl font-extrabold tracking-tighter text-white font-sans transition-all duration-300 [.book-mode-active_&]:text-book-text [.book-mode-active_&]:font-serif [.book-mode-active_&]:italic [.book-mode-active_&]:font-normal">
          Discover
        </h1>
        <p className="text-sm text-radar-muted max-w-xl mt-2 font-sans transition-all duration-300 [.book-mode-active_&]:text-book-text/80 [.book-mode-active_&]:font-serif [.book-mode-active_&]:italic">
          Find your next obsession through ISBN, author, or our specialized AI agent. Track market pricing and hidden gems.
        </p>
      </header>

      {/* 2. PREMIUM SEARCH MECHANISM */}
      <section className="relative">
        <div className="glass-panel p-2 rounded-2xl flex items-center shadow-glass transition-all duration-300 hover:border-accent-primary/50 group [.book-mode-active_&]:bg-book-surface [.book-mode-active_&]:border-book-border/80 [.book-mode-active_&]:shadow-none">
          <Search className="w-5 h-5 text-radar-muted ml-3 transition-colors duration-300 [.book-mode-active_&]:text-book-text/60" />
          <input 
            type="text"
            value={activeSearch}
            onChange={(e) => setActiveSearch(e.target.value)}
            placeholder="Search by Title, Author, ISBN..."
            className="flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder-radar-muted focus:outline-none transition-all duration-300 [.book-mode-active_&]:text-book-text [.book-mode-active_&]:placeholder-book-text/40 [.book-mode-active_&]:font-serif"
          />

          <button 
            onClick={() => setShowAiModal(true)}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-accent-primary text-white text-xs font-semibold tracking-wide shadow-md hover:bg-accent-hover transition-all shadow-accent-primary/20 [.book-mode-active_&]:bg-book-text [.book-mode-active_&]:text-book-bg [.book-mode-active_&]:hover:opacity-90 [.book-mode-active_&]:shadow-none"
          >
            <Sparkles className="w-4 h-4" />
            AI Assistant
          </button>
        </div>
      </section>

      {/* 3. TRENDING NOW GRID */}
      <section>
        <div className="flex items-center justify-between mb-8 border-b border-radar-border/10 pb-2 transition-colors duration-300 [.book-mode-active_&]:border-book-border/40">
          <h2 className="text-lg font-bold tracking-tight text-white font-sans transition-all duration-300 [.book-mode-active_&]:font-serif [.book-mode-active_&]:text-book-text [.book-mode-active_&]:text-xl">
            Trending Publications
          </h2>
          <button className="flex items-center gap-1.5 text-xs font-medium text-radar-muted hover:text-white transition-colors duration-300 [.book-mode-active_&]:text-book-text/70 [.book-mode-active_&]:hover:text-book-text">
            <span>Filter</span>
            <Filter className="w-3 h-3" />
          </button>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
          }}
        >
          {trendingBooks.map((book) => (
            <motion.div 
              key={book.id}
              className="glass-panel p-6 rounded-2xl interactive-glow flex flex-col justify-between transition-all duration-300 border border-radar-border/40 [.book-mode-active_&]:bg-transparent [.book-mode-active_&]:border-transparent [.book-mode-active_&]:border-l-book-border/60 [.book-mode-active_&]:rounded-none [.book-mode-active_&]:shadow-none [.book-mode-active_&]:pl-6 [.book-mode-active_&]:pr-0 [.book-mode-active_&]:hover:border-l-book-text"
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-accent-primary transition-colors duration-300 [.book-mode-active_&]:text-book-text/50 [.book-mode-active_&]:font-serif">
                    {book.category}
                  </span>
                  <span className="font-mono text-xs text-emerald-400 transition-colors duration-300 [.book-mode-active_&]:font-serif [.book-mode-active_&]:text-book-text/80">
                    ★ {book.rating}
                  </span>
                </div>
                
                <h3 className="text-md font-bold text-white mt-1 font-sans tracking-tight transition-all duration-300 [.book-mode-active_&]:text-book-text [.book-mode-active_&]:font-serif [.book-mode-active_&]:text-lg [.book-mode-active_&]:font-normal">
                  {book.title}
                </h3>
                <p className="text-xs text-radar-muted mb-4 font-sans transition-colors duration-300 [.book-mode-active_&]:text-book-text/70 [.book-mode-active_&]:font-serif [.book-mode-active_&]:italic">
                  by {book.author}
                </p>
                
                {/* Book-Mode exclusive summary snippet */}
                <p className="hidden text-xs text-book-text/80 leading-relaxed font-serif mt-2 border-t border-book-border/30 pt-3 italic [.book-mode-active_&]:block">
                  "{book.snippet}"
                </p>
              </div>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-radar-border/20 text-[11px] font-mono text-radar-muted transition-colors duration-300 [.book-mode-active_&]:border-book-border/40 [.book-mode-active_&]:font-serif [.book-mode-active_&]:text-book-text/60">
                <span>INDEX N°0{book.id}</span>
                <span>{book.pages} PGS</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. CURATED MARKET SELECTIONS */}
      <section className="pt-4">
        <div className="mb-6">
          <h2 className="text-lg font-bold tracking-tight text-white font-sans transition-all duration-300 [.book-mode-active_&]:font-serif [.book-mode-active_&]:text-book-text [.book-mode-active_&]:text-xl">
            Curated Market Selections
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredBooks.map((book) => (
            <div 
              key={book.id} 
              className="glass-panel p-5 rounded-xl flex flex-col justify-between group transition-all duration-300 [.book-mode-active_&]:bg-book-surface/50 [.book-mode-active_&]:border-book-border [.book-mode-active_&]:shadow-none"
            >
              <div>
                <h3 className="text-sm font-semibold text-white font-sans transition-colors duration-300 [.book-mode-active_&]:font-serif [.book-mode-active_&]:text-book-text">
                  {book.title}
                </h3>
                <p className="text-xs text-radar-muted font-sans transition-colors duration-300 [.book-mode-active_&]:font-serif [.book-mode-active_&]:text-book-text/60">
                  {book.author}
                </p>
              </div>

              <div className="flex items-center justify-between mt-6 pt-3 border-t border-radar-border/20 transition-colors duration-300 [.book-mode-active_&]:border-book-border/40">
                <span className="text-sm font-bold text-white font-mono transition-colors duration-300 [.book-mode-active_&]:text-book-text [.book-mode-active_&]:font-serif">
                  ${book.price.toFixed(2)}
                </span>
                <button className="text-xs font-medium text-accent-primary hover:text-white transition-colors duration-300 [.book-mode-active_&]:text-book-text [.book-mode-active_&]:underline [.book-mode-active_&]:font-serif">
                  Deals →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. DYNAMIC AI CAPABILITY DRAWER */}
      <AnimatePresence>
        {showAiModal && (
          <motion.div 
            className="fixed inset-0 bg-black/80 backdrop-blur-xs z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowAiModal(false)}
          >
            <motion.div 
              className="w-full max-w-2xl bg-radar-surface rounded-2xl border border-radar-border shadow-2xl p-6 overflow-hidden relative transition-all duration-300 [.book-mode-active_&]:bg-book-surface [.book-mode-active_&]:border-book-border [.book-mode-active_&]:shadow-none"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-radar-border/60 transition-colors duration-300 [.book-mode-active_&]:border-book-border">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent-primary transition-colors duration-300 [.book-mode-active_&]:text-book-text" />
                  <h3 className="text-md font-bold text-white font-sans transition-colors duration-300 [.book-mode-active_&]:font-serif [.book-mode-active_&]:text-book-text">
                    ReadRadar Natural Language Agent
                  </h3>
                </div>
                <button onClick={() => setShowAiModal(false)} className="text-radar-muted hover:text-white transition-colors duration-300 [.book-mode-active_&]:text-book-text">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <textarea 
                placeholder="Ex: 'Find me an atmospheric mystery narrative set in the Pacific Northwest...'"
                className="w-full h-36 bg-radar-elevated/60 border border-radar-border/80 rounded-xl p-4 text-sm text-white placeholder-radar-muted focus:outline-none focus:border-accent-primary transition-all duration-300 [.book-mode-active_&]:bg-book-bg [.book-mode-active_&]:border-book-border [.book-mode-active_&]:text-book-text [.book-mode-active_&]:placeholder-book-text/30 [.book-mode-active_&]:font-serif"
              />

              <div className="flex justify-end mt-4">
                <button className="px-5 py-2 rounded-lg bg-accent-primary text-white text-xs font-semibold hover:bg-accent-hover transition-all duration-300 [.book-mode-active_&]:bg-book-text [.book-mode-active_&]:text-book-bg">
                  Run Query
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};