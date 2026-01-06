import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from './ProductCard';

const meta = {
  title: 'E-Commerce/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    imageAlt: 'Product image',
    title: 'Wireless Headphones',
    description: 'Premium quality wireless headphones with noise cancellation',
    price: 99.99,
    rating: 4.5,
    reviewCount: 128,
    inStock: true,
  },
};

export const WithDiscount: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
    imageAlt: 'Product image',
    title: 'Smart Watch',
    description: 'Feature-rich smartwatch with health tracking',
    price: 199.99,
    originalPrice: 299.99,
    rating: 4.8,
    reviewCount: 256,
    badge: 'Sale',
    inStock: true,
  },
};

export const WithBadge: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    imageAlt: 'Product image',
    title: 'Running Shoes',
    description: 'Comfortable running shoes for daily workouts',
    price: 79.99,
    rating: 4.2,
    reviewCount: 89,
    badge: 'New',
    inStock: true,
  },
};

export const OutOfStock: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    imageAlt: 'Product image',
    title: 'Wireless Headphones',
    description: 'Premium quality wireless headphones with noise cancellation',
    price: 99.99,
    rating: 4.5,
    reviewCount: 128,
    inStock: false,
  },
};

export const Favorited: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
    imageAlt: 'Product image',
    title: 'Smart Watch',
    description: 'Feature-rich smartwatch with health tracking',
    price: 199.99,
    rating: 4.8,
    reviewCount: 256,
    isFavorite: true,
    inStock: true,
  },
};

export const Minimal: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    imageAlt: 'Product image',
    title: 'Running Shoes',
    price: 79.99,
    inStock: true,
  },
};

