import { colors } from "@/styles/colorPalette";
import styled from "@emotion/styled";
import { Text } from "../text/Text";

interface ICheckbox {
	text: string;
	onChange: () => void;
}
function Checkbox({ text, onChange }: ICheckbox) {
	return (
		<StyledLabel htmlFor={text}>
			<Input
				onChange={onChange}
				type="checkbox"
				id={text}
				name={text}
			/>
			<Text typography="t7" style={{ marginLeft: "5px" }}>
				{text}
			</Text>
		</StyledLabel>
	);
}

export default Checkbox;

const Input = styled.input`
  appearance: none;
  width: 1.3rem;
  height: 1.3rem;
  border: 1.5px solid gainsboro;
  border-radius: 0.35rem;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${colors.purple};
`;

const StyledLabel = styled.label`
	display: flex;
	align-items: center;
	user-select: none;
`;
