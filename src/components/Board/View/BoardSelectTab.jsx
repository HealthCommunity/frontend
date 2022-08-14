import React from "react";
import styled from "styled-components";
import ThreeImage from "../../../assets/images/dark_arm.svg";
import ThreeColorImage from "../../../assets/images/color_arm.svg";
import ExerciseImage from "../../../assets/images/dark_dumbbell.svg";
import ExerciseColorImage from "../../../assets/images/color_dumbbell.svg";
import FreeImage from "../../../assets/images/dark_free.svg";
import FreeColorImage from "../../../assets/images/color_free.svg";

export function BoardSelectTab({ onChange, typeName }) {
  return (
    <TabList>
      <TabItem>
        <TabItemImage
          src={typeName === "threepowerpost" ? ThreeColorImage : ThreeImage}
          style={{ marginLeft: "25px" }}
        />
        <a
          href="/#"
          onClick={(e) => {
            e.preventDefault();
            onChange("threepowerpost");
          }}
          style={{
            color: typeName === "threepowerpost" ? "black" : "#888888",
            fontWeight: typeName === "threepowerpost" ? "600" : "400",
          }}
        >
          3대력게시판
        </a>
      </TabItem>
      <TabItem>
        <TabItemImage
          src={typeName === "exercisepost" ? ExerciseColorImage : ExerciseImage}
        />
        <a
          href="/#"
          onClick={(e) => {
            e.preventDefault();
            onChange("exercisepost");
          }}
          style={{
            color: typeName === "exercisepost" ? "black" : "#888888",
            fontWeight: typeName === "exercisepost" ? "600" : "400",
          }}
        >
          운동게시판
        </a>
      </TabItem>
      <TabItem>
        <TabItemImage
          src={typeName === "freepost" ? FreeColorImage : FreeImage}
        />
        <a
          href="/#"
          onClick={(e) => {
            e.preventDefault();
            onChange("freepost");
          }}
          style={{
            color: typeName === "freepost" ? "black" : "#888888",
            fontWeight: typeName === "freepost" ? "600" : "400",
          }}
        >
          자유게시판
        </a>
      </TabItem>
    </TabList>
  );
}

const TabList = styled.div`
  display: flex;
  width: 100%;
`;

const TabItem = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  display: flex;
  align-items: center;
  margin: 0px 20px;
  letter-spacing: 1px;
  cursor: pointer;
  a {
    font-family: "GangwonEduPowerExtraBoldA";
  }
`;

export const TabItemImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 5px;
`;
