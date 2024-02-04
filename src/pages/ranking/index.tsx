import Layout from "@/component/Layout";
import FooterLayout from "@/component/layout/FooterLayout";
import { ReactElement } from "react";

export default function Ranking() {
	return <div>랭킹페이지</div>;
}

Ranking.getLayout = function getLayout(page: ReactElement) {
	return (
		<Layout>
			<FooterLayout>{page}</FooterLayout>
		</Layout>
	);
};
