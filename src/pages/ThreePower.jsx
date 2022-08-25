import Title from "../utils/Title/Title";
import Nav from "../components/Navbar/index";
import { WidthAreaSpace } from "../styles/Layout/CommonLayout";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BoardFetchItems from "../components/Board/View/BoardFetchItems";
import useUserData from "../api/useUserData";
import WriteIcon from "../assets/images/board_write_bl_24.svg";
import slide1 from "../assets/images/main-slide-img01.png";
import slide2 from "../assets/images/main-slide-img02.png";
import slide3 from "../assets/images/main-slide-img03.png";

export const ModalButton = styled.button`
  height: 48px;
  display: flex;
  margin: 10px 0px;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
  background: #ffffff;
  color: #0066ff;
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
            <ModalButton>
              <img src={WriteIcon} style={{ marginRight: "5px" }} />
              글쓰기
            </ModalButton>
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
