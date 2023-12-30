import {ReactNode} from "react";
import Navbar from "./Navbar";
import Link from "next/link";
import {BiMenu} from "react-icons/bi";
import {CiHeart} from "react-icons/ci";
import {IoPersonOutline} from "react-icons/io5";
import {GiBackwardTime} from "react-icons/gi";
import {RiHome3Line} from "react-icons/ri";
import {SlBasket} from "react-icons/sl";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({children}: LayoutProps) {
    return (
        <div className="layout">
        <div className="navbar">
            <div className="navbar__top">
                <div className="navbar__logo">CSHOP</div>
                <div className="navbar__icons">
                    <SlBasket size="19"/>
                </div>
            </div>

            <div className="navbar__list">
                <Link href="/" className="navbar__list--item">
                    홈
                </Link>
                <Link href="/ranking" className="navbar__list--item">
                    랭킹
                </Link>
                <Link href="#" className="navbar__list--item">
                    매거진
                </Link>
                <Link href="/events" className="navbar__list--item">
                    이벤트
                </Link>
            </div>
        </div>
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
            <Link href="/mypage">
                <IoPersonOutline size={22} color={"white"}/>
            </Link>
            <Link href="#">
                <GiBackwardTime size={22} color={"white"}/>
            </Link>
        </div>
    </div>);
}
