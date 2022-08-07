import Title from "../components/Title";
import Nav from "../components/Navigation/Nav";
import BoardDetail from "../components/Board/BoardPost/BoardDetail";
import { useParams } from "react-router-dom";
import { WidthAreaSpace } from "../components/Layout/CommonLayout";

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
