import { styled } from "storybook/theming";

const Container = styled.h1`
  margin-bottom: 0;
`;

interface Props {
  readonly title: string;
}

export const PageTitle = ({ title }: Props) => {
  return <Container>{title}</Container>;
};
