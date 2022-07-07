import React from "react";
import styled from "styled-components";
import { ButtonPupple } from "../Share/ButtonPupple";

const ProfileDiv = styled.div`
    width: 100%;
    height: 100px;
`;

const ProfileItemDiv = styled.div`
    display: flex;
`;

const ProfileItem = styled.div`
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

function selectorNav(typeName) {
    switch (typeName) {
        case "profile":
            return true;
        case "profileModify":
            return true;
        default:
            return true;
    }
}

export default function ProfileNav({ onChange, typeName = "profile" }) {
    // let navSelect = false;
    // console.log(selectorNav(typeName));

    return (
        <ProfileDiv>
            <ProfileItemDiv>
                <ProfileItem>
                    <a
                        href="/#"
                        onClick={(e) => {
                            e.preventDefault();
                            onChange("profile");
                        }}
                    >
                        기본정보
                    </a>
                </ProfileItem>
                <ProfileItem>
                    <a
                        href="/#"
                        onClick={(e) => {
                            e.preventDefault();
                            onChange("profileModify");
                        }}
                    >
                        회원정보 변경
                    </a>
                </ProfileItem>
                <ProfileItem>
                    <a
                        href="/#"
                        onClick={(e) => {
                            e.preventDefault();
                            onChange("userDropOut");
                        }}
                    >
                        회원탈퇴
                    </a>
                </ProfileItem>
            </ProfileItemDiv>
        </ProfileDiv>
    );
}
