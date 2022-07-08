import Title from "../components/Title";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Navigation/Nav";
import {
    ContentBackgroud,
    ContentHeader,
} from "../components/Login/LoginLayout";
import ContentBody from "../components/Profile/ContentBody";

function Profile() {
    return (
        <>
            <Title name="Profile" />
            <Nav />
            <ContentBackgroud>
                <ContentBody
                    userData={{
                        id: "song@naver.com",
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
            </ContentBackgroud>
            <Footer />
        </>
    );
}

export default Profile;
