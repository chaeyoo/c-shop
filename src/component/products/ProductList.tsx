import ProductListRow from "@/component/products/ProductRow";
import ProductRow from "@/component/products/ProductRow";
import {useInfiniteQuery} from "react-query";
import {getProducts} from "@/remote/products";
import {flatten} from "lodash";
import InfiniteScroll from "react-infinite-scroll-component";
import {useCallback, useState} from "react";
import Image from "next/image";
import Loader from "@/component/loader/Loader";
import styled from 'styled-components';

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
export default function ProductList(props: { mainCtgr: any, subCtgr: any }) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const {mainCtgr, subCtgr} = props;
    const {
        data, hasNextPage = false, fetchNextPage, isFetching
    } = useInfiniteQuery(['products'], ({pageParam}) => {

        return getProducts(mainCtgr, subCtgr, pageParam);
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
        return null;
    }

    console.log(data);
    const products = flatten(data?.pages.map(({items}) => items));
    return (<div style={{margin: "5px"}}>
            <InfiniteScroll
                dataLength={products.length}
                hasMore={hasNextPage}
                loader={<Loader basic={true}/>}
                next={loadMore}
            >
                <List>
                    {products.map((product, idx) => {
                        console.log(product);
                        return (<ProductListRow
                            key={idx}
                            left={<div>
                                <p style={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    width: "170px",
                                }}>
                                    {product.name}
                                </p>


                            </div>}
                            contents={<ProductRow.Text title={product.price.toString()}/>}
                            right={ <Image
                                src={product.imageUrl[0]}
                                width={100}
                                height={150}
                                alt="상품이미지"
                            />}
                            // onClick={}
                        />)
                    })}
                </List>
            </InfiniteScroll>
        </div>)
}