import BoardNewWrite from "../components/Board/NewWrite/BoardNewWrite";
import Title from "../utils/Title/Title";
import Nav from "../components/Navbar";
import ThreeBoardPost from "../components/Board/NewWrite/ThreeNewWrite";
import { WidthAreaSpace } from "../styles/Layout/Layout";

export default function BoardWrite({ item }) {
  return (
    <>
      <Title name={`${item}`} />
      <Nav />
      <WidthAreaSpace>
        {item === "freeWrite" || item === "exerciseWrite" ? (
          <BoardNewWrite />
        ) : (
          <ThreeBoardPost />
        )}
      </WidthAreaSpace>
    </>
  );
}
