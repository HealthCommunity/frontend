import React from "react";
import styled from "styled-components";

const Button = styled.button`
    width: 100%;
    min-width: 166px;
    height: 56px;
    padding: 0 20px;
    border: none;
    border-radius: 16px/16px;
    font-size: 14px;
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

export function CommonButton({ info = "" }) {
    return (
        <>
            <LightDarkButton>{info}</LightDarkButton>
        </>
    );
}
