import Title from "../utils/Title/Title";
import Nav from "../components/Navbar/index";

import { WidthAreaSpace } from "../styles/Layout/CommonLayout";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BoardFetchItems from "../components/Board/View/BoardFetchItems";
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
