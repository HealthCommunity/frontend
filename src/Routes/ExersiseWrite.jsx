import BoardNewWrite from "../components/Board/BoardPost/BoardNewWrite";
import Nav from "../components/Navigation/Nav";
import Title from "../components/Title";
import { WidthAreaSpace } from "../components/Layout/CommonLayout";

function ExersiseWrite() {
    return (
        <>
            <Title name="write" />
            <Nav />
            <WidthAreaSpace>
                <BoardNewWrite />
            </WidthAreaSpace>
        </>
    );
}

export default ExersiseWrite;
