import { styled } from "storybook/theming";
import { Button } from "../../atoms/Button";
import { PageTitle } from "../../atoms/pageTitle";
import { InputToDo } from "../../organisms/InputToDo";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 32px;
  border-radius: 8px;
  .title {
    color: orange;
    margin-bottom: 16px;
    font-size: 24px;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 40px;
  right: 40px;
`;

export const ToDoInput = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Contents>
        <PageTitle title="할 일 추가" />
        <InputToDo />
      </Contents>
      <ButtonContainer>
        <Button label="닫기" onClick={() => navigate("/")} />
      </ButtonContainer>
    </Container>
  );
};
