import React from "react";
import styled from "styled-components";

export function SnsLogin() {
  return (
    <SnsLinkList style={{ height: "300px" }}>
      <SnsLinkItem>
        <a href="http://health-community.site:8080/oauth2/authorization/naver">
          <LinkItem style={{ backgroundColor: "#63C33D" }}>
            네이버로 시작하기
          </LinkItem>
        </a>
      </SnsLinkItem>

      <SnsLinkItem>
        <a href="http://health-community.site:8080/oauth2/authorization/google">
          <LinkItem style={{ backgroundColor: "#ffffff" }}>
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
  height: 60px;
  margin-bottom: 20px;
  border-radius: 12px;
  border: 1px solid #cccccc;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.basicColrDark22};
  /* img {
    width: 100%;
    height: 70px;
  } */
`;
