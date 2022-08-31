import React from "react";
import axios from "axios";
import kakao from "../../../assets/images/sns_kakao.svg";
import naver from "../../../assets/images/sns_naver.png";
import google from "../../../assets/images/sns_google.png";
import github from "../../../assets/images/sns_github.png";

import { SnsLinkList, SnsLinkItem, RowGroup } from "./SnsLoginStyle";

export function SnsLogin() {
  const onClick = () => {
    console.log("서브밋 클릭");

    axios
      .get("http://health-community.site:8080/oauth2/authorization/google")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log("로그인 API 요청 실패", error);
      });
  };

  return (
    <SnsLinkList style={{ height: "300px" }}>
      <SnsLinkItem onClick={onClick}>
        <img src={kakao} alt="카카오 로그인"></img>
      </SnsLinkItem>
      <SnsLinkItem>
        <a href="http://health-community.site:8080/oauth2/authorization/google">
          <img src={google} alt="구글 로그인"></img>
        </a>
      </SnsLinkItem>
    </SnsLinkList>
  );
}
