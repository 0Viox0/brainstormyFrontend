import type { Meta, StoryObj } from '@storybook/react-vite';

import { Tooltip } from './Tooltip';

const meta = {
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    position: {
      x: 2,
      y: 3,
    },
    text: 'Choose strategy',
  },
};
