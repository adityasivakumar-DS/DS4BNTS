import type { Meta, StoryObj } from '@storybook/react';
import { ProductBrandRating } from './ProductBrandRating';

const meta = {
  title: 'E-Commerce/ProductBrandRating',
  component: ProductBrandRating,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProductBrandRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    brand: 'Acme',
    productName: 'Wireless Noise Cancelling Headphones',
    rating: 4.5,
    reviewCount: 128,
    wishlisted: false,
  },
};

export const Wishlisted: Story = {
  args: {
    brand: 'Acme',
    productName: 'Wireless Noise Cancelling Headphones',
    rating: 4.5,
    reviewCount: 128,
    wishlisted: true,
  },
};


