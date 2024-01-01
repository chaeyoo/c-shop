import { colors } from "@/styles/colorPalette";
import styled from "@emotion/styled";
import { Button } from "./Button";
import { createPortal } from "react-dom";

interface IFixedBottomButtonProps {
	label: string;
	onClick: () => void;
    disabled?: boolean;
}

export default function FixedBottomButton({
	label,
	onClick,
    disabled
}: IFixedBottomButtonProps) {
	let $portalRoot;
	if (typeof document !== "undefined") {
		$portalRoot = document.getElementById("root-portal");
	}
	if (!$portalRoot) {
		return null;
	}
	return createPortal(
		<Container>
			<Button
				borderRadius
				primary
				full
				color="purple"
				size="medium"
				onClick={onClick}
                disabled={disabled}
			>
				{label}
			</Button>
		</Container>,
		$portalRoot
	);
}

const Container = styled.div`
	position: fixed;
	left: 0;
	right: 0;
	bottom: 57px;
	background-color: ${colors.white};
	padding: 0px 10px;
`;
