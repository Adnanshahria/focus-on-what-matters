import { useState } from 'react';
import type { Chapter } from '../data/chapters';

interface ChapterCardProps {
    chapter: Chapter;
    isExpanded?: boolean;
    onToggle?: () => void;
}

export function ChapterCard({ chapter, isExpanded = false, onToggle }: ChapterCardProps) {
    const [activeTab, setActiveTab] = useState<'insights' | 'quotes' | 'practice' | 'reflection'>('insights');

    return (
        <article
            className={`chapter-card ${isExpanded ? 'expanded' : ''}`}
            onClick={() => !isExpanded && onToggle?.()}
        >
            {/* Header */}
            <header className="chapter-header">
                <div className="chapter-number-badge">
                    {chapter.id}
                </div>
                <div className="chapter-title-group">
                    {chapter.sectionTitle && (
                        <span className="section-label">{chapter.sectionTitle}</span>
                    )}
                    <h2 className="chapter-title">{chapter.chapterTitle}</h2>
                </div>
                {isExpanded && (
                    <button
                        className="close-btn"
                        onClick={(e) => { e.stopPropagation(); onToggle?.(); }}
                        aria-label="Close chapter"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                )}
            </header>

            {/* Expanded Content */}
            {isExpanded && (
                <div className="chapter-content">
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
                            Critical View
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
                                {chapter.goldenQuotes.map((quote, idx) => (
                                    <blockquote key={idx} className="quote">
                                        <p className="quote-text">{quote}</p>
                                    </blockquote>
                                ))}
                            </div>
                        )}

                        {activeTab === 'practice' && (
                            <div className="practice-section bengali-text">
                                <div className="practice-header">
                                    <span className="practice-icon">🎯</span>
                                    <h3>Practice It</h3>
                                </div>
                                <p className="practice-content">{chapter.practicalApplication}</p>
                            </div>
                        )}

                        {activeTab === 'reflection' && (
                            <div className="reflection-section">
                                <div className="critical-reflection">
                                    <h4>Critical Reflection</h4>
                                    <p>{chapter.criticalReflection}</p>
                                </div>
                                <div className="outcomes-grid">
                                    <div className="outcome-card individual">
                                        <span className="outcome-icon">👤</span>
                                        <h5>Individual</h5>
                                        <p>{chapter.expectedOutcomes.individual}</p>
                                    </div>
                                    <div className="outcome-card social">
                                        <span className="outcome-icon">👥</span>
                                        <h5>Social</h5>
                                        <p>{chapter.expectedOutcomes.social}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Preview Footer */}
            {!isExpanded && (
                <footer className="chapter-preview-footer">
                    <span className="preview-insight bengali-text">
                        {chapter.coreInsights[0]?.title}
                    </span>
                    <span className="read-more">
                        Read more →
                    </span>
                </footer>
            )}
        </article>
    );
}
