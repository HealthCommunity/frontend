import { useNavigate, Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom, isLogin } from "../../atom";
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
import { useState } from "react";

export default function Nav() {
  let navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const clickedToggle = () => {
    setToggle((prev) => !prev);
  };
  const setAtom = useSetRecoilState(isDarkAtom);
  const useAtom = useRecoilValue(isDarkAtom);
  const setLogin = useSetRecoilState(isLogin);
  const useLogin = useRecoilValue(isLogin);
  const isLoginChange = () => {
    axios
      .get("/api/user/logout")
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          console.log("로그아웃 성공");
          navigate("/");
          setLogin((prev) => !prev);
        }
      })
      .catch(function (error) {
        console.log("로그아웃 실패", error);
      });
  };

  return (
    <NavDiv>
      <NavLogoItem>
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
      <NavItemSelect>
        <NavItem>
          <img src={SearchImage} alt="search" />
        </NavItem>
        <NavItem>
          <img src={RocketImage} alt="rocket" />
        </NavItem>
        <NavItem>
          <ToggleBtn onClick={clickedToggle} toggle={toggle}>
            <Circle toggle={toggle} />
          </ToggleBtn>
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
