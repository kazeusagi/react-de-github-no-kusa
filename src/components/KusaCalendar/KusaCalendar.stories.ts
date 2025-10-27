import type { Meta, StoryObj } from '@storybook/react-vite';
import { KusaCalendar } from './KusaCalendar';

// Config
const meta = {
  component: KusaCalendar,
} satisfies Meta<typeof KusaCalendar>;
export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Default: Story = {};
