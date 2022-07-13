import { InfoDiv, InfoTitle, BoardSummary } from "./BoardDetailStyle";
import { useLocation } from "react-router";
// import Tiptap from "../../Editor/Tiptap";

function BoardNewWrite() {
    const { pathname } = useLocation();
    const boardname = pathname.split("/")[1];

    return (
        <InfoDiv>
            <InfoTitle>{`${boardname} 글쓰기`}</InfoTitle>
            <BoardSummary></BoardSummary>
            {/* <Tiptap /> */}
        </InfoDiv>
    );
}

export default BoardNewWrite;
