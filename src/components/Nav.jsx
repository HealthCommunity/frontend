import { useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atom";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";


const NavDiv = styled.div`
    width:100%;
    height:100px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    background-color: ${(props) => props.theme.navBgColor};
`

const NavLogo = styled.div`
    display: flex;
    width:30%;
    justify-content: center;
    align-items: center;
    :hover{
        transform: scale(1.05);
        color:white;
    }
`

const NavItemDiv = styled.div`
    width:70%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 30px;
`

const NavItem = styled.div`
    margin: 0px 10px;
    padding:10px;
    :hover{
        border-bottom: 1px solid ${(props) => props.theme.bgColor};
        transform: scale(1.05);
    }
`

const NavToggle = styled(NavItem)`
    background-color: ${(props) => props.theme.bgColor};
    border-radius: 50%;
    width:30px;
    height:30px;
    cursor: pointer;
    display: flex;
`

function Nav() {
    const [login, setLogin] = useState(false);
    const setAtom = useSetRecoilState(isDarkAtom);
    const useAtom = useRecoilValue(isDarkAtom)
    const isModeChange = () => {
        setAtom((prev) => !prev)
    }
    return (
        <NavDiv>
            <NavLogo>
                <Link to={"/"}>로고</Link>
            </NavLogo>
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
                            로그아웃
                        </NavItem>
                        <NavItem>
                            <Link to="/profile">마이페이지</Link>
                        </NavItem>
                    </>
                )
                }
                <NavToggle onClick={isModeChange}>{useAtom ? <BsMoonFill /> : <BsFillSunFill />}</NavToggle>
            </NavItemDiv>
        </NavDiv>
    )
}

export default Nav;