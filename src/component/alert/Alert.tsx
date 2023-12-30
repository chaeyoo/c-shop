import styled from "@emotion/styled";
import Dimmed from "./Dimmed";
import { colors } from "@/styles/colorPalette";
import { Text } from "../text/Text";
import { Flex } from "../flex/Flex";
import { Button } from "../button/Button";

interface IAlertProps {
	open?: boolean;
	title: React.ReactNode;
	description: React.ReactNode;
	buttonLabel?: string;
	onButtonClick: () => void;
}

export default function Alert({
	open,
	title,
	description,
	buttonLabel = "확인",
	onButtonClick,
}: IAlertProps) {
	if (!open) {
		return null;
	}

	return (
		<Dimmed>
			<AlertContainer>
				<Text
					typography="t4"
					bold
					display="block"
					style={{ marginBottom: "6px" }}
				>
					{title}
				</Text>
				{description ? (
					<Text typography="t7">{description}</Text>
				) : null}
				<Flex justify="flex-end">
					<Button
						onClick={onButtonClick}
						style={{ marginTop: "12px", border: "none" }}
					>
						{buttonLabel}
					</Button>
				</Flex>
			</AlertContainer>
		</Dimmed>
	);
}

export const AlertContainer = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	background-color: ${colors.white};
	border-radius: 8px;
	overflow: hidden;
	z-index: var(--alert-zindex);
	width: 320px;
	padding: 24px;
	box-sizing: border-box;
`;
