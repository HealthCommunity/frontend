import Title from "../utils/Title/Title";
import Nav from "../components/Navbar/index";
import BoardDetail from "../components/Board/BoardDetail";
import { useLocation, useParams } from "react-router-dom";
import { WidthAreaSpace } from "../styles/Layout/Layout";

function BoardPost() {
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
      <WidthAreaSpace>
        <BoardDetail />
      </WidthAreaSpace>
    </>
  );
}

export default BoardPost;
