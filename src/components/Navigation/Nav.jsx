import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom, isLogin } from "../../atom";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Search from "../Search/Search";
import { NavDiv, NavItem, NavItemDiv, NavToggleTwo } from "./NavStyle";
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { WidthAreaNavSpace } from "../Layout/CommonLayout";
import styled from "styled-components";
import Introduce from "../Introduce/Introduce";
import axios from "axios";

const MobileMenu = styled.div`
    display: none;
    @media all and (min-width: 480px) and (max-width: 767px) {
        display: flex;
    }
    @media all and (max-width: 479px) {
        display: flex;
    }
`;

function Nav() {
    let navigate = useNavigate();
    //const [login, setLogin] = useState(false);
    const setAtom = useSetRecoilState(isDarkAtom);
    const useAtom = useRecoilValue(isDarkAtom);

    const setLogin = useSetRecoilState(isLogin);
    const useLogin = useRecoilValue(isLogin);

    const isModeChange = () => {
        setAtom((prev) => !prev);
    };

    const isLoginChange = () => {
        fetch("/api/user/logout", {
            method: "GET",
        })
            .then((response) => {
                if (response.status === 200) {
                    setLogin(false);
                    console.log("setLogin >>", useLogin);
                    console.log("로그아웃 성공");
                }
            })
            .catch((error) => console.error(error.message));
        // axios
        //     .get("/api/user/logout")
        //     .then(function (response) {
        //         console.log(response);
        //         // if (response.status === 200) {
        //         //     console.log("로그아웃 성공");
        //         //     navigate("/");
        //         //     setLogin((prev) => !prev);
        //         // }
        //     })
        //     .catch(function (error) {
        //         console.log("로그아웃 실패", error);
        //     });
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
                    {useLogin === false ? (
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
                            <NavItem onClick={isLoginChange}>
                                <Link to="/login">로그아웃</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/profile">마이페이지</Link>
                            </NavItem>
                        </>
                    )}

                    <Menu
                        transition
                        menuButton={
                            <MenuButton
                                style={{
                                    margin: "0",
                                    display: "flex",
                                    justifyContent: "center",
                                    width: "100px",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    fontSize: "24px",
                                    cursor: "pointer",
                                }}
                            >
                                <GiHamburgerMenu style={{ margin: "0" }} />
                            </MenuButton>
                        }
                    >
                        <NavToggleTwo onClick={isModeChange}>
                            {useAtom ? (
                                <FaLightbulb
                                    style={{
                                        fill: "black",
                                        margin: "0",
                                        padding: "0px 10px",
                                    }}
                                />
                            ) : (
                                <FaRegLightbulb
                                    style={{
                                        fill: "#f1c40f",
                                        margin: "0",
                                        padding: "0px 10px",
                                    }}
                                />
                            )}
                            {useAtom ? "Dark" : "Light"}
                        </NavToggleTwo>
                        <MenuItem>
                            <Search />
                        </MenuItem>
                        <MenuItem>
                            <Introduce />
                        </MenuItem>
                    </Menu>
                </NavItemDiv>
            </WidthAreaNavSpace>
        </NavDiv>
    );
}

export default Nav;
