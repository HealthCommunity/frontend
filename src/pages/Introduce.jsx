import React from "react";
import Title from "../utils/Title/Title";
import Nav from "../components/Navbar/index";
import { WidthAreaSpace } from "../styles/Layout/CommonLayout";
import styled from "styled-components";
import {
  ContentBackgroud,
  ContentContainer,
} from "../components/User/LoginLayout";

const TitleSession = styled.section`
  position: relative;
  box-sizing: border-box;
  height: 120vh;
  margin-top: 150px;
`;

const TitleDiv = styled.div`
  position: fixed;
  margin: 0 auto;
  text-align: center;
  height: auto;
  font-size: 400px;
`;

export default function Introduce() {
  return (
    <>
      <Title name="Introduce" />
      <Nav />
      <TitleSession>
        <TitleDiv>Who We Are?</TitleDiv>
      </TitleSession>
    </>
  );
}
