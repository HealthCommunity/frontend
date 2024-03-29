// react hook , react
import { useLocation, Link } from "react-router-dom";

// recoil ( 상태관리 )

// react library

// styled-components , Style Files
import styled from "styled-components";
import { WidthAreaSpace } from "../styles/Layout/Layout";

// Components
import Nav from "../components/Navbar/index";
import { FileBtn } from "../components/Board/NewWrite/BoardWriteStyle";

// Icons , Images

// Share , Utils
import Title from "../utils/Title/Title";

export default function NotFoundScene() {
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
