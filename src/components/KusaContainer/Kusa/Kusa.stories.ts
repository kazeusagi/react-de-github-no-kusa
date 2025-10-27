import type { Meta, StoryObj } from '@storybook/react-vite';
import { Kusa } from './Kusa';

// Config
const meta = {
  component: Kusa,
} satisfies Meta<typeof Kusa>;
export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Default: Story = {};
