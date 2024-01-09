import React from "react";
import { Flex } from "../flex/Flex";

interface IProductProps {
	name?: React.ReactNode;
	price: React.ReactNode;
	discountedPrice?: React.ReactNode;
	discount?: React.ReactNode;
	image?: React.ReactNode;
	brand?: React.ReactNode;
	onClick?: () => void;
}
function ListRowText({ title }: { title: string }) {
	return <div style={{ fontSize: "20px" }}>{title}</div>;
}
function ProductListRow(props: IProductProps) {
	const { name, image, price, brand, onClick } = props;
	return (
		<div
			style={{
				width: "50%",
				// padding: "5px",
				// margin: "5px 3px",
				// border: "1px solid gray",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "start",
				// height: "200px"
			}}
		>
			<div>{image}</div>
			<div style={{margin: "15px 4px", height: '100px'}}>
				<div>{brand}</div>
				<div>{name}</div>
				<div>{price}</div>
			</div>
			{/* <Flex direction="row">
				<div>{price}</div>
				<div>{discountedPrice}</div>
				{discount ? <div>{discount}</div> : null}
			</Flex> */}
		</div>
	);
}

ProductListRow.Text = ListRowText;

export default ProductListRow;
