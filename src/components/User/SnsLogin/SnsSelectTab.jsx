import React from "react";
import styled from "styled-components";

import { SelectTabBar, SelectTabItem } from "./SnsLoginStyle";

export function SnsSelectTab({ onChange, typeName }) {
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
                    아이디로 가입
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
                    SNS로 가입
                </a>
            </SelectTabItem>
        </SelectTabBar>
    );
}
