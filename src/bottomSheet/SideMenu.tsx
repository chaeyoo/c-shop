import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { colors } from "@/styles/colorPalette";
import { Flex } from "@/component/flex/Flex";
import { Text } from "@/component/text/Text";

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

const Divider = styled.div`
	width: 100%;
	height: 1px;
	border: 1rem solid rgba(8, 0, 0, 0.1);
	border-width: 0 0 1px;
	// box-shadow: 0 0 1px ${colors.grey};
	margin-top: 5px;
`;

const SideBarContent = styled(motion.div)<{ width: number }>`
	width: ${({ width }) => `${width}px`};
	padding: 14px;
`;

const FakeDiv = styled.div`
	height: 100%;
	width: ;30px;
	backgroundColor: #fff
`;

// const SideBarList: React.FC<{ data: ListItem[] }> = ({ data }) => (
// 	<>
// 		{data.map((item, i) => (
// 			<div key={i}>{item.name}</div>
// 		))}
// 	</>
// );

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
					console.log(info.velocity, "fdfd");
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
				<FakeDiv />
				<div>
					<SideBarContent width={width}>
						<Flex
							direction="column"
							justify="center"
							align="center"
						>
							<Text typography="t5" bold>
								필터
							</Text>
							<Divider />
						</Flex>
					</SideBarContent>
					{isSideOpen ? (
						<>
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
