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
    const [inputItem, setInputItem] = useState([{ id: 0, title: "" }]);

    const handleChange = (e) => {
        setTitle(e.target.value);
    };
    const inputlist = useRef(1);

    function addInput() {
        const input = {
            id: inputlist.current,
            title: "",
        };
        setInputItem([...inputItem, input]); //아이디값에 번호 하나씩 추가
        inputlist.current += 1;
    }
    function deleteInput() {
        const deleteInput = inputItem.slice(0, -1);
        setInputItem(deleteInput);
    }
    function handleChangeInput(e, index) {
        if (index > inputItem.length) return;
        const inputItemsCopy = JSON.parse(JSON.stringify(inputItem));
        inputItemsCopy[index].title = e.target.value;
        setInputItem(inputItemsCopy);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const myData = {
            content: description,
            files: inputItem.map((x) => x.title),
            nickName: "tail",
            title: title,
            userId: 2,
        };
        fetch("/api/exercisepost", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(myData),
            redirect: "follow",
        })
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                alert("게시글 등록 완료");
            })
            .catch((error) => console.error(error.message));
    };

    return (
        <PostWrapper>
            <TitleLabel Htmlfor="input-title">제목</TitleLabel>
            <form onSubmit={handleSubmit}>
                <PostTitleTitle
                    id="input-title"
                    placeholder="글 제목을 입력해주세요!"
                    value={title}
                    onChange={handleChange}
                    autoComplete="off"
                ></PostTitleTitle>
                <button onClick={addInput}> + </button>
                <button onClick={deleteInput}> - </button>
                {inputItem?.map((item, index) => (
                    <div key={index}>
                        <input
                            type="file"
                            className={`title-${index}`}
                            onChange={(e) => handleChangeInput(e, index)}
                            value={item.title || ""}
                        />
                    </div>
                ))}
                <Tiptap setDescription={setDescription} />
                <button type="submit">제출하기</button>
            </form>
        </PostWrapper>
    );
}

export default BoardNewWrite;
