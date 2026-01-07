import React from 'react';
import './Breadcrumbs.css';

export interface BreadcrumbItem {
  /** Display label */
  label: string;
  /** Optional href for link-style crumbs */
  href?: string;
}

export interface BreadcrumbsProps {
  /** Ordered list of breadcrumb items */
  items: BreadcrumbItem[];
  /** Separator character or element between items */
  separator?: React.ReactNode;
  /** Called when a breadcrumb without href is clicked */
  onNavigate?: (item: BreadcrumbItem, index: number) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  separator = '/',
  onNavigate,
}) => {
  if (!items || items.length === 0) return null;

  return (
    <nav className="ecommerce-breadcrumbs" aria-label="Breadcrumb">
      <ol className="ecommerce-breadcrumbs__list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          const content = item.href ? (
            <a
              href={item.href}
              className="ecommerce-breadcrumbs__link"
              aria-current={isLast ? 'page' : undefined}
            >
              {item.label}
            </a>
          ) : (
            <button
              type="button"
              className="ecommerce-breadcrumbs__button"
              onClick={() => onNavigate?.(item, index)}
              aria-current={isLast ? 'page' : undefined}
            >
              {item.label}
            </button>
          );

          return (
            <li
              key={`${item.label}-${index.toString()}`}
              className="ecommerce-breadcrumbs__item"
            >
              {content}
              {!isLast && (
                <span className="ecommerce-breadcrumbs__separator">
                  {separator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};


