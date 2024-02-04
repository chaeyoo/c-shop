import Link from "next/link";
import { ReactNode } from "react";
import { BiMenu } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { GiBackwardTime } from "react-icons/gi";
import { RiHome3Line } from "react-icons/ri";
import styled from "@emotion/styled";
import { useScrollDirection } from "@/hooks/useWindow";

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

export default function FooterLayout(props: { children: ReactNode }) {
	const scrollDirection = useScrollDirection();
	return (
		<>
			{props.children}
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
		</>
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
