import type { Meta, StoryObj } from '@storybook/react';
import { Cart } from './Cart';
import type { CartItem } from './Cart';

const meta = {
  title: 'E-Commerce/Cart',
  component: Cart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Cart>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems: CartItem[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 99.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100',
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 199.99,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100',
  },
  {
    id: '3',
    name: 'Running Shoes',
    price: 79.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100',
  },
];

export const WithItems: Story = {
  args: {
    items: sampleItems,
  },
};

export const SingleItem: Story = {
  args: {
    items: [sampleItems[0]],
  },
};

export const Empty: Story = {
  args: {
    items: [],
    showEmptyState: true,
  },
};

export const WithManyItems: Story = {
  args: {
    items: [
      ...sampleItems,
      {
        id: '4',
        name: 'Laptop Bag',
        price: 49.99,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100',
      },
      {
        id: '5',
        name: 'USB-C Cable',
        price: 19.99,
        quantity: 3,
        image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=100',
      },
    ],
  },
};

export const Loading: Story = {
  args: {
    items: sampleItems,
    checkoutLoading: true,
  },
};

