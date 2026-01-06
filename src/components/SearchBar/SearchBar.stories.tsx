import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './SearchBar';

const meta = {
  title: 'E-Commerce/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Search products...',
  },
};

export const WithButton: Story = {
  args: {
    placeholder: 'Search products...',
    showButton: true,
  },
};

export const WithoutButton: Story = {
  args: {
    placeholder: 'Search products...',
    showButton: false,
  },
};

export const FullWidth: Story = {
  args: {
    placeholder: 'Search products...',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

export const WithDefaultValue: Story = {
  args: {
    placeholder: 'Search products...',
    defaultValue: 'laptop',
  },
};

