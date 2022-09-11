import { Link } from "react-router-dom";
import styled from "styled-components";

import { WidthAreaSpace, WidthAreaInner } from "../styles/Layout/Layout";

import Title from "../utils/Title/Title";
import Nav from "../components/Navbar/index";
import BoardFetchItems from "../components/Board/BoardFetchItems";
import CategoryCommercial from "../components/Slider/CategoryCommercial";
import useUserData from "../api/useUserData";

import WriteIcon from "../assets/images/board_write_bl_24.svg";

export default function Board({ props }) {
  const [userData] = useUserData();

  const categoryName = {
    exercisepost: "3대력게시판",
    threepowerpost: "운동게시판",
    freepost: "자유게시판",
  };

  return (
    <>
      <Title name={categoryName[props]} />
      <Nav />
      <WidthAreaSpace>
        <CategoryCommercial category={props} />
        <WidthAreaInner>
          {userData ? (
            <div style={{ width: "145px" }}>
              <Link to={"write"}>
                <ModalButton>
                  <img
                    src={WriteIcon}
                    style={{ marginRight: "5px" }}
                    alt="writeicon"
                  />
                  글쓰기
                </ModalButton>
              </Link>
            </div>
          ) : null}
          <GroupItem category={`${props}`}>
            <BoardFetchItems category={`${props}`} />
          </GroupItem>
        </WidthAreaInner>
      </WidthAreaSpace>
    </>
  );
}

function GroupItem({ children }) {
  return <>{children}</>;
}

export const ModalButton = styled.button`
  width: 150px;
  height: 48px;
  display: flex;
  margin: 20px 0px;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
  background: #ffffff;
  margin-right: 10px;
  color: #0066ff;
  border: 1px solid #0066ff;
  border-radius: 48px;
  cursor: pointer;
`;
