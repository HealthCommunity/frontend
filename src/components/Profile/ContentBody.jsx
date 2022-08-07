import React, { useState } from "react";
import ProfileNav from "./ProfileNav";
import { ProfileContainer } from "./ProfileLayout";
import ContentMyinfoInner from "./ContentMyinfoInner";
import ContentMyinfoMain from "./ContentMyinfoMain";
import ContentUserModify from "./ContentUserModify";
import ContentUserDropOut from "./ContentUserDropOut";
import axios from "axios";

function Group({ children, selected }) {
    const elements = React.Children.toArray(children);
    return <>{elements.find(({ props }) => selected === props.name)}</>;
}

function GroupItem({ children }) {
    return <>{children}</>;
}

export default function ContentBody({ userDatas = {} }) {
    const [selected, setSelected] = useState("profile");

    axios
        .get("/api/user")
        .then(function (response) {
            if (response.status === 200) {
                console.log("데이터 겟", response.data.data);
            }
        })
        .catch(function (error) {
            console.log("회원데이터 불러옴 실패", error);
        });

    return (
        <ProfileContainer>
            <ProfileNav
                onChange={(name) => {
                    setSelected(name);
                }}
                typeName={selected}
            />
            <Group selected={selected}>
                <GroupItem name="profile">
                    <ContentMyinfoMain data="">
                        <ContentMyinfoInner
                            id=""
                            nickname=""
                            desc=""
                            imgUrl=""
                        />
                    </ContentMyinfoMain>
                </GroupItem>
                <GroupItem name="profileModify">
                    <ContentUserModify></ContentUserModify>
                </GroupItem>
                <GroupItem name="userDropOut">
                    <ContentUserDropOut></ContentUserDropOut>
                </GroupItem>
            </Group>
        </ProfileContainer>
    );
}
