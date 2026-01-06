import React from 'react';
import './Input.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Input label */
  label?: string;
  /** Error message */
  error?: string;
  /** Helper text */
  helperText?: string;
  /** Input size */
  size?: 'small' | 'medium' | 'large';
  /** Full width input */
  fullWidth?: boolean;
  /** Left icon */
  leftIcon?: React.ReactNode;
  /** Right icon */
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      size = 'medium',
      fullWidth = false,
      leftIcon,
      rightIcon,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    const classes = [
      'ecommerce-input-wrapper',
      fullWidth && 'ecommerce-input-wrapper--full-width',
      error && 'ecommerce-input-wrapper--error',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const inputClasses = [
      'ecommerce-input',
      `ecommerce-input--${size}`,
      leftIcon && 'ecommerce-input--with-left-icon',
      rightIcon && 'ecommerce-input--with-right-icon',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={classes}>
        {label && (
          <label htmlFor={inputId} className="ecommerce-input__label">
            {label}
          </label>
        )}
        <div className="ecommerce-input__container">
          {leftIcon && (
            <span className="ecommerce-input__icon ecommerce-input__icon--left">
              {leftIcon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            className={inputClasses}
            {...props}
          />
          {rightIcon && (
            <span className="ecommerce-input__icon ecommerce-input__icon--right">
              {rightIcon}
            </span>
          )}
        </div>
        {error && <span className="ecommerce-input__error">{error}</span>}
        {helperText && !error && (
          <span className="ecommerce-input__helper">{helperText}</span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

