import React, { useState } from "react";
import styled from "styled-components";
import ProfileNav from "./ProfileNav";
import ContentMyinfo from "./ContentMyinfo";
import MyinfoInner from "./MyinfoInner";

const MyPage = styled.div`
    position: relative;
    width: 970px !important;
    margin-left: auto;
    margin-right: auto;
    margin-top: 108px;
    padding: 0;
`;

export default function ContentBody({ userData = {} }) {
    const { scoreData, desc, imgUrl } = userData;
    const [selected, setSelected] = useState("profile");

    return (
        <MyPage>
            <ProfileNav
                onChange={(name) => {
                    setSelected(name);
                }}
            />
            <Group selected={selected}>
                <GroupItem name="profile">
                    <MyinfoInner data={scoreData}>
                        <ContentMyinfo desc={desc} imgUrl={imgUrl} />
                    </MyinfoInner>
                </GroupItem>
                <GroupItem name="profileModify">
                    <p>회원정보 변경</p>
                </GroupItem>
                <GroupItem name="pwModify">
                    <p>비밀번호 변경</p>
                </GroupItem>
                <GroupItem name="userWithdraw">
                    <p>회원 탈퇴</p>
                </GroupItem>
            </Group>
        </MyPage>
    );
}

function Group({ children, selected }) {
    const elements = React.Children.toArray(children);
    return <>{elements.find(({ props }) => selected === props.name)}</>;
}

function GroupItem({ children }) {
    return <>{children}</>;
}
