// react hook , react
import { Link } from "react-router-dom";

// recoil ( 상태관리 )
import useUserData from "../api/useUserData";

// react library

// styled-components , Style Files
import { WidthAreaSpace, WidthAreaInner } from "../styles/Layout/Layout";
import Button from "../share/Button";

// Components
import Nav from "../components/Navbar/index";
import BoardFetchItems from "../components/Board/BoardFetchItems";
import CategoryCommercial from "../components/Slider/CategoryCommercial";

// Icons , Images
import WriteIcon from "../assets/images/board_write_bl_24.svg";

// Share , Utils
import Title from "../utils/Title/Title";

function GroupItem({ children }) {
  return <>{children}</>;
}

export default function Board({ category }) {
  const [userData] = useUserData();

  const categoryName = {
    exercisepost: "3대력게시판",
    threepowerpost: "운동게시판",
    freepost: "자유게시판",
  };

  return (
    <>
      <Title name={categoryName[category]} />
      <Nav />
      <WidthAreaSpace>
        <CategoryCommercial category={category} />
        <WidthAreaInner>
          {userData ? (
            <div style={{ width: "145px", marginBottom: "16px" }}>
              <Link to={"write"}>
                <Button size="sm" variant="blueline">
                  <img
                    src={WriteIcon}
                    style={{ marginRight: "5px" }}
                    alt="writeicon"
                  />
                  글쓰기
                </Button>
              </Link>
            </div>
          ) : null}
          <GroupItem category={`${category}`}>
            <BoardFetchItems category={`${category}`} />
          </GroupItem>
        </WidthAreaInner>
      </WidthAreaSpace>
    </>
  );
}
