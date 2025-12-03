import type { Meta, StoryObj } from '@storybook/react-vite';

import { Picker } from './Picker';
import { MethologyDefaultIcon, ScamperLogo, SixHatsLogo } from '@/shared/icons';

const meta = {
  component: Picker,
} satisfies Meta<typeof Picker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultIcon: <MethologyDefaultIcon />,
    options: [
      {
        id: 2,
        icon: <ScamperLogo />,
        name: 'scamper',
      },
      {
        id: 1,
        icon: <SixHatsLogo />,
        name: 'sixHats',
      },
    ],
    onOptionPick: () => {},
  },
};
