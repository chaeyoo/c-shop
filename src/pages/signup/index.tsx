import Form from "@/component/signup/Form";
import { COLLECTIONS } from "@/constants";
import { useAlertContext } from "@/contexts/AlertContext";
import { IFormValues } from "@/models/signup";
import { auth, store } from "@/remote/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";

export default function Signup() {
	const { open } = useAlertContext();
	const handleSubmit = async (formValues: IFormValues) => {
		console.log(formValues, "formValues");
		const { email, password } = formValues;
		const { user } = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);

		console.log(user);

		// 인증 유저: store에 저장
		const newUser = {
			uid: user.uid,
			emil: user.email,
		};

		await setDoc(
			doc(collection(store, COLLECTIONS.USER), user.uid),
			newUser
		);
		open({
			title: "완료",
			description: "회원가입이 완료 되었습니다.",
			onButtonClick: () => {},
			buttonLabel: "확인",
		});
	};
	return (
		<>
			<Form onSubmit={handleSubmit} />
		</>
	);
}
