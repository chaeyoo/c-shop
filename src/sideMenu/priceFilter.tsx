import { Button } from "@/component/button/Button";
import { Flex } from "@/component/flex/Flex";
import { Input } from "@/component/input/Input";
import { Spacing } from "@/component/spacing/Spacing";
import { Text } from "@/component/text/Text";
import { colors } from "@/styles/colorPalette";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
const TextCss = css`
	width: 50%;
`;
const PriceInput = styled.input`
	padding: 2px 7px;
	font-size: 10px;
	height: 30px;
	font-weight: 100;
	border: 1px solid ${colors.grey};
	width: 35%;
	margin: 2px;
	&:focus {
		outline: none;
		border-color: ${colors.purple};
	}
`;

const ApplyButton = styled.button`
	font-size: 11px;
	width: 18%;
	background-color: ${colors.grey};
	margin-left: 3px;
	margin-top: 2px;
	height: 30px;
`;

export default function PriceFilter() {
	return (
		<>
			<Text typography="t6" bold>
				가격
			</Text>
			<Spacing direction="vertical" size={10} />


			<Flex direction="row" wrap="wrap">
				<Text css={TextCss} typography="t7">
					5만원 이하
				</Text>
				<Text css={TextCss} typography="t7">
					5만원 ~ 10만원
				</Text>
				<Text css={TextCss} typography="t7">
					10만원 ~ 20만원
				</Text>
				<Text css={TextCss} typography="t7">
					20만원 ~ 30만원
				</Text>
				<Text css={TextCss} typography="t7">
					30만원 이상
				</Text>
			</Flex>
			<Flex direction="row" align="center">
				<PriceInput type="number" defaultValue={0}></PriceInput>-
				<PriceInput type="number" defaultValue={0}></PriceInput>
				<ApplyButton>적용</ApplyButton>
			</Flex>
		</>
	);
}
