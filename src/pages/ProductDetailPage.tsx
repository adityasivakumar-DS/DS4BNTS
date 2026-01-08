import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Header,
  Footer,
  Button,
  Rating,
  Price,
  Badge,
  Input,
} from '../components';
import { sampleProducts } from './Home';
import type { Product } from './Home';
import './ProductDetailPage.css';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const product = sampleProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="pdp-page">
        <Header logo="E-Commerce" cartItemCount={0} />
        <main className="pdp-page__main">
          <div className="pdp-page__container">
            <div className="pdp-page__not-found">
              <h1>Product Not Found</h1>
              <p>Sorry, we couldn't find the product you're looking for.</p>
              <Button variant="primary" onClick={() => navigate('/')}>
                Back to Home
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Generate multiple product images for gallery
  const productImages = [
    product.image,
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format',
  ];

  const handleAddToCart = () => {
    console.log('Added to cart:', product.id, 'Quantity:', quantity);
    // In a real app, this would update the cart state
  };

  const handleBuyNow = () => {
    console.log('Buy now:', product.id, 'Quantity:', quantity);
    // In a real app, this would navigate to checkout
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="pdp-page">
      <Header
        logo="E-Commerce"
        cartItemCount={0}
        navLinks={[
          { label: 'Home', href: '/', onClick: () => navigate('/') },
          { label: 'Products', href: '#' },
          { label: 'About', href: '#' },
          { label: 'Contact', href: '#' },
        ]}
      />
      <main className="pdp-page__main">
        <div className="pdp-page__container">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="pdp-page__back-button"
          >
            ← Back to Products
          </Button>

          <div className="pdp-page__content">
            {/* Image Gallery */}
            <div className="pdp-page__gallery">
              <div className="pdp-page__main-image">
                <img
                  src={productImages[selectedImageIndex]}
                  alt={product.title}
                />
                {product.badge && (
                  <div className="pdp-page__badge">
                    <Badge variant="primary">{product.badge}</Badge>
                  </div>
                )}
                {discount > 0 && (
                  <div className="pdp-page__discount-badge">
                    <Badge variant="danger">-{discount}%</Badge>
                  </div>
                )}
              </div>
              <div className="pdp-page__thumbnail-list">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    className={`pdp-page__thumbnail ${
                      selectedImageIndex === index
                        ? 'pdp-page__thumbnail--active'
                        : ''
                    }`}
                    onClick={() => setSelectedImageIndex(index)}
                  >
                    <img src={image} alt={`${product.title} view ${index + 1}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="pdp-page__info">
              <h1 className="pdp-page__title">{product.title}</h1>

              <div className="pdp-page__rating-section">
                <Rating value={product.rating} showValue size="large" />
                <span className="pdp-page__review-count">
                  {product.reviewCount} reviews
                </span>
              </div>

              <div className="pdp-page__price-section">
                <Price
                  value={product.price}
                  originalValue={product.originalPrice}
                  size="large"
                />
              </div>

              <div className="pdp-page__description">
                <h2>Description</h2>
                <p>{product.description}</p>
                <ul className="pdp-page__features">
                  <li>Premium quality materials</li>
                  <li>30-day money-back guarantee</li>
                  <li>Free shipping on orders over $50</li>
                  <li>1-year warranty included</li>
                </ul>
              </div>

              <div className="pdp-page__stock-status">
                {product.inStock ? (
                  <Badge variant="success">In Stock</Badge>
                ) : (
                  <Badge variant="danger">Out of Stock</Badge>
                )}
              </div>

              <div className="pdp-page__quantity">
                <label htmlFor="quantity">Quantity:</label>
                <Input
                  id="quantity"
                  type="number"
                  min="1"
                  max="10"
                  value={quantity.toString()}
                  onChange={(e) => {
                    const value = parseInt(e.target.value, 10);
                    if (!isNaN(value) && value >= 1 && value <= 10) {
                      setQuantity(value);
                    } else if (e.target.value === '') {
                      setQuantity(1);
                    }
                  }}
                  size="medium"
                  className="pdp-page__quantity-input"
                />
              </div>

              <div className="pdp-page__actions">
                <Button
                  variant="outline"
                  size="large"
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="pdp-page__favorite-button"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill={isFavorite ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                  {isFavorite ? 'Saved' : 'Save for Later'}
                </Button>
                <Button
                  variant="primary"
                  size="large"
                  fullWidth
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  Add to Cart
                </Button>
                <Button
                  variant="secondary"
                  size="large"
                  fullWidth
                  onClick={handleBuyNow}
                  disabled={!product.inStock}
                >
                  Buy Now
                </Button>
              </div>

              <div className="pdp-page__shipping-info">
                <h3>Shipping Information</h3>
                <p>Free shipping on orders over $50</p>
                <p>Estimated delivery: 3-5 business days</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

