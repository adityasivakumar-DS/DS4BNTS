import React from 'react';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button variant */
  variant?: ' primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  /** Button size */
  size?: 'small' | 'medium' | 'large';
  /** Is the button in a loading state? */
  loading?: boolean;
  /** Should the button take full width? */
  fullWidth?: boolean;
  /** Button contents */
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  loading = false,
  fullWidth = false,
  children,
  disabled,
  className = '',
  ...props
}) => {
  const classes = [
    'ecommerce-button',
    `ecommerce-button--${variant}`,
    `ecommerce-button--${size}`,
    fullWidth && 'ecommerce-button--full-width',
    loading && 'ecommerce-button--loading',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className="ecommerce-button__spinner" />}
      <span className={loading ? 'ecommerce-button__content--hidden' : ''}>
        {children}
      </span>
    </button>
  );
};

