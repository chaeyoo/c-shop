import Form from "@/component/signin/Form";
import { IFormValues } from "@/models/signin";
import { useCallback } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/remote/firebase";
import { useAlertContext } from "@/contexts/AlertContext";
import { useRouter } from "next/router";
export default function Signin() {
	const router = useRouter();
	const { open } = useAlertContext();
	const handleSubmit = useCallback(async (formValues: IFormValues) => {
		console.log(formValues);
		const { email, password } = formValues;
		try {
			const response = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			router.push('/')
			console.log(response);
		} catch (e) {
			
			open({
				title: "로그인 실패",
				onButtonClick: () => {},
				description: "아이디와 비밀번호를 확인해주세요.",
			});
		}
	}, []);
	return (
		<>
			<Form onSubmit={handleSubmit} />
		</>
	);
}
