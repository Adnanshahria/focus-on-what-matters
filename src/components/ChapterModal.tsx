import { useState, useEffect } from 'react';
import type { Chapter } from '../data/chapters';

interface ChapterModalProps {
    chapter: Chapter;
    onClose: () => void;
}

export function ChapterModal({ chapter, onClose }: ChapterModalProps) {
    const [activeTab, setActiveTab] = useState<'insights' | 'quotes' | 'practice' | 'reflection'>('insights');

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

                <div className="modal-content">
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
                                {chapter.goldenQuotes.map((quoteStr, idx) => {
                                    const [text, author] = quoteStr.includes('—')
                                        ? quoteStr.split('—').map(s => s.trim())
                                        : [quoteStr, null];

                                    return (
                                        <blockquote key={idx} className="quote">
                                            <p className="quote-text">{text}</p>
                                            {author && <footer className="quote-author">— {author}</footer>}
                                        </blockquote>
                                    );
                                })}
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
