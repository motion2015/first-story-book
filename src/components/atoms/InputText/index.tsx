import styled from "@emotion/styled";

const TextInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1.2rem;
`;

interface Props {
  readonly value?: string;
  readonly defaultValue?: string;
  readonly onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const InputText = ({ value, onChange }: Props) => {
  return <TextInput value={value} onChange={onChange} />;
};
