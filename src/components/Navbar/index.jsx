import { useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

import { useSetRecoilState } from "recoil";
import axios from "axios";
import styled from "styled-components";
import { isDarkAtom } from "../../atom";

import {
  NavBoardDiv,
  NavDiv,
  NavItem,
  NavItemSelect,
  NavLogoItem,
} from "./NavStyle";
import RocketColorImage from "../../assets/images/common_aboutus_wh_24.svg";
import RocketImage from "../../assets/images/common_aboutus_bk_24.svg";

import useUserData from "../../api/useUserData";
import NavSearch from "./NavSearch";

export default function Nav() {
  const [userData, refetch] = useUserData(); //로그인 상태 유저 데이터 가져옴
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isSearchOpen] = useState(false);

  const navdata =
    pathname.includes("freepost") ||
    pathname.includes("exercisepost") ||
    pathname.includes("threepowerpost")
      ? true
      : false;

  //다크모드, 라이트모드
  const setDarkMode = useSetRecoilState(isDarkAtom);
  const [darkToggle, setDarkToggle] = useState(!!localStorage.getItem("dark"));

  const isModeChange = () => {
    setDarkMode((prev) => !prev);
    setDarkToggle((prev) => !prev);

    if (!darkToggle) {
      localStorage.setItem("dark", true); //로컬 스토리지에 id와 true 상태 저장
    } else {
      localStorage.removeItem("dark"); //로컬 스토리지에서 제거
    }
  };

  //네비게이션 바를 이용한 로그아웃
  const isLoginChange = () => {
    axios
      .post("/api/user/logout")
      .then((response) => {
        if (response.status === 200) {
          alert("로그아웃 성공하였습니다.");
          refetch();
          navigate("/");
        }
      })
      .catch((error) => {
        refetch();
        alert("로그아웃 실패했습니다.");
      });
  };

  //스크롤 이동시 네비게이션 색 변경
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
      scroll={!navdata && ScrollY === 0 ? "#222222" : "white"}
      height={
        ScrollY <= 100
          ? "70px"
          : ScrollY >= 3000
          ? "100px "
          : `${70 + ScrollY / 100}px`
      }
    >
      <Link to="/">
        <NavLogoItem scroll={!navdata && ScrollY === 0 ? "white" : "black"}>
          헬쓰리
        </NavLogoItem>
      </Link>
      <NavBoardDiv>
        <Link to="/threepowerpost">
          <NavItem
            color={pathname.includes("threepowerpost") ? "#0066FF" : ""}
            hover={pathname === "/" ? "white" : ""}
            style={{ marginRight: "20px" }}
          >
            3대력 게시판
          </NavItem>
        </Link>
        <Link to="/exercisepost">
          <NavItem
            color={pathname.includes("exercisepost") ? "#0066FF" : ""}
            hover={pathname === "/" ? "white" : ""}
            style={{ marginRight: "20px" }}
          >
            운동 게시판
          </NavItem>
        </Link>
        <Link to="/freepost">
          <NavItem
            color={pathname.includes("freepost") ? "#0066FF" : ""}
            hover={pathname === "/" ? "white" : ""}
            style={{ marginRight: "20px" }}
          >
            자유 게시판
          </NavItem>
        </Link>
      </NavBoardDiv>
      <NavItemSelect scroll={!navdata && ScrollY === 0 ? "white" : "black"}>
        <NavItem>
          <NavSearch
            isSearchOpen={isSearchOpen}
            navdata={navdata}
            ScrollY={ScrollY}
          />
        </NavItem>
        <NavItem>
          <Link to="/introduce">
            <img
              src={!navdata && ScrollY === 0 ? RocketColorImage : RocketImage}
              alt="rocket"
            />
          </Link>
        </NavItem>
        <NavItem>
          <ToggleBtn onClick={isModeChange} darkToggle={darkToggle}>
            <Circle darkToggle={darkToggle} />
          </ToggleBtn>
        </NavItem>
        {!userData ? (
          <>
            <Link to="/login">
              <NavItem>로그인</NavItem>
            </Link>
            <Link to="/sign">
              <NavItem>회원가입</NavItem>
            </Link>
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
  background-color: ${(props) =>
    !props.darkToggle ? "none" : props.theme.emphasisColorOrange};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
  @media screen and (max-width: 1024px) {
    display: none;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
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
    props.darkToggle &&
    `
      transform: translate(30px, 0);
      transition: all 0.5s ease-in-out;
    `}
`;
