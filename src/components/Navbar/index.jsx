// react hook , react
import { useEffect, useState } from "react";

// recoil ( 상태관리 )
import { useSetRecoilState } from "recoil";
import { isDarkAtom } from "../../atom";
import useUserData from "../../api/useUserData";

// react library
import { useNavigate, Link, useLocation } from "react-router-dom";
import axios from "axios";

// styled-components , Style Files
import styled, { css } from "styled-components";
import {
  NavBoardDiv,
  NavWrapper,
  NavGroup,
  NavItem,
  NavItemSelect,
  NavLogoItem,
} from "./NavStyle";

// Components
import NavSearch from "./NavSearch";

// Icons , Images
import RocketColorImage from "../../assets/images/common_aboutus_wh_24.svg";
import RocketImage from "../../assets/images/common_aboutus_bk_24.svg";
import MenuIconBK from "../../assets/images/hamburgermenu_bk.svg";
import MenuIconWH from "../../assets/images/hamburgermenu_wh.svg";
import CancleIcon from "../../assets/images/board_write__cancle_24.svg";

// Share , Utils

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
  const [scrollY, setScrollY] = useState(0); // 스크롤값을 저장하기 위한 상태
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

  //사이드버튼 토글
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    if (navToggle) {
      document.body.style.overflow = "hidden"; //모달 배경 스크롤 방지
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [navToggle]);

  const handleSideNav = () => {
    setNavToggle((prev) => !prev);
  };

  return (
    <>
      <NavWrapper
        scroll={!navdata && scrollY === 0 ? "#222222" : "white"}
        height={
          scrollY <= 100
            ? "70px"
            : scrollY >= 3000
            ? "100px "
            : `${70 + scrollY / 100}px`
        }
      >
        <NavGroup>
          <Link to="/">
            <NavLogoItem scroll={!navdata && scrollY === 0 ? "white" : "black"}>
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
          <NavItemSelect scroll={!navdata && scrollY === 0 ? "white" : "black"}>
            <NavItem>
              <NavSearch
                isSearchOpen={isSearchOpen}
                navdata={navdata}
                ScrollY={scrollY}
              />
            </NavItem>
            <NavItem>
              <Link to="/introduce">
                <img
                  src={
                    !navdata && scrollY === 0 ? RocketColorImage : RocketImage
                  }
                  alt="rocket"
                />
              </Link>
            </NavItem>
            <NavItem>
              <ToggleBtn onClick={isModeChange} darkToggle={darkToggle}>
                <Circle darkToggle={darkToggle} />
              </ToggleBtn>
            </NavItem>

            <NavItem className="miniNav" onClick={handleSideNav}>
              <img
                src={!navdata && scrollY === 0 ? MenuIconWH : MenuIconBK}
                alt="모바일버전 네비게이션바"
              ></img>
            </NavItem>

            {!userData ? (
              <>
                <Link to="/login">
                  <NavItem className="pullNav">로그인</NavItem>
                </Link>
                <Link to="/sign">
                  <NavItem className="pullNav">회원가입</NavItem>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <NavItem className="pullNav" onClick={isLoginChange}>
                    로그아웃
                  </NavItem>
                </Link>
                <Link to="/profile">
                  <NavItem className="pullNav">마이페이지</NavItem>
                </Link>
              </>
            )}
          </NavItemSelect>
        </NavGroup>
      </NavWrapper>
      <SideNav isToggle={navToggle} navCategory={navdata}>
        <SideNavTop>
          <img
            src={CancleIcon}
            onClick={handleSideNav}
            alt="네비게이션 버튼 닫기"
          ></img>
        </SideNavTop>
        <SideNavContent>
          <div>
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
                <Link to="/login">
                  <NavItem>로그아웃</NavItem>
                </Link>
                <Link to="/profile">
                  <NavItem>마이페이지</NavItem>
                </Link>
              </>
            )}
            <Link to="/threepowerpost">
              <NavItem>3대력 게시판</NavItem>
            </Link>
            <Link to="/exercisepost">
              <NavItem>운동 게시판</NavItem>
            </Link>
            <Link to="/freepost">
              <NavItem>자유 게시판</NavItem>
            </Link>
          </div>
        </SideNavContent>
      </SideNav>
    </>
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
  cursor: pointer;
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

const SideNav = styled.nav`
  position: fixed;
  height: 100%;
  right: 0px;
  top: 0px;
  width: 300px;

  background-color: ${(props) => props.theme.reverseColor};
  z-index: 99;

  ${(props) =>
    props.isToggle
      ? css`
          transition: transform 0.5s;
        `
      : css`
          transform: translate3d(300px, 0, 0);
          transition: transform 0.5s;
        `};
`;

const SideNavTop = styled.div`
  display: flex;
  justify-content: end;

  width: 300px;
  margin: 16px 0;
  padding-right: 40px;

  & img {
    margin-right: 16px;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;

const SideNavContent = styled.div`
  & div {
    margin: 16px 0;

    color: ${(props) => props.theme.backGroundColor};
  }
`;
