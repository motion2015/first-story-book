import { styled } from "storybook/theming";
interface Props {
  label?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const TextInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1.2rem;
`;
export const Input = ({ label, onChange, ...props }:Props) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <TextInput 
        onChange={onChange} // 👈 이 부분이 스토리북의 action과 연결되는 통로입니다!
        {...props} 
      />
    </div>
  );
};
