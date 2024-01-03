import { Button } from "../button/Button";
import FixedBottomButton from "../button/FixedBottomButton";
import { Flex } from "../flex/Flex";
import { TextField } from "../input/TextField";
import { Spacing } from "../spacing/Spacing";

export default function Form() {
	return (
		<>
			<Flex direction="column" style={{ margin: "15px" }}>
				<TextField label={"이메일 주소"} isRequired />
				<Spacing size={16} />
				<TextField label={"비밀번호"} isRequired />{" "}
				<Spacing size={16} />
				<FixedBottomButton
					label="로그인"
					onClick={() => {
						// onSubmit(formValues);
					}}
					// disabled={!validResult}
				/>
			</Flex>
		</>
	);
}
