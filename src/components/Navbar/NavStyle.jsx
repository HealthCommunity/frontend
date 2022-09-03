import styled from "styled-components";

export const NavDiv = styled.div`
  height: ${(props) => props.height};
  display: flex;
  margin: 0 auto;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.scroll};
  z-index: 2;
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
  width: 25%;
  justify-content: center;
  font-weight: 400;
  font-size: 18px;
  color: #cccccc;
  white-space: nowrap;
  font-family: "GangwonEduPower";
`;

export const NavItemSelect = styled.div`
  display: flex;
  width: 55%;
  justify-content: flex-end;
  align-items: center;
  margin: 0px 50px;
  color: ${(props) => props.scroll};
`;

export const NavItem = styled.div`
  padding: 10px;
  text-align: center;
  font-size: ${(props) => props.theme.fontSizeH5};
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  color: ${(props) => props.color};
`;
