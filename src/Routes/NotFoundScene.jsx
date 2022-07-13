import styled from "styled-components";
import Title from "../components/Title";
import Nav from "../components/Navigation/Nav";

const NotFoundArea = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 150px;
    background: ${(props) => props.theme.colorPointPupple200};
    color: ${(props) => props.theme.constPointWhite100};
`;

function NotFoundScene() {
    return (
        <>
            <Title name="NotFoundScene" />
            <Nav />
            <NotFoundArea>
                <h1>찾을 수없는 페이지 입니다.</h1>
            </NotFoundArea>
        </>
    );
}

export default NotFoundScene;
