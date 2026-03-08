import { styled } from "storybook/theming";
import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToDoListContext } from "../../../contexts/ToDoList";

const Container = styled.div`
  display: flex;
  aign-items: center;
  justify-content: center;
`;
export const InputToDo = () => {
  const [toDo, setToDo] = useState("");
  const { onAdd } = useContext(ToDoListContext);
  const navigate = useNavigate();
  const onAddTodo = () => {
    if (toDo.trim() === "") return; // 빈 문자열인 경우 추가하지 않음
    onAdd(toDo);
    setToDo("");
    navigate("/"); // 추가 후 홈으로 이동
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDo(e.target.value);
  };
  return (
    <Container>
      <Input value={toDo} onChange={handleChange} />
      <Button label="추가" color="#304ffe" onClick={onAddTodo} />
    </Container>
  );
};
