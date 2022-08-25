import { WidthAreaSpace } from "../styles/Layout/CommonLayout";
import Nav from "../components/Navbar/index";
import { Link, useLocation, useParams } from "react-router-dom";
import BoardFetchItems from "../components/Board/View/BoardFetchItems";
import useUserData from "../api/useUserData";
import WriteIcon from "../assets/images/board_write_bl_24.svg";
import styled from "styled-components";
import Title from "../utils/Title/Title";

export default function Board({ props }) {
  const [userData] = useUserData();
  return (
    <>
      <Title
        name={
          props === "threepowerpost"
            ? "3대력게시판"
            : props === "exercisepost"
            ? "운동게시판"
            : "자유게시판"
        }
      />
      <Nav />
      <WidthAreaSpace>
        {userData ? (
          <Link to={"write"}>
            <ModalButton>
              <img src={WriteIcon} style={{ marginRight: "5px" }} />
              글쓰기
            </ModalButton>
          </Link>
        ) : null}
        <GroupItem category={`${props}`}>
          <BoardFetchItems category={`${props}`} />
        </GroupItem>
      </WidthAreaSpace>
    </>
  );
}

function GroupItem({ children }) {
  return <>{children}</>;
}

export const ModalButton = styled.button`
  height: 48px;
  display: flex;
  margin: 10px 0px;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
  background: #ffffff;
  margin-right: 10px;
  color: #0066ff;
  border: 1px solid #0066ff;
  border-radius: 48px;
  cursor: pointer;
`;