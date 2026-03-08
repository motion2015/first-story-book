import { Button } from "../../atoms/Button";
import { PageTitle } from "../../atoms/pageTitle";
import { TodoItem } from "../../organisms/TodoItem";
import { styled } from "storybook/theming";
import { useNavigate } from "react-router-dom";
interface Props {
  readonly toDoList:ReadonlyArray<string>;
  readonly onDelete?: (toDo: string) => void;
}   
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
  padding: 32px;
  border-radius: 8px;
  background-color: #ffffff;
  .title {
    color: orange;
    font-size: 24px;
    margin-bottom: 16px;
  }
`;

const ToDoListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 40px;
  right: 40px;
  z-index: 1;
`;
export const ToDoList = ({ toDoList, onDelete }: Props) => {
    const navigate = useNavigate();
  return (
    <Container>
      <Contents>
        <PageTitle title="할 일 목록" />
        <ToDoListContainer>
          {toDoList.map((toDo, index) => (
            <TodoItem key={index} label={toDo} onDelete={() => onDelete?.(toDo)} />
          ))}
        </ToDoListContainer>
      </Contents>
      <ButtonContainer>
        <Button label="할 일 추가" color="#304ffe"  onClick={()=>navigate('/add')}/>
      </ButtonContainer>
    </Container>
  );
};
