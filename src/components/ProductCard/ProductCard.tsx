import React from 'react';
import { Button } from '../Button';
import { Badge } from '../Badge';
import { Rating } from '../Rating';
import { Price } from '../Price';
import './ProductCard.css';

export interface ProductCardProps {
  /** Product image URL */
  image: string;
  /** Product image alt text */
  imageAlt?: string;
  /** Product title */
  title: string;
  /** Product description */
  description?: string;
  /** Product price */
  price: number;
  /** Original price (for showing discount) */
  originalPrice?: number;
  /** Product rating (0-5) */
  rating?: number;
  /** Number of reviews */
  reviewCount?: number;
  /** Badge text (e.g., "Sale", "New", "Bestseller") */
  badge?: string;
  /** Is product in stock? */
  inStock?: boolean;
  /** Is product favorited? */
  isFavorite?: boolean;
  /** Callback when add to cart is clicked */
  onAddToCart?: () => void;
  /** Callback when favorite is clicked */
  onFavorite?: () => void;
  /** Callback when product is clicked */
  onClick?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  imageAlt,
  title,
  description,
  price,
  originalPrice,
  rating,
  reviewCount,
  badge,
  inStock = true,
  isFavorite = false,
  onAddToCart,
  onFavorite,
  onClick,
}) => {
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div className="ecommerce-product-card" onClick={onClick}>
      <div className="ecommerce-product-card__image-container">
        <img
          src={image}
          alt={imageAlt || title}
          className="ecommerce-product-card__image"
        />
        {badge && (
          <div className="ecommerce-product-card__badge">
            <Badge variant="primary">{badge}</Badge>
          </div>
        )}
        {originalPrice && discount > 0 && (
          <div className="ecommerce-product-card__discount">
            <Badge variant="danger">-{discount}%</Badge>
          </div>
        )}
        <button
          className={`ecommerce-product-card__favorite ${
            isFavorite ? 'ecommerce-product-card__favorite--active' : ''
          }`}
          onClick={(e) => {
            e.stopPropagation();
            onFavorite?.();
          }}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={isFavorite ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
        {!inStock && (
          <div className="ecommerce-product-card__overlay">
            <span className="ecommerce-product-card__out-of-stock">Out of Stock</span>
          </div>
        )}
      </div>
      <div className="ecommerce-product-card__content">
        <h3 className="ecommerce-product-card__title">{title}</h3>
        {description && (
          <p className="ecommerce-product-card__description">{description}</p>
        )}
        {rating !== undefined && (
          <div className="ecommerce-product-card__rating">
            <Rating value={rating} />
            {reviewCount !== undefined && (
              <span className="ecommerce-product-card__review-count">
                ({reviewCount})
              </span>
            )}
          </div>
        )}
        <div className="ecommerce-product-card__price">
          <Price value={price} originalValue={originalPrice} />
        </div>
        <Button
          variant="primary"
          size="medium"
          fullWidth
          disabled={!inStock}
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart?.();
          }}
        >
          {inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </div>
    </div>
  );
};

