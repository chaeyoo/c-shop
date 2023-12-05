import ProductListRow from "@/component/products/ProductRow";
import ProductRow from "@/component/products/ProductRow";
import {useQuery} from "react-query";
import {getProducts} from "@/remote/products";


export default function ProductList() {
const {data} = useQuery(['products'], () => getProducts());
if (data == null) {
    return null
}

return (<div>
        {data.map((product, idx) => {
            return (
                <ProductListRow
                    key={idx}
                    left={<div>{product.name}</div>}
                    contents={<ProductRow.Text title={"타이틀입니다"}/>}
                    right={<div>{product.brand}</div>}
                    // onClick={}
                />)
        })}

    </div>)
}