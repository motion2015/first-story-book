import type { Meta, StoryObj } from "@storybook/react";
import { ToDoList } from ".";

const meta = {
  title: "Templates/ToDoList",
  component: ToDoList,
  tags: ["autodocs"],
  argTypes: {
    toDoList: { control: "text" },
    onDelete: { action: "삭제 버튼 클릭됨" },
  },
} satisfies Meta<typeof ToDoList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    toDoList: [],
  },
  //args: {
  //    label: "리액트 공부하기"
  //},
};

export const WithItems: Story = {
  args: {
    toDoList: ["리액트 공부하기", "스토리북 공부하기", "테스트 코드 작성하기"],
  },
};

// export const Dark: Story = {
//   parameters: {
//     backgrounds: {
//       default: "dark",
//     },
//   },
// };
