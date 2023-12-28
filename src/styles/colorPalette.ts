import {css} from "@emotion/react";

export const colorPalette = css`
  :root {
    --red: #ff3325;
    --blue: #1396ff;
    --green: #44ad47;
    --white: #fff;
    --black: #212121;
    --gray: #c4c4c4;
  }
`

export const colors = {
    red: 'var(--red)',
    blue: 'var(--blue)',
    green: 'var(--green)',
    white: 'var(--white)',
    black: 'var(--black)',
    gray: 'var(--gray)'
}

export type Colors = keyof typeof colors