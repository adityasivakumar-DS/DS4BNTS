import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';

const meta = {
  title: 'E-Commerce/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Sort by',
    options: [
      { label: 'Featured', value: 'featured' },
      { label: 'Price: Low to High', value: 'price-asc' },
      { label: 'Price: High to Low', value: 'price-desc' },
      { label: 'Newest', value: 'newest' },
    ],
    placeholder: 'Select',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Size',
    options: [
      { label: 'S', value: 's' },
      { label: 'M', value: 'm' },
      { label: 'L', value: 'l' },
    ],
    disabled: true,
    placeholder: 'Unavailable',
  },
};


