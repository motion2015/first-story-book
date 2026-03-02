import type { Meta, StoryObj } from "@storybook/react-vite";
import { PageTitle } from ".";

const meta = {
  title: "Atoms/PageTitle",
  component: PageTitle,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      //default: "blue",
      values: [{ name: "blue", value: "#ef09c1" }],
    },
  },
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof PageTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    title: "할 일 목록 앱",
  },
};
