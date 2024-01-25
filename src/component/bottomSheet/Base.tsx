import React from "react";

import BottomSheet from "./BottomSheet";
import styled from "@emotion/styled";
import { colors } from "@/styles/colorPalette";

const BaseDiv = styled.div`
  height : 100vh;
  width : 100vw;
  background-color: ${colors.white}
`

export default function Base() {

  return (
    <BaseDiv>
      <BottomSheet />
    </BaseDiv>
  )
}