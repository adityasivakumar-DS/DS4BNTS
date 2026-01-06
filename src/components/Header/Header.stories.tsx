import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta = {
  title: 'E-Commerce/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logo: 'E-Commerce',
    cartItemCount: 0,
    navLinks: [
      { label: 'Home', href: '#' },
      { label: 'Products', href: '#' },
      { label: 'About', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
};

export const WithCartItems: Story = {
  args: {
    logo: 'E-Commerce',
    cartItemCount: 5,
    navLinks: [
      { label: 'Home', href: '#' },
      { label: 'Products', href: '#' },
      { label: 'About', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
};

export const Minimal: Story = {
  args: {
    logo: 'Shop',
    cartItemCount: 0,
    navLinks: [],
  },
};

