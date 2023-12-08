import { Inter } from 'next/font/google'
import {useEffect} from "react";
import {getProducts} from "@/remote/products";
import ProductList from "@/component/products/ProductList";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    useEffect(() => {
        getProducts().then((response) => {
            console.log('response', response)
        })
    }, [])
  return (
          <div>
              <ProductList />
          </div>
  )
}
