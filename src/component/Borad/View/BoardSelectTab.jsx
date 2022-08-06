import React from "react";
import styled from "styled-components";

const TabList = styled.div`
    display: flex;
    margin-top: 28px;
    width: 100%;
`;

const TabItem = styled.div`
    flex: 1 1;
    font-size: ${(props) => props.theme.fontSizeH4};
    line-height: 47px;
    font-weight: 600;
    letter-spacing: 1px;
    text-align: center;
    border-bottom: pxsolidrgba (230, 234, 238, 0.6);
    text-transform: uppercase;
    cursor: pointer;
`;

export function BoardSelectTab({ onChange }) {
    return (
        <TabList>
            <TabItem>
                <a
                    href="/#"
                    onClick={(e) => {
                        e.preventDefault();
                        onChange("threepowerpost");
                    }}
                >
                    3대력게시판
                </a>
            </TabItem>
            <TabItem>
                <a
                    href="/#"
                    onClick={(e) => {
                        e.preventDefault();
                        onChange("exercisepost");
                    }}
                >
                    운동게시판
                </a>
            </TabItem>
            <TabItem>
                <a
                    href="/#"
                    onClick={(e) => {
                        e.preventDefault();
                        onChange("freepost");
                    }}
                >
                    자유게시판
                </a>
            </TabItem>
        </TabList>
    );
}
