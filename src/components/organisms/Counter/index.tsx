import { useState } from "react";
import { styled } from "storybook/theming";
import { Title } from "../../atoms/Title";  // 경로 확인 필요!
import { Button } from "../../atoms/Button";
import { Count } from "../../atoms/Count";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px;
  background-color: #201827; // Title 기본 배경색과 맞춤
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`;

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount((prev) => prev + 1);
  const handleDecrease = () => setCount((prev) => prev - 1);

  return (
    <StyledContainer>
      <Title title="Counter App" />
      <Count count={count} />
      <ButtonGroup>
        <Button label="-" onClick={handleDecrease} size="large" />
        <Button label="+" onClick={handleIncrease} size="large" primary />
      </ButtonGroup>
    </StyledContainer>
  );
};