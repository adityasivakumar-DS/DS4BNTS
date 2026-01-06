import React from 'react';
import './Badge.css';

export interface BadgeProps {
  /** Badge variant */
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  /** Badge size */
  size?: 'small' | 'medium' | 'large';
  /** Badge content */
  children: React.ReactNode;
  /** Additional CSS class */
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  className = '',
}) => {
  const classes = [
    'ecommerce-badge',
    `ecommerce-badge--${variant}`,
    `ecommerce-badge--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <span className={classes}>{children}</span>;
};

