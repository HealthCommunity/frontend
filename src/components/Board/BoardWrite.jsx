import ThreeBoardPost from "../components/Board/ThreePower/ThreeBoardPost";
import Title from "../utils/Title/Title";

import {
  CommonContainer,
  CommonContents,
  CommonContentArea,
} from "../components/common/Layout/Layout";
import Nav from "../components/Navbar";

export default function BoardWrite({ child }) {
  return (
    <>
      <Title name={child} />
      <Nav />
      <CommonContainer>
        <CommonContents>
          <CommonContentArea>{child}</CommonContentArea>
        </CommonContents>
      </CommonContainer>
    </>
  );
}
