import type { Meta, StoryObj } from '@storybook/react';
import { NavMenu } from './NavMenu';

const meta = {
  title: 'E-Commerce/NavMenu',
  component: NavMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NavMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', href: '#', active: true },
      { label: 'Shop', href: '#' },
      { label: 'Collections', href: '#' },
      { label: 'Sale', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
};

export const LimitedToThree: Story = {
  args: {
    items: [
      { label: 'Home', href: '#', active: true },
      { label: 'Shop', href: '#' },
      { label: 'Collections', href: '#' },
      { label: 'Sale', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    maxItems: 3,
  },
};


