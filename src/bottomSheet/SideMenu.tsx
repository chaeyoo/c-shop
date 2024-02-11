import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { colors } from "@/styles/colorPalette";
import { colorCode, colorCodes } from "@/mock/color";
import { Text } from "@/component/text/Text";
import { Flex } from "@/component/flex/Flex";
import { css } from "@emotion/react";
import { Spacing } from "@/component/spacing/Spacing";
export interface ListItem {
	name: string;
	url: string;
}

const SidekickWrapper = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	pointer-events: none;
	z-index: 9999;
`;

const SidekickOverlay = styled.div<{ overlaycolor: string }>`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background-color: ${({ overlaycolor }) => overlaycolor};
	pointer-events: all;
	z-index: 0;
`;

const SidekickBody = styled(motion.div)<{ width: number }>`
	z-index: 1;
	pointer-events: all;
	background-color: #fff;
	height: 100%;
	max-width: ${({ width }) => `${width}px`};
	position: relative;
	box-sizing: border-box;
`;

const CompleteHandler = styled(motion.div)<{ width: number }>`
	width: ${({ width }) => `${width}px`};
	height: 50px;
	background-color: ${colors.purple};
	position: absolute;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
	font-size: 14px;
	padding-left: 30px;
`;

const SideBarContent = styled(motion.div)<{ width: number }>`
	width: ${({ width }) => `${width}px`};
	padding: 14px 0px 0px 45px;
`;

const ColorDiv = css`
	margin: 3px;
	padding: 3px;
	width: 50px;
`;

export const SideMenu: React.FC<{
	overlaycolor?: string;
	width?: number;
	data: ListItem[];
	isSideOpen: boolean;
	setIsSideOpen: (isOpen: boolean) => void;
}> = ({
	overlaycolor = "rgba(0, 0, 0, 0.4)",
	width = 200,
	data,
	isSideOpen,
	setIsSideOpen,
}) => {
	const constrols = useAnimation();
	const [hex, setHex] = useState("#ffffff");
	useEffect(() => {
		constrols.start(isSideOpen ? "active" : "inactive");
	}, [isSideOpen, constrols]);

	const sidekickBodyStyles = {
		active: {
			x: -30,
		},
		inactive: {
			x: -width,
		},
	};
	return (
		<SidekickWrapper>
			{isSideOpen && <SidekickOverlay overlaycolor={overlaycolor} />}
			<SidekickBody
				width={width}
				drag="x"
				dragElastic={0.1}
				dragConstraints={{
					left: -width,
					right: 0,
				}}
				dragMomentum={false}
				onDragEnd={(_event, info) => {
					const isDraggingLeft = info.offset.x < 0;
					const multiplier = isDraggingLeft ? 2 / 4 : 2 / 3;
					const threshold = width * multiplier;

					if (Math.abs(info.point.x) > threshold && isSideOpen) {
						setIsSideOpen(false);
					} else if (
						Math.abs(info.point.x) < threshold &&
						!isSideOpen
					) {
						setIsSideOpen(true);
					} else {
						constrols.start(isSideOpen ? "active" : "inactive");
					}
				}}
				animate={constrols}
				variants={sidekickBodyStyles}
			>
				<div>
					{isSideOpen ? (
						<>
							<SideBarContent width={width}>
								<Text typography="t6" bold>
									색상
								</Text>
								<Spacing direction="vertical" size={10} />
								<Flex wrap="wrap">
									{colorCode.map((v, i) => (
										<Flex
											css={ColorDiv}
											key={i}
											direction="column"
											align="center"
											justify="flex-start"
										>
											<div
												key={i}
												style={{
													backgroundColor: v.code,
													width: "30px",
													height: "30px",
													borderRadius: "50px",
													border: `1px solid ${
														v.code === "#FFFFFF" ||
														v.code === "#FFFFF0"
															? "#eee"
															: "white"
													}`,
												}}
											/>
											<Spacing
												direction="vertical"
												size={3}
											/>
											<Text
												typography="t7"
												textAlign="center"
											>
												{v.kor}
											</Text>
										</Flex>
									))}
								</Flex>
							</SideBarContent>
							<CompleteHandler
								width={width}
								onClick={() => setIsSideOpen(!isSideOpen)}
							>
								검색 결과 확인
							</CompleteHandler>
						</>
					) : null}
				</div>
			</SidekickBody>
		</SidekickWrapper>
	);
};

export default SideMenu;
