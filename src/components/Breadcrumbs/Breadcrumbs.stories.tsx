import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from './Breadcrumbs';

const meta = {
  title: 'E-Commerce/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Electronics', href: '#' },
      { label: 'Headphones', href: '#' },
      { label: 'Wireless', href: '#' },
    ],
  },
};

export const WithButtons: Story = {
  args: {
    items: [
      { label: 'Home' },
      { label: 'Men' },
      { label: 'Shoes' },
      { label: 'Running' },
    ],
  },
};


