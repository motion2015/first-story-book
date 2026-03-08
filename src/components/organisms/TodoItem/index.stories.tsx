import type { Meta, StoryObj } from "@storybook/react";
import { TodoItem } from "./";

const meta = {
  title: "Organisms/TodoItem",
  component: TodoItem,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    onDelete: { action: "삭제 버튼 클릭됨" },
  },
} satisfies Meta<typeof TodoItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: "리액트 공부하기"
    },
};

// export const Dark: Story = {
//   parameters: {
//     backgrounds: {
//       default: "dark",
//     },
//   },
// };
