import React from 'react';
import './ProductBrandRating.css';
import { Rating } from '../Rating';

export interface ProductBrandRatingProps {
  brand?: string;
  productName?: string;
  rating: number;
  reviewCount?: number;
  /** Show wishlist icon */
  showWishlist?: boolean;
  /** Is item currently wishlisted */
  wishlisted?: boolean;
  onToggleWishlist?: () => void;
}

export const ProductBrandRating: React.FC<ProductBrandRatingProps> = ({
  brand,
  productName,
  rating,
  reviewCount,
  showWishlist = true,
  wishlisted = false,
  onToggleWishlist,
}) => {
  return (
    <div className="ecommerce-product-brand-rating">
      <div className="ecommerce-product-brand-rating__text">
        {brand && (
          <div className="ecommerce-product-brand-rating__brand">{brand}</div>
        )}
        {productName && (
          <div className="ecommerce-product-brand-rating__name">
            {productName}
          </div>
        )}
        <div className="ecommerce-product-brand-rating__rating-row">
          <Rating value={rating} />
          {typeof reviewCount === 'number' && (
            <span className="ecommerce-product-brand-rating__reviews">
              {reviewCount} review{reviewCount === 1 ? '' : 's'}
            </span>
          )}
        </div>
      </div>
      {showWishlist && (
        <button
          type="button"
          className={`ecommerce-product-brand-rating__wishlist ${
            wishlisted
              ? 'ecommerce-product-brand-rating__wishlist--active'
              : ''
          }`}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          onClick={onToggleWishlist}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={wishlisted ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      )}
    </div>
  );
};


