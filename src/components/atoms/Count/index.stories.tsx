import type { Meta, StoryObj } from "@storybook/react-vite";
import { Count } from ".";

const meta = {
  title: "Components/Count",
  component: Count,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    count: { control: "number" },
  },
} satisfies Meta<typeof Count>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    count: 0,
  },
};

export const LargeNumber: Story = {
  args: {
    count: 999,
  },
};