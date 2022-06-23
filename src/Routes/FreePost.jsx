import { useParams } from "react-router";
import Title from "../funcskills/title";

function FreePost(){
    const {id} = useParams();
    return (
        <>
            <Title name={`${id}`}/>
            <h1>{`안녕하세요 Free Board의 ${id} 페이지 입니다`}</h1>
        </>
        
    )
}

export default FreePost;