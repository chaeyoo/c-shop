import React, {
	FocusEventHandler,
	forwardRef,
	InputHTMLAttributes,
	useState,
} from "react";
import { Text } from "@/component/text/Text";
import { Input } from "@/component/input/Input";

interface ITextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: React.ReactNode;
	isRequired?: boolean;
	hasError?: boolean;
	helpMessage?: React.ReactNode;
}

export const TextField = forwardRef<HTMLInputElement, ITextFieldProps>(
	function TextField(
		{ label, isRequired, hasError, helpMessage, onFocus, onBlur, ...props },
		ref
	) {
		const [focused, setFocused] = useState<boolean>(false);
		const labelColor = hasError ? "red" : undefined;
		const handleFocus: FocusEventHandler<HTMLInputElement> = (event) => {
			setFocused(true);
			onFocus?.(event);
		};
		const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
			setFocused(false);
			onBlur?.(event);
		};
		return (
			<div>
				{label ? (
					<Text
						typography="t7"
						color={labelColor}
						display="inline-block"
						style={{
							marginBottom: "6px",
						}}
					>
						{label}
					</Text>
				) : null}
				{isRequired ? (
					<Text
						typography="t7"
						color={labelColor}
						display="inline-block"
						style={{
							marginBottom: "6px",
						}}
					>
						{" *"}
					</Text>
				) : null}
				<Input
					ref={ref}
					aria-invalid={hasError}
					onFocus={handleFocus}
					onBlur={handleBlur}
					{...props}
				/>

				{helpMessage ? (
					<Text
						typography="t7"
						display="inline-block"
						color={labelColor}
						style={{ marginTop: "6px", fontSize: "12px" }}
					>
						{helpMessage}
					</Text>
				) : null}
			</div>
		);
	}
);
