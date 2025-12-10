import { useState, useEffect, useRef } from 'react';
import type { Chapter } from '../data/chapters';

interface ChapterModalProps {
    chapter: Chapter;
    onClose: () => void;
    onPrevChapter?: () => void;
    onNextChapter?: () => void;
    hasPrevChapter?: boolean;
    hasNextChapter?: boolean;
}

// Tab order for swipe navigation
const TAB_ORDER: Array<'insights' | 'practice' | 'reflection' | 'quotes'> = [
    'insights', 'practice', 'reflection', 'quotes'
];

export function ChapterModal({ chapter, onClose, onPrevChapter, onNextChapter, hasPrevChapter, hasNextChapter }: ChapterModalProps) {
    const [activeTab, setActiveTab] = useState<'insights' | 'quotes' | 'practice' | 'reflection'>('insights');

    // Swipe handling - track both X and Y coordinates
    const touchStartX = useRef<number>(0);
    const touchEndX = useRef<number>(0);
    const touchStartY = useRef<number>(0);
    const touchEndY = useRef<number>(0);
    const isSwiping = useRef<boolean>(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        const touch = e.touches[0];
        touchStartX.current = touch.clientX;
        touchStartY.current = touch.clientY;
        // Initialize end values to start values to handle quick swipes
        touchEndX.current = touch.clientX;
        touchEndY.current = touch.clientY;
        isSwiping.current = true;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isSwiping.current) return;
        const touch = e.touches[0];
        touchEndX.current = touch.clientX;
        touchEndY.current = touch.clientY;
    };

    const handleTouchEnd = () => {
        if (!isSwiping.current) return;
        isSwiping.current = false;

        const swipeThreshold = 50;
        const diffX = touchStartX.current - touchEndX.current;
        const diffY = touchStartY.current - touchEndY.current;

        // Only process if there was actual movement
        if (Math.abs(diffX) < 10 && Math.abs(diffY) < 10) {
            return; // This was a tap, not a swipe
        }

        // Determine if swipe is more horizontal or vertical
        const isHorizontalSwipe = Math.abs(diffX) > Math.abs(diffY);

        if (isHorizontalSwipe && Math.abs(diffX) > swipeThreshold) {
            // Horizontal swipe - switch tabs
            const currentIndex = TAB_ORDER.indexOf(activeTab);

            if (diffX > 0) {
                // Swiped left - go to next tab
                const nextIndex = (currentIndex + 1) % TAB_ORDER.length;
                setActiveTab(TAB_ORDER[nextIndex]);
            } else {
                // Swiped right - go to previous tab
                const prevIndex = (currentIndex - 1 + TAB_ORDER.length) % TAB_ORDER.length;
                setActiveTab(TAB_ORDER[prevIndex]);
            }
        } else if (!isHorizontalSwipe && Math.abs(diffY) > swipeThreshold) {
            // Vertical swipe - switch chapters
            if (diffY > 0 && hasNextChapter && onNextChapter) {
                // Swiped up - go to next chapter
                onNextChapter();
            } else if (diffY < 0 && hasPrevChapter && onPrevChapter) {
                // Swiped down - go to previous chapter
                onPrevChapter();
            }
        }
    };

    // Close on escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
            // Restore scroll position logic if needed, but usually 'unset' works
        };
    }, []);

    return (
        <div className="chapter-modal-overlay" onClick={onClose}>
            <div className="chapter-modal" onClick={e => e.stopPropagation()}>
                <header className="modal-header">
                    <div className="chapter-title-group">
                        <div className="modal-chapter-badge">Chapter {chapter.id}</div>
                        {chapter.sectionTitle && (
                            <span className="section-label">{chapter.sectionTitle}</span>
                        )}
                        <h2 className="chapter-title">{chapter.chapterTitle}</h2>
                    </div>
                    <button className="close-btn" onClick={onClose} aria-label="Close modal">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </header>

                <div
                    className="modal-content"
                    ref={contentRef}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* Tab Navigation */}
                    <nav className="content-tabs">
                        <button
                            className={`tab-btn ${activeTab === 'insights' ? 'active' : ''}`}
                            onClick={() => setActiveTab('insights')}
                        >
                            মূল অন্তর্দৃষ্টি
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'practice' ? 'active' : ''}`}
                            onClick={() => setActiveTab('practice')}
                        >
                            অনুশীলন
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'reflection' ? 'active' : ''}`}
                            onClick={() => setActiveTab('reflection')}
                        >
                            পর্যালোচনা
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'quotes' ? 'active' : ''}`}
                            onClick={() => setActiveTab('quotes')}
                        >
                            Golden Quotes
                        </button>
                    </nav>

                    {/* Tab Content */}
                    <div className="tab-content">
                        {activeTab === 'insights' && (
                            <div className="insights-grid bengali-text">
                                {chapter.coreInsights.map((insight, idx) => (
                                    <div key={idx} className="insight-card">
                                        <h4 className="insight-title">{insight.title}</h4>
                                        <p className="insight-content">{insight.content}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'quotes' && (
                            <div className="golden-quotes-section">
                                {chapter.goldenQuotes.map((quoteObj, idx) => (
                                    <blockquote key={idx} className="quote">
                                        <p className="quote-text">{quoteObj.quote}</p>
                                        <footer className="quote-author">— {quoteObj.author}</footer>
                                    </blockquote>
                                ))}
                            </div>
                        )}

                        {activeTab === 'practice' && (
                            <div className="practice-section bengali-text">
                                <div className="practice-header">
                                    <span className="practice-icon">🎯</span>
                                    <h3>অনুশীলন</h3>
                                </div>
                                <p className="practice-content">{chapter.practicalApplication}</p>
                            </div>
                        )}

                        {activeTab === 'reflection' && (
                            <div className="reflection-section bengali-text">
                                <div className="critical-reflection">
                                    <h4>সমালোচনামূলক বিশ্লেষণ</h4>
                                    <p>{chapter.criticalReflection}</p>
                                </div>
                                <div className="outcomes-grid">
                                    <div className="outcome-card individual">
                                        <span className="outcome-icon">👤</span>
                                        <h5>ব্যক্তিগত</h5>
                                        <p>{chapter.expectedOutcomes.individual}</p>
                                    </div>
                                    <div className="outcome-card social">
                                        <span className="outcome-icon">👥</span>
                                        <h5>সামাজিক</h5>
                                        <p>{chapter.expectedOutcomes.social}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
