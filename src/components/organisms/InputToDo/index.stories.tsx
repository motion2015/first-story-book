import type { Meta, StoryObj } from "@storybook/react";
import { InputToDo } from ".";

const meta = {
    title: "Organisms/InputToDo",
    component: InputToDo,
    tags: ["autodocs"],
    argTypes: {
        //label: { control: "text" },
        //onDelete: { action: "삭제 버튼 클릭됨" },
    },
} satisfies Meta<typeof InputToDo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    //args: {
    //    label: "리액트 공부하기"
    //},
};