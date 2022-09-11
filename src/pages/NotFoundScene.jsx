import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import Title from "../utils/Title/Title";
import Nav from "../components/Navbar/index";
import { WidthAreaSpace } from "../styles/Layout/Layout";
import { FileBtn } from "../components/Board/NewWrite/BoardWriteStyle";

function NotFoundScene() {
  const { pathname } = useLocation();
  return (
    <>
      <Title name="NotFoundScene" />
      <Nav />
      <WidthAreaSpace>
        <WrongDiv>
          <h1>{`${pathname} 은 잘못된 경로입니다`}</h1>

          <Link to={"/"}>
            <FileBtn>되돌아가기</FileBtn>
          </Link>
        </WrongDiv>
      </WidthAreaSpace>
    </>
  );
}

const WrongDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default NotFoundScene;
