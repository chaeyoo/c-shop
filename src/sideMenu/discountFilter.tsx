import { Flex } from "@/component/flex/Flex";
import { Spacing } from "@/component/spacing/Spacing";
import { Text } from "@/component/text/Text";
import { css } from "@emotion/react";

const TextCss = css`
	width: 50%;
`;
export default function DiscountFilter() {
	return (
		<>
			<Text typography="t6" bold>
				할인율
			</Text>
			<Spacing direction="vertical" size={10} />
			<Flex direction="row" wrap="wrap">
				<Text css={TextCss} typography="t7">
					30% 미만
				</Text>
				<Text css={TextCss} typography="t7">
					30%~50% 미만
				</Text>
				<Text css={TextCss} typography="t7">
					50%~70% 미만
				</Text>
				<Text css={TextCss} typography="t7">
					70% 이상
				</Text>
			</Flex>
		</>
	);
}
