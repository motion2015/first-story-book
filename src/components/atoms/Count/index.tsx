import { styled } from "storybook/theming";
import { Title } from "../Title";

interface Props {
  /** 표시할 숫자 */
  readonly count: number;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  background-color: #333333;
  border-radius: 12px;
  min-width: 40px;
  height: 40px;
  h1 {
    margin-bottom: 0;
  } /* Title 컴포넌트의 기본 스타일을 덮어씁니다 */
`;

export const Count = ({ count }: Props) => {
  return (
    <Wrapper>
      {/* Title 컴포넌트를 활용해 숫자를 보여줍니다 */}
      <Title title={String(count)} />
    </Wrapper>
  );
};
