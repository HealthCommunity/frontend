import ExercisePost from "../components/Board/Exercise/ExercisePost";
import Title from "../utils/Title/Title";

import {
  CommonContainer,
  CommonContents,
  CommonContentArea,
} from "../components/common/Layout/Layout";
import Nav from "../components/Navbar";

function exerciseWrite() {
  return (
    <>
      <Title name="exerciseWrite" />
      <Nav />
      <CommonContainer>
        <CommonContents>
          <CommonContentArea>
            <ExercisePost />
          </CommonContentArea>
        </CommonContents>
      </CommonContainer>
    </>
  );
}

export default exerciseWrite;
