import { chapters, sections } from '../data/chapters';

interface StatsCardProps {
    title: string;
    value: string | number;
    icon: React.ReactNode;
    color?: 'emerald' | 'gold' | 'indigo';
}

function StatsCard({ title, value, icon, color = 'emerald' }: StatsCardProps) {
    return (
        <div className={`stats-card stats-card--${color}`}>
            <div className="stats-card__icon">{icon}</div>
            <div className="stats-card__content">
                <span className="stats-card__value">{value}</span>
                <span className="stats-card__title">{title}</span>
            </div>
        </div>
    );
}

interface ProgressRingProps {
    progress: number; // 0-100
    size?: number;
    strokeWidth?: number;
    color?: string;
}

export function ProgressRing({
    progress,
    size = 120,
    strokeWidth = 8,
    color = 'var(--accent-primary)'
}: ProgressRingProps) {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <div className="progress-ring-container">
            <svg width={size} height={size} className="progress-ring">
                {/* Background circle */}
                <circle
                    className="progress-ring__background"
                    stroke="var(--bg-tertiary)"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                />
                {/* Progress circle */}
                <circle
                    className="progress-ring__progress"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    fill="transparent"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                    style={{
                        strokeDasharray: circumference,
                        strokeDashoffset: offset,
                        transform: 'rotate(-90deg)',
                        transformOrigin: '50% 50%',
                        transition: 'stroke-dashoffset 0.5s ease'
                    }}
                />
            </svg>
            <div className="progress-ring__label">
                <span className="progress-ring__value">{Math.round(progress)}%</span>
                <span className="progress-ring__text">Complete</span>
            </div>
        </div>
    );
}

interface InfographicsProps {
    completedChapters?: number[];
}

export function Infographics({ completedChapters = [] }: InfographicsProps) {
    const totalChapters = chapters.length;
    const totalQuotes = chapters.reduce((acc, ch) => acc + ch.goldenQuotes.length, 0);
    const totalInsights = chapters.reduce((acc, ch) => acc + ch.coreInsights.length, 0);
    const completionPercent = (completedChapters.length / totalChapters) * 100;

    return (
        <div className="infographics">
            {/* Progress Section */}
            <div className="infographics__progress">
                <ProgressRing progress={completionPercent} size={140} />
                <div className="infographics__progress-text">
                    <p>{completedChapters.length} of {totalChapters} chapters</p>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="infographics__stats">
                <StatsCard
                    title="Total Chapters"
                    value={totalChapters}
                    color="emerald"
                    icon={
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                        </svg>
                    }
                />
                <StatsCard
                    title="Golden Quotes"
                    value={totalQuotes}
                    color="gold"
                    icon={
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z" />
                            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                        </svg>
                    }
                />
                <StatsCard
                    title="Bengali Insights"
                    value={totalInsights}
                    color="indigo"
                    icon={
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 16v-4M12 8h.01" />
                        </svg>
                    }
                />
                <StatsCard
                    title="Sections"
                    value={sections.length}
                    color="emerald"
                    icon={
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="3" width="7" height="7" />
                            <rect x="14" y="3" width="7" height="7" />
                            <rect x="14" y="14" width="7" height="7" />
                            <rect x="3" y="14" width="7" height="7" />
                        </svg>
                    }
                />
            </div>

            {/* Geometric Decoration */}
            <div className="infographics__decoration">
                <div className="geometric-shape geometric-shape--1" />
                <div className="geometric-shape geometric-shape--2" />
                <div className="geometric-shape geometric-shape--3" />
            </div>
        </div>
    );
}

// Reading Progress Component
interface ReadingProgressProps {
    currentChapter: number;
    totalChapters: number;
}

export function ReadingProgress({ currentChapter, totalChapters }: ReadingProgressProps) {
    const progress = (currentChapter / totalChapters) * 100;

    return (
        <div className="reading-progress">
            <div className="reading-progress__bar">
                <div
                    className="reading-progress__fill"
                    style={{ width: `${progress}%` }}
                />
            </div>
            <span className="reading-progress__text">
                Chapter {currentChapter} of {totalChapters}
            </span>
        </div>
    );
}
