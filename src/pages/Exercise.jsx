import Title from "../utils/Title/Title";
import Nav from "../components/Navbar/index";
import { Link } from "react-router-dom";
import { WidthAreaSpace } from "../styles/Layout/CommonLayout";
import BoardFetchItems from "../components/Board/View/BoardFetchItems";
import useUserData from "../api/useUserData";
import { ModalButton } from "./ThreePower";
import WriteIcon from "../assets/images/board_write_bl_24.svg";

export default function Exercise() {
  const [userData] = useUserData();
  return (
    <>
      <Title name="exercise" />
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
        <GroupItem category="exercisepost">
          <BoardFetchItems category="exercisepost" />
        </GroupItem>
      </WidthAreaSpace>
    </>
  );
}

function GroupItem({ children }) {
  return <>{children}</>;
}
