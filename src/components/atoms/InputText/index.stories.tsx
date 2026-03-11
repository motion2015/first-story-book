import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test"; // 에러가 난다면 'storybook/test'로 시도
import { InputText } from ".";
import { useState } from "react";

const meta = {
  title: "Atoms/InputText",
  component: InputText,
  tags: ["autodocs"],
  // args: {
  //   onChange: fn(),
  // },
  // 핵심: onChange가 발생하면 Actions 탭에 기록하도록 강제 설정
  argTypes: {
    onChange: { action: "입력값 변경됨" },
  },
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  // 에러가 나는 useArgs를 쓰지 않고 리액트 기본 useState만 사용합니다.
  render: (args) => {
    const [val, setVal] = useState("리액트란?");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setVal(e.target.value); // 입력창 글자 변경
      const newValue = e.target.value;
      // 2. args.onChange가 fn()이므로, 이것만 실행해도 Action 탭에 찍힙니다.
      if (args.onChange) {
        args.onChange(newValue); // Action 탭에 "입력값 변경됨: newValue" 형태로 기록됩니다.
      }
    };

    return <InputText {...args} value={val} onChange={handleChange} />;
  },
};
