import Title from "../components/Title";
import Nav from "../components/Navigation/Nav";
import ContentBody from "../components/Profile/ContentBody";
import { ProfileBackgroud } from "../components/Profile/ProfileLayout";
import { useEffect, useState } from "react";
import { WidthAreaSpace } from "../components/Layout/CommonLayout";

function Profile({ userDatas }) {
    if (!userDatas || !userDatas?.data) {
        return <></>;
    }
    const { data } = userDatas;
    console.log(data);
    // console.log(data.loginId);

    return (
        <>
            <Title name="Profile" />
            <Nav />
            {/* <div>{mydata}</div> */}
            <WidthAreaSpace>
                <ProfileBackgroud>
                    <ContentBody
                        userDatas={data}
                        // userData={{
                        //     id: "songhee",
                        //     nickname: "김계란",
                        //     scoreData: {
                        //         삼대력: 470,
                        //         벤치: 100,
                        //         스쿼트: 170,
                        //         데드리프트: 200,
                        //     },
                        //     desc: "걸어가면 근손실 나요.",
                        //     imgUrl: "https://static.news.zumst.com/images/29/2020/08/27/2794637adfbc4748a4da1ea7ffeb3c85.jpg",
                        // }}
                    />
                </ProfileBackgroud>
            </WidthAreaSpace>
        </>
    );
}

export default Profile;
