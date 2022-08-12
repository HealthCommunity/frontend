import ThreeBoardPost from "../components/Board/ThreePower/ThreeBoardPost";
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
      <Title name="boardWrite" />
      <Nav></Nav>
      <CommonContainer>
        <CommonContents>
          <CommonContentArea>
            <ThreeBoardPost />
          </CommonContentArea>
        </CommonContents>
      </CommonContainer>
      {/* <Nav />
            <WidthAreaSpace>
                <BoardNewWrite />
            </WidthAreaSpace> */}
    </>
  );
}

export default exerciseWrite;
