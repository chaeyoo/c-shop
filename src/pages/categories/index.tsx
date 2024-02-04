import Layout from "@/component/Layout";
import { Tab } from "@/component/categories/Tab";
import { ReactElement } from "react";

export default function Categories() {
	return (
		<>
			<Tab />
		</>
	);
}

Categories.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};
