import { useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atom";
import { BsFillSunFill,BsMoonFill } from "react-icons/bs";


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
    border: none;
    border-radius: 50%;
    padding:10px;
    width: 50px;
    height: 50px;
`

function Nav() {
    const [login, setLogin] = useState(true);
    const setAtom = useSetRecoilState(isDarkAtom);
    const useAtom = useRecoilValue(isDarkAtom)
    const isModeChange= ()=>{
        setAtom((prev)=>!prev)
    }
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
                <NavViewMode onClick={isModeChange}>{useAtom ? <BsMoonFill/> :<BsFillSunFill/>}</NavViewMode>
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