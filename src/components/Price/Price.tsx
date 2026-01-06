import React from 'react';
import './Price.css';

export interface PriceProps {
  /** Current price value */
  value: number;
  /** Original price (for showing discount) */
  originalValue?: number;
  /** Currency symbol */
  currency?: string;
  /** Size of the price */
  size?: 'small' | 'medium' | 'large';
}

export const Price: React.FC<PriceProps> = ({
  value,
  originalValue,
  currency = '$',
  size = 'medium',
}) => {
  const formatPrice = (price: number) => {
    return price.toFixed(2);
  };

  return (
    <div className={`ecommerce-price ecommerce-price--${size}`}>
      <span className="ecommerce-price__current">
        {currency}
        {formatPrice(value)}
      </span>
      {originalValue && originalValue > value && (
        <span className="ecommerce-price__original">
          {currency}
          {formatPrice(originalValue)}
        </span>
      )}
    </div>
  );
};

