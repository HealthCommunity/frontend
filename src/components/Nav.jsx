import { useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atom";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import {GiHamburgerMenu} from 'react-icons/gi';


const NavDiv = styled.div`
    width:100%;
    height:100px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    background-color: ${(props) => props.theme.navBgColor};
    @media all and (min-width:480px) and (max-width:767px) {
        justify-content: center;
        flex-direction: column;
        height: ${props=>props.heigthchange ? "250px" : "100px"};
    } 
    @media all and (max-width:479px) {
        justify-content: center;
        flex-direction: column;
        height: ${props=>props.heigthchange ? "250px" : "100px"};
    }
`

const NavLogo = styled.div`
    display: flex;
    width:30%;
    justify-content: center;
    align-items: center;
    @media all and (min-width:480px) and (max-width:767px) {
        width: 90%;
        margin: 0 auto;
        justify-content: space-between;
    } 
    @media all and (max-width:479px) {
        width: 90%;
        margin: 0 auto;
        justify-content: space-between;
    }
`

const NavItemDiv = styled.div`
    width:70%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 30px;
    @media all and (min-width:480px) and (max-width:767px) {
        flex-direction: column;
        width:100%;
        display:${props=>props.displaychange ? "" : "none"};
    } 
    @media all and (max-width:479px) {
        flex-direction: column;
        width:100%;
        display:${props=>props.displaychange ? "" : "none"};
    }
`

const NavItem = styled.div`
    margin: 0px 10px;
    padding:10px;
    @media all and (min-width:480px) and (max-width:767px) {
        font-size: 10px;

    } 
    @media all and (max-width:479px) {
        font-size: 10px;
    }
`

const NavToggle = styled(NavItem)`
    display:none;
    @media all and (min-width:480px) and (max-width:767px) {
        background-color: ${(props) => props.theme.bgColor};
        border-radius: 50%;
        width:30px;
        height:30px;
        cursor: pointer;
        display: flex;
    } 
    @media all and (max-width:479px) {
        background-color: ${(props) => props.theme.bgColor};
        border-radius: 50%;
        width:30px;
        height:30px;
        cursor: pointer;
        display: flex;
    }
`
const NavToggleTwo = styled(NavItem)`
    background-color: ${(props) => props.theme.bgColor};
    border-radius: 50%;
    width:30px;
    height:30px;
    cursor: pointer;
    display: flex;
    @media all and (min-width:480px) and (max-width:767px) {
        display: none;
    } 
    @media all and (max-width:479px) {
        display: none;
    }
`

const NavHamberDiv=styled.div`
    display: none;
    @media all and (min-width:480px) and (max-width:767px) {
        display: flex;
        width:70%;

    } 
    @media all and (max-width:479px) {
        display: flex;
        width:70%;
    }
`
const ToggleMenu = styled.div`
    display:flex;
`

function Nav({}) {
    const [login, setLogin] = useState(true);
    const setAtom = useSetRecoilState(isDarkAtom);
    const useAtom = useRecoilValue(isDarkAtom);
    const [heigthchange,setHeightChange] = useState(false);
    const [displaychange, setDisplayChange] = useState(false);
    const isModeChange = () => {
        setAtom((prev) => !prev)
    }
    const onMenuToggle = () =>{
        setHeightChange((prev)=>!prev);
        setDisplayChange((prev)=>!prev);
    }
    return (
        <NavDiv heigthchange={heigthchange}>
            <NavLogo>
                <Link to={"/"}>로고</Link>
                <ToggleMenu>
                    <NavHamberDiv onClick={onMenuToggle}>
                        <GiHamburgerMenu/>
                    </NavHamberDiv>
                    <NavToggle onClick={isModeChange}>{useAtom ? <BsMoonFill /> : <BsFillSunFill />}</NavToggle>
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
                            로그아웃
                        </NavItem>
                        <NavItem>
                            프로필
                        </NavItem>
                    </>
                )
                }
                <NavToggleTwo onClick={isModeChange}>{useAtom ? <BsMoonFill /> : <BsFillSunFill />}</NavToggleTwo>
            </NavItemDiv>
        </NavDiv>
    )
}

export default Nav;