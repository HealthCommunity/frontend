import styled from "styled-components";

export const NavDiv = styled.div`
  height: ${(props) => props.height};
  display: flex;
  padding: 0px 10%;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.scroll};
  z-index: 2;
  @media screen and (max-width: 1024px) {
    padding: 0;
  }
`;
export const NavLogoItem = styled.p`
  font-family: "GangwonEduPower";
  color: ${(props) => props.scroll};
  text-align: center;
  width: 150px;
  font-size: 40px;
  white-space: nowrap;
`;

export const NavBoardDiv = styled.div`
  display: flex;
  width: 45%;
  justify-content: center;
  font-weight: 400;
  font-size: 18px;
  color: #cccccc;
  white-space: nowrap;
  font-family: "GangwonEduPower";
  @media screen and (max-width: 1024px) {
    width: 50%;
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const NavItemSelect = styled.div`
  display: flex;
  width: 66%;
  justify-content: flex-end;
  align-items: center;
  color: ${(props) => props.scroll};
  @media screen and (max-width: 1024px) {
    width: 45%;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
    margin: 0px;
  }
`;

export const NavItem = styled.div`
  padding: 10px;
  text-align: center;
  font-size: ${(props) => props.theme.fontSizeH4};
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  color: ${(props) => props.color};
  :hover {
    color: ${(props) => props.hover};
  }
`;
