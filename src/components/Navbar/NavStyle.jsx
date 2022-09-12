import styled from "styled-components";

export const NavWrapper = styled.div`
  position: fixed;
  height: ${(props) => props.height};
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.scroll};
  z-index: 2;
`;

export const NavGroup = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

export const NavLogoItem = styled.p`
  font-family: "GangwonEduPower";
  color: ${(props) => props.scroll};
  text-align: center;
  width: 150px;
  font-size: 40px;
  white-space: nowrap;
  @media screen and (max-width: 420px) {
    font-size: 24px;
    width: 100px;
  }
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

  &.miniNav {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    font-size: ${(props) => props.theme.fontSizeH6};
    &.miniNav {
      display: block;
    }

    &.pullNav {
      display: none;
    }
  }
  @media screen and (max-width: 420px) {
    padding: 5px;
  }
`;
