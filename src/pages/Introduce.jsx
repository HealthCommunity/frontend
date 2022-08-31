import React, { useState } from "react";
import Title from "../utils/Title/Title";
import Nav from "../components/Navbar/index";
import styled from "styled-components";

const TitleSession = styled.section`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  margin-top: 300px;
`;

const TitleDiv = styled.div`
  position: fixed;
  margin: 0 auto;
  text-align: center;
  height: auto;
  width: 100%;
  font-size: 700px;
`;

const BoxDiv = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 600px;
  margin: 0 auto;
  margin-bottom: 200px;
  position: relative;
`;

const BoxItem = styled.div`
  font-size: 200px;
  cursor: pointer;
`;

export default function Introduce() {
  const [turn, Setturn] = useState(0);
  const turnClick = (count) => {
    Setturn(count);
  };
  return (
    <>
      <Title name="Introduce" />
      <Nav />
      <TitleSession>
        <TitleDiv>헬쓰리</TitleDiv>
        <BoxDiv>
          {turn === 0 ? (
            <BoxItem onClick={() => turnClick(1)}>BACKEND</BoxItem>
          ) : (
            <BoxItem onClick={() => turnClick(0)}>박훈희</BoxItem>
          )}
        </BoxDiv>
        <BoxDiv>
          {turn === 2 ? (
            <BoxItem onClick={() => turnClick(3)}>BACKEND</BoxItem>
          ) : (
            <BoxItem onClick={() => turnClick(2)}>최창준</BoxItem>
          )}
        </BoxDiv>
        <BoxDiv>
          {turn === 4 ? (
            <BoxItem onClick={() => turnClick(5)}>FRONTEND</BoxItem>
          ) : (
            <BoxItem onClick={() => turnClick(4)}>박송희</BoxItem>
          )}
        </BoxDiv>
        <BoxDiv>
          {turn === 6 ? (
            <BoxItem onClick={() => turnClick(7)}>FRONTEND</BoxItem>
          ) : (
            <BoxItem onClick={() => turnClick(6)}>이지훈</BoxItem>
          )}
        </BoxDiv>
        <BoxDiv>
          {turn === 8 ? (
            <BoxItem onClick={() => turnClick(9)}>WEBDESIGN</BoxItem>
          ) : (
            <BoxItem onClick={() => turnClick(8)}>박지민</BoxItem>
          )}
        </BoxDiv>
      </TitleSession>
    </>
  );
}
