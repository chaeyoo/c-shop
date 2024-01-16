import React from "react";
import { useRouter } from "next/router";
interface IProductProps {
	name?: React.ReactNode;
	price: React.ReactNode;
	discountedPrice?: React.ReactNode;
	discount?: React.ReactNode;
	image?: React.ReactNode;
	brand?: React.ReactNode;
	like?: React.ReactNode;
	brandId?: string;
	productId?: string;
	onClick?: () => void;
}
function ListRowText({ title }: { title: string }) {
	return <div style={{ fontSize: "20px" }}>{title}</div>;
}
function ProductListRow(props: IProductProps) {
	const router = useRouter();

	const { name, image, price, brand, brandId, onClick, productId,like } = props;
	const handleProductDtl = () => {
		router.push(`/products/detail/${productId}`);
	};

	const handleBrandPage = () => {
		router.push(`/brands/${brandId}`);
	};

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
			<div onClick={handleProductDtl}>{image}</div>
			<div style={{ height: "80px", margin: "0px 4px" }}>
				<div
					onClick={handleBrandPage}
				>
					{brand}
				</div>
				<div
					onClick={handleProductDtl}
				>
					{name}
				</div>
			</div>
			<div style={{ height: "40px", width: "100%" }}>{price}</div>
			<div>{like}</div>
		</div>
	);
}

ProductListRow.Text = ListRowText;

export default ProductListRow;
