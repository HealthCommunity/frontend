// react hook , react
import React from "react";

// recoil ( 상태관리 )

// react library

// styled-components , Style Files
import styled from "styled-components";

// Components

// Icons , Images

// Share , Utils

export function SNSGroup({ children, selected }) {
  const elements = React.Children.toArray(children);
  return <>{elements.find(({ props }) => selected === props.name)}</>;
}

export function GroupItem({ children }) {
  return <>{children}</>;
}

export function SnsSelectTab({ onChange, typeName, text }) {
  let navSelect = typeName === "emaillogin";

  return (
    <SelectTabBar>
      <SelectTabItem isActive={navSelect}>
        <a
          href="/#"
          onClick={(e) => {
            e.preventDefault();
            onChange("emaillogin");
          }}
        >
          {`아이디로 ${text}`}
        </a>
      </SelectTabItem>
      <SelectTabItem isActive={!navSelect}>
        <a
          href="/#"
          onClick={(e) => {
            e.preventDefault();
            onChange("snslogin");
          }}
        >
          {`SNS로 ${text}`}
        </a>
      </SelectTabItem>
    </SelectTabBar>
  );
}

const SelectTabBar = styled.div`
  display: flex;
  margin-top: 28px;
  width: 100%;
  margin-bottom: 28px;
  @media screen and (max-width: 420px) {
    margin: 0px 0px 5px 0px;
  }
`;

const SelectTabItem = styled.div`
  flex: 1 1;
  font-size: ${(props) => props.theme.fontSizeH4};
  font-weight: 400;
  line-height: 26px;
  text-align: center;
  cursor: pointer;
  font-weight: ${(props) => (props.isActive ? 700 : 400)};
  color: ${(props) => (props.isActive ? "#0066FF" : "#888888")};
  a {
    display: block;
  }
`;
