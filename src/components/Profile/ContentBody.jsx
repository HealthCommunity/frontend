import React, { useState } from "react";
import ProfileNav from "./ProfileNav";
import { ProfileContainer } from "./ProfileLayout";
import ContentMyinfoInner from "./ContentMyinfoInner";
import ContentMyinfoMain from "./ContentMyinfoMain";
import ContentUserModify from "./ContentUserModify";
import ContentUserDropOut from "./ContentUserDropOut";

function Group({ children, selected }) {
    const elements = React.Children.toArray(children);
    return <>{elements.find(({ props }) => selected === props.name)}</>;
}

function GroupItem({ children }) {
    return <>{children}</>;
}

export default function ContentBody({ userData = {} }) {
    const { id, nickname, scoreData, desc, imgUrl } = userData;
    const [selected, setSelected] = useState("profile");

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
                    <ContentMyinfoMain data={scoreData}>
                        <ContentMyinfoInner
                            id={id}
                            nickname={nickname}
                            desc={desc}
                            imgUrl={imgUrl}
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
