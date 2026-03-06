import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from ".";

const meta = {
  title: "Atoms/Input",
  component: Input,
  parameters: {
    layout: "fullscreen",
  },
  // 핵심: onChange가 발생하면 Actions 탭에 기록하도록 강제 설정
  argTypes: {
    onChange: { action: "입력값 변경됨" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: "기본 인풋",
  },
};