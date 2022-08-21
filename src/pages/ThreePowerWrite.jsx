import ThreeBoardPost from "../components/Board/ThreePower/ThreeBoardPost";
import Title from "../utils/Title/Title";

import {
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
import Nav from "../components/Navbar";

function exerciseWrite() {
  return (
    <>
      <Title name="boardWrite" />
      <Nav />
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
