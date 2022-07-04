import { useParams } from "react-router";
import Title from "../components/Title";

function BoardPost(){
    const {id} = useParams();
    return (
        <>
            <Title name={`${id}`}/>
            <h1>{`안녕하세요 Board 게시판의 ${id} 페이지 입니다`}</h1>
        </>
        
    )
}

export default BoardPost;