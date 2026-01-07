import type { Meta, StoryObj } from '@storybook/react';
import { CardSelector } from './CardSelector';

const meta = {
  title: 'E-Commerce/CardSelector',
  component: CardSelector,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'standard',
    options: [
      {
        title: 'Standard Shipping',
        description: 'Delivered in 3-5 business days',
        value: 'standard',
      },
      {
        title: 'Express Shipping',
        description: 'Delivered in 1-2 business days',
        value: 'express',
      },
      {
        title: 'Pickup',
        description: 'Collect from store',
        value: 'pickup',
      },
    ],
  },
};

export const WithDisabled: Story = {
  args: {
    value: 'card',
    options: [
      {
        title: 'Credit Card',
        description: 'Visa, Mastercard, Amex',
        value: 'card',
      },
      {
        title: 'PayPal',
        description: 'Pay easily with your PayPal account',
        value: 'paypal',
      },
      {
        title: 'Cash on Delivery',
        description: 'Pay when you receive the order',
        value: 'cod',
        disabled: true,
      },
    ],
  },
};


