import {useEffect, useState} from "react";
import {getProducts} from "@/remote/products";
import ProductList from "@/component/products/ProductList";
import {useRouter} from 'next/router'

export default function Products() {
    const {query} = useRouter();
    useEffect(() => {
        console.log('query.slug::', query.slug);
        console.log('uery.sub::', query.sub);

        if (query.slug && query.sub) {
            getProducts(query.slug, query.sub).then((response) => {
                console.log('response', response)
            })
        }
    }, [])
    return (<div>
        {query.slug && query.sub && (
            <ProductList mainCtgr={query.slug} subCtgr={query.sub}/>
        )}
        </div>)
}