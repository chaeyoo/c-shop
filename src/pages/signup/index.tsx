import Layout from "@/component/Layout";
import Form from "@/component/signup/Form";
import { IFormValues } from "@/models/signup";
import { ReactElement } from "react";

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

Signup.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};
