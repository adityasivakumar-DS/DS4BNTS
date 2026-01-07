import React from 'react';
import './CardSelector.css';

export interface CardSelectorOption {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  value: string;
  disabled?: boolean;
}

export interface CardSelectorProps {
  options: CardSelectorOption[];
  value?: string;
  onChange?: (value: string) => void;
}

export const CardSelector: React.FC<CardSelectorProps> = ({
  options,
  value,
  onChange,
}) => {
  return (
    <div className="ecommerce-card-selector" role="radiogroup">
      {options.map((option) => {
        const isActive = value === option.value;
        const classes = [
          'ecommerce-card-selector__card',
          isActive && 'ecommerce-card-selector__card--active',
          option.disabled && 'ecommerce-card-selector__card--disabled',
        ]
          .filter(Boolean)
          .join(' ');

        return (
          <button
            key={option.value}
            type="button"
            className={classes}
            role="radio"
            aria-checked={isActive}
            disabled={option.disabled}
            onClick={() => onChange?.(option.value)}
          >
            {option.icon && (
              <span className="ecommerce-card-selector__icon">
                {option.icon}
              </span>
            )}
            <div className="ecommerce-card-selector__content">
              <div className="ecommerce-card-selector__title">
                {option.title}
              </div>
              {option.description && (
                <div className="ecommerce-card-selector__description">
                  {option.description}
                </div>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
};


