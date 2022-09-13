// react hook , react
import { useLocation, useParams } from "react-router-dom";

// recoil ( 상태관리 )

// react library

// styled-components , Style Files
import styled from "styled-components";

// Components
import Nav from "../components/Navbar/index";
import BoardDetail from "../components/Board/BoardDetail";

// Icons , Images

// Share , Utils
import Title from "../utils/Title/Title";

export default function BoardPost() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const path = pathname.split("/")[1];
  return (
    <>
      <Title
        name={
          path === "threepowerpost"
            ? `3대력 ${id}번 게시글`
            : path === "exercisepost"
            ? `운동 ${id}번 게시글`
            : `자유 ${id}번 게시글`
        }
      />
      <Nav />
      <BoardDetailDiv>
        <BoardDetail />
      </BoardDetailDiv>
    </>
  );
}

const BoardDetailDiv = styled.section`
  box-sizing: border-box;
  width: 100%;
  max-width: 1396px;
  margin: 0 auto;
  margin-top: 100px;
  @media screen and (max-width: 1440px) {
    width: 1039px; /*아이템 4개*/
    display: flex;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 1024px) {
    width: 800px; /*아이템 3개*/
    display: flex;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 700px) {
    width: 500px;
    display: flex;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 420px) {
    width: 300px;
    display: flex;
    flex-wrap: wrap;
  }
`;
