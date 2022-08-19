import React, { useEffect, useState } from "react";
import ProfileNav from "./ProfileNav";
import { ProfileContainer, ProfileContainerMyInfo } from "./ProfileLayout";
import ContentUserModify from "./ContentUserModify";
import ContentUserDropOut from "./ContentUserDropOut";
import BoardFetchItems from "../../components/Board/View/BoardFetchItems";
import useUserData from "../../api/useUserData";
import DonutWithText from "../Chart/DonutWithText";

function Group({ children, selected }) {
    const elements = React.Children.toArray(children);
    return <>{elements.find(({ props }) => selected === props.name)}</>;
}

function GroupItem({ children }) {
    return <>{children}</>;
}

export default function ContentBody() {
    const [selected, setSelected] = useState("profile");
    const [userData, reFetch] = useUserData(); //로그인 상태 유저 데이터 가져옴

    useEffect(() => {
        reFetch();
    }, []);

    if (!userData) {
        return <></>;
    }

    const { nickName, loginId, bigThreePower } = userData;
    const { bench, dead, squat, sum } = bigThreePower;

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
                    <ProfileContainerMyInfo>
                        <DonutWithText></DonutWithText>
                    </ProfileContainerMyInfo>

                    {!!userData && (
                        <div>
                            <div>{loginId}</div>
                            <div>{nickName}</div>
                            <div>{bench}</div>
                            <div>{dead}</div>
                            <div>{squat}</div>
                            <div>{sum}</div>
                        </div>
                    )}

                    <>{!!userData && <BoardFetchItems category={"user"} />}</>
                </GroupItem>
                <GroupItem name="profileModify">
                    {!!userData && (
                        <ContentUserModify
                            loginId={loginId}
                        ></ContentUserModify>
                    )}
                </GroupItem>
                <GroupItem name="userDropOut">
                    {!!userData && (
                        <ContentUserDropOut
                            loginId={loginId}
                        ></ContentUserDropOut>
                    )}
                </GroupItem>
            </Group>
        </ProfileContainer>
    );
}
