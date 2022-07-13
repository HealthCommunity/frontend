import { InfoDiv, InfoTitle } from "./BoardDetailStyle";
import { useLocation } from "react-router";

function BoardNewWrite() {
    const { pathname } = useLocation();
    const boardname = pathname.split("/")[1];

    return (
        <InfoDiv>
            <InfoTitle>{`${boardname} 글쓰기`}</InfoTitle>
        </InfoDiv>
    );
}

export default BoardNewWrite;
