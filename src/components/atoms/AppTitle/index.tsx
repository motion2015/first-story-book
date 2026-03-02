import { Link } from "react-router-dom";
import { styled } from "storybook/theming";

const Container = styled(Link)`
  color: #ffffff;
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;
`;

export const AppTitle = () => {
  return <Container to="/">할 일 목록 앱</Container>;
};
