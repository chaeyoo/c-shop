import { useEffect, useState } from "react";
import { getProducts } from "@/remote/products";
import ProductList from "@/component/products/ProductList";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { Spacing } from "@/component/spacing/Spacing";
import { Flex } from "@/component/flex/Flex";
import { css } from "@emotion/react";
import { colors } from "@/styles/colorPalette";
import { GoChevronDown } from "react-icons/go";
import Base from "@/component/bottomSheet/Base";
const Filter = css`
	width: 100%;
	height: 45px;
	background-color: ${colors.white};
	position: fixed;
	padding-left: 10px;
`;

const FilterItem = css`
	border: 1px solid ${colors.grey};
	border-radius: 15px;
	padding: 7px 10px;
	font-size: 12px;
	margin: 0px 5px;
`;
export default function Products() {
	const { query } = useRouter();
	useEffect(() => {
		console.log("query.slug::", query.slug);
		console.log("uery.sub::", query.sub);

		if (query.slug && query.sub) {
			getProducts(query.slug, query.sub).then((response) => {
				console.log("response", response);
			});
		}
	}, []);
	return (
		<div>
			<Flex css={Filter} align="center">
				<Flex css={FilterItem}>
					{" "}
					추천순
					<Spacing size={4} direction="horizontal" />
					<GoChevronDown />
				</Flex>
				<Flex css={FilterItem}>
					{" "}
					색상
					<Spacing size={4} direction="horizontal" />
					<GoChevronDown />
				</Flex>
				<Flex css={FilterItem}>
					{" "}
					추천순
					<Spacing size={4} direction="horizontal" />
					<GoChevronDown />
				</Flex>
				<Flex css={FilterItem}>
					{" "}
					브랜드
					<Spacing size={4} direction="horizontal" />
					<GoChevronDown />
				</Flex>
			</Flex>
			<Spacing size={37} />
			{query.slug && query.sub && (
				<ProductList mainCtgr={query.slug} subCtgr={query.sub} />
			)}
			<Base/>
		</div>
	);
}
