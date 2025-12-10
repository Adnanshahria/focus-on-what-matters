import type { ReactNode } from 'react';
import { Search } from './Search';

interface LayoutProps {
    children: ReactNode;
    onSearch?: (chapterId: number) => void;
}

export function Layout({ children, onSearch }: LayoutProps) {
    return (
        <div className="app-layout">
            {/* Header */}
            <header className="app-header">
                <div className="header-content">
                    <div className="logo-section">
                        <div className="logo-icon">
                            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                                <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
                                <path
                                    d="M16 8v8l6 3"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                        <div className="logo-text">
                            <h1>Stoic Guide</h1>
                        </div>
                    </div>

                    <Search onResultSelect={onSearch} />
                </div>
            </header>


            {/* Main Content */}
            <main className="app-main">
                {children}
            </main>

            {/* Footer */}
            <footer className="app-footer">
                <div className="footer-content">
                    <p>
                        Based on <em>"Focus on What Matters"</em> by Darius Foroux
                    </p>
                    <p className="bengali-text">
                        ৮৩টি অধ্যায় • স্টয়িক দর্শন • বাংলায় সারসংক্ষেপ
                    </p>
                </div>
            </footer>
        </div>
    );
}
