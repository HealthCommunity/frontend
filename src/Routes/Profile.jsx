import Title from "../components/Title";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Navigation/Nav";
import ContentBody from "../components/Profile/ContentBody";
import { ProfileBackgroud } from "../components/Profile/ProfileLayout";
import { useEffect, useState } from "react";
import { WidthAreaSpace } from "../components/Layout/CommonLayout";

function Profile({ items = [] }) {
    const [mydata, setmyData] = useState("");
    console.log("프로필", items);
    console.log("프로필 데이터", items.data);
    //console.log("프로필 데이터 아이디", items.data.loginId);

    useEffect(() => {
        //console.log("ㅋㅋㅋ", items.data.loginId);
        //console.log("템프:", temp.loginId);
        setmyData(items.data);
        console.log("상태", mydata);
    }, [items]);

    // /console.log("상태 할당", mydata);

    // console.log("데이터 와?", data);
    // const ss = data;
    // console.log(ss);

    return (
        <>
            <Title name="Profile" />
            <Nav />
            {/* <div>{mydata}</div> */}
            <WidthAreaSpace>
                <ProfileBackgroud>
                    <ContentBody
                        userData={{
                            id: "songhee",
                            nickname: "김계란",
                            scoreData: {
                                삼대력: 470,
                                벤치: 100,
                                스쿼트: 170,
                                데드리프트: 200,
                            },
                            desc: "걸어가면 근손실 나요.",
                            imgUrl: "https://static.news.zumst.com/images/29/2020/08/27/2794637adfbc4748a4da1ea7ffeb3c85.jpg",
                        }}
                    />
                </ProfileBackgroud>
            </WidthAreaSpace>
            <Footer />
        </>
    );
}

export default Profile;
