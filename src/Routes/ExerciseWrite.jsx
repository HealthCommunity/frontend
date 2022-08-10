import ExercisePost from "../components/Board/BoardPost/ExercisePost";
// import Nav from "../components/Navigation/Nav";
import Title from "../components/Title";
import { WidthAreaSpace } from "../components/Layout/CommonLayout";

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
} from "../component/common/Layout/Layout";

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
