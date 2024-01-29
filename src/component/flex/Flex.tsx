import styled from "@emotion/styled";
import { CSSProperties } from "react";

interface IFlexProps {
	align?: CSSProperties["alignItems"];
	justify?: CSSProperties["justifyContent"];
	direction?: CSSProperties["flexDirection"];
	wrap?: CSSProperties["flexWrap"];
}

export const Flex = styled.div<IFlexProps>(({ align, justify, direction, wrap }) => ({
	display: "flex",
	alignItems: align,
	justifyContent: justify,
	flexDirection: direction,
	flexWrap: wrap
}));
