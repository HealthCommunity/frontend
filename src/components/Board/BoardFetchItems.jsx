// react hook , react
import { useState, useEffect, useRef } from "react";

// recoil ( 상태관리 )

// react library
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

// styled-components , Style Files
import styled from "styled-components";
import BoardItemBox from "./BoardStyle/ThreePowerForm";
import BoardForm from "./BoardStyle/BoardForm";

// Components
import LoadingSpinner from "../Loding/LoadingSpinner";

// Icons , Images

// Share , Utils

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
        <BoardItemList>
          {itemList.map(
            ({
              postId,
              title,
              createdDate,
              nickname,
              view,
              urls,
              postCategory,
              thumbnailUrls,
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
                      thumbnailUrls={thumbnailUrls}
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
          <div ref={target} style={{ width: "100%" }} />
        </BoardItemList>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
}

const BoardItemList = styled.ul`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  grid-column-gap: 32px;
  grid-row-gap: 28px;
  justify-content: center;
`;
