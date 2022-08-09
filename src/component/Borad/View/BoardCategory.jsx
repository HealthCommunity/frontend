import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BoardItemBox from "./BoardItemBox";
import axios from "axios";

export default function BoardCategory({ category = "" }) {
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
  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {
      threshold: 0.4,
    });
    const getBoardList = async () => {
      setIsLoading(true);
      await axios
        .get(
          `/api/exercisepost/list?page=${page}&size=${process.env.REACT_APP_PAGE_SIZE}`
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
            <Link key={id} to={`.${category}/${id}`}>
              <li>
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
          <div ref={target}>타겟</div>
        </BoardItemList>
      ) : (
        <h1>로딩중입니다</h1>
      )}
    </>
  );
}
const BoardItemList = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, minmax(226px, 1fr)); /*동적 개수 표현 수정*/
  grid-column-gap: 16px;
  grid-row-gap: 16px;
`;
