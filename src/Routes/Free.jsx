import Title from "../components/Title";
import { RightDiv } from "../components/Main/HomeSeparate";
import { SoloBoardItem } from "../components/Board/BoardItem/BoardItem";
import BoardNav from "../components/Board/BoardNavigation/BoardNav";
import { WidthAreaSpace } from "../components/Layout/CommonLayout";
import Nav from "../components/Navigation/Nav";

import {
  //Nav
  CommonContainer,
  CommonContents,
  CommonContentsHome,
  CommonContentsRight,
  CommonContentsLeft,
  MainSlide,
  CommonContent,
  CommonContentSidebar,
  CommonTitleArea,
  CommonTitleTitle,
  CommonTitleText,
  CommonContentArea,
  BoardSlide,
  CommonContentTools,
} from "../component/common/Layout/Layout";
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
export default function Freeboard() {
  const useLogin = useRecoilValue(isLogin);
  return (
    <>
      {/*
        <Title name="FreeBoard" />
      <Nav></Nav>
      <CommonContainer>
        <BoardSlide></BoardSlide>
        <CommonContents>
          <CommonContent>
            <CommonContentTools>버튼 추가 영역</CommonContentTools>
            <Link to={"write"}>
              <ModalButton>글쓰기</ModalButton>
            </Link>
            <CommonContentArea>게시판 컴포넌트 추가</CommonContentArea>
          </CommonContent>
        </CommonContents>
      </CommonContainer>
  */}
      <Nav />
      <WidthAreaSpace>
        <BoardNav
          style={{
            width: "50%",
            margin: "0 auto",
            pointerEvents: "none",
            marginBottom: "50px",
          }}
          name={"자유 게시판"}
          summary={" 운동경험, 운동 팁, 식단 등 자유로운 게시판입니다"}
        />
        {useLogin ? (
          <Link to={"write"}>
            <ModalButton>글쓰기</ModalButton>
          </Link>
        ) : null}

        <GroupItem category="freepost">
          <BoardFetchItems category="freepost" />
        </GroupItem>
      </WidthAreaSpace>
    </>
  );
}

function GroupItem({ children }) {
  return <>{children}</>;
}
