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

function Nav() {
    const [login, setLogin] = useState(false);
    const setAtom = useSetRecoilState(isDarkAtom);
    const useAtom = useRecoilValue(isDarkAtom);
    const [heigthchange, setHeightChange] = useState(false);
    const [displaychange, setDisplayChange] = useState(false);
    const isModeChange = () => {
        setAtom((prev) => !prev);
    };
    const onMenuToggle = () => {
        setHeightChange((prev) => !prev);
        setDisplayChange((prev) => !prev);
    };
    return (
        <NavDiv heigthchange={heigthchange}>
            <WidthAreaNavSpace>
                <ToggleMenu>
                    <NavHamberDiv onClick={onMenuToggle}>
                        <GiHamburgerMenu />
                    </NavHamberDiv>
                    <NavToggle onClick={isModeChange}>
                        {useAtom ? (
                            <BsLightbulb style={{ fill: "black" }} />
                        ) : (
                            <BsLightbulbFill style={{ fill: "#f1c40f" }} />
                        )}
                    </NavToggle>
                </ToggleMenu>
                <NavItemDiv displaychange={displaychange}>
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
                    <Search/>
                    <NavToggleTwo onClick={isModeChange}>
                        {useAtom ? (
                            <BsLightbulb style={{ fill: "black" }} />
                        ) : (
                            <BsLightbulbFill style={{ fill: "#f1c40f" }} />
                        )}
                    </NavToggleTwo>
                </NavItemDiv>
            </WidthAreaNavSpace>
        </NavDiv>
    );
}

export default Nav;
