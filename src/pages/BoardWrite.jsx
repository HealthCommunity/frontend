import BoardNewWrite from "../components/Board/BoardNewWrite";
import Title from "../utils/Title/Title";

import {
  CommonContainer,
  CommonContents,
  CommonContentArea,
} from "../components/common/Layout/Layout";
import Nav from "../components/Navbar";
import ThreeBoardPost from "../components/Board/ThreePower/ThreeBoardPost";

export default function BoardWrite({ item }) {
  return (
    <>
      <Title name={`${item}`} />
      <Nav />
      <CommonContainer>
        <CommonContents>
          <CommonContentArea>
            {item === "freeWrite" || item === "exerciseWrite" ? (
              <BoardNewWrite />
            ) : (
              <ThreeBoardPost />
            )}
          </CommonContentArea>
        </CommonContents>
      </CommonContainer>
    </>
  );
}
