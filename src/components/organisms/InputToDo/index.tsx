import { styled } from "storybook/theming";
import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  aign-items: center;
  justify-content: center;
`;
export const InputToDo = () => {
  const [toDo, setToDo] = useState("");
  const navigate = useNavigate();
  const onAdd = () => {
    alert(`할 일 추가: ${toDo}`);
    setToDo("");
    navigate("/"); // 추가 후 홈으로 이동
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDo(e.target.value);
  };
  return (
    <Container>
      <Input value={toDo} onChange={handleChange} />
      <Button label="추가" color="#304ffe" onClick={onAdd} />
    </Container>
  );
};
