import { useState } from "react";
import styled from "styled-components";

const NavDiv =styled.div`
    width:100%;
    height:150px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    background-color: ${(props)=>props.theme.navBgColor};
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

function Nav(){
    const [login , setLogin] = useState(true);
    return (
        <NavDiv>
            <NavLogo>로고</NavLogo>
            <NavItemDiv>
                <NavItem>
                    3대력 게시판
                </NavItem>
                <NavItem>
                    운동 게시판
                </NavItem>
                <NavItem>
                    자유 게시판
                </NavItem>
                {login ? (
                    <>
                        <NavItem>
                            로그인
                        </NavItem>
                        <NavItem>
                            회원가입
                        </NavItem>
                    </>
                ):(
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