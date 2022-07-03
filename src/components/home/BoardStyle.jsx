import styled from "styled-components";
import { CgEye } from "react-icons/cg";
import { Link } from "react-router-dom";
export const SeeDiv = styled.div`
    padding: 100px 30px;
`;

const BoardDiv = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    text-align: center;
    height: 30px;
    margin: 0% 5%;
    cursor: pointer;
    :hover {
        background-color: antiquewhite;
    }
`;
const BoardTitle = styled.div`
    width: 50%;
    display: flex;
    margin-left: 10px;
`;
const BoardDate = styled.div`
    width: 15%;
    font-size: 14px;
`;
const BoardWrite = styled.div`
    width: 19%;
    font-size: 14px;
`;
const BoardView = styled.div`
    width: 14%;
    font-size: 12px;
    display: flex;
    align-items: center;
`;

function BoardStyle({ itemvalue, arrayvalue }) {
    return (
        <Link to={`/${itemvalue}/${arrayvalue.id}`}>
            <BoardDiv>
                <BoardTitle>{arrayvalue.title}</BoardTitle>
                <BoardDate>{arrayvalue.writeDay}</BoardDate>
                <BoardWrite>{arrayvalue.userId}</BoardWrite>
                <BoardView>
                    <CgEye style={{ margin: "0px 3px 0px 5px" }} />
                    {arrayvalue.views}
                </BoardView>
            </BoardDiv>
        </Link>
    );
}

export default BoardStyle;
