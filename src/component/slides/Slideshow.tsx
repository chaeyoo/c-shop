import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const delay = 2500;
export default function Slideshow({ slides }: { slides: any[] }) {
	const [index, setIndex] = useState<number>(0);
	const timeoutRef: any = useRef();

	function resetTimeout() {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	}

	useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(
			() =>
				setIndex((prevIndex) =>
					prevIndex === slides.length - 1 ? 0 : prevIndex + 1
				),
			delay
		);

		return () => {
			resetTimeout();
		};
	}, [index, slides.length]);

	return (
		<>
			<div
				style={{
					margin: "0 auto",
					overflow: "hidden",
				}}
			>
				<div
					style={{
						transform: `translate3d(${-index * 100}%, 0, 0)`,
						whiteSpace: "nowrap",
						transition: "ease 1000ms",
					}}
				>
					{slides.map((data, index) => {
						return (
							<div
								key={index}
								style={{
									display: "inline-block",
									height: "400px",
									width: "100%",
									borderRadius: "40px",
								}}
							>
								<Image
									src={data.image}
									alt="slide"
									style={{ width: "100%", height: "100%" }}
									width={500}
									height={600}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
