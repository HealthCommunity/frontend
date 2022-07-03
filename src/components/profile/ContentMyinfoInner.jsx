import React from "react";
import styled from "styled-components";

const InfoInnerDiv = styled.div`
    position: relative;
    margin: 0 36px;
    margin-left: 236px;
    padding-top: 24px;
    border-bottom: 1px solid rgba(126, 155, 255, 0.3);
`;

const RoundCornerImg = styled.img`
    position: absolute;
    top: 24px;
    left: -236px;
    width: 200px;
    height: 200px;
    border-radius: 4px;
`;

const ProfileInfo = styled.div`
    position: relative;
    margin-bottom: 24px;
`;

const DescTitle = styled.span`
    display: block;
    margin-bottom: 16px;
    color: rgba(47, 62, 78, 0.7);
`;

const DescNickname = styled.p`
    margin-bottom: 12px;
    min-height: 42px;
    font-weight: 700;
    font-size: 16px;
`;

const DescText = styled.p`
    margin-bottom: 12px;
    min-height: 42px;
    font-weight: 700;
`;

const DescChangeBtn = styled.button`
    margin-right: 8px;
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    color: black;
    border-color: black;
    background-color: #fff;
    font-weight: 700;
`;

export default function ContentMyinfoInner({ nickname, desc, imgUrl }) {
    return (
        <InfoInnerDiv>
            <RoundCornerImg src={imgUrl} alt="" />
            <ProfileInfo>
                <DescNickname>{nickname}</DescNickname>
                <DescTitle>한줄소개</DescTitle>
                <DescText>{desc}</DescText>
                <DescChangeBtn>한줄소개 변경</DescChangeBtn>
            </ProfileInfo>
        </InfoInnerDiv>
    );
}
