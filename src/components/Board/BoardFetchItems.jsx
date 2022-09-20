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

  //옵저버 감시되어 타겟이 탐지되면 실행되는 함수
  const onIntersect = async ([entry], observer) => {
    //옵저버 감시영역에 들어옴
    if (entry.isIntersecting) {
      observer.unobserve(entry.target); //게시글 목록 맨 아래 타겟팅
      setPage((page) => page + 1); //페이지 증가
    }
  };

  let categoryPath = "";

  //내게시글 목록은 뒤에 경로가 없어서 별도로 추가 경로설정 필요
  if (category === "user") {
    categoryPath = `${category}/post`;
  } else {
    categoryPath = `${category}`;
  }

  //옵저버로 증가시킨 pase 상태 적용해서 게시글 목록 api 요청
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
      //서버에서 받아온 api데이터가 0보다 작은 경우에는 옵저버 실행시키지 않는다
      if (items.length > 0) {
        setItemList((prevItems) => [...prevItems, ...items]); //api로 받아온 게시글 목록 state에 데이터들 추가
        observer.observe(target.current); // 타겟 엘리먼트 지정
      }
    });
    return () => {
      observer.disconnect(); //옵저버 제거
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
                      thumbnailUrls={thumbnailUrls}
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
  grid-column-gap: 15px;
  grid-row-gap: 14px;
  justify-content: center;
`;
