import type { Meta, StoryObj } from "@storybook/react";
import { BlogTitle } from ".";
const meta = {
  title: "Atoms/BlogTitle",
  component: BlogTitle,
  tags: ["autodocs"],
  // 전역(preview.ts)에서 Provider를 설정했으므로 여기서 decorators는 삭제합니다.
  argTypes: {
    // title: { control: "text" },
  },
} satisfies Meta<typeof BlogTitle>;

export default meta;
type Story = StoryObj<typeof meta>;
// 이제 Default 스토리는 preview.ts에 설정된 Context 데이터를 자동으로 가져옵니다.
export const Default: Story = {
  args: {
    title: "나의 첫 번째 블로그",
  },
};
