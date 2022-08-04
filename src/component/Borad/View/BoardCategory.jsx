import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import BoardItemBox from "./BoardItemBox";
import axios from "axios";

export default function BoardCategory({ category }) {
    const PAGE_SIZE = 5;
    // const PAGE_CURRENT = 1;
    const [itemList, setItemList] = useState([]);
    const [page, setPage] = useState(1); //현재 페이지
    const [target, setTarget] = useState(""); // target
    const [isLoding, setIsLoding] = useState(false); // isloding

    const getRequest = async () => {
        const response = await fetch(
            `/api/exercisepost/list?page=${page}&size=${PAGE_SIZE}`,
            {
                method: "GET",
            }
        );
        const data = await response.json();
        return data.data;
    };

    const onIntersect = async ([entry], observer) => {
        if (entry.isIntersecting && !isLoding) {
            observer.unobserve(entry.target);
            setIsLoding(true);
            // 데이터를 가져오는 부분
            console.log("옵저버 수행");
            setPage((page) => page + 1);
            console.log("페이지 번호-->>", page);
            let Items = await getRequest();
            setItemList((itemLists) => itemLists.concat(Items));
            setIsLoding(false);
            observer.observe(entry.target);
        }
    };

    //처음 데이터 패칭
    useEffect(() => {
        getRequest().then(setItemList);
    }, []);

    useEffect(() => {
        let observer;
        if (target) {
            // callback 함수, option
            observer = new IntersectionObserver(onIntersect, {
                threshold: 0.4,
            });
            observer.observe(target); // 타겟 엘리먼트 지정
        }
        return () => observer && observer.disconnect();
    }, [target]);

    console.log("제발 와라", itemList);

    return (
        <BoardItemList>
            {itemList.map(({ id, title, createdDate, nickname, view }) => (
                <Link to={`./${category}/${id}`}>
                    <li key={`${category}` + id}>
                        <BoardItemBox
                            id={id}
                            title={title}
                            createdDate={createdDate}
                            nickname={nickname}
                            view={view}
                        ></BoardItemBox>
                    </li>
                </Link>
            ))}
            <div ref={setTarget}>타겟</div>
        </BoardItemList>
    );
}

const BoardItemList = styled.ul`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(
        3,
        minmax(226px, 1fr)
    ); /*동적 개수 표현 수정*/
    grid-column-gap: 16px;
    grid-row-gap: 16px;
`;
