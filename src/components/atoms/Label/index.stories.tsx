import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from ".";

const meta = {
  title: "Atoms/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      //default: "blue",
      values: [{ name: "blue", value: "#ef09c1" }],
    },
  },

  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "블로그 제목",
  },
};
