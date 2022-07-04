import Title from "../funcskills/title";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Navgation/Nav";
import { ContentDiv, ContentHeader } from "../components/menu/menuStyle";
import ContentBody from "../components/profile/ContentBody";

function Profile() {
    return (
        <>
            <Title name="Profile" />
            <Nav />
            <ContentDiv>
                <ContentHeader>마이페이지</ContentHeader>
                <ContentBody
                    userData={{
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
            </ContentDiv>

            <Footer />
        </>
    );
}

export default Profile;
