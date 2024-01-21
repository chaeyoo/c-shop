import Form from "@/component/signup/Form";
import { useAlertContext } from "@/contexts/AlertContext";
import { IFormValues } from "@/models/signup";
import { useRouter } from "next/router";

export default function Signup() {
	const handleSubmit = async (formValues: IFormValues) => {
		console.log(formValues, "formValues");
	

		
	};
	return (
		<>
			<Form onSubmit={handleSubmit} />
		</>
	);
}
