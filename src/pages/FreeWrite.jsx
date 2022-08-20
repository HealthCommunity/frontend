import FreeBoardPost from "../components/Board/Free/FreeBoardPost";
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
      <Title name="freewrite" />
      <Nav />
      <CommonContainer>
        <CommonContents>
          <CommonContentArea>
            <FreeBoardPost />
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
