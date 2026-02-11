'use client';

import React from 'react';
import Link from 'next/link';

// Interfaces
interface UrgencyItem {
  /** Unique identifier for the item */
  id: string;
  /** Title of the urgency item */
  title: string;
  /** Description explaining the urgency */
  description: string;
  /** Optional icon (emoji or string) */
  icon?: string;
  /** Priority level affecting styling */
  priority: 'low' | 'medium' | 'high' | 'critical';
  /** Optional deadline timestamp */
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
  /** Array of urgency items to display */
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

// Constants
const PRIORITY_COLORS: Record<UrgencyItem['priority'], { bg: string; border: string; text: string }> = {
  low: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-700',
  },
  medium: {
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    text: 'text-yellow-700',
  },
  high: {
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    text: 'text-orange-700',
  },
  critical: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    text: 'text-red-700',
  },
};

const PRIORITY_LABELS: Record<UrgencyItem['priority'], string> = {
  low: 'Low Priority',
  medium: 'Medium Priority',
  high: 'High Priority',
  critical: 'Critical',
};

/**
 * UrgencyContextPanel - Displays urgency items with priority-based styling
 * 
 * Use this component to show time-sensitive information, deadlines,
 * or important context that requires user attention.
 */
export const UrgencyContextPanel: React.FC<UrgencyContextPanelProps> = ({
  title = 'Urgency Context',
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
    
    const now = new Date();
    const diffMs = date.getTime() - now.getTime();
    const diffHours = Math.ceil(diffMs / (1000 * 60 * 60));
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    if (diffHours < 0) return 'Overdue';
    if (diffHours < 24) return `${diffHours}h remaining`;
    if (diffDays === 1) return '1 day remaining';
    return `${diffDays} days remaining`;
  };

  const handleActionClick = (itemId: string): void => {
    if (onActionTaken) {
      onActionTaken(itemId);
    }
  };

  const criticalCount = items.filter((item) => item.priority === 'critical').length;
  const highCount = items.filter((item) => item.priority === 'high').length;

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
          <span className="text-2xl">⏰</span>
          <h3
            className="text-lg font-bold"
            style={{ color: 'var(--color-primary)' }}
          >
            {title}
          </h3>
          {(criticalCount > 0 || highCount > 0) && (
            <span className="flex gap-2">
              {criticalCount > 0 && (
                <span className="text-xs font-bold px-2 py-1 rounded-full bg-red-100 text-red-700">
                  {criticalCount} Critical
                </span>
              )}
              {highCount > 0 && (
                <span className="text-xs font-bold px-2 py-1 rounded-full bg-orange-100 text-orange-700">
                  {highCount} High
                </span>
              )}
            </span>
          )}
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
              <span className="text-4xl mb-2 block">✅</span>
              <p>No urgent items at this time</p>
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
                            <p
                              className={`text-xs mt-2 font-medium ${
                                item.deadline < new Date()
                                  ? 'text-red-600'
                                  : 'text-gray-500'
                              }`}
                            >
                              📅 {formatDeadline(item.deadline)}
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
                                {item.actionText || 'Take Action'} →
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
          Last updated: {new Date().toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </div>
      )}
    </div>
  );
};

export default UrgencyContextPanel;
