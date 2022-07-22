import Title from "../components/Title";
import Nav from "../components/Navigation/Nav";
import { RightDiv } from "../components/Main/HomeSeparate";
import { SoloBoardItem } from "../components/Board/BoardItem/BoardItem";
import { free } from "../FakeD/free";
import BoardNav from "../components/Board/BoardNavigation/BoardNav";
import { WidthAreaSpace } from "../components/Layout/CommonLayout";
function Freeboard() {
    return (
        <>
            <Title name="FreeBoard" />
            <Nav />
            <WidthAreaSpace>
                <BoardNav
                    style={{
                        width: "50%",
                        margin: "0 auto",
                        pointerEvents: "none",
                        marginBottom: "50px"
                    }}
                    name={"자유 게시판"}
                    summary={
                        " 운동경험, 운동 팁, 식단 등 자유로운 게시판입니다"
                    }
                />
                <RightDiv
                    style={{ marginBottom: "150px", paddingRight: "0px" }}
                >
                    {free.map((x) => (
                        <SoloBoardItem
                            key={Math.random()}
                            item={x}
                            color={"#FF754C"}
                            value={"freeboard"}
                        />
                    ))}
                </RightDiv>
            </WidthAreaSpace>
            
        </>
    );
}

export default Freeboard;
