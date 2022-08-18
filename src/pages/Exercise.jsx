import Title from "../utils/Title/Title";
import Nav from "../components/Navbar/index";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { WidthAreaSpace } from "../styles/Layout/CommonLayout";
import BoardFetchItems from "../components/Board/View/BoardFetchItems";
import { useRecoilValue } from "recoil";
import { isLogin } from "../atom";
import AdverSlider from "../components/Slider/AdverSlider/AdverSlider";
import slide1 from "../assets/images/main-slide-img01.png";
import slide2 from "../assets/images/main-slide-img02.png";
import slide3 from "../assets/images/main-slide-img03.png";

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

export default function Exercise() {
    const data = [slide1, slide2, slide3];

    const useLogin = useRecoilValue(isLogin);
    return (
        <>
            <Title name="exercise" />
            <Nav />
            <WidthAreaSpace>
                <AdverSlider data={data} />
                {useLogin ? (
                    <ModalButton>
                        <Link to={"write"}>글쓰기</Link>
                    </ModalButton>
                ) : null}

                <GroupItem category="exercisepost">
                    <BoardFetchItems category="exercisepost" />
                </GroupItem>
            </WidthAreaSpace>
        </>
    );
}

function GroupItem({ children }) {
    return <>{children}</>;
}
