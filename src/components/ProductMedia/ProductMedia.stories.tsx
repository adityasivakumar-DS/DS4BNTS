import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ProductMedia } from './ProductMedia';

const meta = {
  title: 'E-Commerce/ProductMedia',
  component: ProductMedia,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProductMedia>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems = [
  {
    src: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800',
    alt: 'Laptop on desk',
  },
  {
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
    alt: 'Laptop keyboard',
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    alt: 'Workspace',
  },
  {
    src: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800',
    alt: 'Laptop with code',
  },
];

export const WithoutNav: Story = {
  render: () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
      <ProductMedia
        items={sampleItems}
        showNav={false}
        thumbnailCount={3}
        activeIndex={activeIndex}
        onChangeActiveIndex={setActiveIndex}
      />
    );
  },
};

export const WithNav: Story = {
  render: () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
      <ProductMedia
        items={sampleItems}
        showNav
        thumbnailCount={4}
        activeIndex={activeIndex}
        onChangeActiveIndex={setActiveIndex}
      />
    );
  },
};


