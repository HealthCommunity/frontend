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
export const NavLogoItem = styled.div`
  font-family: "GangwonEduPower";
  font-weight: 600;
  font-size: 30px;
  color: ${(props) => props.scroll};
  text-align: center;
  width: 10%;
`;

export const NavBoardDiv = styled.div`
  display: flex;
  width: 45%;
  justify-content: center;
  font-family: "GangwonEduPower";
  font-weight: 400;
  font-size: 18px;
  color: #cccccc;
`;

export const NavItemSelect = styled.div`
  display: flex;
  width: 45%;
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
  cursor: pointer;
  color: ${(props) => props.color};
`;
