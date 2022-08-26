import { Link, useLocation } from "react-router-dom";
import Nav from "../components/Navbar/index";
import { WidthAreaSpace } from "../styles/Layout/CommonLayout";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import BoardForm from "../components/Board/BoardStyle/BoardForm";

export default function SearchPage() {
  const { state } = useLocation();
  const [itemList, setItemList] = useState([]);
  const serchOption = {
    titleandcontent: "전체",
    title: "제목",
    content: "내용",
    user: "작성자",
  };

  useEffect(() => {
    console.log("전달하는데이터", state);
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
        console.log("검색결과 없음", error);
      });
  }, [state]);

  if (!itemList) {
    return <></>;
  }
  console.log("검색 아이템", itemList);

  return (
    <>
      <Nav />
      <WidthAreaSpace>
        <SearchResultInfo>
          <SearchSelector>{`${serchOption[state.select]} 검색`}</SearchSelector>
          <SearchResult>{`'${state.keyword}' 검색 결과 ${itemList.length}건`}</SearchResult>
        </SearchResultInfo>
        <BoardItemList>
          {itemList.map(
            ({ postId, title, createdDate, nickname, view, urls }) => (
              <Link key={postId} to={"/"}>
                <BoardForm
                  id={postId}
                  title={title}
                  createdDate={createdDate}
                  nickname={nickname}
                  view={view}
                  urls={urls}
                />
              </Link>
            )
          )}
        </BoardItemList>
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
  margin: 50px 0px 48px 0px;
`;

const SearchSelector = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height, or 144% */

  /* Basic/02 */

  color: #888888;
`;

const SearchResult = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  /* identical to box height, or 122% */

  /* Basic/01 */

  color: #222222;
`;
