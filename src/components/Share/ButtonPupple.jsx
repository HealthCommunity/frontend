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
    margin: 0;
`;

const Pupple = styled(Button)`
    background: ${(props) => props.theme.colorPointPupple200};
    color: #fefefe;

    :hover {
        background: ${(props) => props.theme.colorPointPupple300};
    }
`;

export function ButtonPupple({ info = "" }) {
    return (
        <>
            <Pupple>{info}</Pupple>
        </>
    );
}
