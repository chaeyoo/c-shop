import { useState } from "react";
import { Button } from "../button/Button";
import FixedBottomButton from "../button/FixedBottomButton";
import Checkbox from "../checkbox/Checkbox";
import { Flex } from "../flex/Flex";
import { TextField } from "../input/TextField";
import { Spacing } from "../spacing/Spacing";
import { FormValues } from "@/models/signup";

export default function Form() {
	const [formValues, setFormValues] = useState<FormValues>({
		email: '',
		password: '',
		passwordCheck: ''
	})
	return (
		<Flex direction="column" style={{ padding: "20px" }}>
			<TextField label={"이메일 주소"} isRequired  value={formValues.email}/>
			<Spacing size={16} />
			<TextField label={"비밀번호"} isRequired type="password" value={formValues.password}/>
			<Spacing size={16} />
			<TextField label={"비밀번호 확인"} isRequired type="passwordCheck"  value={formValues.passwordCheck}/>
			<Spacing size={16} />
			<Checkbox
				text="동의합니다."
				onChange={() => {
					console.log("체크박스 클릭");
				}}
			></Checkbox>
			<Spacing size={16} />
			<FixedBottomButton label="가입하기" onClick={() => {}} disabled />
		</Flex>
	);
}
