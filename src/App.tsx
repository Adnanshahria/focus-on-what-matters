import { useState, useRef, useEffect } from 'react';
import { Layout, ChapterCard } from './components';
import { chapters, sections } from './data/chapters';
import './App.css';

function App() {
  const [expandedChapterId, setExpandedChapterId] = useState<number | null>(null);
  const chapterRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  const handleChapterToggle = (chapterId: number) => {
    setExpandedChapterId(prev => prev === chapterId ? null : chapterId);
  };

  const handleSearchSelect = (chapterId: number) => {
    setExpandedChapterId(chapterId);
    // Scroll to chapter
    setTimeout(() => {
      const element = chapterRefs.current.get(chapterId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  // Close expanded chapter on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && expandedChapterId !== null) {
        setExpandedChapterId(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [expandedChapterId]);

  return (
    <Layout onSearch={handleSearchSelect}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">83 Chapters of Wisdom</div>
          <h1 className="hero-title">
            Focus on What Matters
          </h1>
          <p className="hero-subtitle">
            A comprehensive guide to Stoic philosophy with <span className="highlight">Golden Quotes</span> and <span className="bengali-text">বাংলায় সারসংক্ষেপ</span>
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">{chapters.length}</span>
              <span className="stat-label">Chapters</span>
            </div>
            <div className="stat">
              <span className="stat-value">{sections.length}</span>
              <span className="stat-label">Sections</span>
            </div>
            <div className="stat">
              <span className="stat-value">∞</span>
              <span className="stat-label">Insights</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <nav className="section-nav">
        {sections.map(section => (
          <a key={section.id} href={`#section-${section.id}`} className="section-pill">
            <span>{section.title}</span>
            {section.titleBengali && (
              <span className="bengali-text section-pill-bn">{section.titleBengali}</span>
            )}
          </a>
        ))}
      </nav>

      {/* Chapters Grid */}
      {sections.map(section => (
        <section key={section.id} id={`section-${section.id}`} className="chapters-section">
          <div className="section-header">
            <h2 className="section-title">{section.title}</h2>
            {section.titleBengali && (
              <span className="section-title-bn bengali-text">{section.titleBengali}</span>
            )}
            <span className="section-count">{section.chapters.length} chapters</span>
          </div>

          <div className="chapters-grid">
            {chapters
              .filter(ch => section.chapters.includes(ch.id))
              .map(chapter => (
                <div
                  key={chapter.id}
                  ref={el => { if (el) chapterRefs.current.set(chapter.id, el); }}
                >
                  <ChapterCard
                    chapter={chapter}
                    isExpanded={expandedChapterId === chapter.id}
                    onToggle={() => handleChapterToggle(chapter.id)}
                  />
                </div>
              ))
            }
          </div>
        </section>
      ))}

      {/* Coming Soon Message */}
      {chapters.length < 83 && (
        <div className="coming-soon">
          <p>
            📚 Currently showing {chapters.length} of 83 chapters.
            Full content coming soon!
          </p>
        </div>
      )}
    </Layout>
  );
}

export default App;
