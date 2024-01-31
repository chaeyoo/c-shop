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
import SideMenu, { ListItem } from "@/bottomSheet/SideMenu";
const Filter = css`
	width: 100%;
	height: 45px;
	background-color: ${colors.white};
	position: fixed;
	padding-left: 10px;
	overflow-x: auto;
`;

const FilterItem = css`
	border: 1px solid ${colors.grey};
	border-radius: 15px;
	padding: 7px 10px;
	font-size: 12px;
	margin: 0px 7px 5px 7px;
	white-space: nowrap;
`;
export default function Products() {
	const { query } = useRouter();
	const [isSideOpen, setIsSideOpen] = useState<boolean>(false);
	const handleOpenFilter = () => {
		setIsSideOpen(true);
	};
	const data: ListItem[] = [
		{ name: "1", url: "/private/loans" },
		{ name: "2", url: "/private/cards" },
		{ name: "3", url: "/private/deposits" },
		{ name: "4", url: "/private/services" },
		{ name: "5", url: "/private/services" },
		{ name: "6", url: "/private/services" },
		{ name: "7", url: "/private/services" },
	];
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
				<Flex css={FilterItem} onClick={handleOpenFilter}>
					검색
					<Spacing size={4} direction="horizontal" />
					<GoChevronDown />
				</Flex>
				<Flex css={FilterItem} onClick={handleOpenFilter}>
					색상
					<Spacing size={4} direction="horizontal" />
					<GoChevronDown />
				</Flex>
				<Flex css={FilterItem} onClick={handleOpenFilter}>
					가격
					<Spacing size={4} direction="horizontal" />
					<GoChevronDown />
				</Flex>
				<Flex css={FilterItem} onClick={handleOpenFilter}>
					브랜드
					<Spacing size={4} direction="horizontal" />
					<GoChevronDown />
				</Flex>
				<Flex css={FilterItem} onClick={handleOpenFilter}>
					세일
					<Spacing size={4} direction="horizontal" />
					<GoChevronDown />
				</Flex>
			</Flex>
			<Spacing size={37} />
			{query.slug && query.sub && (
				<ProductList mainCtgr={query.slug} subCtgr={query.sub} />
			)}
			<SideMenu
				overlaycolor="rgba(0,0,0, 0.4)"
				data={data}
				width={290}
				isSideOpen={isSideOpen}
				setIsSideOpen={setIsSideOpen}
				/* constrols={constrols} */
			/>
		</div>
	);
}
