import {css} from "@emotion/react";
import {colors} from "@/styles/colorPalette";

export const buttonPrimaryMap = {
    primary: css`
      background-color: ${colors.blue};
      color: ${colors.white}
    `,
    success: css`
      background-color: ${colors.green};
      color: ${colors.white}
    `,
    danger: css`
      background-color: ${colors.red};
      color: ${colors.white}
    `,
    black: css`
      background-color: ${colors.black};
      color: ${colors.white}
    `,
    purple: css`
      background-color: ${colors.purple};
      color: ${colors.white}
    `,
}

export const buttonColorMap = {
    primary: css`
      background-color: ${colors.white};
      color: ${colors.blue};
      border: 1px solid ${colors.blue};
    `,
    success: css`
      background-color: ${colors.white};
      color: ${colors.green};
      border: 1px solid ${colors.green};
    `,
    danger: css`
      background-color: ${colors.white};
      color: ${colors.red};
      border: 1px solid ${colors.red};
    `,
    black: css`
      background-color: ${colors.white};
      color: ${colors.black};
      border: 1px solid ${colors.black};
    `,
    purple: css`
      background-color: ${colors.white};
      color: ${colors.purple};
      border: 1px solid ${colors.purple};
    `,

}

export const buttonSizeMap = {
    small: css`
      font-size: 13px;
      padding: 6px 9px;
    `,
    medium: css`
      font-size: 15px;
      padding: 10px 15px;
    `,
    large: css`
      letter-spacing: 2px;
      font-size: 17px;
      padding: 15px 12px;
    `
}

export type ButtonColor = keyof typeof buttonColorMap
export type ButtonSize = keyof typeof buttonSizeMap