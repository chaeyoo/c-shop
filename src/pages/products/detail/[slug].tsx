import Carousel from "@/component/products/detail/carousel/Carousel";
import Loader from "@/component/loader/Loader";
import useProduct from "@/hooks/product/userProduct";
import { divide } from "lodash";
import Image from "next/image";
import { useRouter } from "next/router";
import Contents from "@/component/products/detail/contents/Contents";
import { Text } from "@/component/text/Text";
import { Flex } from "@/component/flex/Flex";
import { css } from "@emotion/react";
import { Spacing } from "@/component/spacing/Spacing";
import { Button } from "@/component/button/Button";
import { BsShare } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";
const topInfoBox = css`
	padding: 0px 12px;
`;

const divider = css`
	margin: 10px;
`;

export default function ProductDetail() {
	const { query } = useRouter();
	console.log("query.slug::", query.slug);
	const id = query.slug as string;

	const { isLoading, data } = useProduct({ id });
	console.log(isLoading);
	console.log(data);

	if (!data || isLoading) {
		return <Loader basic={false} />;
	}
	const {
		brand,
		color,
		discount,
		gender,
		imageUrl,
		like,
		name,
		price,
		productInfo,
		season,
		size,
		sizeInfo,
		subCtgr,
		mainCtgr,
	} = data;
	return (
		<div>
			<Carousel images={imageUrl} />
			<Spacing size={5} />
			<div css={topInfoBox}>
				{/* 카테고리 */}
				<Text typography="t7" color="grey">
					{`${mainCtgr} > ${subCtgr} (${brand})`}
				</Text>
				<Spacing size={8} />
				{/* 상품명 */}
				<div>
					<Text typography="t4" bold>
						{name}
					</Text>
				</div>

				<br />
				{/*  할인 가격 & 할인율 */}
				<div>
					<Flex direction="row" justify="space-between">
						<Text typography="t4" bold>
							{(
								Math.floor(
									(price * (100 - discount)) / 100 / 10
								) * 10
							).toLocaleString() + "원"}
						</Text>
						<Flex align="end">
							<Text color="red" typography="t4" bold>
								{discount}%
							</Text>
							<Spacing direction="horizontal" size={4} />
							<Text color="red" typography="t7" bold>
								SALE
							</Text>
						</Flex>
					</Flex>

					{/* 가격 */}
					<Text
						color="grey"
						typography="t6"
						style={{ textDecoration: "line-through" }}
					>
						{price}원
					</Text>
				</div>
			</div>
			<hr css={divider} />
			<div css={topInfoBox}>
				<Flex direction="column">
					<Text typography="t6">전 상품 무료배송</Text>
					<Spacing size={5} />
					<Text typography="t7" color="grey">
						가구 및 아트 일부 상품 제외
					</Text>
				</Flex>
			</div>
			<Spacing size={10} />
			<Flex justify="space-evenly">
				<Button  size="medium" style={{ width: "45%" }} color="grey" borderRadius>
					<Flex direction="row" align="center" justify="center">
						<BsShare /> <Spacing size={5} direction="horizontal"/>
						공유하기
					</Flex>
				</Button>
				<Button size="medium" style={{ width: "45%" }} color="grey" borderRadius>
					<Flex direction="row" align="center" justify="center">
						<BiHeart /> <Spacing size={5} direction="horizontal"/> 좋아요 {like}
					</Flex>
				</Button>
			</Flex>
			{/*
			<Contents contents={productInfo} />
			<div>{productInfo}</div>
			<div>
				{color.map((v, i) => (
					<div key={i}>{v}</div>
				))}
			</div>*/}
		</div>
	);
}
