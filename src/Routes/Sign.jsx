import styled from 'styled-components';
import Title from "../funcskills/title";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import UserForm from "../components/UserForm";

function Sign() {
    return (
        <>
            <Title name="Sign" />
            <Nav />
            <FormDiv>
                <Headers>회원가입</Headers>
                <Container>
                    <ContainerTitle>회원가입</ContainerTitle>
                    <UserForm isJoin={true} onSubmit={console.log}></UserForm>
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

export default Sign;