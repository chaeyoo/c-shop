import Layout from "@/component/Layout";
import withAuth from "@/component/hoc/withAuth";
import FooterLayout from "@/component/layout/FooterLayout";
import { ReactElement } from "react";

function Recent() {
	return <>최근 본 페이지</>;
}

const PageWithAuth = withAuth(Recent);

PageWithAuth.getLayout = function getLayout(page: ReactElement) {
	return (
		<Layout>
			<FooterLayout>{page}</FooterLayout>
		</Layout>
	);
};

export default PageWithAuth;
