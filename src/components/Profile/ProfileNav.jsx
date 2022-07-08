import React from "react";
import styled from "styled-components";

const ProfileDiv = styled.div`
    width: 100%;
    height: 100px;
`;

const ProfileItemDiv = styled.div`
    display: flex;
    width: 50%;
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

function selectorNav(typeName, navSelect) {
    switch (typeName) {
        case "profile":
            return (navSelect.isProfile = true);
        case "profileModify":
            return (navSelect.isModify = true);
        default:
            return (navSelect.isDropOut = true);
    }
}

export default function ProfileNav({ onChange, typeName = "profile" }) {
    const navSelect = {
        isProfile: false,
        isModify: false,
        isDropOut: false,
    };

    selectorNav(typeName, navSelect);

    return (
        <ProfileDiv>
            <ProfileItemDiv>
                <ProfileItem isActive={navSelect.isProfile}>
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
                <ProfileItem isActive={navSelect.isModify}>
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
                <ProfileItem isActive={navSelect.isDropOut}>
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
