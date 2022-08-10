import ThreeBoardPost from "../components/Board/BoardPost/ThreeBoardPost";
// import Nav from "../components/Navigation/Nav";
import Title from "../components/Title";

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
