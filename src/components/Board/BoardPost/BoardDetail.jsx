import {InfoCommentInputSubmit,InfoCommentInputText,InfoDiv,InfoExplanationDiv,InfoExplanationTitle,InfoTitle,InfoTitleDiv,InfoTitleWrite,InfoCommentForm,CommentList,CommentListitem,BoardSummary} from "./BoardDetailStyle";
import { threepower } from "../../../FakeD/power";
import {ex} from '../../../FakeD/exersise';
import {free} from '../../../FakeD/free';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useParams } from "react-router";
import Modal from 'react-modal';
import styled from "styled-components";


const ModalButton = styled.button`
    width:200px;
    min-width: 150px;
    height: 56px;
    border: none;
    background-color: ${(props)=>props.theme.navBgColor};
    border-radius: ${(props) => props.theme.radiusSize20};
    font-size: ${(props) => props.theme.fontSizeH4};
    line-height: 1.42857;
    font-weight: 700;
    -webkit-transition: all 0.25s;
    -o-transition: all 0.25s;
    transition: all 0.25s;
    cursor: pointer;
    :hover {
        background: ${(props) => props.theme.colorPointPupple300};
    }
`
const ModalForm =styled.form`
    display: flex;
    flex-direction: column;
    input {
        box-sizing: border-box;
        text-align: center;
        width: 100%;
        height: 45px;
        color: #21242E;
        font-size: 16px;
        padding: 0 20px;
        border-radius: 20px;
        background-color: #F3F4F7;
        border: 1px solid #ccc;
        line-height: 45px !important;
        margin-bottom: 2px;
    :focus{
        outline: none;
    }
    }
`

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      margin: "0 auto",
    },
  };
  

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
    const [modalOpen, setModalOpen] = useState(false);
    const modalIsOpen = () =>{
        setModalOpen(true);
    }
    const closeModal = ()=>{
        setModalOpen(false);
    }
    const { register:modalregister, handleSubmit:modalsubmit ,reset: modalreset} = useForm();
    const onSubmit = data => {
        console.log(data);
        closeModal()
        modalreset()
    };
    return(
        <InfoDiv>
        <InfoTitle>{`${boardname} : ${item.title}`}</InfoTitle>
        <InfoTitleDiv>
            <InfoTitleWrite>{`작성자 : ${item.userId} `}</InfoTitleWrite>
            <InfoTitleWrite>{`작성일 : ${item.writeDay}`}</InfoTitleWrite>
        </InfoTitleDiv>    
        <ModalButton onClick={modalIsOpen}>관리자 3대력 부여</ModalButton>
        <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <ModalForm onSubmit={modalsubmit(onSubmit)}>
            <input {...modalregister("deadlift", { required : true , pattern :/^[0-9]*$/  })} placeholder="데드 리프트"/>
            <input {...modalregister("benchpress", { required: true , pattern :/^[0-9]*$/ })} placeholder="벤치 프레스" />
            <input {...modalregister("squat", { required: true , pattern :/^[0-9]*$/ })} placeholder="스쿼트"/>
            <input style={{fontWeight:"600" ,width: "60%" , border:"none"  , cursor:"pointer", marginTop:"10px"}} type="submit" />
        </ModalForm>
      </Modal>
        <InfoExplanationTitle>게시글 내용</InfoExplanationTitle>
        <BoardSummary>각 게시판 내용을 여기에 넣을생각입니다</BoardSummary>
        <InfoExplanationDiv>
            <InfoExplanationTitle style={{marginTop: "50px"}}>댓글</InfoExplanationTitle>                   
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