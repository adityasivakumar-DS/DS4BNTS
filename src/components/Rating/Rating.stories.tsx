import type { Meta, StoryObj } from '@storybook/react';
import { Rating } from './Rating';

const meta = {
  title: 'E-Commerce/Rating',
  component: Rating,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'number', min: 0, max: 5, step: 0.1 },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 4.5,
    showValue: false,
  },
};

export const WithValue: Story = {
  args: {
    value: 4.5,
    showValue: true,
  },
};

export const FullRating: Story = {
  args: {
    value: 5,
    showValue: true,
  },
};

export const LowRating: Story = {
  args: {
    value: 2.5,
    showValue: true,
  },
};

export const Small: Story = {
  args: {
    value: 4.5,
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    value: 4.5,
    size: 'large',
  },
};

export const Interactive: Story = {
  args: {
    value: 0,
    readOnly: false,
    showValue: true,
  },
};

