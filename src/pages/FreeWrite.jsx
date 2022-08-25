import BoardNewWrite from "../components/Board/BoardNewWrite";
import Title from "../utils/Title/Title";

import {
  CommonContainer,
  CommonContents,
  CommonContentArea,
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
            <BoardNewWrite />
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
