import { useParams } from "react-router";
import BoardDetail from "../components/Board/BoardPost/BoardDetail";
import Nav from "../components/Navigation/Nav";
import Title from "../components/Title";

function FreePost(){
    const {id} = useParams();
    return (
        <>
            <Title name={`${id}`}/>
            <Nav/>
            <BoardDetail/>
        </>
        
    )
}

export default FreePost;