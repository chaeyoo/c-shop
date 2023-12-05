import React from "react";

interface IProductProps {
    left?: React.ReactNode;
    contents: React.ReactNode;
    right?: React.ReactNode;
    onClick?: () => void;
}
function ListRowText({title}: {title: string}) {
    return (
        <div style={{fontSize: '17px'}}>
            {title}
        </div>
    )
}
function ProductListRow(props: IProductProps) {
    const {left, right, contents, onClick} = props;
    return (
        <div style={{
            border: "1px solid gray",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div>
                {left}
            </div>
            <div>
                {contents}
            </div>
            <div>
                {right}
            </div>
        </div>
    )
}

ProductListRow.Text = ListRowText

export default ProductListRow;