import { ReactNode } from "react";
import Link from "next/link";
import { SlBasket } from "react-icons/sl";
interface LayoutProps {
	children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<div className="layout">
			<div className="navbar">
				<div className="navbar__top">
					<div className="navbar__logo">CSHOP</div>

					<div className="navbar__icons">
						<Link href="/basket">
							<SlBasket size={19} />
						</Link>
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
		</div>
	);
}
