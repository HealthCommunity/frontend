import styled from "styled-components"
import { Link } from "react-router-dom";
export const SeeDiv = styled.div`
    padding: 100px 30px;
`

const BoardDiv =styled.div`
    width:90%;
    display: flex;
    align-items: center;
    text-align: center;
    height: 30px;
    margin:0% 5%;
    cursor: pointer;
    :hover{
        background-color: antiquewhite;
    }

`
const BoardTitle =styled.div`
    width:50%;   
    display: flex;
    margin-left:10px;
    justify-content: center;
    @media all and (min-width:480px) and (max-width:767px) {
        font-size: 10px;
    } 
    @media all and (max-width:479px) {
        font-size: 10px;
    }
`
const BoardDate =styled.div`
    width:15%;
    font-size: 14px;
    @media all and (min-width:480px) and (max-width:767px) {
        width:20%;
        font-size: 10px;
    } 
    @media all and (max-width:479px) {
        width:20%;
        font-size: 10px;
    }
`
const BoardWrite =styled.div`
    width:19%; 
    font-size: 14px;
    @media all and (min-width:480px) and (max-width:767px) {
        font-size: 10px;
        width:10%;
        margin: 0px 3px; 
    } 
    @media all and (max-width:479px) {
        font-size: 10px;
        width:10%; 
        margin: 0px 3px;
    }
`
const BoardView =styled.div`
    width:14%;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    @media all and (min-width:480px) and (max-width:767px) {
        font-size: 10px;
        
    } 
    @media all and (max-width:479px) {
        font-size: 10px;
    }
`

function BoardStyle ({itemvalue, arrayvalue}){
    return (
        <Link to={`/${itemvalue}/${arrayvalue.id}`}>
            <BoardDiv>                    
                <BoardTitle>{arrayvalue.title}</BoardTitle>
                <BoardDate>{arrayvalue.writeDay}</BoardDate>
                <BoardWrite>{arrayvalue.userId}</BoardWrite>
                <BoardView>{arrayvalue.views}</BoardView>
            </BoardDiv>
        </Link>       
    )
}

export default BoardStyle