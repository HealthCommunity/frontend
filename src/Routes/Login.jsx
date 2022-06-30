import Title from "../funcskills/title";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import UserForm from '../components/UserForm';

function Login() {
    return (
        <>
            <Title name="Login" />
            <Nav />
            <FormDiv>
                <Headers>로그인</Headers>
                <Container>
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

                </Container>
            </FormDiv>
            <Footer />
        </>
    )
}

const FormDiv = styled.div`
    width:100%;
    height:100vh;
    display: flex;
    flex-direction: column;
    padding-top: 100px;
`;

const Headers = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #9e9a9a;
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ContainerTitle = styled.h3`
    margin: 48px 0 24px;
    font-weight: 700;
    font-size: 16px;
`

const FindGroup = styled.div`
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const FindButton = styled.span`
    padding: 8px 16px;
    font-size: 14px;
`

export default Login;