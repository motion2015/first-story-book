import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { Title } from ".";

const meta = {
  title: "Components/Title", // 경로를 계층형으로 지정하면 관리하기 편해요
  component: Title,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    // 문자열 입력 창을 명시적으로 추가할 수 있습니다
    title: { control: "text" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

// 1. 기본 상태
export const Default: Story = {
  args: {
    backgroundColor: "#201827",
    title: "Counter App",
  },
};

// 2. 제목이 아주 길 때 (레이아웃 확인용)
export const LongTitle: Story = {
  args: {
    ...Default.args,
    title: "This is a very long title for testing overflow",
  },
};

// 3. 다른 배경색 테마
export const LightTheme: Story = {
  args: {
    backgroundColor: "#201827",
    title: "Light Mode Title",
  },
};

// 4. 클릭 이벤트 강조 (Actions 탭에서 확인 가능)
export const Clickable: Story = {
  args: {
    ...Default.args,
    title: "Click Me!",
  },
};
