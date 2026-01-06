import React from 'react';
import { SearchBar } from '../SearchBar';
import { Button } from '../Button';
import './Header.css';

export interface HeaderProps {
  /** Site logo text or image */
  logo?: React.ReactNode;
  /** Number of items in cart */
  cartItemCount?: number;
  /** Callback when cart is clicked */
  onCartClick?: () => void;
  /** Callback when search is performed */
  onSearch?: (value: string) => void;
  /** Navigation links */
  navLinks?: Array<{ label: string; href?: string; onClick?: () => void }>;
}

export const Header: React.FC<HeaderProps> = ({
  logo = 'E-Commerce',
  cartItemCount = 0,
  onCartClick,
  onSearch,
  navLinks = [],
}) => {
  return (
    <header className="ecommerce-header">
      <div className="ecommerce-header__container">
        <div className="ecommerce-header__logo">{logo}</div>

        <nav className="ecommerce-header__nav">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={link.onClick}
              className="ecommerce-header__nav-link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ecommerce-header__search">
          <SearchBar
            onSearch={onSearch}
            placeholder="Search products..."
            showButton={false}
            fullWidth
          />
        </div>

        <div className="ecommerce-header__actions">
          <Button variant="ghost" size="medium" onClick={onCartClick}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {cartItemCount > 0 && (
              <span className="ecommerce-header__cart-badge">{cartItemCount}</span>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};

