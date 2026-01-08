import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, Footer, ProductCard } from '../components';
import './Home.css';

export interface Product {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  badge?: string;
  inStock: boolean;
}

export const sampleProducts: Product[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    title: 'Wireless Headphones',
    description: 'Premium quality wireless headphones with active noise cancellation and 30-hour battery life',
    price: 99.99,
    originalPrice: 149.99,
    rating: 4.5,
    reviewCount: 128,
    badge: 'Sale',
    inStock: true,
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
    title: 'Smart Watch',
    description: 'Feature-rich smartwatch with health tracking, GPS, and water resistance',
    price: 199.99,
    rating: 4.8,
    reviewCount: 256,
    badge: 'New',
    inStock: true,
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    title: 'Running Shoes',
    description: 'Comfortable running shoes with advanced cushioning for daily workouts',
    price: 79.99,
    rating: 4.2,
    reviewCount: 89,
    inStock: true,
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
    title: 'Laptop Bag',
    description: 'Durable laptop bag with multiple compartments and padded protection',
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.6,
    reviewCount: 142,
    badge: 'Sale',
    inStock: true,
  },
];

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = React.useState<Set<string>>(new Set());

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  const handleFavorite = (productId: string) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  const handleAddToCart = (productId: string) => {
    console.log('Added to cart:', productId);
    // In a real app, this would update the cart state
  };

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // In a real app, this would filter products
  };

  return (
    <div className="home-page">
      <Header
        logo="E-Commerce"
        cartItemCount={0}
        navLinks={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '#' },
          { label: 'About', href: '#' },
          { label: 'Contact', href: '#' },
        ]}
        onSearch={handleSearch}
      />
      <main className="home-page__main">
        <div className="home-page__container">
          <section className="home-page__hero">
            <h1 className="home-page__hero-title">Welcome to Our Store</h1>
            <p className="home-page__hero-subtitle">
              Discover amazing products at unbeatable prices
            </p>
          </section>

          <section className="home-page__products">
            <h2 className="home-page__section-title">Featured Products</h2>
            <div className="home-page__products-grid">
              {sampleProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  imageAlt={product.title}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  rating={product.rating}
                  reviewCount={product.reviewCount}
                  badge={product.badge}
                  inStock={product.inStock}
                  isFavorite={favorites.has(product.id)}
                  onClick={() => handleProductClick(product.id)}
                  onFavorite={() => handleFavorite(product.id)}
                  onAddToCart={() => handleAddToCart(product.id)}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

