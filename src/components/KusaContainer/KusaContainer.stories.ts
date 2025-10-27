import type { Meta, StoryObj } from '@storybook/react-vite';
import { KusaContainer } from './KusaContainer';

// Config
const meta = {
  component: KusaContainer,
} satisfies Meta<typeof KusaContainer>;
export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Default: Story = {};
