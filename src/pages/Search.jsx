// react hook , react
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// recoil ( 상태관리 )

// react library
import axios from "axios";

// styled-components , Style Files
import styled from "styled-components";
import { WidthAreaSpace, WidthAreaInner } from "../styles/Layout/Layout";

// Components
import Nav from "../components/Navbar/index";
import BoardForm from "../components/Board/BoardStyle/BoardForm";

// Icons , Images

// Share , Utils

export default function Search() {
  const { state } = useLocation();
  const [itemList, setItemList] = useState([]);
  const serchOption = {
    titleandcontent: "전체",
    title: "제목",
    content: "내용",
    user: "작성자",
  };

  useEffect(() => {
    axios
      .get("/api/search", {
        params: { select: state.select, keyword: state.keyword },
      })
      .then((response) => {
        if (response.data.status === "200") {
          setItemList(response.data.data);
        }
      })
      .catch((error) => {
        alert("검색을 실패했습니다.");
      });
  }, [state]);

  if (!itemList) {
    return <></>;
  }
  return (
    <>
      <Nav />
      <SearchResultInfo>
        <SearchSelector>{`${serchOption[state.select]} 검색`}</SearchSelector>
        <SearchResult>{`'${state.keyword}' 검색 결과 ${itemList.length}건`}</SearchResult>
      </SearchResultInfo>
      <WidthAreaSpace>
        <WidthAreaInner>
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
                <Link key={postId} to={`/${postCategory}/${postId}`}>
                  <BoardForm
                    id={postId}
                    title={title}
                    createdDate={createdDate}
                    nickname={nickname}
                    view={view}
                    thumbnailUrls={thumbnailUrls}
                    urls={urls}
                  />
                </Link>
              )
            )}
          </BoardItemList>
        </WidthAreaInner>
      </WidthAreaSpace>
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

const SearchResultInfo = styled.div`
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchSelector = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #888888;
`;

const SearchResult = styled.div`
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: ${(props) => props.theme.reverseFontColor};
`;
