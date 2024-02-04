import Layout from "@/component/Layout";
import withAuth from "@/component/hoc/withAuth";
import FooterLayout from "@/component/layout/FooterLayout";
import { ReactElement } from "react";

function Like() {
	return <>
        좋아요 페이지
    </>;
}

const PageWithAuth = withAuth(Like);


PageWithAuth.getLayout = function getLayout(page: ReactElement) {
	return (
		<Layout>
			<FooterLayout>{page}</FooterLayout>
		</Layout>
	);
};


export default PageWithAuth;
