import { Flex } from "@/component/flex/Flex";
import { Spacing } from "@/component/spacing/Spacing";
import { Text } from "@/component/text/Text";
import { colorCode } from "@/mock/color";
import { css } from "@emotion/react";

const ColorDiv = css`
	margin: 3px;
	padding: 3px;
	width: 50px;
`;

export default function ColorFilter() {
	return (
		<>
			<Text typography="t6" bold >
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
									v.code === "#FFFFFF" || v.code === "#FFFFF0"
										? "#eee"
										: "white"
								}`,
							}}
						/>
						<Spacing direction="vertical" size={3} />
						<Text typography="t7" textAlign="center">
							{v.kor}
						</Text>
					</Flex>
				))}
			</Flex>
		</>
	);
}
