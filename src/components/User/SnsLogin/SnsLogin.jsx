import React from "react";

import { SnsLinkList, SnsLinkItem, LinkItem } from "./SnsLoginStyle";

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
