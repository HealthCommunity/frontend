// react hook , react

// recoil ( 상태관리 )

// react library

// styled-components , Style Files
import { WidthAreaSpace } from "../styles/Layout/Layout";

// Components
import BoardNewWrite from "../components/Board/NewWrite/BoardNewWrite";
import Nav from "../components/Navbar";
import ThreeBoardPost from "../components/Board/NewWrite/ThreeNewWrite";

// Icons , Images

// Share , Utils
import Title from "../utils/Title/Title";

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
