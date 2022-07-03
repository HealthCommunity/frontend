import Title from "../funcskills/title";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import styled from "styled-components";
import { Link } from "react-router-dom";
import UserForm from "../components/form/UserForm";

import {
    ContentDiv,
    ContentHeader,
    ContentContainer,
    ContainerTitle,
} from "../components/menu/menuStyle";

const FindGroup = styled.div`
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FindButton = styled.span`
    padding: 8px 16px;
    font-size: 14px;
`;

function Login() {
    return (
        <>
            <Title name="Login" />
            <Nav />
            <ContentDiv>
                <ContentHeader>로그인</ContentHeader>
                <ContentContainer>
                    <ContainerTitle>로그인</ContainerTitle>
                    <UserForm onSubmit={console.log} />
                    <FindGroup>
                        <Link to={"find_id"}>
                            <FindButton>아이디 찾기</FindButton>
                        </Link>
                        <Link to={"find_pw"}>
                            <FindButton>비밀번호 찾기</FindButton>
                        </Link>
                    </FindGroup>
                </ContentContainer>
            </ContentDiv>
            <Footer />
        </>
    );
}

export default Login;
