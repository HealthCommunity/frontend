import Title from "../components/Title";
import Nav from "../components/Navigation/Nav";
import Footer from "../components/Footer/Footer";
import UserForm from "../components/Form/UserForm";
import UserSignForm from "../components/Form/UserSignForm";

import {
    ContentDiv,
    ContentHeader,
    ContentContainer,
    ContainerTitle,
} from "../components/Menu/MenuStyle";

function Sign() {
    return (
        <>
            <Title name="Sign" />
            <Nav />
            <ContentDiv>
                <ContentHeader>회원가입</ContentHeader>
                <ContentContainer>
                    <ContainerTitle>회원가입</ContainerTitle>
                    <UserSignForm onSubmit={console.log}></UserSignForm>
                    {/* <UserForm isJoin={true} onSubmit={console.log}></UserForm> */}
                </ContentContainer>
            </ContentDiv>
            <Footer />
        </>
    );
}

export default Sign;
