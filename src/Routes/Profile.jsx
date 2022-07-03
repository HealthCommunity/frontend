import Title from "../funcskills/title";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
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
                        scoreData: {
                            삼대력: 500,
                            벤치: 100,
                            스쿼트: 170,
                            데드리프트: 200,
                        },
                        desc: "운동의 고통은 통증일 뿐 힘든 것이 아니다.",
                        imgUrl: "https://s3.lol.ps/file/lol-ps/media/quest/image/2020/05/29/%E1%84%88%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A1%E1%86%AB_%E1%84%86%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A9_%E1%84%8B%E1%85%A2%E1%84%82%E1%85%B5300_brown.jpg",
                    }}
                />
            </ContentDiv>

            <Footer />
        </>
    );
}

export default Profile;
