import { Link, useLocation } from "react-router-dom";
import Nav from "../components/Navbar/index";
import { WidthAreaSpace } from "../styles/Layout/CommonLayout";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import BoardForm from "../components/Board/View/BoardForm";

export default function SearchPage() {
  const { state } = useLocation();
  const [itemList, setItemList] = useState([]);
  const serchOption = {
    titleandcontent: "통합검색",
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
  }, []);

  if (!itemList) {
    return <></>;
  }
  console.log("검색 아이템", itemList);

  return (
    <>
      <Nav />
      <WidthAreaSpace>
        <div>
          <span>{serchOption[state.select]}</span>
          <span>{`'${state.keyword}'`}</span>
        </div>
        <div>
          <span>검색결과</span>
          <span>{itemList.length}건</span>
        </div>
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
