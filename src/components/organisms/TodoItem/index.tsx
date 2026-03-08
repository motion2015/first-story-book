import React from "react";
import "./TodoItem.css";
import { Label } from "../../atoms/Label";
import { Button } from "../../atoms/Button";
import { styled } from "storybook/theming";
interface Props {
  readonly label: string;
  readonly onDelete?: () => void;
}
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

export const TodoItem = ({ label, onDelete }: Props) => {
  return (
    <Container className="todo-item">
      <Label label={label} />
      <Button label="삭제" onClick={onDelete} />
    </Container>
  );
};
