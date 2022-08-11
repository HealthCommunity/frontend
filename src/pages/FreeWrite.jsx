import FreeBoardPost from "../components/Board/BoardPost/FreeBoardPost";
// import Nav from "../component/Navbar/index";
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
      <Title name="freewrite" />
      <Nav></Nav>
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