import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import BoardItemBox from "../ThreePower/ThreePowerForm";

import axios from "axios";
import BoardForm from "./BoardForm";

export default function BoardFetchItems({ category = "" }) {
  const { pathname } = useLocation();
  const [itemList, setItemList] = useState([]);
  const [page, setPage] = useState(0); //현재 페이지
  const target = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      setPage((page) => page + 1); //페이지 증가
    }
  };

  return (
    <>
      {isLoading ? (
        <BoardItemList>
          {itemList.map(({ postId, title, createdDate, nickname, view }) => (
            <Link
              key={`${categoryPath}${postId}`}
              to={`./${
                category === pathname.slice(1) ? "." : category
              }/${postId}`}
            >
              <li>
                {(category === "threepowerpost") |
                (pathname === "threepowerpost") ? (
                  <BoardItemBox
                    id={postId}
                    title={title}
                    createdDate={createdDate}
                    nickname={nickname}
                    view={view}
                  />
                ) : (
                  <BoardForm
                    id={postId}
                    title={title}
                    createdDate={createdDate}
                    nickname={nickname}
                    view={view}
                  />
                )}
              </li>
            </Link>
          ))}
          <div ref={target} />
        </BoardItemList>
      ) : (
        <LodingScreen>로딩중입니다</LodingScreen>
      )}
    </>
  );
}
const BoardItemList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-column-gap: 32px;
  grid-row-gap: 28px;
`;

const LodingScreen = styled.div`
  width: 100%;
  height: 800px;
  background-color: yellow;
`;
