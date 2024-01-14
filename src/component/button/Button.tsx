import {
	ButtonColor,
	buttonColorMap,
	buttonPrimaryMap,
	ButtonSize,
	buttonSizeMap,
} from "@/styles/buttonStyles";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface IButtonProps {
	color?: ButtonColor;
	size?: ButtonSize;
	primary?: boolean;
	full?: boolean;
	disabled?: boolean;
	borderRadius?: boolean;
}

export const Button = styled.button<IButtonProps>(
	{
		cursor: "pointer",
		fontWeight: "bold",
	},
	({ color = "primary", primary }) =>
		primary ? buttonPrimaryMap[color] : buttonColorMap[color],
	({ size = "small" }) => buttonSizeMap[size],
	({ full }) =>
		full
			? css`
					display: block;
					width: 100%;
					border-radius: 0;
			  `
			: css``,
	({ disabled }) =>
		disabled
			? css`
					opacity: 0.26;
					cursor: initial;
			  `
			: css``,
	({ borderRadius }) =>
		borderRadius
			? css`
					border-radius: 5px;
			  `
			: css``
);
