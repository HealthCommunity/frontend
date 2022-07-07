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

const ProfileItem = styled.span`
    padding: 10px;
`;

export default function ProfileNav({ onChange }) {
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
                        <ButtonPupple info={"기본정보"}></ButtonPupple>
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
                        <ButtonPupple info={"회원정보 변경"}></ButtonPupple>
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
                        <ButtonPupple info={"회원탈퇴"}></ButtonPupple>
                    </a>
                </ProfileItem>
            </ProfileItemDiv>
        </ProfileDiv>
    );
}
