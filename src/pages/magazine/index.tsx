import Layout from "@/component/Layout";
import FooterLayout from "@/component/layout/FooterLayout";
import { ReactElement } from "react";

export default function Magazine() {
	return <>메거진 페이지</>;
}

Magazine.getLayout = function getLayout(page: ReactElement) {
	return (
		<Layout>
			<FooterLayout>{page}</FooterLayout>
		</Layout>
	);
};
