import { styled } from "storybook/theming";

interface Props {
  readonly title: string;
  readonly backgroundColor?: string; // 배경색 추가
  readonly onClick?: () => void; // 클릭 이벤트 추가
}

// 스타일 컴포넌트에서 props를 받아 배경색을 적용합니다.
const Label = styled.h1<{ $backgroundColor?: string }>`
  margin-bottom: 32px;
  background-color: ${(props) => props.$backgroundColor || "transparent"};
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  color: #fff;
`;

export const Title = ({ title, backgroundColor, onClick }: Props) => {
  return (
    <Label $backgroundColor={backgroundColor} onClick={onClick}>
      {title}
    </Label>
  );
};
