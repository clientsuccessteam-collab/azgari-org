'use client';

import React from 'react';
import Link from 'next/link';

// Interfaces
interface UrgencyItem {
  /** Unique identifier for the item */
  id: string;
  /** Title of the informational item */
  title: string;
  /** Description providing context */
  description: string;
  /** Optional icon (emoji or string) */
  icon?: string;
  /** Informational category */
  priority: 'low' | 'medium' | 'high' | 'critical';
  /** Optional scheduled date */
  deadline?: Date;
  /** Whether the item is actionable */
  actionable?: boolean;
  /** CTA link if actionable */
  actionHref?: string;
  /** CTA text if actionable */
  actionText?: string;
}

interface UrgencyContextPanelProps {
  /** Panel title */
  title?: string;
  /** Array of informational items to display */
  items: UrgencyItem[];
  /** Optional additional CSS classes */
  className?: string;
  /** Maximum number of items to show before "show more" */
  maxItems?: number;
  /** Whether the panel is collapsible */
  collapsible?: boolean;
  /** Default collapsed state */
  defaultCollapsed?: boolean;
  /** Callback when an action is taken */
  onActionTaken?: (itemId: string) => void;
}

// Neutral informational styling by category
const PRIORITY_COLORS: Record<UrgencyItem['priority'], { bg: string; border: string; text: string }> = {
  low: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-700',
  },
  medium: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-700',
  },
  high: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'text-emerald-700',
  },
  critical: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'text-emerald-700',
  },
};

const PRIORITY_LABELS: Record<UrgencyItem['priority'], string> = {
  low: 'Informational',
  medium: 'Upcoming',
  high: 'Current Cohort',
  critical: 'Enrolling Now',
};

/**
 * UrgencyContextPanel - Informational panel displaying current cohort schedule,
 * upcoming enrollment windows, and relevant educational program updates.
 */
export const UrgencyContextPanel: React.FC<UrgencyContextPanelProps> = ({
  title = 'Current Cohort Schedule',
  items,
  className = '',
  maxItems = 5,
  collapsible = false,
  defaultCollapsed = false,
  onActionTaken,
}) => {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);
  const [showAll, setShowAll] = React.useState(false);

  const displayItems = showAll ? items : items.slice(0, maxItems);
  const hasMoreItems = items.length > maxItems;

  const formatDeadline = (date?: Date): string => {
    if (!date) return '';

    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const handleActionClick = (itemId: string): void => {
    if (onActionTaken) {
      onActionTaken(itemId);
    }
  };

  return (
    <div
      className={`urgency-context-panel rounded-2xl border-2 border-gray-200 bg-white overflow-hidden ${className}`}
    >
      {/* Header */}
      <div
        className="panel-header px-4 py-3 sm:px-6 sm:py-4 border-b-2 border-gray-100 flex justify-between items-center"
        style={{ backgroundColor: 'var(--color-cream)' }}
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">📅</span>
          <h3
            className="text-lg font-bold"
            style={{ color: 'var(--color-primary)' }}
          >
            {title}
          </h3>
        </div>
        {collapsible && (
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label={isCollapsed ? 'Expand panel' : 'Collapse panel'}
          >
            <span className={`transform transition-transform ${isCollapsed ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
        )}
      </div>

      {/* Content */}
      {!isCollapsed && (
        <div className="panel-content">
          {items.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              <span className="text-4xl mb-2 block">📖</span>
              <p>No scheduled updates at this time</p>
            </div>
          ) : (
            <>
              <ul className="divide-y divide-gray-100">
                {displayItems.map((item) => {
                  const colors = PRIORITY_COLORS[item.priority];
                  return (
                    <li
                      key={item.id}
                      className={`p-4 ${colors.bg} border-l-4 ${colors.border} transition-all hover:opacity-90`}
                    >
                      <div className="flex items-start gap-3">
                        {item.icon && (
                          <span className="text-xl flex-shrink-0">{item.icon}</span>
                        )}
                        <div className="flex-grow min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className={`font-semibold ${colors.text}`}>
                              {item.title}
                            </h4>
                            <span
                              className={`text-xs px-2 py-0.5 rounded-full border ${colors.border} ${colors.text}`}
                            >
                              {PRIORITY_LABELS[item.priority]}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm mt-1">
                            {item.description}
                          </p>
                          {item.deadline && (
                            <p className="text-xs mt-2 font-medium text-gray-500">
                              📆 {formatDeadline(item.deadline)}
                            </p>
                          )}
                          {item.actionable && item.actionHref && (
                            <div className="mt-3">
                              <Link
                                href={item.actionHref}
                                onClick={() => handleActionClick(item.id)}
                                className="inline-flex items-center gap-1 text-sm font-medium"
                                style={{ color: 'var(--color-accent)' }}
                              >
                                {item.actionText || 'Learn More'} →
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>

              {/* Show More/Less */}
              {hasMoreItems && (
                <div className="p-4 border-t border-gray-100 text-center">
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="text-sm font-medium hover:underline"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {showAll
                      ? `Show Less (${maxItems})`
                      : `Show All (${items.length} items)`}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      )}

      {/* Footer */}
      {!isCollapsed && items.length > 0 && (
        <div className="panel-footer px-4 py-3 sm:px-6 bg-gray-50 border-t border-gray-100 text-xs text-gray-500 text-center">
          The Foundation runs structured enrollment cohorts. Contact our team for the most current schedule.
        </div>
      )}
    </div>
  );
};

export default UrgencyContextPanel;
