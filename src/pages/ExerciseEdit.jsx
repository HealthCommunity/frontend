import {
  CommonContainer,
  CommonContentArea,
  CommonContents,
} from "../components/common/Layout/Layout";
import Nav from "../components/Navbar";
import Title from "../utils/Title/Title";
import ExerciseEditPost from "../components/Board/Exercise/ExerciseEditPost";

export default function ExerciseEdit() {
  return (
    <>
      <Title name="exerciseEdit" />
      <Nav />
      <CommonContainer>
        <CommonContents>
          <CommonContentArea>
            <ExerciseEditPost />
          </CommonContentArea>
        </CommonContents>
      </CommonContainer>
    </>
  );
}
