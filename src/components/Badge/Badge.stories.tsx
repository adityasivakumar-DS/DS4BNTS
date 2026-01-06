import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta = {
  title: 'E-Commerce/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'New',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Sale',
    variant: 'secondary',
  },
};

export const Success: Story = {
  args: {
    children: 'In Stock',
    variant: 'success',
  },
};

export const Danger: Story = {
  args: {
    children: 'Out of Stock',
    variant: 'danger',
  },
};

export const Warning: Story = {
  args: {
    children: 'Limited',
    variant: 'warning',
  },
};

export const Info: Story = {
  args: {
    children: 'Featured',
    variant: 'info',
  },
};

export const Small: Story = {
  args: {
    children: 'Small',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Badge',
    size: 'large',
  },
};

