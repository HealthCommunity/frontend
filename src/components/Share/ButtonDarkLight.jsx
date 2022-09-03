import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  min-width: 120px;
  height: 56px;
  border: none;
  border-radius: ${(props) => props.theme.radiusSize20};
  font-size: ${(props) => props.theme.fontSizeH4};
  line-height: 1.42857;
  font-weight: 700;
  -webkit-transition: all 0.25s;
  -o-transition: all 0.25s;
  transition: all 0.25s;
  cursor: pointer;
`;
const LightDarkButton = styled(Button)`
  background: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.fontColor};

  :hover {
    background: ${(props) => props.theme.bgColorSub};
    color: ${(props) => props.theme.colorPointPupple200};
  }
`;

export function ButtonDarkLight({ info = "" }) {
  return (
    <>
      <LightDarkButton>{info}</LightDarkButton>
    </>
  );
}
