import type { Meta, StoryObj } from "@storybook/react-vite";
import { ToDoListContextProvider } from "../../contexts/ToDoList";
import { ToDoListPage } from ".";

const meta = {
  title: "Pages/ToDoListPage",
  component: ToDoListPage,
  tags: ["autodocs"],
  argTypes: {
    //label: { control: "text" },
    //onDelete: { action: "삭제 버튼 클릭됨" },
  },
  decorators: [
    (Story) => (
      <ToDoListContextProvider
        initialValue={["리액트 공부하기", "운동하기", "책 읽기"]}
      >
        <Story />
      </ToDoListContextProvider>
    ),
  ],
} satisfies Meta<typeof ToDoListPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  //args: {
  //    label: "리액트 공부하기"
  //},
};
