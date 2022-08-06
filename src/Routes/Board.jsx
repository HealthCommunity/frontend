import Title from "../components/Title";
import Nav from "../components/Navigation/Nav";
import { RightDiv } from "../components/Main/HomeSeparate";
import { threepower } from "../FakeD/power";
import { SoloBoardItem } from "../components/Board/BoardItem/BoardItem";
import BoardNav from "../components/Board/BoardNavigation/BoardNav";
import BoardSlider from "../components/Board/BoardSlider/BoardSlider";

import { WidthAreaSpace } from "../components/Layout/CommonLayout";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

function Board() {
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
        <Link to={"write"}>
          <ModalButton>글쓰기</ModalButton>
        </Link>
        <RightDiv style={{ marginBottom: "150px", paddingRight: "0px" }}>
          {threepower.map((x) => (
            <SoloBoardItem
              key={Math.random()}
              item={x}
              color={"#3F8CFF"}
              value={"board"}
            />
          ))}
        </RightDiv>
      </WidthAreaSpace>
    </>
  );
}

export default Board;
