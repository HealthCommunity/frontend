import { useParams } from "react-router";
import BoardDetail from "../components/Board/BoardDetail";
// import Nav from "../components/Navbar/index";
import Title from "../utils/Title/Title";
import { WidthAreaSpace } from "../styles/Layout/CommonLayout";

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
