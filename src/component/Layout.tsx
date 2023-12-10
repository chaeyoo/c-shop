import {ReactNode} from "react";
import Navbar from "./Navbar";
import Link from "next/link";
import {BiMenu} from "react-icons/bi";
import {CiHeart} from "react-icons/ci";
import {IoPersonOutline} from "react-icons/io5";
import {GiBackwardTime} from "react-icons/gi";
import {RiHome3Line} from "react-icons/ri";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({children}: LayoutProps) {
    return (<div className="layout">
        <Navbar/>
        <div className="main">
            {children}
        </div>
        <div className="footer">
            <Link href="/categories">
                <BiMenu size={22} color={"white"}/>
            </Link>
            <Link href="#">
                <CiHeart size={22} color={"white"}/>
            </Link>
            <Link href="/">
                <RiHome3Line size={23} color={"white"}/>
            </Link>
            <Link href="#">
                <IoPersonOutline size={22} color={"white"}/>
            </Link>
            <Link href="#s">
                <GiBackwardTime size={22} color={"white"}/>
            </Link>
        </div>
    </div>);
}
