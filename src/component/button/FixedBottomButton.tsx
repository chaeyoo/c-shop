import { colors } from "@/styles/colorPalette";
import styled from "@emotion/styled";
import { Button } from "./Button";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

interface IFixedBottomButtonProps {
	label: string;
	onClick: () => void;
	disabled?: boolean;
}

export default function FixedBottomButton({
	label,
	onClick,
	disabled,
}: IFixedBottomButtonProps) {
	const [element, setElement] = useState<HTMLElement | null>(null);

	useEffect(() => {
		setElement(document.getElementById("root-portal"));
	}, []);
	if (!element) {
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
		element
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
