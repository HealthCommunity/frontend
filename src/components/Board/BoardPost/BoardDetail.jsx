import {InfoCommentInputSubmit,InfoCommentInputText,InfoDiv,InfoExplanationDiv,InfoExplanationTitle,InfoTitle,InfoTitleDiv,InfoTitleWrite,InfoCommentForm,CommentList,CommentListitem,BoardSummary} from "./BoardDetailStyle";
import { threepower } from "../../../FakeD/power";
import {ex} from '../../../FakeD/exersise';
import {free} from '../../../FakeD/free';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useParams } from "react-router";
function BoardDetail(){
    const {id} = useParams();
    const {pathname} = useLocation();
    const boardname = pathname.split('/')[1];
    const item = boardname === "exersise" ? ex.find((x=>x.id === +id)) : boardname === "freeboard" ? free.find((x)=>x.id === +id) : threepower.find((x)=>x.id=== +id);
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
    return(
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
    )
}

export default BoardDetail;