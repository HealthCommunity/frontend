// react hook , react
import React from "react";

// recoil ( 상태관리 )

// react library

// styled-components , Style Files
import styled from "styled-components";

// Components

// Icons , Images
import GoogleIcon from "../../../assets/images/google_logo.svg";
import NaverIcon from "../../../assets/images/naver_logo.svg";

// Share , Utils

export function SnsLogin() {
  return (
    <SnsLinkList style={{ height: "300px" }}>
      <SnsLinkItem>
        <a href="http://health-community.site:8080/oauth2/authorization/naver">
          <LinkItem style={{ backgroundColor: "#63C33D" }}>
            <img
              src={NaverIcon}
              alt="네이버 로그인"
              style={{ width: "24px", height: "24px", fill: "#ffffff" }}
            />
            네이버로 시작하기
          </LinkItem>
        </a>
      </SnsLinkItem>

      <SnsLinkItem>
        <a href="http://health-community.site:8080/oauth2/authorization/google">
          <LinkItem
            style={{ backgroundColor: "#ffffff", border: "1px solid #CCCCCC" }}
          >
            <img
              src={GoogleIcon}
              alt="구글 로그인"
              style={{ width: "24px", height: "24px" }}
            />
            구글로 시작하기
          </LinkItem>
        </a>
      </SnsLinkItem>
    </SnsLinkList>
  );
}

const SnsLinkList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SnsLinkItem = styled.li`
  width: 100%;
`;

const LinkItem = styled.div`
  position: relative;
  height: 60px;
  margin-bottom: 20px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.basicColrDark22};
  img {
    position: absolute;
    left: 20px;
  }
`;
