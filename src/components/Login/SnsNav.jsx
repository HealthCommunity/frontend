import React from "react";
import styled from "styled-components";

const SignTab = styled.div`
    display: flex;
    margin-top: 28px;
    width: 100%;
`;

const SignTabItem = styled.div`
    flex: 1 1;
    font-size: ${(props) => props.theme.fontSizeH4};
    line-height: 47px;
    font-weight: 600;
    letter-spacing: 1px;
    text-align: center;
    border-bottom: pxsolidrgba (230, 234, 238, 0.6);
    text-transform: uppercase;
    cursor: pointer;
    color: ${(props) =>
        props.isActive
            ? props.theme.colorPointPupple200
            : props.theme.colorFontGrey100};

    border-bottom: 1px solid
        ${(props) =>
            props.isActive
                ? props.theme.colorPointPupple200
                : props.theme.bgColor};
    a {
        display: block;
    }
`;

export const SnsList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const SnsItem = styled.li`
    img {
        width: 100%;
        height: 70px;
    }
`;

export function SnsNav({ onChange, typeName }) {
    let navSelect = typeName === "emaillogin";

    return (
        <SignTab>
            <SignTabItem isActive={navSelect}>
                <a
                    href="/#"
                    onClick={(e) => {
                        e.preventDefault();
                        onChange("emaillogin");
                    }}
                >
                    이메일
                </a>
            </SignTabItem>
            <SignTabItem isActive={!navSelect}>
                <a
                    href="/#"
                    onClick={(e) => {
                        e.preventDefault();
                        onChange("snslogin");
                    }}
                >
                    sns
                </a>
            </SignTabItem>
        </SignTab>
    );
}
