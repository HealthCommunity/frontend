import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom } from "../../atom";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import {NavDiv,NavLogo,NavItem,NavItemDiv,NavHamberDiv,NavToggle,NavToggleTwo,ToggleMenu} from './NavStyle'


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
            <NavLogo>
                <Link to={"/"}>로고</Link>
                <ToggleMenu>
                    <NavHamberDiv onClick={onMenuToggle}>
                        <GiHamburgerMenu />
                    </NavHamberDiv>
                    <NavToggle onClick={isModeChange}>
                        {useAtom ? <BsMoonFill /> : <BsFillSunFill />}
                    </NavToggle>
                </ToggleMenu>
            </NavLogo>
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
                <NavToggleTwo onClick={isModeChange}>
                    {useAtom ? <BsMoonFill /> : <BsFillSunFill />}
                </NavToggleTwo>
            </NavItemDiv>
        </NavDiv>
    );
}

export default Nav;
