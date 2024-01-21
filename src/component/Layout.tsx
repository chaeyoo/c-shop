import { ReactNode } from "react";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { GiBackwardTime } from "react-icons/gi";
import { RiHome3Line } from "react-icons/ri";
import { SlBasket } from "react-icons/sl";
import useUser from "@/hooks/auth/useUser";
import { useScrollDirection } from "@/hooks/useWindow";
import styled from "styled-components";

interface LayoutProps {
	children: ReactNode;
}

const Footer = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	position: fixed;
	width: 100%;
	bottom: 0rem;
	height: 50px;
	background: black;
`;

const FooterDown = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	position: fixed;
	width: 100%;
	bottom: -3rem;
	height: 50px;
	background: black;
`;

export default function Layout({ children }: LayoutProps) {
	const scrollDirection = useScrollDirection();
	return (
		<div className="layout">
			<div className="navbar">
				<div className="navbar__top">
					<div className="navbar__logo">CSHOP</div>

					<div className="navbar__icons">
						<SlBasket size="19" />
					</div>
				</div>

				<div className="navbar__list">
					<Link href="/" className="navbar__list--item">
						홈
					</Link>
					<Link href="/ranking" className="navbar__list--item">
						랭킹
					</Link>
					<Link href="/magazine" className="navbar__list--item">
						매거진
					</Link>
					<Link href="/events" className="navbar__list--item">
						이벤트
					</Link>
				</div>
			</div>
			<div className="main">{children}</div>

			{scrollDirection === "down" && (
				<FooterDown>
					<FooterList />
				</FooterDown>
			)}
			{scrollDirection !== "down" && (
				<Footer>
					<FooterList />
				</Footer>
			)}
		</div>
	);
}

function FooterList() {
	return (
		<>
			<Link href="/categories">
				<BiMenu size={22} color={"white"} />
			</Link>
			<Link href="/like">
				<CiHeart size={22} color={"white"} />
			</Link>
			<Link href="/">
				<RiHome3Line size={23} color={"white"} />
			</Link>
			<Link href="/mypage">
				<IoPersonOutline size={22} color={"white"} />
			</Link>
			<Link href="/recent">
				<GiBackwardTime size={22} color={"white"} />
			</Link>
		</>
	);
}
