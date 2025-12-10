import type { Chapter } from '../data/chapters';

interface ChapterCardProps {
    chapter: Chapter;
    onClick: () => void;
}

export function ChapterCard({ chapter, onClick }: ChapterCardProps) {
    return (
        <article
            className="chapter-card"
            onClick={onClick}
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
            </header>

            {/* Preview Footer */}
            <footer className="chapter-preview-footer">
                <span className="preview-insight bengali-text">
                    {chapter.coreInsights[0]?.title}
                </span>
                <span className="read-more">
                    Read more →
                </span>
            </footer>
        </article>
    );
}
