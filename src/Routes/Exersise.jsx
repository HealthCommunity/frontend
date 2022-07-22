import Title from "../components/Title";
import Nav from "../components/Navigation/Nav";
import { Link } from "react-router-dom";
import { SoloBoardItem } from "../components/Board/BoardItem/BoardItem";
import { ex } from "../FakeD/exersise";
import { RightDiv } from "../components/Main/HomeSeparate";
import BoardNav from "../components/Board/BoardNavigation/BoardNav";
import Footer from "../components/Footer/Footer";
import ExersiseSlider from "../components/Board/BoardSlider/ExersiseSlider";
import styled from "styled-components";

import { WidthAreaSpace } from "../components/Layout/CommonLayout";

const ModalButton = styled.button`
    height: 45px;
    background: #fcfcfd;
    border: 1px solid #e8eaee;
    box-sizing: border-box;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    min-width: 200px;
    padding: 0 10px;
    transition: all 0.4s;
`;

function Exersise() {
    return (
        <>
            <Title name="Exersise" />
            <Nav />
            <WidthAreaSpace>
                <ExersiseSlider />
                <BoardNav
                    style={{
                        width: "50%",
                        margin: "0 auto",
                        marginBottom : "50px",
                        pointerEvents: "none",
                    }}
                    name={"운동 게시판"}
                    summary={" 다른 사람의 운동 경험을 확인해보세요!"}
                />

                <Link to={"write"}>
                    <ModalButton>글쓰기</ModalButton>
                </Link>

                <RightDiv
                    style={{ marginBottom: "150px", paddingRight: "0px" }}
                >
                    {ex.map((x) => (
                        <SoloBoardItem
                            key={Math.random()}
                            item={x}
                            color={"#7FBA7A"}
                            value={"exersise"}
                        />
                    ))}
                </RightDiv>
            </WidthAreaSpace>
        </>
    );
}

export default Exersise;
