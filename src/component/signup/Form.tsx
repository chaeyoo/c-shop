import { Button } from "../button/Button";
import { Flex } from "../flex/Flex";
import { TextField } from "../input/TextField";

export default function Form() {
	return (
		<Flex direction="column" style={{ margin: "15px" }}>
			<TextField label={"이메일 주소"} isRequired />
			<TextField label={"비밀번호"} isRequired />
			<Button color="purple" full size="large" borderRadius primary>
				가입하기
			</Button>
		</Flex>
	);
}
