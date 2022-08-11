import { useParams } from "react-router";
import BoardDetail from "../components/Board/BoardDetail";
import Nav from "../components/Navbar/index";
import Title from "../utils/Title/Title";
import { WidthAreaSpace } from "../styles/Layout/CommonLayout";

function ExercisePost() {
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

export default ExercisePost;
