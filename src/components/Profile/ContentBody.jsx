import React, { useState } from "react";
import ProfileNav from "./ProfileNav";
import { ProfileContainer } from "./ProfileLayout";
import ContentUserModify from "./ContentUserModify";
import ContentUserDropOut from "./ContentUserDropOut";
import axios from "axios";
import { useEffect } from "react";
import BoardCategory from "../../component/Borad/View/BoardCategory";

function Group({ children, selected }) {
    const elements = React.Children.toArray(children);
    return <>{elements.find(({ props }) => selected === props.name)}</>;
}

function GroupItem({ children }) {
    return <>{children}</>;
}

export default function ContentBody() {
    const [selected, setSelected] = useState("profile");
    const [myInfo, setMyInfo] = useState(null);

    useEffect(() => {
        axios.get(`/api/user`).then((res) => {
            setMyInfo(res.data.data);
        });
    }, []);

    console.log(myInfo);

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
                    {!!myInfo && (
                        <div>
                            <div>{myInfo.loginId}</div>
                            <div>{myInfo.nickName}</div>
                            <div>{myInfo.bigThreePower.bench}</div>
                            <div>{myInfo.bigThreePower.dead}</div>
                            <div>{myInfo.bigThreePower.squat}</div>
                            <div>{myInfo.bigThreePower.sum}</div>
                        </div>
                    )}

                    <>
                        <BoardCategory category={"user"} />
                    </>
                </GroupItem>
                <GroupItem name="profileModify">
                    {!!myInfo && (
                        <ContentUserModify
                            loginId={myInfo.loginId}
                        ></ContentUserModify>
                    )}
                </GroupItem>
                <GroupItem name="userDropOut">
                    {!!myInfo && (
                        <ContentUserDropOut
                            loginId={myInfo.loginId}
                        ></ContentUserDropOut>
                    )}
                </GroupItem>
            </Group>
        </ProfileContainer>
    );
}
