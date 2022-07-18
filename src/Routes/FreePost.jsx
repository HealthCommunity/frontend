import { useParams } from "react-router";
import BoardDetail from "../components/Board/BoardPost/BoardDetail";
import Nav from "../components/Navigation/Nav";
import Title from "../components/Title";
import { WidthAreaSpace } from "../components/Layout/CommonLayout";

function FreePost() {
    const { id } = useParams();
    return (
        <>
            <Title name={`${id}`} />
            <Nav />
            <WidthAreaSpace>
                <BoardDetail />
            </WidthAreaSpace>
        </>
    );
}

export default FreePost;
