import { styled } from "storybook/theming";

interface ButtonProps {
  /** 버튼 안에 들어갈 문구 */
  label: string;
  /** 강조 색상 여부 */
  primary?: boolean;
  /** 배경색 (커스텀) */
  backgroundColor?: string;
  color?: string;
  /** 버튼 크기 */
  size?: "small" | "medium" | "large";
  /** 클릭 이벤트 */
  onClick?: () => void;
}

const StyledButton = styled.button<{
  $primary?: boolean;
  $backgroundColor?: string;
  $size?: "small" | "medium" | "large";
}>`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  transition: all 0.2s ease;

  /* 크기 설정 */
  padding: ${(props) =>
    props.$size === "small"
      ? "8px 16px"
      : props.$size === "large"
        ? "14px 28px"
        : "11px 20px"};
  font-size: ${(props) =>
    props.$size === "small"
      ? "12px"
      : props.$size === "large"
        ? "16px"
        : "14px"};

  /* 색상 설정 */
  color: ${(props) =>
    props.$primary ? props.color || "#fff" : props.color || "#000"};
  background-color: ${(props) =>
    props.$backgroundColor || (props.$primary ? "#646cff" : "#000000")};

  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    transform: scale(0.98);
  }
`;

export const Button = ({
  label,
  primary = false,
  size = "medium",
  backgroundColor,
  color = "#ff5722",
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton
      type="button"
      $primary={primary}
      $size={size}
      $backgroundColor={backgroundColor}
      color={color}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};
