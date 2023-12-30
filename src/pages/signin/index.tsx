import { Button } from "@/component/button/Button";
import { Flex } from "@/component/flex/Flex";
import { TextField } from "@/component/input/TextField";

interface ISignInProps {}

export default function Index(props: ISignInProps) {
	return (
		<>
			<Flex direction="column" style={{ margin: "15px" }}>
				<TextField label={"이메일 주소"} isRequired />
				<TextField label={"비밀번호"} isRequired />
				<Button color="purple" full size="large" borderRadius primary>
					로그인
				</Button>
			</Flex>
		</>
	);
}
