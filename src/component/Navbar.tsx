import {useState} from "react";
import Link from "next/link";
import {IoIosSearch} from "react-icons/io";
import {SlBasket} from "react-icons/sl";


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
                <Link href="/ranking" className="navbar__list--item">
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

    </>);
}
