// react hook , react
import React from "react";

// recoil ( 상태관리 )

// react library

// styled-components , Style Files
import styled from "styled-components";

// Components

// Icons , Images

// Share , Utils

function selectorNav(typeName, navSelect) {
  switch (typeName) {
    case "profile":
      return (navSelect.isProfile = true);
    default:
      return (navSelect.isModify = true);
  }
}

export function SelectGroup({ children, selected }) {
  const elements = React.Children.toArray(children);
  return <>{elements.find(({ props }) => selected === props.name)}</>;
}

export function SlectItem({ children }) {
  return <>{children}</>;
}

export function ProfileSelector({ onChange, typeName = "profile" }) {
  const navSelect = {
    isProfile: false,
  };

  selectorNav(typeName, navSelect);

  return (
    <ProfileDiv>
      <ProfileItem isActive={navSelect.isProfile}>
        <a
          href="/#"
          onClick={(e) => {
            e.preventDefault();
            onChange("profile");
          }}
        >
          나의 정보
        </a>
      </ProfileItem>
    </ProfileDiv>
  );
}

const ProfileDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 70px;
  padding-bottom: 20px;

  @media screen and (max-width: 1024px) {
    padding: 0 auto;
    padding-top: 20px;
  }
  @media screen and (max-width: 600px) {
    padding: 0 auto;
    padding-top: 10px;
  }
  @media screen and (max-width: 420px) {
    padding: 0 auto;
    padding-top: 0px;
  }
`;

const ProfileItem = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: ${(props) =>
    props.isActive ? "#0066FF" : props.theme.colorFontGrey100};
  cursor: pointer;

  a {
    display: block;
  }
`;
