import React from 'react';
import './ProductMedia.css';

export interface ProductMediaItem {
  /** Main image URL */
  src: string;
  /** Alt text */
  alt?: string;
}

export interface ProductMediaProps {
  items: ProductMediaItem[];
  /** Show navigation arrows */
  showNav?: boolean;
  /** Thumbnails per row (3 or 4, matching Figma variants) */
  thumbnailCount?: 3 | 4;
  /** Currently active index */
  activeIndex?: number;
  onChangeActiveIndex?: (index: number) => void;
}

export const ProductMedia: React.FC<ProductMediaProps> = ({
  items,
  showNav = false,
  thumbnailCount = 3,
  activeIndex = 0,
  onChangeActiveIndex,
}) => {
  if (!items || items.length === 0) return null;

  const safeIndex = Math.min(Math.max(activeIndex, 0), items.length - 1);
  const active = items[safeIndex];

  const handlePrev = () => {
    const nextIndex = safeIndex === 0 ? items.length - 1 : safeIndex - 1;
    onChangeActiveIndex?.(nextIndex);
  };

  const handleNext = () => {
    const nextIndex = safeIndex === items.length - 1 ? 0 : safeIndex + 1;
    onChangeActiveIndex?.(nextIndex);
  };

  return (
    <div className="ecommerce-product-media">
      <div className="ecommerce-product-media__main">
        <img
          src={active.src}
          alt={active.alt}
          className="ecommerce-product-media__image"
        />
        {showNav && items.length > 1 && (
          <>
            <button
              type="button"
              className="ecommerce-product-media__nav ecommerce-product-media__nav--prev"
              onClick={handlePrev}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              type="button"
              className="ecommerce-product-media__nav ecommerce-product-media__nav--next"
              onClick={handleNext}
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}
      </div>
      {items.length > 1 && (
        <div
          className={`ecommerce-product-media__thumbnails ecommerce-product-media__thumbnails--${thumbnailCount.toString()}`}
        >
          {items.map((item, index) => (
            <button
              key={item.src}
              type="button"
              className={`ecommerce-product-media__thumbnail ${
                index === safeIndex
                  ? 'ecommerce-product-media__thumbnail--active'
                  : ''
              }`}
              onClick={() => onChangeActiveIndex?.(index)}
              aria-label={`Show image ${index + 1}`}
            >
              <img src={item.src} alt={item.alt} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};


