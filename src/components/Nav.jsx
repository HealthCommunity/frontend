import { useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'

const NavDiv = styled.div`
    width:100%;
    height:150px;
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
`

const NavItemDiv = styled.div`
    width:70%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const NavItem = styled.div`
    margin: 0px 10px;
`

const NavViewMode = styled.button`
    margin: 0px 10px;
    width: 100px;
    height: 40px;
`

function Nav() {
    const [login, setLogin] = useState(true);
    return (
        <NavDiv>
            <NavLogo>로고</NavLogo>
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
                <NavViewMode>다크/라이트</NavViewMode>
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
                            프로필
                        </NavItem>
                    </>
                )
                }
            </NavItemDiv>
        </NavDiv>
    )
}

export default Nav;