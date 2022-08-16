import { useNavigate, Link, useLocation } from "react-router-dom";
import SearchColorImage from "../../assets/images/common_search_wh_24.svg";
import RocketColorImage from "../../assets/images/common_aboutus_wh_24.svg";
import SearchImage from "../../assets/images/common_search_bk_24.svg";
import RocketImage from "../../assets/images/common_aboutus_bk_24.svg";
import {
    NavBoardDiv,
    NavDiv,
    NavItem,
    NavItemSelect,
    NavLogoItem,
} from "./NavStyle";
import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import useUserData from "../../api/useUserData";

export default function Nav() {
    const [userData, refetch] = useUserData(); //로그인 상태 유저 데이터 가져옴
    let navigate = useNavigate();
    let { pathname } = useLocation();
    const [toggle, setToggle] = useState(false);
    let navdata =
        pathname.includes("freepost") ||
        pathname.includes("exercisepost") ||
        pathname.includes("threepowerpost")
            ? true
            : false;
    const clickedToggle = () => {
        setToggle((prev) => !prev);
    };

    const isLoginChange = () => {
        axios
            .post("/api/user/logout")
            .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    console.log("로그아웃 성공");
                    refetch();
                    navigate("/");
                }
            })
            .catch(function (error) {
                refetch();
                console.log("로그아웃 실패", error);
            });
    };
    //스크롤 기능 구현
    const [ScrollY, setScrollY] = useState(0); // 스크롤값을 저장하기 위한 상태
    const handleFollow = () => {
        setScrollY(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장
    };
    useEffect(() => {
        const watch = () => {
            window.addEventListener("scroll", handleFollow);
        };
        watch(); // addEventListener 함수를 실행
        return () => {
            window.removeEventListener("scroll", handleFollow); // addEventListener 함수를 삭제
        };
    });

    return (
        <NavDiv
            scroll={ScrollY === 0 ? "#222222" : "white"}
            height={
                ScrollY <= 100
                    ? "70px"
                    : ScrollY >= 3000
                    ? "100px "
                    : `${70 + ScrollY / 100}px`
            }
        >
            <NavLogoItem scroll={ScrollY === 0 ? "white" : "black"}>
                <Link to="/">헬쓰리</Link>
            </NavLogoItem>
            <NavBoardDiv>
                <NavItem>
                    <Link to="/threepowerpost">3대력 게시판</Link>
                </NavItem>
                <NavItem>
                    <Link to="/exercisepost">운동 게시판</Link>
                </NavItem>
                <NavItem>
                    <Link to="/freepost">자유 게시판</Link>
                </NavItem>
            </NavBoardDiv>
            <NavItemSelect scroll={ScrollY === 0 ? "white" : "black"}>
                <NavItem>
                    <img
                        src={ScrollY === 0 ? SearchColorImage : SearchImage}
                        alt="search"
                    />
                </NavItem>
                <NavItem>
                    <img
                        src={ScrollY === 0 ? RocketColorImage : RocketImage}
                        alt="rocket"
                    />
                </NavItem>
                <NavItem>
                    <ToggleBtn onClick={clickedToggle} toggle={toggle}>
                        <Circle toggle={toggle} />
                    </ToggleBtn>
                </NavItem>
                {!userData ? (
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
            </NavItemSelect>
        </NavDiv>
    );
}

const ToggleBtn = styled.button`
    width: 60px;
    height: 30px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    background-color: ${(props) => (!props.toggle ? "none" : "rgb(51,30,190)")};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease-in-out;
`;
const Circle = styled.div`
    background-color: white;
    width: 20px;
    height: 20px;
    border-radius: 50px;
    position: absolute;
    left: 5%;
    transition: all 0.5s ease-in-out;
    ${(props) =>
        props.toggle &&
        `
      transform: translate(30px, 0);
      transition: all 0.5s ease-in-out;
    `}
`;
