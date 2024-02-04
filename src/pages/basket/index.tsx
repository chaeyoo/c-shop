import Layout from "@/component/Layout";
import { ReactElement } from "react";

export default function Basket() {
	return <>장바구니 페이지</>;
}

Basket.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};
