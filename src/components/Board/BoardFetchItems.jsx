import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import BoardItemBox from "./BoardStyle/ThreePowerForm";
import axios from "axios";
import BoardForm from "./BoardStyle/BoardForm";

export default function BoardFetchItems({ category = "", center }) {
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

  let categoryPath = "";

  if (category === "user") {
    categoryPath = `${category}/post`;
  } else {
    categoryPath = `${category}`;
  }

  const getRequest = async (page) => {
    setIsLoading(true);
    return axios
      .get(
        `/api/${categoryPath}?page=${page}&size=${process.env.REACT_APP_PAGE_SIZE}`
      )
      .then(({ data }) => data.data);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {
      threshold: 0.5,
    });
    getRequest(page).then((items) => {
      if (items.length > 0) {
        setItemList((prevItems) => [...prevItems, ...items]);
        observer.observe(target.current); // 타겟 엘리먼트 지정
      }
    });
    return () => {
      observer.disconnect();
    };
  }, [page, category]);
  return (
    <>
      {isLoading ? (
        <BoardItemList style={center && { justifyContent: "center" }}>
          {itemList.map(
            ({
              postId,
              title,
              createdDate,
              nickname,
              view,
              urls,
              postCategory,
            }) => (
              <Link
                key={`${categoryPath}${postId}`}
                to={
                  category === "user"
                    ? `/${postCategory}/${postId}`
                    : `./${
                        category === pathname.slice(1) ? "." : category
                      }/${postId}`
                }
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
                      urls={urls}
                    />
                  ) : (
                    <BoardForm
                      id={postId}
                      title={title}
                      createdDate={createdDate}
                      nickname={nickname}
                      view={view}
                      urls={urls}
                    />
                  )}
                </li>
              </Link>
            )
          )}
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
  grid-column-gap: 32px;
  grid-row-gap: 28px;
`;

export const LodingScreen = styled.div`
  width: 100%;
  height: 800px;
  background-color: yellow;
`;
