import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { Button } from "../button/Button";
import FixedBottomButton from "../button/FixedBottomButton";
import Checkbox from "../checkbox/Checkbox";
import { Flex } from "../flex/Flex";
import { TextField } from "../input/TextField";
import { Spacing } from "../spacing/Spacing";
import { IFormValues } from "@/models/signup";
import validator from "validator";

export default function Form({
	onSubmit,
}: {
	onSubmit: (formValues: IFormValues) => void;
}) {
	const [formValues, setFormValues] = useState<IFormValues>({
		email: "",
		password: "",
		passwordCheck: "",
	});

	const [dirty, setDirty] = useState<Partial<IFormValues>>({});
	function validate(formValues: IFormValues) {
		const reg =
			/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

		let errors: Partial<IFormValues> = {};
		if (!validator.isEmail(formValues.email)) {
			errors.email = "이메일 형식을 확인해주세요.";
		}

		if (formValues.password.length < 8) {
			errors.password = "비밀번호 8글자 이상 입력해주세요.";
		} else if (!reg.test(formValues.password)) {
			errors.password =
				"하나 이상의 대문자, 하나의 소문자, 하나의 숫자 및 하나의 특수 문자로 구성해주세요. ";
		} else if (
			!validator.equals(formValues.password, formValues.passwordCheck)
		) {
			errors.passwordCheck = "비밀번호를 확인해주세요.";
		}
		return errors;
	}

	const handleFormValues = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setFormValues((prevValues) => ({
			...prevValues,
			[e.target.name]: e.target.value,
		}));
	}, []);

	const handleBlur = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setDirty((prevDirty) => ({
			...prevDirty,
			[e.target.name]: true,
		}));
	}, []);

	const errors: Partial<IFormValues> = useMemo(
		() => validate(formValues),
		[formValues]
	);

	const validResult = Object.keys(errors).length === 0;
	return (
		<Flex direction="column" style={{ padding: "20px" }}>
			<TextField
				label={"이메일 주소"}
				name="email"
				isRequired
				value={formValues.email}
				onChange={handleFormValues}
				hasError={Boolean(dirty.email) && Boolean(errors.email)}
				helpMessage={errors.email}
				onBlur={handleBlur}
			/>
			<Spacing size={16} />
			<TextField
				label={"비밀번호"}
				name="password"
				isRequired
				type="password"
				value={formValues.password}
				onChange={handleFormValues}
				hasError={Boolean(dirty.password) && Boolean(errors.password)}
				helpMessage={errors.password}
				onBlur={handleBlur}
			/>
			<Spacing size={16} />
			<TextField
				label={"비밀번호 확인"}
				name="passwordCheck"
				isRequired
				type="password"
				value={formValues.passwordCheck}
				onChange={handleFormValues}
				hasError={
					Boolean(dirty.passwordCheck) &&
					Boolean(errors.passwordCheck)
				}
				helpMessage={errors.passwordCheck}
				onBlur={handleBlur}
			/>
			<Spacing size={16} />
			<Checkbox
				text="동의합니다."
				onChange={() => {
					console.log("체크박스 클릭");
				}}
			></Checkbox>
			<Spacing size={16} />
			<FixedBottomButton
				label="가입하기"
				onClick={() => {
					onSubmit(formValues);
				}}
				disabled={!validResult}
			/>
		</Flex>
	);
}
