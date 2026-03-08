import type { Meta, StoryObj } from "@storybook/react-vite";
import { ToDoListPage } from ".";

const meta = {
  title: "Pages/ToDoListPage",
  component: ToDoListPage,
  tags: ["autodocs"],
  // 전역(preview.ts)에서 Provider를 설정했으므로 여기서 decorators는 삭제합니다.
  argTypes: {
    // 필요한 경우 추가 설정
  },
} satisfies Meta<typeof ToDoListPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// 이제 Default 스토리는 preview.ts에 설정된 Context 데이터를 자동으로 가져옵니다.
export const Default: Story = {};