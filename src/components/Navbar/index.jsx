import { useNavigate, Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isLogin } from "../../atom";
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

const FormStyle = styled.form`
  display: flex;
  align-items: center;
`;

const SelectForm = styled.select`
  margin-right: 5px;
`;

const SearchInput = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: transparent;
  color: ${(props) => props.color};
`;

export default function Nav() {
  const [userData, refetch] = useUserData(); //로그인 상태 유저 데이터 가져옴
  let navigate = useNavigate();
  let { pathname } = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);
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

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    navigate("/search", { state: data });
  };
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
          <NavItem color={pathname.includes("threepowerpost") ? "#0066FF" : ""}>
            3대력 게시판
          </NavItem>
        </Link>
        <Link to="/exercisepost">
          <NavItem color={pathname.includes("exercisepost") ? "#0066FF" : ""}>
            운동 게시판
          </NavItem>
        </Link>
        <Link to="/freepost">
          <NavItem color={pathname.includes("freepost") ? "#0066FF" : ""}>
            자유 게시판
          </NavItem>
        </Link>
      </NavBoardDiv>
      <NavItemSelect scroll={!navdata && ScrollY === 0 ? "white" : "black"}>
        <NavItem>
          {searchOpen ? (
            <FormStyle onSubmit={handleSubmit(onSubmit)}>
              <SelectForm {...register("select")}>
                <option value="통합검색">통합검색</option>
                <option value="작성자">작성자</option>
                <option value="내용">내용</option>
              </SelectForm>
              <SearchInput
                {...register("keyword")}
                type="text"
                style={{
                  outline: "none",
                  width: "100px",
                  borderBottom: `3px solid ${(props) => props.color}`,
                }}
                color={navdata ? "black" : "white"}
              />
              <SearchInput
                type="submit"
                style={{
                  border: "none",
                  cursor: "pointer",
                  borderBottom: "none",
                }}
                color={navdata ? "black" : "white"}
              />
            </FormStyle>
          ) : (
            <img
              src={!navdata && ScrollY === 0 ? SearchColorImage : SearchImage}
              alt="search"
              onClick={() => setSearchOpen((prev) => !prev)}
            />
          )}
        </NavItem>
        <NavItem>
          <img
            src={!navdata && ScrollY === 0 ? RocketColorImage : RocketImage}
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
