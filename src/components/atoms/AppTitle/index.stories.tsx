import type { Meta, StoryObj } from "@storybook/react-vite";
import { BrowserRouter } from "react-router-dom";
import { AppTitle } from ".";

const meta = {
  title: "Atoms/AppTitle",
  component: AppTitle,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      //default: "blue",
      values: [{ name: "blue", value: "#ef09c1" }],
    },
  },
  // decorators: [
  //   (Story) => (
  //     <BrowserRouter>
  //       <Story />
  //     </BrowserRouter>
  //   ),
  // ],
} satisfies Meta<typeof AppTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
