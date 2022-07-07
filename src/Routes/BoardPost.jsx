import { useLocation, useParams } from "react-router";
import Title from "../components/Title";
import styled from "styled-components";
import Nav from "../components/Navigation/Nav";
import {threepower} from '../FakeD/power'
import { useState } from "react";
import { useForm } from "react-hook-form";

const InfoDiv =styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    padding-top: 150px;
`
const InfoTitleDiv =styled.div`
    display: flex;
    margin-bottom: 50px;
`

const InfoTitle = styled.div`
    font-size: 64px;
    color:${(props)=>props.theme.fontColor};
    font-weight: bold;
    margin-bottom: 50px;
    background-color: ${(props)=>props.theme.infoBgColor};
`

const InfoTitleWrite = styled.div`
    font-size: ${(props)=>props.theme.fontSizeH2};
    text-align: center;
    margin: 0px 20px;
    color:#9c9c9e;
`

const InfoExplanationDiv = styled.div`
    display: flex;
    justify-content: center;
    width:80%;
    flex-direction: column;
    align-items: center;
`

const InfoExplanationTitle =styled.div`
    font-size: ${(props)=>props.theme.fontSizeH1};
    font-weight: bold;
    color:${(props)=>props.theme.fontColor};
    background-color: ${(props)=>props.theme.infoBgColor};
    margin: 100px 0px;
`

const InfoCommentForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 50px;
`

const InfoCommentInputText = styled.input`
    border-radius: 20px;
    padding: 20px;
    width:100%;
    height: 150px;
    font-size: ${(props)=>props.theme.fontSizeH2};
    margin : 20px 0px;
`
const InfoCommentInputSubmit =styled.input`
    display: flex;
    justify-content: center;
    font-size: 18px;
    padding: 1px 6px;
    margin: 25px 0px 15px 0px;
    align-items: center;
    width:150px;
    height: 70px;
    border: 1px solid #dcdde1;
    border-radius: 10px;
    cursor: pointer;
    background-color: ${(props)=>props.theme.bgColor};
    :hover{
        transform: scale(1.05);
        background-color: ${(props)=>props.theme.underLineColor};
        color:${(props)=>props.theme.boxFontHoverColor}
}
`

const CommentList =styled.div`
    width:1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const BoardSummary = styled.div`
    width:60%;
    margin: 0 auto;
    background-color: ${(props)=>props.theme.navBgColor};
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${(props)=>props.theme.fontSizeH2};
`

const CommentListitem= styled.div`
    font-size: 24px;
`

function BoardPost(){
    const {id} = useParams();
    const {pathname} = useLocation();
    const boardname = pathname.split('/')[1];
    const item = threepower.find((x=>x.id == id));
    const {
        register,
        handleSubmit,
        reset,
      } = useForm({mode:"onChange"});
    const [commentlist,setCommentlist] = useState([]);
    const onSubmitValid=(data)=>{
        setCommentlist([...commentlist,data])
        reset()
    }
    return (
        <>
            <Title name={`${id}`}/>
            <Nav/>
            <InfoDiv>
                <InfoTitle>{`${boardname} : ${item.title}`}</InfoTitle>
                <InfoTitleDiv>
                    <InfoTitleWrite>{`작성자 : ${item.userId} `}</InfoTitleWrite>
                    <InfoTitleWrite>{`작성일 : ${item.writeDay}`}</InfoTitleWrite>
                </InfoTitleDiv>              
                <InfoExplanationTitle>게시글 내용</InfoExplanationTitle>
                <BoardSummary>각 게시판 내용을 여기에 넣을생각입니다</BoardSummary>
                <InfoExplanationDiv>
                    <InfoExplanationTitle>댓글</InfoExplanationTitle>                   
                    <InfoCommentForm onSubmit={handleSubmit(onSubmitValid)}>
                        <InfoCommentInputText {...register('comment' , {
                            required: "댓글을 입력해주세요",
                        })}
                        type="text"
                        placeholder="댓글을 입력해주세요"
                        />
                        <InfoCommentInputSubmit type="submit" value="댓글등록"/>
                    </InfoCommentForm>
                    <CommentList>{commentlist.map((x)=>(
                                <CommentListitem key={Math.random()}>{x.comment}
                                </CommentListitem>
                    )
                        )}</CommentList>
                </InfoExplanationDiv>
            </InfoDiv>
            
        </>
        
    )
}

export default BoardPost;