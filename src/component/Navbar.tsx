import {useState} from "react";
import Link from "next/link";
import {IoIosSearch} from "react-icons/io";
import {SlBasket} from "react-icons/sl";
import {BiMenu} from "react-icons/bi";
import {CiHeart} from "react-icons/ci";
import {IoPersonOutline} from "react-icons/io5";
import {GiBackwardTime} from "react-icons/gi";
import {RiHome3Line} from "react-icons/ri";

export default function Navbar() {
    return (<>

        <div className="navbar">
            <div className="navbar__top">
                <div className="navbar__logo">CSHOP</div>
                <div className="navbar__icons">
                    <IoIosSearch size="19"/>
                    <SlBasket size="19"/>
                </div>
            </div>

            <div className="navbar__list">
                <Link href="/" className="navbar__list--item">
                    홈
                </Link>
                <Link href="/test" className="navbar__list--item">
                    랭킹
                </Link>
                <Link href="#" className="navbar__list--item">
                    매거진
                </Link>
                <Link href="#" className="navbar__list--item">
                    이벤트
                </Link>
            </div>
        </div>
        <div className="footer">
            <Link href="#">
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
    </>);
}
