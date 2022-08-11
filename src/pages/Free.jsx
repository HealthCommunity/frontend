import { WidthAreaSpace } from "../styles/Layout/CommonLayout";
import Nav from "../components/Navbar/index";

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
} from "../components/common/Layout/Layout";
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
export default function Freeboard() {
  const useLogin = useRecoilValue(isLogin);
  return (
    <>
      <Nav />
      <WidthAreaSpace>
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
