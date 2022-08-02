import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useEffect } from "react";

import BoardItemBox from "./BoardItemBox";

export default function BoardCategory({ category }) {
    const PAGE_SIZE = 20;
    const PAGE_CURRENT = 1;

    const [boardLists, setboardLists] = useState([]);

    const getRequest = async () => {
        const response = await fetch(
            `http://54.166.132.169:8080/api/exercisepost/list?page=${PAGE_CURRENT}&size=${PAGE_SIZE}`,
            {
                method: "GET",
            }
        );
        const data = await response.json();
        return data.data;
    };

    useEffect(() => {
        getRequest().then(setboardLists);
    }, []);

    console.log("제발 와라", boardLists);

    return (
        <BoardItemList>
            {boardLists.map(({ id, title, createdDate, nickname, view }) => (
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
