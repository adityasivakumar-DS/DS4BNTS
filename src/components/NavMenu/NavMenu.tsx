import React from 'react';
import './NavMenu.css';

export interface NavMenuItem {
  label: string;
  href?: string;
  active?: boolean;
}

export interface NavMenuProps {
  items: NavMenuItem[];
  /** Optional max items to show, matching Figma variants count=1..8 */
  maxItems?: number;
  onItemClick?: (item: NavMenuItem, index: number) => void;
}

export const NavMenu: React.FC<NavMenuProps> = ({
  items,
  maxItems,
  onItemClick,
}) => {
  const visibleItems = maxItems ? items.slice(0, maxItems) : items;

  return (
    <nav className="ecommerce-nav-menu" aria-label="Main navigation">
      <ul className="ecommerce-nav-menu__list">
        {visibleItems.map((item, index) => {
          const classes = [
            'ecommerce-nav-menu__item',
            item.active && 'ecommerce-nav-menu__item--active',
          ]
            .filter(Boolean)
            .join(' ');

          const content = item.href ? (
            <a href={item.href} className={classes}>
              {item.label}
            </a>
          ) : (
            <button
              type="button"
              className={classes}
              onClick={() => onItemClick?.(item, index)}
            >
              {item.label}
            </button>
          );

          return (
            <li key={`${item.label}-${index.toString()}`}>{content}</li>
          );
        })}
      </ul>
    </nav>
  );
};


