import { InfoTitle } from "./BoardDetailStyle";
import { useLocation } from "react-router";
import Tiptap from "../../Editor/Tiptap";
import Details from "../../Editor/Details";
import "../../Editor/TiptapStyle.css";
import { useRef, useState } from "react";
import styled from "styled-components";

const PostWrapper = styled.div`
    max-width: 1040px;
    padding: 60px 16px;
    width: 1024px;
    margin: 0 auto;
    color: #333;
    grid-gap: 50px;
    gap: 50px px;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 150px;
`;

const PostTitleTitle = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 56px;
    min-height: 56px;
    line-height: 44px;
    box-shadow: none;
    padding-left: 16px;
    padding-right: 52px;
    border: 1px solid grey;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
    color: #333;
`;

const TitleLabel = styled.label`
    display: inline-block;
    margin-bottom: 5px;
    color: #333;
    font-weight: 500;
`;

function BoardNewWrite() {
    const { pathname } = useLocation();
    const boardname = pathname.split("/")[1];
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const getContent = () => {
        console.log(title, description);
    };

    const handleChange = (e) => {
        setTitle(e.target.value);
        console.log(title);
    }
    const inputlist = useRef(1);
    const [ inputItem, setInputItem] = useState([{id: 0, title: ""}]);
    function addInput (){
        const input = {
            id: inputlist.current,
            title: "",
        }
        setInputItem([[...inputItem, input]]);  //아이디값에 번호 하나씩 추가
        inputlist.current+=1;
    }
    function deleteInput(index) {
        setInputItem(inputItem.filter((item)=>item.index !== index)); //아이디 리스트중에 index 가 동일하지 않으면 삭제
    }

    const handleChangeInput= (e, index)=>{
        if(index > inputItem.length) return;
        const inputItemsCopy= JSON.parse(JSON.stringify(inputItem));
        inputItemsCopy[index].title = e.target.value;
        setInputItem(inputItemsCopy);
    }
    
    return (
        <PostWrapper>
            <InfoTitle>{`${boardname} 글쓰기`}</InfoTitle>
            <TitleLabel Htmlfor="input-title">제목</TitleLabel>
            <PostTitleTitle
                id="input-title"
                placeholder="글 제목을 입력해주세요!"
                value={title}
                onChange={handleChange}
                autoComplete="off"
            ></PostTitleTitle>
            {inputItem?.map((item, index) => (
                <div key={index}>
                <div>라벨{index}</div>
                <input
                    type="text"
                    className={`title-${index}`}
                    onChange={e => handleChangeInput(e, index)}
                    value={item.title || ""}
                />
                {index === 0 && (
                    <button onClick={addInput}> + </button>
                    )}


                {index > 0 && item[index - 1] ? (
                    <button onClick={deleteInput(item.id)}> - </button>
                ) : (
                    ''
                )}
                </div>
            ))}
            <Tiptap setDescription={setDescription} />
            <label>미리보기</label>
            <Details description={description} />
            <button onClick={getContent}>내용 가져오기</button>
        </PostWrapper>
    );
}

export default BoardNewWrite;
