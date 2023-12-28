import {Typography, typographyMap} from "@/styles/typography";
import {colors, Colors} from "@/styles/colorPalette";
import {CSSProperties} from "react";
import styled from "@emotion/styled";

interface ITextProps {
    typography?: Typography
    color?: Colors
    display: CSSProperties['display']
    textAlign?: CSSProperties['textAlign']
    fontWeight?: CSSProperties['fontWeight']
    bold?: boolean;
}

export const Text = styled.span<ITextProps>(
    ({ color = 'black', display, textAlign, fontWeight, bold }) => ({
        color: colors[color],
        display,
        textAlign,
        fontWeight: bold ? 'bold' : fontWeight
    }),
    ({ typography = 't5' }) => typographyMap[typography],
)