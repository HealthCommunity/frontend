import React from "react";
import styled from "styled-components";

const ProfileDiv = styled.div`
    width: 100%;
    height: 100px;
`;

const ProfileItemDiv = styled.div`
    display: flex;
`;

const ProfileItem = styled.div`
    margin: 0px 10px;
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
                            onChange("pwModify");
                        }}
                    >
                        비밀번호 변경
                    </a>
                </ProfileItem>
                <ProfileItem>
                    <a
                        href="/#"
                        onClick={(e) => {
                            e.preventDefault();
                            onChange("userWithdraw");
                        }}
                    >
                        회원탈퇴
                    </a>
                </ProfileItem>
            </ProfileItemDiv>
        </ProfileDiv>
    );
}
