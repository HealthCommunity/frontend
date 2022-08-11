import Title from "../components/Title";
import Nav from "../component/Navbar/index";
import { RightDiv } from "../components/Main/HomeSeparate";
import { SoloBoardItem } from "../components/Board/BoardItem/BoardItem";
import BoardNav from "../components/Board/BoardNavigation/BoardNav";
import BoardSlider from "../components/Board/BoardSlider/BoardSlider";

import { WidthAreaSpace } from "../components/Layout/CommonLayout";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BoardFetchItems from "../component/Borad/View/BoardFetchItems";
import { useRecoilValue } from "recoil";
import { isLogin } from "../atom";

const ModalButton = styled.button`
  height: 45px;
  background: #fcfcfd;
  border: 1px solid #e8eaee;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  min-width: 200px;
  padding: 0 10px;
  transition: all 0.4s;
`;

export default function Board() {
  const useLogin = useRecoilValue(isLogin);
  return (
    <>
      <Title name="Board" />
      <Nav />
      <WidthAreaSpace>
        <BoardSlider />
        <BoardNav
          style={{
            width: "50%",
            margin: "0 auto",
            marginBottom: "50px",
            pointerEvents: "none",
          }}
          name={"3대 운동 게시판"}
          summary={"다른 사람의 3대 능력을 확인해보세요!"}
        />
        {useLogin ? (
          <Link to={"write"}>
            <ModalButton>글쓰기</ModalButton>
          </Link>
        ) : null}

        <GroupItem category="threepowerpost">
          <BoardFetchItems category="threepowerpost" />
        </GroupItem>
      </WidthAreaSpace>
    </>
  );
}

function GroupItem({ children }) {
  return <>{children}</>;
}
