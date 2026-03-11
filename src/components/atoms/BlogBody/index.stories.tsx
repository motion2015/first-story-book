import type { Meta, StoryObj } from "@storybook/react";
import { BlogBody } from ".";
const meta = {
  title: "Atoms/BlogBody",
  component: BlogBody,
  tags: ["autodocs"],
  // 전역(preview.ts)에서 Provider를 설정했으므로 여기서 decorators는 삭제합니다.
  argTypes: {
    // 필요한 경우 추가 설정
  },
} satisfies Meta<typeof BlogBody>;

export default meta;
type Story = StoryObj<typeof meta>;

// 이제 Default 스토리는 preview.ts에 설정된 Context 데이터를 자동으로 가져옵니다.
export const Default: Story = {
  args: {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
};
