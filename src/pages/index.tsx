import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from "@/component/Layout";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
          <div style={{backgroundColor: "#ceebff", height: '2000px', padding:'10px'}}>
              홈이에여
          </div>
  )
}
