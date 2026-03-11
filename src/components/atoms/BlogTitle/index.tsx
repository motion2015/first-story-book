import { styled } from "storybook/theming";

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 16px;
`;

interface Props {
  readonly title?: string;
}

export const BlogTitle = ({ title }: Props) => {
  return <Title>{title || "BlogTitle"}</Title>;
};
