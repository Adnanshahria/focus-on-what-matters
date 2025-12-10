import { useState, useEffect, useRef } from 'react';
import { searchChapters } from '../data/search';
import type { SearchResult } from '../data/search';

interface SearchProps {
    onResultSelect?: (chapterId: number) => void;
}

export function Search({ onResultSelect }: SearchProps) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [isExpanded, setIsExpanded] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (query.length >= 2) {
            const searchResults = searchChapters(query);
            setResults(searchResults);
            setShowResults(true);
        } else {
            setResults([]);
            setShowResults(false);
        }
    }, [query]);

    // Handle click outside to collapse
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsExpanded(false);
                setShowResults(false);
            }
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsExpanded(false);
                setShowResults(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    const handleIconClick = () => {
        setIsExpanded(true);
        // Use requestAnimationFrame for reliable focus
        requestAnimationFrame(() => {
            inputRef.current?.focus();
        });
    };

    const handleSelect = (chapterId: number) => {
        setQuery('');
        setIsExpanded(false);
        setShowResults(false);
        onResultSelect?.(chapterId);
    };

    return (
        <div className={`search-container ${isExpanded ? 'expanded' : ''}`} ref={containerRef}>
            <button
                className="search-icon-btn"
                onClick={handleIconClick}
                aria-label="Open search"
            >
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                </svg>
            </button>

            <div className="search-input-wrapper">
                <svg
                    className="search-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                </svg>
                <input
                    ref={inputRef}
                    type="text"
                    className="search-input"
                    placeholder="Search... (English or বাংলায়)"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => query.length >= 2 && setShowResults(true)}
                />
                <button
                    className="search-close-btn"
                    onClick={() => {
                        setIsExpanded(false);
                        setQuery('');
                        setShowResults(false);
                    }}
                    aria-label="Close search"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {showResults && results.length > 0 && (
                <div className="search-results">
                    {results.map((result) => (
                        <button
                            key={result.chapter.id}
                            className="search-result-item"
                            onClick={() => handleSelect(result.chapter.id)}
                        >
                            <span className="result-number">
                                {result.chapter.id}
                            </span>
                            <div className="result-content">
                                <span className="result-title">
                                    {result.chapter.chapterTitle}
                                </span>
                                <span className="result-preview">
                                    {result.chapter.coreInsights[0]?.title}
                                </span>
                            </div>
                            <div className="result-badges">
                                {result.matchedFields.includes('quotes') && (
                                    <span className="badge badge-gold">Quote</span>
                                )}
                                {result.matchedFields.includes('bengali') && (
                                    <span className="badge badge-emerald">বাংলা</span>
                                )}
                            </div>
                        </button>
                    ))}
                </div>
            )}

            {showResults && query.length >= 2 && results.length === 0 && (
                <div className="search-results">
                    <div className="search-no-results">
                        No chapters found for "{query}"
                    </div>
                </div>
            )}
        </div>
    );
}
