import ProductListRow from "@/component/products/ProductRow";
import ProductRow from "@/component/products/ProductRow";
import {useInfiniteQuery} from "react-query";
import {getProducts} from "@/remote/products";
import {flatten} from "lodash";
import InfiniteScroll from "react-infinite-scroll-component";
import {useCallback} from "react";
import Image from "next/image";

export default function ProductList() {
    const {
        data, hasNextPage = false, fetchNextPage, isFetching
    } = useInfiniteQuery(['products'], ({pageParam}) => {
        return getProducts(pageParam);
    }, {
        getNextPageParam: (snapShot) => {
            return snapShot.lastVisible;
        }
    });

    const loadMore = useCallback(() => {
        if (!hasNextPage || isFetching) {
            return
        }
        fetchNextPage();
    }, [fetchNextPage, hasNextPage, isFetching])
    if (data == null) {
        return null
    }

    console.log(data);

    const products = flatten(data?.pages.map(({items}) => items));
    return (
        <div>
            <InfiniteScroll
                dataLength={products.length}
                hasMore={hasNextPage}
                loader={<></>}
                next={loadMore}
            >
                {products.map((product, idx) => {
                    console.log(product);
                    return (
                        <ProductListRow
                            key={idx}
                            left={
                            <div>
                                {product.name}
                                <Image
                                    src={product.imageUrl[0]}
                                    width={150}
                                    height={250}
                                    alt="상품이미지"
                                />

                            </div>
                        }
                        contents={<ProductRow.Text title={product.price.toString()}/>}
                        right={<div>{product.brand}
                    </div>}
                        // onClick={}
                    />)
                })}
            </InfiniteScroll>
        </div>
    )
}