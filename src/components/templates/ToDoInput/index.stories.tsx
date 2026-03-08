import type { Meta, StoryObj } from "@storybook/react";
import { ToDoInput } from ".";

const meta = {
  title: "Templates/ToDoInput",
  component: ToDoInput,
  tags: ["autodocs"],
  argTypes: {
    //label: { control: "text" },
    //onDelete: { action: "삭제 버튼 클릭됨" },
  },
} satisfies Meta<typeof ToDoInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  //args: {
  //    label: "리액트 공부하기"
  //},
};
