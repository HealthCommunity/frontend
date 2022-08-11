import Title from "../utils/Title/Title";
import Nav from "../components/Navbar/index";
import BoardDetail from "../components/Board/BoardDetail";
import { useParams } from "react-router-dom";
import { WidthAreaSpace } from "../styles/Layout/CommonLayout";

function BoardPost() {
  const { id } = useParams();
  return (
    <>
      <Title name={`${id}`} />
      <Nav />
      <WidthAreaSpace>
        <BoardDetail />
      </WidthAreaSpace>
    </>
  );
}

export default BoardPost;
