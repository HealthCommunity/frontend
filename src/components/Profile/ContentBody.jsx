import React, { useState } from "react";
import styled from "styled-components";
import ProfileNav from "./ProfileNav";
import ContentMyinfoInner from "./ContentMyinfoInner";
import ContentMyinfoMain from "./ContentMyinfoMain";
import ContentUserDropOut from "./ContentUserDropOut";
import ContentUserModify from "./ContentUserModify";

const MyPage = styled.div`
    width: 970px;
    padding-top: 150px;

    @media all and (min-width: 480px) and (max-width: 767px) {
        width: 480px;
    }
    @media all and (max-width: 479px) {
        width: 480px;
    }
`;

export default function ContentBody({ userData = {} }) {
    const { id, nickname, scoreData, desc, imgUrl } = userData;
    const [selected, setSelected] = useState("profile");

    return (
        <>
            <MyPage>
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
            </MyPage>
        </>
    );
}

function Group({ children, selected }) {
    const elements = React.Children.toArray(children);
    return <>{elements.find(({ props }) => selected === props.name)}</>;
}

function GroupItem({ children }) {
    return <>{children}</>;
}
