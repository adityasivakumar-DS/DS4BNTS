import type { Meta, StoryObj } from '@storybook/react';
import { Price } from './Price';

const meta = {
  title: 'E-Commerce/Price',
  component: Price,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'number', min: 0, step: 0.01 },
    },
    originalValue: {
      control: { type: 'number', min: 0, step: 0.01 },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
} satisfies Meta<typeof Price>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 29.99,
  },
};

export const WithDiscount: Story = {
  args: {
    value: 29.99,
    originalValue: 49.99,
  },
};

export const Small: Story = {
  args: {
    value: 29.99,
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    value: 29.99,
    size: 'large',
  },
};

export const HighPrice: Story = {
  args: {
    value: 1299.99,
    originalValue: 1999.99,
  },
};

