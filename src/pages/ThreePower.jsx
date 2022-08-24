import Title from "../utils/Title/Title";
import Nav from "../components/Navbar/index";
import { WidthAreaSpace } from "../styles/Layout/CommonLayout";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BoardFetchItems from "../components/Board/View/BoardFetchItems";
import useUserData from "../api/useUserData";
import slide1 from "../assets/images/main-slide-img01.png";
import slide2 from "../assets/images/main-slide-img02.png";
import slide3 from "../assets/images/main-slide-img03.png";

export const ModalButton = styled.button`
  box-sizing: border-box;
  height: 48px;
  width: 10%;
  background: #ffffff;
  border: 1px solid #0066ff;
  border-radius: 48px;
  cursor: pointer;
`;

export default function Board() {
  const data = [slide1, slide2, slide3];
  const [userData] = useUserData();
  return (
    <>
      <Title name="Board" />
      <Nav />
      <WidthAreaSpace>
        {userData ? (
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
