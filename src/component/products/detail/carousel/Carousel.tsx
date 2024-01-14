import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { useState } from "react";
import { css } from "@emotion/react";
import { Text } from "@/component/text/Text";
import { Spacing } from "@/component/spacing/Spacing";

const containerStyles = css`
	height: 430px;
`;
const swipeIdx = css`
	margin: 12px 0px 0px 12px;
`;
export default function Carousel({ images }: { images: string[] }) {
	const [imageIdx, setImageIdx] = useState<number>(1);
	return (
		<div>
			<Swiper
				css={containerStyles}
				onSlideChange={(e) => {
					console.log(e.activeIndex);
					setImageIdx(e.activeIndex + 1);
				}}
			>
				{images.map((imageUrl, idx) => (
					<>
						<SwiperSlide key={idx}>
							<Image
								// style={{ height: "450px" }}
								src={imageUrl}
								alt={`${idx} 번째 상품이미지`}
								width={400}
								height={530}
							/>
						</SwiperSlide>
					</>
				))}
			</Swiper>
			<div css={swipeIdx}>
				<Text typography="t7" color="black" bold>
					{imageIdx}&nbsp;
				</Text>
				
				<Text typography="t7" color="grey">
					/ {images.length}
				</Text>
			</div>
		</div>
	);
}
