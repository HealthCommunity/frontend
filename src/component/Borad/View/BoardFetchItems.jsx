import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import BoardItemBox from "../ThreePower/ThreePowerForm";

import axios from "axios";
import BoardForm from "./BoardForm";

export default function BoardFetchItems({ category = "" }) {
  const { pathname } = useLocation();
  const [itemList, setItemList] = useState([]);
  const [page, setPage] = useState(1); //현재 페이지
  const target = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      setPage((page) => page + 1); //페이지 증가
    }
  };

  let categoryPath = "";

  if (category === "user") {
    categoryPath = `${category}/post`;
  } else {
    categoryPath = `${category}`;
  }

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {
      threshold: 0.4,
    });
    const getBoardList = async () => {
      setIsLoading(true);
      await axios
        .get(
          `/api/${categoryPath}?page=${page}&size=${process.env.REACT_APP_PAGE_SIZE}`
        )
        .then((data) => {
          setItemList((prevItems) => [...prevItems, ...data.data.data]);
          observer.observe(target.current); // 타겟 엘리먼트 지정
        });
    };
    getBoardList();
    return () => observer.disconnect();
  }, [page]);
  return (
    <>
      {isLoading ? (
        <BoardItemList>
          {itemList.map(({ id, title, createdDate, nickname, view }) => (
            <Link
              key={id}
              to={`./${category === pathname.slice(1) ? "." : category}/${id}`}
            >
              <li>
                {(category === "threepowerpost") |
                (pathname === "threepowerpost") ? (
                  <BoardItemBox
                    id={id}
                    title={title}
                    createdDate={createdDate}
                    nickname={nickname}
                    view={view}
                  />
                ) : (
                  <BoardForm
                    id={id}
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
  grid-column-gap: 16px;
  grid-row-gap: 16px;
`;

const LodingScreen = styled.div`
  width: 100%;
  height: 800px;
  background-color: yellow;
`;