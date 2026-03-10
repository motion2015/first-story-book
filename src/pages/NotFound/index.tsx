import { styled } from "storybook/theming";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #eeeeee;
`;

export const NotFound = () => {
  return (
    <Container>
      404
      <br />
      NotFound
    </Container>
  );
};
