// react hook , react
import React from "react";

// recoil ( 상태관리 )

// react library

// styled-components , Style Files
import styled from "styled-components";

// Components

// Icons , Images
import ThreeImage from "../../../assets/images/dark_arm.svg";
import ThreeColorImage from "../../../assets/images/color_arm.svg";
import ExerciseImage from "../../../assets/images/dark_dumbbell.svg";
import ExerciseColorImage from "../../../assets/images/color_dumbbell.svg";
import FreeImage from "../../../assets/images/dark_free.svg";
import FreeColorImage from "../../../assets/images/color_free.svg";

// Share , Utils

export function BoardSelectTab({ onChange, typeName }) {
  return (
    <TabList>
      <TabItem>
        <a
          href="/#"
          onClick={(e) => {
            e.preventDefault();
            onChange("threepowerpost");
          }}
          style={{
            color: typeName === "threepowerpost" ? "black" : "#888888",
            fontWeight: typeName === "threepowerpost" ? "600" : "400",
            display: "flex",
            alignItems: "center",
          }}
        >
          <TabItemImage
            src={typeName === "threepowerpost" ? ThreeColorImage : ThreeImage}
          />
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
          style={{
            color: typeName === "exercisepost" ? "black" : "#888888",
            fontWeight: typeName === "exercisepost" ? "600" : "400",
            display: "flex",
            alignItems: "center",
          }}
        >
          <TabItemImage
            src={
              typeName === "exercisepost" ? ExerciseColorImage : ExerciseImage
            }
          />
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
          style={{
            color: typeName === "freepost" ? "black" : "#888888",
            fontWeight: typeName === "freepost" ? "600" : "400",
            display: "flex",
            alignItems: "center",
          }}
        >
          <TabItemImage
            src={typeName === "freepost" ? FreeColorImage : FreeImage}
          />
          자유게시판
        </a>
      </TabItem>
    </TabList>
  );
}

const TabList = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 1440px) {
    padding: 0px 10px;
  }
  @media screen and (max-width: 1024px) {
    padding: 0px 10px;
  }
  @media screen and (max-width: 600px) {
    padding: 0px 5px;
  }
  @media screen and (max-width: 420px) {
    margin: 5px;
  }
`;

const TabItem = styled.div`
  font-weight: 400;
  font-size: 24px;
  margin-right: 50px;
  letter-spacing: 1px;
  white-space: nowrap;
  font-family: "GangwonEduPower";
  cursor: pointer;
  @media screen and (max-width: 1024px) {
    font-size: 24px;
    margin-right: 5px;
  }
  @media screen and (max-width: 600px) {
    font-size: 16px;
    margin-right: 5px;
  }
  @media screen and (max-width: 420px) {
    font-size: 12px;
    margin-right: 1px;
  }
`;

export const TabItemImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 12px;

  @media screen and (max-width: 420px) {
    width: 24px;
    height: 24px;
    margin: 5px;
  }
`;
