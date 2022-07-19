import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom } from "../../atom";
import { BsLightbulb, BsLightbulbFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import Search from '../Search/Search';
import {
    NavDiv,
    NavItem,
    NavItemDiv,
    NavHamberDiv,
    NavToggle,
    NavToggleTwo,
    ToggleMenu,
} from "./NavStyle";
import { Menu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { WidthAreaNavSpace } from "../Layout/CommonLayout";
import styled from "styled-components";


const MobileMenu = styled.div`
    display:none;
    @media all and (min-width: 480px) and (max-width: 767px) {
        display: flex;
        
    }
    @media all and (max-width: 479px) {
        display: flex;
        
    }
`

function Nav() {
    const [login, setLogin] = useState(false);
    const setAtom = useSetRecoilState(isDarkAtom);
    const useAtom = useRecoilValue(isDarkAtom);
    const isModeChange = () => {
        setAtom((prev) => !prev);
    };
    return (
        <NavDiv>
            <WidthAreaNavSpace>
                <NavItemDiv>
                        <NavItem>
                            <Link to="/board">3대력 게시판</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/exersise">운동 게시판</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/freeboard">자유 게시판</Link>
                        </NavItem>
                    {login ? (
                        <>
                            <NavItem>
                                <Link to="/login">로그인</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/sign">회원가입</Link>
                            </NavItem>
                        </>
                    ) : (
                        <>
                            <NavItem>
                                <Link to="/login">로그아웃</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/profile">마이페이지</Link>
                            </NavItem>
                        </>
                    )}
                    <NavToggleTwo onClick={isModeChange}>
                        {useAtom ? (
                            <BsLightbulb style={{ fill: "black" }} />
                        ) : (
                            <BsLightbulbFill style={{ fill: "#f1c40f" }} />
                        )}
                    </NavToggleTwo>
                    <Search/>
                </NavItemDiv>
            </WidthAreaNavSpace>
        </NavDiv>
    );
}

export default Nav;
