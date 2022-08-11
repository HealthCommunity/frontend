import styled from "styled-components";
export const NavDiv = styled.div`
  height: 100px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  top: 0;
`;
export const NavLogoItem = styled.div`
  font-family: "GangwonEduPower";
  font-weight: 600;
  font-size: 30px;
  color: #222222;
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
`;

export const NavItem = styled.div`
  padding: 10px;
  text-align: center;
  font-size: ${(props) => props.theme.fontSizeH5};
  font-weight: 600;
  cursor: pointer;
`;
