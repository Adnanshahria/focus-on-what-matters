import { useState, useEffect } from 'react';
import { searchChapters } from '../data/search';
import type { SearchResult } from '../data/search';

interface SearchProps {
    onResultSelect?: (chapterId: number) => void;
}

export function Search({ onResultSelect }: SearchProps) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (query.length >= 2) {
            const searchResults = searchChapters(query);
            setResults(searchResults);
            setIsOpen(true);
        } else {
            setResults([]);
            setIsOpen(false);
        }
    }, [query]);

    const handleSelect = (chapterId: number) => {
        setQuery('');
        setIsOpen(false);
        onResultSelect?.(chapterId);
    };

    return (
        <div className="search-container">
            <svg
                className="search-icon"
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
            <input
                type="text"
                className="search-input"
                placeholder="Search chapters... (English or বাংলায়)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => query.length >= 2 && setIsOpen(true)}
            />

            {isOpen && results.length > 0 && (
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

            {isOpen && query.length >= 2 && results.length === 0 && (
                <div className="search-results">
                    <div className="search-no-results">
                        No chapters found for "{query}"
                    </div>
                </div>
            )}
        </div>
    );
}
