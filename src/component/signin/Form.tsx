import { ChangeEvent, useCallback, useMemo, useState } from "react";
import FixedBottomButton from "../button/FixedBottomButton";
import { Flex } from "../flex/Flex";
import { TextField } from "../input/TextField";
import { Spacing } from "../spacing/Spacing";
import { css } from "@emotion/react";
import { IFormValues } from "@/models/signin";
import validator from "validator";
const formContainerStyles = css`
	padding: 20px;
`;

export default function Form({ onSubmit }: {onSubmit: (formValue: IFormValues) => void}) {
	const [formValues, setFormValues] = useState({
		email: "",
		password: "",
	});

	const handleFormValues = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setFormValues((prevFormValues) => ({
			...prevFormValues,
			[e.target.name]: e.target.value,
		}));
	}, []);

	function validate(formValues: IFormValues) {
		let errors: Partial<IFormValues> = {};
		if (!validator.isEmail(formValues.email)) {
			errors.email = "이메일 형식을 확인해주세요.";
		}

		if (formValues.password.length < 8) {
			errors.password = "비밀번호 8글자 이상 입력해주세요.";
		}
		return errors;
	}

	const errors: Partial<IFormValues> = useMemo(
		() => validate(formValues),
		[formValues]
	);

	const validResult = Object.keys(errors).length === 0;
	return (
		<>
			<Flex
				direction="column"
				css={formContainerStyles}
				style={{ margin: "15px" }}
			>
				<TextField
					label={"이메일 주소"}
					name="email"
					isRequired
					onChange={handleFormValues}
					value={formValues.email}
				/>
				<Spacing size={16} />
				<TextField
					label={"비밀번호"}
					name="password"
					type="password"
					isRequired
					onChange={handleFormValues}
					value={formValues.password}
				/>{" "}
				<Spacing size={16} />
				<FixedBottomButton
					label="로그인"
					onClick={() => {
						onSubmit(formValues);
					}}
					disabled={!validResult}
				/>
			</Flex>
		</>
	);
}
