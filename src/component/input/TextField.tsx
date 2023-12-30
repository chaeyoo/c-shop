import React, {
	FocusEventHandler,
	forwardRef,
	InputHTMLAttributes,
	useState,
} from "react";
import { Text } from "@/component/text/Text";
import { Input } from "@/component/input/Input";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: React.ReactNode;
	hasError?: boolean;
	helpMessage?: React.ReactNode;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
	function TextField(
		{ label, hasError, helpMessage, onFocus, onBlur, ...props },
		ref
	) {
		const [focused, setFocused] = useState<boolean>(false);
        const labelColor = hasError ? "red" : focused ? "blue" : undefined;
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
						display="inline-block"
						style={{
							marginBottom: "6px",
						}}
					>
						{label}
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
