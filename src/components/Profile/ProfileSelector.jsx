import React from "react";
import styled from "styled-components";

function selectorNav(typeName, navSelect) {
  switch (typeName) {
    case "profile":
      return (navSelect.isProfile = true);
    default:
      return (navSelect.isModify = true);
  }
}

export default function ProfileSelector({ onChange, typeName = "profile" }) {
  const navSelect = {
    isProfile: false,
    isModify: false,
  };

  selectorNav(typeName, navSelect);

  return (
    <ProfileDiv>
      <ProfileItemDiv>
        <ProfileItem isActive={navSelect.isProfile}>
          <a
            href="/#"
            onClick={(e) => {
              e.preventDefault();
              onChange("profile");
            }}
          >
            기본정보
          </a>
        </ProfileItem>
        <ProfileItem isActive={navSelect.isModify}>
          <a
            href="/#"
            onClick={(e) => {
              e.preventDefault();
              onChange("profileModify");
            }}
          >
            정보수정
          </a>
        </ProfileItem>
      </ProfileItemDiv>
    </ProfileDiv>
  );
}

const ProfileDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ProfileItemDiv = styled.div`
  display: flex;
  width: 50%;

  @media all and (min-width: 480px) and (max-width: 767px) {
    width: 100%;
  }
  @media all and (max-width: 479px) {
    width: 100%;
  }
`;

const ProfileItem = styled.div`
  flex: 1 1;
  font-size: ${(props) => props.theme.fontSizeH5};
  line-height: 47px;
  font-weight: 600;
  letter-spacing: 1px;
  text-align: center;
  border-bottom: pxsolidrgba (230, 234, 238, 0.6);
  text-transform: uppercase;
  cursor: pointer;
  color: ${(props) =>
    props.isActive
      ? props.theme.colorPointPupple200
      : props.theme.colorFontGrey100};

  a {
    display: block;
  }
`;
