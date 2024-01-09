import ProductListRow from "@/component/products/ProductRow";
import ProductRow from "@/component/products/ProductRow";
import { useInfiniteQuery } from "react-query";
import { getProducts } from "@/remote/products";
import { flatten } from "lodash";
import InfiniteScroll from "react-infinite-scroll-component";
import { useCallback, useState } from "react";
import Image from "next/image";
import Loader from "@/component/loader/Loader";
import styled from "styled-components";
import { Flex } from "../flex/Flex";

const List = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;
export default function ProductList(props: { mainCtgr: any; subCtgr: any }) {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const { mainCtgr, subCtgr } = props;
	const {
		data,
		hasNextPage = false,
		fetchNextPage,
		isFetching,
	} = useInfiniteQuery(
		["products"],
		({ pageParam }) => {
			return getProducts(mainCtgr, subCtgr, pageParam);
		},
		{
			getNextPageParam: (snapShot) => {
				return snapShot.lastVisible;
			},
		}
	);

	const loadMore = useCallback(() => {
		if (!hasNextPage || isFetching) {
			return;
		}
		fetchNextPage();
	}, [fetchNextPage, hasNextPage, isFetching]);
	if (data == null) {
		return null;
	}

	console.log(data);
	const products = flatten(data?.pages.map(({ items }) => items));
	return (
		<div>
			<InfiniteScroll
				dataLength={products.length}
				hasMore={hasNextPage}
				loader={<Loader basic={true} />}
				next={loadMore}
				scrollThreshold={"100px"}
			>
				<List>
					{products.map((product, idx) => {
						console.log(product);
						return (
							<ProductListRow
								key={idx}
								brand={
									<div
										style={{
											fontSize: "12px",
											margin: "10px 0px",
										}}
									>
										{product.brand}
									</div>
								}
								name={
									<div>
										<p
											style={{
												fontSize: "15px",
												lineHeight: "1.25",
												fontWeight: "bold",
												marginBottom: "8px",
											}}
										>
											{product.name}
										</p>
									</div>
								}
								price={
									<>
										<Flex
											direction="row"
											justify="space-between"
											style={{
												margin: "3px 5px",
											}}
										>
											<div
												style={{
													fontSize: "17px",
													fontWeight: "bold",
												}}
											>
												{(
													Math.floor(
														(product.price *
															(100 -
																product.discount)) /
															100 /
															10
													) * 10
												).toLocaleString() + "원"}
											</div>
											{product.discount ? (
												<div
													style={{
														fontSize: "17px",
														fontWeight: "bold",
														color: "#ff2626",
													}}
												>
													{product.discount + "%"}
												</div>
											) : null}
										</Flex>
										{product.discount ? (
											<div
												style={{
													fontSize: "12px",
													textDecoration:
														"line-through",
													color: "#888",
                                                    margin: "3px 5px",
												}}
											>
												{product.price + "원"}
											</div>
										) : null}
									</>
								}
								image={
									<Image
										style={{
											height: "230px",
											width: "200px",
										}}
										src={product.imageUrl[0]}
										width={100}
										height={150}
										alt="상품이미지"
									/>
								}
								// onClick={}
							/>
						);
					})}
				</List>
			</InfiniteScroll>
		</div>
	);
}
