import React from "react";

import kakao from "../../../assets/images/sns_kakao.svg";
import naver from "../../../assets/images/sns_naver.png";
import google from "../../../assets/images/sns_google.png";
import github from "../../../assets/images/sns_github.png";

import { SnsLinkList, SnsLinkItem, RowGroup } from "./SnsLoginStyle";

export function SnsLogin() {
    return (
        <SnsLinkList style={{ height: "300px" }}>
            <SnsLinkItem>
                <a href="/#">
                    <img src={kakao} alt="카카오 로그인"></img>
                </a>
            </SnsLinkItem>
            <RowGroup>
                <SnsLinkItem>
                    <a href="/#">
                        <img src={naver} alt="네이버 로그인"></img>
                    </a>
                </SnsLinkItem>

                <SnsLinkItem>
                    <a href="/#">
                        <img src={google} alt="구글 로그인"></img>
                    </a>
                </SnsLinkItem>

                <SnsLinkItem>
                    <a href="/#">
                        <img src={github} alt="깃허브 로그인"></img>
                    </a>
                </SnsLinkItem>
            </RowGroup>
        </SnsLinkList>
    );
}
