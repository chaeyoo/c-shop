import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from "@/component/Layout";
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
          <div style={{backgroundColor: "#ceebff", height: '2000px', padding:'10px'}}>
              홈이에여
              <ProductList />
          </div>
  )
}
