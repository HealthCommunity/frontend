import BoardNewWrite from "../components/Board/BoardPost/BoardNewWrite";
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

function ExersiseWrite() {
    return (
        <>
            <Title name="write" />
            <Nav></Nav>
            <CommonContainer>
                <CommonContents>
                    <CommonContent>
                        <CommonContentArea>
                            <BoardNewWrite />
                        </CommonContentArea>
                    </CommonContent>
                </CommonContents>
            </CommonContainer>
            {/* <Nav />
            <WidthAreaSpace>
                <BoardNewWrite />
            </WidthAreaSpace> */}
        </>
    );
}

export default ExersiseWrite;
