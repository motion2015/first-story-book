import { styled } from "storybook/theming";

const Body = styled.div`
  //   white-space: nowrap;
  //   text-overflow: ellipsis;
  //   overflow: hidden;
  //   height: 100px;

  /* 여러 줄 말줄임을 위한 필수 속성 */
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 보여줄 줄 수 (3줄) */
  -webkit-box-orient: vertical;

  /* 레이아웃 설정 */
  overflow: hidden; /* 넘치는 텍스트 숨김 */
  text-overflow: ellipsis; /* ... 표시 */

  /* (선택) 높이가 고정되어 있다면 줄 간격에 맞춰 조절 */
  line-height: 1.5;
  max-height: 5.5em; /* line-height * 줄 수 (1.5 * 5) */
`;

interface Props {
  readonly content?: string;
}
export const BlogBody = ({ content }: Props) => {
  return <Body>{content}</Body>;
};
