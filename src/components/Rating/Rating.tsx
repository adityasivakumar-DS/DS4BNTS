import React from 'react';
import './Rating.css';

export interface RatingProps {
  /** Rating value (0-5) */
  value: number;
  /** Maximum rating value */
  max?: number;
  /** Show rating number */
  showValue?: boolean;
  /** Size of the stars */
  size?: 'small' | 'medium' | 'large';
  /** Read-only rating */
  readOnly?: boolean;
  /** Callback when rating changes */
  onChange?: (value: number) => void;
}

export const Rating: React.FC<RatingProps> = ({
  value,
  max = 5,
  showValue = false,
  size = 'medium',
  readOnly = true,
  onChange,
}) => {
  const handleClick = (newValue: number) => {
    if (!readOnly && onChange) {
      onChange(newValue);
    }
  };

  const stars = Array.from({ length: max }, (_, index) => {
    const starValue = index + 1;
    const filled = starValue <= Math.round(value);
    const halfFilled = starValue - 0.5 <= value && value < starValue;

    return (
      <span
        key={index}
        className={`ecommerce-rating__star ${
          filled
            ? 'ecommerce-rating__star--filled'
            : halfFilled
            ? 'ecommerce-rating__star--half'
            : ''
        } ${!readOnly ? 'ecommerce-rating__star--interactive' : ''}`}
        onClick={() => handleClick(starValue)}
        role={readOnly ? 'img' : 'button'}
        aria-label={`${starValue} out of ${max} stars`}
        tabIndex={readOnly ? -1 : 0}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </span>
    );
  });

  return (
    <div className={`ecommerce-rating ecommerce-rating--${size}`}>
      <div className="ecommerce-rating__stars">{stars}</div>
      {showValue && (
        <span className="ecommerce-rating__value">{value.toFixed(1)}</span>
      )}
    </div>
  );
};

