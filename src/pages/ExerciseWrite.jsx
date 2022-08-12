import ExercisePost from "../components/Board/Exercise/ExercisePost";
import Title from "../utils/Title/Title";

import {
  Nav,
  CommonContainer,
  CommonContents,
  CommonContentsHome,
  CommonContentsRight,
  CommonContentsLeft,
  MainSlide,
  CommonContent,
  CommonContentSidebar,
  CommonTitleArea,
  CommonTitleTitle,
  CommonTitleText,
  CommonContentArea,
  BoardSlide,
  CommonContentTools,
} from "../components/common/Layout/Layout";

function exerciseWrite() {
  return (
    <>
      <Title name="exerciseWrite" />
      <Nav></Nav>
      <CommonContainer>
        <CommonContents>
          <CommonContentArea>
            <ExercisePost />
          </CommonContentArea>
        </CommonContents>
      </CommonContainer>
      {/* <Nav />
            <WidthAreaSpace>
                <ExercisePost />
            </WidthAreaSpace> */}
    </>
  );
}

export default exerciseWrite;
