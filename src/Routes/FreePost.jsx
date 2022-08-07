import { useParams } from "react-router";
import BoardDetail from "../components/Board/BoardPost/BoardDetail";
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

function FreePost() {
  const { id } = useParams();
  return (
    <>
      <Title name={`${id}`} />
      <Nav></Nav>
      <WidthAreaSpace>
        <BoardDetail />
      </WidthAreaSpace>

      {/* <Nav />
            <WidthAreaSpace>
                <BoardDetail />
            </WidthAreaSpace> */}
    </>
  );
}

export default FreePost;
