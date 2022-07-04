import Title from "../components/Title";
import Nav from "../components/Navgation/Nav";
import Footer from "../components/Footer/Footer";
import UserForm from "../components/form/UserForm";

import {
    ContentDiv,
    ContentHeader,
    ContentContainer,
    ContainerTitle,
} from "../components/Menu/menuStyle";

function Sign() {
    return (
        <>
            <Title name="Sign" />
            <Nav />
            <ContentDiv>
                <ContentHeader>회원가입</ContentHeader>
                <ContentContainer>
                    <ContainerTitle>회원가입</ContainerTitle>
                    <UserForm isJoin={true} onSubmit={console.log}></UserForm>
                </ContentContainer>
            </ContentDiv>
            <Footer />
        </>
    );
}

export default Sign;
