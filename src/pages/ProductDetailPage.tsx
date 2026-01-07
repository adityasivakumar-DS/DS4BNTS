import React, { useState } from 'react';
import './ProductDetailPage.css';
import {
  Header,
  Breadcrumbs,
  ProductMedia,
  ProductBrandRating,
  Price,
  SizeColorSelector,
  CardSelector,
  IconWithText,
  Button,
} from '../components';

export const ProductDetailPage: React.FC = () => {
  // Simple local state for demo interactions
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | undefined>();
  const [selectedColor, setSelectedColor] = useState<string | undefined>();
  const [selectedPurchaseOption, setSelectedPurchaseOption] = useState<
    string | undefined
  >('one_time');
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div
      className="pdp-root"
      data-pattern-id="pdp_two_column_media_details"
      data-layout="two_column"
    >
      {/* Header region: Header base + Breadcrumbs */}
      <header className="pdp-header" data-region="header">
        <Header />
        <div className="pdp-breadcrumbs">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '#' },
              { label: 'Electronics', href: '#' },
              { label: 'Headphones', href: '#' },
              { label: 'Wireless Noise Cancelling', href: '#' },
            ]}
          />
        </div>
      </header>

      {/* Main two-column layout */}
      <main className="pdp-main" data-region="main_content">
        {/* Left column: Product Media Section */}
        <section
          className="pdp-column pdp-column--left"
          data-region="left_column"
        >
          <ProductMedia
            items={[
              {
                src: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=900',
                alt: 'Wireless headphones on desk',
              },
              {
                src: 'https://images.unsplash.com/photo-1518441655971-9c61d05f2224?w=900',
                alt: 'Close-up of headphone earcup',
              },
              {
                src: 'https://images.unsplash.com/photo-1511963216197-83c1f57c4f85?w=900',
                alt: 'Headphones in carrying case',
              },
            ]}
            showNav
            thumbnailCount={3}
            activeIndex={activeMediaIndex}
            onChangeActiveIndex={setActiveMediaIndex}
          />
        </section>

        {/* Right column: product information & purchase controls */}
        <section
          className="pdp-column pdp-column--right"
          data-region="right_column"
        >
          {/* Product brand rating */}
          <div className="pdp-block" data-component="Product brand rating">
            <ProductBrandRating
              brand="Acme Audio"
              productName="Wireless Noise Cancelling Headphones"
              rating={4.6}
              reviewCount={284}
              wishlisted={wishlisted}
              onToggleWishlist={() => setWishlisted((v) => !v)}
            />
          </div>

          {/* Product title (separate heading, per schema) */}
          <div className="pdp-block" data-component="product_title">
            <h1 className="pdp-title">
              Wireless Noise Cancelling Over‑Ear Headphones
            </h1>
          </div>

          {/* Product Price */}
          <div className="pdp-block" data-component="Product Price">
            <Price value={199.99} originalValue={299.99} />
          </div>

          {/* Size & Color Selector */}
          <div className="pdp-block" data-component="Size & Color Selector">
            <SizeColorSelector
              sizes={[
                { label: 'S', value: 's' },
                { label: 'M', value: 'm' },
                { label: 'L', value: 'l' },
                { label: 'XL', value: 'xl' },
              ]}
              colors={[
                { label: 'Black', value: 'black' },
                { label: 'Silver', value: 'silver' },
                { label: 'Blue', value: 'blue' },
              ]}
              selectedSize={selectedSize}
              selectedColor={selectedColor}
              onChangeSize={setSelectedSize}
              onChangeColor={setSelectedColor}
              onClickSizeChart={() => {
                // placeholder for size chart action
              }}
            />
          </div>

          {/* Card Selector: purchase options */}
          <div className="pdp-block" data-component="Card Selector">
            <CardSelector
              value={selectedPurchaseOption}
              onChange={setSelectedPurchaseOption}
              options={[
                {
                  title: 'One‑time purchase',
                  description: '$199.99',
                  value: 'one_time',
                },
                {
                  title: 'Monthly plan',
                  description: '$35.00/mo for 6 months',
                  value: 'subscription',
                },
              ]}
            />
          </div>

          {/* IconWithTextText / delivery info */}
          <div className="pdp-block" data-component="IconWithTextText">
            <div className="pdp-icon-list">
              <IconWithText
                icon="🚚"
                title="Free shipping"
                description="On orders over $50. Delivered in 3–5 business days."
              />
              <IconWithText
                icon="↩"
                title="30‑day returns"
                description="Free, no‑questions‑asked returns within 30 days."
              />
              <IconWithText
                icon="💳"
                title="Secure payment"
                description="All major credit cards and PayPal accepted."
              />
            </div>
          </div>

          {/* CTA Button (must_have_cta) */}
          <div className="pdp-block" data-component="Button">
            <Button variant="primary" size="large" fullWidth>
              Add to Cart
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductDetailPage;


